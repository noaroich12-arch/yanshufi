// אוסף כל מילה ומשפט באנגלית שהמשחק מקריא, ומדפיס רשימה [מפתח, טקסט] כ-JSON
const fs = require('fs'), vm = require('vm'), path = require('path');
const dir = path.resolve(__dirname, '..');
const sb = { console }; sb.window = sb; vm.createContext(sb);
for (const f of fs.readdirSync(dir).filter(f => /^data-.*\.js$/.test(f) && !/phonemes/.test(f))) {
  let src = fs.readFileSync(path.join(dir, f), 'utf8').replace(/^(const|let)\s+/mg, 'var ');
  try { vm.runInContext(src, sb, { filename: f }); } catch (e) { /* קובץ עם תלות באחר: מדלגים */ }
}
const re = /^[A-Za-z][A-Za-z0-9'’ ,.!?;:\-\/"“”…]*$/;
const out = new Set(), seen = new Set();
function add(s) {
  s = s.trim(); if (!s || !re.test(s)) return;
  s.split(/\s*\/\s*/).forEach(p => { p = p.trim(); if (p) out.add(p); });
}
function walk(o, d) {
  if (d > 8 || o == null || seen.has(o)) return;
  if (typeof o === 'string') { add(o); return; }
  if (typeof o !== 'object') return;
  seen.add(o);
  for (const k of Object.keys(o)) walk(o[k], d + 1);
}
for (const k of Object.keys(sb)) { if (k === 'console' || k === 'window') continue; walk(sb[k], 0); }
const h = fs.readFileSync(path.join(dir, 'המסע של ינשופי.html'), 'utf8');
for (const m of h.matchAll(/speak\('([^'$]+)'/g)) add(m[1]);
const words = new Set();
for (const s of out) for (const w of s.split(/\s+/)) { const c = w.replace(/[^A-Za-z']/g, ''); if (c) words.add(c); }
for (const w of words) out.add(w);
const SMALL = new Set('a i am an as at be by do go he hi if in is it me my no of oh ok on or so to up us we'.split(' '));
const seenK = new Set(), res = [];
for (const s of out) {
  const k = s.toLowerCase().replace(/\s+/g, ' ').trim();
  if (k.length <= 2 && !SMALL.has(k)) continue;
  if (seenK.has(k)) continue;
  seenK.add(k); res.push([k, s]);
}
process.stdout.write(JSON.stringify(res));
