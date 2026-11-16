/* מילות קישור וניסוח מחדש לפי רמה (16.11.2026): לכל תחנה מתקדמת מאגר משלה, בלי שאלות משותפות בין תחנות.
   lv: 1 = f1 (יומיומי), 2 = f2 (B2), 3 = f3 (בגרות), 4 = f4 (אקדמי). ניסוח מחדש: חצי לתחנה f4 וחצי ל-f5. */
(function(){
  const LV = {"so":1,"because":1,"but":1,"for example":1,"or":1,"when":1,"and":1,"if":1,"finally":1,"then":1,
    "instead":2,"although":2,"in case":2,"while":2,"unless":2,"because of":2,"that is why":2,"however":2,"moreover":2,"therefore":2,"despite":2,"as a result":2,"for instance":2,"according":2,
    "whereas":3,"nevertheless":3,"consequently":3,"on the other hand":3,"similarly":3,"as":3};
  const C = window.CONNECT = window.CONNECT || [];
  C.forEach(q => { const k = q.o[q.a].toLowerCase(); q.lv = LV[k] || 2; });
  const add = (lv, s, o, x) => C.push({s, o, a:0, x, lv});
  // רמה 1: יומיומי
  add(1, "I like tea, ___ my sister likes coffee.", ["but","so","because","if"], "<b>but</b> = אבל: שני דברים שונים.");
  add(1, "It is cold, ___ put on a coat.", ["so","but","or","because"], "<b>so</b> = אז, לכן: מה לעשות בגלל הקור.");
  add(1, "I am happy ___ it is my birthday.", ["because","so","but","or"], "<b>because</b> = כי: אחריה באה הסיבה.");
  add(1, "Do you want rice ___ pasta?", ["or","and","but","so"], "<b>or</b> = או: לבחור אחד מהשניים.");
  add(1, "___ you are hungry, there is soup in the fridge.", ["If","But","Or","So"], "<b>If</b> = אם: תנאי.");
  add(1, "Close the window ___ you leave.", ["when","but","or","so"], "<b>when</b> = כאשר: מתי לעשות את זה.");
  add(1, "Eat your dinner, ___ you can have dessert.", ["then","but","because","or"], "<b>then</b> = ואז: מה בא אחר כך.");
  // רמה 2: B2
  add(2, "The film was long. ___, it was never boring.", ["However","Therefore","Moreover","For instance"], "<b>However</b> = עם זאת: ניגוד למה שציפינו.");
  add(2, "She stayed calm ___ the pressure.", ["despite","although","because","so"], "<b>despite</b> = למרות, ואחריה שם עצם.");
  // רמה 3: בגרות
  add(3, "City life is exciting, ___ village life is quieter.", ["whereas","therefore","as a result","unless"], "<b>whereas</b> = בעוד ש: השוואה בין שני מצבים.");
  add(3, "The evidence was weak; ___, the jury found him guilty.", ["nevertheless","consequently","similarly","for example"], "<b>nevertheless</b> = אף על פי כן.");
  add(3, "Prices rose sharply. ___, many families bought less.", ["Consequently","Nevertheless","Whereas","Instead of"], "<b>Consequently</b> = כתוצאה מכך.");
  add(3, "Online courses are flexible. ___, they require self-discipline.", ["On the other hand","Similarly","As a result","For instance"], "<b>On the other hand</b> = מצד שני.");
  add(3, "Dolphins use sound to find food. ___, bats use echoes in the dark.", ["Similarly","However","Despite","Unless"], "<b>Similarly</b> = באופן דומה.");
  add(3, "The project failed, ___ the team had worked very hard.", ["even though","so that","as a result","in order to"], "<b>even though</b> = אף על פי ש: ניגוד חזק.");
  add(3, "She saved money ___ she could travel next year.", ["so that","even though","whereas","despite"], "<b>so that</b> = כדי ש: מטרה.");
  add(3, "___ his age, he runs ten kilometers every morning.", ["In spite of","Even though","Whereas","So that"], "<b>In spite of</b> = למרות, ואחריה שם עצם.");
  add(3, "The meeting was cancelled ___ a lack of interest.", ["due to","so that","although","unless"], "<b>due to</b> = בגלל, ואחריה שם עצם.");
  add(3, "___ the weather improves, the match will be postponed.", ["Unless","Provided that","Since","Whereas"], "<b>Unless</b> = אלא אם כן.");
  add(3, "You may borrow the car ___ you return it by six.", ["provided that","unless","whereas","even though"], "<b>provided that</b> = בתנאי ש.");
  add(3, "___ we had no map, we got lost quickly.", ["Since","Unless","Whereas","Despite"], "<b>Since</b> כאן = מאחר ש: סיבה.");
  // רמה 4: אקדמי
  add(4, "The sample was small; ___, the results should be read with caution.", ["hence","whereas","albeit","conversely"], "<b>hence</b> = לכן (רשמי).");
  add(4, "The method is effective, ___ expensive.", ["albeit","hence","thus","whereby"], "<b>albeit</b> = אם כי: מוסיף הסתייגות קצרה.");
  add(4, "Some species thrive in cold water; ___, others need warm seas.", ["conversely","furthermore","hence","thereby"], "<b>conversely</b> = להפך: המצב ההפוך.");
  add(4, "The study was well designed. ___, it used a large and diverse sample.", ["Furthermore","Conversely","Albeit","Notwithstanding"], "<b>Furthermore</b> = יתרה מזאת (רשמי).");
  add(4, "The law created a system ___ citizens can appeal online.", ["whereby","whereas","hence","albeit"], "<b>whereby</b> = שבאמצעותו: מתאר איך משהו פועל.");
  add(4, "The company cut costs, ___ increasing its profits.", ["thereby","whereas","albeit","conversely"], "<b>thereby</b> = ובכך: התוצאה של הפעולה.");
  add(4, "___ the objections, the proposal was approved.", ["Notwithstanding","Whereby","Hence","Thus"], "<b>Notwithstanding</b> = למרות (רשמי מאוד).");
  add(4, "The data were incomplete; ___, no firm conclusion can be drawn.", ["thus","albeit","whereas","conversely"], "<b>thus</b> = לכן, כך (רשמי).");
  add(4, "Urban areas grew rapidly. ___, rural populations declined.", ["In contrast","Furthermore","Hence","Thereby"], "<b>In contrast</b> = לעומת זאת.");
  add(4, "The theory is useful ___ it explains past events.", ["insofar as","whereby","albeit","hence"], "<b>insofar as</b> = במידה ש: עד כמה שזה נכון.");
  add(4, "The results were significant. ___, the effect was small in practice.", ["That said","Hence","Thereby","Furthermore"], "<b>That said</b> = עם זאת: מסייג את מה שנאמר.");
  add(4, "The experiment was repeated three times ___ ensure accuracy.", ["in order to","so that","whereby","hence"], "<b>in order to</b> = כדי, ואחריה פועל.");
  add(4, "Few studies, ___ any, have examined this question.", ["if","unless","whereas","hence"], "<b>if any</b> = אם בכלל.");
  add(4, "Most participants improved; ___, the control group showed no change.", ["meanwhile","furthermore","thereby","hence"], "<b>meanwhile</b> כאן = ובאותו זמן, לעומת זאת.");
  add(4, "The author ignores economic factors. ___, the argument is incomplete.", ["Accordingly","Conversely","Albeit","Whereby"], "<b>Accordingly</b> = בהתאם לכך, לכן.");
  add(4, "___ the first trial, the second included adults.", ["Unlike","Despite","Hence","Thus"], "<b>Unlike</b> = בשונה מ.");
  // תוספת כדי שבכל תחנה יהיו לפחות 24 שאלות (3 סבבים מלאים בלי חזרה)
  add(1, "The shop was closed, ___ we went home.", ["so","but","or","because"], "<b>so</b> = לכן: התוצאה.");
  add(1, "I can't come today ___ I am sick.", ["because","so","or","then"], "<b>because</b> = כי.");
  add(1, "He is tired ___ happy after the trip.", ["but","or","so","if"], "<b>but</b> = אבל: שני רגשות שונים.");
  add(1, "We can walk ___ take a taxi.", ["or","because","so","but"], "<b>or</b> = או.");
  add(1, "Call me ___ you get home.", ["when","but","or","because"], "<b>when</b> = כאשר.");
  add(1, "I bought bread ___ milk.", ["and","or","but","so"], "<b>and</b> = ו-.");
  add(1, "___ it rains, we will stay inside.", ["If","But","And","So"], "<b>If</b> = אם.");
  add(1, "I need fruit, ___ apples and bananas.", ["for example","because","but","or"], "<b>for example</b> = למשל.");
  add(2, "The tickets were sold out. ___, we watched the game at home.", ["Instead","Moreover","Although","Despite"], "<b>Instead</b> = במקום זה.");
  add(2, "___ he was nervous, he gave a great speech.", ["Although","Because","Therefore","Moreover"], "<b>Although</b> = למרות ש.");
  add(2, "Bring water ___ you get thirsty.", ["in case","although","however","despite"], "<b>in case</b> = למקרה ש.");
  add(2, "He listened to music ___ he cleaned the kitchen.", ["while","therefore","despite","unless"], "<b>while</b> = בזמן ש.");
  add(2, "The bus was late. ___, I missed the first lesson.", ["As a result","However","Instead","Although"], "<b>As a result</b> = כתוצאה מכך.");
  add(2, "The phone is cheap. ___, it has a great camera.", ["Moreover","However","Instead","Unless"], "<b>Moreover</b> = יתרה מזאת.");
  add(2, "The road was icy. ___, the race was cancelled.", ["Therefore","However","Although","For instance"], "<b>Therefore</b> = לכן.");
  add(2, "You won't get in ___ you have a ticket.", ["unless","because","so","moreover"], "<b>unless</b> = אלא אם כן.");
  add(3, "The first chapter is slow; ___, the ending is brilliant.", ["nevertheless","consequently","similarly","so that"], "<b>nevertheless</b> = אף על פי כן.");
  add(3, "Some students prefer mornings, ___ others study best at night.", ["whereas","since","so that","due to"], "<b>whereas</b> = בעוד ש.");
  add(3, "The factory closed. ___, hundreds of workers lost their jobs.", ["Consequently","Whereas","Provided that","In spite of"], "<b>Consequently</b> = כתוצאה מכך.");
  add(3, "The flight was delayed ___ heavy fog.", ["due to","even though","so that","whereas"], "<b>due to</b> = בגלל, ואחריה שם עצם.");
  add(3, "___ she was the youngest, she led the team.", ["Even though","Due to","So that","Similarly"], "<b>Even though</b> = אף על פי ש.");
  add(3, "Plants need light to grow. ___, they need water and minerals.", ["In addition","Whereas","Unless","Even though"], "<b>In addition</b> = בנוסף.");
  add(4, "The hypothesis was rejected; ___, further research is needed.", ["hence","albeit","whereas","notwithstanding"], "<b>hence</b> = לכן.");
  add(4, "The policy succeeded, ___ only partially.", ["albeit","thus","whereby","hence"], "<b>albeit</b> = אם כי.");
  add(4, "Higher prices reduce demand; ___, lower prices increase it.", ["conversely","furthermore","thereby","albeit"], "<b>conversely</b> = להפך.");
  add(4, "The report is detailed. ___, it offers clear recommendations.", ["Furthermore","Conversely","Notwithstanding","Albeit"], "<b>Furthermore</b> = יתרה מזאת.");
  add(4, "Trees absorb carbon, ___ reducing the effects of pollution.", ["thereby","whereas","albeit","conversely"], "<b>thereby</b> = ובכך.");
  add(4, "The two groups differed in age. ___, their results were similar.", ["Nonetheless","Hence","Thereby","Whereby"], "<b>Nonetheless</b> = אף על פי כן (רשמי).");
  add(4, "The questionnaire was translated ___ ensure that all participants understood it.", ["so as to","whereby","albeit","hence"], "<b>so as to</b> = כדי ל-.");
  add(4, "___ previous studies, this one followed participants for ten years.", ["In contrast to","Hence","Thus","Albeit"], "<b>In contrast to</b> = בניגוד ל-.");
  // תוספת (16.11.2026): לפחות 64 שאלות לכל רמה, כדי ש-8 סבבים של 8 שאלות לא יחזרו על אף שאלה.
  // כל שורה: [רמה, משפט, התשובה הנכונה, שלוש תשובות שגויות]. ההסבר נלקח מהטבלה לפי מילת הקישור.
  const XN = {so:"אז, לכן: התוצאה.", because:"כי: אחריה באה הסיבה.", but:"אבל: ניגוד בין שני דברים.", or:"או: בוחרים אחד מהשניים, או אזהרה: אחרת.", if:"אם: תנאי.", when:"כאשר: מתי זה קורה.", then:"ואז: מה בא אחר כך.", finally:"לבסוף: אחרי כל הניסיונות.", "for example":"למשל: דוגמה למה שנאמר.", and:"ו-: מוסיף עוד דבר.", before:"לפני ש.",
    however:"עם זאת: ניגוד למה שציפינו.", moreover:"יתרה מזאת: מוסיף עוד נקודה באותו כיוון.", "as a result":"כתוצאה מכך.", instead:"במקום זה.", "for instance":"לדוגמה.", although:"למרות ש: ואחריה משפט שלם.", despite:"למרות: ואחריה שם עצם.", "in case":"למקרה ש.", unless:"אלא אם כן.", while:"בזמן ש, או בעוד ש.", "because of":"בגלל: ואחריה שם עצם.", "that is why":"בגלל זה: מציג את התוצאה.", therefore:"לכן.", "according to":"לפי: מקור המידע.",
    nevertheless:"אף על פי כן: ניגוד למה שציפינו.", consequently:"כתוצאה מכך.", similarly:"באופן דומה.", "on the other hand":"מצד שני: הצד ההפוך.", "even though":"אף על פי ש: ניגוד חזק.", "so that":"כדי ש: מטרה.", "due to":"בגלל: ואחריה שם עצם.", "in spite of":"למרות: ואחריה שם עצם.", "provided that":"בתנאי ש.", whereas:"בעוד ש: משווה שני מצבים.", "in addition":"בנוסף.", yet:"ובכל זאת: ניגוד אחרי פסיק.",
    hence:"לכן (רשמי).", thus:"לכן, כך (רשמי).", accordingly:"בהתאם לכך.", thereby:"ובכך: התוצאה של הפעולה.", whereby:"שבאמצעותו: איך משהו פועל.", albeit:"אם כי: הסתייגות קצרה.", "in contrast":"לעומת זאת.", nonetheless:"אף על פי כן (רשמי).", conversely:"להפך: המצב ההפוך.", notwithstanding:"למרות (רשמי מאוד).", "that said":"עם זאת: מסייג את מה שנאמר.", unlike:"בשונה מ.", furthermore:"יתרה מזאת (רשמי).", meanwhile:"בינתיים, ובאותו זמן.", "in order to":"כדי: ואחריה פועל.", "so as to":"כדי ל-.", "insofar as":"במידה ש.", "in contrast to":"בניגוד ל-."};
  [
    [1,"She studied hard, ___ she passed the test.","so","but","or","if"],
    [1,"I wanted to go out, ___ it was raining.","but","so","if","then"],
    [1,"We stayed home ___ it was snowing.","because","but","or","so"],
    [1,"Would you like tea ___ coffee?","or","so","because","then"],
    [1,"Wash your hands ___ you eat.","before","because","but","so"],
    [1,"___ the bell rang, the children ran outside.","When","But","Or","So"],
    [1,"First we ate lunch, ___ we went to the park.","then","but","because","or"],
    [1,"We looked everywhere, and ___ we found the keys under the sofa.","finally","because","or","but"],
    [1,"Many animals live on a farm, ___ cows and sheep.","for example","but","so","because"],
    [1,"She plays the piano ___ the guitar.","and","because","so","if"],
    [1,"You can have milk ___ juice, but not both.","or","and","so","because"],
    [1,"I was nervous, ___ I did my best.","but","so","or","if"],
    [1,"It was late, ___ we hurried home.","so","but","or","if"],
    [1,"My phone is old, ___ it works well.","but","so","because","or"],
    [1,"She is happy ___ she won the game.","because","but","or","if"],
    [1,"I was hungry, ___ I ate an apple.","so","but","or","if"],
    [1,"I like winter, ___ my brother likes summer.","but","so","because","if"],
    [1,"We were late ___ the bus did not come.","because","but","so","or"],
    [1,"Hurry up, ___ we will miss the train.","or","so","because","for example"],
    [1,"Some pets are small, ___ hamsters and mice.","for example","but","so","because"],
    [1,"I feel happy ___ I see my friends.","when","but","or","so"],
    [1,"Put on your coat, ___ it is very cold outside.","because","but","or","then"],
    [2,"He studied all night. ___, he failed the exam.","However","Therefore","Moreover","For instance"],
    [2,"The hotel is cheap. ___, it is close to the beach.","Moreover","However","Instead","Unless"],
    [2,"It rained all day. ___, the match was moved to Sunday.","As a result","However","Instead","Moreover"],
    [2,"I do not drink coffee. ___, I drink tea.","Instead","Moreover","Although","In case"],
    [2,"Many fruits are healthy. ___, apples are full of fiber.","For instance","However","Therefore","Instead"],
    [2,"___ it was raining, they went for a walk.","Although","Because of","Instead","Therefore"],
    [2,"___ the heavy rain, the concert went ahead.","Despite","Although","Unless","While"],
    [2,"Take a sweater ___ it gets cold tonight.","in case","despite","however","instead"],
    [2,"I will not go ___ you come with me.","unless","because of","despite","moreover"],
    [2,"She waited outside ___ her brother finished his lesson.","while","unless","despite","therefore"],
    [2,"The match was cancelled ___ the storm.","because of","although","unless","while"],
    [2,"I forgot my wallet. ___ I could not pay.","That is why","However","Although","Unless"],
    [2,"The film was boring. ___, it was too long.","Moreover","However","Instead","Therefore"],
    [2,"She is shy. ___, she gave a wonderful speech.","However","Moreover","Therefore","For instance"],
    [2,"___ he felt sick, he went to work.","Although","Because of","Moreover","Instead"],
    [2,"I like cities ___ my sister prefers the countryside.","while","unless","in case","despite"],
    [2,"Do not open the door ___ you know who is there.","unless","because of","despite","therefore"],
    [2,"She took a map ___ she got lost.","in case","although","however","moreover"],
    [2,"There are many sports. ___, football, tennis and swimming.","For instance","However","As a result","Instead"],
    [2,"The roads were icy. ___, many accidents happened.","As a result","Instead","Although","Unless"],
    [2,"I wanted pasta. ___, there was none left.","However","Moreover","Therefore","For instance"],
    [2,"He did not call. ___, he sent a message.","Instead","Moreover","Although","Because of"],
    [2,"The team lost ___ playing very well.","despite","because of","unless","in case"],
    [2,"___ the bad weather, we had a wonderful trip.","Despite","Unless","Although","In case"],
    [2,"___ the weather report, it will rain tomorrow.","According to","Despite","Because of","Instead of"],
    [2,"___ my teacher, this book is the best for beginners.","According to","Despite","Unless","Although"],
    [2,"He eats a lot of sugar. ___, his teeth are in bad shape.","As a result","However","Instead","Although"],
    [2,"She is rich, ___ she is not happy.","although","because of","instead","in case"],
    [2,"He ran fast ___ he was tired.","although","despite","therefore","moreover"],
    [2,"___ I was cooking, the phone rang.","While","Despite","Unless","Therefore"],
    [2,"The city is noisy. ___, it is never boring.","However","Therefore","For instance","In case"],
    [2,"He broke his leg. ___ he cannot play this season.","That is why","Although","Despite","Unless"],
    [2,"The soup was too hot. ___, I waited a minute before eating.","Therefore","However","Despite","Although"],
    [2,"It is a small school. ___, it has a very good library.","However","Therefore","For instance","Unless"],
    [2,"Many students feel stressed before exams. ___, they sleep badly.","As a result","Instead","Unless","In case"],
    [2,"He is very tall, ___ his brother is quite short.","while","unless","in case","because of"],
    [3,"The tickets were expensive; ___, the hall was full.","nevertheless","consequently","similarly","in addition"],
    [3,"The company lost customers. ___, it had to close two shops.","Consequently","Nevertheless","Similarly","On the other hand"],
    [3,"Cars are fast and convenient. ___, they cause pollution.","On the other hand","Similarly","So that","Provided that"],
    [3,"Tom enjoys reading novels. ___, his sister enjoys reading poetry.","Similarly","Nevertheless","Consequently","On the other hand"],
    [3,"___ she had a fever, she went to the meeting.","Even though","Due to","So that","Provided that"],
    [3,"He took notes ___ he could remember the lecture.","so that","even though","whereas","in spite of"],
    [3,"The match was cancelled ___ bad weather.","due to","even though","whereas","so that"],
    [3,"___ his injury, he finished the race.","In spite of","Due to","Even though","Whereas"],
    [3,"You can enter ___ you show your ticket.","provided that","whereas","even though","in spite of"],
    [3,"My brother loves spicy food, ___ I cannot stand it.","whereas","due to","so that","provided that"],
    [3,"Flights were cancelled ___ the strike.","due to","even though","whereas","so that"],
    [3,"She studied medicine, ___ her parents wanted her to be an artist.","even though","so that","provided that","in addition"],
    [3,"The first plan failed completely. ___, they never gave up.","Nevertheless","Consequently","Similarly","In addition"],
    [3,"The river flooded. ___, hundreds of homes were damaged.","Consequently","Nevertheless","Similarly","On the other hand"],
    [3,"Reading improves vocabulary. ___, it develops imagination.","In addition","Nevertheless","On the other hand","Whereas"],
    [3,"The hotel was luxurious, ___ the service was poor.","yet","so that","due to","provided that"],
    [3,"He is old, ___ he is still very active.","yet","so that","provided that","due to"],
    [3,"Everyone spoke quietly ___ the baby would not wake up.","so that","whereas","even though","in spite of"],
    [3,"I will lend you the book ___ you take care of it.","provided that","whereas","even though","in spite of"],
    [3,"She earns less than her colleague, ___ she works longer hours.","even though","so that","provided that","in addition"],
    [3,"Some countries rely on coal. ___, others use mostly solar power.","On the other hand","Consequently","Similarly","In addition"],
    [3,"Many shops were closed ___ the holiday.","due to","even though","whereas","so that"],
    [3,"He passed ___ not studying much.","in spite of","due to","even though","so that"],
    [3,"The cafe is cheap and friendly. ___, it is close to the university.","In addition","Nevertheless","Consequently","On the other hand"],
    [3,"The government raised taxes. ___, people spent less.","Consequently","Nevertheless","Similarly","In addition"],
    [3,"He saved for years ___ he could buy a house.","so that","even though","whereas","in spite of"],
    [3,"Maya plays the violin beautifully. ___, her sister plays the cello with great skill.","Similarly","Nevertheless","Consequently","On the other hand"],
    [3,"___ the traffic, we arrived on time.","In spite of","Due to","Whereas","So that"],
    [3,"___ the lack of sleep, he felt dizzy.","Due to","In spite of","Even though","Provided that"],
    [3,"The film is long, ___ it is worth watching.","yet","so that","due to","provided that"],
    [3,"He apologized; ___, she did not forgive him.","nevertheless","consequently","similarly","in addition"],
    [3,"Tigers hunt alone, ___ lions hunt in groups.","whereas","due to","so that","provided that"],
    [3,"Heating prices rose. ___, many families wore extra clothes at home.","Consequently","Nevertheless","Similarly","In addition"],
    [3,"Anna enjoys hiking; ___, her husband prefers swimming.","on the other hand","consequently","similarly","in addition"],
    [3,"It was freezing; ___, we went swimming.","nevertheless","consequently","similarly","in addition"],
    [3,"He is generous with his time, ___ his brother is very selfish.","whereas","due to","so that","provided that"],
    [3,"The pilot spoke slowly ___ everyone could understand.","so that","in spite of","whereas","due to"],
    [3,"The weather was awful. ___, hundreds of fans came to the stadium.","Nevertheless","Consequently","Similarly","In addition"],
    [3,"Tickets are available ___ you book before Friday.","provided that","even though","whereas","in spite of"],
    [4,"The soil is poor; ___, few crops grow here.","hence","conversely","in contrast","notwithstanding"],
    [4,"Demand has doubled; ___, prices have risen.","thus","conversely","albeit","notwithstanding"],
    [4,"The committee found errors in the report. ___, it asked for a new version.","Accordingly","Conversely","Notwithstanding","In contrast"],
    [4,"The company reduced waste, ___ lowering its costs.","thereby","albeit","whereby","hence"],
    [4,"The treaty created a framework ___ disputes are settled peacefully.","whereby","thereby","albeit","hence"],
    [4,"Water was scarce; ___, the villagers moved north.","hence","conversely","in contrast","albeit"],
    [4,"The scheme was popular, ___ short-lived.","albeit","hence","thereby","furthermore"],
    [4,"Spring was warm. ___, summer was cold and wet.","In contrast","Hence","Thereby","Furthermore"],
    [4,"The results were disappointing. ___, the team remains optimistic.","Nonetheless","Hence","Thereby","Furthermore"],
    [4,"Urban residents tend to use public transport. ___, rural residents depend on cars.","Conversely","Hence","Thereby","Accordingly"],
    [4,"___ the high cost, the project continued.","Notwithstanding","Whereby","Hence","Thereby"],
    [4,"The plan was ambitious; ___, it was realistic.","that said","hence","thereby","accordingly"],
    [4,"___ his colleagues, he preferred to work alone.","Unlike","Hence","Thus","Thereby"],
    [4,"The sea is warm in summer. ___, it is dangerously cold in winter.","Conversely","Hence","Accordingly","Thereby"],
    [4,"The device is cheap. ___, it is easy to repair.","Furthermore","Conversely","Hence","Notwithstanding"],
    [4,"The tutor explained the theory. ___, the students prepared the examples.","Meanwhile","Hence","Albeit","Whereby"],
    [4,"The bridge was being repaired. ___, traffic was sent through the old tunnel.","Meanwhile","Conversely","Thereby","Notwithstanding"],
    [4,"The author describes the problem clearly. ___, she offers practical solutions.","Furthermore","Conversely","Notwithstanding","Albeit"],
    [4,"The park is free. ___, it has a playground and a cafe.","Furthermore","Hence","Conversely","Nonetheless"],
    [4,"He moved to the capital ___ find better work.","in order to","whereby","albeit","hence"],
    [4,"She spoke slowly ___ be understood.","so as to","thereby","albeit","hence"],
    [4,"The theory holds true ___ the data are accurate.","insofar as","whereby","albeit","hence"],
    [4,"___ the older model, the new version is lighter.","Unlike","Hence","Thereby","Albeit"],
    [4,"___ earlier reports, the new study found no link.","In contrast to","Hence","Thereby","Accordingly"],
    [4,"The survey was repeated ___ confirm the results.","in order to","whereby","thereby","albeit"],
    [4,"The rules were explained clearly, ___ avoiding any confusion.","thereby","albeit","whereby","in contrast"],
    [4,"The loan was approved, ___ with strict conditions.","albeit","hence","thereby","conversely"],
    [4,"Sleep is essential for memory; ___, students should not stay up all night.","thus","conversely","albeit","nonetheless"],
    [4,"The medicine reduces pain; ___, it can cause drowsiness.","that said","hence","thereby","accordingly"],
    [4,"The experiment was costly. ___, it produced no useful results.","Furthermore","Conversely","Hence","Notwithstanding"],
    [4,"The old system was slow and unreliable; ___, the new one is fast.","in contrast","hence","thereby","furthermore"],
    [4,"The council banned cars from the centre, ___ reducing pollution.","thereby","albeit","conversely","in contrast"],
    [4,"Participants were paid; ___, the sample may be biased.","accordingly","albeit","conversely","notwithstanding"],
    [4,"Costs fell sharply; ___, more families could afford a car.","thus","albeit","in contrast","notwithstanding"],
    [4,"The first group received the drug. ___, the second group received a placebo.","Meanwhile","Hence","Albeit","Notwithstanding"],
    [4,"The mayor promised changes. ___, nothing has happened so far.","Nonetheless","Hence","Furthermore","Thereby"],
    [4,"The team won the cup, ___ narrowly.","albeit","hence","thereby","whereby"],
    [4,"Sales rose in the north. ___, they fell in the south.","Conversely","Hence","Accordingly","Thereby"],
    [4,"She read the contract carefully ___ avoid mistakes.","so as to","albeit","hence","thereby"],
    [4,"The dam provides electricity, ___ supporting local industry.","thereby","albeit","whereby","in contrast"],
    [4,"Rents are rising fast; ___, fewer young people can afford to live alone.","hence","albeit","conversely","notwithstanding"],
    [4,"The claim is valid only ___ the sample is representative.","insofar as","whereby","albeit","hence"]
  ].forEach(r => { const k = r[2].toLowerCase(); C.push({s:r[1], o:[r[2], r[3], r[4], r[5]], a:0, lv:r[0], x:"<b>" + r[2] + "</b> = " + (XN[k] || "") }); });
  window.CONNECT_LV = {f1:1, f2:2, f3:3, f4:4};
  // משפטים בודדים ביחידות שהיה בהם צליל שעוד לא נלמד (rest, jumps, play, each, statue, rescue, knew, looked, under)
  window.SENT_PATCH = Object.assign(window.SENT_PATCH || {}, {
    e:   {P4:["Jen lets the hen nap.","ג׳ן נותנת לתרנגולת לנמנם."], P5:["The hen is fed.","התרנגולת שבעה."]},
    u:   {P2:["The pup runs in the mud.","הגור רץ בבוץ."]},
    pay: {P4:["Ray and the jay sit by the bay.","ריי והעורבני יושבים ליד המפרץ."]},
    pea: {P5:["The seal and Jean meet day by day.","כלב הים וג׳ין נפגשים יום אחרי יום."]},
    ew:  {R1:["a blue screw","בורג כחול"], R2:["Sue grew it.","סו גידלה את זה."], R3:["Drew can chew stew.","דרו יכול ללעוס תבשיל."],
          P1:["Drew and Sue go to the zoo.","דרו וסו הולכים לגן החיות."], P3:["Drew: Is it true?","דרו: זה נכון?"],
          P4:["Sue: It is a newt, and it is new!","סו: זה טריטון, והוא חדש!"], P5:["Drew and Sue are in the news!","דרו וסו בחדשות!"]},
    heart2: {P1:["Jean went to her room, but the glove was gone.","ג׳ין הלכה לחדר שלה, אבל הכפפה נעלמה."], P4:["There was the glove, by the dog!","שם הייתה הכפפה, ליד הכלב!"]}
  });
  // תחנה f1 מכוונת ל-B1 עד B2. שבע מילים ברשימה שלה הן C1 לפי אוקספורד, ולכן הוחלפו במילים יומיומיות ברמה המתאימה
  const F1 = {
    landlord:["rent","שכר דירה","The rent goes up a little every year."],
    tenant:["mortgage","משכנתא","They took a mortgage to buy their first flat."],
    utilities:["heating","חימום","The heating in our flat does not work well in winter."],
    leak:["flood","הצפה, להציף","After the storm, there was a flood in the basement."],
    prescription:["pill","כדור, גלולה","Take one pill in the morning and one at night."],
    thrilled:["delighted","שמח מאוד","She was delighted with her birthday present."],
    postpone:["cancel","לבטל","We had to cancel the trip because I was sick."]
  };
  if(window.VOCAB && VOCAB.f1) VOCAB.f1 = VOCAB.f1.map(v => F1[v[0]] || v);
  const TT = id => (window.TEXTS||[]).find(t => t.id === id);
  const SS = (id, i, en, he, chk) => { const t = TT(id); if(t && t.s[i]) t.s[i] = [en, he].concat(chk === undefined ? t.s[i].slice(2) : (chk ? [chk] : [])); };
  const e9a = TT("e9a"); if(e9a){ e9a.gl = {owner:"בעל הבית", deposit:"פיקדון", lease:"חוזה שכירות", neighborhood:"שכונה", rent:"שכר דירה", afford:"להרשות לעצמך", budget:"תקציב", renovate:"לשפץ", drip:"טפטוף"};
    e9a.q[1] = ["פרט","What does the rent include?",["The bills","Furniture","Breakfast"],0];
    e9a.q[3] = ["הסקה","What will the writer do about the drip?",["Ask the owner to fix it","Ignore it","Move out"],0]; }
  SS("e9a", 1, "The owner / asked for / a deposit / and a two-year lease.", "בעל הבית ביקש פיקדון וחוזה שכירות לשנתיים.");
  SS("e9a", 2, "The neighborhood / is quiet, / and the shops / are close.", "השכונה שקטה, והחנויות קרובות.", ["What did the owner ask for?", ["A deposit and a lease", "A bargain", "A refund"], 0]);
  SS("e9a", 5, "There is also / a small drip / under the sink.", "יש גם טפטוף קטן מתחת לכיור.");
  SS("e9a", 6, "I will ask / the owner / to fix it / before I move in.", "אבקש מבעל הבית לתקן אותו לפני שאעבור.", ["What problem is there?", ["A drip under the sink", "A broken door", "A loud neighbor"], 0]);
  const c9b = TT("c9b"); if(c9b) c9b.gl = {ceiling:"תקרה", repair:"לתקן", plumber:"שרברב", drops:"טיפות"};
  SS("c9b", 2, "For the past week, / water / has been dripping / from the bathroom ceiling.", "בשבוע האחרון מים מטפטפים מתקרת חדר הרחצה.");
  const g9a = TT("g9a"); if(g9a){ g9a.gl = {appointment:"תור, פגישה", pill:"כדור, גלולה", pharmacy:"בית מרקחת", receipt:"קבלה", warranty:"אחריות על מוצר", appliance:"מכשיר חשמלי ביתי", leftovers:"שאריות אוכל", relieved:"נרגעה, שמחה שזה נגמר"};
    g9a.q[2] = ["מילה","מה פירוש relieved?",["נרגעת, שמחה שזה נגמר","כועסת","עייפה"],0]; }
  SS("g9a", 1, "She said / it was only / a mild symptom / of my allergy / and gave me / some pills.", "היא אמרה שזה רק תסמין קל של האלרגיה שלי ונתנה לי כדורים.", ["מה הרופאה נתנה?", ["כדורים", "חשבונית", "סיסמה"], 0]);
  SS("g9a", 2, "The pharmacy / near my house / was closed, / so I had to / cancel my plans / and start the treatment / on Tuesday.", "בית המרקחת ליד הבית שלי היה סגור, אז נאלצתי לבטל את התוכניות שלי ולהתחיל את הטיפול ביום שלישי.");
  // wanted: ה-a נשמעת אחרת אחרי w, וזה נלמד רק בתחנה האחרונה. ביחידת ed ובחזרה שלה היא מוחלפת
  const WP = window.WORD_PATCH = window.WORD_PATCH || {};
  WP.ed = Object.assign(WP.ed || {}, {wanted:["printed","הדפיס"]});
  WP.r6 = Object.assign(WP.r6 || {}, {wanted:["rested","נח"]});
  // תוספת (16.11.2026): 52 שאלות ניסוח מחדש, כך שלכל אחת משתי התחנות יהיו לפחות 48 (8 סבבים של 6 שאלות בלי חזרה)
  window.RESTATE = window.RESTATE || [];
  [
    ["Hardly had the lecture begun when the lights went out.","The lights went out almost as soon as the lecture began.","The lights went out before the lecture was planned.","The lecture was hard because the lights went out.","The lecture ended when the lights went out.","hardly... when = בקושי התחיל... וכבר. שני האירועים כמעט באותו רגע."],
    ["She is by no means satisfied with the results.","She is not at all satisfied with the results.","She is partly satisfied with the results.","She is satisfied by the means she used.","She is satisfied only with some results.","by no means = בשום אופן לא. כלומר: בכלל לא מרוצה."],
    ["The more he practised, the more confident he became.","His confidence grew as his practice increased.","His confidence fell as he practised more.","He practised because he was confident.","He became confident without practising.","the more... the more = ככל ש... כך. שני הדברים גדלים יחד."],
    ["Little did she know that the offer was a trap.","She did not know that the offer was a trap.","She knew a little about the trap.","She knew everything about the offer.","The offer was little and trapped her.","little did she know = היא לא ידעה. זה סדר מילים הפוך של שלילה."],
    ["No sooner had we arrived than it started to rain.","It started to rain immediately after we arrived.","It rained before we arrived.","We arrived because of the rain.","It stopped raining when we arrived.","no sooner... than = ברגע ש. הגשם התחיל מיד אחרי ההגעה."],
    ["The manager would rather work late than leave the report unfinished.","The manager prefers to work late instead of leaving the report unfinished.","The manager prefers to leave the report unfinished.","The manager must work late every day.","The manager would like to finish the report earlier.","would rather... than = מעדיף... מאשר."],
    ["Not only was the hotel expensive, but it was also dirty.","The hotel was both expensive and dirty.","The hotel was expensive but clean.","The hotel was dirty because it was expensive.","The hotel was neither expensive nor dirty.","not only... but also = לא רק... אלא גם. שני הדברים נכונים."],
    ["Had he known about the delay, he would have taken another train.","He did not know about the delay, so he did not take another train.","He knew about the delay and took another train.","He took another train because there was a delay.","He will take another train if there is a delay.","had he known = אילו ידע. כלומר: הוא לא ידע, ולכן לא עשה את זה."],
    ["Only after the results were published did the scientists realise their mistake.","The scientists realised their mistake only when the results were published.","The scientists published the results to hide their mistake.","The scientists made no mistake.","The scientists realised their mistake before publishing.","only after = רק אחרי. ההבנה באה אחרי הפרסום."],
    ["Despite being exhausted, she kept running.","Although she was exhausted, she continued to run.","Because she was exhausted, she stopped running.","She was exhausted after running.","She was not exhausted at all.","despite = למרות. היא המשיכה לרוץ אף שהייתה תשושה."],
    ["The report's conclusions are hardly surprising.","The report's conclusions are what we would expect.","The report's conclusions are extremely surprising.","The report's conclusions are hard to understand.","The report has no conclusions.","hardly surprising = כמעט לא מפתיע, כלומר צפוי."],
    ["It is unlikely that the strike will end this week.","The strike is not expected to end this week.","The strike is expected to end this week.","The strike ended last week.","The strike will end on a certain day.","unlikely = לא סביר. כלומר לא צפוי שהשביתה תיגמר."],
    ["Whatever the cost, they were determined to finish the tunnel.","They would finish the tunnel at any price.","They would stop if the cost was high.","They did not know the cost of the tunnel.","The tunnel was finished at no cost.","whatever the cost = בכל מחיר."],
    ["The new policy has been widely criticised for being too vague.","Many people have said the new policy is not clear enough.","Many people have praised the new policy for being clear.","The new policy was written by critics.","The new policy is too long.","vague = לא ברור. widely criticised = זכה לביקורת רחבה."],
    ["Scarcely anyone attended the opening ceremony.","Almost nobody attended the opening ceremony.","Almost everybody attended the opening ceremony.","The ceremony was open to everybody.","Scarcely anyone was invited to the ceremony.","scarcely anyone = כמעט אף אחד."],
    ["The company is to blame for the delay.","The company caused the delay.","The company was delayed by others.","The company will cause a delay.","The company blames the delay on someone else.","to blame = אשם. החברה גרמה לעיכוב."],
    ["Rarely does the museum receive such a generous donation.","The museum seldom gets such a generous donation.","The museum often receives generous donations.","The museum never gives donations.","The museum rarely needs a donation.","rarely = לעתים רחוקות. סדר המילים ההפוך בא אחרי מילה כזו."],
    ["It was only when he left that she understood how much she needed him.","She understood how much she needed him only after he left.","She understood this before he left.","He left because she understood.","She did not need him when he left.","it was only when = רק כאשר. ההבנה באה אחרי העזיבה."],
    ["Provided that the weather stays dry, the festival will take place.","The festival will take place as long as it does not rain.","The festival will take place even if it rains.","The festival will be dry if it takes place.","The weather will be dry because of the festival.","provided that = בתנאי ש. כלומר רק אם לא יהיה גשם."],
    ["He was made to apologise.","Someone forced him to apologise.","He wanted to apologise.","He made someone apologise.","He apologised to himself.","was made to = אילצו אותו. הוא לא עשה את זה מרצון."],
    ["She has yet to reply to my message.","She has not replied to my message so far.","She replied to my message immediately.","She will never reply to my message.","She replied yesterday, not today.","has yet to = עדיין לא עשתה. אולי תעשה בהמשך."],
    ["I could hardly hear what he said.","I found it very difficult to hear him.","I could hear him clearly.","I did not want to hear him.","I heard everything he said.","hardly = כמעט לא. שמעתי בקושי."],
    ["The two proposals differ only slightly.","There is a small difference between the two proposals.","The two proposals are completely different.","The two proposals are identical.","Only one proposal differs.","only slightly = רק קצת. ההבדל קטן."],
    ["Everyone but Dan signed the petition.","Dan was the only person who did not sign the petition.","Dan was the only person who signed the petition.","Everyone, including Dan, signed the petition.","Dan wrote the petition but did not sign it.","but כאן = חוץ מ. כולם חתמו חוץ מדן."],
    ["The film is not worth seeing.","It is not a good idea to spend time on the film.","The film cannot be seen anywhere.","The film is too expensive to see.","Nobody has seen the film.","not worth = לא כדאי. הסרט לא שווה את הזמן."],
    ["As soon as the doors opened, the crowd rushed in.","The crowd entered immediately after the doors opened.","The crowd waited a long time after the doors opened.","The crowd rushed in before the doors opened.","The doors opened because of the crowd.","as soon as = ברגע ש."],
    ["Despite repeated warnings, the residents stayed in their homes.","The residents stayed although they had been warned several times.","The residents left because of the warnings.","The residents were never warned.","The warnings were repeated by the residents.","despite = למרות. הוזהרו כמה פעמים, ועדיין נשארו."],
    ["He is too proud to ask for help.","His pride stops him from asking for help.","He is proud because he asked for help.","He asks for help very proudly.","He is proud enough to help others.","too... to = יותר מדי... מכדי. הגאווה מונעת ממנו."],
    ["The speaker was barely audible.","It was very hard to hear the speaker.","The speaker was very loud.","The speaker was not present.","The speaker could not hear the audience.","barely audible = בקושי נשמע."],
    ["Unless prices fall, fewer people will buy houses.","If prices do not fall, fewer people will buy houses.","If prices fall, fewer people will buy houses.","Prices will fall because fewer people buy houses.","More people will buy houses if prices do not fall.","unless = אלא אם כן. כלומר: אם המחירים לא יורדים."],
    ["Few would deny that exercise is good for the mind.","Most people agree that exercise is good for the mind.","Most people deny that exercise is good for the mind.","Few people exercise their minds.","Exercise is good only for a few people.","few would deny = מעטים יכחישו, כלומר רובם מסכימים."],
    ["The bridge will not be open to traffic until next spring.","Traffic will be able to use the bridge only from next spring.","Traffic will use the bridge before next spring.","The bridge will be closed after next spring.","The bridge will never be open to traffic.","not until = רק מ-. הגשר ייפתח באביב הבא."],
    ["She succeeded in spite of her lack of experience.","She succeeded even though she had little experience.","She succeeded because she had a lot of experience.","She failed because she lacked experience.","She had no experience, so she did not try.","in spite of = למרות. lack of = חוסר."],
    ["On no account should visitors touch the exhibits.","Visitors must never touch the exhibits.","Visitors may touch some exhibits.","Visitors can touch the exhibits on request.","Visitors should count the exhibits.","on no account = בשום מצב. איסור מוחלט."],
    ["The more expensive the ticket, the better the seat.","Costlier tickets give better seats.","Cheaper tickets give better seats.","Seats become more expensive as tickets get worse.","All seats cost the same.","the more... the better = ככל ש... כך. המחיר והמושב עולים יחד."],
    ["He denied having taken the money.","He said he had not taken the money.","He admitted taking the money.","He refused to take the money.","He gave the money back.","denied = הכחיש. הוא אמר שלא לקח."],
    ["She insisted on paying for the dinner.","She refused to let anyone else pay for the dinner.","She asked someone else to pay for the dinner.","She did not want any dinner.","She forgot to pay for the dinner.","insist on = התעקש. היא לא נתנה לאחרים לשלם."],
    ["The results fell short of expectations.","The results were not as good as people had hoped.","The results were better than expected.","The results were exactly as expected.","The results were too short.","fell short of = לא הגיעו ל. התוצאות היו פחות טובות מהציפייה."],
    ["He would sooner resign than accept the offer.","He prefers to resign rather than accept the offer.","He will resign soon after accepting the offer.","He accepted the offer and then resigned.","He cannot resign because of the offer.","would sooner... than = מעדיף... מאשר."],
    ["It is no use arguing with her.","Arguing with her is pointless.","Arguing with her is useful.","She uses arguments well.","She does not argue with anyone.","no use = חסר תועלת. אין טעם להתווכח."],
    ["The committee is made up of twelve members.","Twelve people make up the committee.","The committee has made twelve members.","The committee has twelve more members than before.","Twelve committees were created.","made up of = מורכב מ."],
    ["Few of the applicants had any relevant experience.","Most of the applicants lacked relevant experience.","Most of the applicants had relevant experience.","Every applicant had relevant experience.","The applicants had too many experiences.","few = מעטים. כלומר לרוב המועמדים לא היה ניסיון."],
    ["He looks down on people who have not been to university.","He thinks he is better than people who did not go to university.","He admires people who did not go to university.","He cannot see people from the university.","He looks at people who are lower than him.","look down on = לזלזל, להסתכל מלמעלה."],
    ["The singer's performance was out of this world.","The singer's performance was truly outstanding.","The singer's performance was average.","The singer was far away from the audience.","The singer's performance was cancelled.","out of this world = יוצא מן הכלל, מדהים."],
    ["The plan is bound to fail without more funding.","The plan will certainly fail unless it gets more money.","The plan may succeed even without more money.","The plan is tied to a fund.","The plan failed because it had too much funding.","bound to = בטוח ש. הכישלון כמעט ודאי."],
    ["Nobody could have predicted the outcome.","It was impossible for anyone to predict the outcome.","Everybody predicted the outcome.","Nobody was interested in the outcome.","The outcome was predicted by one person.","could not have = אי אפשר היה. אף אחד לא יכול היה לחזות."],
    ["She is not so much a writer as a historian.","She is more a historian than a writer.","She is more a writer than a historian.","She is both a famous writer and historian.","She is neither a writer nor a historian.","not so much... as = לא כל כך... כמו. העיקר הוא ההיסטוריה."],
    ["He couldn't help laughing.","He could not stop himself from laughing.","He did not want to laugh.","He laughed to help someone.","He was unable to laugh.","can't help = לא יכול שלא. הוא לא הצליח להפסיק לצחוק."],
    ["The proposal met with strong opposition.","Many people strongly opposed the proposal.","The proposal was met by strong supporters.","The proposal was never discussed.","The proposal was strongly improved.","met with = נתקלה ב. הייתה התנגדות חזקה."],
    ["In the event of fire, use the stairs.","If a fire starts, use the stairs.","Before a fire starts, use the stairs.","Use the stairs only after a fire has ended.","Never use the stairs in a fire.","in the event of = במקרה של."],
    ["He has a tendency to exaggerate.","He often makes things sound bigger than they are.","He rarely exaggerates.","He is unable to tell the truth.","He exaggerates only once.","tendency = נטייה. הוא נוטה להגזים."],
    ["The decision was reached after lengthy discussion.","They decided only after talking for a long time.","They decided without any discussion.","They discussed only after deciding.","The discussion was too short to decide.","lengthy = ארוך. ההחלטה באה אחרי דיון ארוך."]
  ].forEach(r => window.RESTATE.push({s:r[0], o:[r[1], r[2], r[3], r[4]], a:0, x:r[5]}));
  (window.RESTATE || []).forEach((q, i) => { q.st = i % 2 ? "f5" : "f4"; });
  // פירוש לכל מילה בטקסטים המתקדמים שאינה ברשימות אוקספורד ואינה במילים של התחנה (נבדק בסקריפט adv_gloss.py)
  const GL_ADD = {"a9c": {"caf": "קפה (בית קפה, café)", "weekday": "יום חול (לא סוף שבוע)"}, "a10a": {"sunlight": "אור שמש"}, "a10c": {"fist": "אגרוף (יד קפוצה)"}, "a11a": {"grammar": "דקדוק"}, "a11b": {"classmates": "חברים לכיתה"}, "a11c": {"banned": "נאסר", "banning": "איסור", "learners": "לומדים", "wellbeing": "רווחה, הרגשה טובה"}, "a11d": {"bakeries": "מאפיות", "hedgehogs": "קיפודים"}, "a12a": {"relied": "הסתמכו", "ineffective": "לא יעיל", "learners": "לומדים", "quizzes": "בחנים קצרים"}, "a12b": {"conditioners": "מזגנים (air conditioners)", "endanger": "לסכן", "sunlight": "אור שמש"}, "a12c": {"bilingualism": "דו-לשוניות", "replicate": "לשחזר (ניסוי)"}, "a13a": {"shoppers": "קונים", "prone": "נוטה ל-"}, "a13b": {"adolescence": "גיל ההתבגרות", "hormone": "הורמון"}, "a13c": {"livestock": "בעלי חיים במשק (פרות, כבשים)"}, "c9b": {"dripping": "מטפטף"}, "c10a": {"carrier": "נשא, מעביר"}, "c10b": {"preview": "תצוגה מקדימה", "inactive": "לא פעיל"}, "c10c": {"faithfully": "בנאמנות"}, "c10d": {"dripping": "מטפטף", "drips": "טפטופים"}, "c11b": {"evaporates": "מתאדה"}, "c12a": {"wellbeing": "רווחה, הרגשה טובה"}, "c12b": {"rainfall": "כמות גשם", "galaxies": "גלקסיות", "telescopes": "טלסקופים"}, "c12c": {"refocus": "למקד מחדש", "multitask": "לעשות כמה דברים בבת אחת", "multitaskers": "אנשים שעושים כמה דברים בבת אחת"}, "c12d": {"reefs": "שוניות", "microscopic": "זעיר, נראה רק במיקרוסקופ", "expel": "לגרש, להוציא", "resistant": "עמיד", "overfishing": "דיג יתר"}, "c12e": {"carried": "נשא, העביר", "trader": "סוחר", "kilometers": "קילומטרים"}, "c12f": {"forgotten": "נשכח", "unimportant": "לא חשוב"}, "c12g": {"planners": "מתכננים, יומני תכנון", "nutrients": "חומרי הזנה"}, "c13a": {"fatigue": "עייפות", "proven": "הוכח"}, "c13b": {"millimeters": "מילימטרים", "unclear": "לא ברור", "microplastics": "חלקיקי פלסטיק זעירים", "particles": "חלקיקים"}, "c13c": {"magpies": "עורבנים (ציפורים)", "modified": "שונה, עבר שינוי", "scent": "ריח"}, "c13d": {"occurred": "קרה", "eyewitness": "עד ראייה"}, "c13f": {"fifteenth": "חמישה עשר (המאה ה-15)", "movable": "נייד, שאפשר להזיז"}, "c13g": {"vertebrates": "בעלי חוליות", "contagion": "הידבקות"}, "e11b": {"doomed": "נידון לכישלון"}, "e13a": {"streak": "רצף", "overestimate": "להעריך יותר מדי"}, "e13b": {"impartiality": "חוסר משוא פנים", "neutrality": "ניטרליות", "crises": "משברים", "respectful": "מכבד"}, "e10a": {"pigeons": "יונים"}, "e12b": {"resilient": "עמיד, גמיש נפשית"}, "g9a": {"allergy": "אלרגיה", "technician": "טכנאי"}, "g11a": {"rigidly": "בנוקשות", "admitting": "להודות"}, "g12a": {"methodological": "מתודולוגי, של שיטת המחקר", "measurable": "שאפשר למדוד"}, "g13a": {"hardship": "קושי, מצוקה", "resilience": "חוסן", "willpower": "כוח רצון"}};
  Object.entries(GL_ADD).forEach(([id,m])=>{ const t=TT(id); if(t) t.gl=Object.assign({}, t.gl||{}, m); });
  // ארבע מילים שנמצאו בבדיקת שכיחות (wordfreq, 16.11.2026) ועדיין היה חסר להן פירוש
  Object.entries({c11b:{saltier:"מלוח יותר", saltiest:"המלוח ביותר"}, c11d:{busier:"עמוס יותר"}, c12g:{greenhouses:"חממות"}}).forEach(([id,m])=>{ const t=TT(id); if(t) t.gl=Object.assign({}, t.gl||{}, m); });
  // מילים פחות שכיחות בתחנות הנמוכות (נמצאו בבדיקת שכיחות). הן ניתנות לקריאה לפי הצלילים של התחנה, ועכשיו יש להן גם פירוש
  Object.entries({w2e:{swam:"שחו"}, w3a:{poke:"דחיפה קטנה", slid:"החליק"}, w5d:{toot:"טוט (קול של צופר)"}, w5e:{frown:"להזעיף פנים"},
    w6d:{quilts:"שמיכות טלאים", snug:"נעים וחמים"}, w7c:{organizes:"מסדר"}, w7d:{chuckled:"צחקק"}, w8c:{candlelight:"אור נר", bravest:"האמיץ ביותר"},
    w8d:{blurry:"מטושטש"}, w8e:{bookshelf:"מדף ספרים"}, w8f:{thistle:"דרדר (צמח קוצני)"}, b2c:{stump:"גדם של עץ"}, b7c:{campers:"חניכים במחנה"},
    b8a:{wisest:"החכם ביותר"}, b8b:{bounces:"קופץ בחזרה"}, w0f:{dub:"הברה בחרוז משעשע"}}).forEach(([id,m])=>{ const t=TT(id); if(t) t.gl=Object.assign({}, t.gl||{}, m); });
  // שאלות נוספות למילות קישור, מתוך הטקסטים של כל תחנה (16.11.2026): משפט מהטקסט עם מקום ריק במקום מילת הקישור.
  // רק מילות קישור של הרמה של התחנה, והתשובות השגויות מאותה רמה.
  const CW = {1:["because","but","so","for example"], 2:["however","although","therefore","moreover","instead","while","unless","despite","as a result","for instance","in case"],
    3:["nevertheless","consequently","whereas","on the other hand","similarly","even though","so that","due to","provided that","in spite of","in addition","yet"],
    4:["hence","thus","albeit","conversely","furthermore","whereby","thereby","notwithstanding","in contrast","accordingly","nonetheless","meanwhile","that said"]};
  const TY = {because:"S",although:"S",while:"S",unless:"S","even though":"S","so that":"S","provided that":"S","in case":"S",whereas:"S",whereby:"S",albeit:"P",
    but:"C",so:"C",yet:"C", despite:"P","due to":"P","in spite of":"P",notwithstanding:"P"};
  const CAT = {but:"contrast",however:"contrast",although:"contrast",nevertheless:"contrast",yet:"contrast",whereas:"contrast","even though":"contrast","on the other hand":"contrast",despite:"contrast","in spite of":"contrast",conversely:"contrast","in contrast":"contrast",nonetheless:"contrast",albeit:"contrast",notwithstanding:"contrast","that said":"contrast",
    so:"result",therefore:"result","as a result":"result",consequently:"result",hence:"result",thus:"result",accordingly:"result",thereby:"result",
    moreover:"add","in addition":"add",furthermore:"add",similarly:"add","for example":"example","for instance":"example",because:"cause","due to":"cause",
    unless:"cond","provided that":"cond","in case":"cond","so that":"purpose",while:"time",meanwhile:"time",instead:"alt",whereby:"means"};
  const XP = {}; C.forEach(q => { const k=q.o[q.a].toLowerCase(); if(!XP[k]) XP[k]=q.x; });
  const have = new Set(C.map(q => q.s));
  const cap = (w, up) => up ? w[0].toUpperCase() + w.slice(1) : w;
  [1,2,3,4].forEach(lv => {
    const words = CW[lv].slice().sort((a,b) => b.length - a.length);
    (window.TEXTS||[]).filter(t => ({1:[7,8,9],2:[9,10],3:[10,11],4:[11,12,13]})[lv].includes(t.w)).forEach(t => (t.s||[]).forEach(s0 => {
      const txt = s0[0].replace(/\s*\/\s*/g, " ").replace(/\s+/g, " ").trim();
      if(txt.length > 150) return;
      const taken = [];   // מקומות שכבר הפכו לשאלה, כדי ש-so לא יתפוס את so that
      for(const w of words){ if(!txt) break;
        const m = txt.match(new RegExp("(^|[^A-Za-z])(" + w + ")(?![A-Za-z])", "i"));
        if(!m) continue;
        const at = m.index + m[1].length, up = at === 0;
        if(taken.some(r => at < r[1] && at + w.length > r[0])) continue;
        const s = txt.slice(0, at) + "___" + txt.slice(at + w.length);
        if(have.has(s)) continue;
        // סוג דקדוקי: S = לפני משפט שלם (although), A = מילה עם פסיק (however,), P = לפני שם עצם (despite), C = מחבר (but)
        const ty = x => TY[x] || "A", T0 = ty(w), after = txt.slice(at + w.length);
        if(T0 === "A" && !/^,/.test(after)) continue;          // מילה כזו באה עם פסיק אחריה
        if(T0 === "P" && /^,/.test(after)) continue;
        if(T0 === "C" && at === 0) continue;                   // But/So/Yet בתחילת משפט אפשר להחליף ביותר ממילה אחת, ולכן לא לוקחים
        if(T0 === "C" && at > 0 && !/,\s*$/.test(txt.slice(0, at))) continue;   // but/so/yet רק כשהן מחברות שני משפטים, אחרי פסיק
        const okT = {S:["A","P"], A:["S","P"], P:["S","A","C"], C:["A","P"]}[T0];
        const sameCat = x => CAT[x] && CAT[x] === CAT[w];
        let pool = CW[lv].filter(x => x !== w && okT.includes(ty(x)) && !sameCat(x));
        if(pool.length < 3) pool = pool.concat([].concat(CW[lv-1]||[], lv===1 ? CW[2] : []).filter(x => x !== w && okT.includes(ty(x)) && !sameCat(x) && !pool.includes(x)));
        if(pool.length < 3) continue;
        const others = pool.slice(0, 12).sort(() => Math.random() - .5).slice(0, 3);
        have.add(s); taken.push([at, at + w.length]);
        C.push({s, o:[cap(w, up)].concat(others.map(x => cap(x, up))), a:0, lv, src:t.id,
                x:(XP[w] || "<b>" + w + "</b>") + " (המשפט מתוך הטקסט <bdi>" + (t.t||"") + "</bdi>)"});
        break;   // שאלה אחת מכל משפט, כדי שלא יופיע אותו משפט פעמיים עם חור אחר
      }
    }));
  });})();
