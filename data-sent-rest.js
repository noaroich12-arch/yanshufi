/* משפטים ופסקאות בנויים מחדש לתחנות הסיומות, ההברות והאותיות השקטות (עולמות 6, 7, 8), 15.11.2026.
   כל מילה מרכזית במשפט היא מילה של התחנה עצמה (או שם); נשארות רק מילות הדקדוק הקטנות.
   נבדק אוטומטית בסקריפט check_sent_strict.py. */
Object.assign(window.SENT_REWRITE = window.SENT_REWRITE || {}, {
  /* ===== עולם 3: y בסוף מילה קצרה, ותנועה בסוף הברה ===== */
  y1:{
    reads:[["a shy spy","מרגל ביישן"],["a sly fly","זבוב ערמומי"],["Why cry?","למה לבכות?"],["Try, try, try!","נסה, נסה, נסה!"],["My sky is dry.","השמיים שלי יבשים."]],
    para:[["A fly is in the sky.","זבוב בשמיים."],["The fly is shy.","הזבוב ביישן."],["A spy can try to fly.","מרגל יכול לנסות לעוף."],["Why cry?","למה לבכות?"],["My fly is sly.","הזבוב שלי ערמומי."],["Try, try, try!","נסו, נסו, נסו!"]]
  },
  open:{
    reads:[["Go, go, go!","קדימה, קדימה, קדימה!"],["No, no, no!","לא, לא, לא!"],["He and she go solo.","הוא והיא הולכים לבד."],["Hi, hero!","היי, גיבור!"],["a taco, a kilo, a radio","טאקו, קילו, רדיו"]],
    para:[["Hi, hero!","היי, גיבור!"],["The hero has a taco.","לגיבור יש טאקו."],["He has a radio.","יש לו רדיו."],["She has a kilo.","יש לה קילו."],["We go solo.","אנחנו הולכים לבד."],["Judo, judo, judo!","ג׳ודו, ג׳ודו, ג׳ודו!"]]
  },
  /* ===== עולם 6: סיומות ותחיליות ===== */
  ed:{
    reads:[["Pam jumped.","פאם קפצה."],["Ben kicked and helped.","בן בעט ועזר."],["Jill wished and waited.","ג׳יל איחלה והמתינה."],["Tim fixed and painted.","טים תיקן וצבע."],["Meg landed and rested.","מג נחתה ונחה."]],
    para:[["Pam jumped and landed.","פאם קפצה ונחתה."],["Ben kicked and rested.","בן בעט ונח."],["Jill waited and wished.","ג׳יל המתינה ואיחלה."],["Tim painted and fixed.","טים צבע ותיקן."],["Meg helped and played.","מג עזרה ושיחקה."],["They called and opened.","הם קראו ופתחו."]]
  },
  ing:{
    reads:[["Pam is jumping.","פאם קופצת."],["Ben is singing and playing.","בן שר ומשחק."],["Jill is eating and drinking.","ג׳יל אוכלת ושותה."],["Tim is fishing.","טים דג."],["Meg is resting and thinking.","מג נחה וחושבת."]],
    para:[["Pam is jumping and falling.","פאם קופצת ונופלת."],["Ben is kicking and going.","בן בועט והולך."],["Jill is ringing and crying.","ג׳יל מצלצלת ובוכה."],["Tim is walking and talking.","טים הולך ומדבר."],["Meg is helping and eating.","מג עוזרת ואוכלת."],["They are playing and singing.","הם משחקים ושרים."]]
  },
  dbl:{
    reads:[["Tim is sitting.","טים יושב."],["Ben is running and swimming.","בן רץ ושוחה."],["Meg is hopping.","מג קופצת."],["Jill is shopping and digging.","ג׳יל קונה וחופרת."],["Pam is getting bigger.","פאם נעשית גדולה יותר."]],
    para:[["Ben stopped running.","בן הפסיק לרוץ."],["Tim planned and hugged.","טים תכנן וחיבק."],["Meg clapped and chopped.","מג מחאה כפיים וקצצה."],["Jill is bigger and hotter.","ג׳יל גדולה וחמה יותר."],["Pam is sadder and wetter.","פאם עצובה ורטובה יותר."],["They are digging and shopping.","הם חופרים וקונים."]]
  },
  erest:{
    reads:[["Ben is taller.","בן גבוה יותר."],["Meg is the tallest.","מג היא הגבוהה ביותר."],["Jill is faster.","ג׳יל מהירה יותר."],["Tim is the fastest.","טים הוא המהיר ביותר."],["Pam is the smallest.","פאם היא הקטנה ביותר."]],
    para:[["Ben is bigger and taller.","בן גדול וגבוה יותר."],["Meg is darker and softer.","מג כהה ורכה יותר."],["Jill is the longest.","ג׳יל היא הארוכה ביותר."],["Tim is the strongest.","טים הוא החזק ביותר."],["Pam is the youngest.","פאם היא הצעירה ביותר."],["Ben is the brightest.","בן הוא הבהיר ביותר."]]
  },
  le:{
    reads:[["an apple on a table","תפוח על שולחן"],["a little turtle","צב קטן"],["a candle in a bottle","נר בבקבוק"],["Ben can handle the puzzle.","בן יכול להתמודד עם הפאזל."],["The eagle is on the castle.","הנשר על הטירה."]],
    para:[["Ben has an apple.","לבן יש תפוח."],["The apple is on a table.","התפוח על שולחן."],["A little turtle is on the table.","צב קטן על השולחן."],["Meg has a candle and a bottle.","למג יש נר ובקבוק."],["Tim has a puzzle and a needle.","לטים יש פאזל ומחט."],["The little castle is simple.","הטירה הקטנה פשוטה."]]
  },
  pre:{
    reads:[["Jill can unlock it.","ג׳יל יכולה לפתוח את המנעול."],["Ben can undo it.","בן יכול לבטל את זה."],["Meg can replay and redo.","מג יכולה לנגן שוב ולעשות שוב."],["Tim can unpack and unzip.","טים יכול לפרוק ולפתוח רוכסן."],["Pam can retell and refill.","פאם יכולה לספר מחדש ולמלא מחדש."]],
    para:[["Jill is unhappy.","ג׳יל אומללה."],["Ben is unkind.","בן לא נחמד."],["Jill can unlock and untie.","ג׳יל יכולה לפתוח מנעול ולפתוח קשר."],["Ben can redo and replay.","בן יכול לעשות שוב ולנגן שוב."],["Meg can repaint and rewrite.","מג יכולה לצבוע מחדש ולכתוב מחדש."],["It is unsafe to unpack.","לא בטוח לפרוק."]]
  },
  ful:{
    reads:[["Ben is helpful.","בן מועיל."],["Meg is careful.","מג זהירה."],["Jill is thankful.","ג׳יל אסירת תודה."],["Tim is careless.","טים רשלן."],["Pam is playful and joyful.","פאם שובבה ושמחה."]],
    para:[["Ben is helpful and careful.","בן מועיל וזהיר."],["Meg is thankful and joyful.","מג אסירת תודה ושמחה."],["Tim is careless.","טים רשלן."],["Jill is helpful and playful.","ג׳יל מועילה ושובבה."],["Pam is harmless.","פאם לא מזיקה."],["They are helpful and thankful.","הם מועילים ואסירי תודה."]]
  },
  r6:{
    reads:[["Ben is helpful.","בן מועיל."],["Tim jumped.","טים קפץ."],["Meg is singing.","מג שרה."],["Jill is taller.","ג׳יל גבוהה יותר."],["Pam can unlock it.","פאם יכולה לפתוח את זה."]],
    para:[["Ben jumped and landed.","בן קפץ ונחת."],["Meg is singing and playing.","מג שרה ומשחקת."],["Tim is taller and faster.","טים גבוה ומהיר יותר."],["Jill is careful and helpful.","ג׳יל זהירה ומועילה."],["Pam can unlock and unpack.","פאם יכולה לפתוח ולפרוק."],["They are thankful.","הם אסירי תודה."]]
  },
  /* ===== עולם 7: הברות ===== */
  syl1:{
    reads:[["a rabbit and a kitten","ארנב וחתלתול"],["a basket and a pocket","סל וכיס"],["a ticket and a rocket","כרטיס וטיל"],["Ben has a muffin and a napkin.","לבן יש מאפין ומפית."],["The dentist has a bucket.","לרופא השיניים יש דלי."]],
    para:[["Ben has a rabbit.","לבן יש ארנב."],["The rabbit is in a basket.","הארנב בתוך סל."],["Meg has a kitten.","למג יש חתלתול."],["The kitten has a ticket.","לחתלתול יש כרטיס."],["Tim has a hammer and a bucket.","לטים יש פטיש ודלי."],["It is a picnic at sunset.","זה פיקניק בשקיעה."]]
  },
  syl2:{
    reads:[["a robot and a tiger","רובוט ונמר"],["a pilot and a spider","טייס ועכביש"],["paper and a lemon","נייר ולימון"],["Ben has a wagon and a cabin.","לבן יש עגלה ובקתה."],["The student has seven papers.","לתלמיד יש שבעה ניירות."]],
    para:[["The tiger is in the river.","הנמר בנהר."],["The pilot has a robot.","לטייס יש רובוט."],["The robot has paper.","לרובוט יש נייר."],["Ben has a spider and a lemon.","לבן יש עכביש ולימון."],["The student has a wagon.","לתלמיד יש עגלה."],["The wagon is on the planet.","העגלה על כוכב הלכת."]]
  },
  schwa:{
    reads:[["a panda and a zebra","פנדה וזברה"],["a banana and a pizza","בננה ופיצה"],["a camera and a sofa","מצלמה וספה"],["The gorilla is alone.","הגורילה לבד."],["Ben has a pencil and a salad.","לבן יש עיפרון וסלט."]],
    para:[["The panda has a banana.","לפנדה יש בננה."],["The zebra has a camera.","לזברה יש מצלמה."],["The gorilla is on the sofa.","הגורילה על הספה."],["The animal is alone.","החיה לבד."],["Ben has pizza and salad.","לבן יש פיצה וסלט."],["It is a problem again.","זו בעיה שוב."]]
  },
  stress:{
    reads:[["a monkey and a doctor","קוף ורופא"],["a window and a garden","חלון וגינה"],["a hotel and a balloon","מלון ובלון"],["Ben has a computer and a guitar.","לבן יש מחשב וגיטרה."],["The doctor has a carrot.","לרופא יש גזר."]],
    para:[["The monkey has a balloon.","לקוף יש בלון."],["The doctor is at the hotel.","הרופא במלון."],["The hotel has a garden.","למלון יש גינה."],["The garden has a window.","לגינה יש חלון."],["The monkey is behind the window.","הקוף מאחורי החלון."],["Today is a surprise.","היום הוא הפתעה."]]
  },
  long:{
    reads:[["a kangaroo and a crocodile","קנגרו ותנין"],["an umbrella and a tomato","מטרייה ועגבנייה"],["a dinosaur and a helicopter","דינוזאור ומסוק"],["Ben has a hamburger and a potato.","לבן יש המבורגר ותפוח אדמה."],["The butterfly has a watermelon.","לפרפר יש אבטיח."]],
    para:[["The kangaroo has an umbrella.","לקנגרו יש מטרייה."],["The crocodile has a tomato.","לתנין יש עגבנייה."],["The dinosaur has a helicopter.","לדינוזאור יש מסוק."],["The butterfly is fantastic.","הפרפר נהדר."],["Ben has a watermelon and a potato.","לבן יש אבטיח ותפוח אדמה."],["It is a wonderful calendar.","זה לוח שנה נפלא."]]
  },
  r7:{
    reads:[["a rabbit and a robot","ארנב ורובוט"],["a banana and a window","בננה וחלון"],["a tiger and a kangaroo","נמר וקנגרו"],["Ben has a basket and a balloon.","לבן יש סל ובלון."],["The doctor has a camera.","לרופא יש מצלמה."]],
    para:[["The rabbit has a basket.","לארנב יש סל."],["The robot has a balloon.","לרובוט יש בלון."],["The tiger has a banana.","לנמר יש בננה."],["The kangaroo has an umbrella.","לקנגרו יש מטרייה."],["The doctor is at the hotel.","הרופא במלון."],["It is a wonderful picnic.","זה פיקניק נפלא."]]
  },
  /* ===== עולם 8: אותיות שקטות ומילים מתקדמות ===== */
  kn:{
    reads:[["a knee and a knot","ברך וקשר"],["a wrist and a thumb","שורש כף יד ואגודל"],["Ken can knit and knock.","קן יכול לסרוג ולדפוק."],["Wrap the lamb.","עטוף את הטלה."],["Climb and write.","טפס וכתוב."]],
    para:[["Ken has a knife.","לקן יש סכין."],["Ken can knit a knot.","קן יכול לסרוג קשר."],["Ken can wrap a lamb.","קן יכול לעטוף טלה."],["The lamb has a comb.","לטלה יש מסרק."],["Ken can climb and write.","קן יכול לטפס ולכתוב."],["The wrist is numb.","שורש כף היד קהה."]]
  },
  gh:{
    reads:[["a ghost and a calf","רוח רפאים ועגל"],["a sleigh and a palm","מזחלת וכף יד"],["The calf is calm.","העגל רגוע."],["Ben can weigh the salmon.","בן יכול לשקול את הסלמון."],["The ghost has an almond.","לרוח הרפאים יש שקד."]],
    para:[["The ghost has a calf.","לרוח הרפאים יש עגל."],["The calf is calm.","העגל רגוע."],["The ghost can weigh the almond.","רוח הרפאים יכולה לשקול את השקד."],["The sleigh has a salmon.","במזחלת יש סלמון."],["It is half an hour.","זה חצי שעה."],["The ghost is honest.","רוח הרפאים כנה."]]
  },
  ph:{
    reads:[["a dolphin and a trophy","דולפין וגביע"],["a photo and a graph","תמונה וגרף"],["a phrase and an alphabet","ביטוי ואלפבית"],["The dolphin can laugh.","הדולפין יכול לצחוק."],["Ben has a phantom and a pamphlet.","לבן יש רוח רפאים ועלון."]],
    para:[["The dolphin has a trophy.","לדולפין יש גביע."],["The trophy is tough.","הגביע קשוח."],["The graph is rough.","הגרף מחוספס."],["Ben has a photo of the dolphin.","לבן יש תמונה של הדולפין."],["The phrase is enough.","הביטוי מספיק."],["Phew!","אוף, איזו הקלה!"]]
  },
  ea2:{
    reads:[["bread and a feather","לחם ונוצה"],["a heavy head","ראש כבד"],["Ben is ready.","בן מוכן."],["The leather is heavy.","העור כבד."],["Health and wealth.","בריאות ועושר."]],
    para:[["Ben has bread.","לבן יש לחם."],["The bread is heavy.","הלחם כבד."],["Ben is ready.","בן מוכן."],["Ben has a feather and a thread.","לבן יש נוצה וחוט."],["The leather is heavy.","העור כבד."],["Ben has health instead of wealth.","לבן יש בריאות במקום עושר."]]
  },
  wa:{
    reads:[["a swan and a wasp","ברבור וצרעה"],["a wallet and a watch","ארנק ושעון"],["water and a swamp","מים וביצה"],["Ben can wash the watch.","בן יכול לשטוף את השעון."],["The worm is the worst.","התולעת היא הגרועה ביותר."]],
    para:[["The swan is in the water.","הברבור במים."],["The wasp is in the swamp.","הצרעה בביצה."],["Ben has a wallet and a watch.","לבן יש ארנק ושעון."],["Ben can wash the wallet.","בן יכול לשטוף את הארנק."],["The worm is worse.","התולעת גרועה יותר."],["Ben wants a wand.","בן רוצה שרביט."]]
  },
  ture:{
    reads:[["a picture and a package","תמונה וחבילה"],["a message and a village","הודעה וכפר"],["nature and culture","טבע ותרבות"],["Ben has a lecture and a picture.","לבן יש הרצאה ותמונה."],["The creature has luggage.","ליצור יש מזוודות."]],
    para:[["The picture is in the package.","התמונה בחבילה."],["The message is in the garbage.","ההודעה בזבל."],["Ben has a lecture on nature.","לבן יש הרצאה על טבע."],["The village has culture.","בכפר יש תרבות."],["The creature has luggage.","ליצור יש מזוודות."],["The future is a picture.","העתיד הוא תמונה."]]
  },
  tion:{
    reads:[["a station and a nation","תחנה ואומה"],["an action and a question","פעולה ושאלה"],["a portion and a section","מנה וחלק"],["Ben has a mission.","לבן יש משימה."],["The vacation has tension.","בחופשה יש מתח."]],
    para:[["The station has a question.","לתחנה יש שאלה."],["The nation has a mission.","לאומה יש משימה."],["Ben has a vacation.","לבן יש חופשה."],["The vacation has action.","בחופשה יש פעולה."],["The portion is a section.","המנה היא חלק."],["The television has fiction.","בטלוויזיה יש בדיון."]]
  },
  r8:{
    reads:[["a dolphin and a trophy","דולפין וגביע"],["a station and a picture","תחנה ותמונה"],["a knee and a wrist","ברך ושורש כף יד"],["The calf is calm.","העגל רגוע."],["Ben has bread and water.","לבן יש לחם ומים."]],
    para:[["Ken has a knife.","לקן יש סכין."],["The ghost has a trophy.","לרוח הרפאים יש גביע."],["The dolphin has a picture.","לדולפין יש תמונה."],["The station has a question.","לתחנה יש שאלה."],["Ben has bread and water.","לבן יש לחם ומים."],["The calf is calm.","העגל רגוע."]]
  }
});

/* הסרת "Mom" ו"איתו" מתחנות שאינן תחנת התנועות הקצרות (שם Mom היא מילה של התחנה) - שלב "מילים שזוכרים 1" */
Object.assign(window.SENT_REWRITE, {
  heart1:{
    reads:[["a cup of hot milk","כוס חלב חם"],["They are in the tent.","הם באוהל."],["What do you have?","מה יש לך?"],["Your hat was wet.","הכובע שלך היה רטוב."],["Beth said: Get in bed!","בת׳ אמרה: תיכנס למיטה!"]],
    para:[["Sam and Pam have a dog.","לסאם ולפאם יש כלב."],["The dog was in the pond.","הכלב היה בבריכה."],["What a mess!","איזה בלגן!"],["Beth said: Do you have a rag?","בת׳ אמרה: יש לכם סמרטוט?"],["They rub the dog with the rag.","הם משפשפים את הכלב עם הסמרטוט."],["Your dog is not wet, said Beth.","״הכלב שלכם כבר לא רטוב״, אמרה בת׳."]]
  }
});