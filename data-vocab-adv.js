/* אוצר המילים של חמש התחנות המתקדמות, בגרסה מורחבת ועם רמה עולה (נבנה ב-15.11.2026).
   כל תחנה: כ-80 מילים, בלי מילים שחוזרות בין תחנות.
   הרמות נבדקו מול רשימות Oxford 3000 ו-Oxford 5000 לפי רמות CEFR (oxfordlearnersdictionaries.com, הורדה מ-github.com/ittuann/The-Oxford-5000-Word-Lists):
   f2 טקסט מסביר: כל 80 המילים B2 לפי Oxford.   f3 בגרות: כל 80 המילים C1 לפי Oxford.   f4 אקדמית: כל 80 המילים C1 לפי Oxford.
   f5 פסיכומטרי: 80 מילים שאינן ברשימת Oxford 5000 (מעל C1, כלומר C2; ל-Oxford אין רשימת C2).
   f1 יום-יום: 70 מילים יומיומיות (B1 ומעלה, או מילים יומיומיות מובהקות שחסרות ב-Oxford).
   נטען אחרי data-advanced.js: חלק מהמילים מהרשימות הישנות נשארות (נלקחות משם עם הפירוש והמשפט שלהן), והשאר חדשות.
   פורמט שורה: מילה | פירוש | משפט דוגמה שהמילה מופיעה בו בדיוק. */
(function(){
  const OLD = {};
  Object.values(window.VOCAB || {}).forEach(L => L.forEach(v => { OLD[v[0]] = v; }));
  const take = s => s.split(/[\s,]+/).filter(Boolean).map(w => { if(!OLD[w]) console.warn("vocab-adv: חסרה מילה ישנה", w); return OLD[w]; }).filter(Boolean);
  const parse = t => t.split("\n").map(l => l.trim()).filter(Boolean).map(l => l.split("|").map(x => x.trim()));

  const F1_NEW = parse(`
landlord|בעל הדירה|The landlord promised to fix the heater by Monday.
tenant|דייר, שוכר|The new tenant moves in on the first of the month.
deposit|פיקדון, מקדמה|We paid a deposit to reserve the apartment.
wardrobe|ארון בגדים|The wardrobe in the bedroom is full of old coats.
appliance|מכשיר חשמלי ביתי|The washing machine is the most useful appliance in our home.
neighborhood|שכונה|It is a quiet neighborhood with a lot of parks.
utilities|חשבונות (חשמל, מים, גז)|The rent includes utilities, so we do not pay extra for water.
renovate|לשפץ|They plan to renovate the kitchen next summer.
lease|חוזה שכירות|I signed a two-year lease on the flat.
leak|נזילה, לדלוף|There is a leak under the kitchen sink.
refund|החזר כספי|I asked for a refund because the shirt was too small.
warranty|אחריות על מוצר|The phone comes with a one-year warranty.
discount|הנחה|Students get a ten percent discount.
budget|תקציב|We have a small budget for the trip.
afford|להרשות לעצמך (כלכלית)|I cannot afford a new car right now.
bargain|מציאה|At that price, the jacket is a real bargain.
purchase|רכישה, לקנות|Keep your receipt as proof of purchase.
deliver|להביא עד הבית, לספק|The store will deliver the sofa on Friday.
cashier|קופאי, קופאית|The cashier asked if I wanted a bag.
invoice|חשבונית|Please send me an invoice for the work.
symptom|תסמין|A sore throat is a common symptom of a cold.
prescription|מרשם|The doctor wrote me a prescription for antibiotics.
injury|פציעה|He missed the match because of a knee injury.
dizzy|סחרחורת, מסוחרר|I felt dizzy when I stood up too fast.
allergic|אלרגי|She is allergic to peanuts.
pharmacy|בית מרקחת|I picked up the medicine at the pharmacy.
recover|להתאושש|It took him a week to recover from the flu.
treatment|טיפול|The treatment is working, and the pain is going away.
reservation|הזמנה (במסעדה, במלון)|I made a reservation for four at eight o'clock.
itinerary|מסלול טיול|Our itinerary includes three days in Rome.
baggage|כבודה, מזוודות|My baggage was lost at the airport.
delay|עיכוב, לעכב|There is a two-hour delay because of the storm.
departure|יציאה, המראה|The departure time is written on your ticket.
destination|יעד|Our final destination is a small island.
commute|לנסוע לעבודה, נסיעה יומית|My daily commute takes almost an hour.
accommodation|מקום לינה|The price includes accommodation and breakfast.
souvenir|מזכרת|I bought a small souvenir for my sister.
customs|מכס|We went through customs without any problem.
colleague|עמית לעבודה|My colleague helped me finish the report.
deadline|מועד אחרון להגשה|The deadline for the project is Friday.
salary|משכורת|He asked for a higher salary.
interview|ראיון עבודה|I have a job interview tomorrow morning.
resign|להתפטר|She decided to resign and start her own business.
promotion|קידום בעבודה|After two years, he got a promotion.
attend|להגיע, להשתתף|All employees must attend the meeting.
arrange|לארגן, לתאם|Can you arrange a meeting for next week?
embarrassed|נבוך|I felt embarrassed when I forgot his name.
grateful|אסיר תודה|We are grateful for your help.
disappointed|מאוכזב|She was disappointed with her test result.
jealous|קנאי|He was jealous of his brother's new bike.
relieved|נרגע, שמח שזה נגמר|I was relieved when the exam was over.
curious|סקרן|The children were curious about the strange box.
annoyed|כועס קלות, מוטרד|I get annoyed when people talk during a movie.
thrilled|נרגש מאוד|We were thrilled to hear the good news.
awkward|מביך, לא נוח|There was an awkward silence after his joke.
generous|נדיב|It was generous of you to pay for dinner.
stubborn|עקשן|My grandfather is too stubborn to use a phone.
apologize|להתנצל|I want to apologize for being late.
complain|להתלונן|The customers complained about the slow service.
postpone|לדחות למועד מאוחר|They had to postpone the picnic because of the rain.
recommend|להמליץ|Can you recommend a good restaurant nearby?
deserve|להיות ראוי ל-|You deserve a long vacation.
refuse|לסרב|The shop refused to give me my money back.
leftovers|שאריות אוכל|We had leftovers for lunch.
ripe|בשל|These bananas are not ripe yet.
spicy|חריף|This sauce is too spicy for me.
bland|תפל|The soup tasted bland without salt.
seasoning|תיבול|Add a little seasoning to the chicken.
download|להוריד קובץ|You can download the app for free.
password|סיסמה|Choose a password that is hard to guess.
battery|סוללה|My phone battery died on the way home.
install|להתקין|I need to install the update before I can start.
subscribe|להירשם כמנוי|She subscribed to a weekly newsletter.
notification|התראה|I turned off notifications so I can focus.
`);

  const F2_NEW = parse(`
adapt|להסתגל, להתאים|Animals must adapt to a changing climate.
ancestor|אב קדמון|Our ancestors lived in caves thousands of years ago.
atmosphere|אטמוספרה, אווירה|The atmosphere protects the Earth from harmful rays.
bacteria|חיידקים|Some bacteria help us digest food.
carbon|פחמן|Burning oil releases carbon into the air.
combine|לשלב, לאחד|Mix the flour and water, then combine them with the eggs.
conduct|לערוך (ניסוי, סקר)|Scientists conduct experiments to test their ideas.
contrast|ניגוד|There is a sharp contrast between day and night temperatures.
organism|יצור חי, אורגניזם|Bacteria are tiny organisms that live almost everywhere.
currency|מטבע של מדינה|The euro is the currency of many countries.
decade|עשור|The city has changed a lot in the past decade.
demand|ביקוש, דרישה|Demand for electric cars is growing fast.
distribute|לחלק, להפיץ|Volunteers distribute food to families in need.
economy|כלכלה|Tourism is important for the local economy.
ecosystem|מערכת אקולוגית|A forest is a complex ecosystem.
extinct|נכחד|Dinosaurs became extinct millions of years ago.
fossil|מאובן|Scientists found a fossil of a giant fish.
gradually|בהדרגה|The weather gradually became warmer.
issue|סוגיה, נושא|Climate change is a serious issue.
likely|סביר, צפוי|It is likely to rain this afternoon.
nutrient|חומר מזין|Plants take nutrients from the soil.
occur|להתרחש|Earthquakes occur more often in some regions.
pattern|דפוס, תבנית|Scientists noticed a pattern in the data.
predict|לחזות מראש|No one can predict exactly when the volcano will erupt.
recent|אחרון, עדכני|A recent study found that sleep improves memory.
remove|להסיר|Filters remove dirt from the water.
reliable|אמין|Not every website is a reliable source of information.
resource|משאב|Water is a precious natural resource.
rural|כפרי|Fewer people live in rural areas today.
urban|עירוני|Urban areas are usually warmer than the countryside.
shortage|מחסור|There was a shortage of water during the summer.
supply|אספקה, לספק|The new dam will supply electricity to the whole region.
trend|מגמה|There is a trend toward working from home.
widespread|נפוץ, נרחב|The flu was widespread this winter.
aware|מודע|Many people are not aware of the risks.
typical|טיפוסי|A typical day starts at six in the morning.
harvest|קציר, לקצור|Farmers harvest the wheat in early summer.
tropical|טרופי|Tropical forests are home to millions of species.
`);

  const F3_NEW = parse(`
accommodate|להכיל, להתאים ל-|The new stadium can accommodate fifty thousand fans.
aspect|היבט|We must consider every aspect of the problem.
assess|להעריך, לבחון|Teachers assess students in different ways.
associate|לקשר, לשייך|Many people associate the color red with danger.
authority|סמכות, רשות|Only the local authority can close the road.
capacity|קיבולת, יכולת|The hall has a capacity of two hundred people.
circumstance|נסיבה|Under no circumstances should you open this door.
collapse|להתמוטט|The old bridge collapsed after the storm.
commit|להתחייב, לבצע|She is committed to protecting the environment.
compensate|לפצות|The company will compensate customers for the delay.
constitute|להוות, להרכיב|Young people constitute a large part of the audience.
demonstrate|להוכיח, להדגים|The experiment demonstrates how plants grow toward light.
dilemma|דילמה|He faced a dilemma: tell the truth or protect his friend.
discourage|להרתיע, לייאש|High prices discourage people from buying.
distinguish|להבחין, להבדיל|It is hard to distinguish between the twins.
dominate|לשלוט, להיות דומיננטי|One company dominates the market.
dramatic|דרמטי, חד|There was a dramatic rise in prices.
eligible|זכאי, בעל זכות|Only students over eighteen are eligible to vote.
enforce|לאכוף|The police enforce the law.
ensure|להבטיח, לוודא|Please ensure that all the doors are locked.
exploit|לנצל|Some companies exploit cheap labor.
flourish|לשגשג|Small businesses flourish in this neighborhood.
hinder|להפריע, לעכב|Bad weather hindered the rescue team.
illustrate|להמחיש|This graph illustrates the rise in temperature.
incentive|תמריץ|Lower taxes are an incentive to invest.
inhabitant|תושב|The island has about a thousand inhabitants.
integrate|להשתלב, לשלב|It takes time to integrate into a new society.
interfere|להתערב, להפריע|Please do not interfere in my decision.
mandatory|חובה, מחייב|Wearing a helmet is mandatory.
mutual|הדדי|They ended the contract by mutual agreement.
neglect|להזניח|He neglected his studies and failed the exam.
overcome|להתגבר|She managed to overcome her fear of speaking in public.
perspective|נקודת מבט|Traveling gave me a new perspective on life.
prevail|לגבור, לשרור|Common sense finally prevailed.
profound|עמוק, מרחיק לכת|The book had a profound effect on me.
prospect|סיכוי, אפשרות עתידית|The prospect of living abroad excites me.
reinforce|לחזק|The results reinforced our belief.
reputation|מוניטין|The restaurant has an excellent reputation.
retain|לשמור, לשמר בזיכרון|Good teachers help students retain information.
scope|היקף, טווח|The scope of the project is huge.
stimulate|לעורר, לתת תנופה|Music can stimulate the brain.
strive|לשאוף, להתאמץ|We strive to give our customers the best service.
substantial|ניכר, משמעותי|He made a substantial donation.
suppress|לדכא, לבלום|She tried to suppress her laughter.
tackle|להתמודד עם בעיה|Governments must tackle unemployment.
thrive|לשגשג, לפרוח|Plants thrive in rich soil.
tolerate|לסבול, להכיל|I cannot tolerate noise when I study.
transform|לשנות מהותית|The internet transformed the way we work.
withstand|לעמוד בפני|The building can withstand strong earthquakes.
negotiate|לנהל משא ומתן|The union will negotiate with the company.
embrace|לאמץ בהתלהבות|Young people quickly embraced the new technology.
empower|להעצים|Education empowers young women.
implement|ליישם|The school will implement the plan next year.
initiative|יוזמה|She took the initiative and organized the event.
undergo|לעבור (תהליך, ניתוח)|The bridge will undergo major repairs.
coherent|קוהרנטי, ברור והגיוני|He gave a clear and coherent explanation.
outweigh|לגבור על, לעלות במשקלו|The benefits outweigh the risks.
viable|בר-קיימא, ישים|Solar power is now a viable alternative.
attain|להשיג מטרה|She worked hard to attain her goal.
disclose|לחשוף, לגלות|The company refused to disclose the price.
controversial|שנוי במחלוקת|The new law is highly controversial.
`);

  const F4_NEW = parse(`
abstract|מופשט|Freedom is an abstract concept that is hard to measure.
accumulate|לצבור|Dust accumulates quickly in an empty room.
allocate|להקצות|The government will allocate more money to schools.
anticipate|לצפות מראש|Experts anticipate a rise in prices.
bias|הטיה, דעה קדומה|The article shows a clear bias against young people.
criterion|קריטריון, מבחן|The main criterion for the job is experience.
cumulative|מצטבר|The cumulative effect of small changes can be huge.
deduce|להסיק|From the footprints, the detective deduced that the thief was tall.
derive|לנבוע, לגזור|Many English words derive from Latin.
discourse|שיח|Public discourse has become more polarized.
dispute|מחלוקת, לערער|The two countries are in dispute over the border.
diversity|גיוון, מגוון|Cultural diversity makes a society richer.
domain|תחום|Medicine is not my domain.
empirical|אמפירי, מבוסס ניסיון|The theory still needs empirical evidence.
equivalent|שווה ערך|One mile is roughly equivalent to 1.6 kilometers.
erode|לשחוק, להיסחף|Wind and rain slowly erode the rocks.
infer|להסיק|From her tone, I inferred that she was angry.
inherit|לרשת|She inherited a small house from her aunt.
integrity|יושרה|A judge must act with integrity.
intrinsic|פנימי, מובנה|Honesty has an intrinsic value.
manipulate|לתמרן, לשלוט|Advertisers sometimes manipulate our emotions.
mitigate|למתן|Trees help mitigate the effects of heat.
paradigm|פרדיגמה, מודל חשיבה|The discovery created a new paradigm in physics.
paradox|פרדוקס|It is a paradox that more choice can make us less happy.
peripheral|היקפי, שולי|The idea was peripheral to the main argument.
pose|להציב (שאלה, איום)|The new virus poses a serious threat.
predominantly|בעיקר|The area is predominantly agricultural.
premise|הנחת יסוד|The whole argument rests on a false premise.
proportion|יחס, חלק יחסי|A large proportion of students work part-time.
rational|הגיוני, רציונלי|Try to make a rational decision, not an emotional one.
refute|להפריך|The scientist refuted the claim with new data.
resilient|עמיד, גמיש נפשית|Children are often more resilient than adults think.
scrutiny|בחינה מדוקדקת|The proposal came under close scrutiny.
simultaneously|בו-זמנית|She can talk and write simultaneously.
speculate|לשער|Journalists speculated about the reasons for his visit.
stability|יציבות|The country needs political stability.
stance|עמדה|What is your stance on school uniforms?
tangible|מוחשי|There is no tangible proof of the theory.
threshold|סף|The temperature reached the threshold of forty degrees.
underlying|שבבסיס, סמוי|We need to find the underlying cause of the problem.
validate|לאמת|The results validate our earlier findings.
versatile|רב-תכליתי|Rice is a versatile food.
yield|להניב, תנובה|The experiment yielded surprising results.
coincide|לחול בו-זמנית, להתאים|The two events coincided by chance.
corroborate|לאשש|A second witness corroborated his story.
mediate|לתווך|The United Nations tried to mediate between the two sides.
ratio|יחס מספרי|The ratio of boys to girls in the class is two to one.
reside|להתגורר|Most of the staff reside in nearby villages.
trigger|להפעיל, לגרום|Stress can trigger headaches.
`);

  const F5_NEW = parse(`
alleviate|להקל|New medicine can alleviate the pain.
ambivalent|דו-ערכי, מהסס|She felt ambivalent about moving abroad.
amend|לתקן (חוק, מסמך)|The parliament voted to amend the constitution.
analogous|דומה, מקביל|The heart is analogous to a pump.
arduous|קשה ומתיש|They began the arduous climb to the summit.
astute|חד תפיסה|An astute investor, she saw the crisis coming.
austere|חמור, צנוע|They lived an austere life in a small cabin.
candid|גלוי לב|He gave a candid answer about his mistakes.
circumvent|לעקוף (כלל, מכשול)|Some companies circumvent the rules to save money.
coerce|לכפות|No one should be coerced into signing the contract.
condone|לגלות סובלנות כלפי (מעשה רע)|Teachers do not condone cheating.
cogent|משכנע, חזק|She made a cogent argument for change.
cryptic|סתום, מסתורי|He left a cryptic message on the table.
dwindle|להצטמצם, להידלדל|The village's population dwindled over the years.
eccentric|אקסצנטרי, תמהוני|My eccentric uncle collects broken clocks.
elusive|חמקמק|The truth remains elusive.
ephemeral|חולף, קצר מועד|Fame can be ephemeral.
exacerbate|להחמיר|Stress can exacerbate health problems.
exemplify|לשמש דוגמה|Her long career can exemplify the value of hard work.
fallacy|כשל לוגי, אמונה מוטעית|It is a fallacy that money always brings happiness.
fastidious|קפדן|He is fastidious about keeping his desk clean.
futile|חסר תועלת|All attempts to stop the fire were futile.
gratuitous|מיותר, חסר הצדקה|The film contains gratuitous violence.
hinge|להיות תלוי ב-|Everything hinges on the final vote.
impartial|חסר פניות|A judge must be impartial.
impede|להפריע, לעכב|Fallen trees impeded the rescue.
impending|קרב ובא|They felt the impending danger.
inadvertently|בלי כוונה|I inadvertently deleted the file.
incessant|בלתי פוסק|The incessant noise kept us awake.
indifferent|אדיש|He seemed indifferent to everyone's suffering.
indispensable|הכרחי, שאין בלעדיו|A good dictionary is indispensable for learners.
lucid|צלול, בהיר|Her explanation was lucid and easy to follow.
meticulous|קפדן, דקדקן|The artist was meticulous about every detail.
mundane|שגרתי, משעמם|She wanted an escape from her mundane routine.
nuance|ניואנס, גוון עדין|Translators must capture every nuance of the original.
oblivious|לא מודע|He was oblivious to the danger.
pragmatic|פרגמטי, מעשי|She took a pragmatic approach to the problem.
precarious|רעוע, מסוכן|The climbers were in a precarious position.
prudent|זהיר, נבון|It is prudent to save some money for emergencies.
reconcile|ליישב, לפייס|It is hard to reconcile these two ideas.
redundant|מיותר, מפוטר|Machines made many workers redundant.
repercussion|השלכה (בדרך כלל שלילית)|The decision had serious repercussions.
scrupulous|ישר וקפדן|He was scrupulous in keeping his promises.
tenacious|עקשן, נחוש|A tenacious reporter, she never gave up the story.
trivial|זניח, טריוויאלי|Do not argue over trivial matters.
ubiquitous|נמצא בכל מקום|Smartphones are now ubiquitous.
unanimous|פה אחד|The vote was unanimous.
verbose|מלל, מרבה במילים|His verbose report was twenty pages long.
volatile|תנודתי, נפיץ|The market is volatile at the moment.
wane|לדעוך|Interest in the show began to wane.
zealous|להוט, קנאי|A zealous fan, he attended every match.
`);

  const C1_F3 = parse(`
absurd|מופרך, אבסורדי|It is absurd to expect a result without any effort.
accessible|נגיש|The new library is accessible to people with disabilities.
accomplishment|הישג|Finishing the marathon was a great accomplishment.
accountable|אחראי, נושא באחריות|Leaders must be held accountable for their decisions.
adhere|לדבוק, להישמר|All members must adhere to the rules.
alert|ערני, להתריע|The guard stayed alert all night.
appealing|מושך, אטרקטיבי|The offer sounded very appealing to young people.
aspire|לשאוף|Many students aspire to study at a top university.
authentic|אותנטי, מקורי|We visited a restaurant that serves authentic Italian food.
autonomy|אוטונומיה, עצמאות|Teenagers need a certain degree of autonomy.
breakthrough|פריצת דרך|Scientists announced a breakthrough in cancer research.
burden|נטל, עול|The debt became a heavy burden on the family.
capability|יכולת|The new phone has an impressive camera capability.
cautious|זהיר|Be cautious when you cross a busy road.
clarity|בהירות, צלילות|The lawyer explained the contract with great clarity.
clash|עימות, להתנגש|There was a clash between the two groups of fans.
collaborate|לשתף פעולה|The two schools collaborate on a science project.
compelling|משכנע, מרתק|She made a compelling case for change.
competent|מוכשר, מיומן|We need a competent manager for this project.
compromise|פשרה, להתפשר|After a long talk, they reached a compromise.
consensus|הסכמה כללית, קונצנזוס|The committee reached a consensus on the new plan.
constraint|מגבלה, אילוץ|Lack of time was the main constraint.
credible|אמין, מהימן|The witness gave a credible account of the events.
curiosity|סקרנות|Curiosity is the first step to learning.
dedicated|מסור|She is a dedicated teacher who loves her work.
dignity|כבוד, כבוד עצמי|Every person deserves to be treated with dignity.
eager|להוט, נלהב|The children were eager to open their gifts.
endure|לשאת, להחזיק מעמד|They had to endure a long winter without heating.
equality|שוויון|The law promotes equality between men and women.
fragile|שביר, עדין|Handle the glass with care, it is very fragile.
heritage|מורשת תרבותית|The old city is part of our cultural heritage.
immense|עצום|The project needs an immense amount of work.
injustice|עוול|The protesters spoke out against injustice.
inspiration|השראה|Nature is a source of inspiration for many artists.
legacy|מורשת, מה שנשאר אחרי|The teacher left a legacy of kindness.
loyalty|נאמנות|The dog showed great loyalty to its owner.
meaningful|בעל משמעות|Volunteering gave her life a more meaningful purpose.
`);
  const C1_F4 = parse(`
adaptation|הסתגלות, עיבוד|The adaptation of the species took millions of years.
adverse|שלילי, מזיק|The drug had adverse effects on some patients.
aesthetic|אסתטי|The building has great aesthetic value.
analogy|אנלוגיה, השוואה|The teacher used an analogy to explain the idea.
articulate|לבטא בבהירות|She can articulate her views clearly.
assert|לטעון בתוקף|The author asserts that technology improves education.
boundary|גבול|The river forms a boundary between the two regions.
classification|סיווג|The classification of animals is based on shared features.
cognitive|קוגניטיבי, שכלי|Reading improves cognitive skills in children.
collective|קולקטיבי, משותף|The decision was a collective effort.
comparable|בר-השוואה|The two cities are comparable in size.
complexity|מורכבות|The complexity of the problem surprised everyone.
consistency|עקביות|Consistency is important for good results.
contradiction|סתירה|There is a contradiction between his words and his actions.
correlate|להיות מתואם|Height and weight often correlate.
correlation|מתאם, קשר|The study found a correlation between sleep and grades.
density|צפיפות|The density of the population is highest in the city.
dimension|ממד|The project added a new dimension to the debate.
distinction|הבחנה, הבדל|There is a clear distinction between fact and opinion.
distinctive|ייחודי, מובחן|The bird has a distinctive red mark on its head.
ecological|אקולוגי|The oil spill caused an ecological disaster.
efficiency|יעילות|The new system improved the efficiency of the office.
elevate|להעלות, להגביה|Education can elevate people out of poverty.
embed|לשבץ, לשלב|The expert embedded the sensor in the wall.
enrich|להעשיר|Travel can enrich your understanding of other cultures.
entity|ישות, גוף|The company is a separate legal entity.
equation|משוואה|Solve the equation to find the value of x.
formulate|לנסח|Scientists must formulate a clear question first.
hierarchy|היררכיה|The army has a strict hierarchy of ranks.
ideology|אידיאולוגיה|The movement was based on a strong ideology.
imminent|קרוב ובא, מיידי|Experts warned that a storm was imminent.
indicator|אינדיקטור, מדד|Unemployment is a key indicator of the economy.
induce|לגרום, לעורר|Some medicines induce sleep.
inhibit|לעכב, לדכא|Fear can inhibit learning.
interference|התערבות, הפרעה|The match was stopped because of outside interference.
linear|לינארי, קווי|The story follows a linear timeline.
logic|היגיון, לוגיקה|There is no logic in his argument.
magnitude|עוצמה, גודל|The magnitude of the earthquake was seven.
methodology|מתודולוגיה, שיטת מחקר|The study's methodology was carefully explained.
migration|הגירה, נדידה|The migration of birds begins in the autumn.
minimal|מזערי|The repairs caused only minimal damage.
motive|מניע|The police could not find a motive for the crime.
parameter|פרמטר, גבול|We must define the parameters of the experiment.
partial|חלקי|The results offer only a partial answer.
philosophical|פילוסופי|They had a long philosophical discussion about freedom.
precedent|תקדים|The court's decision set a precedent for future cases.
precision|דיוק|The machine works with great precision.
prevalence|שכיחות, התפשטות|The prevalence of the disease is rising.
reasoning|הנמקה, חשיבה|His reasoning was clear and logical.
relevance|רלוונטיות|The relevance of this law today is unclear.
rhetoric|רטוריקה|The politician used strong rhetoric to win votes.
simulate|לדמות|The program can simulate a flight in space.
stimulus|גירוי|A loud noise is a stimulus that makes us react.
synthesis|סינתזה, שילוב|The paper is a synthesis of earlier research.
systematic|שיטתי|The police carried out a systematic search.
theoretical|תיאורטי|This is a purely theoretical question.
variable|משתנה|Temperature is the main variable in the experiment.
verify|לאמת, לוודא|Please verify the information before you publish it.
validity|תוקף|The validity of the test results was questioned.
`);
  /* כל הערכים שנכתבו עד עכשיו, לפי מילה: מכאן בונים את הרשימות */
  const ALL = Object.assign({}, OLD);
  [F1_NEW, F2_NEW, F3_NEW, F4_NEW, F5_NEW, C1_F3, C1_F4].forEach(arr => arr.forEach(v => { ALL[v[0]] = v; }));
  const pick = str => str.split(/[\s,]+/).filter(Boolean).map(w => { if(!ALL[w]) console.warn("vocab-adv: חסרה מילה", w); return ALL[w]; }).filter(Boolean);

  window.VOCAB = {
    f1: pick("appointment receipt schedule ingredient grocery landlord tenant deposit wardrobe appliance neighborhood utilities renovate lease leak refund warranty discount budget afford bargain purchase deliver cashier invoice symptom prescription dizzy allergic pharmacy recover treatment reservation itinerary baggage delay departure destination commute accommodation souvenir customs deadline resign promotion embarrassed grateful disappointed jealous relieved curious annoyed thrilled awkward generous stubborn apologize postpone deserve refuse leftovers ripe spicy bland seasoning password battery install subscribe notification"),
    f2: pick("decrease species habitat observe moreover challenge establish failure unique equal freedom adapt ancestor bacteria carbon conduct demand distribute fossil gradually issue rural urban shortage widespread tropical acknowledge adequate apparent comprehensive considerable deliberate eliminate fundamental inevitable initial obstacle precise pursue tendency thorough reveal emerge enhance exceed distinct accommodate aspect assess associate capacity circumstance collapse demonstrate discourage distinguish dominate dramatic ensure exploit illustrate incentive inhabitant integrate overcome perspective prospect reinforce reputation retain stimulate transform negotiate embrace implement initiative undergo controversial constant contribute"),
    f3: pick("sustain compensate constitute dilemma eligible enforce flourish interfere mandatory mutual neglect prevail profound scope strive substantial suppress tackle thrive tolerate empower viable attain disclose advocate arbitrary attribute conceal deteriorate diminish elaborate explicit hostile inherent prominent reluctant resemble subtle undermine vulnerable persistent amend harvest").concat(C1_F3),
    f4: pick("accumulate allocate discourse dispute domain empirical integrity manipulate predominantly premise rational scrutiny simultaneously stability threshold underlying yield coincide ratio reside trigger").concat(C1_F4),
    f5: pick("ambiguous contradict feasible fluctuate obscure plausible rigid scarce skeptical superficial alleviate ambivalent analogous arduous astute austere candid circumvent coerce condone cogent cryptic dwindle eccentric elusive ephemeral exacerbate exemplify fallacy fastidious futile gratuitous hinge impartial impede impending inadvertently incessant indifferent indispensable lucid meticulous mundane nuance oblivious pragmatic precarious prudent reconcile redundant repercussion scrupulous tenacious trivial ubiquitous unanimous verbose volatile wane zealous outweigh cumulative deduce erode intrinsic mitigate paradigm paradox peripheral refute resilient tangible validate versatile corroborate mediate abundant hinder withstand coherent")
  };
})();
