# מייצר קובץ שמע בקול טבעי (Microsoft Emma) לכל מילה ומשפט במשחק, ושומר מפה audio/en/map.js
# שימוש: python tools/make_audio_en.py   (אחרי הוספת מילים חדשות, פשוט מריצים שוב: רק החדשות נוצרות)
import asyncio, hashlib, json, os, subprocess, sys
import edge_tts
VOICE = 'en-US-EmmaNeural'
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'audio', 'en')
os.makedirs(OUT, exist_ok=True)
items = json.loads(subprocess.check_output(['node', os.path.join(ROOT, 'tools', 'collect.js')]).decode('utf-8'))
mp, todo = {}, []
for key, text in items:
    name = hashlib.md5(key.encode('utf-8')).hexdigest()[:12] + '.mp3'
    mp[key] = name
    p = os.path.join(OUT, name)
    if not os.path.exists(p) or os.path.getsize(p) < 500:
        todo.append((text, name))
print(len(items), 'texts,', len(todo), 'to generate', flush=True)
sem = asyncio.Semaphore(6)
fails = []
done = 0
async def one(text, name):
    global done
    async with sem:
        for attempt in range(5):
            try:
                await edge_tts.Communicate(text, VOICE, rate='-10%').save(os.path.join(OUT, name))
                if os.path.getsize(os.path.join(OUT, name)) >= 500:
                    done += 1
                    if done % 500 == 0: print(done, 'done', flush=True)
                    return
            except Exception:
                pass
            await asyncio.sleep(1.5 * (attempt + 1))
        fails.append((text, name))
async def main():
    await asyncio.gather(*[one(t, n) for t, n in todo])
asyncio.run(main())
bad = {n for _, n in fails}
mp = {k: v for k, v in mp.items() if v not in bad}
with open(os.path.join(OUT, 'map.js'), 'w', encoding='utf-8') as f:
    f.write('window.EN_AUDIO = ' + json.dumps(mp, ensure_ascii=False) + ';\n')
print('done. failed:', len(fails))
for t, _ in fails[:20]: print('  FAIL', t)
