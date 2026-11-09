// תוכן השלבים הנוספים של "המסע של ינשופי". המשחק טוען את הקובץ הזה לבד. לא למחוק.
// מילים עם הברות: [מילה, פירוש, "הב·רות"] ; ˈ = ההברה החזקה ; ° = הברה בלועה (schwa)
window.MORE_LEVELS = {

 bl3:{ focus:"@start", anchors:["street","Spring","Sprite"], arTitle:"טריק", ex:"strap",
  ar:"בונים בשלבים: <span class='en'>rap</span>, אחר כך <span class='en'>trap</span>, ואחר כך <span class='en'>strap</span>. כל פעם מוסיפים אות אחת מקדימה.",
  rule:"לפעמים יש <b>שלושה</b> עיצורים צמודים בהתחלה: <b class='en'>str, spl, scr, spr, shr</b>.<br>קוראים אותם ברצף אחד מהיר, <b>בלי שום תנועה</b> ביניהם. זה האתגר הכי גדול לדוברות עברית וערבית, כי בשפות שלנו כמעט אין שלושה עיצורים בהתחלה.",
  words:[["string","חוט"],["strap","רצועה"],["strong","חזק"],["split","לפצל"],["splash","התזה"],["scrub","לקרצף"],["scrap","שארית"],["spring","אביב, קפיץ"],["sprint","ריצה מהירה"],["squid","דיונון"],["shrimp","שרימפס"],["scratch","לגרד, שריטה"]],
  listen:[["strap",["trap","strap","scrap"]],["split",["spit","split","slit"]],["shrimp",["shrimp","shrink","limp"]]],
  ladder:["rip","trip","strip","strap","scrap"],
  reads:[["a strong string","חוט חזק"],["Splash in the pond!","התיזי בבריכה!"],["The squid can sprint.","הדיונון יודע לרוץ מהר."],["Scrub the pot.","קרצפי את הסיר."],["A shrimp is in the net.","יש שרימפס ברשת."]],
  para:[["Fred has a strong net.","לפרד יש רשת חזקה."],["He gets a squid and a shrimp.","הוא תופס דיונון ושרימפס."],["The squid splashes!","הדיונון מתיז!"],["Fred gets wet and grins.","פרד נרטב ומחייך."],["He scrubs the net.","הוא מקרצף את הרשת."],["In spring, Fred will fish a lot.","באביב פרד ידוג הרבה."]]
 },

 heart1:{ focus:"@none", ex:"was", anchors:["the","was","said"],
  rule:"יש מילים שמופיעות כל הזמן אבל <b>לא נקראות לפי החוקים</b>. נקרא להן ❤️ <b>מילות לב</b>.<br>את רוב המילה קוראים רגיל, ורק חלק אחד לומדים <b>בעל פה, בלב</b>.<br>הסוד: לא לשנן את כל המילה כמו תמונה, אלא לשים לב <b>איזה חלק יוצא דופן</b>. מתחת לכל מילה כתוב מה מיוחד בה.",
  irreg:{the:"נשמעת <b>\"דְה\"</b>: th רכה ואחריה אֶ קצרצרה. לפני תנועה: \"דִי\" (the egg).",
   was:"נשמעת <b>\"ווֹז\"</b>: ה-a נשמעת כמו o, וה-s כמו ז.",
   of:"נשמעת <b>\"אוֹב\"</b> עם v: ה-f נשמעת כמו v! (off עם שתי f = כבוי)",
   to:"נשמעת <b>\"טוּ\"</b>: ה-o נשמעת אוּ.",
   are:"נשמעת <b>\"אָר\"</b>: ה-e בסוף שקטה ולא עושה קסם.",
   you:"נשמעת <b>\"יוּ\"</b>: ou נשמעת אוּ.",
   your:"נשמעת <b>\"יוֹר\"</b>.",
   they:"נשמעת <b>\"דֵ׳יי\"</b>: ey = אֵיי.",
   have:"נשמעת <b>\"הֶב\"</b> עם v. ה-e לא עושה קסם: באנגלית מילה לא נגמרת ב-v, אז מוסיפים e.",
   do:"נשמעת <b>\"דוּ\"</b>: o = אוּ.",
   what:"נשמעת <b>\"ווֹט\"</b>: a אחרי w נשמעת כמו o, וה-h שקטה.",
   want:"נשמעת <b>\"ווֹנְט\"</b>: a אחרי w נשמעת כמו o."},
  words:[["the","ה- הידיעה"],["was","היה"],["of","של"],["to","אל, ל-"],["said","אמר"],["are","הם, אתם"],["you","את, אתה"],["your","שלך"],["they","הם, הן"],["have","יש ל-"],["do","לעשות"],["what","מה"]],
  listen:[["was",["was","has","is"]],["of",["of","off","on"]],["they",["they","the","then"]]],
  reads:[["They said it was fun.","הם אמרו שזה היה כיף."],["What do you have?","מה יש לך?"],["You are my pal.","את החברה שלי."],["the cat of the king","החתול של המלך"],["Do you have a pen?","יש לך עט?"]],
  para:[["They have a big dog.","יש להם כלב גדול."],["The dog was in the mud.","הכלב היה בבוץ."],["What do they do?","מה הם עושים?"],["They said: get in the tub!","הם אמרו: תיכנס לאמבט!"],["The dog has a bath.","הכלב מתרחץ."],["You are a good dog!","אתה כלב טוב!"]]
 },

 r2b:{ focus:"@blend", anchors:["Snapchat","hand","Spotify"], ex:"stamp",
  rule:"חזרה על כל הצירופים: עיצורים צמודים <b>בהתחלה</b> (stop, strap), <b>בסוף</b> (hand, jump), ו-<b>s</b> של רבים.<br>הכלל: כל עיצור נשמע, ואין תנועה ביניהם.",
  words:[["stamp","בול"],["frog","צפרדע"],["hand","יד"],["tent","אוהל"],["strap","רצועה"],["split","לפצל"],["cats","חתולים"],["boxes","קופסאות"],["jump","לקפוץ"],["crab","סרטן"],["splash","התזה"],["gifts","מתנות"]],
  listen:[["stop",["top","stop","step"]],["tent",["ten","tent","test"]],["strap",["trap","strap","scrap"]]],
  ladder:["lap","clap","clamp","cramp","camp"],
  reads:[["a frog in a tent","צפרדע באוהל"],["Clap your hands!","מחאי כפיים!"],["The crab grabs the strap.","הסרטן תופס את הרצועה."],["Six frogs jump and splash.","שש צפרדעים קופצות ומתיזות."],["Brad has two gifts.","לבראד יש שתי מתנות."]],
  para:[["Brad and Fran camp in a tent.","בראד ופראן מטיילים עם אוהל."],["Fran has a stamp and a list.","לפראן יש בול ורשימה."],["Brad gets six frogs in a box.","בראד אוסף שש צפרדעים בקופסה."],["The frogs jump and splash!","הצפרדעים קופצות ומתיזות!"],["Fran claps her hands.","פראן מוחאת כפיים."],["The best camp is a frog camp.","המחנה הכי טוב הוא מחנה צפרדעים."]]
 },

 cg:{ focus:"@cg", anchors:["city","center","giraffe"], ex:"page",
  ar:"c רכה = <b>ס</b>, כמו <span class='ar'>س</span>. g רכה = <b>ג׳</b>, כמו <span class='ar'>ج</span> בערבית הספרותית.",
  rule:"<b class='en'>c</b> ו-<b class='en'>g</b> משנות צליל לפני <b class='en'>e, i, y</b>:<br>c נשמעת <b>ס</b>: city, face, rice. g נשמעת לרוב <b>ג׳</b>: gem, page, huge.<br>לפני a, o, u הן נשארות קשות: cat, cup, gap, got.<br>יש יוצאות דופן עם g: get, give, gift נשארות ג.<br>ובסוף מילה קצרה כותבים <b class='en'>dge</b>: edge, badge. גם זה ג׳.",
  words:[["ice","קרח"],["city","עיר"],["cent","סנט"],["face","פנים"],["race","מרוץ"],["rice","אורז"],["mice","עכברים"],["gem","אבן חן"],["page","עמוד"],["cage","כלוב"],["edge","קצה"],["badge","תג"]],
  listen:[["race",["race","rake","rate"]],["cage",["cage","cake","cape"]],["mice",["mice","mile","mine"]]],
  ladder:["rice","race","face","pace","page","cage"],
  reads:[["a cat in a cage","חתול בכלוב"],["rice on a plate","אורז על צלחת"],["The mice race to the edge.","העכברים רצים לקצה."],["Grace has a nice face.","לגרייס יש פנים נחמדות."],["Get the gem on the page.","קחי את אבן החן מהעמוד."]],
  para:[["Grace lives in a big city.","גרייס גרה בעיר גדולה."],["She has two mice in a cage.","יש לה שני עכברים בכלוב."],["The mice like rice.","העכברים אוהבים אורז."],["One day, the mice race out!","יום אחד העכברים בורחים!"],["They run to the edge of the page.","הם רצים לקצה הדף."],["Grace gets them. Nice job, Grace!","גרייס תופסת אותם. כל הכבוד, גרייס!"]]
 },

 y1:{ focus:["y"], anchors:["my","why","sky"], ex:"fly", arTitle:"איך זה נשמע",
  ar:"כמו <b>\"אַיי\"</b> בעברית. y בסוף מילה קצרה, שאין בה תנועה אחרת, עובדת כמו i ארוכה.",
  rule:"בסוף מילה <b>קצרה</b> שאין בה תנועה אחרת, <b class='en'>y</b> נשמעת <b>אַיי</b>: my, fly, cry.<br>בתחילת מילה y היא עיצור, י: yes, yak.",
  words:[["my","שלי"],["by","ליד, על ידי"],["fly","לעוף, זבוב"],["cry","לבכות"],["dry","יבש"],["try","לנסות"],["sky","שמיים"],["shy","ביישן"],["why","למה"],["spy","מרגל"],["fry","לטגן"],["sly","ערמומי"]],
  listen:[["by",["be","by"]],["shy",["she","shy"]],["dry",["drip","dry","drum"]]],
  ladder:["fly","fry","try","cry","dry"],
  reads:[["my sky","השמיים שלי"],["Why do you cry?","למה את בוכה?"],["I can fly!","אני יכולה לעוף!"],["Try it!","נסי את זה!"],["The fish is dry.","הדג יבש."]],
  para:[["A shy fly sits on my hand.","זבוב ביישן יושב לי על היד."],["Why is the fly shy?","למה הזבוב ביישן?"],["It wants to fly in the sky.","הוא רוצה לעוף בשמיים."],["Try, fly, try!","נסה, זבוב, נסה!"],["The fly can fly up high.","הזבוב מצליח לעוף גבוה."],["Bye bye, fly!","ביי ביי, זבוב!"]]
 },

 y2:{ focus:["y"], anchors:["happy","baby","Lucky"], ex:"happy",
  ar:"<b>\"אִי\"</b> קצרה ובהירה, כמו בסוף המילה \"כיפי\".", arTitle:"איך זה נשמע",
  rule:"במילה <b>ארוכה</b> (שתי הברות ומעלה), y בסוף נשמעת <b>אִי</b>: happy, funny, baby.<br>השוואה: my = \"מַאי\" (מילה קצרה), אבל happy = \"הֶפִּי\".<br>זה סימן נפוץ בשמות תואר: luck ← lucky, sun ← sunny.",
  words:[["happy","שמח","ˈhap·py"],["funny","מצחיק","ˈfun·ny"],["sunny","שמשי","ˈsun·ny"],["puppy","גור כלבים","ˈpup·py"],["baby","תינוק","ˈba·by"],["candy","ממתק","ˈcan·dy"],["lucky","בר מזל","ˈluck·y"],["silly","טיפשי, מצחיק","ˈsil·ly"],["fifty","חמישים","ˈfif·ty"],["penny","מטבע","ˈpen·ny"],["jelly","ג׳לי","ˈjel·ly"],["windy","סוער, עם רוח","ˈwind·y"]],
  listen:[["funny",["funny","fun"]],["candy",["candy","can"]],["lucky",["lucky","luck"]]],
  ladder:["fun","funny","sunny","bunny"],
  reads:[["a happy puppy","גור שמח"],["It is sunny and windy.","שמשי ויש רוח."],["The baby is funny.","התינוק מצחיק."],["I am so lucky!","יש לי כל כך מזל!"],["Candy and jelly","ממתקים וג׳לי"]],
  para:[["It is a sunny day.","זה יום שמשי."],["Billy has a puppy.","לבילי יש גור."],["The puppy is silly and funny.","הגור טיפשי ומצחיק."],["It runs to the baby.","הוא רץ אל התינוק."],["The baby is happy.","התינוק שמח."],["Billy is lucky to have them.","לבילי יש מזל שהם שלו."]]
 },

 open:{ focus:"@open", anchors:["go","me","hi"], ex:"go",
  ar:"השוו: <span class='en'>go</span> (פתוחה, ארוכה: \"גוֹוּ\") מול <span class='en'>got</span> (סגורה, קצרה: \"גָאט\").", arTitle:"השוואה",
  rule:"הברה <b>פתוחה</b> = הברה שנגמרת בתנועה. ואז התנועה <b>ארוכה</b> ואומרת את השם שלה: go, me, hi.<br>הברה <b>סגורה</b> (תנועה ואחריה עיצור) = תנועה קצרה: got, met, hit.<br>זה אחד החוקים הכי חשובים לקריאת מילים ארוכות: ro-bot, mu-sic.",
  words:[["go","ללכת"],["no","לא"],["so","כל כך"],["he","הוא"],["me","אותי"],["we","אנחנו"],["she","היא"],["be","להיות"],["hi","היי"],["flu","שפעת"],["robot","רובוט","ˈro·bot"],["music","מוזיקה","ˈmu·sic"]],
  listen:[["go",["go","got"]],["he",["he","hen"]],["me",["me","men","met"]]],
  ladder:["hen","he","we","wet"],
  reads:[["Go, go, go!","קדימה, קדימה!"],["He and she","הוא והיא"],["No, I am not sad.","לא, אני לא עצובה."],["We like music.","אנחנו אוהבים מוזיקה."],["Hi! It is me.","היי! זו אני."]],
  para:[["Hi! I am a robot.","היי! אני רובוט."],["My name is Bo.","קוראים לי בו."],["I like music so much.","אני כל כך אוהב מוזיקה."],["He likes it, and she likes it.","הוא אוהב את זה, וגם היא."],["Can we go and sing?","אפשר ללכת לשיר?"],["No? So I sing on my own!","לא? אז אני שר לבד!"]]
 },

 r3:{ focus:"@long", anchors:["game","bike","happy","go"], ex:"smile",
  rule:"חזרה על כל הדרכים שבהן תנועה נעשית <b>ארוכה</b>:<br>• e קסומה: cake, bike, home, cute.<br>• הברה פתוחה: go, me, hi.<br>• y בסוף: my (אַיי), happy (אִי).<br>ועל c ו-g רכות לפני e, i, y: city, page.",
  words:[["cake","עוגה"],["bike","אופניים"],["home","בית"],["cute","חמוד"],["my","שלי"],["happy","שמח","ˈhap·py"],["go","ללכת"],["city","עיר","ˈcit·y"],["page","עמוד"],["she","היא"],["fly","לעוף"],["smile","חיוך"]],
  listen:[["kite",["kit","kite"]],["my",["me","my"]],["go",["go","got"]],["cute",["cut","cute"]]],
  ladder:["hop","hope","home","hole","pole","pale"],
  reads:[["a cute baby","תינוק חמוד"],["I like my bike.","אני אוהבת את האופניים שלי."],["She can fly a kite.","היא יודעת להעיף עפיפון."],["Go home and smile.","לכי הביתה וחייכי."],["A nice cake in the city","עוגה נחמדה בעיר"]],
  para:[["Jake lives in a big city.","ג׳ייק גר בעיר גדולה."],["He rides his bike to a cake shop.","הוא רוכב על האופניים לחנות עוגות."],["He gets a cute cake for Kate.","הוא קונה עוגה חמודה לקייט."],["Kate is so happy!","קייט כל כך שמחה!"],["She smiles a big smile.","היא מחייכת חיוך גדול."],["We go home. What a fine day!","אנחנו הולכים הביתה. איזה יום נפלא!"]]
 },

 ee:{ focus:["ee","ea"], anchors:["eat","sweet","team"], ex:"sheep", arTitle:"קצר מול ארוך, כמו בערבית",
  ar:"i <b>ארוכה</b>: \"אִיי\". כמו ياء ארוכה בערבית: <span class='ar'>فِيل</span>. בעברית אין הבדל בין קצר לארוך, ובאנגלית זה משנה מילה: <span class='en'>ship</span> (ספינה) / <span class='en'>sheep</span> (כבשה).",
  rule:"<b class='en'>ee</b> ו-<b class='en'>ea</b> נשמעות <b>אִיי ארוכה</b>: see, tree, eat, sea.<br>כלל של זוג תנועות: <b>כששתי תנועות הולכות יחד, הראשונה מדברת</b> ואומרת את השם שלה. e אומרת אִיי.<br>זה המפתח ל-ship מול sheep: קצר מול ארוך.",
  words:[["eat","לאכול"],["east","מזרח"],["see","לראות"],["bee","דבורה"],["tree","עץ"],["feet","כפות רגליים"],["sheep","כבשה"],["green","ירוק"],["sea","ים"],["tea","תה"],["leaf","עלה"],["dream","חלום"]],
  listen:[["sheep",["ship","sheep"]],["feet",["fit","feet"]],["meet",["met","meet"]],["seat",["sit","seat","set"]]],
  ladder:["fed","feed","feet","meet","meat","seat"],
  reads:[["a green tree","עץ ירוק"],["I see the sea.","אני רואה את הים."],["Eat the leaf!","תאכלי את העלה!"],["The sheep sleep.","הכבשים ישנות."],["We meet at the beach.","אנחנו נפגשים בחוף."]],
  para:[["Jean has ten sheep.","לג׳ין יש עשר כבשים."],["The sheep eat green grass.","הכבשים אוכלות דשא ירוק."],["They sleep by a big tree.","הן ישנות ליד עץ גדול."],["Jean has a dream.","לג׳ין יש חלום."],["In the dream, the sheep swim in the sea!","בחלום, הכבשים שוחות בים!"],["Jean wakes up and has tea.","ג׳ין מתעוררת ושותה תה."]]
 },

 ai:{ focus:["ai","ay"], anchors:["aim","PlayStation","rain"], ex:"rain", arTitle:"איך זה נשמע",
  ar:"<b>אֵיי</b>, כמו השם של האות A. ai באמצע מילה, ay בסוף מילה.",
  rule:"<b class='en'>ai</b> ו-<b class='en'>ay</b> נשמעות <b>אֵיי</b>, כמו השם של האות A: rain, day.<br>איך יודעים איזו לכתוב? <b class='en'>ai</b> באה <b>באמצע</b> מילה (rain, tail), ו-<b class='en'>ay</b> <b>בסוף</b> (day, play).<br>השוואה: ran (רץ) ← rain (גשם). a קצרה מול ארוכה.",
  words:[["aim","מטרה, לכוון"],["aid","עזרה"],["rain","גשם"],["train","רכבת"],["tail","זנב"],["mail","דואר"],["snail","חילזון"],["wait","לחכות"],["day","יום"],["play","לשחק"],["say","להגיד"],["tray","מגש"]],
  listen:[["pain",["pan","pain","pen"]],["rain",["ran","rain"]],["tail",["tall","tail","tell"]]],
  ladder:["pan","pain","rain","ran","ray","day"],
  reads:[["a snail in the rain","חילזון בגשם"],["Play all day!","לשחק כל היום!"],["Wait for the train.","חכי לרכבת."],["The mail is on the tray.","הדואר על המגש."],["What did you say?","מה אמרת?"]],
  para:[["It is a gray day.","זה יום אפור."],["Ray waits for the train in the rain.","ריי מחכה לרכבת בגשם."],["A snail is on his bag.","חילזון על התיק שלו."],["The snail has a long trail.","לחילזון יש שובל ארוך."],["The train is late, so Ray and the snail play.","הרכבת מאחרת, אז ריי והחילזון משחקים."],["What a day!","איזה יום!"]]
 },

 oa:{ focus:["oa","ow","oe"], snd:{ow:"אוֹוּ"}, anchors:["Okay","snow","boat"], ex:"boat", arTitle:"איך זה נשמע",
  ar:"<b>אוֹוּ</b>, כמו השם של האות O. כמו واو ארוכה. השפתיים מתעגלות בסוף.",
  rule:"<b class='en'>oa</b>, <b class='en'>ow</b> ו-<b class='en'>oe</b> נשמעות <b>אוֹוּ</b>: boat, snow, toe.<br>oa באמצע מילה, ow ו-oe בסוף.<br>השוואה: cot (מיטת תינוק, o עמוקה) ← coat (מעיל, אוֹוּ).",
  words:[["oak","אלון"],["oat","שיבולת שועל"],["boat","סירה"],["coat","מעיל"],["goat","עז"],["road","כביש"],["soap","סבון"],["toast","טוסט"],["snow","שלג"],["slow","איטי"],["grow","לגדול"],["toe","אצבע ברגל"]],
  listen:[["coat",["cot","coat","cat"]],["goat",["got","goat","gut"]],["road",["rod","road","red"]]],
  ladder:["cot","coat","boat","goat","got","hot"],
  reads:[["a goat in a boat","עז בסירה"],["Snow on the road","שלג על הכביש"],["Go slow!","סעי לאט!"],["Toast and oats","טוסט ושיבולת שועל"],["Get the soap.","קחי את הסבון."]],
  para:[["Joan has a goat.","לג׳ואן יש עז."],["The goat has a red coat.","לעז יש מעיל אדום."],["They go on a slow boat.","הם שטים בסירה איטית."],["It starts to snow.","מתחיל לרדת שלג."],["The goat eats the toast!","העז אוכלת את הטוסט!"],["Joan and the goat go home on the road.","ג׳ואן והעז חוזרות הביתה בכביש."]]
 },

 igh:{ focus:["igh","ie"], snd:{i:"אַיי, ארוכה!"}, anchors:["night","pie","Nike"], ex:"night", arTitle:"איך זה נשמע",
  ar:"<b>אַיי</b>, כמו השם של האות I. ה-gh לגמרי שקטה.",
  rule:"<b class='en'>igh</b> נשמעת <b>אַיי</b>, וה-gh שקטה: night, light.<br>גם <b class='en'>ie</b> בסוף מילה קצרה: pie, tie.<br>ובצירופים <b class='en'>ind</b> ו-<b class='en'>ild</b> ה-i ארוכה, למרות שאין e קסומה: find, kind, wild.",
  words:[["high","גבוה"],["night","לילה"],["light","אור"],["right","נכון, ימין"],["sight","מראה"],["tie","עניבה"],["pie","פאי"],["lie","שקר"],["find","למצוא"],["kind","טוב לב"],["mind","מוח, דעת"],["wild","פראי"]],
  listen:[["light",["lit","light","late"]],["fight",["fit","fight","fat"]],["tie",["tie","toe","tea"]]],
  ladder:["light","night","right","fight","sight","tight"],
  reads:[["a light at night","אור בלילה"],["You are right!","את צודקת!"],["Find the pie.","מצאי את הפאי."],["A kind and wild cat","חתולה טובת לב ופראית"],["The kite is high.","העפיפון גבוה."]],
  para:[["It is night.","לילה."],["A wild fox is out.","שועל פראי בחוץ."],["It sees a light up high.","הוא רואה אור למעלה."],["It is a pie on a shelf!","זה פאי על מדף!"],["The fox tries to find a way up.","השועל מנסה למצוא דרך לעלות."],["A kind owl gives him a bite.","ינשוף טוב לב נותן לו ביס."]]
 },

 oo:{ focus:["oo"], wsnd:{book:{oo:"אֻ קצרה"},look:{oo:"אֻ קצרה"},cook:{oo:"אֻ קצרה"},foot:{oo:"אֻ קצרה"},wood:{oo:"אֻ קצרה"},good:{oo:"אֻ קצרה"},hook:{oo:"אֻ קצרה"},hood:{oo:"אֻ קצרה"}},
  snd:{oo:"אוּ ארוכה"}, anchors:["Zoom","Google","Facebook"], ex:"moon", arTitle:"שני צלילים",
  ar:"<b>אוּ ארוכה</b> כמו ב-moon (כמו واو ארוכה), ו<b>אֻ קצרה</b> כמו ב-book (כמו ضمة קצרה: <span class='ar'>كُتُب</span>). לפני k היא לרוב קצרה: book, look, cook.",
  rule:"<b class='en'>oo</b> נשמעת בשתי דרכים:<br>• <b>אוּ ארוכה</b>: moon, zoo, food.<br>• <b>אֻ קצרה</b>: book, look, foot.<br>אין חוק מושלם. קוראים קודם עם אוּ ארוכה, ואם זה לא נשמע כמו מילה מוכרת, מנסים קצרה.",
  words:[["moon","ירח"],["zoo","גן חיות"],["food","אוכל"],["spoon","כף"],["room","חדר"],["cool","קריר, מגניב"],["pool","בריכה"],["book","ספר"],["look","להסתכל"],["cook","לבשל"],["foot","כף רגל"],["wood","עץ, חומר"]],
  listen:[["pool",["pull","pool","poll"]],["food",["food","foot"]],["look",["luck","look","lock"]]],
  ladder:["book","look","cook","hook","hood","good","food","fool","pool"],
  reads:[["a cool pool","בריכה קרירה"],["Look at the moon!","תסתכלי על הירח!"],["A good book","ספר טוב"],["Food in the room","אוכל בחדר"],["We cook with a wood spoon.","אנחנו מבשלים עם כף עץ."]],
  para:[["Luke goes to the zoo.","לוק הולך לגן החיות."],["He looks at a big goose.","הוא מסתכל על אווז גדול."],["The goose wants food.","האווז רוצה אוכל."],["Luke has a good book and a spoon.","ללוק יש ספר טוב וכפית."],["The goose takes the spoon!","האווז לוקח את הכפית!"],["Luke laughs. Cool goose!","לוק צוחק. אווז מגניב!"]]
 },

 ew:{ focus:["ew","ue"], anchors:["news","blue","YouTube"], ex:"blue", arTitle:"איך זה נשמע",
  ar:"<b>אוּ</b> ארוכה (blue, flew) או <b>יוּ</b> (few, new בהגייה בריטית). שתיהן ארוכות.",
  rule:"<b class='en'>ew</b> ו-<b class='en'>ue</b> נשמעות <b>אוּ ארוכה</b> או <b>יוּ</b>: new, few, blue, glue.<br>ew באה לרוב בסוף מילה (new, chew), ו-ue גם (blue, true).",
  words:[["new","חדש"],["few","מעט"],["dew","טל"],["chew","ללעוס"],["grew","גדל"],["flew","עף"],["blew","נשף"],["stew","תבשיל"],["blue","כחול"],["glue","דבק"],["true","נכון, אמיתי"],["clue","רמז"]],
  listen:[["blue",["blow","blue"]],["chew",["chew","show","shoe"]],["new",["new","now","no"]]],
  ladder:["dew","new","few","flew","blew"],
  reads:[["a new blue hat","כובע כחול חדש"],["Is it true?","זה נכון?"],["The bird flew.","הציפור עפה."],["Chew the stew.","לעסי את התבשיל."],["Find a clue!","מצאי רמז!"]],
  para:[["Drew has a new blue kite.","לדרו יש עפיפון כחול חדש."],["The wind blew and blew.","הרוח נשבה ונשבה."],["The kite flew up high.","העפיפון עף גבוה."],["Then it fell in the stew!","ואז הוא נפל לתוך התבשיל!"],["Drew got glue and fixed it.","דרו הביא דבק ותיקן אותו."],["True story? Maybe!","סיפור אמיתי? אולי!"]]
 },

 heart2:{ focus:"@none", anchors:["one","two","love"], ex:"one",
  rule:"עוד ❤️ מילות לב. הרבה מהן נגמרות ב-<b>e</b> שלא עושה קסם (come, love, give), כי באנגלית <b>מילה לא נגמרת ב-v</b>, אז מוסיפים e והיא לא משנה את התנועה.<br>מתחת לכל מילה כתוב מה מיוחד בה.",
  irreg:{one:"נשמעת <b>\"וַואן\"</b>, כאילו מתחילה ב-w!",two:"נשמעת <b>\"טוּ\"</b>: ה-w שקטה. בדיוק כמו to ו-too.",
   once:"נשמעת <b>\"וַואנְס\"</b>: כמו one ועוד ס.",does:"נשמעת <b>\"דַאז\"</b>: oe נשמעת אַ, וה-s כמו ז.",
   come:"נשמעת <b>\"קַאם\"</b>: o כמו u ב-fun, וה-e לא קסומה.",some:"נשמעת <b>\"סַאם\"</b>, בדיוק כמו sum.",
   done:"נשמעת <b>\"דַאן\"</b>.",gone:"נשמעת <b>\"גוֹן\"</b>.",
   love:"נשמעת <b>\"לַאב\"</b> עם v: o כמו u ב-fun.",give:"נשמעת <b>\"גִיב\"</b> עם v: i קצרה. ה-e רק בגלל ה-v.",
   live:"<b>\"לִיב\"</b> (לגור), עם i קצרה. ה-e בגלל ה-v.",who:"נשמעת <b>\"הוּ\"</b>: ה-w שקטה."},
  words:[["one","אחד"],["two","שתיים"],["once","פעם אחת"],["does","עושה"],["come","לבוא"],["some","קצת, כמה"],["done","גמור"],["gone","הלך, נעלם"],["love","אהבה"],["give","לתת"],["live","לגור"],["who","מי"]],
  listen:[["one",["on","one"]],["give",["give","gave"]],["love",["love","live"]]],
  reads:[["one or two","אחד או שניים"],["Who is it?","מי זה?"],["Come and give me some.","בואי ותני לי קצת."],["I love my home.","אני אוהבת את הבית שלי."],["Does he live here?","הוא גר פה?"]],
  para:[["Once, two cats lived in a box.","פעם, שני חתולים גרו בקופסה."],["One cat had some fish.","לחתול אחד היה קצת דג."],["Who will get the fish?","מי יקבל את הדג?"],["The cat does a kind thing.","החתול עושה דבר טוב לב."],["He gives the fish to his pal.","הוא נותן את הדג לחבר שלו."],["Now the fish is gone, and they love it.","עכשיו הדג נגמר, והם מרוצים."]]
 },

 r4:{ focus:["ee","ea","ai","ay","oa","ow","oe","igh","ie","oo","ew","ue"], anchors:["eat","rain","snow","night"], ex:"train",
  rule:"חזרה על כל צמדי התנועות. הכלל הכללי: <b>כששתי תנועות הולכות יחד, הראשונה מדברת</b> ואומרת את השם שלה: ea = אִיי, ai = אֵיי, oa = אוֹוּ.<br>ויוצאי הדופן: oo (אוּ / אֻ) ו-ew (אוּ).",
  words:[["tree","עץ"],["rain","גשם"],["boat","סירה"],["night","לילה"],["moon","ירח"],["book","ספר"],["new","חדש"],["day","יום"],["snow","שלג"],["eat","לאכול"],["pie","פאי"],["blue","כחול"]],
  listen:[["feet",["fit","feet"]],["rain",["ran","rain"]],["coat",["cot","coat"]],["food",["food","foot"]]],
  ladder:["bet","beet","beat","boat","coat","goat"],
  reads:[["a blue boat at night","סירה כחולה בלילה"],["Eat a pie in the rain.","לאכול פאי בגשם."],["The moon is so bright.","הירח כל כך בהיר."],["Read a good book.","לקרוא ספר טוב."],["Snow on a green tree","שלג על עץ ירוק"]],
  para:[["It is a cool day.","זה יום קריר."],["Kay waits for the train in the rain.","קיי מחכה לרכבת בגשם."],["She reads a good book.","היא קוראת ספר טוב."],["The train is slow, so she eats a pie.","הרכבת איטית, אז היא אוכלת פאי."],["At night, she sees the moon and snow.","בלילה היא רואה את הירח ואת השלג."],["What a dream of a day!","איזה יום של חלום!"]]
 },

 ar:{ focus:["ar"], anchors:["art","car","star"], ex:"star", arTitle:"ה-r האמריקאית",
  ar:"לא מתגלגלת כמו בעברית או בערבית: הלשון מתקפלת קצת אחורה ולא נוגעת בכלום. ar נשמעת אָר עמוקה, כמו ב-car.",
  rule:"כשאחרי תנועה בא <b>r</b>, ה-r <b>שולטת</b> בתנועה ומשנה אותה: לא קצרה ולא ארוכה, משהו חדש.<br><b class='en'>ar</b> נשמעת <b>אָר</b>: car, star, park.<br>השוו: cat (חתול) ← cart (עגלה).",
  words:[["arm","זרוע"],["art","אמנות"],["car","מכונית"],["star","כוכב"],["farm","חווה"],["park","פארק"],["dark","חשוך"],["jar","צנצנת"],["shark","כריש"],["card","כרטיס"],["barn","אסם"],["cart","עגלה"]],
  listen:[["cart",["cat","cart","cut"]],["barn",["ban","barn","bun"]],["hard",["had","hard","herd"]]],
  ladder:["cat","cart","card","hard","harm","farm","far"],
  reads:[["a star in the dark","כוכב בחושך"],["a car in the park","מכונית בפארק"],["A shark has a big fin.","לכריש יש סנפיר גדול."],["Mark has art cards.","למארק יש כרטיסי אמנות."],["The farm has a red barn.","בחווה יש אסם אדום."]],
  para:[["Mark has a farm.","למארק יש חווה."],["It is dark in the barn.","חשוך באסם."],["Mark gets a jar with a star in it.","מארק לוקח צנצנת ובה כוכב."],["The star is so bright!","הכוכב כל כך מאיר!"],["The farm cat and the farm dog start to bark and purr.","החתול והכלב של החווה מתחילים לנבוח ולגרגר."],["It is a party at the farm.","זו מסיבה בחווה."]]
 },

 or:{ focus:["or"], anchors:["or","sport","Thor"], ex:"fork", arTitle:"איך זה נשמע",
  ar:"<b>אוֹר</b>, כמו המילה העברית \"אור\" (אבל עם r אמריקאית).",
  rule:"<b class='en'>or</b> נשמעת <b>אוֹר</b>: for, corn, fork.<br>גם כאן ה-r שולטת בתנועה.<br>השוו: shot (יריה) ← short (נמוך, קצר).",
  words:[["or","או"],["for","בשביל"],["corn","תירס"],["fork","מזלג"],["horn","קרן, צופר"],["storm","סערה"],["short","קצר, נמוך"],["sport","ספורט"],["born","נולד"],["north","צפון"],["fort","מבצר"],["torch","לפיד"]],
  listen:[["corn",["can","corn","coin"]],["short",["shot","short","shirt"]],["fork",["fork","fox"]]],
  ladder:["for","fork","cork","corn","horn","born","worn"],
  reads:[["corn and a fork","תירס ומזלג"],["a short storm","סערה קצרה"],["I was born in the north.","נולדתי בצפון."],["Sport is fun.","ספורט זה כיף."],["Get the torch!","קחי את הלפיד!"]],
  para:[["A big storm hits the fort.","סערה גדולה מכה במבצר."],["Lord Morton has a torch.","ללורד מורטון יש לפיד."],["He looks for his horse.","הוא מחפש את הסוס שלו."],["The horse is in the north barn.","הסוס באסם הצפוני."],["It eats corn from a cart.","הוא אוכל תירס מעגלה."],["The storm is short. Morning is here!","הסערה קצרה. הגיע הבוקר!"]]
 },

 er:{ focus:["er","ir","ur"], anchors:["her","first","Burger"], ex:"bird", arTitle:"שלוש כתיבות, צליל אחד",
  ar:"er, ir, ur נשמעות <b>אותו דבר</b>: \"אֶר\" עמומה. את הכתיב פשוט לומדים מילה-מילה.",
  rule:"<b class='en'>er, ir, ur</b> נשמעות <b>אותו דבר</b>: \"אֶר\" עמומה.<br>her, bird, fur. זה צליל שאין בעברית: הפה כמעט סגור והלשון מתקפלת אחורה.<br>בקריאה זה קל (תמיד אותו צליל), ובאיות צריך לזכור איזו כתיבה.",
  words:[["her","שלה, אותה"],["fern","שרך"],["term","מונח, סמסטר"],["bird","ציפור"],["girl","ילדה"],["first","ראשון"],["shirt","חולצה"],["fur","פרווה"],["turn","תור, לסובב"],["burn","לשרוף"],["nurse","אחות"],["hurt","פגוע, כואב"]],
  listen:[["bird",["bad","bird","bed"]],["hurt",["hut","hurt","hot"]],["shirt",["shirt","short","shot"]]],
  ladder:["hut","hurt","hurl","curl"],
  reads:[["a girl and a bird","ילדה וציפור"],["her first shirt","החולצה הראשונה שלה"],["It is my turn.","זה התור שלי."],["Do not burn the fern!","אל תשרפי את השרך!"],["The nurse helps.","האחות עוזרת."]],
  para:[["Bert is a little bird.","ברט היא ציפור קטנה."],["She hurt her wing.","היא פגעה בכנף שלה."],["A girl named Kirsten finds her.","ילדה בשם קירסטן מוצאת אותה."],["Kirsten is a nurse for birds.","קירסטן היא אחות לציפורים."],["First she fixes the wing.","קודם היא מתקנת את הכנף."],["Then Bert turns and flies. It is her first flight!","ואז ברט מסתובבת ועפה. זו הטיסה הראשונה שלה!"]]
 },

 oi:{ focus:["oi","oy"], anchors:["oil","boy","Toy Story"], ex:"coin", arTitle:"איך זה נשמע",
  ar:"<b>אוֹי</b>, בדיוק כמו \"אוֹי\" בעברית! oi באמצע מילה, oy בסוף.",
  rule:"<b class='en'>oi</b> ו-<b class='en'>oy</b> נשמעות <b>אוֹי</b>: coin, boy, toy.<br>oi באה באמצע מילה (coin, boil), ו-oy בסוף (boy, joy).",
  words:[["oil","שמן"],["coin","מטבע"],["boil","להרתיח"],["soil","אדמה"],["join","להצטרף"],["point","נקודה, להצביע"],["foil","נייר כסף"],["spoil","לקלקל"],["boy","ילד"],["toy","צעצוע"],["joy","שמחה"],["soy","סויה"]],
  listen:[["boil",["ball","boil","bell"]],["coin",["cone","coin","can"]],["toy",["tie","toy","toe"]]],
  ladder:["oil","boil","soil","foil","coil","coin","join"],
  reads:[["a boy and a toy","ילד וצעצוע"],["Boil the oil.","הרתיחי את השמן."],["Join us!","הצטרפי אלינו!"],["A coin in the soil","מטבע באדמה"],["Joy! Joy! Joy!","שמחה!"]],
  para:[["Roy is a boy with a toy truck.","רוי הוא ילד עם משאית צעצוע."],["He digs in the soil.","הוא חופר באדמה."],["He finds a coin!","הוא מוצא מטבע!"],["He points and yells with joy.","הוא מצביע וצועק משמחה."],["His pals join him.","החברים שלו מצטרפים אליו."],["Now they all dig for coins.","עכשיו כולם חופרים לחפש מטבעות."]]
 },

 ou:{ focus:["ou","ow"], snd:{ow:"אָאוּ"}, anchors:["ouch","WOW","Mickey Mouse"], ex:"cow", arTitle:"איך זה נשמע",
  ar:"<b>אָאוּ</b>, כמו \"וואו\" בעברית. הפה נפתח ואז נסגר לעיגול. אותו כתיב ow יכול להיות גם אוֹוּ (snow). בודקים מה נשמע כמו מילה מוכרת.",
  rule:"<b class='en'>ou</b> ו-<b class='en'>ow</b> נשמעות <b>אָאוּ</b>: out, house, cow, now.<br>שימי לב: ow היא \"קוסמת כפולה\": ב-cow, now, town היא אָאוּ, וב-snow, slow (עולם קודם) היא אוֹוּ.",
  words:[["out","בחוץ"],["ouch","אאוץ׳"],["owl","ינשוף"],["cloud","ענן"],["house","בית"],["loud","רועש"],["shout","לצעוק"],["round","עגול"],["cow","פרה"],["now","עכשיו"],["town","עיירה"],["clown","ליצן"]],
  listen:[["town",["ton","town","tan"]],["loud",["loud","load","lid"]],["now",["now","no","new"]]],
  ladder:["now","cow","how","howl","owl","bowl"],
  reads:[["a brown cow","פרה חומה"],["an owl in a round house","ינשוף בבית עגול"],["Get out now!","צאי עכשיו!"],["Do not shout so loud.","אל תצעקי כל כך חזק."],["A clown in town","ליצן בעיירה"]],
  para:[["A clown comes to town.","ליצן מגיע לעיירה."],["He has a brown cow and a gray owl.","יש לו פרה חומה וינשוף אפור."],["The cow sits down on a cloud!","הפרה מתיישבת על ענן!"],["The kids shout: wow!","הילדים צועקים: וואו!"],["The owl flies round and round.","הינשוף עף סביב סביב."],["Now the whole town is out to see.","עכשיו כל העיירה בחוץ לראות."]]
 },

 aw:{ focus:["aw","au","all","alk"], anchors:["August","Paul","basketball"], ex:"ball", arTitle:"איך זה נשמע",
  ar:"<b>אוֹ</b> פתוחה ועמוקה, בין אָ לאוֹ. בהגייה האמריקאית קרובה מאוד ל-o של hot.",
  rule:"<b class='en'>aw</b>, <b class='en'>au</b>, <b class='en'>all</b> ו-<b class='en'>alk</b> נשמעות <b>אוֹ</b>: saw, Paul, ball, talk.<br>ב-alk ה-l שקטה: talk = \"טוֹק\", walk = \"ווֹק\".",
  words:[["saw","ראה, מסור"],["paw","כף רגל של חיה"],["draw","לצייר"],["straw","קש"],["jaw","לסת"],["haul","לסחוב"],["ball","כדור"],["tall","גבוה"],["wall","קיר"],["call","להתקשר"],["talk","לדבר"],["walk","ללכת"]],
  listen:[["ball",["bell","ball","bill"]],["paw",["pay","paw","pie"]],["walk",["wake","walk","week"]]],
  ladder:["ball","tall","wall","fall","fill","hill"],
  reads:[["a cat with a big paw","חתול עם כף רגל גדולה"],["Draw on the wall.","ציירי על הקיר."],["Talk and walk","לדבר וללכת"],["I saw a tall man.","ראיתי איש גבוה."],["Call me!","תתקשרי אליי!"]],
  para:[["Paul has a small dog named Dawn.","לפול יש כלבה קטנה בשם דון."],["They walk in the park in August.","הם הולכים בפארק באוגוסט."],["Dawn sees a ball by a tall wall.","דון רואה כדור ליד קיר גבוה."],["She gets it with her paw.","היא משיגה אותו עם הכף."],["Paul calls her and they talk.","פול קורא לה והם מדברים."],["Then they draw a dog in the sand.","ואז הם מציירים כלב בחול."]]
 },

 air:{ focus:["air","are","ear"], snd:{ear:"אֵר"}, anchors:["air","hair","Care Bears"], ex:"chair", arTitle:"איך זה נשמע",
  ar:"<b>אֵר</b>: כמו אֶ ארוכה ואז r אמריקאית.",
  rule:"<b class='en'>air</b>, <b class='en'>are</b> ו-<b class='en'>ear</b> (במילים bear, pear, wear) נשמעות <b>אֵר</b>: hair, care, bear.<br>שימי לב: ear לפעמים נשמעת אחרת, <b>אִיר</b>: ear, hear, near, dear. השוו: pear (אגס) מול hear (לשמוע).",
  words:[["air","אוויר"],["hair","שיער"],["chair","כיסא"],["fair","הוגן, יריד"],["pair","זוג"],["stair","מדרגה"],["care","אכפתיות"],["share","לחלוק"],["scare","להפחיד"],["bear","דוב"],["pear","אגס"],["wear","ללבוש"]],
  listen:[["hair",["hair","her","hurt"]],["care",["car","care","core"]],["bear",["bar","bear","beer"]]],
  ladder:["air","fair","hair","pair"],
  reads:[["a pear on a chair","אגס על כיסא"],["Share the pair.","חלקי את הזוג."],["A bear with long hair","דוב עם שיער ארוך"],["Take care on the stairs!","זהירות במדרגות!"],["It is not fair!","זה לא הוגן!"]],
  para:[["A big bear sits on a chair.","דוב גדול יושב על כיסא."],["He has a pear and a pair of socks.","יש לו אגס וזוג גרביים."],["A girl with red hair comes up the stairs.","ילדה עם שיער אדום עולה במדרגות."],["The bear does not scare her.","הדוב לא מפחיד אותה."],["They share the pear with care.","הם חולקים את האגס בזהירות."],["That is fair!","זה הוגן!"]]
 },

 r5:{ focus:["ar","or","er","ir","ur","oi","oy","ou","ow","aw","au","all","air","are"], snd:{ow:"אָאוּ"}, anchors:["car","sport","bird","boy"], ex:"shark",
  rule:"חזרה על התנועות עם <b>r</b> (ar, or, er, ir, ur, air) ועל הצלילים המיוחדים (oi, ou, aw).<br>טיפ: כשיש r אחרי תנועה, מפסיקים לחפש קצר או ארוך. זה צליל חדש.",
  words:[["car","מכונית"],["fork","מזלג"],["bird","ציפור"],["coin","מטבע"],["cow","פרה"],["house","בית"],["ball","כדור"],["hair","שיער"],["shark","כריש"],["turn","תור"],["boy","ילד"],["saw","ראה"]],
  listen:[["cart",["cat","cart"]],["boil",["ball","boil"]],["town",["ton","town"]],["shirt",["short","shirt"]]],
  ladder:["far","car","card","cord","cork","fork"],
  reads:[["a boy in a car","ילד במכונית"],["A bird saw a shark.","ציפור ראתה כריש."],["Turn the coin.","הפכי את המטבע."],["A cow in the house!","פרה בבית!"],["Throw the ball far.","זרקי את הכדור רחוק."]],
  para:[["Carl is a boy who loves sport.","קרל הוא ילד שאוהב ספורט."],["He throws a ball far into the park.","הוא זורק כדור רחוק לתוך הפארק."],["A brown cow sees it.","פרה חומה רואה אותו."],["She runs with the ball to her barn.","היא רצה עם הכדור לאסם שלה."],["Carl shouts and laughs.","קרל צועק וצוחק."],["Now it is the turn of the cow!","עכשיו תורה של הפרה!"]]
 },

 ed:{ focus:"@ed", anchors:["jumped","played","wanted"], ex:"jumped", arTitle:"איך יודעים איזה צליל",
  ar:"אומרים את המילה בלי ed. אם היא נגמרת ב-t או d, מוסיפים <b>אִד</b>. אם הסוף בלי קול (נושפים: p, k, s, sh, ch, f), מוסיפים <b>ט</b>. אחרת <b>ד</b>.",
  rule:"<b class='en'>ed</b> בסוף פועל = <b>עבר</b>, משהו שכבר קרה. יש לה <b>שלושה</b> צלילים:<br>• אחרי t או d: <b>אִד</b>, הברה נוספת: wanted, landed.<br>• אחרי p, k, s, sh, ch, f: <b>ט</b>: jumped = \"ג׳אמְפְּט\".<br>• אחרי כל השאר: <b>ד</b>: played, called.<br>ה-e לא נשמעת, חוץ מ-אִד. מתחת לכל מילה כתוב איזה צליל.",
  words:[["jumped","קפץ"],["helped","עזר"],["kicked","בעט"],["wished","ביקש, איחל"],["played","שיחק"],["rained","ירד גשם"],["called","התקשר, קרא"],["opened","פתח"],["wanted","רצה"],["needed","היה צריך"],["landed","נחת"],["painted","צבע"]],
  listen:[["wanted",["want","wanted"]],["jumped",["jump","jumped"]],["painted",["paint","painted"]]],
  ladder:["kick","kicked","licked","locked","looked","cooked"],
  reads:[["I jumped on the bed.","קפצתי על המיטה."],["She played with the dog.","היא שיחקה עם הכלב."],["It rained and rained.","ירד גשם וגשם."],["We wanted a cake.","רצינו עוגה."],["Dad cooked fish.","אבא בישל דג."]],
  para:[["Yesterday, it rained all day.","אתמול ירד גשם כל היום."],["We stayed at home and played.","נשארנו בבית ושיחקנו."],["Mom painted a big sun on the wall.","אמא ציירה שמש גדולה על הקיר."],["I helped her and laughed.","עזרתי לה וצחקתי."],["Then the rain stopped.","ואז הגשם נפסק."],["We opened the door and jumped in the mud!","פתחנו את הדלת וקפצנו בבוץ!"]]
 },

 ing:{ focus:"@ing", anchors:["King","morning","Thanksgiving"], ex:"jumping", arTitle:"איך זה נשמע",
  ar:"<b>\"אִינְג\"</b> רכה, בלי ג ברורה בסוף. jumping = \"ג׳אמְפִּינְג\".",
  rule:"<b class='en'>ing</b> בסוף פועל = משהו <b>שקורה עכשיו</b>, או השם של הפעולה: jumping, singing.<br>בא כמעט תמיד עם is / am / are: I am singing, she is eating.<br>טריק לקריאה: מכסים את ing, קוראים את הפועל המוכר, ומוסיפים \"אִינְג\".",
  words:[["jumping","קופץ"],["singing","שר"],["playing","משחק"],["eating","אוכל"],["sleeping","ישן"],["fishing","דג"],["helping","עוזר"],["kicking","בועט"],["falling","נופל"],["going","הולך"],["ringing","מצלצל"],["crying","בוכה"]],
  listen:[["singing",["sing","singing"]],["helping",["help","helping","helped"]],["jumping",["jumped","jumping"]]],
  ladder:["fish","fishing","wishing","washing","wash"],
  reads:[["I am singing.","אני שרה."],["The cat is sleeping.","החתול ישן."],["We are going home.","אנחנו הולכים הביתה."],["Is the bell ringing?","הפעמון מצלצל?"],["The kids are playing and jumping.","הילדים משחקים וקופצים."]],
  para:[["It is morning.","בוקר."],["The birds are singing.","הציפורים שרות."],["Dad is fishing in the lake.","אבא דג באגם."],["Mom is helping the baby.","אמא עוזרת לתינוק."],["The baby is crying, then eating.","התינוק בוכה, ואחר כך אוכל."],["And me? I am reading in bed!","ואני? אני קוראת במיטה!"]]
 },

 dbl:{ focus:"@dbl2", anchors:["running","swimming","shopping"], ex:"sitting", arTitle:"למה מכפילים",
  ar:"כדי <b>לשמור על התנועה קצרה</b>. hopping (מקפץ) עם o קצרה, מול hoping (מקווה) עם o ארוכה, כי בא מ-hope.",
  rule:"כשמוסיפים <b>ing, ed</b> או <b>er</b> למילה קצרה עם <b>תנועה קצרה אחת ועיצור אחד בסוף</b>, מכפילים את העיצור: sit ← sitting, hop ← hopping, big ← bigger.<br>ובמילה עם e קסומה, מורידים את ה-e: hope ← hoping, make ← making.<br>זה עוזר גם בקריאה: <b>אות כפולה = התנועה לפניה קצרה</b>.",
  words:[["sitting","יושב"],["running","רץ"],["swimming","שוחה"],["hopping","מקפץ"],["stopped","עצר"],["planned","תכנן"],["bigger","גדול יותר"],["hotter","חם יותר"],["sadder","עצוב יותר"],["getting","מקבל"],["shopping","קניות"],["hugged","חיבק"]],
  listen:[["hopping",["hopping","hoping"]],["tapping",["tapping","taping"]],["sitting",["sitting","setting"]]],
  ladder:["sit","sitting","hitting","hit","hot","hotter"],
  reads:[["The dog is running.","הכלב רץ."],["We are swimming.","אנחנו שוחים."],["It is getting hotter.","נהיה חם יותר."],["She hugged me.","היא חיבקה אותי."],["Mom is shopping.","אמא בקניות."]],
  para:[["Tim is sitting in the sun.","טים יושב בשמש."],["It is getting hotter and hotter.","נהיה חם יותר ויותר."],["He stopped and planned a swim.","הוא עצר ותכנן לשחות."],["He is running to the pool.","הוא רץ לבריכה."],["He is swimming and hopping in the water.","הוא שוחה ומקפץ במים."],["Now Tim is happy, not hot!","עכשיו טים שמח, ולא חם לו!"]]
 },

 erest:{ focus:"@er", anchors:["faster","biggest","best"], ex:"fastest", arTitle:"איך זה נשמע",
  ar:"er = \"אֶר\" עמומה (fast-er). est = \"אִסְט\" (fast-est).",
  rule:"<b class='en'>er</b> = <b>יותר</b>: fast ← faster (יותר מהיר).<br><b class='en'>est</b> = <b>הכי</b>: fastest (הכי מהיר).<br>ובמילה קצרה עם תנועה קצרה, מכפילים: big, bigger, biggest.",
  words:[["faster","מהיר יותר"],["fastest","הכי מהיר"],["taller","גבוה יותר"],["tallest","הכי גבוה"],["smaller","קטן יותר"],["longer","ארוך יותר"],["longest","הכי ארוך"],["softer","רך יותר"],["darker","חשוך יותר"],["darkest","הכי חשוך"],["quicker","זריז יותר"],["quickest","הכי זריז"]],
  listen:[["faster",["fast","faster","fastest"]],["tallest",["tall","taller","tallest"]]],
  ladder:["long","longer","longest"],
  reads:[["a tall man and a taller man","איש גבוה ואיש גבוה יותר"],["The cat is faster.","החתול מהיר יותר."],["This is the longest day.","זה היום הכי ארוך."],["A smaller box","קופסה קטנה יותר"],["The night is darker now.","הלילה חשוך יותר עכשיו."]],
  para:[["Three pals have a race.","שלושה חברים עושים מרוץ."],["Ben is fast.","בן מהיר."],["Sam is faster than Ben.","סאם מהיר יותר מבן."],["But Jess is the fastest!","אבל ג׳ס הכי מהירה!"],["Jess is also the smallest.","ג׳ס גם הכי קטנה."],["Small and quick is the best!","קטנה וזריזה זה הכי טוב!"]]
 },

 le:{ focus:"@le", anchors:["apple","Google","little"], ex:"apple", arTitle:"טריק",
  ar:"מכסים את ה-le, קוראים את ההתחלה, ומוסיפים \"ל\": ap + ple = \"אֶפֶּל\".",
  rule:"<b class='en'>le</b> בסוף מילה נשמעת <b>\"אֶל\" עמומה</b>, וה-e שקטה: apple = \"אֶפֶּל\", table = \"טֵייבֶּל\".<br>ההברה האחרונה תמיד: עיצור + le: ap-<b>ple</b>, ta-<b>ble</b>, tur-<b>tle</b>.",
  words:[["apple","תפוח","ˈap·ple"],["little","קטן","ˈlit·tle"],["table","שולחן","ˈta·ble"],["candle","נר","ˈcan·dle"],["bottle","בקבוק","ˈbot·tle"],["puzzle","פאזל","ˈpuz·zle"],["turtle","צב","ˈtur·tle"],["purple","סגול","ˈpur·ple"],["simple","פשוט","ˈsim·ple"],["jungle","ג׳ונגל","ˈjun·gle"],["bubble","בועה","ˈbub·ble"],["eagle","עיט","ˈea·gle"]],
  listen:[["little",["little","lit"]],["bottle",["bottle","battle"]],["table",["table","tablet"]]],
  ladder:["table","cable","fable"],
  reads:[["a little apple","תפוח קטן"],["a purple bottle","בקבוק סגול"],["A turtle in the jungle","צב בג׳ונגל"],["The puzzle is on the table.","הפאזל על השולחן."],["It is so simple!","זה כל כך פשוט!"]],
  para:[["A little turtle lives in the jungle.","צב קטן גר בג׳ונגל."],["He has a purple bottle.","יש לו בקבוק סגול."],["He blows bubbles from it.","הוא מנשף ממנו בועות."],["An eagle sees the bubbles.","עיט רואה את הבועות."],["The eagle and the turtle play a simple game.","העיט והצב משחקים משחק פשוט."],["They share an apple on a table of grass.","הם חולקים תפוח על שולחן של דשא."]]
 },

 pre:{ focus:"@pre", anchors:["undo","replay","unhappy"], ex:"unlock", arTitle:"טריק לקריאה",
  ar:"מכסים את התחילית, קוראים את המילה המוכרת, ומחברים: un + lock = unlock.",
  rule:"<b>תחילית</b> = חלק קטן בתחילת מילה שמשנה את המשמעות.<br><b class='en'>un</b> = <b>לא</b>, או הפוך: happy ← unhappy (לא שמח), lock ← unlock (לפתוח מנעול).<br><b class='en'>re</b> = <b>שוב</b>: play ← replay (לשחק שוב), fill ← refill (למלא שוב).",
  words:[["unlock","לפתוח מנעול","un·ˈlock"],["undo","לבטל","un·ˈdo"],["unhappy","לא שמח","un·ˈhap·py"],["unpack","לפרוק","un·ˈpack"],["unfair","לא הוגן","un·ˈfair"],["untie","להתיר קשר","un·ˈtie"],["replay","לשחק שוב","re·ˈplay"],["redo","לעשות שוב","re·ˈdo"],["refill","למלא שוב","re·ˈfill"],["reuse","להשתמש שוב","re·ˈuse"],["retell","לספר שוב","re·ˈtell"],["repaint","לצבוע מחדש","re·ˈpaint"]],
  listen:[["unlock",["lock","unlock"]],["replay",["play","replay"]],["unfair",["fair","unfair"]]],
  reads:[["Unlock the door.","פתחי את הדלת."],["It is so unfair!","זה כל כך לא הוגן!"],["Replay the song.","נגני שוב את השיר."],["Refill the cup.","מלאי שוב את הכוס."],["Untie the rope.","התירי את החבל."]],
  para:[["Kim was unhappy.","קים לא הייתה שמחה."],["Her bag was a mess.","התיק שלה היה בלגן."],["She unpacked it.","היא פרקה אותו."],["She refilled her bottle.","היא מילאה שוב את הבקבוק."],["Then she repacked it with care.","ואז ארזה אותו מחדש בזהירות."],["Now Kim is not unhappy. She is happy!","עכשיו קים לא לא-שמחה. היא שמחה!"]]
 },

 ful:{ focus:"@suf", anchors:["helpful","careless","slowly"], ex:"helpful", arTitle:"איך זה נשמע",
  ar:"ful = \"פֻל\" עמומה. less = \"לֶס\". ly = \"לִי\". ness = \"נֶס\".",
  rule:"<b>סיומת</b> = חלק בסוף מילה שמשנה את המשמעות:<br><b class='en'>ful</b> = מלא ב-: help ← helpful (מועיל).<br><b class='en'>less</b> = בלי: care ← careless (לא זהיר).<br><b class='en'>ly</b> = באופן: slow ← slowly (לאט).<br><b class='en'>ness</b> = הופך לשם: sad ← sadness (עצב).",
  words:[["helpful","מועיל","ˈhelp·ful"],["careful","זהיר","ˈcare·ful"],["useful","שימושי","ˈuse·ful"],["painful","כואב","ˈpain·ful"],["careless","לא זהיר","ˈcare·less"],["endless","אינסופי","ˈend·less"],["sadly","בעצב","ˈsad·ly"],["slowly","לאט","ˈslow·ly"],["kindly","בטוב לב","ˈkind·ly"],["kindness","טוב לב","ˈkind·ness"],["sadness","עצב","ˈsad·ness"],["darkness","חושך","ˈdark·ness"]],
  listen:[["careful",["careful","careless"]],["slowly",["slow","slowly"]],["sadness",["sadly","sadness"]]],
  reads:[["Be careful!","היי זהירה!"],["Walk slowly.","לכי לאט."],["Thank you for your kindness.","תודה על טוב הלב שלך."],["It is a useful tool.","זה כלי שימושי."],["An endless night","לילה אינסופי"]],
  para:[["It was dark, and the path was endless.","היה חשוך, והשביל היה אינסופי."],["A little fox walked slowly.","שועל קטן הלך לאט."],["He was careful in the darkness.","הוא נזהר בחושך."],["An owl kindly gave him a light.","ינשוף נתן לו אור בטוב לב."],["That was so helpful!","זה היה כל כך מועיל!"],["The sadness was gone. Kindness is powerful.","העצב נעלם. טוב לב הוא כוח."]]
 },

 r6:{ focus:"@sfx", anchors:["played","jumping","faster","helpful"], ex:"jumping",
  rule:"חזרה על כל הסיומות והתחיליות: <b>ed</b> (עבר), <b>ing</b> (עכשיו), <b>er/est</b> (יותר/הכי), <b>le</b>, <b>un/re</b>, <b>ful/less/ly</b>.<br>הטריק הגדול: <b>מכסים את החלק שנוסף</b>, קוראים את המילה הבסיסית, ומחברים.",
  words:[["jumped","קפץ"],["wanted","רצה"],["playing","משחק"],["sitting","יושב"],["bigger","גדול יותר"],["fastest","הכי מהיר"],["apple","תפוח","ˈap·ple"],["unhappy","לא שמח","un·ˈhap·py"],["replay","לשחק שוב","re·ˈplay"],["helpful","מועיל","ˈhelp·ful"],["slowly","לאט","ˈslow·ly"],["careless","לא זהיר","ˈcare·less"]],
  listen:[["jumped",["jump","jumped","jumping"]],["faster",["fast","faster","fastest"]],["careful",["careful","careless"]]],
  ladder:["play","played","playing","praying"],
  reads:[["She jumped and laughed.","היא קפצה וצחקה."],["We are playing slowly.","אנחנו משחקים לאט."],["The biggest apple","התפוח הכי גדול"],["Be careful, not careless!","היי זהירה, לא רשלנית!"],["Replay it, it was so helpful.","תפעילי שוב, זה היה כל כך מועיל."]],
  para:[["Yesterday, Max played in the park.","אתמול מקס שיחק בפארק."],["He wanted to be the fastest.","הוא רצה להיות הכי מהיר."],["He was running, jumping and hopping.","הוא רץ, קפץ וקיפץ."],["He was careless and slipped.","הוא לא נזהר והחליק."],["A kind girl helped him up slowly.","ילדה טובת לב עזרה לו לקום לאט."],["Max was not unhappy. He had a new pal!","מקס לא היה עצוב. היה לו חבר חדש!"]]
 },

 syl1:{ focus:"@v", anchors:["Batman","Netflix","picnic"], ex:"rabbit", arTitle:"ארבעה צעדים",
  ar:"1. מסמנים את התנועות. 2. מחלקים בין שני העיצורים. 3. קוראים כל חלק. 4. מחברים מהר.",
  rule:"איך קוראים מילה ארוכה? <b>מחלקים להברות</b>.<br>חוק 1: כשיש <b>שני עיצורים</b> בין שתי תנועות, מחלקים <b>ביניהם</b>: rab|bit, nap|kin, bas|ket.<br>כל הברה כזאת סגורה, ולכן התנועה בה <b>קצרה</b>. לחיצה על הברה משמיעה אותה.",
  words:[["rabbit","ארנב","ˈrab·bit"],["kitten","חתלתול","ˈkit·ten"],["muffin","מאפין","ˈmuf·fin"],["napkin","מפית","ˈnap·kin"],["basket","סל","ˈbas·ket"],["picnic","פיקניק","ˈpic·nic"],["sunset","שקיעה","ˈsun·set"],["dentist","רופא שיניים","ˈden·tist"],["insect","חרק","ˈin·sect"],["magnet","מגנט","ˈmag·net"],["tennis","טניס","ˈten·nis"],["happen","לקרות","ˈhap·pen"]],
  listen:[["napkin",["napkin","pumpkin"]],["basket",["basket","blanket"]],["tennis",["tennis","dentist"]]],
  reads:[["a rabbit and a kitten","ארנב וחתלתול"],["a muffin in a basket","מאפין בסל"],["A picnic at sunset","פיקניק בשקיעה"],["The dentist plays tennis.","רופא השיניים משחק טניס."],["What will happen?","מה יקרה?"]],
  para:[["A rabbit and a kitten had a picnic.","ארנב וחתלתול עשו פיקניק."],["They had a basket with muffins.","היה להם סל עם מאפינים."],["The kitten got a napkin.","החתלתול לקח מפית."],["An insect sat on a muffin!","חרק ישב על מאפין!"],["The rabbit and the kitten did not panic.","הארנב והחתלתול לא נבהלו."],["They shared it with the insect at sunset.","הם חלקו אותו עם החרק בשקיעה."]]
 },

 syl2:{ focus:"@v", anchors:["robot","music","tiger"], ex:"robot", arTitle:"אם זה לא נשמע נכון",
  ar:"מנסים לחלק <b>אחרי</b> העיצור: lem|on, sev|en, cab|in. ואז התנועה קצרה. בודקים איזו גרסה נשמעת כמו מילה מוכרת.",
  rule:"חוק 2: כשיש <b>עיצור אחד</b> בין שתי תנועות, קודם מנסים לחלק <b>לפניו</b>: ro|bot, mu|sic, ti|ger.<br>ואז ההברה הראשונה <b>פתוחה</b>, והתנועה בה <b>ארוכה</b> ואומרת את שמה: \"רוֹ-בּוֹט\".<br>אם זה לא נשמע כמו מילה מוכרת, מחלקים <b>אחריו</b> והתנועה קצרה: lem|on, sev|en.",
  words:[["robot","רובוט","ˈro·bot"],["music","מוזיקה","ˈmu·sic"],["tiger","נמר","ˈti·ger"],["paper","נייר","ˈpa·per"],["open","פתוח","ˈo·pen"],["pilot","טייס","ˈpi·lot"],["spider","עכביש","ˈspi·der"],["zero","אפס","ˈze·ro"],["lemon","לימון","ˈlem·on"],["seven","שבע","ˈsev·en"],["cabin","בקתה","ˈcab·in"],["river","נהר","ˈriv·er"]],
  listen:[["robot",["rabbit","robot"]],["tiger",["tiger","timer"]],["seven",["seven","even"]]],
  reads:[["a tiger and a spider","נמר ועכביש"],["Open the paper.","פתחי את הנייר."],["Seven lemons","שבעה לימונים"],["The pilot likes music.","הטייס אוהב מוזיקה."],["A cabin by the river","בקתה ליד הנהר"]],
  para:[["A robot lives in a cabin by the river.","רובוט גר בבקתה ליד הנהר."],["He likes music and paper planes.","הוא אוהב מוזיקה ומטוסי נייר."],["One day, a tiger comes to the cabin.","יום אחד מגיע נמר לבקתה."],["The robot opens the door.","הרובוט פותח את הדלת."],["He gives the tiger seven lemons!","הוא נותן לנמר שבעה לימונים!"],["The tiger makes a funny face. Zero fun? No, lots of fun!","הנמר עושה פרצוף מצחיק. אפס כיף? לא, המון כיף!"]]
 },

 schwa:{ focus:"@v", anchors:["banana","pizza","America"], ex:"about", arTitle:"כמו שווא בעברית",
  ar:"בעברית יש שווא נע, כמו ב\"שְׁלוֹם\" או \"בְּרָכָה\". ה-schwa באנגלית דומה: תנועה קצרצרה ורפויה בהברה <b>בלי</b> דגש.",
  rule:"בהרבה מילים ארוכות, תנועה בהברה <b>בלי דגש</b> \"נבלעת\" ונשמעת <b>אֶ קצרצרה ועמומה</b>. קוראים לה <b>schwa</b> (ə).<br>about = \"אֶבַּאוּט\", banana = \"בֶּנֶנֶה\", sofa = \"סוֹפֶה\".<br>לכן: אם קראת לפי החוקים והמילה נשמעת <b>כמעט</b> נכון, נסי \"לבלוע\" את התנועה של ההברה החלשה. כאן ההברות הבלועות אפורות.",
  words:[["about","בערך, על","°a·ˈbout"],["again","שוב","°a·ˈgain"],["alone","לבד","°a·ˈlone"],["banana","בננה","°ba·ˈna·°na"],["sofa","ספה","ˈso·°fa"],["panda","פנדה","ˈpan·°da"],["zebra","זברה","ˈze·°bra"],["salad","סלט","ˈsal·°ad"],["problem","בעיה","ˈprob·°lem"],["pencil","עיפרון","ˈpen·°cil"],["animal","חיה","ˈan·°i·°mal"],["lemon","לימון","ˈlem·°on"]],
  listen:[["sofa",["sofa","soda"]],["banana",["banana","bandana"]],["panda",["panda","pander"]]],
  reads:[["a panda on a sofa","פנדה על ספה"],["Again and again","שוב ושוב"],["A zebra salad?","סלט זברה?"],["No problem!","אין בעיה!"],["What is it about?","על מה זה?"]],
  para:[["A panda sat alone on a sofa.","פנדה ישבה לבד על ספה."],["She had a banana and a salad.","היו לה בננה וסלט."],["A zebra came again and again.","זברה הגיעה שוב ושוב."],["The zebra wanted the salad.","הזברה רצתה את הסלט."],["No problem, said the panda.","אין בעיה, אמרה הפנדה."],["Now the two animals are pals.","עכשיו שתי החיות חברות."]]
 },

 stress:{ focus:"@v", anchors:["Facebook","computer","banana"], ex:"doctor", arTitle:"עברית מול אנגלית",
  ar:"בעברית הדגש לרוב <b>בסוף</b> (שולחָן, מחשֵב). באנגלית הוא לרוב <b>בהתחלה</b>: TA-ble, DOC-tor. זו אחת הסיבות שאנגלית של דוברי עברית נשמעת \"אחרת\".",
  rule:"בכל מילה ארוכה יש הברה אחת <b>חזקה</b>: אומרים אותה קצת יותר חזק, יותר ארוך ויותר גבוה. זה ה<b>דגש</b> (stress).<br>כאן ההברה החזקה <b>גדולה ואדומה</b>. נסי להגיד את המילה ולהדגיש רק אותה.<br>אם הדגש במקום הלא נכון, גם מילה נכונה נשמעת מוזרה.",
  words:[["table","שולחן","ˈta·ble"],["pencil","עיפרון","ˈpen·cil"],["doctor","רופא","ˈdoc·tor"],["monkey","קוף","ˈmon·key"],["today","היום","to·ˈday"],["away","רחוק","a·ˈway"],["begin","להתחיל","be·ˈgin"],["hotel","מלון","ho·ˈtel"],["computer","מחשב","com·ˈpu·ter"],["banana","בננה","ba·ˈna·na"],["elephant","פיל","ˈel·e·phant"],["hamburger","המבורגר","ˈham·bur·ger"]],
  listen:[["hotel",["hotel","hostel"]],["today",["today","Tuesday"]],["begin",["begin","bacon"]]],
  reads:[["Today I begin.","היום אני מתחילה."],["A monkey at the hotel","קוף במלון"],["The doctor has a computer.","לרופא יש מחשב."],["Go away, elephant!","לך מפה, פיל!"],["A pencil on the table","עיפרון על השולחן"]],
  para:[["Today, a monkey went to a hotel.","היום קוף הלך למלון."],["He wanted a banana and a hamburger.","הוא רצה בננה והמבורגר."],["The doctor at the hotel saw him.","הרופא במלון ראה אותו."],["The monkey ran away to the computer room.","הקוף ברח לחדר המחשבים."],["He sat on the table with a pencil.","הוא ישב על השולחן עם עיפרון."],["Let the fun begin!","שהכיף יתחיל!"]]
 },

 long:{ focus:"@v", anchors:["fantastic","Instagram","butterfly"], ex:"fantastic", arTitle:"הדרך",
  ar:"לא נבהלים ממילה ארוכה! מחלקים להברות, קוראים כל אחת לבד (לחיצה עליה משמיעה), ואז מחברים ומדגישים את ההברה האדומה.",
  rule:"מילים של <b>3 ו-4 הברות</b>. משתמשים בכל מה שלמדנו: חלוקה בין עיצורים, הברות פתוחות, דגש, ותנועות בלועות.<br>זה בדיוק מה שקוראים טובים עושים בראש, מהר מאוד. כאן עושים את זה לאט ובקול.",
  words:[["fantastic","פנטסטי","fan·ˈtas·tic"],["important","חשוב","im·ˈpor·tant"],["remember","לזכור","re·ˈmem·ber"],["umbrella","מטרייה","um·ˈbrel·la"],["butterfly","פרפר","ˈbut·ter·fly"],["crocodile","תנין","ˈcroc·o·dile"],["wonderful","נפלא","ˈwon·der·ful"],["hamburger","המבורגר","ˈham·bur·ger"],["kangaroo","קנגורו","kan·ga·ˈroo"],["watermelon","אבטיח","ˈwa·ter·mel·on"],["caterpillar","זחל","ˈcat·er·pil·lar"],["alligator","אליגטור","ˈal·li·ga·tor"]],
  listen:[["butterfly",["butterfly","butter"]],["remember",["remember","member"]]],
  reads:[["a fantastic butterfly","פרפר פנטסטי"],["Remember the umbrella!","תזכרי את המטרייה!"],["A crocodile and an alligator","תנין ואליגטור"],["It is important.","זה חשוב."],["What a wonderful watermelon!","איזה אבטיח נפלא!"]],
  para:[["A little caterpillar ate and ate.","זחל קטן אכל ואכל."],["He ate a watermelon and a hamburger.","הוא אכל אבטיח והמבורגר."],["A kangaroo and a crocodile came to see.","קנגורו ותנין באו לראות."],["Then the caterpillar went to sleep.","ואז הזחל הלך לישון."],["When he woke up, he was a butterfly!","כשהוא התעורר, הוא היה פרפר!"],["Remember: change can be wonderful.","תזכרי: שינוי יכול להיות נפלא."]]
 },

 r7:{ focus:"@v", anchors:["rabbit","robot","banana"], ex:"remember",
  rule:"חזרה על קריאת מילים ארוכות: <b>מחלקים, קוראים כל הברה, מחברים</b>.<br>שני עיצורים באמצע: מחלקים ביניהם (rab-bit). עיצור אחד: קודם לפניו (ro-bot). ההברה החזקה אדומה, וההברה הבלועה אפורה.",
  words:[["rabbit","ארנב","ˈrab·bit"],["robot","רובוט","ˈro·bot"],["basket","סל","ˈbas·ket"],["tiger","נמר","ˈti·ger"],["lemon","לימון","ˈlem·on"],["banana","בננה","°ba·ˈna·°na"],["pencil","עיפרון","ˈpen·°cil"],["today","היום","to·ˈday"],["computer","מחשב","com·ˈpu·ter"],["butterfly","פרפר","ˈbut·ter·fly"],["umbrella","מטרייה","um·ˈbrel·la"],["remember","לזכור","re·ˈmem·ber"]],
  listen:[["napkin",["napkin","pumpkin"]],["robot",["rabbit","robot"]],["sofa",["sofa","soda"]]],
  reads:[["A robot with an umbrella","רובוט עם מטרייה"],["The tiger ate a lemon.","הנמר אכל לימון."],["Remember the basket today!","תזכרי את הסל היום!"],["A butterfly on a computer","פרפר על מחשב"],["The rabbit has a pencil.","לארנב יש עיפרון."]],
  para:[["Today is a fantastic day.","היום יום פנטסטי."],["A rabbit and a robot go on a picnic.","ארנב ורובוט יוצאים לפיקניק."],["They have a basket with a banana and a muffin.","יש להם סל עם בננה ומאפין."],["It starts to rain, so they open an umbrella.","מתחיל לרדת גשם, אז הם פותחים מטרייה."],["A butterfly hides under it too.","גם פרפר מסתתר מתחתיה."],["They will remember this wonderful day.","הם יזכרו את היום הנפלא הזה."]]
 },

 kn:{ focus:["kn","wr","mb"], snd:{ow:"אוֹוּ"}, wsnd:{climb:{i:"אַיי, ארוכה!"}}, anchors:["know","write","thumb"], ex:"knife", arTitle:"למה הן שם",
  ar:"לפני מאות שנים הגו אותן! באנגלית עתיקה אמרו \"קְנִיף\". ההגייה השתנתה, והכתיב נשאר.",
  rule:"באנגלית יש אותיות ש<b>כתובות אבל לא נשמעות</b>:<br><b class='en'>kn</b> = נ (k שקטה): knee, know.<br><b class='en'>wr</b> = ר (w שקטה): write, wrong.<br><b class='en'>mb</b> בסוף = מ (b שקטה): lamb, thumb.",
  words:[["knee","ברך"],["knot","קשר"],["knock","לדפוק"],["knife","סכין"],["know","לדעת"],["knit","לסרוג"],["write","לכתוב"],["wrap","לעטוף"],["wrong","לא נכון"],["lamb","טלה"],["thumb","אגודל"],["climb","לטפס"]],
  listen:[["knock",["knock","neck","nick"]],["thumb",["thumb","them"]],["wrong",["ring","wrong","rang"]]],
  reads:[["a knot in the rope","קשר בחבל"],["Knock on the door.","דפקי בדלת."],["I know it!","אני יודעת את זה!"],["Write with your thumb?","לכתוב עם האגודל?"],["The lamb can climb.","הטלה יודע לטפס."]],
  para:[["Knock, knock! Who is it?","טוק טוק! מי זה?"],["It is a little lamb.","זה טלה קטן."],["The lamb hurt his knee.","הטלה נפגע בברך."],["I wrap it with a cloth and tie a knot.","אני עוטפת אותה בבד וקושרת קשר."],["The lamb gives me a thumbs up.","הטלה מרים לי אגודל."],["Now I know: I did not do it wrong!","עכשיו אני יודעת: לא עשיתי את זה לא נכון!"]]
 },

 gh:{ focus:["eigh","gh","alf","alm"], anchors:["eight","ghost","half"], ex:"eight", arTitle:"עוד אותיות שקטות",
  ar:"ב-<span class='en'>could, would, should</span> ה-l שקטה ו-ou נשמעת אֻ קצרה: \"קֻד, וֻד, שֻד\".",
  irreg:{hour:"נשמעת <b>\"אָאוּאֶר\"</b>: ה-h שקטה! (כמו our)",honest:"נשמעת <b>\"אוֹנֶסְט\"</b>: ה-h שקטה.",
   could:"נשמעת <b>\"קֻד\"</b>: ה-l שקטה.",would:"נשמעת <b>\"וֻד\"</b>: ה-l שקטה.",should:"נשמעת <b>\"שֻד\"</b>: ה-l שקטה."},
  rule:"עוד אותיות שקטות:<br><b class='en'>gh</b>: ב-eigh היא שקטה ונשמע אֵיי (eight, weigh). בתחילת מילה נשמעת ג (ghost).<br><b class='en'>h</b> שקטה בכמה מילים: hour, honest.<br><b class='en'>l</b> שקטה ב-alf, alm ו-ould: half, calm, could.",
  words:[["eight","שמונה"],["weigh","לשקול"],["ghost","רוח רפאים"],["hour","שעה"],["honest","כן, ישר"],["half","חצי"],["calf","עגל"],["calm","רגוע"],["palm","כף יד, דקל"],["could","יכול היה"],["would","היה"],["should","צריך"]],
  listen:[["half",["have","half","hall"]],["calm",["calm","come"]],["could",["cold","could"]]],
  reads:[["eight ghosts","שמונה רוחות רפאים"],["Half an hour","חצי שעה"],["Be calm and honest.","היי רגועה וכנה."],["What should I do?","מה אני צריכה לעשות?"],["A calf in my palm","עגל בכף היד שלי"]],
  para:[["At eight, a little ghost came to my room.","בשמונה, רוח רפאים קטנה באה לחדר שלי."],["I was calm.","הייתי רגועה."],["Should I run? Could I talk to it?","לברוח? אולי לדבר איתה?"],["The ghost was honest: I am scared too!","הרוח הייתה כנה: גם אני מפחדת!"],["We sat for half an hour.","ישבנו חצי שעה."],["Now we would like to meet again.","עכשיו היינו רוצות להיפגש שוב."]]
 },

 ph:{ focus:["ph","gh"], anchors:["phone","elephant","dolphin"], ex:"photo", arTitle:"וגם gh",
  ar:"בסוף כמה מילים <b>gh</b> נשמעת f: laugh, cough, tough, enough. מילים כאלה לומדים בעל פה.",
  irreg:{laugh:"נשמעת <b>\"לֶאף\"</b>: augh = אַף.",cough:"נשמעת <b>\"קוֹף\"</b>: ough = אוֹף.",
   tough:"נשמעת <b>\"טַאף\"</b>: ough = אַף.",enough:"נשמעת <b>\"אִינַאף\"</b>: ough = אַף."},
  rule:"<b class='en'>ph</b> = <b>f</b>, פ רפה: phone, photo, dolphin. זה בא ממילים יווניות.<br>ו-<b class='en'>gh</b> בסוף כמה מילים נשמעת גם היא f: laugh, tough.",
  words:[["phone","טלפון"],["photo","תמונה","ˈpho·to"],["graph","גרף"],["dolphin","דולפין","ˈdol·phin"],["elephant","פיל","ˈel·e·phant"],["alphabet","אלף בית","ˈal·pha·bet"],["trophy","גביע","ˈtro·phy"],["phrase","ביטוי"],["laugh","לצחוק"],["cough","להשתעל"],["tough","קשוח"],["enough","מספיק"]],
  listen:[["tough",["tough","touch"]],["phone",["phone","fun","fan"]],["photo",["photo","potato"]]],
  reads:[["a photo of a dolphin","תמונה של דולפין"],["The elephant can laugh.","הפיל יודע לצחוק."],["Enough!","מספיק!"],["I won a trophy!","זכיתי בגביע!"],["Learn the alphabet.","ללמוד את האלף בית."]],
  para:[["Phil has a new phone.","לפיל יש טלפון חדש."],["He takes a photo of an elephant.","הוא מצלם פיל."],["The elephant starts to laugh.","הפיל מתחיל לצחוק."],["Then a dolphin jumps for a photo too!","ואז גם דולפין קופץ לתמונה!"],["Phil laughs so much he coughs.","פיל צוחק כל כך שהוא משתעל."],["That photo could win a trophy!","התמונה הזאת יכולה לזכות בגביע!"]]
 },

 ea2:{ focus:["ea"], snd:{ea:"אֶ קצרה"}, anchors:["bread","head","ready"], ex:"bread", arTitle:"טריק",
  ar:"קוראים קודם עם אִיי (כמו eat). אם זה לא מילה מוכרת, מנסים אֶ. זו גם הסיבה ש-read בעבר נשמעת \"רֶד\".",
  rule:"בדרך כלל <b class='en'>ea</b> נשמעת אִיי (eat, sea). אבל בקבוצה של מילים היא נשמעת <b>אֶ קצרה</b>: bread, head, heavy.<br>השוו: bead (חרוז) מול bread (לחם).",
  words:[["bread","לחם"],["head","ראש"],["dead","מת"],["deaf","חירש"],["health","בריאות"],["heavy","כבד","ˈheav·y"],["ready","מוכן","ˈread·y"],["sweat","זיעה"],["sweater","סוודר","ˈsweat·er"],["weather","מזג אוויר","ˈweath·er"],["feather","נוצה","ˈfeath·er"],["breakfast","ארוחת בוקר","ˈbreak·fast"]],
  listen:[["bread",["bread","breed"]],["dead",["dead","deed"]],["head",["head","heat","hat"]]],
  reads:[["bread for breakfast","לחם לארוחת בוקר"],["A feather on my head","נוצה על הראש שלי"],["Are you ready?","את מוכנה?"],["The bag is heavy.","התיק כבד."],["What is the weather?","מה מזג האוויר?"]],
  para:[["The weather is cold.","מזג האוויר קר."],["Ted puts on a heavy sweater.","טד לובש סוודר כבד."],["He has bread for breakfast.","הוא אוכל לחם לארוחת בוקר."],["A bird lands on his head!","ציפור נוחתת לו על הראש!"],["It leaves a feather.","היא משאירה נוצה."],["Ted is ready for a fun day.","טד מוכן ליום כיפי."]]
 },

 wa:{ focus:"@wa", snd:{a:"אָ, כמו o ב-hot",or:"אֶר, כמו ב-her"}, anchors:["water","WhatsApp","world"], ex:"water", arTitle:"השוואה",
  ar:"cat (קֶט) מול what (ווֹט). for (פוֹר) מול word (ווֶרְד). אותו כתיב, צליל אחר, בגלל ה-w.",
  rule:"<b>w</b> משנה את התנועה שאחריה:<br><b class='en'>wa</b> נשמעת <b>ווֹ</b> (כמו o ב-hot): water, wash, want, watch.<br><b class='en'>wor</b> נשמעת <b>ווֶר</b> (כמו her): word, work, world.",
  words:[["water","מים","ˈwa·ter"],["wash","לשטוף"],["want","לרצות"],["watch","שעון, לצפות"],["swan","ברבור"],["wasp","צרעה"],["swap","להחליף"],["word","מילה"],["work","עבודה"],["world","עולם"],["worm","תולעת"],["worth","שווה"]],
  listen:[["word",["word","wood"]],["wash",["wish","wash"]],["work",["walk","work","fork"]]],
  reads:[["a swan in the water","ברבור במים"],["Wash and watch","לשטוף ולצפות"],["I want to work.","אני רוצה לעבוד."],["A worm and a wasp","תולעת וצרעה"],["The best word in the world","המילה הכי טובה בעולם"]],
  para:[["A worm wants to see the world.","תולעת רוצה לראות את העולם."],["She swims to a swan in the water.","היא שוחה אל ברבור במים."],["The swan says one word: hop on!","הברבור אומר מילה אחת: עלי!"],["They float and watch the world.","הם צפים וצופים בעולם."],["A wasp wants to swap with the worm.","צרעה רוצה להתחלף עם התולעת."],["No way! This trip is worth it.","אין מצב! הטיול הזה שווה את זה."]]
 },

 ture:{ focus:["ture","age"], anchors:["picture","Future","message"], ex:"picture", arTitle:"שימי לב",
  ar:"במילה קצרה כמו <span class='en'>page</span> ה-a כן ארוכה (\"פֵּייג׳\"). רק בסוף מילה ארוכה age נשמעת \"אִג׳\".",
  irreg:{cabbage:"נשמעת <b>\"קֶבִּג׳\"</b>: age בסוף = אִג׳.",village:"נשמעת <b>\"וִילִג׳\"</b>.",message:"נשמעת <b>\"מֶסִג׳\"</b>.",package:"נשמעת <b>\"פֶּקִג׳\"</b>.",garbage:"נשמעת <b>\"גָארְבִּג׳\"</b>.",luggage:"נשמעת <b>\"לַאגִג׳\"</b>."},
  rule:"סיומות נפוצות במילים ארוכות:<br><b class='en'>ture</b> נשמעת <b>\"צ׳ֶר\"</b>: picture = \"פִּיקְצ׳ֶר\", nature = \"נֵייצ׳ֶר\".<br><b class='en'>age</b> בסוף מילה ארוכה נשמעת <b>\"אִג׳\"</b>: cabbage, village.",
  words:[["picture","תמונה","ˈpic·ture"],["nature","טבע","ˈna·ture"],["future","עתיד","ˈfu·ture"],["capture","ללכוד","ˈcap·ture"],["mixture","תערובת","ˈmix·ture"],["adventure","הרפתקה","ad·ˈven·ture"],["cabbage","כרוב","ˈcab·bage"],["village","כפר","ˈvil·lage"],["message","הודעה","ˈmes·sage"],["package","חבילה","ˈpack·age"],["garbage","זבל","ˈgar·bage"],["luggage","מזוודות","ˈlug·gage"]],
  listen:[["village",["village","villa"]],["future",["future","feature"]],["picture",["picture","pitcher"]]],
  reads:[["a picture of nature","תמונה של טבע"],["A message in a package","הודעה בחבילה"],["The future is bright.","העתיד מואר."],["Cabbage soup in the village","מרק כרוב בכפר"],["Time for an adventure!","הגיע הזמן להרפתקה!"]],
  para:[["Mia lives in a little village.","מיה גרה בכפר קטן."],["One day she gets a package.","יום אחד היא מקבלת חבילה."],["In it is a message and a picture.","בתוכה הודעה ותמונה."],["The picture is a map of nature.","התמונה היא מפה של הטבע."],["Mia packs her luggage.","מיה אורזת את המזוודות."],["Her adventure starts now!","ההרפתקה שלה מתחילה עכשיו!"]]
 },

 tion:{ focus:["tion","sion"], anchors:["action","station","television"], ex:"station", arTitle:"איפה הדגש",
  ar:"הדגש כמעט תמיד על ההברה <b>שלפני</b> tion: <b>STA</b>-tion, va-<b>CA</b>-tion.",
  rule:"<b class='en'>tion</b> נשמעת <b>\"שֶן\"</b>: action = \"אֶקְשֶן\", station = \"סְטֵיישֶן\".<br><b class='en'>sion</b> נשמעת <b>\"ז׳ֶן\"</b> (vision, television) או \"שֶן\" (mission).",
  words:[["action","פעולה","ˈac·tion"],["nation","אומה","ˈna·tion"],["station","תחנה","ˈsta·tion"],["lotion","קרם","ˈlo·tion"],["motion","תנועה","ˈmo·tion"],["vacation","חופשה","va·ˈca·tion"],["fiction","סיפורת","ˈfic·tion"],["mention","להזכיר","ˈmen·tion"],["vision","ראייה","ˈvi·sion"],["television","טלוויזיה","ˈtel·e·vi·sion"],["explosion","פיצוץ","ex·ˈplo·sion"],["mission","משימה","ˈmis·sion"]],
  listen:[["motion",["motion","lotion","potion"]],["station",["station","nation"]]],
  reads:[["a train station","תחנת רכבת"],["Sun lotion for the vacation","קרם הגנה לחופשה"],["An action film on television","סרט פעולה בטלוויזיה"],["Your mission: read!","המשימה שלך: לקרוא!"],["Slow motion","הילוך איטי"]],
  para:[["We are on vacation.","אנחנו בחופשה."],["We wait at the train station.","אנחנו מחכים בתחנת הרכבת."],["Mom puts on sun lotion.","אמא מורחת קרם הגנה."],["I read a fiction book about a secret mission.","אני קוראת ספר על משימה סודית."],["In the book there is a big explosion!","בספר יש פיצוץ גדול!"],["The train comes. Action!","הרכבת מגיעה. אקשן!"]]
 },

 heart3:{ focus:"@none", anchors:["people","friend","because"], ex:"friend",
  rule:"מילות ❤️ לב מתקדמות. הן נפוצות מאוד, ויש בכל אחת חלק אחד \"משוגע\". מתחת לכל מילה כתוב מה מיוחד בה.<br>טיפ: כותבים את המילה פעם אחת ביד, ואומרים בקול את החלק המוזר. ככה היא נדבקת.",
  irreg:{people:"נשמעת <b>\"פִּיפֶּל\"</b>: eo נשמעת אִיי.",friend:"נשמעת <b>\"פְרֶנְד\"</b>: ie נשמעת אֶ, לא אַיי.",
   because:"נשמעת <b>\"בִּיקוֹז\"</b>: au כמו ב-August, וה-s נשמעת ז.",eye:"נשמעת <b>\"אַיי\"</b>, בדיוק כמו I (אני)!",
   busy:"נשמעת <b>\"בִּיזִי\"</b>: u נשמעת אִ, s נשמעת ז.",sugar:"נשמעת <b>\"שֻׁגֶר\"</b>: ה-s נשמעת ש!",
   young:"נשמעת <b>\"יַאנְג\"</b>: ou נשמעת כמו u ב-fun.",beautiful:"נשמעת <b>\"בְּיוּטִיפֻל\"</b>: eau נשמעת יוּ.",
   often:"נשמעת <b>\"אוֹפֶן\"</b>: ה-t לרוב שקטה.",answer:"נשמעת <b>\"אֶנְסֶר\"</b>: ה-w שקטה.",
   island:"נשמעת <b>\"אַיילֶנְד\"</b>: ה-s שקטה!",many:"נשמעת <b>\"מֶנִי\"</b>: a נשמעת אֶ."},
  words:[["people","אנשים"],["friend","חבר"],["because","כי"],["eye","עין"],["busy","עסוק"],["sugar","סוכר"],["young","צעיר"],["beautiful","יפה"],["often","לעתים קרובות"],["answer","תשובה"],["island","אי"],["many","הרבה"]],
  listen:[["eye",["eye","yes"]],["busy",["bossy","busy"]],["many",["many","money"]]],
  reads:[["many people","הרבה אנשים"],["My friend is busy.","החברה שלי עסוקה."],["A beautiful island","אי יפה"],["I often eat sugar.","אני אוכלת סוכר לעתים קרובות."],["What is the answer?","מה התשובה?"]],
  para:[["Many people live on a beautiful island.","הרבה אנשים גרים על אי יפה."],["My friend Lily is one of them.","החברה שלי לילי היא אחת מהם."],["She is young and often busy.","היא צעירה ועסוקה לעתים קרובות."],["She makes cakes with sugar.","היא מכינה עוגות עם סוכר."],["Why? Because people love them!","למה? כי אנשים אוהבים אותן!"],["Keep an eye on the island. The answer is cake!","שימי עין על האי. התשובה היא עוגה!"]]
 },

 r8:{ focus:"@none", anchors:["fantastic","knife","picture"], ex:"adventure",
  rule:"🏆 <b>החזרה הגדולה</b>: מילים מכל העולמות ופסקה ארוכה.<br>זוכרים את הכלים: העין לאמצע, צמדים, e קסומה, הברות, דגש, אותיות שקטות ומילות לב.<br>ובפסקה: <b>משפט אחד בכל פעם</b>. אין צורך למהר.",
  words:[["knife","סכין"],["write","לכתוב"],["laugh","לצחוק"],["water","מים","ˈwa·ter"],["picture","תמונה","ˈpic·ture"],["station","תחנה","ˈsta·tion"],["bread","לחם"],["people","אנשים"],["elephant","פיל","ˈel·e·phant"],["remember","לזכור","re·ˈmem·ber"],["butterfly","פרפר","ˈbut·ter·fly"],["friend","חבר"]],
  listen:[["word",["word","wood"]],["head",["head","heat"]],["knock",["knock","neck"]]],
  reads:[["Write a message to a friend.","כתבי הודעה לחברה."],["People laugh at the station.","אנשים צוחקים בתחנה."],["An elephant drinks water.","פיל שותה מים."],["Remember the bread and the knife.","תזכרי את הלחם ואת הסכין."],["A picture of a butterfly","תמונה של פרפר"]],
  para:[["Last summer, I went on a big adventure.","בקיץ שעבר יצאתי להרפתקה גדולה."],["I took a train from a busy station.","נסעתי ברכבת מתחנה הומה."],["My friend and I had bread, cheese and water.","לי ולחברה שלי היו לחם, גבינה ומים."],["We saw an elephant near a beautiful river.","ראינו פיל ליד נהר יפה."],["I took a picture, and we started to laugh.","צילמתי, והתחלנו לצחוק."],["I will always remember that wonderful day.","תמיד אזכור את היום הנפלא ההוא."],["Now I can read this whole story in English!","עכשיו אני יכולה לקרוא את כל הסיפור הזה באנגלית!"]]
 }
};

// עוד זוגות מבלבלים: קצר מול ארוך, ומילים שנראות דומות
window.MORE_PAIRS = [
 ["fat","fit"],["hip","hop"],["lip","lap"],["mud","mad"],["nap","nip"],["pop","pup"],["rat","rot","rut"],["sip","sap"],["tag","tug"],["wag","wig"],
 ["jog","jig","jug"],["bun","ban","bin"],["dim","dam"],["cab","cub"],["pan","pun"],["sun","sin"],["hug","hog"],["mug","mag"],["ton","tan","tin","ten"],
 ["dot","dad"],["lit","lot","let"],
 ["ship","sheep"],["fit","feet"],["sit","seat"],["bed","bead"],["met","meet"],["fed","feed"],["men","mean"],["ran","rain"],["pan","pain"],["mad","maid"],
 ["cot","coat"],["got","goat"],["rod","road"],["con","cone"],["fill","feel"],["pull","pool"],["full","fool"],["look","luck"],["cat","cart"],["hut","hurt"],
 ["shot","short"],["ball","bell"],["boil","ball"],["cord","card"],["bread","breed"],["word","wood"],["walk","work"]
];
window.MORE_TWIN = {fat:"שמן",fit:"להתאים",hip:"מותן",lip:"שפה",nip:"צביטה",nap:"תנומה",pop:"פופ",rat:"עכברוש",rot:"ריקבון",rut:"תלם",sap:"מוהל",
 tag:"תווית",tug:"משיכה",wag:"לכשכש",wig:"פאה",jog:"ריצה קלה",jig:"ריקוד",jug:"כד",bun:"לחמנייה",ban:"איסור",bin:"פח",dim:"עמום",dam:"סכר",
 cab:"מונית",pun:"משחק מילים",sun:"שמש",hog:"חזיר",mug:"ספל",mag:"מגזין",ton:"טון",dot:"נקודה",dad:"אבא",lit:"דלוק",lot:"הרבה",let:"לתת, להרשות",
 sheep:"כבשה",feet:"כפות רגליים",seat:"מושב",bead:"חרוז",meet:"לפגוש",feed:"להאכיל",mean:"להתכוון",rain:"גשם",pain:"כאב",maid:"עוזרת",
 coat:"מעיל",goat:"עז",road:"כביש",con:"חיסרון",cone:"גביע",fill:"למלא",feel:"להרגיש",pull:"למשוך",pool:"בריכה",full:"מלא",fool:"טיפש",
 look:"להסתכל",luck:"מזל",cart:"עגלה",hurt:"כואב",short:"קצר",boil:"להרתיח",cord:"חוט",card:"כרטיס",bread:"לחם",breed:"גזע",word:"מילה",
 wood:"עץ, חומר",walk:"ללכת",work:"לעבוד",gap:"רווח",ham:"בשר חזיר"};

// עוד מילים עם תמונה (אימוג׳י שעובד בווינדוס), לפי השלב שבו הן נלמדות
window.MORE_PIC = {
 tree:["🌳","ee"],sheep:["🐑","ee"],leaf:["🍃","ee"],tea:["🍵","ee"],
 rain:["🌧️","ai"],snail:["🐌","ai"],mail:["📬","ai"],train:["🚆","ai"],
 boat:["⛵","oa"],goat:["🐐","oa"],coat:["🧥","oa"],soap:["🧼","oa"],snow:["❄️","oa"],
 night:["🌃","igh"],light:["💡","igh"],pie:["🥧","igh"],tie:["👔","igh"],
 moon:["🌙","oo"],spoon:["🥄","oo"],book:["📖","oo"],
 car:["🚗","ar"],star:["🌟","ar"],shark:["🦈","ar"],farm:["🚜","ar"],arm:["💪","ar"],
 corn:["🌽","or"],fork:["🍴","or"],horn:["📯","or"],storm:["⛈️","or"],
 bird:["🐦","er"],girl:["👧","er"],shirt:["👕","er"],
 boy:["👦","oi"],toy:["🧸","oi"],
 cow:["🐄","ou"],owl:["🦉","ou"],cloud:["☁️","ou"],house:["🏡","ou"],clown:["🤡","ou"],
 ball:["🏀","aw"],paw:["🐾","aw"],
 chair:["💺","air"],pear:["🍐","air"],hair:["💇","air"],
 apple:["🍎","le"],candle:["🕯️","le"],bottle:["🍼","le"],turtle:["🐢","le"],puzzle:["🧩","le"],eagle:["🦅","le"],
 rabbit:["🐰","syl1"],kitten:["🐈","syl1"],muffin:["🧁","syl1"],basket:["🧺","syl1"],
 robot:["🤖","syl2"],tiger:["🐯","syl2"],lemon:["🍋","syl2"],spider:["🕷️","syl2"],
 banana:["🍌","schwa"],panda:["🐼","schwa"],zebra:["🦓","schwa"],
 computer:["💻","stress"],monkey:["🐒","stress"],
 umbrella:["☂️","long"],butterfly:["🦋","long"],crocodile:["🐊","long"],kangaroo:["🦘","long"],watermelon:["🍉","long"],hamburger:["🍔","long"],
 knife:["🔪","kn"],thumb:["👍","kn"],
 ghost:["👻","gh"],eight:["8️⃣","gh"],
 dolphin:["🐬","ph"],elephant:["🐘","ph"],trophy:["🥇","ph"],photo:["📷","ph"],
 bread:["🍞","ea2"],
 water:["💧","wa"],watch:["⌚","wa"],swan:["🦢","wa"],world:["🌍","wa"],
 picture:["🖼️","ture"],
 station:["🚉","tion"],television:["📺","tion"],
 eye:["👁️","heart3"],sugar:["🍬","heart3"],island:["🏝️","heart3"]
};
