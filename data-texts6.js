/* טקסטים לשתי תחנות התנועות (15.11.2026), בנויים מחדש כך שכל מילה מרכזית מכילה צמד תנועות שהתחנה מלמדת:
   1. שמונת הטקסטים של "שתי אותיות תנועה" (w=4) נכתבו מחדש (אותם מזהים, אותו סוג). קודם היו בהם מילים כמו into, Mom, made, ran.
   2. שישה טקסטים חדשים ל"זוגות תנועות" (w=0.5), שלא היו בה טקסטים בכלל.
   נשארו רק מילות הדקדוק הכי קטנות (the, a, is, in, on, at, to, it, I, we, can, has...). נבדק אוטומטית בסקריפט check_texts_pairs.js. */
(function(){
  const REPL = ["w4a","w4b","w4c","w4d","w4e","b4a","b4b","b4c"];
  const NEW = [
{id:"w4a",w:4,type:"story",t:"The Boat in the Rain",he:"הסירה בגשם",
 gl:{sail:"להפליג",steer:"לנווט",afloat:"צף",reach:"להגיע"},
 s:[
  ["Jean and Dean / own a boat.","לג׳ין ולדין יש סירה."],
  ["They sail / on the bay / each day.","הם מפליגים במפרץ בכל יום."],
  ["Today / is a gray day.","היום הוא יום אפור.",["What is the weather like?",["Rainy and gray","Hot and sunny","Cold and snowy"],0]],
  ["Rain, / rain, / rain!","גשם, גשם, גשם!"],
  ["The rain / is on the boat.","הגשם על הסירה."],
  ["Dean can steer / the boat / to the beach.","דין יכול לנווט את הסירה אל החוף."],
  ["Jean can keep / the boat / afloat.","ג׳ין יכולה לשמור על הסירה צפה.",["What does 'afloat' mean?",["on top of the water","under the water","on the road"],0]],
  ["They reach / the beach / and eat a meal.","הם מגיעים לחוף ואוכלים ארוחה."]
 ],
 q:[["רעיון","What is the story about?",["Two friends sail in the rain","A goat on a road","A pie at night"],0],["פרט","Who can steer the boat?",["Dean","Jean","The seal"],0],["פרט","Where do they eat?",["On the beach","In the boat","In a jeep"],0]]},
{id:"w4b",w:4,type:"diary",t:"A Week at the Beach",he:"שבוע בחוף",
 gl:{float:"לצוף",deep:"עמוק",teach:"ללמד",dream:"לחלום"},
 s:[
  ["Day 1: / Lee and Pete / reach the beach.","יום 1: לי ופיט מגיעים לחוף."],
  ["Day 2: / we eat meat / and peaches.","יום 2: אנחנו אוכלים בשר ואפרסקים."],
  ["Day 3: / we float / in the sea.","יום 3: אנחנו צפים בים."],
  ["Day 4: / rain! / We stay / and read.","יום 4: גשם! אנחנו נשארים וקוראים.",["What do they do on day 4?",["They stay and read","They sail a boat","They eat a pie"],0]],
  ["Day 5: / the sea is deep / and cool.","יום 5: הים עמוק וקריר."],
  ["Day 6: / Pete can teach Lee / to row a boat.","יום 6: פיט יכול ללמד את לי לחתור בסירה."],
  ["Day 7: / we leave the beach / and we dream / of the sea.","יום 7: אנחנו עוזבים את החוף וחולמים על הים."]
 ],
 q:[["פרט","Who teaches Lee to row?",["Pete","Dean","Jean"],0],["מילה","'deep' means...",["far down","very hot","very small"],0],["רעיון","What is the diary about?",["A week at the beach","A trip to the zoo","A day in the rain"],0]]},
{id:"w4c",w:4,type:"info",t:"Bees",he:"דבורים",
 gl:{seek:"לחפש",queen:"מלכה",team:"קבוצה",neat:"מסודר"},
 s:[
  ["Bees / seek sweet / flowers.","דבורים מחפשות פרחים מתוקים."],
  ["A bee / can reach / a flower / in the deep green leaves.","דבורה יכולה להגיע לפרח בין העלים הירוקים העמוקים."],
  ["The bee / feeds / on the sweet food / each day.","הדבורה ניזונה מהאוכל המתוק בכל יום."],
  ["A queen bee / keeps / the team.","מלכת הדבורים מנהיגה את הקבוצה.",["Who keeps the team?",["The queen bee","The deer","The crow"],0]],
  ["The team / feeds / the queen.","הקבוצה מאכילה את המלכה."],
  ["Bees / are neat, / and they keep / the team / clean.","דבורים הן מסודרות והן שומרות על הקבוצה נקייה."],
  ["We need / bees / for the flowers / and the trees.","אנחנו צריכים דבורים בשביל הפרחים והעצים."]
 ],
 q:[["רעיון","Why do we need bees?",["They help flowers and trees","They make rain","They cook meals"],0],["פרט","What do bees seek?",["Sweet flowers","Boats","Coats"],0],["מילה","'team' means...",["a group that works together","a kind of tree","a sweet food"],0]]},
{id:"w4d",w:4,type:"ad",t:"Free Boat Days!",he:"ימי שיט בחינם!",
 gl:{free:"בחינם",seat:"מושב",team:"קבוצה",noon:"צהריים"},
 s:[
  ["Free boat days!","ימי שיט בחינם!"],
  ["Meet Dean and Joan / at the beach.","היפגשו עם דין וג׳ואן בחוף."],
  ["Each boat / has a seat / for each team.","בכל סירה יש מושב לכל קבוצה."],
  ["We sail / each day / in May.","אנחנו מפליגים בכל יום במאי.",["When do they sail?",["Each day in May","Each night in June","On Sunday"],0]],
  ["Keep a coat / in the boat, / for the sea / is cool.","שמרו מעיל בסירה, כי הים קריר."],
  ["Eat a meal / on the beach / at noon.","אכלו ארוחה על החוף בצהריים."],
  ["It is free, / so meet / Dean and Joan!","זה בחינם, אז היפגשו עם דין וג׳ואן!"]
 ],
 q:[["פרט","Who do you meet at the beach?",["Dean and Joan","Lee and Pete","Jean and Kay"],0],["פרט","What should you keep in the boat?",["A coat","A pool","A book"],0],["הסקה","Does it cost money?",["No, it is free","Yes, a lot","The ad does not say"],0]]},
{id:"w4e",w:4,type:"talk",t:"Lost in the Night",he:"אבודים בלילה",
 gl:{light:"אור",cool:"רגוע, קריר",bright:"בהיר",might:"אולי"},
 s:[
  ["Dean: / It is night, / and I need a light.","דין: עכשיו לילה, ואני צריך אור."],
  ["Lee: / Keep cool, / Dean.","לי: שמור על קור רוח, דין."],
  ["Dean: / I can not see / the road.","דין: אני לא רואה את הכביש."],
  ["Lee: / I see a light / on the beach.","לי: אני רואה אור על החוף.",["What does Lee see?",["A light on the beach","A goat on the road","A seal in the sea"],0]],
  ["Dean: / It is a boat!","דין: זו סירה!"],
  ["Lee: / The light is bright.","לי: האור בהיר."],
  ["Dean: / We might reach the boat / and eat a meal!","דין: אולי נגיע לסירה ונאכל ארוחה!"],
  ["Lee: / Yay! / A good night!","לי: יי! לילה טוב!"]
 ],
 q:[["רעיון","What is the talk about?",["Two friends see a light at night","Two friends eat a pie","Two friends read a book"],0],["פרט","What do they hope to do?",["Reach the boat and eat","Go to the zoo","Read a book"],0],["מילה","'bright' means...",["full of light","very small","very cold"],0]]},
{id:"b4a",w:4,type:"fable",t:"The Crow and the Peach",he:"העורב והאפרסק",
 gl:{crow:"עורב",weak:"חלש",leap:"לקפוץ",free:"חופשי"},
 s:[
  ["A crow / sees a peach / deep in a tree.","עורב רואה אפרסק עמוק בתוך עץ."],
  ["The peach / is high, / and the crow / is weak.","האפרסק גבוה, והעורב חלש."],
  ["The crow / can not reach / the peach.","העורב לא מגיע לאפרסק."],
  ["A bee / sees the crow / and cheers: / Keep at it!","דבורה רואה את העורב ומעודדת: תמשיך!",["What does the bee cheer?",["Keep at it!","Go away!","Eat a pie!"],0]],
  ["The crow / leaps, / and leaps, / and leaps.","העורב קופץ, וקופץ, וקופץ."],
  ["Soon / the peach / is free!","בקרוב האפרסק חופשי!"],
  ["The crow / and the bee / eat the peach / and feel good.","העורב והדבורה אוכלים את האפרסק ומרגישים טוב."]
 ],
 q:[["רעיון","What is the lesson of the fable?",["Keep trying and you can reach your goal","Peaches are sweet","Bees are weak"],0],["פרט","Who helps the crow?",["A bee","A deer","A seal"],0],["מילה","'weak' means...",["not strong","not sweet","not free"],0]]},
{id:"b4b",w:4,type:"science",t:"Seeds on the Go",he:"זרעים בדרכים",
 gl:{breeze:"משב רוח",meadow:"אחו",grow:"לצמוח",float:"לצוף"},
 s:[
  ["A seed / can not leap.","זרע לא יכול לקפוץ."],
  ["The seeds / float / on the sea.","הזרעים צפים על הים."],
  ["A neat seed / can sail / on the breeze.","זרע מסודר יכול להפליג ברוח.",["How can a seed travel?",["On the sea or the breeze","By boat","By jeep"],0]],
  ["A deer / may eat / a peach / and keep the seed.","אייל עשוי לאכול אפרסק ולשמור את הגרעין."],
  ["The deer / leaves / the seed / in the meadow.","האייל משאיר את הגרעין באחו."],
  ["Rain / feeds / the seed.","הגשם מזין את הזרע."],
  ["Soon, / a green leaf / and a tree / can grow.","בקרוב עלה ירוק ועץ יכולים לצמוח."]
 ],
 q:[["רעיון","How do seeds travel?",["On the sea, the breeze, and a deer","By plane","By boat only"],0],["פרט","What feeds the seed?",["Rain","Coal","Soap"],0],["מילה","'meadow' means...",["a green field","a deep sea","a tall tree"],0]]},
{id:"b4c",w:4,type:"letter",t:"A Letter to a Pen Pal",he:"מכתב לחברה לעט",
 gl:{sail:"להפליג",peach:"אפרסק",meet:"להיפגש",soon:"בקרוב"},
 s:[
  ["Kay, / it is Jean.","קיי, זו ג׳ין."],
  ["I keep a boat / by the sea.","יש לי סירה ליד הים."],
  ["Each day, / I sail / in the bay.","בכל יום אני מפליגה במפרץ."],
  ["I eat a peach / and read a book.","אני אוכלת אפרסק וקוראת ספר.",["What does Jean do each day?",["Sails, eats a peach, reads","Plays in the rain","Goes to the zoo"],0]],
  ["Meet me / at the beach / in May.","היפגשי איתי בחוף במאי."],
  ["Keep a coat, / for it is cool.","קחי מעיל, כי קריר."],
  ["See you soon, / Jean","נתראה בקרוב, ג׳ין"]
 ],
 q:[["פרט","Where does Jean keep a boat?",["By the sea","In a tree","On a road"],0],["פרט","When should Kay meet Jean?",["In May","In June","At night"],0],["הסקה","Why does Jean say 'Keep a coat'?",["The weather is cool","The beach is hot","It is a gift"],0]]},

/* ===== זוגות תנועות (w=0.5): טקסטים חדשים ===== */
{id:"pt1",w:0.5,type:"story",t:"Jean and the Goat",he:"ג׳ין והעז",
 gl:{goat:"עז",coat:"מעיל",sail:"להפליג",seal:"כלב ים"},
 s:[
  ["Jean has a goat.","לג׳ין יש עז."],
  ["The goat has a coat.","לעז יש מעיל."],
  ["Jean and the goat / sail a boat.","ג׳ין והעז מפליגות בסירה."],
  ["Rain, / rain, / rain!","גשם, גשם, גשם!"],
  ["The goat / can eat a leaf / in the rain.","העז יכולה לאכול עלה בגשם.",["Who has a coat?",["The goat","Jean","The seal"],0]],
  ["Jean sees a seal / on the beach.","ג׳ין רואה כלב ים על החוף."]
 ],
 q:[["רעיון","What is the story about?",["Jean and a goat in a boat","A pie at night","A book in a room"],0],["פרט","What can the goat eat?",["A leaf","A boat","A coat"],0]]},
{id:"pt2",w:0.5,type:"diary",t:"A Day at the Sea",he:"יום בים",
 gl:{peach:"אפרסק",float:"לצוף",deep:"עמוק",neat:"מסודר"},
 s:[
  ["Today / Lee and Dean / go to the sea.","היום לי ודין הולכים לים."],
  ["They eat meat / and peaches / on the beach.","הם אוכלים בשר ואפרסקים על החוף."],
  ["The sea is cool, / and the day is neat.","הים קריר, והיום מסודר."],
  ["They float / on the deep sea.","הם צפים על הים העמוק."],
  ["They see a seal.","הם רואים כלב ים.",["Who do they see?",["A seal","A goat","A jay"],0]],
  ["It is a good day!","זה יום טוב!"]
 ],
 q:[["פרט","Where do Lee and Dean go?",["To the sea","To the zoo","To a room"],0],["פרט","What do they eat?",["Meat and peaches","Pies","Soap"],0]]},
{id:"pt3",w:0.5,type:"note",t:"A Note for Dean",he:"פתק לדין",
 gl:{meet:"להיפגש",beach:"חוף",noon:"צהריים",read:"לקרוא"},
 s:[
  ["Dean, / meet me / at the beach / at noon.","דין, היפגש איתי בחוף בצהריים."],
  ["Keep a coat / and a book.","קח מעיל וספר."],
  ["Tea and peaches / for Dean and Jean.","תה ואפרסקים בשביל דין וג׳ין."],
  ["We can read / and eat / on the beach.","נוכל לקרוא ולאכול על החוף.",["When does Jean meet Dean?",["At noon","At night","In May"],0]],
  ["See you soon, / Jean","נתראה בקרוב, ג׳ין"]
 ],
 q:[["פרט","What should Dean keep?",["A coat and a book","A boat","A goat"],0],["פרט","What is there for Dean and Jean?",["Tea and peaches","Meat and a pie","Soap"],0]]},
{id:"pt4",w:0.5,type:"talk",t:"Lee and Pete",he:"לי ופיט",
 gl:{moon:"ירח",light:"אור",bright:"בהיר",deep:"עמוק"},
 s:[
  ["Lee: / It is night.","לי: עכשיו לילה."],
  ["Pete: / I see a light.","פיט: אני רואה אור."],
  ["Lee: / Is it the moon?","לי: זה הירח?"],
  ["Pete: / It is the moon, / and the sea is deep.","פיט: זה הירח, והים עמוק."],
  ["Lee: / The moon is bright!","לי: הירח בהיר!",["What do they see?",["The moon","A goat","A boat"],0]],
  ["Pete: / A good night!","פיט: לילה טוב!"]
 ],
 q:[["פרט","What do they see?",["The moon","A goat","A boat"],0],["רעיון","Is it day or night?",["Night","Day","Noon"],0]]},
{id:"pt5",w:0.5,type:"info",t:"Seals",he:"כלבי ים",
 gl:{seal:"כלב ים",leap:"לקפוץ",tail:"זנב",feed:"להאכיל"},
 s:[
  ["The seal / is in the sea.","כלב הים נמצא בים."],
  ["It can eat meat, / and it can float.","הוא יכול לאכול בשר, והוא יכול לצוף."],
  ["A seal / can leap / on the beach.","כלב ים יכול לקפוץ על החוף."],
  ["A seal / has a tail / and a neat coat.","לכלב ים יש זנב ופרווה מסודרת.",["What does a seal have?",["A tail and a coat","A boat and a coat","A goal and a road"],0]],
  ["The seal / can see / in the deep sea.","כלב הים יכול לראות בים העמוק."],
  ["We feed / the seal / meat.","אנחנו מאכילים את כלב הים בבשר."]
 ],
 q:[["פרט","What can a seal eat?",["Meat","Soap","A pie"],0],["פרט","Where is the seal?",["In the sea","In a room","In a jeep"],0]]},
{id:"pt6",w:0.5,type:"ad",t:"Boat Days at the Beach",he:"ימי סירה בחוף",
 gl:{sail:"להפליג",free:"בחינם",noon:"צהריים",beach:"חוף"},
 s:[
  ["Boat days / at the beach!","ימי סירה בחוף!"],
  ["Each day / in May, / Joan and Dean / sail.","בכל יום במאי ג׳ואן ודין מפליגים."],
  ["Meet Joan and Dean / at the beach.","היפגשו עם ג׳ואן ודין בחוף."],
  ["Keep a coat, / for the sea is cool.","שמרו מעיל, כי הים קריר.",["When do Joan and Dean sail?",["Each day in May","At night","In a pool"],0]],
  ["Eat a meal / on the beach / at noon.","אכלו ארוחה על החוף בצהריים."],
  ["It is free!","זה בחינם!"]
 ],
 q:[["פרט","What should you keep?",["A coat","A pie","A goat"],0],["הסקה","Is it free?",["Yes","No","Only at night"],0]]}
  ];
  window.TEXTS = (window.TEXTS||[]).filter(t=>!REPL.includes(t.id)).concat(NEW);
})();

/* הסרת "Mom" מטקסטים של תחנות e קסומה ו-r (המשפט מוחלף, שאר הטקסט נשאר) */
(function(){
  const fix=(id,i,s)=>{ const t=(window.TEXTS||[]).find(x=>x.id===id); if(t&&t.s[i]){ const old=t.s[i]; t.s[i]=[s[0],s[1]].concat(old.slice(2)); } };
  fix("w3b",4,["The rule / is to / put on a helmet.","הכלל הוא לשים קסדה."]);
  fix("w5a",0,["Carl / lives on a farm / with a herd of cows.","קרל גר בחווה עם עדר פרות."]);
  fix("w5d",1,["Paul: / What toy / do you have / in mind?","פול: איזה צעצוע אתה חושב עליו?"]);
  fix("w5d",3,["Paul: / It costs / twelve coins.","פול: היא עולה שנים עשר מטבעות."]);
  fix("w5d",5,["Paul: / You can choose / a toy / for ten, / or save / and come back / next week.","פול: אתה יכול לבחור צעצוע בעשרה, או לחסוך ולחזור בשבוע הבא."]);
})();