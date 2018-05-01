/**
 * Adjectives
 */

G.adj = {}; // More complex adjectives

G.adj.guid = {
    trigs: ['gwid', 'geed'],
    pr: ['gid', 'gyid', 'göd', 'gweed']
};

/**
 * Add adjectives to dictionary object
 */

G.dict.push({ // A
    sc: 'ae',
    pr: ['ae', 'yae'],
    en: ['one', 'only'],
    gr: 'adj',
    tr: ['ane', 'yay', 'ain', 'yin', 'wan', 'een', 'ann'],
    hl: ['ae', 'yae', 'yay'],
}, {
    sc: 'aesome',
    en: [
        ['single', 'solitary']
    ],
    gr: 'adj'
}, {
    sc: 'aefauld',
    en: [
        ['single'],
        ['simple', 'sincere', 'honest', 'faithful', 'single-minded']
    ],
    tr: ['single minded', 'unified'],
    hl: ['aefauld', 'single minded'],
    gr: 'adj'
}, {
    sc: 'afore gane',
    en: [
        ['previous', 'prior', 'antecedent']
    ],
    gr: 'adj phr'
}, {
    sc: 'allevolie',
    en: [
        ['giddy', 'volatile']
    ],
    gr: ['adj'],
    or: [
        [G.notes.or.ms, 'alla-volie'],
        ['frae the ' + G.notes.or.f, 'à la volée']
    ]
}, { // B
    sc: 'baltic',
    def: 'o the weather, the temperatur: fell cauld',
    tr: ['chankin', 'cold', 'cauld'],
    hl: ['baltic', 'cold', 'cauld'],
    gr: ['adj', 'informal']
}, {
    sc: 'bittie',
    en: 'a bit of',
    gr: 'adj (quasi), by omíssion o prep <span>o</span>',
    ex: 'I wadna mind a wee bittie cake',
    or: 'see n'
}, {
    sc: 'bluitert',
    pr: ['blootert', 'bleetert'],
    tr: ['bloutered', 'blootered', 'bloutert', 'blootert'],
    en: ['drunk', 'having been hit or kicked hard'],
    gr: ['adj', 'informal']
}, {
    sc: 'braw',
    en: [
        ['fine', 'splendid', 'excellent', 'worthy'],
        ['elegant', 'well-dressed', 'showy'],
        ['handsome', 'beautiful', 'strong', 'able-bodied'],
        'considerable (of a sum of money)',
        'pleasant (of the weather)'
    ],
    tr: ['well dressed', 'able bodied', 'considerable', 'pleasant', 'bra', 'braa', 'brow'],
    gr: ['adj'],
    ex: [G.ex.g, G.ex.v],
    or: [
        [G.notes.or.as, 'braw, bra, brawf'],
        ['variant o the ' + G.notes.or.mf, 'brave']
    ]
}, {
    sc: 'brawlike',
    en: [
        ['fine', 'splendid', 'nice']
    ],
    tr: ['braw like', 'braw-like'],
    gr: ['adj']
}, {
    sc: 'byous',
    en: [
        ['wonderful', 'extraordinary', 'exceptional']
    ],
    gr: 'adj'
}, { // C
    sc: 'cantie',
    en: [
        ['lively', 'cheerful', 'pleasant'],
        ['small and neat'],
        ['comfortable']
    ],
    tr: ['canty', 'merry'],
    gr: 'adj',
    ex: 'They haed a cantie efternuin in the beer gairden'
}, {
    sc: 'chankin',
    def: 'o the weather, the temperatur: (fell) cauld',
    tr: ['chanking', 'baltic', 'cold', 'cauld'],
    hl: ['chankin', 'cold', 'cauld'],
    gr: ['adj', 'informal']
}, {
    sc: 'cauld',
    en: 'cold',
    tr: ['chanking', 'chankin', 'baltic', 'cold', 'cauld'],
    hl: 'cauld',
    gr: ['adj']
}, {
    sc: 'contigue',
    en: [
        ['contiguous', 'adjacent']
    ],
    gr: 'adj',
    or: [
        [G.notes.or.as, 'contigue'],
        [G.notes.or.mf, 'contigu'],
        [G.notes.or.l, 'contiguus']
    ]
}, {
    sc: 'contermit',
    tr: 'contermt',
    en: [
        ['determined', 'stubborn']
    ],
    gr: 'adj',
    or: [
        [G.notes.or.as, 'contermit, contermyt']
    ]
}, {
    sc: 'contemporar',
    en: 'contemporary',
    gr: 'adj'
}, {
    sc: 'contrair',
    en: [
        ['contrary', 'opposite', 'unfavourable', 'adverse']
    ],
    tr: 'against',
    hl: 'contrair',
    gr: 'adj',
    or: 'see n',
    ex: ['Contrair til expectations, he did weel in his exams', 'Maist law makars threapit for a chynge in the law, but a wheen held the contrair view', 'He’s a ill-naiturt an contrair chiel']
}, {
    sc: 'defamatoir',
    en: 'defamatory',
    tr: 'defamator',
    gr: 'adj',
    or: [
        [G.notes.or.as, 'defamatoir, defamatore, defamatour'],
        [G.notes.or.mf, 'diffamatoire']
    ]
}, { // D
    sc: 'defeat',
    tr: ['defait', 'defeet'],
    en: [
        ['defeated'],
        ['exhausted', 'worn out']
    ],
    gr: 'adj',
    or: 'see v'
}, {
    sc: 'deleerit',
    en: [
        ['delirious', 'mad', 'temporarily out of one\'s senses']
    ],
    gr: 'adj',
    or: [
        [G.notes.or.emods2, 'deleeret, deleerit, delireet'],
        [G.notes.or.mf, 'delirer'],
        [G.notes.or.l, 'dēlīrāre']
    ]
}, {
    sc: 'doutsome',
    en: [
        ['doubtful', 'undecided', 'ambiguous', 'uncertain']
    ],
    gr: ['adj']
}, { // E
    sc: 'easter',
    en: ['eastern', 'the more easterly of two places'],
    tr: ['wester', 'wastern', 'western'],
    hl: 'easter',
    gr: ['adj'],
    def: 'locatit tae the east; the mair easter o twa steids, biggins or ither things; kythes in steid names, e.g. Easter Road'
}, {
    sc: 'elementar',
    en: [
        ['basic', 'elemental', 'elementary']
    ],
    tr: 'fundamental',
    hl: 'elementar',
    gr: 'adj',
    or: [
        [G.notes.or.as, 'elementar, elementair'],
        [G.notes.or.mf, 'elementaire'],
        [G.notes.or.l, 'elementārius']
    ]
}, {
    sc: 'evendoun',
    en: [
        ['<span>of heavy rain</span> straight', 'perpendicular'],
        ['honest', 'frank', 'sincere'],
        ['sheer', 'absolute', 'downright']
    ],
    pr: 'evendoon',
    tr: 'straight',
    gr: 'adj'
}, {
    sc: 'evenforrit',
    en: 'straightforward',
    tr: 'straight forward',
    gr: 'adj'
}, {
    sc: 'evident',
    en: [
        ['clear', 'plain', 'obvious']
    ],
    gr: 'adj',
    or: [
        [G.notes.or.as, 'evident, euident'],
        [G.notes.or.l, 'ēvidens']
    ]
}, {
    sc: 'exact',
    en: 'precise',
    pr: ['egzak', 'egzakt'],
    tr: ['exactly', 'exact', 'exackly'],
    hl: ['exact', 'exack'],
    gr: 'adj',
    or: [
        [G.notes.or.as, 'exact, exack'],
        [G.notes.or.l, 'exactus']
    ]
}, { // F
    sc: 'fantoush',
    pr: 'fantoosh',
    en: [
        ['overdressed', 'flashy', 'fancy', 'ultra fashionable', 'ornate']
    ],
    gr: 'adj',
    or: [
        [G.notes.or.mode, 'fanty-sheeny'],
        [G.notes.or.it, 'fantoccino']
    ],
    ex: 'Ye dinna think this jaiket is a bittie fantoush, div ye?'
}, {
    sc: 'fashious',
    en: [
        ['troublesome', 'annoying', 'difficult'],
        ['fractious', 'peevish']
    ],
    gr: 'adj',
    ex: 'Whit wi aw the snaw, drivin intae wark wis awfu fashious'
}, {
    sc: 'feart',
    en: [
        ['afraid', 'anxious']
    ],
    gr: 'adj',
    ex: G.ex.a
}, {
    sc: 'fell',
    en: [
        ['fierce', 'cruel', 'harsh'],
        ['remarkable', 'considerable', 'extremely strong, big or loud'],
        ['<em>of weather</em> violent', 'inclement'],
        ['energetic and capable', 'sturdy'],
        ['clever', 'shrewd']
    ],
    tr: ['extremely big', 'extremely loud', 'violent', 'ruthless'],
    gr: 'adj',
    or: [
        [G.notes.or.as, 'fell, fel'],
        [G.notes.or.me, 'fel']
    ]
}, {
    sc: 'forby',
    sc_alt: 'forbye',
    pr: 'forBye',
    en: [
        ['extraordinary', 'strange', 'unusually good'],
    ],
    gr: ['adj']
}, {
    sc: ['forementioned', 'forementiont'],
    en: 'aforementioned',
    tr: 'aforementiont',
    gr: ['adj'],
    or: ['?' + G.notes.or.eme + '; <span>forementioned</span> kythes in ' + G.notes.or.lms + ' an ' + G.notes.or.emods],
    ex: G.ex.m
}, {
    sc: 'foresaid',
    en: 'aforesaid',
    gr: ['adj'],
    tr: 'mention',
    hl: 'foresaid',
    or: [
        [G.notes.or.as, 'for(e)said, foirsaid'],
        [G.notes.or.ae, 'foresæᵹd, foresǽd']
    ]
}, {
    sc: 'furrin',
    en: [
        ['foreign', 'abroad']
    ],
    gr: ['adj'],
    tr: ['forrin', 'forain'],
    or: [
        [G.notes.or.as + ' haes ', 'forain(e), forayne, forane'],
        [G.notes.or.me, 'forain(e), forayn(e), forein(e), foreyne'],
        [G.notes.or.af, 'forain']
    ]
}, {
    sc: 'furthie',
    en: [
        ['forward in disposition', 'bold', 'energetic', 'impulsive', 'unabashed'],
        ['generous', 'hospitable', 'liberal']
    ],
    tr: ['friendly', 'affable', 'outgoing', 'forward', 'forrit', 'bauld'],
    hl: ['furthie', 'outgoing', 'forward', 'forrit', 'bauld'],
    gr: 'adj',
    or: [G.notes.or.as + ' haes <span>forthy</span> an later <span>furthy</span> ‘forrit, bauld, enterprísin’'],
    ex: G.ex.r
}, {
    sc: 'gey',
    pr: 'guyee',
    en: [
        ['excellent', 'splendid'],
        ['considerable', 'good-sized', 'great'],
        ['disreputable', 'wild']
    ],
    tr: ['guy', 'giy'],
    gr: ['adj'],
    or: 'see adv',
    ex: 'Wi it bein sic a het day, it wis a gey trauchle tae win at the tap o Lee Pen'
}, {
    sc: 'guid',
    en: 'good',
    tr: G.adj.guid.trigs,
    pr: G.adj.guid.pr,
    gr: 'adj'
}, { // I
    sc: 'ilk',
    en: 'same',
    gr: ['adj']
}, {
    sc: 'ilka',
    en: [
        ['each', 'every']
    ],
    gr: ['adj']
}, {
    sc: 'innovate',
    en: 'innovative',
    gr: 'adj',
    or: [
        [G.notes.or.as, 'innovat, innowat, innovate'],
        [G.notes.or.l, 'innovātus']
    ],
    ex: 'The company haed a guid wheen innovate products on the mercat'
}, { // J
    sc: 'juist',
    en: [
        ['equitable', 'fair', 'lawful', 'justified'],
        ['exact', 'precise', 'correct', 'accurate']
    ],
    tr: ['just', 'jist', 'exackly', 'exack'],
    gr: ['adj'],
    or: [
        [G.notes.or.as, 'just, juist'],
        [G.notes.or.me, 'just']
    ]
}, {
    sc: 'depute',
    gr: ['adj'],
    tr: ['deputy', 'vice'],
    hl: ['depute', 'deputy', 'vice'],
    def: 'apointit as, or exercein the duties o, depute',
    ex: ['The preses depute gied a gey dreich screed at the annual collogue'],
    or: [
        [G.notes.or.as, 'depute, deput'],
        [G.notes.or.af, 'deputé']
    ]
}, {
    sc: 'acquent',
    en: [
        ['acquainted', 'known', 'familiar with']
    ],
    pr: ['akWant', 'akWent'],
    tr: ['acquant', 'acquaint', 'aquent', 'aquaint', 'kent'],
    hl: ['acquant', 'acquaint', 'aquent', 'aquaint'],
    gr: 'adj',
    or: [
        [G.notes.or.as, 'acquent, acquant, aquynt'],
        [G.notes.or.me, 'aquointe'],
        [G.notes.or.mf, 'accointe']
    ],
    ex: ['I’m no yet fully acquent wi the policy', 'I’m weel aquent wi the mínister’s view on the said maiter']
}, { // M
    sc: 'mair',
    en: ['larger in physical size', 'greater in quantity or amount', ['additional in quantity or number', 'further']],
    tr: 'more',
    gr: 'adj',
    or: [
        [G.notes.or.as, 'mair, mare, mar'],
        [G.notes.or.ae, 'māre']
    ],
    ex: ['We steyed in Milan twa mair days', 'This flouer is mair bonnie than yon ane ower there']
}, {
    sc: 'maist',
    en: [
        ['largest', 'greatest', 'very great'],
        ['<span>of persons</span> chief', 'most powerful or important', 'greatest'],
        ['<span>of things</span> chief, principal']
    ],
    tr: 'most',
    gr: 'adj',
    or: 'see pron'
}, {
    sc: 'muckle',
    pr: ['muckl', 'meekl'],
    en: [
        ['large in size or extent', 'big', 'bulky'],
        ['numerous', 'abundant'],
        ['full-grown', 'adult'],
        ['of high rank or social standing', 'self-important'],
        ['<span>of letters of the alphabet</span> capital']
    ],
    tr: ['large', 'great', 'much', 'capital letter', 'mukkil', 'self important'],
    gr: 'adj',
    or: [
        [G.notes.or.as, 'mekill, mykill, mukill, muckle'],
        [G.notes.or.ae, 'micel'],
        [G.notes.or.anor, 'mikill']
    ]
}, { // O
    sc: 'ocht',
    en: 'any',
    gr: ['adj']
}, {
    sc: ['ongaun', 'ongaein'],
    en: [
        ['ongoing', 'continuing']
    ],
    gr: ['adj']
}, {
    sc: 'ony',
    en: 'any',
    tr: 'onie',
    gr: ['adj'],
    or: [
        [G.notes.or.as, 'ony'],
        [G.notes.or.ae, 'ǽniᵹ']
    ]
}, {
    sc: 'ower',
    pr: ['uower', 'oar', 'oor', 'err'],
    en: [
        ['upper', 'higher']
    ],
    gr: 'adj',
    tr: ['owre', 'over'],
    hl: ['ower', 'owre'],
    or: [
        [G.notes.or.as, 'over, oer, ower'],
        [G.notes.or.ae, 'uferra']
    ]
}, { // P
    sc: 'pertinent',
    en: [
        ['belonging or relevant to', 'appropriate']
    ],
    tr: ['belonging to', 'relevant to', 'relevant', 'pertain'],
    hl: ['belonging to', 'relevant to', 'relevant', 'pertinent'],
    gr: ['adj'],
    or: [
        [G.notes.or.as, 'pertinent'],
        [G.notes.or.me, 'pertinent'],
        [G.notes.or.l, 'pertinentia']
    ]
}, {
    sc: 'previous',
    en: 'previous',
    tr: ['prior', 'antecedent', 'afore gane'],
    gr: 'adj',
    or: [
        [G.notes.or.lms, 'pravious'],
        [G.notes.or.mode, 'prævious, previous'],
        [G.notes.or.l, 'prævi-us']
    ]
}, {
    sc: 'pyntit',
    en: 'decisive',
    gr: 'adj'
}, { // R
    sc: 'ragglish',
    en: [
        ['erratic'],
        ['wild', 'unreliable', 'undisciplined'],
        ['uneven', 'straggling', 'higgledy-piggledy'],
        ['<span>of weather</span> boisterous, uncertain, gusty with rain']
    ],
    tr: ['boisterous', 'uncertain'],
    gr: ['adj']
}, { // S
    sc: 'shuir',
    pr: ['shair', 'shör', 'shür', 'sheer', 'seer'],
    en: [
        ['efficacious', 'effective'],
        ['safe', 'secure', 'strong', 'reliable'],
        ['accurate', 'true', 'assured', 'convinced']
    ],
    tr: 'sure',
    gr: 'adj',
    or: [
        [G.notes.or.as, 'sure, suir(e), seur(e), s(c)hur(e)'],
        [G.notes.or.an, 'sur']
    ],
    ex: 'He wis shuir he’d seen the fellae somewhaur afore'
}, {
    sc: 'sweir',
    pr: 'sweer',
    en: [
        ['lazy', 'slothful', 'indolent'],
        ['unwilling', 'reluctant', 'loath'],
    ],
    tr: 'laith',
    gr: 'adj',
    or: [
        [G.notes.or.as, 'swer(e), sweir(e), sweer'],
        [G.notes.or.ae, 'swǽr']
    ]
}, {
    sc: 'sweirt',
    pr: 'sweert',
    en: [
        ['sluggish', 'loath', 'reluctant']
    ],
    tr: 'laith',
    gr: 'adj',
    or: 'see adj <span>sweir</span>'
}, { // T
    sc: 'tuim',
    pr: ['tim', 'teem', 'toom', 'taim'],
    en: [
        ['empty', 'vacant'],
        'hungry', ['<span>(of a place)</span> unoccupied'],
        ['<span>(of people)</span> thin', 'lean', 'lank'],
        ['<span>(of a machine)</span> idling', 'not processing material']
    ],
    tr: ['lanky', 'thin', 'lean', 'unoccupied', 'idling', 'idle'],
    gr: 'adj',
    or: [
        [G.notes.or.as, 'tome, tume'],
        [G.notes.or.ae, 'tōm'],
        [G.notes.or.anor, 'tómr']
    ],
    ex: ['The man wis tuim-heidit!', 'I cam back tuim-haundit']
}, {
    sc: 'unco',
    en: [
        ['unknown', 'unfamiliar', 'strange'],
        ['unusual', 'odd', 'strange', 'peculiar', 'unnatural', 'weird', 'remarkable', '<span>as an intensifier</span> extraordinary', 'great', 'awful'],
        ['reserved', 'shy', 'unfriendly'],
        ['foreign', 'belonging to another nation or culture']
    ],
    tr: ['furrin', 'extraordinary'],
    gr: 'adj',
    or: [
        ['variant o ', 'uncouth'],
        [G.notes.or.as, 'uncow'],
        [G.notes.or.ae, 'uncūð']
    ],
    ex: [G.ex.r, 'He fand himsel in a unco pairt o toun', 'An unco thrang bourached outside the pairlament biggin', G.ex.v, 'The mechanic haed an unco job sortin the electrics']
}, { // V
    sc: 'versant',
    en: [
        ['conversant with', 'versed in'], 'fluent'
    ],
    tr: ['conversant', 'versed', 'familiar with'],
    gr: 'adj',
    or: [
        [G.notes.or.lms, 'versant'],
        [G.notes.or.eme, 'versant']
    ],
    ex: ['Nicola wis versant in baith Italians an French', 'He wis weel versant in Scots medieval history']
}, { // W
    sc: ['waster', 'wester'],
    en: ['western', 'the more westerly of two places'],
    tr: ['easter', 'eastern'],
    hl: 'wester',
    gr: ['adj'],
    def: 'locatit tae the wast; the mair waster o twa steids, biggins or ither things; aft-times in steid names, e.g. Wester Hailes'
}, {
    sc: 'wastren',
    tr: 'wastern',
    en: 'western',
    gr: 'adj'
}, {
    sc: 'wicelike',
    tr: ['wysslike', 'wycelike', 'wyselike', 'wiselike'],
    en: [ // >
        ['sensible, respectable']
    ],
    gr: 'adj'
}, {
    sc: 'wrocht-up',
    en: 'overwrought',
    gr: 'adj'
});
