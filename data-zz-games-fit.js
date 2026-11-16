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
  window.CONNECT_LV = {f1:1, f2:2, f3:3, f4:4};
  (window.RESTATE || []).forEach((q, i) => { q.st = i % 2 ? "f5" : "f4"; });
})();
