/* טקסטים לשלוש התחנות המתקדמות שנשארו בלי טקסטים שבנויים על רשימת המילים שלהן (15.11.2026):
   יום-יום (w=9, B1-B2), טקסט מסביר (w=10, B2), אקדמית (w=12, C1-C2). שני טקסטים בכל תחנה.
   מבנה כמו בשאר הטקסטים: s = [משפט עם / בין חלקים, תרגום, (בדיקת הבנה)], q = שאלות בסוף, gl = מילון. */
window.TEXTS = (window.TEXTS||[]).concat([
{id:"e9a",w:9,type:"email",t:"A New Flat",he:"דירה חדשה",
 gl:{landlord:"בעל הדירה",deposit:"פיקדון",lease:"חוזה שכירות",neighborhood:"שכונה",utilities:"חשבונות (חשמל, מים, גז)",afford:"להרשות לעצמך",budget:"תקציב",renovate:"לשפץ",leak:"נזילה"},
 s:[
  ["Hi Dana, / I finally found / a flat!","היי דנה, סוף סוף מצאתי דירה!"],
  ["The landlord / asked for / a deposit / and a two-year lease.","בעל הדירה ביקש פיקדון וחוזה שכירות לשנתיים."],
  ["The neighborhood / is quiet, / and the shops / are close.","השכונה שקטה והחנויות קרובות.",["What did the landlord ask for?",["A deposit and a lease","A bargain","A refund"],0]],
  ["The rent / includes utilities, / so I can afford it / on my budget.","השכירות כוללת חשבונות, אז אני יכולה להרשות לעצמי את זה בתקציב שלי."],
  ["The kitchen / needs some work, / so we plan / to renovate it.","המטבח צריך קצת עבודה, אז אנחנו מתכננות לשפץ אותו."],
  ["There is also / a small leak / under the sink.","יש גם נזילה קטנה מתחת לכיור."],
  ["I will ask / the landlord / to fix it / before I move in.","אבקש מבעל הדירה לתקן אותה לפני שאעבור.",["What problem is there?",["A leak under the sink","A broken door","A loud neighbor"],0]],
  ["Come and visit / next weekend! / Maya","בואי לבקר בסוף השבוע הבא! מאיה"]
 ],
 q:[["רעיון","Why is the writer happy?",["She found a flat she can afford","She lost her job","She bought a car"],0],["פרט","What does the rent include?",["Utilities","Furniture","Breakfast"],0],["מילה","'renovate' means...",["to repair and improve","to sell","to paint outside"],0],["הסקה","What will the writer do about the leak?",["Ask the landlord to fix it","Ignore it","Move out"],0]]},
{id:"e9b",w:9,type:"story",t:"A Delayed Flight",he:"טיסה מאוחרת",
 gl:{departure:"יציאה, המראה",delay:"עיכוב",complain:"להתלונן",apologized:"התנצל",refund:"החזר כספי",souvenir:"מזכרת",destination:"יעד",baggage:"כבודה, מזוודות"},
 s:[
  ["Our departure time / was nine / in the morning.","שעת היציאה שלנו היתה תשע בבוקר."],
  ["At the airport, / the board showed / a two-hour delay.","בשדה התעופה הלוח הראה עיכוב של שעתיים.",["What did the board show?",["A two-hour delay","A cancelled flight","A new gate"],0]],
  ["Many passengers / began to complain / to the staff.","נוסעים רבים החלו להתלונן בפני הצוות."],
  ["A manager / came out / and apologized / politely.","מנהל יצא והתנצל בנימוס."],
  ["He promised / a refund / for the delay.","הוא הבטיח החזר כספי על העיכוב."],
  ["Meanwhile, / I looked for / a souvenir / for my sister.","בינתיים חיפשתי מזכרת לאחותי."],
  ["At last, / we boarded, / and the plane / reached its destination / safely.","לבסוף עלינו למטוס, והוא הגיע ליעדו בשלום."],
  ["Luckily, / our baggage / arrived / too.","למרבה המזל גם המזוודות שלנו הגיעו."]
 ],
 q:[["רעיון","What is the story about?",["A flight that was late","A hotel booking","A lost passport"],0],["פרט","What did the manager promise?",["A refund","A free flight","A new plane"],0],["מילה","'delay' means...",["a late start","a long trip","a cheap ticket"],0],["הסקה","How did the writer feel at the end?",["Relieved","Angry","Bored"],0]]},
{id:"e10a",w:10,type:"article",t:"Cities and Wildlife",he:"ערים וחיות בר",
 gl:{urban:"עירוני",adapt:"להסתגל",species:"מינים",recent:"אחרון, עדכני",pattern:"דפוס",habitat:"בית גידול",gradually:"בהדרגה",resources:"משאבים",trend:"מגמה",widespread:"נפוץ"},
 s:[
  ["Urban areas / are growing / fast, / and wildlife / must adapt.","אזורים עירוניים גדלים מהר, והחיות הבר חייבות להסתגל."],
  ["Foxes, / pigeons, / and many other species / now live / in city centers.","שועלים, יונים ומינים רבים אחרים חיים היום במרכזי ערים."],
  ["A recent study / found / a clear pattern: / animals / that are flexible / survive best.","מחקר אחרון מצא דפוס ברור: חיות גמישות שורדות הכי טוב.",["What did the recent study find?",["Flexible animals survive best","Cities have no wildlife","Foxes are disappearing"],0]],
  ["Parks / and gardens / provide / a safe habitat.","פארקים וגינות מספקים בית גידול בטוח."],
  ["Gradually, / some animals / have learned / to use / human resources, / such as food waste.","בהדרגה, חלק מהחיות למדו להשתמש במשאבי אדם, כמו פסולת מזון."],
  ["This trend / is now widespread / in cities / around the world.","המגמה הזאת נפוצה היום בערים ברחבי העולם.",["What does 'widespread' mean?",["found in many places","very rare","dangerous"],0]],
  ["However, / it also creates / problems / for both / people and animals.","עם זאת, היא גם יוצרת בעיות הן לאנשים והן לחיות."],
  ["Therefore, / cities / should protect / green spaces.","לכן ערים צריכות להגן על שטחים ירוקים."]
 ],
 q:[["רעיון","What is the main idea?",["Wildlife is adapting to city life","Cities should be smaller","Animals dislike parks"],0],["פרט","What do parks provide?",["A safe habitat","Free food","New roads"],0],["מילה","'gradually' means...",["slowly, step by step","suddenly","never"],0],["הסקה","What does the writer recommend?",["Protecting green spaces in cities","Closing parks","Hunting foxes"],0]]},
{id:"e10b",w:10,type:"report",t:"The Water Shortage",he:"מחסור במים",
 gl:{shortage:"מחסור",demand:"ביקוש",supply:"אספקה",predict:"לחזות",resource:"משאב",recycle:"למחזר",reduce:"להפחית",economy:"כלכלה",issue:"סוגיה",decade:"עשור"},
 s:[
  ["In many regions, / there is / a serious shortage / of water.","באזורים רבים יש מחסור חמור במים."],
  ["Demand / keeps rising, / while the supply / is limited.","הביקוש ממשיך לעלות, בעוד שהאספקה מוגבלת."],
  ["Experts / predict / that the problem / will grow / in the coming decade.","מומחים צופים שהבעיה תגדל בעשור הקרוב.",["What do experts predict?",["The problem will grow","The problem will end","Prices will fall"],0]],
  ["Farming / uses / most / of this precious resource.","החקלאות משתמשת ברוב המשאב היקר הזה."],
  ["Some cities / now recycle / waste water / for industry.","ערים מסוימות ממחזרות היום מי שפכים לתעשייה.",["What does 'recycle' mean here?",["to use again","to throw away","to sell"],0]],
  ["Others / reduce / the loss / from old pipes.","אחרות מפחיתות את האובדן מצינורות ישנים."],
  ["These steps / protect / the economy / and local families.","הצעדים האלה מגינים על הכלכלה ועל משפחות מקומיות."],
  ["It is / a serious issue / that needs / action now.","זו סוגיה חמורה שדורשת פעולה עכשיו."]
 ],
 q:[["רעיון","What is the report about?",["A shortage of water and how to respond","A new kind of farming","A cheap source of energy"],0],["פרט","Which sector uses most of the water?",["Farming","Schools","Hospitals"],0],["מילה","'demand' in sentence 2 means...",["how much people want or need","a long list","a kind of tax"],0],["הסקה","Why do cities reduce the loss from old pipes?",["To save water","To save time","To build roads"],0]]},
{id:"e12a",w:12,type:"academic",t:"Evidence and Bias in Research",he:"ראיות והטיה במחקר",
 gl:{bias:"הטיה",criterion:"קריטריון",empirical:"אמפירי, מבוסס ניסיון",premise:"הנחת יסוד",scrutiny:"בחינה מדוקדקת",refute:"להפריך",validate:"לאמת",infer:"להסיק",underlying:"שבבסיס",cumulative:"מצטבר",integrity:"יושרה"},
 s:[
  ["Every researcher / hopes / that findings / are valid / and free of bias.","כל חוקר מקווה שהממצאים תקפים וחפים מהטיה."],
  ["A key criterion / is / empirical evidence: / data / that can be tested.","קריטריון מרכזי הוא ראיות אמפיריות: נתונים שאפשר לבחון."],
  ["Without it, / a theory / rests / on a weak premise.","בלעדיהן, תיאוריה נשענת על הנחת יסוד חלשה.",["What is an empirical criterion?",["Evidence that can be tested","A personal opinion","A famous theory"],0]],
  ["Other scientists / examine / the study / under close scrutiny.","מדענים אחרים בוחנים את המחקר בבחינה מדוקדקת."],
  ["They may / refute the claims / or validate them / with new data.","הם עשויים להפריך את הטענות או לאמת אותן בנתונים חדשים."],
  ["From the pattern / of results, / readers / can infer / the underlying cause.","מתוך דפוס התוצאות הקוראים יכולים להסיק את הסיבה שבבסיס."],
  ["Cumulative evidence / from many studies / is stronger / than a single result.","ראיות מצטברות מהרבה מחקרים חזקות יותר מתוצאה בודדת.",["What is stronger than a single result?",["Cumulative evidence","A loud argument","An old theory"],0]],
  ["Finally, / integrity / matters: / researchers / must report / the facts / honestly.","לבסוף, יושרה חשובה: חוקרים חייבים לדווח על העובדות ביושר."]
 ],
 q:[["רעיון","What is the passage mainly about?",["How research is tested and trusted","How to write a long essay","Why experiments are expensive"],0],["מילה","'refute' means...",["to prove wrong","to repeat","to publish"],0],["מבנה","What is the function of sentence 7?",["To explain why many studies matter","To give a personal story","To introduce a new theory"],0],["הסקה","Which would the writer trust most?",["Evidence repeated by many studies","One surprising result","A confident speaker"],0]]},
{id:"e12b",w:12,type:"essay",t:"Why Societies Need Resilience",he:"למה חברות צריכות חוסן",
 gl:{anticipate:"לצפות מראש",resilience:"חוסן",allocates:"מקצה",diversity:"גיוון",tangible:"מוחשי",mitigate:"למתן",stability:"יציבות",proportion:"חלק יחסי",accumulate:"להצטבר",threshold:"סף"},
 s:[
  ["No society / can fully / anticipate / the next crisis.","שום חברה לא יכולה לצפות במלואה את המשבר הבא."],
  ["That is why / resilience, / the ability / to recover quickly, / matters.","לכן חוסן, היכולת להתאושש מהר, חשוב."],
  ["A resilient community / allocates / resources / wisely / before disaster strikes.","קהילה עמידה מקצה משאבים בחוכמה לפני שאסון פוקד.",["What does a resilient community do?",["Prepares and uses resources wisely","Ignores risks","Waits for help"],0]],
  ["Diversity / also helps: / when systems / differ, / one failure / does not / destroy everything.","גם גיוון עוזר: כשמערכות שונות זו מזו, כשל אחד לא הורס הכול."],
  ["A tangible example / is a city / with several / sources of power.","דוגמה מוחשית היא עיר עם כמה מקורות כוח."],
  ["Such steps / mitigate / the damage / and protect stability.","צעדים כאלה ממתנים את הנזק ומגנים על היציבות."],
  ["Yet / a small proportion / of the budget / is usually / spent on prevention.","ועם זאת, חלק קטן מהתקציב מושקע בדרך כלל במניעה.",["What does 'proportion' mean here?",["a part of a whole","a mistake","a promise"],0]],
  ["If / losses accumulate / past a certain threshold, / recovery / becomes / very hard.","אם הפסדים מצטברים מעבר לסף מסוים, ההתאוששות נעשית קשה מאוד."]
 ],
 q:[["רעיון","What is the writer's main argument?",["Societies should prepare to recover from crises","Crises can be fully predicted","Budgets should be smaller"],0],["פרט","What example of diversity is given?",["Several sources of power","One large factory","A single road"],0],["מילה","'threshold' in sentence 8 means...",["a limit point","a small door","a kind of loss"],0],["הסקה","What does the writer imply about prevention?",["It is under-funded","It is too expensive","It is useless"],0]]}
]);
