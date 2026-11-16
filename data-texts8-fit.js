/* התאמת הטקסטים לרמה של התחנה (16.11.2026): בכל טקסט הוחלפו מילים שדורשות צליל שהתחנה עוד לא לימדה
   (למשל צירוף כמו stop או swim בתחנת הצמדים, ch כמו beach בתחנת זוגות התנועות, סיומת ed לפני תחנת הסיומות).
   התוכן והסיפור נשמרו, והתרגום והשאלות עודכנו בהתאם. נבדק בסקריפט text_level.py. */
(function(){
  const T = id => (window.TEXTS||[]).find(t => t.id === id);
  // S: מחליף משפט. chk = שאלת בדיקה חדשה; null = בלי שאלה; undefined = משאיר את השאלה הקיימת
  const S = (id, i, en, he, chk) => { const t = T(id); if(!t || !t.s[i]) return; t.s[i] = [en, he].concat(chk === undefined ? t.s[i].slice(2) : (chk ? [chk] : [])); };
  const Q = (id, i, q) => { const t = T(id); if(t && t.q && t.q[i]) t.q[i] = q; };
  const SET = (id, o) => { const t = T(id); if(t) Object.assign(t, o); };

  /* ---------- התנועות הקצרות (w0): רק עיצור-תנועה-עיצור ---------- */
  S("w0c", 0, "My bag / has a lot / in it:", "בתיק שלי יש הרבה:");
  S("w0d", 0, "Meg: / Kim! Kim!", "מג: קים! קים!");
  S("w0d", 5, "Meg: / It is not a bad bug. / It is a fun bug.", "מג: זה לא חרק רע. זה חרק כיפי.");
  S("b0b", 1, "A pig / has no fan / and no hat.", "לחזיר אין מאוורר ואין כובע.");

  /* ---------- זוגות תנועות (w0.5): בלי ch, בלי צירופים ---------- */
  S("pt1", 5, "Jean sees a seal / by the sea.", "ג׳ין רואה כלב ים ליד הים.");
  SET("pt2", {gl:{sail:"להפליג", deep:"עמוק", neat:"מסודר", seal:"כלב ים"}});
  S("pt2", 1, "Lee and Dean / eat meat / and a pie / by the sea.", "לי ודין אוכלים בשר ופאי ליד הים.");
  S("pt2", 3, "Lee and Dean / sail / on the deep sea.", "לי ודין מפליגים בים העמוק.");
  S("pt2", 4, "Lee and Dean / see a seal.", "לי ודין רואים כלב ים.", ["Who do Lee and Dean see?", ["A seal", "A goat", "A jay"], 0]);
  Q("pt2", 1, ["פרט", "What do Lee and Dean eat?", ["Meat and a pie", "Peas", "Soap"], 0]);
  SET("pt3", {gl:{meet:"להיפגש", noon:"צהריים", read:"לקרוא", tea:"תה"}});
  S("pt3", 0, "Dean, / meet me / by the sea / at noon.", "דין, היפגש איתי ליד הים בצהריים.");
  S("pt3", 2, "Tea and a pie / for Dean and Jean.", "תה ופאי בשביל דין וג׳ין.");
  S("pt3", 3, "We can read / and eat / by the sea.", "נוכל לקרוא ולאכול ליד הים.");
  Q("pt3", 1, ["פרט", "What is there for Dean and Jean?", ["Tea and a pie", "Meat and soap", "A goat"], 0]);
  SET("pt4", {gl:{moon:"ירח", light:"אור", high:"גבוה", deep:"עמוק"}});
  S("pt4", 4, "Lee: / The moon is high!", "לי: הירח גבוה!");
  S("pt5", 1, "It can eat meat / and eel.", "הוא יכול לאכול בשר וצלופחים.");
  S("pt5", 2, "A seal / can leap / in the sea.", "כלב ים יכול לקפוץ בים.");
  SET("pt6", {t:"Boat Days by the Sea", he:"ימי סירה ליד הים", gl:{sail:"להפליג", fee:"תשלום", noon:"צהריים", sea:"ים"}});
  S("pt6", 0, "Boat days / by the sea!", "ימי סירה ליד הים!");
  S("pt6", 1, "Day by day / in May, / Joan and Dean / sail.", "יום אחרי יום במאי, ג׳ואן ודין מפליגים.");
  S("pt6", 2, "Meet Joan and Dean / by the sea.", "היפגשו עם ג׳ואן ודין ליד הים.");
  S("pt6", 3, "Keep a coat, / for the sea is cool.", "קחו מעיל, כי הים קריר.", ["When do Joan and Dean sail?", ["Day by day in May", "At night", "In a pool"], 0]);
  S("pt6", 4, "Eat a meal / by the sea / at noon.", "אכלו ארוחה ליד הים בצהריים.");
  S("pt6", 5, "You pay no fee!", "לא משלמים כלום!");
  Q("pt6", 1, ["הסקה", "Do you pay a fee?", ["No", "Yes", "Only at night"], 0]);

  /* ---------- צמדים (w1): sh, ch, th, ck, ng... בלי צירופים כמו st, sw, dr ---------- */
  S("w1a", 2, "Then / a duck / gets in the shop.", "ואז ברווז נכנס לחנות.");
  S("w1a", 7, "The duck / runs back / to his bath / with a shell.", "הברווז רץ בחזרה לאמבטיה שלו עם צדף.");
  SET("w1b", {gl:{deck:"מרפסת", match:"משחק", chips:"צ׳יפס"}});
  S("w1b", 0, "Josh!", "ג׳וש!");
  S("w1b", 1, "I am on the bus / with Rich.", "אני באוטובוס עם ריץ׳.");
  S("w1b", 3, "Can you get / fish and chips?", "אתה יכול להביא דג וצ׳יפס?");
  S("w1b", 4, "Get a big bun / with them.", "תביא גם לחמנייה גדולה.");
  S("w1b", 5, "We will sit / on the deck / with Beth.", "נשב על המרפסת עם בת׳.");
  Q("w1b", 0, ["רעיון", "מה סת׳ מבקש מג׳וש?", ["להביא אוכל", "לבוא לאוטובוס", "להתקשר לבת׳"], 0]);
  Q("w1b", 1, ["פרט", "עם מי סת׳ באוטובוס?", ["עם ריץ׳", "עם בת׳", "לבד"], 0]);
  Q("w1b", 2, ["פרט", "איפה הם ישבו?", ["על המרפסת", "באוטובוס", "בבית"], 0]);
  S("w1c", 3, "3. Mix the dill / with a bit of / hot fat.", "3. ערבבו את השמיר עם קצת שומן חם.");
  Q("w1c", 0, ["סדר", "מה עושים לפני שמערבבים עם השומן?", ["קוצצים את השמיר", "שמים בתנור", "אוכלים"], 0]);
  SET("w1e", {gl:{webs:"קרום בין האצבעות", quack:"קוואק, קול של ברווז", bill:"מקור"}});
  S("w1e", 0, "Ducks / sit on the sea / and bob.", "ברווזים יושבים על הים ומתנדנדים.");
  S("w1e", 1, "A duck / has webs / on its feet.", "לברווז יש קרום בין האצבעות.");
  S("w1e", 2, "The webs / let it / kick in the sea.", "הקרום עוזר לו לחתור בים.", ["במה הקרום עוזר?", ["לחתור בים", "לרוץ", "לישון"], 0]);
  S("w1e", 3, "A duck / has a bill, / not lips.", "לברווז יש מקור, לא שפתיים.");
  S("w1e", 5, "A duck / sits on its eggs.", "הברווזה יושבת על הביצים שלה.");
  S("w1f", 3, "The king / sings / and sings.", "המלך שר ושר.");
  S("w1f", 4, "Bang, bang, / bash the pot!", "באנג, באנג, תופפו על הסיר!", ["על מה מתופפים?", ["על סיר", "על דלת", "על שולחן"], 0]);
  S("w1f", 5, "Will the king / get up? / Yes, he will!", "המלך יקום? כן, הוא יקום!");
  S("b1a", 3, "The duck / had no wish / for cash.", "הברווז לא רצה כסף.");
  S("b1a", 4, "The duck said: / I wish / to be with my pals / on the sea.", "הברווז אמר: אני רוצה להיות עם החברים שלי בים.");
  S("b1a", 5, "The fish / let him / go back.", "הדג נתן לו לחזור.");
  S("b1a", 6, "The duck / was not rich, / but he had his pals.", "הברווז לא היה עשיר, אבל היו לו חברים.");
  SET("b1b", {gl:{moth:"עש", wings:"כנפיים", thick:"עבה", log:"בול עץ"}});
  S("b1b", 1, "Moths / zip and zip / at night.", "עשים עפים מהר בלילה.");
  S("b1b", 2, "A moth / can sit / on a thick log / and wait and wait.", "עש יכול לשבת על בול עץ עבה ולחכות ולחכות.");
  S("b1b", 3, "Its wings / match the log, / so a bat / can not see it.", "הכנפיים שלו דומות לבול העץ, אז עטלף לא רואה אותו.", ["למה העטלף לא רואה את העש?", ["הכנפיים דומות לבול העץ", "הוא קטן מאוד", "הוא שקוף"], 0]);
  S("b1b", 4, "Moths / rush / to a light / at night.", "עשים ממהרים אל אור בלילה.");
  Q("b1b", 0, ["פרט", "מתי עשים עפים?", ["בלילה", "רק בצהריים", "בחורף בלבד"], 0]);
  Q("b1b", 1, ["הסקה", "למה מסוכן לעש להתקרב לאור?", ["עטלף יכול לתפוס אותו", "האור קר", "הוא נרטב"], 0]);

  /* ---------- צירופים (w2): צירופים כן, אבל בלי e קסומה, בלי ar/or, בלי סיומות ומילים ארוכות ---------- */
  S("w2a", 1, "It was hot, / and the frog / felt it had to / get wet.", "היה חם, והצפרדע הרגישה שהיא חייבת להירטב.");
  SET("w2b", {gl:{lost:"אבד", spot:"כתם", strap:"רצועה", tag:"תג"}});
  S("w2b", 1, "His pet tag / says: / Champ.", "על התג שלו כתוב: צ׳אמפ.");
  S("w2b", 2, "He is black / with a tan spot / on his chest.", "הוא שחור עם כתם חום-בהיר על החזה.", ["איפה הכתם?", ["על החזה", "על הזנב", "על האוזן"], 0]);
  S("w2b", 3, "He has / a red strap / on his neck.", "יש לו רצועה אדומה על הצוואר.");
  S("w2b", 5, "He is a good dog, / and he can sit, / stand / and spin.", "הוא כלב טוב, והוא יודע לשבת, לעמוד ולהסתובב.");
  Q("w2b", 1, ["פרט", "איזה צבע הרצועה?", ["אדום", "שחור", "לבן"], 0]);
  Q("w2b", 3, ["נכון/לא", "צ׳אמפ יודע להסתובב.", ["נכון", "לא נכון"], 0]);
  SET("w2d", {gl:{nest:"קן", nuts:"אגוזים", strong:"חזק", dig:"לחפור"}});
  S("w2d", 0, "Ants / are bugs.", "נמלים הן חרקים.");
  S("w2d", 1, "Ants / dig a nest / in the sand.", "נמלים חופרות קן בחול.");
  S("w2d", 3, "It can lift / a nut / as big as it.", "היא יכולה להרים אגוז גדול כמוה.", ["מה נמלה יכולה להרים?", ["אגוז גדול כמוה", "אבן ענקית", "כלב"], 0]);
  S("w2d", 5, "Lots of ants / get the nuts.", "הרבה נמלים מביאות אגוזים.");
  S("w2d", 6, "Lots of ants / dig.", "הרבה נמלים חופרות.");
  S("w2d", 7, "Can ants / swim? / No! / Ants can not swim well.", "נמלים יודעות לשחות? לא! נמלים לא שוחות טוב.");
  SET("w2e", {gl:{trip:"טיול", swans:"ברבורים", snack:"חטיף", crust:"קרום, קצה של לחם"}});
  S("w2e", 4, "I had / a crust / and a swan / got it / in its bill!", "החזקתי קצה של לחם, וברבור לקח אותו במקור!");
  S("w2e", 5, "Then / I fell / flat / in the mud!", "ואז נפלתי ישר לבוץ!");
  S("w2e", 6, "Gran said: / What a mess!", "סבתא אמרה: איזה בלגן!");
  Q("w2e", 1, ["סדר", "מה קרה אחרי שהברבור לקח את הלחם?", ["הכותב נפל לבוץ", "הם הלכו הביתה", "סבתא בכתה"], 0]);
  Q("w2e", 3, ["מילה", "מה זה crust?", ["קצה של לחם", "ברבור", "בוץ"], 0]);
  SET("b2a", {t:"The Ant and the Frog", he:"הנמלה והצפרדע", gl:{frog:"צפרדע", nuts:"אגוזים", frost:"כפור", sing:"לשיר"}});
  S("b2a", 0, "In spring, / the ant / went from the grass / to her nest / with bits of nuts.", "באביב הנמלה הלכה מהדשא לקן שלה עם חתיכות של אגוזים.");
  S("b2a", 1, "The frog / sat / and sang / all day.", "הצפרדע ישבה ושרה כל היום.");
  S("b2a", 3, "I must / stack / the nuts / for the cold, / said the ant.", "אני חייבת לערום את האגוזים לקראת הקור, אמרה הנמלה.", ["למה הנמלה עובדת?", ["כדי שיהיה לה אוכל בקור", "כי היא אוהבת לשיר", "כי הצפרדע ביקשה"], 0]);
  S("b2a", 4, "Then / the frost / set in.", "ואז הגיע הכפור.");
  S("b2a", 5, "The frog / had no snack / and felt sad.", "לצפרדע לא היה חטיף, והיא הייתה עצובה.");
  S("b2a", 6, "The ant / let the frog / in, / and they had / a snack of nuts.", "הנמלה הכניסה את הצפרדע, והן אכלו יחד חטיף של אגוזים.");
  S("b2a", 7, "The next spring, / the frog / sang / and dug / with the ant.", "באביב שאחרי, הצפרדע שרה וגם חפרה עם הנמלה.");
  Q("b2a", 0, ["רעיון", "מה המסר?", ["כדאי להתכונן מראש, וטוב לעזור לאחרים", "לשיר זה בזבוז", "נמלים לא אוהבות צפרדעים"], 0]);
  Q("b2a", 1, ["סדר", "מה קרה אחרי שהגיע הכפור?", ["לצפרדע לא היה אוכל", "הנמלה שרה", "האביב חזר"], 0]);
  Q("b2a", 2, ["הסקה", "מה הצפרדע למדה?", ["לעזור וגם לשיר", "לא לשיר לעולם", "לברוח מהקור"], 0]);
  S("b2b", 2, "A tadpole / has a tail / and swims / as fish do.", "לראשן יש זנב, והוא שוחה כמו דג.");
  S("b2c", 0, "To Gran and Gramps,", "לסבתא ולסבא,");
  S("b2c", 7, "Hugs, / Fred", "חיבוקים, פרד");

  /* ---------- ה-e הקסומה (w3): בלי ow/ew, בלי ar/or/er, בלי סיומות ---------- */
  S("w3a", 7, "Mike / gave the kite / a poke, / and it slid / off the pine.", "מייק נתן לעפיפון דחיפה, והוא החליק מהאורן.");
  S("w3b", 0, "Hi Jane,", "היי ג׳יין,");
  S("w3b", 2, "It is red, / and it has / a bell / and a big box.", "הם אדומים, ויש להם פעמון וארגז גדול.", ["מה יש לאופניים?", ["פעמון וארגז", "מנוע", "שלושה גלגלים"], 0]);
  S("w3b", 4, "The rule / is to / put on / a bike hat.", "הכלל הוא לשים כובע אופניים.");
  S("w3b", 6, "It is a nice, / nice gift!", "זו מתנה נחמדה מאוד!");
  S("w3b", 7, "Hugs, / Rose", "חיבוקים, רוז");
  SET("w3d", {gl:{scales:"קשקשים", shed:"להשיל", smell:"להריח", bite:"להכיש"}});
  S("w3d", 3, "As it gets big, / it sheds / its skin.", "כשהוא גדל, הוא משיל את העור.");
  S("w3d", 4, "A snake / can smell well, / and it can see / at night.", "נחש מריח טוב, והוא יכול לראות בלילה.");
  S("w3d", 5, "Lots of snakes / are safe, / but not all. / A snake / can bite.", "הרבה נחשים לא מסוכנים, אבל לא כולם. נחש יכול להכיש.");
  Q("w3d", 1, ["פרט", "מתי הנחש יכול לראות?", ["בלילה", "רק בצהריים", "אף פעם"], 0]);
  S("w3e", 1, "Amy: / He is fluffy / and fat.", "איימי: הוא פרוותי ושמנמן.");
  S("w3e", 3, "Amy: / I see a tag. / It says: / My home is / 9 Lime Lane.", "איימי: אני רואה תג. כתוב: הבית שלי ברחוב ליים 9.");
  S("w3e", 5, "Amy: / To his home, / Lucy!", "איימי: לבית שלו, לוסי!");
  Q("w3e", 0, ["הסקה", "למה איימי אמרה 'To his home, Lucy'?", ["כי לוסי רצתה לשמור את הגור", "כי הן גרות יחד", "כי הגור רעב"], 0]);
  SET("b3a", {t:"The Fox and the Snail", he:"השועלה והחילזון", gl:{fox:"שועל", snail:"חילזון", race:"מרוץ", line:"קו"}});
  S("b3a", 0, "A fox / made fun / of a snail / that was not quick.", "שועלה צחקה על חילזון שלא היה מהיר.");
  S("b3a", 2, "The fox / ran fast, / and then / she sat / in the shade.", "השועלה רצה מהר, ואז ישבה בצל.");
  S("b3a", 3, "I have time / for a nap, / she said, / and she slept.", "יש לי זמן לנמנם, היא אמרה, ונרדמה.", ["מה השועלה עשתה באמצע המרוץ?", ["נמנמה", "אכלה", "שחתה"], 0]);
  S("b3a", 6, "When the fox / woke up, / the snail / was at the line!", "כשהשועלה התעוררה, החילזון כבר היה בקו הסיום!");
  Q("b3a", 1, ["הסקה", "למה השועלה הפסידה?", ["היא הייתה בטוחה מדי בעצמה", "היא נפצעה", "החילזון רימה"], 0]);
  S("b3b", 0, "Ice / is made / in the cold.", "קרח נוצר בקור.");
  S("b3b", 1, "When a lake / gets cold, / it makes ice.", "כשאגם מתקרר, נוצר בו קרח.");
  S("b3b", 2, "Ice / takes up / a lot of space, / so it is light.", "קרח תופס הרבה מקום, ולכן הוא קל.");
  S("b3b", 4, "When it is cold, / ice / makes a lid / on a lake.", "כשקר, הקרח עושה מכסה על האגם.");
  S("b3b", 5, "The fish / stay safe / in the lake, / not in the ice.", "הדגים נשארים בטוחים באגם, לא בתוך הקרח.");

  /* ---------- שתי אותיות תנועה (w4) ---------- */
  SET("w4a", {gl:{sail:"להפליג", steer:"לנווט", reach:"להגיע", top:"החלק העליון"}});
  S("w4a", 6, "Jean can keep / the boat / on top of the sea.", "ג׳ין יכולה לשמור על הסירה מעל המים.", ["Where does Jean keep the boat?", ["on top of the sea", "under the sea", "on the road"], 0]);
  SET("w4c", {gl:{seek:"לחפש", queen:"מלכה", team:"קבוצה", bloom:"פרח"}});
  S("w4c", 0, "Bees / seek sweet / blooms.", "דבורים מחפשות פרחים מתוקים.");
  S("w4c", 1, "A bee / can reach / a bloom / in the deep green leaves.", "דבורה יכולה להגיע לפרח בין העלים הירוקים העמוקים.");
  S("w4c", 6, "We need / bees / for the blooms / and the trees.", "אנחנו צריכים דבורים בשביל הפרחים והעצים.");
  Q("w4c", 0, ["רעיון", "Why do we need bees?", ["They help blooms and trees", "They make rain", "They cook meals"], 0]);
  Q("w4c", 1, ["פרט", "What do bees seek?", ["Sweet blooms", "Boats", "Coats"], 0]);
  SET("b4b", {gl:{breeze:"משב רוח", stream:"נחל", grow:"לצמוח", float:"לצוף"}});
  S("b4b", 4, "The deer / leaves / the seed / by a stream.", "האייל משאיר את הגרעין ליד נחל.");
  Q("b4b", 2, ["מילה", "'stream' means...", ["a little river", "a deep sea", "a tall tree"], 0]);

  /* ---------- r וצלילים מיוחדים (w5): בלי סיומות ed/ing/er ובלי מילים ארוכות, לכן הסיפורים בזמן הווה ---------- */
  SET("w5a", {gl:{storm:"סערה", barn:"אסם, רפת", cow:"פרה", loud:"רועש", gate:"שער", roar:"לשאוג"}});
  S("w5a", 1, "One day, / dark clouds / fill the sky.", "יום אחד, עננים כהים ממלאים את השמיים.");
  S("w5a", 2, "The thunder / is loud, / and the cows / are in a fright.", "הרעם רועש, והפרות מבוהלות.");
  S("w5a", 3, "Carl / runs out / in his boots.", "קרל רץ החוצה במגפיים.");
  S("w5a", 4, "He swings / the barn gate / wide / and shouts, / 'Come in, girls!'", "הוא פותח לרווחה את שער הרפת וצועק: בואו פנימה, בנות!");
  S("w5a", 5, "One by one, / the cows / turn / and go in.", "אחת אחת, הפרות מסתובבות ונכנסות.");
  S("w5a", 6, "But one cow, / Pearl, / is not there.", "אבל פרה אחת, פרל, לא שם.");
  S("w5a", 7, "Carl finds her / by a large oak. / She shakes / with fear.", "קרל מוצא אותה ליד אלון גדול. היא רועדת מפחד.", ["איפה קרל מוצא את פרל?", ["ליד אלון", "ברפת", "בשדה התירס"], 0]);
  S("w5a", 8, "He pats her / and walks her / to the barn.", "הוא מלטף אותה ומוליך אותה לרפת.");
  S("w5a", 9, "That night, / the storm roars, / but all the cows / are warm / and safe.", "באותו לילה הסערה שואגת, אבל כל הפרות חמות ובטוחות.");
  Q("w5a", 1, ["סדר", "מה קרל עושה אחרי שכל הפרות נכנסות?", ["מחפש את פרל", "הולך לישון", "סוגר את החווה"], 0]);
  Q("w5a", 3, ["מילה", "She shakes כאן פירושו...", ["היא רועדת", "היא אוכלת", "היא שרה"], 0]);
  Q("w5a", 4, ["הפניה", "במשפט 'Carl finds her', מי זו her?", ["פרל", "הרועה", "הסערה"], 0]);
  S("w5b", 2, "An owl / can not / turn its eyes, / so it turns / its head / far round.", "ינשוף לא יכול להזיז את העיניים, אז הוא מסובב את הראש הרבה מסביב.");
  S("w5b", 4, "Their soft down / lets them fly / with no sound.", "הנוצות הרכות שלהם מאפשרות להם לעוף בלי קול.");
  S("w5b", 6, "At dawn, / owls / rest / in trees / or in old barns.", "עם שחר, ינשופים נחים בעצים או באסמים ישנים.");
  SET("w5c", {gl:{mayor:"ראש העיר", park:"פארק", dirt:"לכלוך", fix:"לתקן", swings:"נדנדות", crew:"צוות"}});
  S("w5c", 2, "This note / is on the park / near my house.", "המכתב הזה הוא על הפארק שליד הבית שלי.");
  S("w5c", 3, "Two swings / have torn seats, / and there is dirt / and trash / on the turf.", "לשתי נדנדות יש מושבים קרועים, ויש לכלוך וזבל על הדשא.", ["מה הבעיה בפארק?", ["נדנדות קרועות וזבל", "אין עצים", "הוא סגור"], 0]);
  S("w5c", 5, "Can you / please / send a crew / to fix the swings?", "תוכל בבקשה לשלוח צוות לתקן את הנדנדות?");
  SET("w5d", {gl:{choose:"לבחור", coins:"מטבעות", save:"לחסוך", worth:"שווה"}});
  S("w5d", 4, "Roy: / Oh. / I do not have / that much.", "רוי: אוי. אין לי כל כך הרבה.");
  SET("b5a", {gl:{thorn:"קוץ", paw:"כף רגל", roar:"שאגה", beast:"חיה", purr:"גרגור"}});
  S("b5a", 0, "A lion / sat / by a large oak / and let out / a roar of pain.", "אריה ישב ליד אלון גדול והשמיע שאגת כאב.");
  S("b5a", 2, "All the beasts / ran off / in fear.", "כל החיות ברחו בפחד.");
  S("b5a", 4, "Hold still, / she said, / and she took / the thorn out / with her beak.", "אל תזוז, היא אמרה, והוציאה את הקוץ במקור.");
  S("b5a", 5, "The lion / let out / a soft purr / and bent low.", "האריה השמיע גרגור רך והתכופף נמוך.");
  S("b5a", 6, "From that day, / no beast / will harm / the brown bird / in the wood.", "מאותו יום, אף חיה לא תפגע בציפור החומה ביער.");
  SET("b5b", {gl:{bolt:"ברק", thunder:"רעם", spark:"ניצוץ", count:"לספור"}});
  S("b5b", 0, "In a storm, / clouds / fill with / tiny bits of ice.", "בזמן סערה, העננים מתמלאים בחלקיקי קרח קטנטנים.");
  S("b5b", 2, "Then / a huge spark / jumps / from cloud to ground: / a bolt!", "ואז ניצוץ ענק קופץ מהענן אל הקרקע: ברק!");
  S("b5b", 3, "The bolt / is so hot / that the air / near it / bursts out.", "הברק חם כל כך שהאוויר לידו מתפוצץ החוצה.");
  S("b5b", 5, "We see / the bolt / first, / for light / is quick, / and sound / is slow.", "אנחנו רואים קודם את הברק, כי האור מהיר והקול איטי.");
  S("b5b", 6, "Count / from the bolt / to the boom / to see / how far / the storm is.", "ספרו מהברק עד הרעם כדי לדעת כמה רחוקה הסערה.");
  SET("b5c", {gl:{count:"ספירה", glasses:"משקפת", park:"פארק", free:"בחינם", pro:"מקצוען"}});
  S("b5c", 2, "When: / Sunday, / March 3rd, / 7 to 10 a.m.", "מתי: יום ראשון, 3 במרץ, משבע עד עשר בבוקר.");
  S("b5c", 3, "You do not need / to be a pro.", "לא צריך להיות מקצוען.");
  S("b5c", 5, "Bring / a warm coat / and a pen. / Bird glasses / are good / if you have them.", "הביאו מעיל חם ועט. משקפת לציפורים טובה, אם יש לכם.");
  S("b5c", 6, "It is free, / and it helps / to keep / birds safe!", "זה בחינם, וזה עוזר לשמור על הציפורים!");

  /* ---------- סיומות ותחיליות (w6): סיומות כן, אבל בלי מילים ארוכות של התחנה הבאה ובלי ph/gh ---------- */
  S("w6a", 5, "We baked / sixty buns / and packed them / in boxes.", "אפינו שישים לחמניות וארזנו אותן בקופסאות.");
  S("w6a", 7, "The lady next door / was helpful / and unlocked the door / with her spare key.", "השכנה מהבית ליד עזרה ופתחה את הדלת עם המפתח הרזרבי שלה.");
  Q("w6a", 1, ["פרט", "כמה לחמניות אפו?", ["שישים", "שישה", "שש עשרה"], 0]);
  S("w6b", 4, "Then, / wet the soil / till it is damp, / not soaking.", "אחר כך, מרטיבים את האדמה עד שהיא לחה, לא ספוגה.");
  S("w6b", 6, "Wait / and wait. / In a week / or so, / you will see / a tiny green shoot.", "צריך לחכות ולחכות. אחרי שבוע בערך תראו נבט ירוק קטנטן.", ["מתי רואים נבט?", ["אחרי שבוע בערך", "מחר", "אחרי שנה"], 0]);
  S("w6c", 1, "The other turtles / mocked him / and said, / 'You will never win / a race!'", "הצבים האחרים לעגו לו ואמרו: לעולם לא תנצח במרוץ!");
  S("w6c", 3, "The faster turtles / rushed off, / jumping / and splashing.", "הצבים המהירים יותר מיהרו קדימה, קופצים ומתיזים.");
  S("w6c", 5, "Tim / walked slowly / and carefully / past the puddle.", "טים הלך לאט ובזהירות ליד השלולית.");
  S("w6c", 7, "After that, / no one / mocked Tim / at all.", "אחרי זה, אף אחד כבר לא לעג לטים.");
  Q("w6c", 3, ["סדר", "מה קרה בסוף?", ["אף אחד לא לעג לטים יותר", "טים הפסיד", "המרוץ בוטל"], 0]);
  SET("w6d", {gl:{collected:"אספו", donated:"תרמו", shelter:"מקלט", sheets:"סדינים", thankful:"אסיר תודה"}});
  S("w6d", 0, "Last month, / the kids / in Class 5B / started / to help / the dogs and cats / in town.", "בחודש שעבר הילדים בכיתה ה׳2 התחילו לעזור לכלבים ולחתולים בעיר.");
  S("w6d", 1, "They collected / old sheets / and quilts / for the pet shelter / in their town.", "הם אספו סדינים ושמיכות ישנים בשביל מקלט החיות בעיר שלהם.");
  S("w6d", 2, "Each kid / asked / moms, / dads / and pals / to help.", "כל ילד ביקש מאמהות, מאבות ומחברים לעזור.");
  S("w6d", 7, "The class / is now thinking / of the next way / to help.", "הכיתה כבר חושבת על הדרך הבאה לעזור.");
  SET("w6e", {t:"Beth Is Sick", he:"בת׳ חולה", gl:{sneeze:"להתעטש", throat:"גרון", rest:"מנוחה", hurts:"כואב"}});
  S("w6e", 0, "Nurse: / Hi, Beth. / How are you feeling?", "אחות: היי, בת׳. איך את מרגישה?");
  S("w6e", 1, "Beth: / Not well. / My throat hurts, / and I sneeze / a lot.", "בת׳: לא טוב. הגרון כואב לי, ואני מתעטשת הרבה.");
  S("w6e", 2, "Nurse: / Did you feel / hot?", "אחות: הרגשת חום?");
  S("w6e", 3, "Beth: / Yes, / last night / it was / high.", "בת׳: כן, אתמול בלילה החום היה גבוה.", ["מתי היה לבת׳ חום?", ["אתמול בלילה", "הבוקר", "לפני שבוע"], 0]);
  S("w6e", 4, "Nurse: / I think / it is a cold. / Drink / lots of warm tea / and rest / for three days.", "אחות: אני חושבת שזו הצטננות. תשתי הרבה תה חם ותנוחי שלושה ימים.");
  S("w6e", 5, "Beth: / Can I go / to my dance class?", "בת׳: אני יכולה ללכת לחוג ריקוד?");
  S("w6e", 6, "Nurse: / Not this week. / When you feel well, / you can dance / once more.", "אחות: לא השבוע. כשתרגישי טוב, תוכלי לרקוד שוב.");
  Q("w6e", 0, ["פרט", "מה האחות ממליצה?", ["לשתות תה חם ולנוח", "לרקוד", "ללכת לבית הספר"], 0]);
  Q("w6e", 1, ["הסקה", "איך בת׳ מרגישה כשהיא שומעת שאין חוג השבוע?", ["כנראה מאוכזבת", "שמחה מאוד", "כועסת על האחות"], 0]);
  SET("b6a", {t:"The Boastful Jay", he:"העורבני הרברבן", gl:{jay:"עורבני (ציפור כחולה)", boastful:"רברבן", tail:"זנב", useful:"שימושי"}});
  S("b6a", 0, "A blue jay / walked up and down / the yard, / showing off / his bright tail.", "עורבני כחול הלך הלוך ושוב בחצר והשוויץ בזנב הצבעוני שלו.");
  S("b6a", 4, "The jay / tried / and jumped, / but he only reached / the top / of the fence.", "העורבני ניסה וקפץ, אבל הגיע רק לראש הגדר.", ["לאן הגיע העורבני?", ["לראש הגדר", "מעל העננים", "לגג"], 0]);
  S("b6a", 1, "Look at me! / I am the finest / of all the birds!", "תסתכלו עליי! אני הציפור הכי יפה מכל הציפורים!");
  S("b6a", 3, "Your tail / is lovely, / said the crane, / but can you fly / up past the clouds?", "הזנב שלך יפה, אמר העגור, אבל אתה יכול לעוף אל מעבר לעננים?");
  S("b6a", 6, "A fine tail / is nice, / the jay said softly, / but useful wings / count too.", "זנב יפה זה נחמד, אמר העורבני בשקט, אבל גם כנפיים שימושיות חשובות.");
  S("b6b", 0, "Our bodies / do best / when they stay / near 37 degrees.", "הגוף שלנו עובד הכי טוב כשהוא נשאר קרוב ל-37 מעלות.");
  S("b6b", 3, "The moving muscles / make heat / and warm us up.", "השרירים שזזים מייצרים חום ומחממים אותנו.");
  Q("b6a", 2, ["הסקה", "מה העורבני הבין בסוף?", ["שגם תועלת חשובה, לא רק יופי", "שהוא יודע לעוף", "שהעגור מכוער"], 0]);
  S("b6b", 4, "When we are / too hot, / we start sweating.", "כשחם לנו מדי, אנחנו מתחילים להזיע.");
  S("b6b", 6, "Both / are smart tricks / to keep / the body safe.", "שתיהן דרכים חכמות לשמור על הגוף.");
  Q("b6b", 1, ["פרט", "מה קורה כשחם לנו מדי?", ["מתחילים להזיע", "רועדים", "נרדמים"], 0]);
  SET("b6c", {gl:{trusted:"סמכת", kind:"אדיב", scared:"מפוחד", braver:"אמיצה יותר"}});
  S("b6c", 1, "This note / is to thank you / for the best year / I have had.", "המכתב הזה הוא כדי להודות לך על השנה הכי טובה שהייתה לי.");
  S("b6c", 2, "At the start, / I was scared / and hated / reading out loud.", "בהתחלה פחדתי ושנאתי לקרוא בקול.");
  S("b6c", 3, "You were / kind / and never rushed me.", "היית אדיב ואף פעם לא האצת בי.", ["איך המורה התנהג?", ["באדיבות ובלי לחץ", "בכעס", "בחוסר עניין"], 0]);
  S("b6c", 4, "You trusted me / when I did not.", "סמכת עליי, גם כשאני לא סמכתי.");
  S("b6c", 5, "Now / I am reading / my third book / this month, / and I feel / much braver.", "עכשיו אני קוראת את הספר השלישי שלי החודש, ואני מרגישה הרבה יותר אמיצה.");
  Q("b6c", 1, ["סדר", "איך לילי הרגישה בהתחלה?", ["מפוחדת", "בטוחה בעצמה", "משועממת"], 0]);
  Q("b6c", 2, ["הסקה", "מה עזר ללילי יותר מכל?", ["האדיבות והאמון של המורה", "ספרים קלים", "שיעורי בית"], 0]);

  /* ---------- מילים ארוכות (w7): הברות כן, אבל בלי ph, gh, tion ומילים שזוכרים בעל פה של התחנה הבאה ---------- */
  S("w7a", 0, "The octopus / is one of / the most amazing animals / in the sea.", "התמנון הוא אחת החיות המדהימות ביותר בים.");
  S("w7a", 1, "It has / long arms / and no bones / at all.", "יש לו זרועות ארוכות ואין לו עצמות בכלל.");
  S("w7a", 2, "Since it has / no bones, / it can squeeze / into a hole / as small as a coin.", "מפני שאין לו עצמות, הוא יכול להשתחל לתוך חור קטן כמו מטבע.");
  SET("w7b", {gl:{inventor:"ממציאה", problem:"בעיה", elderly:"מבוגרים, קשישים", finally:"לבסוף", designed:"תכננה"}});
  S("w7b", 2, "Her grandmother / did not see well, / and she fell / a lot / at night.", "סבתה לא ראתה טוב, והיא נפלה הרבה בלילה.");
  S("w7b", 8, "Today, / her lamp / helps / thousands of elderly adults / walk safely / at night.", "היום המנורה שלה עוזרת לאלפי מבוגרים ללכת בבטחה בלילה.");
  S("w7c", 0, "Most adults / spend / about one third / of their lives / sleeping.", "רוב המבוגרים מבלים בערך שליש מחייהם בשינה.");
  SET("w7d", {t:"The Hippo and the Mouse", he:"ההיפופוטם והעכבר", gl:{hippo:"היפופוטם", trapped:"לכוד", net:"רשת", promise:"הבטחה", forget:"לשכוח"}});
  S("w7d", 0, "A huge hippo / was walking / in the forest / when he nearly / stepped on a tiny mouse.", "היפופוטם ענק הלך ביער כשכמעט דרך על עכבר קטנטן.");
  S("w7d", 2, "The hippo / chuckled. / 'How can / a little mouse / ever help / a hippo?'", "ההיפופוטם צחקק. איך עכבר קטן יוכל אי פעם לעזור להיפופוטם?");
  S("w7d", 4, "A few weeks later, / hunters / set a thick net, / and the hippo / was trapped.", "כמה שבועות אחר כך, ציידים הציבו רשת עבה, וההיפופוטם נלכד.", ["מה קרה להיפופוטם?", ["נלכד ברשת", "נפל לבור", "הלך לאיבוד"], 0]);
  S("w7d", 5, "He pulled / and pulled, / but he was not able / to escape.", "הוא משך ומשך, אבל לא הצליח לברוח.");
  S("w7d", 6, "Suddenly, / a small voice / spoke up. / It was the mouse!", "פתאום קול קטן דיבר. זה היה העכבר!");
  S("w7d", 7, "The mouse / chewed / at the ropes, / one by one, / until the hippo / was free.", "העכבר כרסם את החבלים, אחד אחד, עד שההיפופוטם היה חופשי.");
  S("w7d", 8, "'You kept / your promise,' / said the hippo. / 'I will never / forget it.'", "קיימת את ההבטחה שלך, אמר ההיפופוטם. לעולם לא אשכח את זה.");
  Q("w7d", 0, ["רעיון", "מה המסר?", ["גם הקטן יכול לעזור לגדול", "היפופוטמים חזקים מכולם", "אסור להיכנס ליער"], 0]);
  Q("w7d", 1, ["הסקה", "למה ההיפופוטם צחקק בהתחלה?", ["הוא לא האמין שעכבר יוכל לעזור לו", "כי העכבר היה מצחיק", "כי הוא שמח"], 0]);
  Q("w7d", 2, ["סדר", "מה קרה קודם?", ["ההיפופוטם שחרר את העכבר", "העכבר כרסם חבלים", "הציידים הציבו רשת"], 0]);
  S("w7e", 4, "Activities include / painting, / pottery, / clay models, / and comic drawing.", "הפעילויות כוללות ציור, קדרות, פיסול בחימר וציור קומיקס.");
  S("w7e", 6, "Kids / should bring / a full bottle / and a hat.", "ילדים צריכים להביא בקבוק מלא וכובע.");
  S("b7a", 6, "Kindness, / the Sun said quietly, / can be / more powerful / than force.", "טוב לב, אמרה השמש בשקט, יכול להיות חזק יותר מכוח.");
  S("b7b", 4, "A volcano / can be dangerous, / but volcanoes / also help / the planet.", "הר געש יכול להיות מסוכן, אבל הרי געש גם עוזרים לכוכב.");
  S("b7b", 5, "Volcanic ash / makes the soil / very fertile, / so farmers / grow / excellent crops / nearby.", "אפר וולקני הופך את האדמה לפורייה מאוד, ולכן חקלאים מגדלים יבולים מצוינים בקרבת מקום.");
  S("b7c", 1, "I wish / to apply / to volunteer / at the city library.", "אני רוצה להגיש מועמדות להתנדב בספרייה העירונית.");
  S("b7c", 2, "I have always loved / books, / and I would be happy / to help / others / enjoy them / too.", "תמיד אהבתי ספרים, ואשמח לעזור גם לאחרים ליהנות מהם.");
  S("b7c", 3, "Last summer, / I volunteered / at a children's camp, / where I read stories / to little campers / every afternoon.", "בקיץ שעבר התנדבתי במחנה ילדים, שם הקראתי סיפורים לחניכים קטנים בכל אחר צהריים.");
  S("b7c", 6, "Thank you / for considering / my request.", "תודה ששקלת את הבקשה שלי.");

  /* ---------- טקסט חדש לכל תחנה מתקדמת, בנוי על מילים של התחנה שעוד לא הופיעו באף טקסט שלה ---------- */
  const ADD = [
{id:"g9a", w:9, type:"diary", t:"A Week Full of Errands", he:"שבוע מלא בסידורים",
 gl:{appointment:"תור, פגישה", prescription:"מרשם", pharmacy:"בית מרקחת", receipt:"קבלה", warranty:"אחריות על מוצר", appliance:"מכשיר חשמלי ביתי", leftovers:"שאריות אוכל", relieved:"נרגעה, שמחה שזה נגמר"},
 s:[
  ["On Monday / I felt dizzy / all morning, / so I made / an appointment / with my doctor.", "ביום שני הרגשתי סחרחורת כל הבוקר, אז קבעתי תור אצל הרופאה שלי."],
  ["She said / it was only / a mild symptom / of my allergy / and gave me / a prescription.", "היא אמרה שזה רק תסמין קל של האלרגיה שלי ונתנה לי מרשם.", ["מה הרופאה נתנה?", ["מרשם", "חשבונית", "סיסמה"], 0]],
  ["The pharmacy / near my house / was closed, / so I had to / postpone / the treatment / until Tuesday.", "בית המרקחת ליד הבית שלי היה סגור, אז נאלצתי לדחות את הטיפול עד יום שלישי."],
  ["On Wednesday / our old fridge / stopped working.", "ביום רביעי המקרר הישן שלנו הפסיק לעבוד."],
  ["Luckily, / I still had / the receipt, / and the appliance / was under warranty.", "למזל, עוד הייתה לי הקבלה, והמכשיר היה באחריות.", ["למה התיקון לא עלה כסף?", ["המקרר היה באחריות", "השכן שילם", "הם קנו מקרר חדש"], 0]],
  ["A technician / came / to install / a new part / for free.", "טכנאי הגיע להתקין חלק חדש בחינם."],
  ["Meanwhile, / we ate / leftovers / from the weekend: / bland rice / and very spicy soup.", "בינתיים אכלנו שאריות מסוף השבוע: אורז תפל ומרק חריף מאוד."],
  ["By Friday / I had recovered, / the fridge / was working, / and I was / so relieved.", "עד יום שישי התאוששתי, המקרר עבד, והרגשתי הקלה גדולה."]],
 q:[["רעיון","על מה היומן?",["שבוע עם בעיות קטנות שנפתרו","טיול לחו״ל","מסיבת יום הולדת"],0],
    ["סדר","מה קרה לפני שהמקרר התקלקל?",["היא קיבלה מרשם","הטכנאי הגיע","היא התאוששה"],0],
    ["מילה","מה פירוש postpone?",["לדחות למועד מאוחר","לבטל לגמרי","להקדים"],0]]},
{id:"g10a", w:10, type:"article", t:"How One Village Saved Its River", he:"איך כפר אחד הציל את הנהר שלו",
 gl:{rural:"כפרי", inhabitant:"תושב", initiative:"יוזמה", obstacle:"מכשול", incentive:"תמריץ", thorough:"יסודי", reveal:"לחשוף", reinforce:"לחזק"},
 s:[
  ["Ten years ago, / the river / near a small rural village / was full of rubbish / and bacteria.", "לפני עשר שנים, הנהר ליד כפר קטן היה מלא זבל וחיידקים."],
  ["Most inhabitants / considered / the situation / inevitable / and did nothing.", "רוב התושבים חשבו שהמצב בלתי נמנע ולא עשו דבר."],
  ["Then / a local teacher / launched / an initiative / to establish / a weekly cleaning group.", "ואז מורה מקומית יזמה יוזמה להקים קבוצת ניקיון שבועית.", ["מי התחילה את היוזמה?", ["מורה מקומית", "ראש העיר", "חברה גדולה"], 0]],
  ["The initial / response / was disappointing, / and the group / faced / one obstacle / after another.", "התגובה הראשונית הייתה מאכזבת, והקבוצה נתקלה במכשול אחרי מכשול."],
  ["To overcome / this challenge, / the village / offered / a small incentive: / free meals / for every volunteer.", "כדי להתגבר על האתגר הזה, הכפר הציע תמריץ קטן: ארוחות חינם לכל מתנדב."],
  ["Scientists / conducted / a thorough study / of the water / every month.", "מדענים ערכו בדיקה יסודית של המים בכל חודש."],
  ["The results / revealed / a dramatic decrease / in pollution / within two years.", "התוצאות חשפו ירידה חדה בזיהום תוך שנתיים.", ["מה הבדיקות הראו?", ["ירידה חדה בזיהום", "שהנהר התייבש", "שאין שינוי"], 0]],
  ["Moreover, / fish / that had disappeared / began to emerge / again.", "יתרה מזאת, דגים שנעלמו התחילו להופיע שוב."],
  ["The project / reinforced / the village's reputation / and transformed / the way people / see their river.", "הפרויקט חיזק את המוניטין של הכפר ושינה מהותית את האופן שבו אנשים רואים את הנהר שלהם."]],
 q:[["רעיון","מה הרעיון המרכזי?",["יוזמה קטנה שינתה את מצב הנהר","כפר שעזב את הנהר","נהר שהתייבש"],0],
    ["הסקה","למה הכפר נתן ארוחות חינם?",["כדי לעודד אנשים להתנדב","כי היה להם הרבה אוכל","כדי למכור מסעדה"],0],
    ["מילה","מה פירוש Moreover?",["יתרה מזאת","לעומת זאת","לכן"],0]]},
{id:"g11a", w:11, type:"opinion", t:"Why Curiosity Deserves a Place in School", he:"למה לסקרנות מגיע מקום בבית הספר",
 gl:{curiosity:"סקרנות", neglect:"להזניח", flourish:"לשגשג", reluctant:"מסויג, לא מתלהב", vulnerable:"פגיע", tolerate:"לסבול, להכיל", breakthrough:"פריצת דרך", inspiration:"השראה"},
 s:[
  ["Schools / often neglect / one of the most valuable / qualities / a student has: / curiosity.", "בתי ספר מזניחים לעתים קרובות את אחת התכונות החשובות ביותר שיש לתלמיד: סקרנות."],
  ["When the scope / of a lesson / is too rigidly defined, / eager questions / are quietly suppressed.", "כשההיקף של שיעור מוגדר בנוקשות רבה מדי, שאלות נלהבות מדוכאות בשקט.", ["What happens to students' questions?", ["They are suppressed", "They are rewarded", "They are written down"], 0]],
  ["Many pupils / become reluctant / to speak, / because / admitting confusion / makes them feel / vulnerable.", "תלמידים רבים נעשים מסויגים מלדבר, כי ההודאה בבלבול גורמת להם להרגיש פגיעים."],
  ["Yet / the history of science / suggests / that curiosity / is often / the source / of every breakthrough.", "ועם זאת, תולדות המדע מרמזות שהסקרנות היא לעתים קרובות המקור של כל פריצת דרך."],
  ["Teachers / who tolerate / a little uncertainty / allow / their students / to flourish.", "מורים שמוכנים לסבול מעט אי-ודאות מאפשרים לתלמידים שלהם לשגשג."],
  ["A persistent question, / even an absurd one, / can be / a powerful inspiration.", "שאלה עיקשת, אפילו מופרכת, יכולה להיות השראה חזקה."],
  ["Of course, / curiosity / must adhere / to some structure; / otherwise / lessons / would lose / their clarity.", "כמובן, הסקרנות צריכה להישמר בתוך מבנה מסוים; אחרת השיעורים יאבדו את הבהירות שלהם."],
  ["Still, / the most compelling / argument / is simple: / students / who ask / are students / who learn.", "ועדיין, הטיעון המשכנע ביותר הוא פשוט: תלמידים ששואלים הם תלמידים שלומדים.", ["What is the writer's main claim?", ["Students who ask questions learn", "Schools should have no rules", "Science is too difficult"], 0]]],
 q:[["רעיון","What is the writer's opinion?",["Schools should make room for curiosity","Curiosity disturbs learning","Teachers ask too many questions"],0],
    ["הסקה","Why does the writer mention structure?",["To show the idea has limits","To reject curiosity","To describe a building"],0],
    ["מילה","'neglect' means...",["to fail to give attention to","to praise","to measure"],0]]},
{id:"g12a", w:12, type:"academic", t:"Measuring Happiness: A Methodological Problem", he:"למדוד אושר: בעיה מתודולוגית",
 gl:{methodology:"שיטת מחקר", variable:"משתנה", correlation:"מתאם", indicator:"מדד", validity:"תוקף", dispute:"לערער על", synthesis:"שילוב", systematic:"שיטתי"},
 s:[
  ["Researchers / who study happiness / face / a fundamental / methodological problem.", "חוקרים שחוקרים אושר ניצבים מול בעיה מתודולוגית יסודית."],
  ["Happiness / is not / a variable / that can be measured / with the precision / of temperature or density.", "אושר אינו משתנה שאפשר למדוד בדיוק של טמפרטורה או צפיפות."],
  ["Most studies / therefore / rely on / self-reports, / which serve / as an indicator / of well-being.", "לכן רוב המחקרים מסתמכים על דיווח עצמי, המשמש מדד לרווחה."],
  ["However, / critics / dispute / the validity / of this approach, / since answers / may be distorted / by mood / or social pressure.", "עם זאת, מבקרים מערערים על התוקף של גישה זו, מפני שהתשובות עלולות להיות מעוותות בגלל מצב רוח או לחץ חברתי.", ["Why do critics doubt self-reports?", ["Mood and social pressure can distort them", "They are too expensive", "They measure temperature"], 0]],
  ["Another difficulty / is the distinction / between correlation / and cause.", "קושי נוסף הוא ההבחנה בין מתאם לבין סיבה."],
  ["Income / and happiness / correlate, / but this relationship / is not linear: / beyond a certain point, / more money / adds minimal / satisfaction.", "הכנסה ואושר נמצאים במתאם, אבל הקשר הזה אינו לינארי: מעבר לנקודה מסוימת, יותר כסף מוסיף סיפוק מזערי.", ["What happens beyond a certain income?", ["Extra money adds little satisfaction", "Happiness doubles", "People stop working"], 0]],
  ["A more systematic approach / combines / surveys, / behaviour / and biological data / in a single synthesis.", "גישה שיטתית יותר משלבת סקרים, התנהגות ונתונים ביולוגיים לסינתזה אחת."],
  ["Such work / cannot verify / happiness / directly, / but it can / reduce / the complexity / of the question / to measurable parameters.", "עבודה כזו לא יכולה לאמת אושר ישירות, אבל היא יכולה לצמצם את מורכבות השאלה לפרמטרים מדידים."]],
 q:[["רעיון","What is the main idea of the passage?",["Happiness is hard to measure reliably","Money always brings happiness","Surveys are perfect tools"],0],
    ["מבנה","What is the role of the word 'However' in sentence 4?",["It introduces a criticism","It gives an example","It ends the argument"],0],
    ["מילה","'linear' in this context means...",["changing at a steady, constant rate","very fast","unclear"],0]]},
{id:"g13a", w:13, type:"essay", t:"The Paradox of Resilience", he:"הפרדוקס של החוסן",
 gl:{resilient:"עמיד, גמיש נפשית", paradox:"פרדוקס", mundane:"שגרתי", exacerbate:"להחמיר", mitigate:"למתן", tenacious:"נחוש, עקשן", cumulative:"מצטבר", candid:"גלוי לב"},
 s:[
  ["Resilience / is often / portrayed / as a dramatic quality, / yet / its roots / are surprisingly / mundane.", "חוסן מתואר לעתים קרובות כתכונה דרמטית, אך שורשיו שגרתיים להפתיע."],
  ["Herein / lies / a paradox: / those who seem / most resilient / are rarely / the most rigid.", "כאן טמון פרדוקס: מי שנראים העמידים ביותר הם לעתים רחוקות הנוקשים ביותר.", ["What is the paradox?", ["The most resilient people are not the most rigid", "Rigid people never fail", "Resilience is always dramatic"], 0]],
  ["Rigidity / may help a person / withstand / a single blow, / but under / incessant pressure / it tends to / exacerbate / the damage.", "נוקשות עשויה לעזור לאדם לעמוד במכה אחת, אבל תחת לחץ בלתי פוסק היא נוטה להחמיר את הנזק."],
  ["Flexibility, / by contrast, / allows / the effects / of hardship / to dwindle / over time.", "גמישות, לעומת זאת, מאפשרת להשפעות הקושי להצטמצם עם הזמן."],
  ["The benefits / are cumulative: / small, / tangible habits, / such as sleep / or a candid conversation, / mitigate / stress / more than / grand gestures do.", "התועלות מצטברות: הרגלים קטנים ומוחשיים, כמו שינה או שיחה גלויה, ממתנים לחץ יותר ממחוות גדולות.", ["According to the passage, what reduces stress most?", ["Small, regular habits", "Grand gestures", "Avoiding all people"], 0]],
  ["It would be / superficial, / however, / to deduce / that resilience / is merely / a matter of willpower.", "עם זאת, יהיה זה שטחי להסיק שחוסן הוא רק עניין של כוח רצון."],
  ["Circumstances / matter: / a person / facing / scarce resources / may be / tenacious / and still struggle.", "הנסיבות חשובות: אדם שמשאביו מועטים יכול להיות נחוש ועדיין להתקשות."],
  ["A lucid account / of resilience / must therefore / reconcile / individual effort / with the conditions / that make / such effort / feasible.", "תיאור צלול של חוסן חייב אפוא ליישב בין מאמץ אישי לבין התנאים שמאפשרים מאמץ כזה."]],
 q:[["רעיון","What is the author's central argument?",["Resilience depends on flexibility, habits and circumstances","Resilience is only willpower","Rigid people recover fastest"],0],
    ["הסקה","Why does the author mention scarce resources?",["To show that effort alone is not enough","To praise poverty","To change the subject"],0],
    ["מילה","'dwindle' is closest in meaning to...",["gradually decrease","suddenly explode","stay the same"],0],
    ["מילה","'exacerbate' is the opposite of...",["mitigate","deduce","withstand"],0]]}
  ];
  window.TEXTS = (window.TEXTS||[]).filter(t => !ADD.some(a => a.id === t.id)).concat(ADD);

  /* ---------- תחנות מתקדמות f1-f2: מילים שאוקספורד מסמנת C1 הוחלפו, חוץ ממילות הדירה (landlord, leak, deposit, lease) שהן אוצר המילים של f1 ---------- */
  S("c9a", 4, "A woman / on a seat / said: / Call the bus company. / Drivers / often find things.", "אישה שישבה על מושב אמרה: תתקשרי לחברת האוטובוסים. נהגים מוצאים דברים לעיתים קרובות.");
  S("e9a", 3, "The rent / includes the bills, / so I can afford it / on my budget.", "השכירות כוללת את החשבונות, אז אני יכולה להרשות לעצמי את זה בתקציב שלי.");
  S("a10b", 0, "Three years ago, / the small town / of Bayport, / by the sea, / decided / to ban plastic bags.", "לפני שלוש שנים העיירה הקטנה ביי-פורט, שעל שפת הים, החליטה לאסור שקיות פלסטיק.");
  S("a10c", 1, "Its main job / is to move blood / around the body.", "התפקיד העיקרי שלו הוא להזרים דם לכל הגוף.");
  S("a10c", 4, "Then / the blood returns / to the heart, / which pushes it out / again / to the rest of the body.", "אחר כך הדם חוזר ללב, שדוחף אותו שוב החוצה לשאר הגוף.");
  S("c10b", 4, "It contains / a weak / or inactive form / of the germ, / or just / a small part of it.", "יש בו גרסה חלשה או לא פעילה של החיידק, או רק חלק קטן ממנו.");
  S("c10d", 3, "Surprisingly, / a dripping toilet / can waste / hundreds of liters / a day / without anyone noticing.", "באופן מפתיע, אסלה שמטפטפת יכולה לבזבז מאות ליטרים ביום בלי שאף אחד ישים לב.", ["מה מבזבז מים בלי שמרגישים?", ["אסלה שמטפטפת", "מכונת כביסה", "מקלחת קצרה"], 0]);
  S("c10d", 5, "Taking / shorter showers, / fixing drips / quickly, / and running / the washing machine / only when it is full / can reduce / consumption / by up to thirty percent.", "מקלחות קצרות יותר, תיקון מהיר של טפטופים והפעלת מכונת הכביסה רק כשהיא מלאה, יכולים להפחית את הצריכה עד שלושים אחוז.");
})();
