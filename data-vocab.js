/* הרחבת אוצר המילים: 16 מילים בודדות בכל שלב, ובמשפטים, בפסקה, בהקשבה ובסולם יש מילים אחרות.
   המילים החדשות הן מאותו צליל או מצלילים שכבר נלמדו, כדי שאפשר יהיה לפענח אותן.
   מחליף את words/listen/ladder/reads/para של השלב. השלבים המקוריים נשארים בקובץ הראשי. */
window.LEVEL_REWRITE = {
 a:{
  words:[["ant","נמלה"],["add","להוסיף"],["cat","חתול"],["map","מפה"],["bag","תיק"],["hat","כובע"],["fan","מאוורר"],["jam","ריבה"],
         ["sad","עצוב"],["tap","ברז"],["ram","איל"],["gap","רווח"],["cap","כובע מצחייה"],["nap","תנומה"],["wag","לכשכש"],["yak","יאק (שור שעיר)"]],
  listen:[["pan",["pan","pen","pin"]],["bat",["bat","bet","bit"]],["mad",["mad","mud"]],["rat",["rat","rot"]]],
  ladder:["dad","pad","pal","pan","man","mat"],
  reads:[["a bad rat","עכברוש רע"],["a tan cab","מונית בצבע חום בהיר"],["The rat ran at the bat.","העכברוש רץ לעבר העטלף."],
         ["Dad has a pan.","לאבא יש מחבת."],["Max can tag Pam.","מקס יכול לתפוס את פאם במשחק תופסת."]],
  para:[["Max has a rat.","למקס יש עכברוש."],["The rat is tan.","העכברוש חום בהיר."],["The rat ran to the pan.","העכברוש רץ אל המחבת."],
        ["In the pan is ham.","במחבת יש בשר."],["The rat can nab the ham!","העכברוש יכול לחטוף את הבשר!"],["Dad is mad at the rat.","אבא כועס על העכברוש."]]
 },
 e:{
  words:[["egg","ביצה"],["elf","גמד"],["pen","עט"],["bed","מיטה"],["red","אדום"],["ten","עשר"],["hen","תרנגולת"],["net","רשת"],
         ["leg","רגל"],["wet","רטוב"],["vet","וטרינר"],["peg","יתד"],["web","קורי עכביש"],["keg","חבית קטנה"],["den","מאורה"],["yes","כן"]],
  listen:[["men",["man","men"]],["bet",["bat","bet","bit"]],["set",["sat","set","sit"]],["pet",["pat","pet","pot"]]],
  ladder:["mat","met","set","get","jet"],
  reads:[["a jet and a cab","מטוס סילון ומונית"],["Meg and the men","מג והגברים"],["Jen has a pet.","לג׳ן יש חיית מחמד."],
         ["Ted fed the cat.","טד האכיל את החתול."],["Let Max get the pan.","תני למקס להביא את המחבת."]],
  para:[["Meg has a pet.","למג יש חיית מחמד."],["The pet is a yak!","חיית המחמד היא יאק!"],["Meg fed the yak.","מג האכילה את היאק."],
        ["The yak can beg.","היאק יודע לבקש, כמו כלב."],["Meg let the yak get on a jet.","מג נתנה ליאק לעלות על מטוס סילון."],["The men get mad.","הגברים מתעצבנים."]]
 },
 i:{
  words:[["if","אם"],["it","זה"],["pig","חזיר"],["pin","סיכה"],["sit","לשבת"],["big","גדול"],["six","שש"],["lid","מכסה"],
         ["zip","רוכסן"],["kid","ילד"],["fig","תאנה"],["rib","צלע"],["win","לנצח"],["dip","לטבול"],["hip","ירך"],["wig","פאה"]],
  listen:[["pit",["pat","pet","pit"]],["tin",["tan","ten","tin"]],["bit",["bat","bet","bit"]],["lip",["lap","lip"]]],
  ladder:["tan","tin","tip","rip","rim","him"],
  reads:[["a tin pan","מחבת מפח"],["his red kit","הערכה האדומה שלו"],["Liz can fix it.","ליז יכולה לתקן את זה."],
         ["Tim hid in the bin.","טים התחבא בפח."],["Did Tim rip his bag?","האם טים קרע את התיק שלו?"]],
  para:[["Liz can dig a pit.","ליז יכולה לחפור בור."],["In the pit is a tin.","בתוך הבור יש קופסת פח."],["Is it a kit? Is it a gem?","האם זו ערכה? האם זו אבן חן?"],
        ["Tim hid the tin in the pit!","טים החביא את קופסת הפח בבור!"],["Liz is not mad.","ליז לא כועסת."],["Liz and Tim hid in the pit.","ליז וטים התחבאו בבור."]]
 },
 o:{
  words:[["on","על"],["ox","שור"],["hot","חם"],["dog","כלב"],["box","קופסה"],["fox","שועל"],["pot","סיר"],["mop","מגב"],
         ["top","למעלה, סביבון"],["log","בול עץ"],["job","עבודה"],["rod","מוט"],["cot","מיטת תינוק"],["dot","נקודה"],["hop","לקפץ"],["sob","להתייפח, לבכות"]],
  listen:[["cop",["cap","cop","cup"]],["not",["nut","not","net"]],["rob",["rob","rib","rub"]],["got",["gut","got","get"]]],
  ladder:["rat","rot","rob","mob","mom"],
  reads:[["a hog in the fog","חזיר בערפל"],["Mom and Bob","אמא ובוב"],["Bob can jog.","בוב יכול לרוץ ריצה קלה."],
         ["The cop got the hog.","השוטר תפס את החזיר."],["Did Mom nod?","האם אמא הנהנה?"]],
  para:[["Mom has a hog.","לאמא יש חזיר."],["The hog can jog in the fog.","החזיר יכול לרוץ בערפל."],["Bob is a cop.","בוב הוא שוטר."],
        ["Bob got the hog.","בוב תפס את החזיר."],["Mom is not mad at Bob.","אמא לא כועסת על בוב."],["The hog sat on Bob!","החזיר התיישב על בוב!"]]
 },
 u:{
  words:[["up","למעלה"],["us","אותנו"],["sun","שמש"],["bus","אוטובוס"],["cup","כוס"],["bug","חרק"],["nut","אגוז"],["hug","חיבוק"],
         ["run","לרוץ"],["mud","בוץ"],["gum","מסטיק"],["tub","אמבט"],["bun","לחמנייה"],["rug","שטיח"],["jug","כד"],["cub","גור של דוב או אריה"]],
  listen:[["hut",["hat","hot","hut"]],["fun",["fan","fin","fun"]],["cut",["cat","cot","cut"]],["dug",["dig","dog","dug"]]],
  ladder:["fan","fun","pun","pup","pop"],
  reads:[["a pup in a hut","גור בתוך בקתה"],["a red mug","ספל אדום"],["Gus can hum.","גאס יודע לזמזם."],
         ["The pup dug a pit.","הגור חפר בור."],["Rub the pup, Gus!","תלטף את הגור, גאס!"]],
  para:[["Gus has a pup, Bud.","לגאס יש גור בשם באד."],["Bud can tug and tug.","באד יכול למשוך ולמשוך."],["Bud dug in the hut.","באד חפר בבקתה."],
        ["Bud got a mug.","באד מצא ספל."],["Gus is not mad. It is fun!","גאס לא כועס. זה כיף!"],["Gus can rub his pup.","גאס מלטף את הגור שלו."]]
 },
 r1:{
  words:[["at","ב-, אצל"],["in","בתוך"],["lab","מעבדה"],["wax","שעווה"],["tax","מס"],["yet","עדיין"],["hem","שוליים של בגד"],["wed","להתחתן"],
         ["sip","ללגום"],["dim","עמום, חלש"],["bin","פח אשפה"],["cod","דג בקלה"],["lot","הרבה, מגרש"],["pod","תרמיל של אפונה"],["gut","בטן, תחושת בטן"],["sum","סכום"]],
  listen:[["rag",["rag","rig","rug"]],["tip",["tap","tip","top"]],["hum",["ham","him","hum"]],["led",["lad","led","lid"]]],
  ladder:["bat","bit","bet","get","got","jot"],
  reads:[["a rat, a hog and a yak","עכברוש, חזיר ויאק"],["Jim and Pam jog to the hut.","ג׳ים ופאם רצים לבקתה."],["Can Rex fit in a van?","האם רקס נכנס לטנדר?"],
         ["Pam fed the hog.","פאם האכילה את החזיר."],["Mom got ham in a tin.","אמא קנתה בשר בקופסת פח."]],
  para:[["Rex is a mutt.","רקס הוא כלב מעורב."],["Rex can dig, jog and tug.","רקס יודע לחפור, לרוץ ולמשוך."],["Rex has a pal, a cat.","לרקס יש חבר, חתול."],
        ["The cat hid in the van.","החתול התחבא בטנדר."],["Rex sat and did not yap.","רקס ישב ולא נבח."],["The cat got on Rex, and Rex is not mad.","החתול עלה על רקס, ורקס לא כועס."]]
 }
};
/* פירוש לכל מילה חדשה שמופיעה במשפטים, בהקשבה ובסולם, כדי שטולי תוכל לתרגם */
window.MORE_SENT_HE = {
 rat:"עכברוש",bad:"רע",tan:"חום בהיר",bat:"עטלף",pan:"מחבת",man:"איש",tag:"לתפוס במשחק תופסת",had:"היה לו",ham:"בשר",nab:"לחטוף",
 at:"ב-, אל, לעבר",pal:"חבר",pat:"ללטף",max:"מקס, שם",pam:"פאם, שם",sam:"סאם, שם",
 jet:"מטוס סילון",meg:"מג, שם",jen:"ג׳ן, שם",ted:"טד, שם",pet:"חיית מחמד",fed:"האכיל",let:"לתת ל-, להרשות",beg:"לבקש, להתחנן",
 set:"לשים, מוכן",bet:"הימור",met:"פגש",yak:"יאק, שור שעיר",
 tin:"פח, קופסת פח",his:"שלו",kit:"ערכה",liz:"ליז, שם",tim:"טים, שם",hid:"התחבא, החביא",rip:"לקרוע",did:"עשה. בשאלה: האם",
 dig:"לחפור",pit:"בור",tip:"קצה, טיפ",rim:"שוליים, שפה של כלי",him:"אותו",lip:"שפה, של הפה",bit:"קצת",gem:"אבן חן",
 hog:"חזיר",fog:"ערפל",mom:"אמא",bob:"בוב, שם",jog:"ריצה קלה",cop:"שוטר",got:"השיג, קיבל, תפס",nod:"להנהן",rot:"להירקב",
 rob:"לשדוד",mob:"המון אנשים",
 hut:"בקתה",mug:"ספל",gus:"גאס, שם",hum:"לזמזם",dug:"חפר",rub:"לשפשף, ללטף",bud:"באד, שם. גם: ניצן",tug:"למשוך",fun:"כיף",cut:"לחתוך",
 cod:"דג בקלה",jim:"ג׳ים, שם",rex:"רקס, שם",mutt:"כלב מעורב",yap:"לנבוח נביחה קטנה",sat:"ישב",jot:"לרשום בקצרה",
 rag:"סמרטוט",rig:"מתקן, אסדה",rug:"שטיח",led:"הוביל",lad:"נער",lid:"מכסה",nut:"אגוז",gut:"בטן"
};
