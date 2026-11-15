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
  oo:{ moon:["broom","מטאטא"], zoo:["goose","אווז"], food:["igloo","איגלו"], room:["school","בית ספר"], cool:["noodle","אטרייה"], pool:["shoot","לירות, לצלם"], book:["roof","גג"], look:["smooth","חלק"], cook:["stood","עמד"], foot:["shook","ניער"], wood:["brook","נחל קטן"], boot:["crook","נוכל"], good:["wooden","עשוי עץ"], hook:["bloom","פריחה, לפרוח"] },
  /* מילים בודדות שחזרו בין שני שלבים */
  ng:{ fox:["tax","מס"], six:["fix","לתקן"] },
  ck:{ cup:["rack","מדף"] },
  cg:{ ice:["dance","ריקוד"] },
  ph:{ phone:["paragraph","פסקה"], elephant:["phantom","רוח רפאים"] },
  open:{ robot:["hero","גיבור","ˈhe·ro"], music:["yoga","יוגה","ˈyo·ga"] },
  schwa:{ lemon:["vanilla","וניל"] },
  stress:{ banana:["guitar","גיטרה"], pencil:["police","משטרה"], table:["window","חלון"], hamburger:["tomorrow","מחר"] }
};

/* משפטים ופסקאות של שתי תחנות התנועות (זוגות תנועות, ושתי אותיות תנועה), בנויים מחדש:
   כל מילה מרכזית במשפט מכילה צמד תנועות שכבר למדו בתחנה (או שמות עם צמד: Jean, Dean, Kay...).
   רק מילות הדקדוק הכי קטנות (the, a, is, in, to, it...) נשארות. בלי Mom, Tom, pet, sat וכדומה.
   נבדק אוטומטית בסקריפט check_sent.py. */
window.SENT_REWRITE = {
  pv0:{
    reads:[["a goat in a boat","עז בסירה"],["rain on the road","גשם על הכביש"],["Jean can eat a leaf.","ג׳ין יכולה לאכול עלה."],["Dean can see a seal.","דין יכול לראות כלב ים."],["Pay Gail for the soap.","שלמי לגייל על הסבון."]],
    para:[["Jean has a goat.","לג׳ין יש עז."],["The goat is in a boat.","העז בתוך סירה."],["The boat is on the sea.","הסירה על הים."],["Rain, rain, rain!","גשם, גשם, גשם!"],["The goat can eat a leaf in the rain.","העז יכולה לאכול עלה בגשם."],["Jean sees the seal. The day is neat!","ג׳ין רואה את כלב הים. היום מסודר!"]]
  },
  pai:{
    reads:[["a pail of rain","דלי של גשם"],["Gail paid the maid.","גייל שילמה לעוזרת הבית."],["The maid laid a nail on the rail.","עוזרת הבית הניחה מסמר על המעקה."],["Gail can wait for the mail.","גייל יכולה לחכות לדואר."],["Aim at the nail, Gail.","כווני אל המסמר, גייל."]],
    para:[["Gail is a maid.","גייל היא עוזרת בית."],["Gail has a pail and a nail.","לגייל יש דלי ומסמר."],["The mail is on the rail.","הדואר על המעקה."],["Gail can not wait.","גייל לא יכולה לחכות."],["Gail laid the mail in the pail.","גייל הניחה את הדואר בדלי."],["The pail can not fail!","הדלי לא יכול להיכשל!"]]
  },
  pay:{
    reads:[["a day in May","יום במאי"],["Kay may say yay.","קיי אולי תגיד יי."],["Ray can pay the maid.","ריי יכול לשלם לעוזרת הבית."],["Pay for the hay.","שלמי על החציר."],["Lay the hay on the way.","הניחי את החציר בדרך."]],
    para:[["Ray has a jay.","לריי יש ג׳אי."],["The jay can say, Ray, Ray!","הג׳אי יודע להגיד: ריי, ריי!"],["The jay lay on the hay.","הג׳אי שכב על החציר."],["It is a day in May.","זה יום במאי."],["Ray and the jay play on the bay.","ריי והג׳אי משחקים על המפרץ."],["Yay, yay, yay!","יי, יי, יי!"]]
  },
  pee:{
    reads:[["a bee on a seed","דבורה על זרע"],["Dean can keep the eel.","דין יכול לשמור את הצלופח."],["Lee can feed the deer.","לי יכולה להאכיל את האייל."],["Meet Pete in a week.","היפגשי עם פיט בעוד שבוע."],["Pete can peel a beet.","פיט יודע לקלף סלק."]],
    para:[["Pete has a jeep.","לפיט יש ג׳יפ."],["Lee can see the jeep.","לי יכולה לראות את הג׳יפ."],["A deer is in the way.","אייל נמצא בדרך."],["Beep, beep!","ביפ, ביפ!"],["The deer can see Pete.","האייל יכול לראות את פיט."],["Pete and Lee feed the deer a beet.","פיט ולי מאכילים את האייל בסלק."]]
  },
  pea:{
    reads:[["a leaf on the sea","עלה על הים"],["Jean can eat meat.","ג׳ין יכולה לאכול בשר."],["Dean can beat the team.","דין יכול לנצח את הקבוצה."],["Lee can heal the seal.","לי יכולה לרפא את כלב הים."],["The seat is neat.","המושב מסודר."]],
    para:[["Jean is at the sea.","ג׳ין נמצאת בים."],["A seal sees Jean.","כלב ים רואה את ג׳ין."],["Jean has meat and tea.","לג׳ין יש בשר ותה."],["The seal can eat the meat.","כלב הים יכול לאכול את הבשר."],["Jean can leap on a seat.","ג׳ין יכולה לקפוץ על מושב."],["The seal and Jean meet each week.","כלב הים וג׳ין נפגשים בכל שבוע."]]
  },
  poa:{
    reads:[["a goat in a coat","עז במעיל"],["Joan can soak the loaf.","ג׳ואן יכולה להשרות את הכיכר."],["The toad can roam on the road.","הקרפדה יכולה לשוטט על הכביש."],["Joan has a goal.","לג׳ואן יש מטרה."],["Keep the soap in the boat.","שמרי את הסבון בסירה."]],
    para:[["Joan has a goat.","לג׳ואן יש עז."],["The goat has a coat.","לעז יש מעיל."],["Joan and the goat sail a boat.","ג׳ואן והעז מפליגות בסירה."],["The goat can eat oats.","העז יכולה לאכול שיבולת שועל."],["Joan can soak the oats.","ג׳ואן יכולה להשרות את השיבולת שועל."],["The goat can roam on the road.","העז יכולה לשוטט על הכביש."]]
  },
  pigh:{
    reads:[["a pie at night","פשטידה בלילה"],["I sigh at night.","אני נאנחת בלילה."],["Dean can tie the sail.","דין יכול לקשור את המפרש."],["Is it right?","זה נכון?"],["The light is on at night.","האור דולק בלילה."]],
    para:[["Dean has a pie.","לדין יש פשטידה."],["It is night.","עכשיו לילה."],["The light is on.","האור דולק."],["Dean might eat the pie.","אולי דין יאכל את הפשטידה."],["A bee sees the pie.","דבורה רואה את הפשטידה."],["The bee and Dean fight for the pie!","הדבורה ודין נלחמים על הפשטידה!"]]
  },
  poom:{
    reads:[["a hoop in the room","חישוק בחדר"],["The moon is cool.","הירח קריר."],["Soon it is noon.","בקרוב יהיה צהריים."],["Lee can zoom to the zoo.","לי יכולה לדהור אל גן החיות."],["Oops! The boot is in the pool!","אופס! המגף בבריכה!"]],
    para:[["Lee has a hoop.","ללי יש חישוק."],["The hoop can zoom on the road.","החישוק יכול לדהור על הכביש."],["Zoom, zoom, zoom!","זום, זום, זום!"],["The hoop is in the pool.","החישוק בבריכה."],["Lee has a tool and food.","ללי יש כלי עבודה ואוכל."],["Soon Lee can eat at noon.","בקרוב לי יכולה לאכול בצהריים."]]
  },
  poob:{
    reads:[["a good book","ספר טוב"],["Look at the moon.","תסתכלי על הירח."],["Lee can cook food.","לי יכולה לבשל אוכל."],["Ray took the wool.","ריי לקח את הצמר."],["The foot is in the boot.","כף הרגל במגף."]],
    para:[["Dean took a good book.","דין לקח ספר טוב."],["He is in the room.","הוא בחדר."],["Lee can cook good food.","לי יכולה לבשל אוכל טוב."],["Lee took a look at Dean.","לי הציצה בדין."],["Dean can hook the wool.","דין יכול לתפוס את הצמר בקרס."],["Dean and Lee look at the moon.","דין ולי מסתכלים על הירח."]]
  },
  pr:{
    reads:[["a jeep in the rain","ג׳יפ בגשם"],["Joan can eat a pie at night.","ג׳ואן יכולה לאכול פשטידה בלילה."],["Look at the moon and the sea.","תסתכלי על הירח ועל הים."],["Dean has a boat and a coat.","לדין יש סירה ומעיל."],["Kay may keep a good book.","קיי אולי תשמור ספר טוב."]],
    para:[["Joan and Dean go to the sea.","ג׳ואן ודין הולכים לים."],["It is a cool day.","זה יום קריר."],["Joan and Dean sail in a boat.","ג׳ואן ודין מפליגים בסירה."],["Joan sees a seal.","ג׳ואן רואה כלב ים."],["Dean can eat a pie.","דין יכול לאכול פשטידה."],["It is a good day!","זה יום טוב!"]]
  },
  /* עולם 4: שתי אותיות תנועה */
  ee:{
    reads:[["a clean sheet","סדין נקי"],["a peach and a pea","אפרסק ואפונה"],["Pete can sweep.","פיט יודע לטאטא."],["The seal can leap.","כלב הים יודע לקפוץ."],["Keep the heat in.","שמרי את החום בפנים."]],
    para:[["Lee has a seal, Squeak.","ללי יש כלב ים, סקוויק."],["Squeak is a sweet seal.","סקוויק הוא כלב ים מתוק."],["Each week, Lee feeds Squeak a meal.","בכל שבוע, לי מאכילה את סקוויק בארוחה."],["Squeak can eat each peach.","סקוויק יכול לאכול כל אפרסק."],["Squeak can sleep in the heat.","סקוויק יכול לישון בחום."],["Lee peeks at Squeak. Sweet seal!","לי מציצה בסקוויק. איזה כלב ים מתוק!"]]
  },
  ai:{
    reads:[["a pail of rain","דלי של גשם"],["a day in May","יום במאי"],["Gail may stay.","גייל אולי תישאר."],["The rain is gray.","הגשם אפור."],["Ray paid for the bait.","ריי שילם על הפיתיון."]],
    para:[["Gail and Ray sail on the bay.","גייל וריי שטים במפרץ."],["Ray has bait in a pail.","לריי יש פיתיון בדלי."],["Gail stays by the sail.","גייל נשארת ליד המפרש."],["Ray can wait. Wait, wait, wait!","ריי יכול לחכות. לחכות, לחכות, לחכות!"],["The rain is on the bay.","הגשם על המפרץ."],["Gail and Ray play on the bay.","גייל וריי משחקים על המפרץ."]]
  },
  oa:{
    reads:[["a toad on a road","קרפדה על כביש"],["a row of boats","שורה של סירות"],["Joan can row.","ג׳ואן יודעת לחתור."],["The crow is slow.","העורב איטי."],["Do not moan, Joe!","אל תתבכיין, ג׳ו!"]],
    para:[["Joan has a toad, Bo.","לג׳ואן יש קרפדה, בו."],["Bo can croak.","בו יודע לקרקר."],["Joan and Bo row a boat.","ג׳ואן ובו חותרים בסירה."],["A crow is on the boat.","עורב על הסירה."],["Bo croaks at the crow.","בו מקרקר על העורב."],["Go, Bo, go!","קדימה, בו, קדימה!"]]
  },
  igh:{
    reads:[["a tight tie","עניבה הדוקה"],["a mild night","לילה נעים"],["Dean is right.","דין צודק."],["Do not fight, Kay!","אל תריבי, קיי!"],["The day is mild.","היום נעים, לא חם ולא קר."]],
    para:[["It is night.","עכשיו לילה."],["Dean has a fright.","דין נבהל."],["Is it a deer? Is it a bee?","האם זה אייל? האם זו דבורה?"],["Lee can find the light.","לי יכולה למצוא את האור."],["The light is bright.","האור בהיר."],["Dean sighs, and Lee is kind.","דין נאנח, ולי נחמדה."]]
  },
  oo:{
    reads:[["a hoop in the pool","חישוק בבריכה"],["a good book","ספר טוב"],["Look at the moon.","תסתכלי על הירח."],["The moose is cool.","האייל הוא מגניב."],["Boo! Lee can hoot.","בו! לי יודעת לצעוק הוו."]],
    para:[["Dean has a goose, Zoom.","לדין יש אווז, זום."],["Zoom is on the roof.","זום על הגג."],["Dean has a broom.","לדין יש מטאטא."],["Shoo, Zoom, shoo!","שו, זום, שו!"],["Zoom can swoop to Dean.","זום יודע לצלול אל דין."],["Dean and Zoom are cool.","דין וזום מגניבים."]]
  },
  ew:{
    reads:[["a few new clues","כמה רמזים חדשים"],["a blue statue","פסל כחול"],["Sue knew it.","סו ידעה את זה."],["Andrew can rescue Lee.","אנדרו יכול להציל את לי."],["Sue can chew the stew.","סו יודעת ללעוס את התבשיל."]],
    para:[["It is Tuesday.","היום יום שלישי."],["Andrew and Sue go to the zoo.","אנדרו וסו הולכים לגן החיות."],["Sue sees a newt in a pool.","סו רואה טריטון בבריכה."],["Andrew: Is it true?","אנדרו: זה נכון?"],["Sue: It is a newt. I knew it!","סו: זה טריטון. ידעתי!"],["Andrew and Sue are in the news!","אנדרו וסו בחדשות!"]]
  },
  r4:{
    reads:[["a goat on a road","עז על כביש"],["a hook and a coat","וו ומעיל"],["Joan paints the boat.","ג׳ואן צובעת את הסירה."],["The crow flew to the roof.","העורב עף לגג."],["Keep the boat in the sea.","שמרי את הסירה בים."]],
    para:[["Dean and Joan go to the beach.","דין וג׳ואן הולכים לחוף."],["They see a goat by the road.","הם רואים עז ליד הכביש."],["The goat chews on a weed.","העז לועסת עשב שוטה."],["Joan feeds the goat a few oats.","ג׳ואן מאכילה את העז בקצת שיבולת שועל."],["The goat bleats.","העז פועה."],["Dean and Joan play on the beach.","דין וג׳ואן משחקים בחוף."]]
  }
};

/* צליל פר-מילה: בשלב oo הצמד קצר (אֻ) במילים האלה. ברירת המחדל של השלב היא אוּ ארוכה */
window.WSND_PATCH = {
  /* שלב הכפלת אות: הסיומת ed נשמעת ט או ד, לא "אֶד" */
  dbl:{ stopped:{e:"שקטה",d:"ט"}, clapped:{e:"שקטה",d:"ט"}, chopped:{e:"שקטה",d:"ט"}, planned:{e:"שקטה",d:"ד"}, hugged:{e:"שקטה",d:"ד"} },
  kn:{ comb:{o:"ארוכה, כמו ב-home"} },
  oo:{ stood:{oo:"אֻ קצרה"}, shook:{oo:"אֻ קצרה"}, brook:{oo:"אֻ קצרה"}, crook:{oo:"אֻ קצרה"}, wooden:{oo:"אֻ קצרה"} }
};

/* פירושים למילים שבמשפטים החדשים (לחיצה על מילה) */
Object.assign(window.MORE_SENT_HE = window.MORE_SENT_HE || {}, {
  stays:"נשארת, נשאר", boats:"סירות", sighs:"נאנח, נאנחת", swoop:"לצלול (כמו ציפור)", clues:"רמזים",
  smallest:"הכי קטן", brightest:"הכי בהיר", needle:"מחט", hammer:"פטיש", papers:"ניירות",
  dan:"דן", lets:"נותן, מניח", wigs:"פאות", don:"דון", russ:"ראס", shep:"שפ", shuts:"סוגר", chuck:"צ׳אק", thank:"להודות", gong:"גונג", ding:"דינג", dong:"דונג", stan:"סטן", ken:"קן", pups:"גורים", cups:"כוסות", yummy:"טעים", pretty:"יפה",
  plate:"צלחת", hopes:"מקווה", tunes:"מנגינות", carl:"קארל", sorts:"ממיין", perches:"מתיישבת על ענף או מוט", boils:"רותח"
});

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
