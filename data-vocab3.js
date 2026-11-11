/* הרחבת אוצר המילים, עולמות 6 עד 9: 16 מילים בודדות בכל שלב, ובמשפטים, בפסקה, בהקשבה ובסולם יש מילים אחרות.
   נטען אחרי data-vocab2.js ומוסיף עליו. */
Object.assign(window.LEVEL_REWRITE, {
 /* ===== עולם 6: מערת ה-r והצלילים המיוחדים ===== */
 ar:{
  words:[["arm","זרוע"],["art","אמנות"],["car","מכונית"],["star","כוכב"],["farm","חווה"],["park","פארק"],["dark","חשוך"],["jar","צנצנת"],
         ["shark","כריש"],["card","כרטיס"],["barn","אסם"],["cart","עגלה"],["yard","חצר"],["sharp","חד"],["smart","חכם"],["scarf","צעיף"]],
  listen:[["harm",["ham","harm"]],["march",["match","march"]],["part",["pat","part"]]],
  ladder:["bat","bar","bark","mark","marsh"],
  reads:[["a harp and a drum","נבל ותוף"],["a hard part","חלק קשה"],["Mark can bark like a dog.","מארק יודע לנבוח כמו כלב."],
         ["Barb will start the van.","בארב תתניע את הטנדר."],["Is it far?","האם זה רחוק?"]],
  para:[["Mark has a dog, Charlie.","למארק יש כלב, צ׳רלי."],["Charlie likes to bark.","צ׳רלי אוהב לנבוח."],["Charlie ran to the marsh.","צ׳רלי רץ אל הביצות."],
        ["Mark ran after him. It was far!","מארק רץ אחריו. זה היה רחוק!"],["Charlie has mud on his chin.","לצ׳רלי יש בוץ על הסנטר."],["Mark: Charlie, you are a mess! Charlie barks.","מארק: צ׳רלי, אתה מלוכלך כולך! צ׳רלי נובח."]]
 },
 or:{
  words:[["or","או"],["for","בשביל"],["corn","תירס"],["fork","מזלג"],["horn","קרן, צופר"],["storm","סערה"],["short","קצר"],["sport","ספורט"],
         ["born","נולד"],["north","צפון"],["fort","מבצר"],["torch","לפיד, פנס"],["horse","סוס"],["thorn","קוץ"],["stork","חסידה"],["porch","מרפסת בכניסה"]],
  listen:[["port",["pot","port"]],["form",["from","form"]],["cord",["cod","cord"]]],
  ladder:["pot","port","sort","snort"],
  reads:[["a torn shirt","חולצה קרועה"],["a cork in a jug","פקק שעם בכד"],["Norm has a sore leg.","לנורם יש רגל כואבת."],
         ["Norm got a form.","נורם קיבל טופס."],["The store is shut.","החנות סגורה."]],
  para:[["Norm has a pony, Thor.","לנורם יש פוני, ת׳ור."],["Thor can snort and stomp.","ת׳ור יודע לנחור ולרקוע ברגליים."],["In the morning, Thor is not in the barn.","בבוקר, ת׳ור לא באסם."],
        ["Norm looks for Thor on the shore.","נורם מחפש את ת׳ור על החוף."],["Thor is on the shore, by the port.","ת׳ור על החוף, ליד הנמל."],["Norm rides Thor back. Thor snorts.","נורם רוכב על ת׳ור בחזרה. ת׳ור נוחר."]]
 },
 er:{
  words:[["her","שלה, אותה"],["fern","שרך"],["term","מונח, תקופה"],["bird","ציפור"],["girl","ילדה"],["first","ראשון"],["shirt","חולצה"],["fur","פרווה"],
         ["turn","להסתובב, תור"],["burn","לשרוף, כוויה"],["nurse","אחות (רפואית)"],["hurt","לכאוב, לפגוע"],["herd","עדר"],["dirt","לכלוך, אדמה"],["skirt","חצאית"],["purse","ארנק"]],
  listen:[["stir",["stir","star"]],["burst",["bust","burst"]],["perch",["patch","perch"]]],
  ladder:["cub","curb","curl","hurl"],
  reads:[["a big burger","המבורגר גדול"],["a thirsty kid","ילד צמא"],["Kurt can stir the stew.","קורט יכול לערבב את התבשיל."],
         ["Verna is thirty.","ורנה בת שלושים."],["Do not squirt me!","אל תשפריץ עליי!"]],
  para:[["Kurt and Verna sit on the curb.","קורט וורנה יושבים על שפת המדרכה."],["It is hot, and they are thirsty.","חם, והם צמאים."],["Verna gets a hose and squirts Kurt!","ורנה מביאה צינור ומשפריצה על קורט!"],
        ["Kurt is wet, and he is not thirsty now.","קורט רטוב, ועכשיו הוא כבר לא צמא."],["Then Kurt squirts Verna!","ואז קורט משפריץ על ורנה!"],["It is a burst of fun on the curb.","זה פרץ של כיף על המדרכה."]]
 },
 oi:{
  words:[["oil","שמן"],["coin","מטבע"],["boil","להרתיח"],["soil","אדמה"],["join","להצטרף"],["point","נקודה, להצביע"],["foil","נייר כסף"],["spoil","לקלקל"],
         ["boy","ילד, בן"],["toy","צעצוע"],["joy","שמחה"],["soy","סויה"],["noise","רעש"],["voice","קול"],["choice","בחירה"],["moist","לח"]],
  listen:[["joint",["jot","joint"]],["oink",["ink","oink"]],["annoy",["annoy","any"]]],
  ladder:["cool","coil","toil","tool"],
  reads:[["an oyster","צדפה"],["Roy and Troy","רוי וטרוי"],["Do not annoy the cat.","אל תציק לחתול."],
         ["The pig said oink.","החזיר אמר אוינק."],["Roy can not avoid the mud.","רוי לא יכול להתחמק מהבוץ."]],
  para:[["Roy has a pig, Oinky.","לרוי יש חזיר, אוינקי."],["Oinky enjoys the mud.","אוינקי נהנה מהבוץ."],["Oinky is noisy.","אוינקי רעשן."],
        ["Mom: Oinky, do not annoy me!","אמא: אוינקי, אל תציק לי!"],["Oinky just says: Oink, oink!","אוינקי רק אומר: אוינק, אוינק!"],["Roy and Mom smile. Oinky is a royal pig.","רוי ואמא מחייכים. אוינקי הוא חזיר מלכותי."]]
 },
 ou:{
  words:[["out","בחוץ, החוצה"],["ouch","איי!"],["owl","ינשוף"],["cloud","ענן"],["house","בית"],["loud","רועש, חזק"],["shout","לצעוק"],["round","עגול"],
         ["cow","פרה"],["now","עכשיו"],["town","עיירה"],["clown","ליצן"],["mouse","עכבר"],["count","לספור"],["brown","חום"],["crown","כתר"]],
  listen:[["mouth",["moth","mouth"]],["found",["fond","found"]],["down",["done","down"]]],
  ladder:["bound","sound","pound","proud"],
  reads:[["a big crowd","קהל גדול"],["a flower in a pot","פרח בעציץ"],["The dog can howl.","הכלב יודע ליילל."],
         ["Sit down, Howard.","שב, האוורד."],["I found it!","מצאתי את זה!"]],
  para:[["Howard has a hound.","להאוורד יש כלב ציד."],["The hound can sniff the ground.","כלב הציד יודע לרחרח את האדמה."],["Howard: Where is my hat?","האוורד: איפה הכובע שלי?"],
        ["The hound sniffs around the couch.","כלב הציד מרחרח מסביב לספה."],["He found the hat under the couch!","הוא מצא את הכובע מתחת לספה!"],["Howard is proud of his hound. Wow!","האוורד גאה בכלב הציד שלו. וואו!"]]
 },
 aw:{
  words:[["saw","ראה. גם: מסור"],["paw","כף רגל של חיה"],["draw","לצייר"],["straw","קש"],["jaw","לסת"],["haul","לגרור"],["ball","כדור"],["tall","גבוה"],
         ["wall","קיר"],["call","לקרוא, להתקשר"],["talk","לדבר"],["walk","ללכת"],["yawn","לפהק"],["chalk","גיר"],["hawk","נץ"],["fault","אשמה"]],
  listen:[["lawn",["lawn","loan"]],["hall",["hall","hill"]],["salt",["salt","sat"]]],
  ladder:["raw","law","lawn","dawn"],
  reads:[["a fall in the hall","נפילה במסדרון"],["a shawl for Gran","צעיף לסבתא"],["Paul can crawl.","פול יודע לזחול."],
         ["The lawn is small.","המדשאה קטנה."],["Pause and rest.","תעצור ותנוח."]],
  para:[["Paul has a small pup, Fawn.","לפול יש גור קטן, פון."],["At dawn, Fawn is on the lawn.","בשחר, פון על המדשאה."],["Fawn digs in the lawn with his claws.","פון חופר במדשאה עם הציפורניים שלו."],
        ["Paul: Bad pup! That is my lawn!","פול: גור רע! זאת המדשאה שלי!"],["Fawn lies down on the lawn.","פון נשכב על המדשאה."],["Paul is not mad at Fawn.","פול לא כועס על פון."]]
 },
 air:{
  words:[["air","אוויר"],["hair","שיער"],["chair","כיסא"],["fair","הוגן. גם: יריד"],["pair","זוג"],["stair","מדרגה"],["care","אכפתיות, לדאוג"],["share","לחלוק, לשתף"],
         ["scare","להפחיד"],["bear","דוב"],["pear","אגס"],["wear","ללבוש"],["dare","להעז"],["square","ריבוע"],["stare","לבהות"],["swear","להישבע"]],
  listen:[["rare",["rare","rear"]],["spare",["spare","spar"]],["mare",["mare","more"]]],
  ladder:["far","fare","hare","bare","bark"],
  reads:[["a bare foot","רגל יחפה"],["a mare and her foal","סוסה והסייח שלה"],["Clare will repair the car.","קלייר תתקן את המכונית."],
         ["Where is the hare?","איפה הארנבת?"],["Beware of the dog!","היזהרו מהכלב!"]],
  para:[["Clare has a mare, Flair.","לקלייר יש סוסה, פלייר."],["Flair is rare: she is all white.","פלייר נדירה: היא כולה לבנה."],["Clare and Flair go to a show.","קלייר ופלייר הולכות למופע."],
        ["Flair glares at a hare.","פלייר מביטה בכעס בארנבת."],["The hare hops off. Beware, hare!","הארנבת קופצת משם. תיזהרי, ארנבת!"],["Clare pats Flair. What a rare mare!","קלייר מלטפת את פלייר. איזו סוסה נדירה!"]]
 },
 r5:{
  words:[["car","מכונית"],["fork","מזלג"],["bird","ציפור"],["coin","מטבע"],["cow","פרה"],["house","בית"],["ball","כדור"],["hair","שיער"],
         ["shark","כריש"],["turn","להסתובב"],["boy","ילד"],["saw","ראה"],["star","כוכב"],["shirt","חולצה"],["mouse","עכבר"],["chair","כיסא"]],
  listen:[["harp",["hop","harp"]],["coil",["coal","coil"]],["cord",["cod","cord"]],["howl",["hole","howl"]]],
  ladder:["bat","bar","barn","born","corn"],
  reads:[["a cart in the barn","עגלה באסם"],["a nurse and a clown","אחות וליצן"],["Mark found a toy.","מארק מצא צעצוע."],
         ["The owl sat on the porch.","הינשוף ישב במרפסת."],["Do not draw on the wall.","אל תצייר על הקיר."]],
  para:[["Gert has a dog, Scout.","לגרט יש כלב, סקאוט."],["Scout can bark and howl.","סקאוט יודע לנבוח וליילל."],["In a storm, Scout hides under the bed.","בסערה, סקאוט מתחבא מתחת למיטה."],
        ["Gert: Scout, do not be scared.","גרט: סקאוט, אל תפחד."],["Gert sits by the bed and hugs Scout.","גרט יושבת ליד המיטה ומחבקת את סקאוט."],["The storm is over. Scout is out and about!","הסערה נגמרה. סקאוט שוב בחוץ ומסתובב!"]]
 },
 /* ===== עולם 7: מגדל הסיומות ===== */
 ed:{
  words:[["jumped","קפץ"],["helped","עזר"],["kicked","בעט"],["wished","ייחל, איחל"],["played","שיחק"],["rained","ירד גשם"],["called","קרא, התקשר"],["opened","פתח"],
         ["wanted","רצה"],["needed","היה צריך"],["landed","נחת"],["painted","צבע, צייר"],["fixed","תיקן"],["smelled","הריח"],["waited","חיכה"],["rested","נח"]],
  listen:[["hunted",["hunt","hunted"]],["missed",["miss","missed"]],["filled",["fill","filled"]]],
  ladder:["peck","pecked","packed","picked","pick"],
  reads:[["a cracked egg","ביצה סדוקה"],["a used cup","כוס משומשת"],["Ted dusted the shelf.","טד ניקה אבק מהמדף."],
         ["Mom baked a cake.","אמא אפתה עוגה."],["We rushed to the bus.","מיהרנו לאוטובוס."]],
  para:[["Last week, Ted and Pam visited Gran.","בשבוע שעבר, טד ופאם ביקרו אצל סבתא."],["Gran greeted them at the gate.","סבתא קיבלה אותם בשער."],["They baked buns and dusted the shelves.","הם אפו לחמניות וניקו אבק מהמדפים."],
        ["Pam planted seeds in the yard.","פאם שתלה זרעים בחצר."],["Ted fed the hens and counted the eggs.","טד האכיל את התרנגולות וספר את הביצים."],["At the end, they sat and talked.","בסוף, הם ישבו ודיברו."]]
 },
 ing:{
  words:[["jumping","קופץ"],["singing","שר"],["playing","משחק"],["eating","אוכל"],["sleeping","ישן"],["fishing","דג, דיג"],["helping","עוזר"],["kicking","בועט"],
         ["falling","נופל"],["going","הולך"],["ringing","מצלצל"],["crying","בוכה"],["drinking","שותה"],["walking","הולך, צועד"],["resting","נח"],["thinking","חושב"]],
  listen:[["standing",["standing","stand"]],["packing",["packing","picking"]],["melting",["melting","milking"]]],
  ladder:["rock","rocking","locking","licking","lick"],
  reads:[["a sinking ship","ספינה שוקעת"],["a barking dog","כלב נובח"],["Jill is cooking lunch.","ג׳יל מבשלת ארוחת צהריים."],
         ["The kids are shouting.","הילדים צועקים."],["Is the baby smiling?","האם התינוק מחייך?"]],
  para:[["It is raining.","יורד גשם."],["Dad is cooking soup.","אבא מבשל מרק."],["Mom is fixing the lamp.","אמא מתקנת את המנורה."],
        ["Jack is making a fort with the chairs.","ג׳ק בונה מבצר מהכיסאות."],["The cat is hiding in the fort.","החתול מתחבא במבצר."],["We are all smiling.","כולנו מחייכים."]]
 },
 dbl:{
  words:[["sitting","יושב"],["running","רץ"],["swimming","שוחה"],["hopping","מקפץ"],["stopped","עצר"],["planned","תכנן"],["bigger","גדול יותר"],["hotter","חם יותר"],
         ["sadder","עצוב יותר"],["getting","מקבל, נעשה"],["shopping","קונה, קניות"],["hugged","חיבק"],["digging","חופר"],["clapped","מחא כפיים"],["wetter","רטוב יותר"],["chopped","קצץ"]],
  listen:[["hoping",["hoping","hopping"]],["taping",["taping","tapping"]],["dinner",["diner","dinner"]]],
  ladder:["pin","pinned","pinning","winning","win"],
  reads:[["a spinning top","סביבון מסתובב"],["a dripping tap","ברז מטפטף"],["Ben is jogging.","בן רץ ריצה קלה."],
         ["Jen dropped the cup.","ג׳ן הפילה את הכוס."],["The pup is begging.","הגור מתחנן."]],
  para:[["Sam and Dad are planning a trip.","סאם ואבא מתכננים טיול."],["Dad is grabbing the map.","אבא תופס את המפה."],["Sam is zipping the bag.","סאם סוגר את הרוכסן של התיק."],
        ["Then the bag ripped!","ואז התיק נקרע!"],["Dad is not mad. Dad is grinning.","אבא לא כועס. אבא מחייך חיוך רחב."],["Dad: Let me fix it. We are not quitting!","אבא: תן לי לתקן את זה. אנחנו לא מוותרים!"]]
 },
 erest:{
  words:[["faster","מהיר יותר"],["fastest","הכי מהיר"],["taller","גבוה יותר"],["tallest","הכי גבוה"],["smaller","קטן יותר"],["longer","ארוך יותר"],["longest","הכי ארוך"],["softer","רך יותר"],
         ["darker","חשוך יותר"],["darkest","הכי חשוך"],["quicker","זריז יותר"],["quickest","הכי זריז"],["shorter","קצר יותר"],["shortest","הכי קצר"],["thicker","עבה יותר"],["thickest","הכי עבה"]],
  listen:[["neater",["neat","neater"]],["highest",["higher","highest"]],["louder",["loud","louder"]]],
  ladder:["cold","colder","coldest"],
  reads:[["a sweeter cake","עוגה מתוקה יותר"],["the highest hill","הגבעה הכי גבוהה"],["Ben is older than Sam.","בן מבוגר יותר מסאם."],
         ["My cat is the cutest!","החתול שלי הכי חמוד!"],["Is it cooler at night?","האם קריר יותר בלילה?"]],
  para:[["Ann and Bess are sisters.","אן ובס אחיות."],["Ann is older than Bess.","אן מבוגרת יותר מבס."],["But Bess is louder!","אבל בס רועשת יותר!"],
        ["Ann is the neatest kid in the house.","אן הילדה הכי מסודרת בבית."],["Bess has the messiest room.","לבס יש החדר הכי מבולגן."],["But they are the closest pals.","אבל הן החברות הכי קרובות."]]
 },
 le:{
  words:[["apple","תפוח","ˈap·ple"],["little","קטן","ˈlit·tle"],["table","שולחן","ˈta·ble"],["candle","נר","ˈcan·dle"],["bottle","בקבוק","ˈbot·tle"],["puzzle","פאזל","ˈpuz·zle"],
         ["turtle","צב","ˈtur·tle"],["purple","סגול","ˈpur·ple"],["simple","פשוט","ˈsim·ple"],["jungle","ג׳ונגל","ˈjun·gle"],["bubble","בועה","ˈbub·ble"],["eagle","נשר","ˈea·gle"],
         ["middle","אמצע","ˈmid·dle"],["giggle","לצחקק","ˈgig·gle"],["pickle","מלפפון חמוץ","ˈpick·le"],["puddle","שלולית","ˈpud·dle"]],
  listen:[["cattle",["cattle","kettle"]],["handle",["handle","candle"]],["wiggle",["wiggle","waggle"]]],
  ladder:["huddle","cuddle","muddle"],
  reads:[["a bundle of sticks","צרור מקלות"],["a tiny beetle","חיפושית קטנטנה"],["The baby can cuddle the doll.","התינוק יכול לחבק את הבובה."],
         ["Tickle me!","תדגדג אותי!"],["Do not juggle the eggs!","אל תלהטט בביצים!"]],
  para:[["Nell has a poodle, Doodle.","לנל יש כלבת פודל, דודל."],["Doodle likes to cuddle.","דודל אוהבת להתכרבל."],["Doodle can wiggle her nose.","דודל יודעת לנענע את האף."],
        ["Nell tickles Doodle.","נל מדגדגת את דודל."],["Doodle wiggles and wiggles.","דודל מתפתלת ומתפתלת."],["Then Doodle naps in a snug bundle.","ואז דודל נמנמת, מכורבלת כמו צרור."]]
 },
 pre:{
  words:[["unlock","לפתוח מנעול","un·ˈlock"],["undo","לבטל","un·ˈdo"],["unhappy","לא שמח","un·ˈhap·py"],["unpack","לפרוק מזוודה","un·ˈpack"],["unfair","לא הוגן","un·ˈfair"],["untie","להתיר קשר","un·ˈtie"],
         ["replay","לנגן שוב","re·ˈplay"],["redo","לעשות שוב","re·ˈdo"],["refill","למלא שוב","re·ˈfill"],["reuse","להשתמש שוב","re·ˈuse"],["retell","לספר שוב","re·ˈtell"],["repaint","לצבוע שוב","re·ˈpaint"],
         ["unzip","לפתוח רוכסן","un·ˈzip"],["unkind","לא נחמד","un·ˈkind"],["unsafe","לא בטוח","un·ˈsafe"],["reheat","לחמם שוב","re·ˈheat"]],
  listen:[["unplug",["plug","unplug"]],["unload",["load","unload"]],["rewind",["wind","rewind"]]],
  reads:[["an untidy room","חדר לא מסודר"],["an unlit candle","נר לא דולק"],["Please unplug the lamp.","בבקשה תנתק את המנורה מהחשמל."],
         ["Can you rewind the song?","אתה יכול להחזיר את השיר להתחלה?"],["Jim is unable to sleep.","ג׳ים לא מסוגל לישון."]],
  para:[["Ben is unwell today.","בן לא מרגיש טוב היום."],["Mom unloads the van.","אמא פורקת את הטנדר."],["Ben wants to help, but he is unable.","בן רוצה לעזור, אבל הוא לא מסוגל."],
        ["Mom: Rest. You can rejoin us next week.","אמא: תנוח. תוכל להצטרף אלינו שוב בשבוע הבא."],["Ben rests and unwinds.","בן נח ונרגע."],["The next day, Ben is not unwell. He is back!","למחרת, בן כבר לא חולה. הוא חזר!"]]
 },
 ful:{
  words:[["helpful","עוזר, מועיל","ˈhelp·ful"],["careful","זהיר","ˈcare·ful"],["useful","שימושי","ˈuse·ful"],["painful","כואב","ˈpain·ful"],["careless","רשלן, לא זהיר","ˈcare·less"],["endless","בלי סוף","ˈend·less"],
         ["sadly","בעצב","ˈsad·ly"],["slowly","לאט","ˈslow·ly"],["kindly","בנחמדות","ˈkind·ly"],["kindness","טוב לב","ˈkind·ness"],["sadness","עצב","ˈsad·ness"],["darkness","חושך","ˈdark·ness"],
         ["thankful","אסיר תודה","ˈthank·ful"],["homeless","חסר בית","ˈhome·less"],["quickly","מהר","ˈquick·ly"],["illness","מחלה","ˈill·ness"]],
  listen:[["joyful",["joy","joyful"]],["softly",["soft","softly"]],["hopeless",["hopeful","hopeless"]]],
  reads:[["a playful pup","גור שובב"],["a sleepless night","לילה בלי שינה"],["Pam sang softly.","פאם שרה בעדינות."],
         ["It is a cheerful day.","זה יום עליז."],["Ted is so forgetful!","טד כל כך שכחן!"]],
  para:[["Pam has a playful kitten, Fuzz.","לפאם יש חתלתול שובב, פאז."],["Fuzz is restless at night.","פאז חסר מנוחה בלילה."],["He jumps on the bed and meows loudly.","הוא קופץ על המיטה ומיילל בקול רם."],
        ["Pam is sleepless.","פאם לא מצליחה לישון."],["Pam pets Fuzz gently.","פאם מלטפת את פאז בעדינות."],["At last, Fuzz naps. Pam is joyful.","סוף סוף, פאז נרדם. פאם שמחה."]]
 },
 r6:{
  words:[["jumped","קפץ"],["wanted","רצה"],["playing","משחק"],["sitting","יושב"],["bigger","גדול יותר"],["fastest","הכי מהיר"],["apple","תפוח","ˈap·ple"],["unhappy","לא שמח","un·ˈhap·py"],
         ["replay","לנגן שוב","re·ˈplay"],["helpful","עוזר, מועיל","ˈhelp·ful"],["slowly","לאט","ˈslow·ly"],["careless","רשלן","ˈcare·less"],["kicked","בעט"],["eating","אוכל"],["little","קטן","ˈlit·tle"],["unlock","לפתוח מנעול","un·ˈlock"]],
  listen:[["hopped",["hoped","hopped"]],["unkind",["kind","unkind"]],["softest",["softer","softest"]]],
  ladder:["walk","walked","walking","talking","talk"],
  reads:[["a sleeping baby","תינוק ישן"],["the loudest bell","הפעמון הכי רועש"],["Kim rested, then she painted.","קים נחה, ואז היא ציירה."],
         ["We are getting wetter!","אנחנו נעשים רטובים יותר!"],["Can you retell the tale?","אתה יכול לספר שוב את הסיפור?"]],
  para:[["Last spring, Zack planted a tiny tree.","באביב שעבר, זאק שתל עץ קטנטן."],["He checked it daily.","הוא בדק אותו כל יום."],["The tree is getting taller and greener.","העץ נעשה גבוה יותר וירוק יותר."],
        ["Zack is thankful and hopeful.","זאק אסיר תודה ומלא תקווה."],["Today, Zack is picking a ripe plum.","היום, זאק קוטף שזיף בשל."],["It is the sweetest plum, and Zack is smiling.","זה השזיף הכי מתוק, וזאק מחייך."]]
 },
 /* ===== עולם 8: גשר ההברות ===== */
 syl1:{
  words:[["rabbit","ארנב","ˈrab·bit"],["kitten","חתלתול","ˈkit·ten"],["muffin","מאפין","ˈmuf·fin"],["napkin","מפית","ˈnap·kin"],["basket","סל","ˈbas·ket"],["picnic","פיקניק","ˈpic·nic"],
         ["sunset","שקיעה","ˈsun·set"],["dentist","רופא שיניים","ˈden·tist"],["insect","חרק","ˈin·sect"],["magnet","מגנט","ˈmag·net"],["tennis","טניס","ˈten·nis"],["happen","לקרות","ˈhap·pen"],
         ["pumpkin","דלעת","ˈpump·kin"],["contest","תחרות","ˈcon·test"],["traffic","תנועה בכביש","ˈtraf·fic"],["plastic","פלסטיק","ˈplas·tic"]],
  listen:[["mitten",["mitten","kitten"]],["puppet",["puppet","puppy"]],["cactus",["cactus","catch"]]],
  reads:[["a cactus in a pot","קקטוס בעציץ"],["a puppet show","הצגת בובות"],["Kim has red mittens.","לקים יש כפפות אדומות."],
         ["The bandit hid in the attic.","השודד התחבא בעליית הגג."],["Do not upset Dad.","אל תרגיז את אבא."]],
  para:[["In the attic is a big chest.","בעליית הגג יש תיבה גדולה."],["Kim and Dennis open the chest.","קים ודניס פותחים את התיבה."],["In it is a puppet, a helmet and a goblet.","בתוכה יש בובה, קסדה וגביע."],
        ["Dennis puts on the helmet.","דניס חובש את הקסדה."],["Kim has a puppet show for Dennis.","קים עושה הצגת בובות בשביל דניס."],["What a fantastic attic!","איזו עליית גג נהדרת!"]]
 },
 syl2:{
  words:[["robot","רובוט","ˈro·bot"],["music","מוזיקה","ˈmu·sic"],["tiger","נמר","ˈti·ger"],["paper","נייר","ˈpa·per"],["open","לפתוח, פתוח","ˈo·pen"],["pilot","טייס","ˈpi·lot"],
         ["spider","עכביש","ˈspi·der"],["zero","אפס","ˈze·ro"],["lemon","לימון","ˈlem·on"],["seven","שבע","ˈsev·en"],["cabin","בקתה","ˈcab·in"],["river","נהר","ˈriv·er"],
         ["bacon","בייקון","ˈba·con"],["student","סטודנט, תלמיד","ˈstu·dent"],["wagon","עגלה","ˈwag·on"],["planet","כוכב לכת","ˈplan·et"]],
  listen:[["silent",["silent","silly"]],["melon",["melon","lemon"]],["habit",["habit","rabbit"]]],
  reads:[["a silent night","לילה שקט"],["a melon and a lime","מלון וליים"],["Peter can not decide.","פיטר לא מצליח להחליט."],
         ["The comet is in the sky.","השביט בשמיים."],["Even Dad is late.","אפילו אבא מאחר."]],
  para:[["Ruby and Peter visit a camel farm.","רובי ופיטר מבקרים בחוות גמלים."],["A camel is resting in the shade.","גמל נח בצל."],["Peter: Is the camel a female?","פיטר: האם הגמל נקבה?"],
        ["The man: Yes, and she has a baby.","האיש: כן, ויש לה תינוק."],["The baby camel is so tiny and so cute.","הגמל התינוק כל כך קטנטן וכל כך חמוד."],["Ruby will never forget the visit.","רובי לעולם לא תשכח את הביקור."]]
 },
 schwa:{
  words:[["about","על, בערך","°a·ˈbout"],["again","שוב","°a·ˈgain"],["alone","לבד","°a·ˈlone"],["banana","בננה","°ba·ˈna·°na"],["sofa","ספה","ˈso·°fa"],["panda","פנדה","ˈpan·°da"],
         ["zebra","זברה","ˈze·°bra"],["salad","סלט","ˈsal·°ad"],["problem","בעיה","ˈprob·°lem"],["pencil","עיפרון","ˈpen·°cil"],["animal","חיה","ˈan·°i·°mal"],["lemon","לימון","ˈlem·°on"],
         ["pizza","פיצה","ˈpiz·°za"],["camera","מצלמה","ˈcam·°er·°a"],["gorilla","גורילה","°go·ˈril·°la"],["ago","לפני (בזמן)","°a·ˈgo"]],
  listen:[["asleep",["asleep","sleep"]],["along",["along","long"]],["vanilla",["vanilla","villa"]]],
  reads:[["a pink umbrella","מטרייה ורודה"],["a koala asleep in a tree","קואלה ישנה על עץ"],["Linda has a vanilla shake.","ללינדה יש מילקשייק וניל."],
         ["Is the cobra awake?","האם הקוברה ערה?"],["Today is the parade!","היום המצעד!"]],
  para:[["Today, Anna and Lisa go to the circus.","היום, אנה וליסה הולכות לקרקס."],["A giraffe walks along the ring.","ג׳ירפה הולכת לאורך הזירה."],["A cobra pops up from a basket.","קוברה מזדקרת מתוך סל."],
        ["Lisa is afraid, but Anna is not.","ליסה מפחדת, אבל אנה לא."],["Then a puma jumps across the ring!","ואז פומה קופצת לרוחב הזירה!"],["What an amazing circus!","איזה קרקס מדהים!"]]
 },
 stress:{
  words:[["table","שולחן","ˈta·ble"],["pencil","עיפרון","ˈpen·cil"],["doctor","רופא","ˈdoc·tor"],["monkey","קוף","ˈmon·key"],["today","היום","to·ˈday"],["away","הרחק, משם","a·ˈway"],
         ["begin","להתחיל","be·ˈgin"],["hotel","מלון","ho·ˈtel"],["computer","מחשב","com·ˈpu·ter"],["banana","בננה","ba·ˈna·na"],["elephant","פיל","ˈel·e·phant"],["hamburger","המבורגר","ˈham·bur·ger"],
         ["garden","גינה","ˈgar·den"],["balloon","בלון","bal·ˈloon"],["behind","מאחורי","be·ˈhind"],["carrot","גזר","ˈcar·rot"]],
  listen:[["dessert",["desert","dessert"]],["police",["police","polish"]],["below",["below","bellow"]]],
  reads:[["a tasty dessert","קינוח טעים"],["a police car","מכונית משטרה"],["Dad will return at seven.","אבא יחזור בשבע."],
         ["The cat is below the window.","החתול מתחת לחלון."],["Do not forget your jacket!","אל תשכח את המעיל שלך!"]],
  para:[["Tonight, Maya has a party.","הערב, למאיה יש מסיבה."],["Her mother is baking a lemon dessert.","אמא שלה אופה קינוח לימון."],["Her father hangs ribbons above the window.","אבא שלה תולה סרטים מעל החלון."],
        ["The children arrive at seven.","הילדים מגיעים בשבע."],["They play music and dance.","הם משמיעים מוזיקה ורוקדים."],["Maya is happy. What a perfect party!","מאיה שמחה. איזו מסיבה מושלמת!"]]
 },
 long:{
  words:[["fantastic","נהדר","fan·ˈtas·tic"],["important","חשוב","im·ˈpor·tant"],["remember","לזכור","re·ˈmem·ber"],["umbrella","מטרייה","um·ˈbrel·la"],["butterfly","פרפר","ˈbut·ter·fly"],["crocodile","תנין","ˈcroc·o·dile"],
         ["wonderful","נפלא","ˈwon·der·ful"],["hamburger","המבורגר","ˈham·bur·ger"],["kangaroo","קנגורו","kan·ga·ˈroo"],["watermelon","אבטיח","ˈwa·ter·mel·on"],["caterpillar","זחל","ˈcat·er·pil·lar"],["alligator","תנין (אליגטור)","ˈal·li·ga·tor"],
         ["dinosaur","דינוזאור","ˈdi·no·saur"],["tomato","עגבנייה","to·ˈma·to"],["potato","תפוח אדמה","po·ˈta·to"],["helicopter","מסוק","ˈhel·i·cop·ter"]],
  listen:[["avocado",["avocado","tornado"]],["family",["family","finally"]],["energy",["energy","enemy"]]],
  reads:[["an enormous octopus","תמנון ענק"],["a delicious avocado","אבוקדו טעים"],["My family is on vacation.","המשפחה שלי בחופשה."],
         ["The animals are in danger.","החיות בסכנה."],["Today is Saturday.","היום שבת."]],
  para:[["Our family went to the city zoo.","המשפחה שלנו הלכה לגן החיות בעיר."],["We saw an enormous hippopotamus.","ראינו היפופוטם ענק."],["The flamingos were standing on one leg.","הפלמינגו עמדו על רגל אחת."],
        ["My little sister was excited.","אחותי הקטנה התרגשה."],["We ate lunch on a bench.","אכלנו ארוחת צהריים על ספסל."],["It was a memorable day.","זה היה יום בלתי נשכח."]]
 },
 r7:{
  words:[["rabbit","ארנב","ˈrab·bit"],["robot","רובוט","ˈro·bot"],["basket","סל","ˈbas·ket"],["tiger","נמר","ˈti·ger"],["lemon","לימון","ˈlem·on"],["banana","בננה","°ba·ˈna·°na"],
         ["pencil","עיפרון","ˈpen·°cil"],["today","היום","to·ˈday"],["computer","מחשב","com·ˈpu·ter"],["butterfly","פרפר","ˈbut·ter·fly"],["umbrella","מטרייה","um·ˈbrel·la"],["remember","לזכור","re·ˈmem·ber"],
         ["muffin","מאפין","ˈmuf·fin"],["pilot","טייס","ˈpi·lot"],["zebra","זברה","ˈze·°bra"],["hotel","מלון","ho·ˈtel"]],
  listen:[["comet",["comet","comment"]],["magic",["magic","magnet"]],["bandit",["bandit","bandage"]]],
  reads:[["a magic carpet","שטיח קסמים"],["a happy lizard","לטאה שמחה"],["The children went to the museum.","הילדים הלכו למוזיאון."],
         ["Peter is an artist.","פיטר אמן."],["Never open the cabinet.","לעולם אל תפתחו את הארון."]],
  para:[["Sofia has a secret.","לסופיה יש סוד."],["She is planning a picnic for her brother.","היא מתכננת פיקניק לאח שלה."],["She packs a salad and a melon.","היא אורזת סלט ומלון."],
        ["They walk to the river.","הם הולכים אל הנהר."],["Her brother is so excited!","האח שלה כל כך נרגש!"],["What a perfect afternoon!","איזה אחר צהריים מושלם!"]]
 },
 /* ===== עולם 9: ארמון האותיות השקטות ===== */
 kn:{
  words:[["knee","ברך"],["knot","קשר"],["knock","לדפוק"],["knife","סכין"],["know","לדעת"],["knit","לסרוג"],["write","לכתוב"],["wrap","לעטוף"],
         ["wrong","לא נכון"],["lamb","טלה"],["thumb","אגודל"],["climb","לטפס"],["knight","אביר"],["kneel","לכרוע ברך"],["wrist","שורש כף היד"],["crumb","פירור"]],
  listen:[["wreck",["wreck","neck"]],["knob",["knob","job"]],["numb",["numb","nut"]]],
  reads:[["a knob on the gate","ידית על השער"],["a wrinkled shirt","חולצה מקומטת"],["The ship is a wreck.","הספינה הרוסה לגמרי."],
         ["My toes are numb.","האצבעות ברגליים שלי רדומות."],["The plumber fixed the tap.","השרברב תיקן את הברז."]],
  para:[["Kate wrote a letter to Gran.","קייט כתבה מכתב לסבתא."],["Her hand was numb.","היד שלה הייתה רדומה."],["She folded the letter.","היא קיפלה את המכתב."],
        ["Gran knew it was from Kate.","סבתא ידעה שזה מקייט."],["Gran wrote back: I miss you!","סבתא כתבה בחזרה: אני מתגעגעת אלייך!"],["Kate hugged the letter.","קייט חיבקה את המכתב."]]
 },
 gh:{
  words:[["eight","שמונה"],["weigh","לשקול"],["ghost","רוח רפאים"],["hour","שעה"],["honest","כן, ישר"],["half","חצי"],["calf","עגל"],["calm","רגוע"],
         ["palm","כף יד. גם: דקל"],["could","יכול היה"],["would","היה (עושה)"],["should","צריך, כדאי"],["sleigh","מזחלת שלג"],["weight","משקל"],["neighbor","שכן","ˈneigh·bor"],["eighty","שמונים","ˈeigh·ty"]],
  listen:[["freight",["freight","fright"]],["yolk",["yolk","yuck"]],["vein",["vein","van"]]],
  reads:[["an egg yolk","חלמון של ביצה"],["a freight train","רכבת משא"],["The folks are at home.","ההורים בבית."],
         ["We ate salmon for dinner.","אכלנו סלמון לארוחת ערב."],["Pull the reins!","תמשוך במושכות!"]],
  para:[["It is late. The house is dark.","מאוחר. הבית חשוך."],["Ben hears a sound in the hall.","בן שומע רעש במסדרון."],["Is it a robber?","האם זה גנב?"],
        ["Ben grabs a frying pan.","בן תופס מחבת."],["Then he sees his dog, munching on almonds.","ואז הוא רואה את הכלב שלו, מכרסם שקדים."],["Ben laughs. What a fright!","בן צוחק. איזו בהלה!"]]
 },
 ph:{
  words:[["phone","טלפון"],["photo","תמונה","ˈpho·to"],["graph","גרף"],["dolphin","דולפין","ˈdol·phin"],["elephant","פיל","ˈel·e·phant"],["alphabet","אלפבית","ˈal·pha·bet"],
         ["trophy","גביע","ˈtro·phy"],["phrase","ביטוי"],["laugh","לצחוק"],["cough","להשתעל"],["tough","קשה, קשוח"],["enough","מספיק"],
         ["rough","מחוספס"],["nephew","אחיין","ˈneph·ew"],["orphan","יתום","ˈor·phan"],["phew","אוף, איזו הקלה"]],
  irreg:{rough:"נשמעת <b>\"רַאף\"</b>: ough = אַף, כמו ב-tough."},
  listen:[["graphic",["graphic","traffic"]],["physics",["physics","fizz"]]],
  reads:[["a pair of headphones","זוג אוזניות"],["a saxophone and a drum","סקסופון ותוף"],["Sophie is at the pharmacy.","סופי בבית המרקחת."],
         ["Philip has a microphone.","לפיליפ יש מיקרופון."],["We learn physics.","אנחנו לומדים פיזיקה."]],
  para:[["Sophie and Philip have a band.","לסופי ולפיליפ יש להקה."],["Sophie plays the saxophone.","סופי מנגנת בסקסופון."],["Philip sings into a microphone.","פיליפ שר לתוך מיקרופון."],
        ["Their friend takes photographs.","חבר שלהם מצלם תמונות."],["The crowd claps and cheers.","הקהל מוחא כפיים ומריע."],["What a triumph!","איזה ניצחון!"]]
 },
 ea2:{
  words:[["bread","לחם"],["head","ראש"],["dead","מת"],["deaf","חירש"],["health","בריאות"],["heavy","כבד","ˈheav·y"],["ready","מוכן","ˈread·y"],["sweat","זיעה"],
         ["sweater","סוודר","ˈsweat·er"],["weather","מזג אוויר","ˈweath·er"],["feather","נוצה","ˈfeath·er"],["breakfast","ארוחת בוקר","ˈbreak·fast"],
         ["thread","חוט"],["spread","למרוח"],["instead","במקום","in·ˈstead"],["leather","עור (חומר)","ˈleath·er"]],
  listen:[["steady",["steady","study"]],["meadow",["meadow","meddle"]],["threat",["threat","treat"]]],
  reads:[["a steady hand","יד יציבה"],["a meadow of flowers","אחו של פרחים"],["Take a deep breath.","קחי נשימה עמוקה."],
         ["It is a pleasant day.","זה יום נעים."],["Jen dreads the test.","ג׳ן חוששת מהמבחן."]],
  para:[["Ted wakes up. It is a pleasant day.","טד מתעורר. זה יום נעים."],["He gets dressed and goes to the meadow.","הוא מתלבש והולך לאחו."],["The meadow is pleasant and green.","האחו נעים וירוק."],
        ["Ted takes a deep breath.","טד לוקח נשימה עמוקה."],["He spots a nest with three eggs.","הוא מבחין בקן עם שלוש ביצים."],["Ted stands steady and still. What a treasure!","טד עומד יציב ושקט. איזה אוצר!"]]
 },
 wa:{
  words:[["water","מים","ˈwa·ter"],["wash","לשטוף"],["want","לרצות"],["watch","שעון. גם: לצפות"],["swan","ברבור"],["wasp","צרעה"],["swap","להחליף"],["word","מילה"],
         ["work","עבודה"],["world","עולם"],["worm","תולעת"],["worth","שווה"],["swamp","ביצה"],["wallet","ארנק","ˈwal·let"],["worse","גרוע יותר"],["worry","לדאוג","ˈwor·ry"]],
  listen:[["wand",["wand","wind"]],["worst",["worst","west"]],["squash",["squash","squish"]]],
  reads:[["a magic wand","שרביט קסמים"],["a swarm of bees","נחיל של דבורים"],["Wanda has a wand.","לוונדה יש שרביט."],
         ["It is the worst day!","זה היום הכי גרוע!"],["Do not squash the bug.","אל תמעך את החרק."]],
  para:[["Wanda has a garden.","לוונדה יש גינה."],["A swarm of bees is in her garden.","נחיל של דבורים בגינה שלה."],["Wanda is calm, and she waits.","וונדה רגועה, והיא מחכה."],
        ["The bees swarm to the flowers.","הדבורים נוהרות אל הפרחים."],["Then they swarm away.","ואז הן עפות משם בנחיל."],["Wanda: That was not the worst!","וונדה: זה לא היה הכי גרוע!"]]
 },
 ture:{
  words:[["picture","תמונה","ˈpic·ture"],["nature","טבע","ˈna·ture"],["future","עתיד","ˈfu·ture"],["capture","ללכוד","ˈcap·ture"],["mixture","תערובת","ˈmix·ture"],["adventure","הרפתקה","ad·ˈven·ture"],
         ["cabbage","כרוב","ˈcab·bage"],["village","כפר","ˈvil·lage"],["message","הודעה","ˈmes·sage"],["package","חבילה","ˈpack·age"],["garbage","זבל","ˈgar·bage"],["luggage","מזוודות","ˈlug·gage"],
         ["creature","יצור","ˈcrea·ture"],["furniture","רהיטים","ˈfur·ni·ture"],["cottage","בית קטן, בקתה","ˈcot·tage"],["sausage","נקניקייה","ˈsau·sage"]],
  irreg:{cottage:"נשמעת <b>\"קוֹטִג׳\"</b>: age בסוף = אִג׳.",sausage:"נשמעת <b>\"סוֹסִג׳\"</b>: au = אוֹ, ו-age בסוף = אִג׳."},
  listen:[["bandage",["bandage","bandit"]],["passage",["passage","passing"]]],
  reads:[["a big bandage","תחבושת גדולה"],["a sculpture of a horse","פסל של סוס"],["Dad has a lot of courage.","לאבא יש הרבה אומץ."],
         ["The image is dark.","התמונה חשוכה."],["The storm left damage.","הסערה השאירה נזק."]],
  para:[["Ella and Max go on a camping trip.","אלה ומקס יוצאים לטיול קמפינג."],["They pack a bandage and a map.","הם אורזים תחבושת ומפה."],["They hike to a pasture with sheep.","הם צועדים אל מרעה עם כבשים."],
        ["Max sees a strange insect.","מקס רואה חרק משונה."],["Ella has the courage to pick it up.","לאלה יש את האומץ להרים אותו."],["It is a beetle! What a voyage!","זו חיפושית! איזה מסע!"]]
 },
 tion:{
  words:[["action","פעולה","ˈac·tion"],["nation","אומה","ˈna·tion"],["station","תחנה","ˈsta·tion"],["lotion","קרם גוף","ˈlo·tion"],["motion","תנועה","ˈmo·tion"],["vacation","חופשה","va·ˈca·tion"],
         ["fiction","סיפורת, בדיון","ˈfic·tion"],["mention","להזכיר","ˈmen·tion"],["vision","ראייה, חזון","ˈvi·sion"],["television","טלוויזיה","ˈtel·e·vi·sion"],["explosion","פיצוץ","ex·ˈplo·sion"],["mission","משימה","ˈmis·sion"],
         ["potion","שיקוי","ˈpo·tion"],["section","חלק, קטע","ˈsec·tion"],["decision","החלטה","de·ˈci·sion"],["collection","אוסף","col·ˈlec·tion"]],
  listen:[["caution",["caution","cushion"]],["passion",["passion","patient"]],["solution",["solution","pollution"]]],
  reads:[["a big celebration","חגיגה גדולה"],["an invitation to a party","הזמנה למסיבה"],["Please pay attention.","בבקשה שימו לב."],
         ["It is a tradition.","זו מסורת."],["What is the solution?","מה הפתרון?"]],
  para:[["Our class is having a celebration.","בכיתה שלנו עושים חגיגה."],["Each child has a job: one makes decorations.","לכל ילד יש תפקיד: אחד מכין קישוטים."],["One child sends invitations.","ילד אחד שולח הזמנות."],
        ["The teacher gives instructions.","המורה נותנת הוראות."],["There is music, and a competition.","יש מוזיקה, ויש תחרות."],["It is a happy occasion for all of us.","זה אירוע שמח לכולנו."]]
 },
 heart3:{
  words:[["people","אנשים"],["friend","חבר, חברה"],["because","כי, בגלל"],["eye","עין"],["busy","עסוק"],["sugar","סוכר"],["young","צעיר"],["beautiful","יפה"],
         ["often","לעיתים קרובות"],["answer","תשובה"],["island","אי"],["many","הרבה"],["any","כלשהו, בכלל"],["ocean","אוקיינוס"],["women","נשים"],["heart","לב"]],
  irreg:{any:"נשמעת <b>\"אֶנִי\"</b>: a נשמעת אֶ, כמו ב-many.",
         ocean:"נשמעת <b>\"אוֹשֶן\"</b>: ce נשמעת ש.",
         women:"נשמעת <b>\"וִימִן\"</b>: o נשמעת אִ! (woman, אישה אחת, נשמעת \"וּוּמַן\")",
         heart:"נשמעת <b>\"הָארְט\"</b>: ea נשמעת אָ, כמו ב-art."},
  listen:[["shoe",["shoe","show"]],["great",["great","greet"]],["minute",["minute","mint"]]],
  reads:[["a pair of shoes","זוג נעליים"],["a great idea","רעיון נהדר"],["Wait a minute!","חכי רגע!"],
         ["I am sure.","אני בטוחה."],["The machine is broken.","המכונה מקולקלת."]],
  para:[["My aunt lives by the sea.","הדודה שלי גרה ליד הים."],["Her house is great, but it is tiny.","הבית שלה נהדר, אבל הוא קטנטן."],["Each summer, I visit her for a week.","בכל קיץ, אני מבקרת אותה לשבוע."],
        ["We walk on the shore with no shoes.","אנחנו הולכות על החוף בלי נעליים."],["She is sure I will be a great swimmer.","היא בטוחה שאהיה שחיינית מצוינת."],["I love my aunt, and she loves me.","אני אוהבת את הדודה שלי, והיא אוהבת אותי."]]
 },
 r8:{
  words:[["knife","סכין"],["write","לכתוב"],["laugh","לצחוק"],["water","מים","ˈwa·ter"],["picture","תמונה","ˈpic·ture"],["station","תחנה","ˈsta·tion"],["bread","לחם"],["people","אנשים"],
         ["elephant","פיל","ˈel·e·phant"],["remember","לזכור","re·ˈmem·ber"],["butterfly","פרפר","ˈbut·ter·fly"],["friend","חבר"],["thumb","אגודל"],["knot","קשר"],["wrap","לעטוף"],["knee","ברך"]],
  listen:[["wrist",["wrist","rest"]],["calf",["calf","cuff"]],["sweat",["sweat","sweet"]]],
  reads:[["a wrinkled photo","תמונה מקומטת"],["a dolphin in the ocean","דולפין באוקיינוס"],["I could not answer the question.","לא יכולתי לענות על השאלה."],
         ["We had a pleasant vacation.","הייתה לנו חופשה נעימה."],["Please wash your hands.","בבקשה תשטפו ידיים."]],
  para:[["Last summer, my family went to a small island.","בקיץ שעבר, המשפחה שלי נסעה לאי קטן."],["We stayed in a cottage near the beach.","התארחנו בבקתה ליד החוף."],["Each morning, we had breakfast outside.","בכל בוקר, אכלנו ארוחת בוקר בחוץ."],
        ["My brother and I built castles in the sand.","אחי ואני בנינו ארמונות בחול."],["One afternoon, we saw a whale in the ocean.","אחר צהריים אחד, ראינו לווייתן באוקיינוס."],["It was enormous, and we could not believe our eyes.","הוא היה ענק, ולא האמנו למראה עינינו."],
        ["I will never forget that vacation.","לעולם לא אשכח את החופשה ההיא."]]
 }
});
