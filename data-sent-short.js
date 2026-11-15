/* משפטים ופסקאות בנויים מחדש לתחנות של תנועות קצרות, צמדי עיצורים וצירופי עיצורים (15.11.2026).
   כל מילה מרכזית במשפט היא מילה של הצליל של השלב עצמו (כולל שמות עם אותו צליל, כמו Shep או Hank); נשארות רק מילות הדקדוק הקטנות.
   נבדק אוטומטית בסקריפט check_sent_strict.py. */
Object.assign(window.SENT_REWRITE = window.SENT_REWRITE || {}, {
  /* ===== עולם 0: תנועות קצרות ===== */
  a:{
    reads:[["a fat cat","חתול שמן"],["a bad rat","עכברוש רע"],["Sam has a hat.","לסם יש כובע."],["Dad can tap a pan.","אבא יכול להקיש על מחבת."],["Pam and Dan ran at a van.","פאם ודן רצו אל טנדר."]],
    para:[["Sam has a cat.","לסם יש חתול."],["The cat sat on a mat.","החתול ישב על שטיחון."],["The cat is fat and sad.","החתול שמן ועצוב."],["Pam has a pan and a bag.","לפאם יש מחבת ותיק."],["Sam and Pam pat the cat.","סם ופאם מלטפים את החתול."],["The cat naps on a bag.","החתול נם על תיק."]]
  },
  e:{
    reads:[["a red hen","תרנגולת אדומה"],["ten wet men","עשרה גברים רטובים"],["Ben has a pen.","לבן יש עט."],["Meg can set the net.","מג יכולה להניח את הרשת."],["Ted and Jen let the hen get wet.","טד וג׳ן נתנו לתרנגולת להירטב."]],
    para:[["Meg has a hen.","למג יש תרנגולת."],["The hen is on ten eggs.","התרנגולת על עשר ביצים."],["Ben and Ted get a net.","בן וטד מביאים רשת."],["The hen gets wet.","התרנגולת נרטבת."],["Jen lets the hen rest.","ג׳ן נותנת לתרנגולת לנוח."],["The hen is well.","התרנגולת בריאה."]]
  },
  i:{
    reads:[["a big pig","חזיר גדול"],["six kids in wigs","שישה ילדים בפאות"],["Jim can zip a kit.","ג׳ים יכול לרכוס ערכה."],["Tim did dig.","טים חפר."],["Kim and Bill dip a fig.","קים וביל טובלים תאנה."]],
    para:[["Jim has a big pig.","לג׳ים יש חזיר גדול."],["The pig is in a pit.","החזיר בתוך בור."],["Kim and Jim dig in the pit.","קים וג׳ים חופרים בבור."],["The pig did win!","החזיר ניצח!"],["Tim has a wig and a kit.","לטים יש פאה וערכה."],["The pig is a hit!","החזיר הוא להיט!"]]
  },
  o:{
    reads:[["a hot pot","סיר חם"],["a dog on a log","כלב על בול עץ"],["Bob can mop.","בוב יכול לשטוף."],["Tom and Don hop on top.","טום ודון קופצים למעלה."],["The fox got a job.","השועל קיבל עבודה."]],
    para:[["Bob has a dog.","לבוב יש כלב."],["The dog hops on a log.","הכלב קופץ על בול עץ."],["Bob has a hot pot.","לבוב יש סיר חם."],["The dog got on top.","הכלב עלה למעלה."],["Tom and Bob mop the box.","טום ובוב שוטפים את הקופסה."],["The fox is not on the log.","השועל לא על בול העץ."]]
  },
  u:{
    reads:[["a bug in a cup","חרק בכוס"],["a bus in the mud","אוטובוס בבוץ"],["Gus can run.","גאס יכול לרוץ."],["Russ has a bun.","לראס יש לחמנייה."],["The cub can hug a pup.","הגור יכול לחבק גור כלבים."]],
    para:[["Gus has a pup.","לגאס יש גור."],["The pup runs in the sun.","הגור רץ בשמש."],["The pup jumps in the mud.","הגור קופץ בבוץ."],["Gus has a tub.","לגאס יש אמבט."],["Gus and the pup hug.","גאס והגור מתחבקים."],["The pup is up!","הגור על הרגליים!"]]
  },
  r1:{
    reads:[["a cat and a pig","חתול וחזיר"],["a red hen and a dog","תרנגולת אדומה וכלב"],["Sam can sit on a bus.","סם יכול לשבת על אוטובוס."],["Meg has a big hat.","למג יש כובע גדול."],["Bob and Tim run in the sun.","בוב וטים רצים בשמש."]],
    para:[["Sam and Meg get a pet.","סם ומג מקבלים חיית מחמד."],["The pet is a dog.","חיית המחמד היא כלב."],["The dog can run and hop.","הכלב יכול לרוץ ולקפוץ."],["Tim has a big bun.","לטים יש לחמנייה גדולה."],["The dog gets the bun.","הכלב מקבל את הלחמנייה."],["The dog is not sad.","הכלב לא עצוב."]]
  },
  /* ===== עולם 1: צמדי עיצורים ===== */
  ff:{
    reads:[["a bell on a hill","פעמון על גבעה"],["a doll and a puff","בובה ונפיחה"],["Bill will tell Jill.","ביל יספר לג׳יל."],["The boss can sell a doll.","הבוס יכול למכור בובה."],["Jill will fill the well.","ג׳יל תמלא את הבאר."]],
    para:[["Bill has a bell.","לביל יש פעמון."],["The bell is off.","הפעמון כבוי."],["Bill will sell the bell.","ביל ימכור את הפעמון."],["Jill will miss the bell.","ג׳יל תתגעגע לפעמון."],["Bill will kiss Jill.","ביל ינשק את ג׳יל."],["Well, well, well!","טוב, טוב, טוב!"]]
  },
  ck:{
    reads:[["a duck on a rock","ברווז על סלע"],["a sock and a sack","גרב ושק"],["Rick can kick a sack.","ריק יכול לבעוט בשק."],["Nick can pick a tack.","ניק יכול להרים סיכה."],["The duck has a neck.","לברווז יש צוואר."]],
    para:[["Rick has a duck.","לריק יש ברווז."],["The duck is on a rock.","הברווז על סלע."],["The duck can peck.","הברווז יכול לנקר."],["Rick can kick a sack.","ריק יכול לבעוט בשק."],["The duck has a sock.","לברווז יש גרב."],["Luck, luck, luck!","מזל, מזל, מזל!"]]
  },
  sh:{
    reads:[["a fish in a dish","דג בצלחת"],["a shop and a shed","חנות וסככה"],["Shep can shut the shed.","שפ יכול לסגור את הסככה."],["Josh can wish.","ג׳וש יכול לבקש משאלה."],["The shop has a shell.","בחנות יש צדף."]],
    para:[["Shep has a fish.","לשפ יש דג."],["The fish is in a dish.","הדג בתוך צלחת."],["Shep has a shop.","לשפ יש חנות."],["The shop has a shelf.","בחנות יש מדף."],["Shep can rush to the shop.","שפ יכול למהר אל החנות."],["Shep shuts the shop.","שפ סוגר את החנות."]]
  },
  ch:{
    reads:[["a chick on a bench","אפרוח על ספסל"],["a chip and a chop","צ׳יפס וצלי"],["Chad can chat.","צ׳אד יכול לשוחח."],["Chuck has such a lunch.","לצ׳אק יש ארוחת צהריים כזאת."],["The rich witch has a patch.","למכשפה העשירה יש טלאי."]],
    para:[["Chad has a chick.","לצ׳אד יש אפרוח."],["The chick is on a bench.","האפרוח על ספסל."],["Chad has a lunch.","לצ׳אד יש ארוחת צהריים."],["The chick can munch.","האפרוח יכול ללעוס."],["Chad and the chick chat.","צ׳אד והאפרוח משוחחים."],["Such a rich lunch!","איזו ארוחת צהריים עשירה!"]]
  },
  th:{
    reads:[["a thin moth","עש דק"],["a bath and a path","אמבטיה ושביל"],["That thing is thin.","הדבר הזה דק."],["Seth is in the bath.","סת' באמבטיה."],["Then Beth has math.","ואז לבת' יש חשבון."]],
    para:[["Seth has a moth.","לסת' יש עש."],["The moth is thin.","העש דק."],["The moth is on the path.","העש על השביל."],["Then Seth has a bath.","ואז סת' מתרחץ."],["Beth is with Seth.","בת' עם סת'."],["That is the thing!","זה הדבר!"]]
  },
  ng:{
    reads:[["a ring and a king","טבעת ומלך"],["a long song","שיר ארוך"],["The king can sing.","המלך יכול לשיר."],["Hank can hang the wing.","הנק יכול לתלות את הכנף."],["Thank the king.","תודה למלך."]],
    para:[["The king has a ring.","למלך יש טבעת."],["The king can sing a song.","המלך יכול לשיר שיר."],["The song is long.","השיר ארוך."],["Hank can bang a gong.","הנק יכול להכות בגונג."],["The king can thank Hank.","המלך יכול להודות להנק."],["Ding, dong, ding!","דינג, דונג, דינג!"]]
  },
  r2:{
    reads:[["a fish on a rock","דג על סלע"],["a king and a duck","מלך וברווז"],["Chad can sing.","צ׳אד יכול לשיר."],["Shep has a bell.","לשפ יש פעמון."],["Beth will tell Jill.","בת' תספר לג׳יל."]],
    para:[["Shep and Chad go to the shop.","שפ וצ׳אד הולכים לחנות."],["Shep has a bell.","לשפ יש פעמון."],["Chad has a ring.","לצ׳אד יש טבעת."],["A duck is on the bench.","ברווז על הספסל."],["Beth and Jill sing a song.","בת' וג׳יל שרות שיר."],["The king has a thick lunch.","למלך יש ארוחת צהריים עבה."]]
  },
  /* ===== עולם 2: צירופי עיצורים ===== */
  bl1:{
    reads:[["a frog on a flag","צפרדע על דגל"],["a crab and a drum","סרטן ותוף"],["Fred can clap and swim.","פרד יכול למחוא כפיים ולשחות."],["Brad has a plan.","לברד יש תוכנית."],["The frog can step and skip.","הצפרדע יכולה לצעוד ולדלג."]],
    para:[["Fred has a frog.","לפרד יש צפרדע."],["The frog can swim.","הצפרדע יכולה לשחות."],["The frog is on a flag.","הצפרדע על דגל."],["Brad can clap and stop.","בראד יכול למחוא כפיים ולעצור."],["The frog can trip a crab.","הצפרדע יכולה להכשיל סרטן."],["Fred and Brad grin.","פרד וברד מחייכים."]]
  },
  bl2:{
    reads:[["a tent and a lamp","אוהל ומנורה"],["a nest in the sand","קן בחול"],["Hank can jump and bend.","הנק יכול לקפוץ ולכופף."],["The best camp has a pond.","במחנה הטוב ביותר יש בריכה."],["Kent has a gift.","לקנט יש מתנה."]],
    para:[["Kent has a tent.","לקנט יש אוהל."],["The tent is on the sand.","האוהל על החול."],["Kent has a lamp.","לקנט יש מנורה."],["Kent can jump in the pond.","קנט יכול לקפוץ לבריכה."],["A nest is in the tent.","קן בתוך האוהל."],["It is the best camp!","זה המחנה הכי טוב!"]]
  },
  bl3:{
    reads:[["a strap and a string","רצועה וחוט"],["a splash and a scrap","ניתז ופסולת"],["Stan can strum.","סטן יכול לפרוט."],["Scrub the scrap.","שפשף את הפסולת."],["A shrimp can sprint.","שרימפס יכול לרוץ מהר."]],
    para:[["Stan has a string.","לסטן יש חוט."],["The string is on a strap.","החוט על רצועה."],["Stan can strum the string.","סטן יכול לפרוט על החוט."],["A shrimp can splash.","שרימפס יכול להתיז."],["The splash is strong.","ההתזה חזקה."],["Stan can sprint!","סטן יכול לרוץ מהר!"]]
  },
  s:{
    reads:[["cats and dogs","חתולים וכלבים"],["pigs and hens","חזירים ותרנגולות"],["Ken runs and Meg jumps.","קן רץ ומג קופצת."],["Ben sits and Jen naps.","בן יושב וג׳ן נמה."],["Gus hugs the pups.","גאס מחבק את הגורים."]],
    para:[["Pam has hats.","לפאם יש כובעים."],["Ken has cups.","לקן יש כוסות."],["Meg has dogs and cats.","למג יש כלבים וחתולים."],["Ben runs.","בן רץ."],["Jen jumps.","ג׳ן קופצת."],["Gus hugs the pups.","גאס מחבק את הגורים."]]
  },
  r2b:{
    reads:[["a tent and a flag","אוהל ודגל"],["a frog in a pond","צפרדע בבריכה"],["Fred can jump.","פרד יכול לקפוץ."],["Kent has a lamp.","לקנט יש מנורה."],["Stan can swim in the pond.","סטן יכול לשחות בבריכה."]],
    para:[["Fred and Stan go to a camp.","פרד וסטן הולכים למחנה."],["Fred has a tent.","לפרד יש אוהל."],["Stan has a lamp.","לסטן יש מנורה."],["A frog is in the pond.","צפרדע בבריכה."],["Fred can jump and swim.","פרד יכול לקפוץ ולשחות."],["It is the best camp!","זה המחנה הכי טוב!"]]
  },
  /* ===== עולם 3: c ו-g רכות, y בסוף מילה ארוכה ===== */
  cg:{
    reads:[["a cage and a gem","כלוב ואבן חן"],["rice and mice","אורז ועכברים"],["The city has a nice fence.","בעיר יש גדר נחמדה."],["The judge can dance.","השופט יכול לרקוד."],["A huge face!","פנים ענקיות!"]],
    para:[["Grace has mice.","לגרייס יש עכברים."],["The mice are in a cage.","העכברים בתוך כלוב."],["The mice race in the cage.","העכברים רצים בכלוב."],["Grace has rice.","לגרייס יש אורז."],["The mice dance.","העכברים רוקדים."],["It is a nice city!","זו עיר נחמדה!"]]
  },
  y2:{
    reads:[["a happy bunny","ארנבון שמח"],["a funny puppy","גור מצחיק"],["The baby is lucky.","התינוק בר מזל."],["The candy is yummy.","הממתק טעים."],["The messy puppy has a tummy.","לגור המבולגן יש בטן."]],
    para:[["A bunny is happy.","ארנבון שמח."],["The bunny has a daisy.","לארנבון יש חרצית."],["The daisy is pretty.","החרצית יפה."],["The bunny has candy.","לארנבון יש ממתק."],["The candy is yummy.","הממתק טעים."],["The bunny is funny!","הארנבון מצחיק!"]]
  }
});
