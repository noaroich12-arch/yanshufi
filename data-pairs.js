/* תחנה חדשה: זוגות תנועות (מיד אחרי התנועות הקצרות).
   שלב אחד לכל צמד, רק במילים שאפשר לקרוא עם מה שכבר למדנו: עיצור, צמד, עיצור.
   world 0.5 = בין תחנה 1 לתחנה 2, בלי למספר מחדש את שאר העולמות. */
window.NEW_LEVELS = [
 {id:"pv0",  world:0.5, title:"הרעיון: שתי תנועות ביחד", key:"ai·ee", after:"r1"},
 {id:"pai",  world:0.5, title:"ai (rain)", key:"ai", after:"pv0"},
 {id:"pay",  world:0.5, title:"ay (day)", key:"ay", after:"pai"},
 {id:"pee",  world:0.5, title:"ee (bee)", key:"ee", after:"pay"},
 {id:"pea",  world:0.5, title:"ea (sea)", key:"ea", after:"pee"},
 {id:"poa",  world:0.5, title:"oa (boat)", key:"oa", after:"pea"},
 {id:"pigh", world:0.5, title:"igh ו-ie", key:"igh", after:"poa"},
 {id:"poom", world:0.5, title:"oo ארוכה (moon)", key:"oo", after:"pigh"},
 {id:"poob", world:0.5, title:"oo קצרה (book)", key:"oo", after:"poom"},
 {id:"pr",   world:0.5, title:"חזרה: זוגות תנועות", key:"⭐", after:"poob"}
];

Object.assign(window.MORE_LEVELS, {

 pv0:{ focus:["ai","ay","ee","ea","oa"], anchors:["aim","eel","oak"], ex:"rain", arTitle:"איך זה נשמע",
  ar:"שלושה צלילים ארוכים: <b>אֵיי</b> (ai, ay), <b>אִיי</b> (ee, ea) ו-<b>אוֹוּ</b> (oa). בכל אחד מהם האות הראשונה אומרת את השם שלה.",
  rule:"עד עכשיו קראנו מילים עם <b>תנועה אחת</b>. עכשיו מגיעות מילים עם <b>שתי תנועות צמודות</b>.<br>הכלל: <b>כששתי תנועות הולכות יחד, הראשונה מדברת ואומרת את השם שלה, והשנייה שותקת.</b><br><span class='en'>ai</span>: ה-a אומרת אֵיי (rain). <span class='en'>ee</span>: ה-e אומרת אִיי (see). <span class='en'>oa</span>: ה-o אומרת אוֹוּ (boat).<br>קצר מול ארוך: <span class='en'>pan</span> (מחבת) ← <span class='en'>pain</span> (כאב). <span class='en'>cot</span> (מיטת שדה) ← <span class='en'>coat</span> (מעיל).",
  words:[["aim","לכוון"],["eel","צלופח"],["oak","אלון"],["rain","גשם"],["feet","כפות רגליים"],["boat","סירה"],["day","יום"],["eat","לאכול"],["tail","זנב"],["seed","זרע"],["road","כביש"],["soap","סבון"]],
  listen:[["pain",["pan","pain","pen"]],["weed",["wed","weed","wad"]],["coat",["cot","coat","cut"]],["meat",["met","meat","mat"]]],
  ladder:["met","meet","meat","mat","mail","man"],
  reads:[["a goat in a jeep","עז בג׳יפ"],["a neat bed","מיטה מסודרת"],["Wait for Dean.","חכי לדין."],["Jean can feed the goat.","ג׳ין יכולה להאכיל את העז."],["I need a coat and a hat.","אני צריכה מעיל וכובע."]],
  para:[["Jean has a goat.","לג׳ין יש עז."],["Jean can feed the goat a leaf.","ג׳ין יכולה להאכיל את העז בעלה."],["The goat is in a jeep!","העז בתוך ג׳יפ!"],["Jean can not keep the goat in the jeep.","ג׳ין לא יכולה להשאיר את העז בג׳יפ."],["The goat sat on a seat.","העז ישבה על מושב."],["Jean sees the goat leap.","ג׳ין רואה את העז קופצת."]]
 },

 pai:{ focus:["ai"], anchors:["aim","PlayStation","rain"], ex:"rain", arTitle:"איך זה נשמע",
  ar:"<b>אֵיי</b>, כמו השם של האות A באנגלית. ה-a אומרת את השם שלה, וה-i שותקת.",
  rule:"<b class='en'>ai</b> היא שתי תנועות שהולכות יחד. הראשונה, <b class='en'>a</b>, מדברת ואומרת את השם שלה: <b>אֵיי</b>. ה-<b class='en'>i</b> שותקת.<br>ככה <span class='en'>pan</span> (מחבת) הופכת ל-<span class='en'>pain</span> (כאב): ה-a עברה מאַ קצרה לאֵיי ארוכה.<br>בדרך כלל <b class='en'>ai</b> יושבת <b>באמצע</b> המילה: rain, tail, wait.",
  words:[["aim","לכוון"],["aid","עזרה"],["rain","גשם"],["tail","זנב"],["mail","דואר"],["pain","כאב"],["wait","לחכות"],["nail","מסמר, ציפורן"],["sail","להפליג"],["main","ראשי"],["bait","פתיון"],["jail","כלא"]],
  listen:[["paid",["pad","paid","pod"]],["pail",["pal","pail","pan"]],["laid",["lad","laid","lid"]],["gain",["gap","gain","gin"]]],
  ladder:["pad","paid","maid","raid","rail","fail"],
  reads:[["a red pail","דלי אדום"],["Pam paid Dad.","פאם שילמה לאבא."],["The maid laid a rug.","העוזרת פרשה שטיח."],["The kid can not fail.","הילד לא יכול להיכשל."],["The rail is red.","המעקה אדום."]],
  para:[["Gail is a maid.","גייל היא עוזרת בית."],["Gail has a red pail.","לגייל יש דלי אדום."],["Gail laid the pail on the rail.","גייל הניחה את הדלי על המעקה."],["A kid hit the rail.","ילד פגע במעקה."],["The pail hit Gail on the leg.","הדלי פגע בגייל ברגל."],["Gail did not fail. She got the pail!","גייל לא נכשלה. היא תפסה את הדלי!"]]
 },

 pay:{ focus:["ay"], anchors:["okay","PlayStation","Friday"], ex:"day", arTitle:"איך זה נשמע",
  ar:"<b>אֵיי</b>, בדיוק כמו ai. אותו צליל, ורק המקום משתנה.",
  rule:"<b class='en'>ay</b> נשמעת בדיוק כמו <b class='en'>ai</b>: <b>אֵיי</b>. ה-a אומרת את השם שלה, וה-y שותקת.<br>ההבדל הוא במקום: <b class='en'>ay</b> יושבת בדרך כלל <b>בסוף</b> מילה (day, say, way), ו-<b class='en'>ai</b> יושבת <b>באמצע</b> (rain, tail).<br>קצר מול ארוך: <span class='en'>pat</span> (ללטף) ← <span class='en'>pay</span> (לשלם).",
  words:[["day","יום"],["days","ימים"],["say","להגיד"],["way","דרך"],["pay","לשלם"],["hay","חציר"],["bay","מפרץ"],["ray","קרן אור"],["lay","להניח"],["jay","ג׳אי (ציפור)"],["yay","יש! (קריאת שמחה)"],["may","אולי, מותר"]],
  listen:[["hay",["ham","hay","hat"]],["way",["wag","way","wax"]],["lay",["lag","lay","lap"]],["jay",["jam","jay","jab"]]],
  ladder:["pat","pay","day","dad","bad","bay"],
  reads:[["a day in May","יום במאי"],["Kay may say yes.","קיי אולי תגיד כן."],["Ray can pay the maid.","ריי יכול לשלם לעוזרת."],["Pay for the hay.","שלמי על החציר."],["Lay the rug on the bed.","הניחי את השטיח על המיטה."]],
  para:[["Ray has a pet jay.","לריי יש ג׳אי מחמד."],["The jay sat on a bed of hay.","הג׳אי ישב על מיטה של חציר."],["The jay can say: Ray, Ray!","הג׳אי יודע להגיד: ריי, ריי!"],["Ray is not sad.","ריי לא עצוב."],["It is a big day.","זה יום גדול."],["Ray and the jay nap on the hay.","ריי והג׳אי נמנמים על החציר."]]
 },

 pee:{ focus:["ee"], anchors:["eel","sweet","tree"], ex:"bee", arTitle:"קצר מול ארוך, כמו בערבית",
  ar:"i <b>ארוכה</b>: \"אִיי\". כמו ياء ארוכה בערבית: <span class='ar'>فِيل</span>. בעברית אין הבדל בין קצר לארוך, ובאנגלית זה משנה מילה: <span class='en'>fit</span> (מתאים) / <span class='en'>feet</span> (כפות רגליים).",
  rule:"<b class='en'>ee</b> נשמעת <b>אִיי ארוכה</b>. הראשונה, <b class='en'>e</b>, אומרת את השם שלה, והשנייה שותקת: see, bee, feet.<br>קצר מול ארוך: <span class='en'>met</span> (פגשה) ← <span class='en'>meet</span> (להיפגש). <span class='en'>fed</span> ← <span class='en'>feed</span>.",
  words:[["eel","צלופח"],["eek","אוי!"],["see","לראות"],["bee","דבורה"],["feet","כפות רגליים"],["meet","להיפגש"],["seed","זרע"],["need","צריך"],["keep","לשמור"],["week","שבוע"],["deep","עמוק"],["peel","לקלף"]],
  listen:[["feed",["fed","feed","fad"]],["seen",["sun","seen","sin"]],["weed",["wed","weed","wad"]],["beet",["bet","beet","bat"]]],
  ladder:["fed","feed","weed","wed","bed","beet"],
  reads:[["a jeep in the sun","ג׳יפ בשמש"],["I feel hot.","חם לי."],["Kim can peek in the bag.","קים יכולה להציץ בתיק."],["Lee can feed the deer.","לי יכולה להאכיל את האייל."],["Dean can weed the bed.","דין יכול לעשב את המיטה."]],
  para:[["Dean has a jeep.","לדין יש ג׳יפ."],["Dean and Lee go in the jeep.","דין ולי נוסעים בג׳יפ."],["A deer is in the way.","אייל נמצא בדרך."],["Beep, beep! The deer sees the jeep.","ביפ, ביפ! האייל רואה את הג׳יפ."],["The deer can run.","האייל יכול לרוץ."],["Dean and Lee can go on.","דין ולי יכולים להמשיך."]]
 },

 pea:{ focus:["ea"], anchors:["eat","team","sea"], ex:"sea", arTitle:"אותו צליל כמו ee",
  ar:"<b>אִיי ארוכה</b>, בדיוק כמו ee. ياء ארוכה, כמו ב-<span class='ar'>فِيل</span>.",
  rule:"<b class='en'>ea</b> נשמעת בדרך כלל <b>אִיי ארוכה</b>, כמו <b class='en'>ee</b>: eat, sea, tea. ה-e אומרת את השם שלה, וה-a שותקת.<br>למה יש שתי כתיבות לאותו צליל? ככה זה באנגלית. פשוט זוכרים איך כל מילה כתובה: <span class='en'>meet</span> (להיפגש) מול <span class='en'>meat</span> (בשר).<br>יש גם מילים מעטות שבהן <b class='en'>ea</b> נשמעת קצרה, כמו <span class='en'>bread</span>. נפגוש אותן בהמשך.",
  words:[["eat","לאכול"],["sea","ים"],["tea","תה"],["pea","אפונה"],["leaf","עלה"],["meat","בשר"],["neat","מסודר"],["seat","מושב"],["bead","חרוז"],["mean","להתכוון"],["beam","קרן אור"],["team","קבוצה"]],
  listen:[["bean",["ban","bean","bin"]],["heat",["hit","heat","hat"]],["beat",["bet","beat","bat"]],["leap",["lap","leap","lip"]]],
  ladder:["hat","heat","beat","bat","ban","bean"],
  reads:[["a hot meal","ארוחה חמה"],["a big bean","שעועית גדולה"],["The seal can leap.","כלב הים יודע לקפוץ."],["Meg can heal the dog.","מג יכולה לרפא את הכלב."],["The pup is weak.","הגור חלש."]],
  para:[["Jean has a meal in the sun.","לג׳ין יש ארוחה בשמש."],["A seal sees the meal.","כלב ים רואה את הארוחה."],["The seal has a deal for Jean.","לכלב הים יש עסקה עם ג׳ין."],["Jean can not beat the seal.","ג׳ין לא יכולה לנצח את כלב הים."],["Jean has a bean. The seal has the meal.","לג׳ין יש שעועית. לכלב הים יש את הארוחה."],["What a deal!","איזו עסקה!"]]
 },

 poa:{ focus:["oa"], anchors:["oat","boat","soap"], ex:"boat", arTitle:"איך זה נשמע",
  ar:"<b>אוֹוּ</b>, כמו השם של האות O. השפתיים מתעגלות בסוף, כמו ב-<span class='ar'>و</span>.",
  rule:"<b class='en'>oa</b> נשמעת <b>אוֹוּ</b>. הראשונה, <b class='en'>o</b>, אומרת את השם שלה, וה-<b class='en'>a</b> שותקת: boat, coat, soap.<br>קצר מול ארוך: <span class='en'>cot</span> (מיטת שדה) ← <span class='en'>coat</span> (מעיל). <span class='en'>got</span> (קיבלה) ← <span class='en'>goat</span> (עז).",
  words:[["oak","אלון"],["oat","שיבולת שועל"],["boat","סירה"],["coat","מעיל"],["road","כביש"],["goat","עז"],["soap","סבון"],["load","משא"],["foam","קצף"],["toad","קרפדה"],["loaf","כיכר לחם"],["coal","פחם"]],
  listen:[["goal",["gal","goal","got"]],["moat",["mat","moat","met"]],["roam",["ram","roam","rim"]],["moan",["man","moan","men"]]],
  ladder:["mat","moat","moan","man","ran","roam"],
  reads:[["a foal in the sun","סייח בשמש"],["Joan had a goal.","לג׳ואן הייתה מטרה."],["Moe can soak the rag.","מו יכול להשרות את הסמרטוט."],["The dog can roam.","הכלב יכול לשוטט."],["The moat is deep.","החפיר עמוק."]],
  para:[["Joan has a pet foal.","לג׳ואן יש סייח מחמד."],["The foal can roam in the sun.","הסייח יכול לשוטט בשמש."],["Joan can feed the foal a leaf.","ג׳ואן יכולה להאכיל את הסייח בעלה."],["The foal is not weak.","הסייח לא חלש."],["It can leap and run.","הוא יודע לקפוץ ולרוץ."],["Joan has a goal. She can not wait.","יש לג׳ואן מטרה. היא לא יכולה לחכות."]]
 },

 pigh:{ focus:["igh","ie"], anchors:["ice","night","pie"], ex:"night", arTitle:"איך זה נשמע",
  ar:"<b>אַיי</b>, כמו השם של האות I. ה-i אומרת את השם שלה.",
  rule:"<b class='en'>igh</b> היא שלוש אותיות שנשמעות כצליל אחד: <b>אַיי</b>, כמו השם של האות I. ה-<b class='en'>gh</b> שותקות: night, high, light.<br><b class='en'>ie</b> בסוף מילה קצרה נשמעת גם היא אַיי: pie, tie.<br>קצר מול ארוך: <span class='en'>lit</span> (הודלק) ← <span class='en'>light</span> (אור). <span class='en'>sit</span> ← <span class='en'>sight</span>.",
  words:[["high","גבוה"],["sigh","אנחה"],["light","אור"],["night","לילה"],["right","ימין, נכון"],["sight","ראייה"],["fight","קרב"],["tight","צמוד"],["might","אולי, כוח"],["pie","פשטידה"],["tie","לקשור, עניבה"],["lie","לשקר, לשכב"]],
  listen:[["light",["lit","light","lot"]],["night",["not","night","net"]],["tie",["tea","tie","tan"]],["pie",["pea","pie","pay"]]],
  ladder:["sit","sight","light","lit","let","lot"],
  reads:[["a big pie","פשטידה גדולה"],["I sigh at night.","אני נאנחת בלילה."],["Tim can tie the bag.","טים יכול לקשור את התיק."],["Is it right?","זה נכון?"],["The light is on at night.","האור דולק בלילה."]],
  para:[["Tim has a pie.","לטים יש פשטידה."],["It is night.","עכשיו לילה."],["The light is on.","האור דולק."],["Tim might eat the pie.","אולי טים יאכל את הפשטידה."],["A rat sees the pie.","חולדה רואה את הפשטידה."],["The rat and Tim fight for the pie!","החולדה וטים נלחמים על הפשטידה!"]]
 },

 poom:{ focus:["oo"], snd:{oo:"אוּ ארוכה"}, anchors:["oops","moon","zoo"], ex:"moon", arTitle:"אוּ ארוכה, כמו בערבית",
  ar:"אוּ <b>ארוכה</b>, כמו واو ארוכה: <span class='ar'>نُور</span>. הפה עגול וקטן, והצליל נמשך.",
  rule:"<b class='en'>oo</b> נשמעת פעמים רבות <b>אוּ ארוכה</b>: moon, zoo, food. הפה נעשה עגול וקטן, והצליל נמשך.<br>זה לא כמו ee: כאן אין \"השם של האות\". <b class='en'>oo</b> הוא צליל משלו.<br>ל-<b class='en'>oo</b> יש גם צליל קצר, ואותו נלמד בשלב הבא.",
  words:[["ooh","או!"],["oops","אופס"],["moon","ירח"],["food","אוכל"],["zoo","גן חיות"],["soon","בקרוב"],["room","חדר"],["boot","מגף"],["pool","בריכה"],["cool","מגניב, קריר"],["noon","צהריים"],["tool","כלי עבודה"]],
  listen:[["hoop",["hop","hoop","hip"]],["loop",["lop","loop","lap"]],["mood",["mud","mood","mad"]],["root",["rot","root","rat"]]],
  ladder:["hop","hoop","loop","loot","root","roof"],
  reads:[["a hot roof","גג חם"],["A root is in the mud.","שורש בבוץ."],["Ben is in a bad mood.","בן במצב רוח רע."],["Tom is not a fool.","טום לא טיפש."],["Boo! Jan can hoot.","בו! ג׳ן יודעת לצעוק הוו."]],
  para:[["Jan has a hoop.","לג׳ן יש חישוק."],["The hoop can zoom on the road.","החישוק יכול לדהור על הכביש."],["Zoom, zoom, zoom!","זום, זום, זום!"],["The hoop hit a root.","החישוק פגע בשורש."],["Jan is not sad. It is fun!","ג׳ן לא עצובה. זה כיף!"],["Jan can do it too.","ג׳ן יכולה לעשות את זה גם."]]
 },

 poob:{ focus:["oo"], snd:{oo:"אֻ קצרה"}, anchors:["book","good","cook"], ex:"book", arTitle:"אֻ קצרה, כמו בערבית",
  ar:"אֻ <b>קצרה</b>, כמו ضمة קצרה: <span class='ar'>كُتُب</span>. הפה עגול, אבל הצליל קצר ורפוי.",
  rule:"לפעמים <b class='en'>oo</b> נשמעת <b>אֻ קצרה</b>: book, look, good. הפה עגול, אבל הצליל קצר ורפוי, בלי למשוך.<br>איך יודעים איזה צליל? אין חוק מדויק. לפני <b class='en'>k</b> היא בדרך כלל קצרה (book, look, cook). לפני <b class='en'>d</b> קורים שניהם: <span class='en'>good</span> ו-<span class='en'>wood</span> קצרות, <span class='en'>food</span> ו-<span class='en'>mood</span> ארוכות.<br>כשלא בטוחים, מנסים את שני הצלילים ובוחרים את המילה שמכירים.",
  words:[["book","ספר"],["look","להסתכל"],["cook","לבשל, טבח"],["foot","כף רגל"],["wood","עץ (חומר)"],["good","טוב"],["hook","קרס"],["hood","ברדס"],["took","לקח"],["nook","פינה"],["wool","צמר"],["soot","פיח"]],
  listen:[["good",["god","good","gad"]],["foot",["fit","foot","fat"]],["wood",["wed","wood","wad"]],["hood",["had","hood","hid"]]],
  ladder:["hood","hook","hoot","boot","book","took"],
  reads:[["a good book","ספר טוב"],["Look at the moon.","תסתכלי על הירח."],["Mom can cook food.","אמא יכולה לבשל אוכל."],["Dad took the wool.","אבא לקח את הצמר."],["The foot is in the boot.","כף הרגל במגף."]],
  para:[["Tom took a good book.","טום לקח ספר טוב."],["He sat in the room.","הוא ישב בחדר."],["Mom is a good cook.","אמא היא טבחית טובה."],["Mom took a look at Tom.","אמא הציצה בטום."],["Tom is a good kid.","טום הוא ילד טוב."],["Tom and Mom look at the moon.","טום ואמא מסתכלים על הירח."]]
 },

 pr:{ focus:["ai","ay","ee","ea","oa","igh","ie","oo"], anchors:["aim","eel","oak","pie","oops"], ex:"pie", arTitle:"הכול ביחד",
  ar:"אֵיי (ai, ay) · אִיי (ee, ea) · אוֹוּ (oa) · אַיי (igh, ie) · אוּ או אֻ (oo).",
  rule:"חזרה על כל הזוגות: <span class='en'>ai, ay, ee, ea, oa, igh, ie, oo</span>.<br>הכלל שמחבר את כולם: <b>כששתי תנועות הולכות יחד, הראשונה מדברת</b>. רק ב-<span class='en'>oo</span> ובשלוש האותיות <span class='en'>igh</span> זה קצת אחרת.<br>הטריק: קודם מחפשים את הצמד, ורק אז קוראים את כל המילה.",
  words:[["aim","לכוון"],["eat","לאכול"],["oak","אלון"],["rain","גשם"],["day","יום"],["feet","כפות רגליים"],["tea","תה"],["boat","סירה"],["night","לילה"],["pie","פשטידה"],["moon","ירח"],["book","ספר"]],
  listen:[["pie",["pay","pie","pea"]],["boat",["beat","boat","bait"]],["moon",["mean","moon","main"]],["night",["neat","night","nut"]]],
  ladder:["pay","pie","pea","tea","tie","tin"],
  reads:[["a jeep in the rain","ג׳יפ בגשם"],["Joan can eat a pie at night.","ג׳ואן יכולה לאכול פשטידה בלילה."],["Look at the moon and the sea.","תסתכלי על הירח ועל הים."],["Dean has a boat and a coat.","לדין יש סירה ומעיל."],["Kay may keep a good book.","קיי אולי תשמור ספר טוב."]],
  para:[["Joan and Dean go to the sea.","ג׳ואן ודין הולכים לים."],["It is a cool day.","זה יום קריר."],["They sit in a boat.","הם יושבים בסירה."],["Joan sees a seal.","ג׳ואן רואה כלב ים."],["Dean can eat a pie.","דין יכול לאכול פשטידה."],["What a good day!","איזה יום טוב!"]]
 }
});

/* תרגום למילים שמופיעות במשפטים, בהאזנה ובסולמות (ולא ברשימות המילים של השלבים) */
Object.assign(window.MORE_SENT_HE, {
 maid:"עוזרת בית",raid:"פשיטה",paid:"שילם",laid:"הניח",pail:"דלי",rail:"מעקה",gain:"להרוויח",fail:"להיכשל",
 jeep:"ג׳יפ",deer:"אייל",weed:"עשב שוטה, לעשב",feel:"להרגיש",beep:"צפירה",peek:"להציץ",feed:"להאכיל",seen:"נראה",beet:"סלק",
 seal:"כלב ים",meal:"ארוחה",bean:"שעועית",heat:"חום",beat:"לנצח",leap:"לקפוץ",beak:"מקור",weak:"חלש",deal:"עסקה",heal:"לרפא",
 foal:"סייח",moat:"חפיר",goal:"מטרה, שער",roam:"לשוטט",soak:"להשרות",loan:"הלוואה",moan:"לגנוח",
 hoop:"חישוק",loop:"לולאה",loot:"שלל",root:"שורש",roof:"גג",zoom:"לדהור",mood:"מצב רוח",fool:"טיפש",hoot:"הוו (קול ינשוף)",boo:"בו!",
 toot:"צפצוף",kay:"קיי",ray:"קרן אור, ריי",dean:"דין",jean:"ג׳ין",joan:"ג׳ואן",gail:"גייל",moe:"מו",lee:"לי",
 hay:"חציר",jay:"ג׳אי",yes:"כן",too:"גם",
 got:"קיבל",lit:"הודלק",hid:"התחבא",ban:"איסור",
 mat:"שטיחון",met:"נפגש",meet:"להיפגש",
 rug:"שטיח",bed:"מיטה",mud:"בוץ",sun:"שמש",sat:"ישב",rat:"חולדה",kid:"ילד",pup:"גור",
 gap:"רווח",gal:"בחורה",rim:"שפה",ram:"איל",lop:"לגזום",mad:"כועס",rot:"ריקבון",wad:"גוש",wed:"נשא",fad:"אופנה חולפת",
 lag:"פיגור",lap:"ברכיים",wag:"ללטף בזנב",wax:"שעווה",ham:"בשר חזיר",hat:"כובע",jam:"ריבה",jab:"דקירה",
 god:"אל",gad:"לשוטט",had:"היה ל",hid:"התחבא",
 nut:"אגוז",neat:"מסודר",net:"רשת",not:"לא",
 pad:"פנקס",pal:"חבר",pan:"מחבת",pen:"עט",pea:"אפונה",pay:"לשלם",
 mean:"להתכוון",main:"ראשי",tan:"חום בהיר",
 tin:"פח",tie:"לקשור",tea:"תה",lot:"הרבה",let:"לאפשר",sit:"לשבת",
 cot:"מיטת שדה",cop:"שוטר",cap:"כובע מצחייה",got:"קיבל",cut:"לחתוך",
 fit:"להתאים",fat:"שמן",hit:"להכות",lid:"מכסה",lad:"נער",gin:"ג׳ין (משקה)",
 sin:"חטא",wed:"נשא לאישה",bat:"עטלף",bet:"הימור",
 roam:"לשוטט",gap:"רווח",
 hop:"לקפוץ",lip:"שפה",
 sad:"עצוב",dad:"אבא",bay:"מפרץ",bad:"רע",pat:"ללטף",rain:"גשם",
 ran:"רץ",man:"איש",mail:"דואר",tail:"זנב",
 cool:"מגניב, קריר",hood:"ברדס",
 look:"להסתכל",took:"לקח",foot:"כף רגל",boot:"מגף"
});

/* זוגות שנראים דומים אבל נשמעים אחרת: קצר מול ארוך */
window.MORE_EXTRA_PAIRS = [
 {a:"pan",ah:"מחבת",b:"pain",bh:"כאב",note:"ב-pan יש a קצרה, כמו ב-app. ב-pain הצמד ai אומר אֵיי ארוכה: ה-a אומרת את השם שלה."},
 {a:"pen",ah:"עט",b:"pain",bh:"כאב",note:"ב-pen יש e כמו ב-elephant. ב-pain הצמד ai נשמע אֵיי."},
 {a:"met",ah:"פגשה",b:"meet",bh:"להיפגש",note:"ב-met ה-e קצרה. ב-meet הצמד ee נשמע אִיי ארוכה."},
 {a:"meet",ah:"להיפגש",b:"meat",bh:"בשר",noHear:true,note:"meet ו-meat נשמעות בדיוק אותו דבר: אִיי ארוכה. הבדל רק בכתיב."},
 {a:"fed",ah:"האכיל",b:"feed",bh:"להאכיל",note:"ב-fed ה-e קצרה. ב-feed הצמד ee נשמע אִיי ארוכה."},
 {a:"bed",ah:"מיטה",b:"bead",bh:"חרוז",note:"ב-bed ה-e קצרה. ב-bead הצמד ea נשמע אִיי ארוכה."},
 {a:"cot",ah:"מיטת שדה",b:"coat",bh:"מעיל",note:"ב-cot ה-o קצרה ועמוקה. ב-coat הצמד oa נשמע אוֹוּ."},
 {a:"got",ah:"קיבל",b:"goat",bh:"עז",note:"ב-got ה-o קצרה. ב-goat הצמד oa נשמע אוֹוּ."},
 {a:"lit",ah:"הודלק",b:"light",bh:"אור",note:"ב-lit ה-i קצרה. ב-light האותיות igh נשמעות אַיי, וה-gh שותקות."},
 {a:"pay",ah:"לשלם",b:"pea",bh:"אפונה",note:"pay נשמעת אֵיי, ו-pea נשמעת אִיי."},
 {a:"pie",ah:"פשטידה",b:"pay",bh:"לשלם",note:"pie נשמעת אַיי, ו-pay נשמעת אֵיי."},
 {a:"pie",ah:"פשטידה",b:"pea",bh:"אפונה",note:"pie נשמעת אַיי, ו-pea נשמעת אִיי."},
 {a:"hop",ah:"לקפוץ",b:"hoop",bh:"חישוק",note:"ב-hop ה-o קצרה ועמוקה. ב-hoop הצמד oo נשמע אוּ ארוכה."},
 {a:"hoot",ah:"הוו",b:"hook",bh:"קרס",note:"ב-hoot הצמד oo ארוך (אוּ), וב-hook הוא קצר (אֻ)."},
 {a:"boot",ah:"מגף",b:"book",bh:"ספר",note:"ב-boot הצמד oo ארוך (אוּ), וב-book הוא קצר (אֻ)."}
];

/* שאלות לטולי על הצמדים */
window.TULI_QS = (window.TULI_QS||[]).concat([
{tf:1,w:1,q:"כששתי תנועות הולכות יחד, בדרך כלל הראשונה מדברת והשנייה שותקת.",a:0,say:"rain, feet, boat",x:"נכון. ב-rain ה-a אומרת אֵיי וה-i שותקת. ב-feet ה-e אומרת אִיי וה-e השנייה שותקת. ב-boat ה-o אומרת אוֹוּ."},
{tf:1,w:1,q:"במילה rain שומעים גם את האות i.",a:1,say:"rain",x:"לא נכון. ב-ai האות i שותקת. רק ה-a מדברת, ואומרת אֵיי."},
{tf:1,w:1,q:"ai ו-ay נשמעות אותו דבר.",a:0,say:"rain, day",x:"נכון. שתיהן אֵיי. ההבדל הוא במקום: ay בסוף מילה (day), ai באמצע (rain)."},
{tf:1,w:1,q:"ee ו-ea נשמעות לרוב אותו דבר: אִיי ארוכה.",a:0,say:"see, sea",x:"נכון. see ו-sea נשמעות בדיוק אותו דבר. הבדל רק בכתיב, וזוכרים כל מילה לפי איך שהיא כתובה."},
{tf:1,w:1,q:"בשלוש האותיות igh שומעים את g ואת h.",a:1,say:"night",x:"לא נכון. ב-igh האותיות gh שותקות. ה-i אומרת את השם שלה: אַיי."},
{tf:1,w:1,q:"ל-oo יש תמיד צליל אחד.",a:1,say:"moon, book",x:"לא נכון. ב-moon היא אוּ ארוכה, וב-book היא אֻ קצרה."},
{w:1,q:"איזו מילה יש בה צליל אֵיי ארוך?",o:["rain","ran","run","rin"],a:0,say:"rain",x:"rain: הצמד ai אומר אֵיי. ב-ran וב-run יש תנועה אחת קצרה."},
{w:1,q:"איזו מילה נשמעת אוֹוּ?",o:["boat","bat","bit","but"],a:0,say:"boat",x:"boat: הצמד oa אומר אוֹוּ. ב-bat, bit ו-but יש תנועה אחת קצרה."},
{w:1,q:"איזה צמד בדרך כלל יושב בסוף מילה?",o:["ay","ai","oa","ee"],a:0,say:"day, say",x:"ay יושב בסוף מילה (day, say, way). ai יושב באמצע (rain, tail)."},
{w:1,q:"איזו מילה נשמעת אִיי ארוכה?",o:["feet","fit","fat","fed"],a:0,say:"feet",x:"feet: הצמד ee אומר אִיי. ב-fit, fat ו-fed יש תנועה אחת קצרה."},
{w:1,q:"איזו מילה נשמעת אַיי?",o:["night","neat","note","nut"],a:0,say:"night",x:"night: האותיות igh נשמעות אַיי. ב-neat יש אִיי, ב-note אוֹוּ, וב-nut אַ קצרה."},
{w:1,q:"איך נשמע הצמד oo במילה moon?",o:["אוּ ארוכה","אֻ קצרה","אוֹוּ","אַיי"],a:0,say:"moon",x:"ב-moon הצמד oo נשמע אוּ ארוכה. ב-book הוא נשמע אֻ קצרה."}
]);
