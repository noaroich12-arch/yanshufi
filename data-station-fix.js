/* תיקוני תחנות (15.11.2026):
   1. WORD_PATCH: מילים שחזרו בין תחנות (בעיקר בין "זוגות תנועות" לבין "שתי אותיות תנועה") מוחלפות במילים חדשות.
      מבנה: { מזהה-שלב: { מילה-ישנה: [מילה-חדשה, פירוש] } }.
   2. MORE_PIC: תמונות למילים של התחנות החדשות, כדי שמשחקי הזיכרון והבנייה יעבדו גם שם. */
window.WORD_PATCH = {
  /* עולם 4 - שתי אותיות תנועה: המילים שכבר למדו בתחנת "זוגות תנועות" מוחלפות במילים ארוכות ועשירות יותר */
  ee:{ eat:["queen","מלכה"], see:["sweet","מתוק"], bee:["street","רחוב"], feet:["speed","מהירות"], sea:["cheese","גבינה"], tea:["wheel","גלגל"], leaf:["steam","אדים"], seed:["cream","שמנת"] },
  ai:{ aim:["chain","שרשרת"], aid:["plain","פשוט, מישור"], rain:["trail","שביל"], tail:["faint","חלש, להתעלף"], mail:["spray","ריסוס, לרסס"], wait:["clay","חימר"], day:["pray","להתפלל"], say:["stray","תועה, משוטט"] },
  oa:{ oak:["coast","חוף"], oat:["roast","לצלות, צלי"], boat:["throat","גרון"], coat:["bowl","קערה"], goat:["blow","לנשוף"], road:["flow","לזרום"], soap:["glow","לזהור"], loaf:["crow","עורב"], foam:["tiptoe","ללכת על קצות האצבעות"] },
  igh:{ high:["fright","בהלה"], night:["slight","קל, מועט"], light:["tonight","הלילה"], right:["grind","לטחון"], sight:["remind","להזכיר"], tie:["blind","עיוור"], pie:["mild","עדין, מתון"], lie:["tried","ניסה"], sigh:["fried","מטוגן"] },
  oo:{ moon:["broom","מטאטא"], zoo:["goose","אווז"], food:["igloo","איגלו"], room:["school","בית ספר"], cool:["noodle","אטרייה"], pool:["shoot","לירות, לצלם"], book:["roof","גג"], look:["smooth","חלק"], cook:["stood","עמד"], foot:["shook","ניער"], wood:["brook","נחל קטן"], boot:["cookie","עוגייה"], good:["football","כדורגל"], hook:["bloom","פריחה, לפרוח"] },
  /* מילים בודדות שחזרו בין שני שלבים */
  ng:{ fox:["tax","מס"], six:["fix","לתקן"] },
  ck:{ cup:["rack","מדף"] },
  cg:{ ice:["dance","ריקוד"] },
  ph:{ phone:["paragraph","פסקה"], elephant:["phantom","רוח רפאים"] },
  open:{ robot:["hero","גיבור"], music:["hello","שלום"], tulip:["yoga","יוגה"], bonus:["echo","הד"] },
  schwa:{ lemon:["vanilla","וניל"] },
  stress:{ banana:["guitar","גיטרה"], pencil:["police","משטרה"], table:["window","חלון"], hamburger:["tomorrow","מחר"] }
};

/* תמונות למילים (אימוג'י). המשחק מוסיף רק מילה שעוד אין לה תמונה, ואימוג'י שעוד לא בשימוש */
Object.assign(window.MORE_PIC = window.MORE_PIC || {}, {
  /* זוגות תנועות */
  bee:["🐝","pee"], feet:["👣","pee"], seed:["🌱","pee"],
  sea:["🌊","pea"], meat:["🥩","pea"],
  pail:["🪣","pai"], hay:["🌾","pay"],
  food:["🍲","poom"], zoo:["🦁","poom"], room:["🛋️","poom"], boot:["🥾","poom"], pool:["🏊","poom"], tool:["🔧","poom"],
  foot:["🦶","poob"], wood:["🪵","poob"], hook:["🪝","poob"], wool:["🧶","poob"],
  /* שתי אותיות תנועה */
  queen:["👑","ee"], street:["🛣️","ee"], cheese:["🧀","ee"], wheel:["🛞","ee"], steam:["♨️","ee"], beach:["🏖️","ee"], teeth:["🦷","ee"], dream:["💭","ee"], sleep:["😴","ee"], green:["💚","ee"],
  chain:["⛓️","ai"], clay:["🏺","ai"], spray:["🧴","ai"], paint:["🎨","ai"], tray:["🍽️","ai"], brain:["🧠","ai"], pray:["🙏","ai"],
  roast:["🍗","oa"], bowl:["🥣","oa"], show:["🎭","oa"],
  fright:["😱","igh"], fried:["🍳","igh"], flight:["🛫","igh"],
  school:["🏫","oo"], noodle:["🍜","oo"], broom:["🧹","oo"], roof:["🏠","oo"], cookie:["🍪","oo"], football:["⚽","oo"], brook:["🏞️","oo"], bloom:["🌸","oo"], igloo:["🏔️","oo"]
});
