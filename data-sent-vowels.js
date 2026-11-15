/* משפטים ופסקאות בנויים מחדש לתחנות התנועות הנוספות (15.11.2026): e קסומה (a_e, i_e, o_e, u_e) ו-r וצלילים מיוחדים (ar, or, er, oi, ou, aw, air).
   כל מילה מרכזית מכילה את הצליל של השלב, או צליל מתחנת תנועות קודמת (זוגות תנועות, e קסומה). נשארות רק מילות הדקדוק הקטנות.
   נבדק אוטומטית בסקריפט check_sent.py. תחנות של עיצורים, סיומות, הברות ואותיות שקטות נשארות כפי שהיו: המשפטים שם משתמשים בצליל התחנה ובצלילים מוקדמים. */
Object.assign(window.SENT_REWRITE = window.SENT_REWRITE || {}, {
  /* ===== עולם 3: e קסומה ===== */
  ae:{
    reads:[["a cake on a plate","עוגה על צלחת"],["a lake and a gate","אגם ושער"],["Jake can bake a cake.","ג׳ייק יכול לאפות עוגה."],["Kate is late.","קייט מאחרת."],["Dave can race to the lake.","דייב יכול לרוץ מרוץ אל האגם."]],
    para:[["Jake has a cake.","לג׳ייק יש עוגה."],["The cake is on a plate.","העוגה על צלחת."],["Kate and Jake / race to the lake.","קייט וג׳ייק רצים אל האגם."],["Jake is late.","ג׳ייק מאחר."],["Kate can wave.","קייט יכולה לנופף."],["The cake is safe!","העוגה בטוחה!"]]
  },
  ie:{
    reads:[["a bike by the line","אופניים ליד הקו"],["a white kite","עפיפון לבן"],["Mike can ride a bike.","מייק יכול לרכוב על אופניים."],["The time is five.","השעה חמש."],["Mike can hide the kite.","מייק יכול להסתיר את העפיפון."]],
    para:[["Mike has a kite.","למייק יש עפיפון."],["The kite is white.","העפיפון לבן."],["Mike can ride a bike / to the lake.","מייק יכול לרכוב על אופניים אל האגם."],["The kite is high.","העפיפון גבוה."],["Mike likes the kite.","מייק אוהב את העפיפון."],["It is a nice time!","זה זמן נעים!"]]
  },
  oe:{
    reads:[["a bone and a rope","עצם וחבל"],["a rose in a vase","ורד באגרטל"],["Joe can note the code.","ג׳ו יכול לרשום את הקוד."],["Jo hopes for a cake.","ג׳ו מקווה לעוגה."],["The stone is at home.","האבן בבית."]],
    para:[["Joe has a bone.","לג׳ו יש עצם."],["The bone is at home.","העצם בבית."],["A mole is in a hole.","חפרפרת בתוך חור."],["The mole sees the bone.","החפרפרת רואה את העצם."],["Joe hopes / the bone is safe.","ג׳ו מקווה שהעצם בטוחה."],["The bone is Joe's!","העצם של ג׳ו!"]]
  },
  ue:{
    reads:[["a cube and a tube","קובייה וצינור"],["a cute mule","פרד חמוד"],["Pete can use the flute.","פיט יכול להשתמש בחליל."],["These are huge.","אלה ענקיים."],["Luke can tune the flute.","לוק יכול לכוון את החליל."]],
    para:[["Pete has a flute.","לפיט יש חליל."],["The flute is cute.","החליל חמוד."],["Pete can tune the flute.","פיט יכול לכוון את החליל."],["Luke can use the flute.","לוק יכול להשתמש בחליל."],["These tunes are neat.","המנגינות האלה מסודרות."],["A cute tune!","מנגינה חמודה!"]]
  },
  r3:{
    reads:[["a cake and a kite","עוגה ועפיפון"],["a rose and a cube","ורד וקובייה"],["Jake can bake a cake.","ג׳ייק יכול לאפות עוגה."],["Mike can ride a bike.","מייק יכול לרכוב על אופניים."],["Pete can use a flute.","פיט יכול להשתמש בחליל."]],
    para:[["Jake and Mike go to the lake.","ג׳ייק ומייק הולכים אל האגם."],["Jake can bake a cake.","ג׳ייק יכול לאפות עוגה."],["Mike has a kite.","למייק יש עפיפון."],["Pete has a flute.","לפיט יש חליל."],["The kite is high.","העפיפון גבוה."],["It is a nice time!","זה זמן נעים!"]]
  },
  /* ===== עולם 5: r וצלילים מיוחדים ===== */
  ar:{
    reads:[["a car in the yard","מכונית בחצר"],["a dark barn","אסם חשוך"],["Mark can park the car.","מארק יכול להחנות את המכונית."],["The shark is far.","הכריש רחוק."],["Carl can start the cart.","קארל יכול להניע את העגלה."]],
    para:[["Mark has a farm.","למארק יש חווה."],["The farm has a barn.","בחווה יש אסם."],["A cart is in the yard.","עגלה בחצר."],["Mark and Carl start the cart.","מארק וקארל מניעים את העגלה."],["The cart can go far.","העגלה יכולה להגיע רחוק."],["It is a smart farm!","זו חווה חכמה!"]]
  },
  or:{
    reads:[["a fork and a horn","מזלג וקרן"],["a short storm","סערה קצרה"],["Norm can sort the corn.","נורם יכול למיין את התירס."],["The horse is on the porch.","הסוס על המרפסת."],["The forest is north.","היער בצפון."]],
    para:[["Norm has a horse.","לנורם יש סוס."],["The horse is in the barn.","הסוס באסם."],["A storm is in the north.","סערה בצפון."],["The storm is short.","הסערה קצרה."],["Norm and the horse / go to the forest.","נורם והסוס הולכים אל היער."],["Norm sorts the corn.","נורם ממיין את התירס."]]
  },
  er:{
    reads:[["a bird on a perch","ציפור על מוט"],["a girl in a skirt","ילדה בחצאית"],["The nurse has a purse.","לאחות יש ארנק."],["The bird can chirp.","הציפור יכולה לצייץ."],["Kurt can stir the corn.","קורט יכול לערבב את התירס."]],
    para:[["A girl has a bird.","לילדה יש ציפור."],["The bird can chirp.","הציפור יכולה לצייץ."],["The girl has a skirt.","לילדה יש חצאית."],["The bird perches on her arm.","הציפור מתיישבת על זרועה."],["The girl feeds the bird corn.","הילדה מאכילה את הציפור בתירס."],["The girl and the bird / are smart!","הילדה והציפור חכמות!"]]
  },
  oi:{
    reads:[["a coin in the soil","מטבע באדמה"],["a boy and a toy","ילד וצעצוע"],["Roy can join the team.","רוי יכול להצטרף לקבוצה."],["Joy can enjoy the toy.","ג׳וי יכולה ליהנות מהצעצוע."],["The oil boils.","השמן רותח."]],
    para:[["Roy has a coin.","לרוי יש מטבע."],["The coin is in the soil.","המטבע באדמה."],["Joy can point to the coin.","ג׳וי יכולה להצביע על המטבע."],["Roy and Joy join in.","רוי וג׳וי מצטרפים."],["They enjoy the toy boat.","הם נהנים מסירת הצעצוע."],["It is a joy!","זו שמחה!"]]
  },
  ou:{
    reads:[["a cow in a house","פרה בבית"],["a brown mouse","עכבר חום"],["The owl can howl.","הינשוף יכול לייל."],["The clown is loud.","הליצן רועש."],["The crown is round.","הכתר עגול."]],
    para:[["An owl is in the house.","ינשוף בבית."],["A mouse is in the house.","עכבר בבית."],["The owl can howl.","הינשוף יכול לייל."],["The noise is loud.","הרעש חזק."],["The owl sees the mouse.","הינשוף רואה את העכבר."],["The mouse goes out now!","העכבר יוצא עכשיו!"]]
  },
  aw:{
    reads:[["a claw on the lawn","טופר על הדשא"],["a small hawk","נץ קטן"],["Paul can draw a paw.","פול יכול לצייר כף רגל של חיה."],["The wall is tall.","הקיר גבוה."],["Paul can talk.","פול יכול לדבר."]],
    para:[["Paul sees a hawk.","פול רואה נץ."],["The hawk is on the wall.","הנץ על הקיר."],["The wall is tall.","הקיר גבוה."],["Paul can draw the hawk.","פול יכול לצייר את הנץ."],["The hawk has a claw.","לנץ יש טופר."],["Paul can talk to the hawk.","פול יכול לדבר עם הנץ."]]
  },
  air:{
    reads:[["a pair of chairs","זוג כיסאות"],["a bear in the air","דוב באוויר"],["Clare can share a pear.","קלייר יכולה לחלוק אגס."],["The hare is rare.","הארנבת נדירה."],["Clare can care for the bear.","קלייר יכולה לטפל בדוב."]],
    para:[["Clare has a bear.","לקלייר יש דוב."],["The bear has a chair.","לדוב יש כיסא."],["Clare and the bear / share a pear.","קלייר והדוב חולקים אגס."],["The bear can stare.","הדוב יכול לבהות."],["Clare can care for the bear.","קלייר יכולה לטפל בדוב."],["A rare pair!","זוג נדיר!"]]
  },
  r5:{
    reads:[["a car and a horse","מכונית וסוס"],["a bird in the yard","ציפור בחצר"],["Roy can count the corn.","רוי יכול לספור את התירס."],["The owl is on the wall.","הינשוף על הקיר."],["Clare can share the pear.","קלייר יכולה לחלוק את האגס."]],
    para:[["Mark and Clare go to the farm.","מארק וקלייר הולכים אל החווה."],["A horse is in the barn.","סוס באסם."],["A cow is in the yard.","פרה בחצר."],["A bird is on the wall.","ציפור על הקיר."],["Roy has a coin.","לרוי יש מטבע."],["Clare and Mark share a pear.","קלייר ומארק חולקים אגס."]]
  }
});
