/* הרחבת אוצר המילים, עולמות 2 עד 5: 16 מילים בודדות בכל שלב, ובמשפטים, בפסקה, בהקשבה ובסולם יש מילים אחרות.
   נטען אחרי data-vocab.js ומוסיף עליו. */
Object.assign(window.LEVEL_REWRITE, {
 /* ===== עולם 2: גשר הצמדים ===== */
 ff:{
  words:[["ill","חולה"],["off","כבוי"],["hill","גבעה"],["bell","פעמון"],["doll","בובה"],["fill","למלא"],["kiss","נשיקה"],["mess","בלגן"],
         ["boss","בוס"],["miss","להתגעגע, להחטיא"],["buzz","זמזום"],["puff","נשיפה"],["well","באר. גם: טוב"],["toss","לזרוק"],["jazz","ג׳אז"],["cuff","שרוול, חפת"]],
  listen:[["sell",["sell","sill"]],["moss",["mass","mess","moss"]],["fizz",["fizz","fuzz"]],["tell",["tell","till","tall"]]],
  ladder:["mill","will","sill","sell","tell","yell"],
  reads:[["a pill in a cup","גלולה בתוך כוס"],["a hiss and a yell","נשיפה וצעקה"],["Bill can sell a hat.","ביל יכול למכור כובע."],
         ["Will Tom tell Jill?","האם טום יספר לג׳יל?"],["Ben did not yell.","בן לא צעק."]],
  para:[["Nell has a cat, Tess.","לנל יש חתולה, טס."],["Tess will not sit still.","טס לא תשב בשקט."],["Tess ran to the mill.","טס רצה אל הטחנה."],
        ["Tess fell in the moss.","טס נפלה לתוך האזוב."],["Tess can hiss at the dogs.","טס יודעת לנשוף על הכלבים."],["Nell got Tess, and Tess is still.","נל תפסה את טס, וטס שקטה."]]
 },
 ck:{
  words:[["duck","ברווז"],["sock","גרב"],["back","גב, אחורה"],["neck","צוואר"],["kick","לבעוט"],["lock","מנעול"],["rock","סלע"],["pick","לבחור"],
         ["sick","חולה"],["luck","מזל"],["kit","ערכה"],["cup","כוס"],["deck","סיפון של ספינה"],["pack","לארוז"],["lick","ללקק"],["sack","שק"]],
  listen:[["peck",["pack","peck","pick"]],["rack",["rack","rock"]],["cob",["cab","cob","cub"]]],
  ladder:["tack","tick","tuck","muck","mock","dock"],
  reads:[["a cab on a dock","מונית על רציף"],["a tick on the dog","קרצייה על הכלב"],["The hen pecks at a bug.","התרנגולת מנקרת חרק."],
         ["Nick got a tack.","ניק קיבל נעץ."],["Mom can tuck in Rick.","אמא יכולה לכסות את ריק במיטה."]],
  para:[["Nick has a cat, Mack.","לניק יש חתול, מאק."],["Mack sat on the dock.","מאק ישב על הרציף."],["A tick got on Mack.","קרצייה עלתה על מאק."],
        ["Nick got the tick off Mack.","ניק הוריד את הקרצייה ממאק."],["Mack naps on a rack.","מאק נמנם על מדף."],["Tick tock, tick tock. Mack naps.","טיק טק, טיק טק. מאק נמנם."]]
 },
 sh:{
  words:[["ship","ספינה"],["shop","חנות"],["shed","מחסן"],["shut","לסגור"],["fish","דג"],["dish","צלחת"],["wish","משאלה"],["cash","מזומן"],
         ["rush","למהר"],["shell","צדף"],["mash","למעוך"],["hush","ששש, שקט"],["shin","שוק, החלק הקדמי של הרגל"],["dash","ריצה מהירה. גם: קו מפריד"],["rash","פריחה בעור"],["hash","סולמית (#)"]],
  listen:[["shack",["sack","shack","shock"]],["mesh",["mess","mesh"]],["lash",["lass","lash"]]],
  ladder:["sack","shack","shock","sock","sick"],
  reads:[["a shack on a hill","צריף על גבעה"],["Josh and his mom","ג׳וש ואמא שלו"],["Josh got a shot.","ג׳וש קיבל זריקה."],
         ["Pam is in the shack.","פאם בצריף."],["It is a big shock!","זה הלם גדול!"]],
  para:[["Josh is sick.","ג׳וש חולה."],["Josh has to get a shot.","ג׳וש צריך לקבל זריקה."],["Josh is in shock!","ג׳וש בהלם!"],
        ["Josh got the shot. It is not bad.","ג׳וש קיבל את הזריקה. זה לא נורא."],["Mom gets Josh hot mush.","אמא מביאה לג׳וש דייסה חמה."],["Josh naps in his bed.","ג׳וש נמנם במיטה שלו."]]
 },
 ch:{
  words:[["itch","גירוד"],["chip","צ׳יפס, שבב"],["chin","סנטר"],["chat","לפטפט"],["chop","לקצוץ"],["chick","אפרוח"],["rich","עשיר"],["much","הרבה"],
         ["catch","לתפוס"],["match","גפרור, משחק"],["patch","טלאי"],["fetch","להביא"],["chess","שחמט"],["check","לבדוק"],["inch","אינץ׳ (2.5 ס״מ)"],["chill","קריר. גם: להירגע"]],
  listen:[["witch",["wish","witch"]],["such",["such","much"]],["latch",["lash","latch"]]],
  ladder:["hatch","hitch","pitch","ditch"],
  reads:[["a witch in a hut","מכשפה בבקתה"],["lunch for Chad","ארוחת צהריים לצ׳אד"],["Chad can munch a bun.","צ׳אד יכול ללעוס לחמנייה."],
         ["The witch had a big pot.","למכשפה היה סיר גדול."],["Such a hot lunch!","איזו ארוחת צהריים חמה!"]],
  para:[["Chad has a pet hen.","לצ׳אד יש תרנגולת."],["The hen is in a hutch.","התרנגולת בלול."],["Chad sits on a bench with his lunch.","צ׳אד יושב על ספסל עם ארוחת הצהריים שלו."],
        ["The hen gets on the bench.","התרנגולת עולה על הספסל."],["The hen pecks at the lunch!","התרנגולת מנקרת את ארוחת הצהריים!"],["Chad and the hen munch and munch.","צ׳אד והתרנגולת לועסים ולועסים."]]
 },
 th:{
  words:[["thin","דק, רזה"],["thick","עבה"],["bath","אמבטיה"],["math","מתמטיקה"],["moth","עש"],["path","שביל"],["with","עם"],["this","זה, הזה"],
         ["that","ההוא, ש-"],["them","אותם"],["when","מתי, כש-"],["which","איזה"],["thud","חבטה"],["whip","שוט. גם: להקציף"],["tenth","עשירי"],["sixth","שישי"]],
  listen:[["than",["than","then","thin"]],["sick",["sick","thick"]],["fin",["fin","thin"]]],
  ladder:["ten","then","than","tan"],
  reads:[["Beth and Seth","בת׳ וסת׳"],["When is lunch?","מתי ארוחת הצהריים?"],["Which hat is his?","איזה כובע הוא שלו?"],
         ["Then the dog got up.","ואז הכלב קם."],["Beth can sit with them.","בת׳ יכולה לשבת איתם."]],
  para:[["Seth has a cat, Whiz.","לסת׳ יש חתול, וויז."],["Whiz can run with Seth.","וויז יכול לרוץ עם סת׳."],["When Seth sits, Whiz sits.","כשסת׳ יושב, וויז יושב."],
        ["Then Whiz hid in the shed.","ואז וויז התחבא במחסן."],["Which shed? That shed!","איזה מחסן? המחסן ההוא!"],["Seth gets Whiz. Whiz is with him.","סת׳ מוצא את וויז. וויז איתו."]]
 },
 ng:{
  words:[["ring","טבעת. גם: לצלצל"],["king","מלך"],["sing","לשיר"],["wing","כנף"],["long","ארוך"],["song","שיר"],["sink","כיור. גם: לשקוע"],["pink","ורוד"],
         ["bank","בנק"],["wink","קריצה"],["fox","שועל"],["six","שש"],["hang","לתלות"],["lung","ריאה"],["junk","גרוטאות, זבל"],["mix","לערבב"]],
  listen:[["thing",["thin","thing","think"]],["fang",["fan","fang"]],["tank",["tack","tank"]]],
  ladder:["sang","sung","rung","rang","bang"],
  reads:[["a bang and a honk","בום וצפירה"],["The bell rang.","הפעמון צלצל."],["Hank can think.","האנק יודע לחשוב."],
         ["The ship sank.","הספינה טבעה."],["Max can fix the van.","מקס יכול לתקן את הטנדר."]],
  para:[["Hank has a fish tank.","להאנק יש אקווריום."],["Hank sang to the fish.","האנק שר לדג."],["The fish hid in a box.","הדג התחבא בקופסה."],
        ["Then the bell rang.","ואז הפעמון צלצל."],["Hank ran to the van.","האנק רץ לטנדר."],["The fish is back. Thanks, Hank!","הדג יצא שוב. תודה, האנק!"]]
 },
 r2:{
  words:[["ship","ספינה"],["chip","צ׳יפס, שבב"],["thin","דק, רזה"],["duck","ברווז"],["ring","טבעת"],["bell","פעמון"],["fish","דג"],["chick","אפרוח"],
         ["bath","אמבטיה"],["sink","כיור"],["kiss","נשיקה"],["which","איזה"],["shock","הלם"],["check","לבדוק"],["tank","מיכל, טנק"],["whip","שוט. גם: להקציף"]],
  listen:[["shin",["chin","shin","thin"]],["mesh",["mesh","mess"]],["sung",["sun","sung","sunk"]],["dock",["deck","dock","duck"]]],
  ladder:["mat","math","mash","cash","catch"],
  reads:[["a moth on a dish","עש על צלחת"],["a king and his chess set","מלך וערכת השחמט שלו"],["Rick had a rash on his neck.","לריק הייתה פריחה על הצוואר."],
         ["When will Hank get back?","מתי האנק יחזור?"],["Hush! The pup naps in the shed.","ששש! הגור נמנם במחסן."]],
  para:[["Chad and Beth sit on a dock.","צ׳אד ובת׳ יושבים על רציף."],["Chad has a fishing rod.","לצ׳אד יש חכה."],["Then a big thing tugs on the rod!","ואז משהו גדול מושך את החכה!"],
        ["Chad and Beth tug and tug.","צ׳אד ובת׳ מושכים ומושכים."],["It is a big, wet sock!","זו גרב גדולה ורטובה!"],["Beth and Chad yell: Such luck!","בת׳ וצ׳אד צועקים: איזה מזל!"]]
 },
 /* ===== עולם 3: גבעת הצירופים ===== */
 bl1:{
  words:[["stop","לעצור"],["frog","צפרדע"],["flag","דגל"],["crab","סרטן"],["drum","תוף"],["clap","למחוא כפיים"],["snap","לפצח, להקיש"],["plan","תוכנית"],
         ["spin","להסתובב"],["step","צעד, מדרגה"],["swim","לשחות"],["grin","חיוך רחב"],["sled","מזחלת"],["plum","שזיף"],["brick","לבנה"],["glad","שמח"]],
  listen:[["slip",["sip","slip","lip"]],["crib",["crib","rib"]],["fled",["fed","fled","led"]],["snack",["sack","snack","snap"]]],
  ladder:["rim","grim","grip","trip","trap","tram"],
  reads:[["a black cat","חתול שחור"],["a snack for Fred","חטיף לפרד"],["Fred can skip and jog.","פרד יודע לדלג ולרוץ ריצה קלה."],
         ["The cat slid on the mat.","החתול החליק על השטיחון."],["Did Glen trip?","האם גלן מעד?"]],
  para:[["Fred has a black cat, Plop.","לפרד יש חתול שחור, פלופ."],["Plop slips on the wet rug.","פלופ מחליק על השטיח הרטוב."],["Plop grabs a snack.","פלופ חוטף חטיף."],
        ["Fred: Drop it, Plop!","פרד: תפיל את זה, פלופ!"],["Plop drops the snack.","פלופ מפיל את החטיף."],["Fred pets Plop, and Plop sits still.","פרד מלטף את פלופ, ופלופ יושב בשקט."]]
 },
 bl2:{
  words:[["hand","יד"],["sand","חול"],["tent","אוהל"],["nest","קן"],["lamp","מנורה"],["jump","לקפוץ"],["milk","חלב"],["gift","מתנה"],
         ["belt","חגורה"],["desk","שולחן כתיבה"],["best","הכי טוב"],["help","לעזור"],["pond","בריכה, אגם קטן"],["wind","רוח"],["lift","להרים"],["mask","מסכה"]],
  listen:[["went",["wet","went","west"]],["mint",["mitt","mint"]],["camp",["cap","camp","cramp"]]],
  ladder:["men","mend","bend","bent","rent","rest"],
  reads:[["a soft hat","כובע רך"],["a list and a pen","רשימה ועט"],["Kent can bend and stand.","קנט יכול להתכופף ולעמוד."],
         ["Mom left the bag.","אמא השאירה את התיק."],["The dog can sniff the rug.","הכלב יכול לרחרח את השטיח."]],
  para:[["Ann went to camp.","אן נסעה למחנה."],["At camp, Ann felt sad.","במחנה, אן הרגישה עצובה."],["Ann had no pals at camp.","לאן לא היו חברים במחנה."],
        ["Then Kim sat next to Ann.","ואז קים ישבה ליד אן."],["Kim and Ann went on a hunt for bugs.","קים ואן יצאו לציד חרקים."],["Ann is not sad. Ann has a pal!","אן לא עצובה. לאן יש חברה!"]]
 },
 bl3:{
  words:[["string","חוט"],["strap","רצועה"],["strong","חזק"],["split","לפצל, לחלק"],["splash","התזה, שפריץ"],["scrub","לקרצף"],["scrap","פיסה, שארית"],["spring","אביב. גם: קפיץ"],
         ["sprint","ריצה מהירה"],["squid","דיונון"],["shrimp","שרימפס"],["scratch","לשרוט, לגרד"],["strip","פס, רצועה"],["strict","קפדן"],["script","תסריט"],["shrink","להתכווץ"]],
  listen:[["struck",["stuck","struck"]],["splat",["spat","splat"]],["shred",["shed","shred"]]],
  ladder:["sum","rum","drum","strum"],
  reads:[["a big stretch","מתיחה גדולה"],["Fred can strum.","פרד יודע לפרוט על גיטרה."],["Splat! The egg fell.","פלאץ! הביצה נפלה."],
         ["The cat is stuck in the shrub.","החתול תקוע בשיח."],["Fred shreds the list.","פרד גורס את הרשימה."]],
  para:[["Greg has a dog, Scruff.","לגרג יש כלב, סקראף."],["Scruff can stretch and jump.","סקראף יודע להתמתח ולקפוץ."],["Scruff got stuck in a shrub.","סקראף נתקע בשיח."],
        ["Greg ran to the shrub.","גרג רץ אל השיח."],["Greg gets Scruff out. Splat! In the mud.","גרג מוציא את סקראף. פלאץ! לתוך הבוץ."],["Scruff is a mess, and Greg is a mess!","סקראף מלוכלך, וגם גרג מלוכלך!"]]
 },
 s:{
  words:[["ants","נמלים"],["eggs","ביצים"],["cats","חתולים"],["dogs","כלבים"],["bugs","חרקים"],["beds","מיטות"],["pens","עטים"],["boxes","קופסאות"],
         ["foxes","שועלים"],["dishes","צלחות"],["wishes","משאלות"],["buses","אוטובוסים"],["pigs","חזירים"],["maps","מפות"],["dresses","שמלות"],["benches","ספסלים"]],
  listen:[["hens",["hen","hens"]],["fixes",["fix","fixes"]],["nuts",["nut","nuts"]]],
  ladder:["bag","bags","rags","rag","rug","rugs"],
  reads:[["six hens","שש תרנגולות"],["ten red hats","עשרה כובעים אדומים"],["The kids sit on the rugs.","הילדים יושבים על השטיחים."],
         ["Mom fixes the lamps.","אמא מתקנת את המנורות."],["The ducks swim in the ponds.","הברווזים שוחים בבריכות."]],
  para:[["Tom has ten frogs.","לטום יש עשר צפרדעים."],["The frogs sit on logs.","הצפרדעים יושבות על בולי עץ."],["The frogs jump in the ponds.","הצפרדעים קופצות לבריכות."],
        ["Tom gets nets and jugs.","טום מביא רשתות וכדים."],["The frogs hop on the rocks.","הצפרדעים מקפצות על הסלעים."],["Tom claps. Frogs and kids hop and splash!","טום מוחא כפיים. צפרדעים וילדים מקפצים ומתיזים מים!"]]
 },
 heart1:{
  words:[["the","ה- (הידיעה)"],["was","היה"],["of","של"],["to","אל, ל-"],["said","אמר"],["are","הם, אתם (בהווה)"],["you","את, אתה, אתם"],["your","שלך, שלכם"],
         ["they","הם, הן"],["have","יש לי, יש להם"],["do","לעשות"],["what","מה"],["were","היו"],["there","שם"],["where","איפה"],["says","אומר"]],
  irreg:{were:"נשמעת <b>\"וֶור\"</b>: ה-e בסוף שקטה, ו-er נשמעת כמו ב-her.",
         there:"נשמעת <b>\"דֶ׳ר\"</b>: th רכה, ו-ere נשמעת אֶר. בדיוק כמו their.",
         where:"נשמעת <b>\"וֶור\"</b>: ה-h שקטה, ו-ere נשמעת אֶר.",
         says:"נשמעת <b>\"סֶז\"</b>: ay נשמעת אֶ קצרה, וה-s כמו ז. בדיוק כמו said."},
  listen:[["put",["put","pot","pat"]],["from",["from","form","frog"]],["full",["full","fill","fell"]]],
  reads:[["a cup of hot milk","כוס חלב חם"],["They are in the tent.","הם באוהל."],["What do you have?","מה יש לך?"],
         ["Your hat was wet.","הכובע שלך היה רטוב."],["Mom said: Get in bed!","אמא אמרה: תיכנס למיטה!"]],
  para:[["Sam and Pam have a dog.","לסאם ולפאם יש כלב."],["The dog was in the pond.","הכלב היה בבריכה."],["What a mess!","איזה בלגן!"],
        ["Mom said: Do you have a rag?","אמא אמרה: יש לכם סמרטוט?"],["They rub the dog with the rag.","הם משפשפים את הכלב עם הסמרטוט."],["Your dog is not wet, said Mom.","״הכלב שלכם כבר לא רטוב״, אמרה אמא."]]
 },
 r2b:{
  words:[["stamp","בול"],["frog","צפרדע"],["hand","יד"],["tent","אוהל"],["strap","רצועה"],["split","לפצל"],["cats","חתולים"],["boxes","קופסאות"],
         ["jump","לקפוץ"],["crab","סרטן"],["splash","התזה"],["gifts","מתנות"],["twist","לסובב"],["crisp","פריך"],["blend","לערבב"],["skunk","בואש"]],
  listen:[["slim",["slim","slam","swim"]],["trust",["trust","rust"]],["stuck",["stuck","stack","stick"]]],
  ladder:["rip","drip","drop","crop","prop"],
  reads:[["a flag and a drum","דגל ותוף"],["plums and nuts","שזיפים ואגוזים"],["Brad slept in a hut.","בראד ישן בבקתה."],
         ["Gran has a big stack of hats.","לסבתא יש ערימה גדולה של כובעים."],["The grass is damp.","הדשא לח."]],
  para:[["Gran and Brad went to the pond.","סבתא ובראד הלכו לבריכה."],["Brad has a net and a jug.","לבראד יש רשת וכד."],["Brad spots a fish in the pond.","בראד מבחין בדג בבריכה."],
        ["Brad stands still and grips the net.","בראד עומד בשקט ואוחז ברשת."],["Swish! Brad lifts the net.","ווש! בראד מרים את הרשת."],["In the net is just mud. Gran grins.","ברשת יש רק בוץ. סבתא מחייכת."]]
 },
 /* ===== עולם 4: אגם ה-e הקסומה וה-y ===== */
 ae:{
  words:[["ape","קוף גדול"],["ate","אכל"],["cake","עוגה"],["game","משחק"],["name","שם"],["lake","אגם"],["gate","שער"],["tape","סרט הדבקה"],
         ["cape","גלימה"],["made","עשה, הכין"],["wave","גל. גם: לנופף"],["plane","מטוס"],["bake","לאפות"],["safe","בטוח. גם: כספת"],["grape","ענב"],["skate","להחליק"]],
  listen:[["mane",["man","mane"]],["cane",["can","cane"]],["pale",["pal","pale"]],["fade",["fad","fade"]]],
  ladder:["mat","mate","late","lane","pane","pan"],
  reads:[["a snake in a cave","נחש במערה"],["a big crate","ארגז גדול"],["Kate came late.","קייט הגיעה מאוחר."],
         ["Dave gave Kate a vase.","דייב נתן לקייט אגרטל."],["Jane is brave.","ג׳יין אמיצה."]],
  para:[["Dave has a pet snake, Blaze.","לדייב יש נחש, בלייז."],["Blaze naps in a crate.","בלייז נמנם בארגז."],["Dave did not shut the crate.","דייב לא סגר את הארגז."],
        ["Blaze slid to the shade.","בלייז החליק אל הצל."],["Dave ran to the shade.","דייב רץ אל הצל."],["Dave gave Blaze a hug, and Blaze is back in the crate.","דייב נתן לבלייז חיבוק, ובלייז חזר לארגז."]]
 },
 ie:{
  words:[["ice","קרח"],["bike","אופניים"],["kite","עפיפון"],["time","זמן"],["five","חמש"],["ride","לרכוב"],["line","קו, שורה"],["pine","אורן"],
         ["hide","להתחבא"],["nine","תשע"],["smile","חיוך"],["white","לבן"],["bite","לנשוך"],["slide","מגלשה"],["wipe","לנגב"],["prize","פרס"]],
  listen:[["fine",["fin","fine"]],["dime",["dim","dime"]],["ripe",["rip","ripe"]],["spine",["spin","spine"]]],
  ladder:["win","wine","wide","wife","life","lime"],
  reads:[["a ripe lime","ליים בשל"],["a fire in the pit","אש בבור"],["Mike likes limes.","מייק אוהב ליים."],
         ["Mike and his wife dine.","מייק ואשתו סועדים."],["Is it fine?","האם זה בסדר?"]],
  para:[["Mike has a fine dog, Spike.","למייק יש כלב נהדר, ספייק."],["Spike likes to dive in the pond.","ספייק אוהב לצלול לבריכה."],["Spike and Mike hike a mile.","ספייק ומייק צועדים מייל."],
        ["Mike has to rest a while.","מייק צריך לנוח קצת."],["Spike shakes, and Mike is wet!","ספייק מתנער, ומייק רטוב!"],["Mike likes Spike a lot.","מייק אוהב את ספייק מאוד."]]
 },
 oe:{
  words:[["home","בית"],["bone","עצם"],["nose","אף"],["rose","ורד"],["hope","תקווה"],["note","פתק"],["rope","חבל"],["hole","חור"],
         ["joke","בדיחה"],["stone","אבן"],["phone","טלפון"],["cone","גביע, קונוס"],["hose","צינור השקיה"],["globe","גלובוס"],["smoke","עשן"],["stove","כיריים"]],
  listen:[["code",["cod","code"]],["robe",["rob","robe"]],["slope",["slop","slope"]]],
  ladder:["cod","code","mode","mole","pole","poke"],
  reads:[["a mole on the slope","חפרפרת על המדרון"],["a lone pole","עמוד בודד"],["Mom drove to the pond.","אמא נסעה לבריכה."],
         ["Bob broke a pole.","בוב שבר עמוד."],["Tom woke up at nine.","טום התעורר בתשע."]],
  para:[["Jo has a mole.","לג׳ו יש חפרפרת."],["The mole dug and dug.","החפרפרת חפרה וחפרה."],["Jo woke up and spoke to the mole.","ג׳ו התעוררה ודיברה עם החפרפרת."],
        ["The mole poked up.","החפרפרת הציצה למעלה."],["Jo froze.","ג׳ו קפאה במקום."],["Jo smiled and let the mole be.","ג׳ו חייכה ונתנה לחפרפרת להיות."]]
 },
 ue:{
  words:[["use","להשתמש"],["cute","חמוד"],["cube","קובייה"],["tube","צינור"],["mule","פרד"],["rule","חוק"],["flute","חליל"],["tune","מנגינה"],
         ["dune","דיונה, גבעת חול"],["these","אלה"],["theme","נושא"],["mute","שקט, בלי קול"],["rude","גס רוח"],["prune","שזיף מיובש"],["eve","ערב שלפני חג"],["plume","נוצה"]],
  listen:[["huge",["hug","huge"]],["cut",["cut","cute"]],["them",["them","theme"]]],
  ladder:["fun","fume","fuse","fuss"],
  reads:[["a huge tub","אמבט ענק"],["Pete and Steve","פיט וסטיב"],["Luke has a huge mug.","ללוק יש ספל ענק."],
         ["Steve will compete.","סטיב יתחרה."],["Can Luke fix the fuse?","האם לוק יכול לתקן את הנתיך?"]],
  para:[["Pete has a huge pup, Duke.","לפיט יש גור ענק, דיוק."],["Duke likes Steve.","דיוק אוהב את סטיב."],["Steve hums to Duke.","סטיב מזמזם לדיוק."],
        ["Duke sits on Steve!","דיוק מתיישב על סטיב!"],["Steve: Duke, you are huge!","סטיב: דיוק, אתה ענק!"],["Pete gets Duke off. Steve is fine.","פיט מוריד את דיוק. סטיב בסדר."]]
 },
 cg:{
  words:[["ice","קרח"],["city","עיר"],["cent","סנט"],["face","פנים"],["race","מרוץ"],["rice","אורז"],["mice","עכברים"],["gem","אבן חן"],
         ["page","עמוד"],["cage","כלוב"],["edge","קצה"],["badge","תג"],["nice","נחמד"],["fence","גדר"],["huge","ענק"],["judge","שופט"]],
  listen:[["lace",["lack","lace"]],["stage",["stag","stage"]],["spice",["spice","spike"]]],
  ladder:["rag","rage","wage","sage","sale"],
  reads:[["a slice of cake","פרוסת עוגה"],["the price of gas","מחיר הדלק"],["Grace can dance.","גרייס יודעת לרקוד."],
         ["Tim is at the gym.","טים בחדר הכושר."],["Place the cup on the ledge.","שים את הכוס על המדף."]],
  para:[["Grace has a pet, Spice.","לגרייס יש חיית מחמד, ספייס."],["Spice can dance on the stage.","ספייס יודע לרקוד על הבמה."],["Spice gets a prize.","ספייס מקבל פרס."],
        ["Grace has a slice of cake for Spice.","לגרייס יש פרוסת עוגה בשביל ספייס."],["Spice ate the slice.","ספייס אכל את הפרוסה."],["Grace gave Spice a big hug.","גרייס נתנה לספייס חיבוק גדול."]]
 },
 y1:{
  words:[["my","שלי"],["by","ליד, על ידי"],["fly","לעוף. גם: זבוב"],["cry","לבכות"],["dry","יבש"],["try","לנסות"],["sky","שמיים"],["shy","ביישן"],
         ["why","למה"],["spy","מרגל"],["fry","לטגן"],["sly","ערמומי"],["pry","לחטט"],["spry","זריז ורענן"],["sty","דיר חזירים"],["ply","שכבה"]],
  listen:[["fly",["fly","flee","flu"]],["try",["try","tray","tree"]],["cry",["cry","crow"]]],
  ladder:["sky","sly","sty","spy","spry"],
  reads:[["my red kite","העפיפון האדום שלי"],["a bike by the gate","אופניים ליד השער"],["Why is Jake sad?","למה ג׳ייק עצוב?"],
         ["Jake lost his kite.","ג׳ייק איבד את העפיפון שלו."],["My mom will help him.","אמא שלי תעזור לו."]],
  para:[["Jake has a kite.","לג׳ייק יש עפיפון."],["The kite is red and white.","העפיפון אדום ולבן."],["Jake runs by the lake.","ג׳ייק רץ ליד האגם."],
        ["The wind lifts the kite up, up, up!","הרוח מרימה את העפיפון למעלה, למעלה, למעלה!"],["Then the kite gets stuck in a pine.","ואז העפיפון נתקע בעץ אורן."],["Why me? said Jake. Then his mom got the kite.","״למה אני?״ אמר ג׳ייק. ואז אמא שלו הורידה את העפיפון."]]
 },
 y2:{
  words:[["happy","שמח","ˈhap·py"],["funny","מצחיק","ˈfun·ny"],["sunny","שמשי","ˈsun·ny"],["puppy","גור כלבים","ˈpup·py"],["baby","תינוק","ˈba·by"],["candy","סוכרייה","ˈcan·dy"],
         ["lucky","בר מזל","ˈluck·y"],["silly","טיפשי, מצחיק","ˈsil·ly"],["fifty","חמישים","ˈfif·ty"],["penny","פני, מטבע קטן","ˈpen·ny"],["jelly","ג׳לי","ˈjel·ly"],["windy","סוער, עם רוח","ˈwind·y"],
         ["messy","מבולגן","ˈmes·sy"],["twenty","עשרים","ˈtwen·ty"],["muddy","מלא בוץ","ˈmud·dy"],["belly","בטן","ˈbel·ly"]],
  listen:[["daddy",["daddy","dad"]],["kitty",["kitty","kit"]],["fussy",["fuss","fussy"]]],
  ladder:["fog","foggy","soggy"],
  reads:[["a fussy kitty","חתלתולה בררנית"],["a tidy desk","שולחן מסודר"],["Daddy is grumpy.","אבא מצוברח."],
         ["The kitty is tiny.","החתלתולה קטנטנה."],["Ziggy is a jolly pup.","זיגי הוא גור עליז."]],
  para:[["Molly has a kitty, Fluffy.","למולי יש חתלתולה, פלאפי."],["Fluffy is tiny and fussy.","פלאפי קטנטנה ובררנית."],["Fluffy hid in a dusty box.","פלאפי התחבאה בקופסה מאובקת."],
        ["Molly is grumpy.","מולי מצוברחת."],["Then Fluffy pops up. Molly is jolly!","ואז פלאפי מופיעה פתאום. מולי עליזה!"],["Molly hugs her tiny kitty.","מולי מחבקת את החתלתולה הקטנטנה שלה."]]
 },
 open:{
  words:[["go","ללכת"],["no","לא"],["so","כל כך, אז"],["he","הוא"],["me","אותי, לי"],["we","אנחנו"],["she","היא"],["be","להיות"],
         ["hi","היי"],["flu","שפעת"],["robot","רובוט","ˈro·bot"],["music","מוזיקה","ˈmu·sic"],["solo","סולו, לבד","ˈso·lo"],["tulip","צבעוני (פרח)","ˈtu·lip"],["bonus","בונוס","ˈbo·nus"],["duo","צמד","ˈdu·o"]],
  listen:[["hen",["he","hen"]],["got",["go","got"]],["wet",["we","wet"]]],
  ladder:["bed","be","me","met"],
  reads:[["a tiny tiger","נמר קטנטן"],["No, Jo!","לא, ג׳ו!"],["She is so happy.","היא כל כך שמחה."],
         ["We will be at home.","אנחנו נהיה בבית."],["He is a pilot.","הוא טייס."]],
  para:[["Jo has a pony.","לג׳ו יש פוני."],["The pony is so tiny!","הפוני כל כך קטנטן!"],["Jo and the pony go to the lake.","ג׳ו והפוני הולכים לאגם."],
        ["She rides the pony by the lake.","היא רוכבת על הפוני ליד האגם."],["The pony likes Jo a lot.","הפוני אוהב את ג׳ו מאוד."],["Jo hums a tune. The pony nods.","ג׳ו מזמזמת מנגינה. הפוני מהנהן."]]
 },
 r3:{
  words:[["cake","עוגה"],["bike","אופניים"],["home","בית"],["cute","חמוד"],["my","שלי"],["happy","שמח","ˈhap·py"],["go","ללכת"],["city","עיר","ˈcit·y"],
         ["page","עמוד"],["she","היא"],["fly","לעוף"],["smile","חיוך"],["snake","נחש"],["rope","חבל"],["tune","מנגינה"],["nice","נחמד"]],
  listen:[["hop",["hop","hope"]],["shine",["shin","shine"]],["cub",["cub","cube"]],["tap",["tap","tape"]]],
  ladder:["rid","ride","hide","hike","like","lime"],
  reads:[["a white kite","עפיפון לבן"],["a muddy bone","עצם מלאה בוץ"],["Kate rode a pony.","קייט רכבה על פוני."],
         ["The baby can wave.","התינוק יודע לנופף."],["Why is the gate shut?","למה השער סגור?"]],
  para:[["Mike has a plan.","למייק יש תוכנית."],["He will bake lime buns.","הוא יאפה לחמניות ליים."],["He bakes and bakes.","הוא אופה ואופה."],
        ["Oh no! The buns are dry.","אוי לא! הלחמניות יבשות."],["Mike is sad. Then Jane comes.","מייק עצוב. ואז ג׳יין מגיעה."],["Jane: I like dry buns. Yum!","ג׳יין: אני אוהבת לחמניות יבשות. טעים!"]]
 },
 /* ===== עולם 5: הר צמדי התנועות ===== */
 ee:{
  words:[["eat","לאכול"],["east","מזרח"],["see","לראות"],["bee","דבורה"],["tree","עץ"],["feet","רגליים"],["sheep","כבשה, כבשים"],["green","ירוק"],
         ["sea","ים"],["tea","תה"],["leaf","עלה"],["dream","חלום"],["sleep","לישון"],["beach","חוף ים"],["teeth","שיניים"],["seed","זרע"]],
  listen:[["peel",["pill","peel"]],["beat",["bat","bet","beat"]],["leap",["lap","lip","leap"]],["deep",["dip","deep"]]],
  ladder:["bed","bead","beak","peak","peek","week"],
  reads:[["a clean sheet","סדין נקי"],["a peach and a pea","אפרסק ואפונה"],["Pete can sweep.","פיט יודע לטאטא."],
         ["The seal can swim.","כלב הים יודע לשחות."],["Keep the heat in.","שמרי את החום בפנים."]],
  para:[["Lee has a pet seal, Squeak.","ללי יש כלב ים, סקוויק."],["Squeak likes to swim deep.","סקוויק אוהב לשחות עמוק."],["Each week, Lee feeds Squeak a big meal.","בכל שבוע, לי מאכילה את סקוויק בארוחה גדולה."],
        ["Squeak gets a fish and squeals.","סקוויק מקבל דג וצווח."],["Then Squeak naps in the heat.","ואז סקוויק נמנם בחום."],["Lee peeks at Squeak. Sweet seal!","לי מציצה על סקוויק. איזה כלב ים מתוק!"]]
 },
 ai:{
  words:[["aim","לכוון"],["aid","עזרה"],["rain","גשם"],["train","רכבת"],["tail","זנב"],["mail","דואר"],["snail","חילזון"],["wait","לחכות"],
         ["day","יום"],["play","לשחק"],["say","להגיד"],["tray","מגש"],["paint","לצבוע"],["stay","להישאר"],["gray","אפור"],["brain","מוח"]],
  listen:[["main",["man","main"]],["bait",["bat","bait"]],["pay",["pay","pie"]]],
  ladder:["lad","laid","maid","may","way"],
  reads:[["a pail of sand","דלי של חול"],["a big sail","מפרש גדול"],["Gail may go.","גייל יכולה ללכת."],
         ["The hay is wet.","החציר רטוב."],["Ray paid for the bait.","ריי שילם על הפיתיון."]],
  para:[["Gail and Ray sail on the bay.","גייל וריי שטים במפרץ."],["Ray has bait in a pail.","לריי יש פיתיון בדלי."],["Gail sits by the sail.","גייל יושבת ליד המפרש."],
        ["Ray gets a fish. Yay!","ריי תופס דג. יש!"],["Then the waves get big.","ואז הגלים נעשים גדולים."],["Gail and Ray sail back, safe.","גייל וריי שטים בחזרה, בשלום."]]
 },
 oa:{
  words:[["oak","אלון"],["oat","שיבולת שועל"],["boat","סירה"],["coat","מעיל"],["goat","עז"],["road","כביש, דרך"],["soap","סבון"],["toast","טוסט"],
         ["snow","שלג"],["slow","איטי"],["grow","לגדול"],["toe","אצבע של הרגל"],["loaf","כיכר לחם"],["foam","קצף"],["show","להראות. גם: הצגה"],["float","לצוף"]],
  listen:[["toad",["tad","toad"]],["load",["lad","load"]],["low",["lay","low"]],["hoe",["hoe","he"]]],
  ladder:["mat","moat","moan","loan","load"],
  reads:[["a toad on a log","קרפדה על בול עץ"],["a row of tents","שורה של אוהלים"],["Joan can row.","ג׳ואן יודעת לחתור."],
         ["The crow is black.","העורב שחור."],["Do not moan, Joe!","אל תתבכיין, ג׳ו!"]],
  para:[["Joan has a pet toad, Bo.","לג׳ואן יש קרפדה, בו."],["Bo can croak.","בו יודע לקרקר."],["Joan and Bo row on the pond.","ג׳ואן ובו חותרים בבריכה."],
        ["A crow lands next to Bo.","עורב נוחת ליד בו."],["Bo croaks at the crow.","בו מקרקר על העורב."],["The crow flies off. Go, Bo!","העורב עף משם. קדימה, בו!"]]
 },
 igh:{
  words:[["high","גבוה"],["night","לילה"],["light","אור"],["right","ימין, נכון"],["sight","ראייה, מראה"],["tie","עניבה. גם: לקשור"],["pie","פשטידה, פאי"],["lie","לשקר. גם: לשכב"],
         ["find","למצוא"],["kind","נחמד, סוג"],["mind","מוח, דעת"],["wild","פראי"],["bright","בהיר, מבריק"],["flight","טיסה"],["child","ילד"],["sigh","אנחה"]],
  listen:[["might",["mitt","might"]],["mild",["mild","mill"]],["blind",["blend","blind"]]],
  ladder:["mitt","might","tight","thigh"],
  reads:[["a tight lid","מכסה הדוק"],["a blind mole","חפרפרת עיוורת"],["Tim might be late.","טים אולי יאחר."],
         ["Do not fight, kids!","אל תריבו, ילדים!"],["The day is mild.","היום נעים, לא חם ולא קר."]],
  para:[["It is late, and Mike is in bed.","מאוחר, ומייק במיטה."],["Mike has a fright.","מייק נבהל."],["Is it a bat? Is it a mole?","האם זה עטלף? האם זו חפרפרת?"],
        ["Mike grips his pillow tight.","מייק אוחז חזק בכרית שלו."],["Mom: It is just a moth, Mike.","אמא: זה רק עש, מייק."],["Mike smiles. Then he sleeps.","מייק מחייך. ואז הוא נרדם."]]
 },
 oo:{
  words:[["moon","ירח"],["zoo","גן חיות"],["food","אוכל"],["spoon","כפית"],["room","חדר"],["cool","קריר, מגניב"],["pool","בריכה"],["book","ספר"],
         ["look","להסתכל"],["cook","לבשל"],["foot","כף רגל"],["wood","עץ (חומר)"],["tooth","שן"],["boot","מגף"],["good","טוב"],["hook","וו"]],
  listen:[["fool",["full","fool"]],["noon",["none","noon"]],["took",["took","tick","tuck"]]],
  ladder:["boo","boom","broom","bloom","gloom"],
  reads:[["a broom and a mop","מטאטא ומגב"],["a goose on the roof","אווז על הגג"],["Luke took a nap at noon.","לוק נמנם בצהריים."],
         ["The moose is huge.","האייל ענק."],["Boo! said Ted.","״בו!״ אמר טד."]],
  para:[["Ted has a goose, Zoom.","לטד יש אווז, זום."],["Zoom stood on the roof.","זום עמד על הגג."],["Ted got a broom.","טד הביא מטאטא."],
        ["Shoo, Zoom, shoo!","שו, זום, שו!"],["Zoom swoops down to Ted.","זום צולל למטה אל טד."],["Ted and Zoom are pals.","טד וזום חברים."]]
 },
 ew:{
  words:[["new","חדש"],["few","מעט"],["dew","טל"],["chew","ללעוס"],["grew","גדל"],["flew","עף"],["blew","נשף"],["stew","תבשיל"],
         ["blue","כחול"],["glue","דבק"],["true","נכון, אמיתי"],["clue","רמז"],["drew","צייר"],["crew","צוות"],["screw","בורג"],["threw","זרק"]],
  listen:[["brew",["brew","brow"]],["cue",["cue","cow"]],["sue",["sue","see","saw"]]],
  ladder:["blow","brow","brew","brews"],
  reads:[["the news at nine","החדשות בתשע"],["a statue in the park","פסל בפארק"],["Sue knew it.","סו ידעה את זה."],
         ["Andrew can rescue the cat.","אנדרו יכול להציל את החתול."],["The cat said mew.","החתול אמר מיאו."]],
  para:[["It is Tuesday.","היום יום שלישי."],["Andrew and Sue go to the zoo.","אנדרו וסו הולכים לגן החיות."],["Sue sees a newt in a pond.","סו רואה טריטון בבריכה."],
        ["Andrew: Is it a lizard?","אנדרו: האם זו לטאה?"],["Sue: No, it is a newt. I knew it!","סו: לא, זה טריטון. ידעתי!"],["They tell the news to Mom.","הם מספרים את החדשות לאמא."]]
 },
 heart2:{
  words:[["one","אחד"],["two","שתיים"],["once","פעם אחת"],["does","עושה. בשאלה: האם"],["come","לבוא"],["some","קצת, כמה"],["done","גמור, נעשה"],["gone","הלך, נעלם"],
         ["love","אהבה, לאהוב"],["give","לתת"],["live","לגור, לחיות"],["who","מי"],["none","אף אחד, כלום"],["whose","של מי"],["move","לזוז"],["other","אחר"]],
  irreg:{none:"נשמעת <b>\"נַאן\"</b>: o נשמעת אַ, בדיוק כמו ב-one. ה-e בסוף שקטה ולא עושה קסם.",
         whose:"נשמעת <b>\"הוּז\"</b>: ה-w שקטה, o נשמעת אוּ, וה-s כמו ז. כמו who.",
         move:"נשמעת <b>\"מוּב\"</b> עם v: o נשמעת אוּ. ה-e בסוף שקטה.",
         other:"נשמעת <b>\"אַדֶ׳ר\"</b>: o נשמעת אַ, th רכה. כמו ב-mother."},
  listen:[["glove",["glove","globe"]],["front",["front","font"]],["month",["month","moth"]]],
  reads:[["one blue glove","כפפה כחולה אחת"],["two of them","שניים מהם"],["Come in! said Mom.","״תיכנס!״ אמרה אמא."],
         ["Who has some milk?","למי יש קצת חלב?"],["Does the dog love the cat?","האם הכלב אוהב את החתול?"]],
  para:[["Once, Tom lost a glove.","פעם אחת, טום איבד כפפה."],["Tom looked in his room, but the glove was gone.","טום חיפש בחדר שלו, אבל הכפפה נעלמה."],["Who took my glove? said Tom.","״מי לקח את הכפפה שלי?״ אמר טום."],
        ["Mom said: Come and look by the front door.","אמא אמרה: בוא תסתכל ליד דלת הכניסה."],["There was the glove, under the dog!","שם הייתה הכפפה, מתחת לכלב!"],["The dog loves the glove too!","גם הכלב אוהב את הכפפה!"]]
 },
 r4:{
  words:[["tree","עץ"],["rain","גשם"],["boat","סירה"],["night","לילה"],["moon","ירח"],["book","ספר"],["new","חדש"],["day","יום"],
         ["snow","שלג"],["eat","לאכול"],["pie","פשטידה, פאי"],["blue","כחול"],["sleep","לישון"],["toast","טוסט"],["light","אור"],["spoon","כפית"]],
  listen:[["beak",["back","beak"]],["chain",["chin","chain"]],["toad",["toad","ted"]],["root",["rot","root"]]],
  ladder:["man","main","moan","mean","meat","seat"],
  reads:[["a goat on a road","עז על כביש"],["a hook and a coat","וו ומעיל"],["Neil paints the gate.","ניל צובע את השער."],
         ["The crow flew to the roof.","העורב עף לגג."],["Keep your feet dry.","תשמור שהרגליים שלך יהיו יבשות."]],
  para:[["Neil and Joan go on a hike.","ניל וג׳ואן יוצאים לטיול."],["They see a goat by the road.","הם רואים עז ליד הכביש."],["The goat chews on a weed.","העז לועסת עשב שוטה."],
        ["Joan feeds the goat a few oats.","ג׳ואן מאכילה את העז בקצת שיבולת שועל."],["The goat bleats.","העז פועה."],["Neil and Joan wave and go home.","ניל וג׳ואן מנופפים והולכים הביתה."]]
 }
});
