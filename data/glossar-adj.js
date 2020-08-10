/**
 * Adjectives
 */

G.adj = {}; // More complex adjectives

G.adj.guid = {
    trigs: 'gwid',
    pr: ['gid', 'gyid', 'göd', 'gaed', 'gweed', 'geed']
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
    hl: [],
    ex: ['I haed ae last beer syne taen the gate hame', 'Fowk bein full o theirsels wis the ae thing I couldna staund']
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
    gr: 'phrasal adj'
}, {
    sc: 'allevolie',
    en: [
        ['giddy', 'volatile']
    ],
    gr: 'adj',
    tr: ['alevoly', 'alevolie'],
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
    sc: 'ben',
    en: [
        ['inner', 'interior']
    ],
    gr: 'adj',
    or: 'see prep',
}, {
    sc: 'benmaist',
    en: [
        ['furthest in', 'in the inner room'],
        'innermost'
    ],
    tr: ['ben', 'innermaist'],
    hl: 'innermost',
    gr: 'adj'
}, {
    sc: 'benner',
    en: [
        ['inner', 'further in']
    ],
    tr: 'ben',
    hl: [],
    gr: 'adj',
    ex: 'The benner room wis buskit sae braw'
}, {
    sc: 'bittie',
    en: 'a bit of',
    gr: 'adj (quasi), by omission o prep <span>o</span>',
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
    tr: ['well dressed', 'able bodied', 'considerable', 'pleasant', 'bra', 'braa', 'brow', 'good'],
    gr: 'adj',
    ex: [G.ex.g, G.ex.v],
    or: [
        [G.notes.or.as, 'braw, bra, brawf'],
        ['variant o the ' + G.notes.or.mf, 'brave']
    ],
    au: 'braw'
}, {
    sc: 'brawlike',
    en: [
        ['fine', 'splendid', 'nice']
    ],
    tr: ['braw like', 'braw-like'],
    gr: 'adj'
}, {
    sc: 'but',
    en: [
        ['outer', 'outside', 'the kitchen', 'the outer room'],
        'relating to the parlour or best room'
    ],
    gr: 'adj',
    tr: ['ootside', 'kitchen', 'parlour', 'best room', 'outer room'],
    or: 'see adv'
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
    gr: 'adj'
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
    sc: 'defamator',
    en: 'defamatory',
    tr: 'defamator',
    gr: 'adj',
    or: [
        [G.notes.or.as, 'defamatoir, defamatore, defamatour'],
        [G.notes.or.mf, 'diffamatoire']
    ]
}, { // D
    sc: 'daft',
    def: ['stupit, glaikit', 'gyte, insane, awa wi it', 'frivolous, thochtless'],
    tr: ['unintelligent', 'stupid', 'stupit', 'gyte', 'crazy', 'insane', 'frivolous', 'thochtless', 'thoughtless', 'foolish'],
    gr: 'adj',
    or: [
        [G.notes.or.as, 'daft(e)'],
        [G.notes.or.ae, 'gedæfte']
    ]
}, {
    sc: 'deif',
    pr: ['deef', 'dehf'],
    en: 'deaf',
    gr: 'adj',
    or: [
        [G.notes.or.as, 'deif, defe'],
        [G.notes.or.ae, 'dēaf']
    ]
}, {
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
    tr: ['deleerit', 'dementit', 'crazy', 'mad', 'daft', 'insane'],
    hl: ['deleerit', 'dementit', 'crazy', 'mad', 'insane'],
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
    gr: 'adj'
}, {
    sc: 'dreich',
    en: [
        ['<span>anent the weather or scenery</span> dreary', 'bleak'],
        ['protracted', 'dreary', 'hard to bear'],
        ['<span>anent speeches or sermons</span> long-winded', 'interminable', 'dry', 'uninteresting'],
        ['tedious', 'tiresome', 'slow'],
        ['<span>anent people</span> depressed', 'dull', 'gloomy'],
        ['<span>anent time or journeys</span> long', 'tedious'],
        ['slow', 'tardy', 'backward'],
        ['persistent']
    ],
    tr: ['depressed', 'long-winded', 'long winded', 'long', 'endure', 'wearying', 'protracted', 'monotonous', 'delayed', 'laboured', 'boring', 'doleful', 'cheerless', 'dule'],
    hl: ['depressed', 'long-winded', 'long winded', 'long', 'wearying', 'protracted', 'monotonous', 'delayed', 'laboured', 'boring', 'doleful', 'cheerless'],
    gr: 'adj',
    or: [
        [G.notes.or.anor, 'drjúgr'],
        [G.notes.or.as, 'dreich, dreigh']
    ],
    ex: 'It’s gey dreich this efternuin',
}, { // E
    sc: 'easter',
    en: ['eastern', 'the more easterly of two places'],
    tr: ['wester', 'wastern', 'western'],
    hl: 'easter',
    gr: 'adj',
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
    ex: 'What wi aw the snaw, drivin intae wark wis awfu fashious'
}, {
    sc: 'faur kent',
    en: [
        ['widely known', 'famous']
    ],
    tr: ['far kent', 'well known', 'weel kent'],
    hl: 'far kent',
    gr: 'phrasal adj'
}, {
    sc: 'feart',
    en: [
        ['afraid', 'anxious']
    ],
    tr: ['scared', 'frightened'],
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
        ['extraordinary', 'strange', 'unusually good']
    ],
    gr: 'adj'
}, {
    sc: ['forementioned', 'forementiont'],
    en: 'aforementioned',
    tr: 'aforementiont',
    gr: 'adj',
    or: ['?' + G.notes.or.eme + '; <span>forementioned</span> kythes in ' + G.notes.or.lms + ' an ' + G.notes.or.emods],
    ex: G.ex.m
}, {
    sc: 'foresaid',
    en: 'aforesaid',
    gr: 'adj',
    tr: 'mention',
    hl: 'foresaid',
    or: [
        [G.notes.or.as, 'for(e)said, foirsaid'],
        [G.notes.or.ae, 'foresæᵹd, foresǽd']
    ]
}, {
    sc: 'frequent',
    en: 'frequent',
    tr: ['repeated', 'recurring', 'habitual', 'abundant', 'numerous', 'regular'],
    gr: 'adj',
    or: [
        [G.notes.or.as, 'frequent'],
        [G.notes.or.l, 'frequens']
    ]
}, {
    sc: 'furrin',
    en: [
        ['foreign', 'abroad']
    ],
    gr: 'adj',
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
    hl: ['furthie', 'outgoing', 'forward'],
    gr: 'adj',
    or: [G.notes.or.as + ' haes <span>forthy</span> an later <span>furthy</span> ‘forrit, bauld, enterprisin’'],
    ex: G.ex.r
}, { // G
    sc: 'gey',
    pr: 'guyee',
    en: [
        ['excellent', 'splendid'],
        ['considerable', 'good-sized', 'great'],
        ['disreputable', 'wild']
    ],
    tr: ['guy', 'giy', 'gye'],
    gr: 'adj',
    or: 'see adv',
    ex: ['It wis a gey trauchle winnin at the tap o Lee Pen', 'It’s gey cauld the nicht']
}, {
    sc: 'glaikit',
    en: [
        ['stupid', 'thoughtless', 'irresponsible', 'flighty', 'frivolous']
    ],
    tr: ['glakit', 'glaickit', 'stupit', 'thochtless'],
    gr: 'adj',
    or: [
        [G.notes.or.as, 'glaikit']
    ]
}, {
    sc: 'gray',
    tr: 'grey',
    def: 'o a colour somegate atween black and white',
    gr: 'adj'
}, {
    sc: 'guid',
    en: 'good',
    tr: G.adj.guid.trigs,
    pr: G.adj.guid.pr,
    gr: 'adj',
    or: [
        [G.notes.or.as, 'gud(e), guid'],
        [G.notes.or.ae, 'gōd']
    ]
}, {
    sc: 'gyte',
    en: [
        ['insane', 'mad (with rage or pain)', 'demented'],
        'nonsensical',
        ['silly', 'foolish', 'stupid'],
        ['love-sick', 'overly eager']
    ],
    tr: ['dementit', 'fuil', 'feel', 'crazy', 'stupit', 'awry', 'mad', 'deleerit', 'daft'],
    hl: ['dementit', 'fuil', 'feel', 'crazy', 'stupit', 'awry', 'mad'],
    gr: 'adj',
    or: 'unkent'
}, { // H
    sc: 'het',
    pr: ['heht', 'hait'],
    en: [
        ['hot', 'heated', 'warm']
    ],
    gr: 'adj',
    tr: ['hate', 'haet'],
    or: [
        [G.notes.or.as, 'heit, heyt'],
        [G.notes.or.ae, 'hāt']
    ],
    ex: 'It’s gey het ootside',
}, { // I
    sc: 'ilk',
    en: 'same',
    tr: 'ilka',
    hl: 'ilk',
    gr: 'adj'
}, {
    sc: 'ilka',
    en: [
        ['each', 'every']
    ],
    tr: 'ilk',
    hl: 'ilka',
    gr: 'adj',
    au: 'ilka'
}, { // J
    sc: 'juist',
    pr: G.pr.juist,
    en: [
        ['equitable', 'fair', 'lawful', 'justified'],
        ['exact', 'precise', 'correct', 'accurate']
    ],
    tr: ['just', 'jist', 'exackly', 'exack'],
    gr: 'adj',
    or: [
        [G.notes.or.as, 'just, juist'],
        [G.notes.or.me, 'just']
    ]
}, {
    sc: 'depute',
    gr: 'adj',
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
    ex: ['I’m no yet fully acquent wi the policy', 'I’m weel aquent wi the minister’s view anent the maiter']
}, {
    sc: 'knackie',
    en: [
        ['adroit', 'deft', 'ingenious', 'skillful'],
        ['witty', 'entertaining', 'facetious'],
        ['nimble', 'smart'],
        ['trim', 'neatly built', 'spruce', 'dainty']
    ],
    tr: ['skeely', 'clever', 'nippy'],
    hl: [],
    gr: 'adj'
}, { // L
    sc: 'laident',
    en: 'burdened',
    gr: 'adj'
}, {
    sc: 'lang',
    en: ['long', 'tall'],
    tr: ['great', 'large', 'lengthy', 'high'],
    gr: 'adj',
    or: [
        [G.notes.or.as, 'lang(e), laing'],
        [G.notes.or.ae, 'lang']
    ]
}, {
    sc: ['leart', 'leared'],
    en: [
        ['learned', 'educated']
    ],
    tr: 'educatit',
    gr: 'adj'
}, { // M
    sc: 'mair',
    en: 'more',
    tr: ['mare'],
    gr: ['adj', 'adv', 'pron'],
    or: [
        [G.notes.or.as, 'mair, mare, mar'],
        [G.notes.or.ae, 'māre']
    ],
    ex: ['We steyed in Milan twa mair days', 'He’s mair aulder nor mysel', 'She wis mair fasht aboot it than he wis', G.ex.d1, 'Moyen daes muckle but money daes mair'],
    au: 'mair'
}, {
    sc: 'maist',
    en: [
        ['largest', 'greatest', 'very great'],
        ['<span>of persons</span> chief', 'most powerful or important', 'greatest'],
        ['<span>of things</span> chief, principal']
    ],
    tr: ['most', 'maste'],
    gr: 'adj',
    or: 'see pron'
}, {
    sc: 'michty',
    en: 'mighty',
    tr: ['powerful', 'important', 'rich', 'strong', 'big', 'muckle', 'sumptuous', 'loud', 'huge', 'large'],
    hl: ['powerful', 'important', 'rich', 'strong', 'big', 'sumptuous', 'loud', 'huge', 'large'],
    gr: 'adj',
    or: [
        [G.notes.or.as, 'mychty, mychti, michty'],
        [G.notes.or.ae, 'mihtig']
    ]
}, {
    sc: 'mony',
    en: 'many',
    gr: ['adj', 'n'],
    or: [
        [G.notes.or.as, 'mony, monie'],
        [G.notes.or.ae, 'mǫniᵹ']
    ]
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
    gr: 'adj'
}, {
    sc: ['ongaun', 'ongaein'],
    en: [
        ['ongoing', 'continuing']
    ],
    gr: 'adj'
}, {
    sc: 'ony',
    en: 'any',
    gr: 'adj',
    or: [
        [G.notes.or.as, 'ony'],
        [G.notes.or.ae, 'ǽniᵹ']
    ]
}, {
    sc: 'ordinar',
    en: [
        ['usual', 'normal']
    ],
    tr: 'ordinary',
    gr: 'adj',
    or: [
        [G.notes.or.me, 'ordinari'],
        [G.notes.or.mf, 'ordinaire']
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
    gr: 'adj',
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
}, {
    sc: 'quirkie',
    en: [
        ['intricate', 'complicated', 'twisted'],
        ['cunning', 'wily', 'resourceful', 'tricky'],
    ],
    tr: ['complex', 'complicatit'],
    gr: 'adj',
    or: 'unkent'
}, { // R
    sc: 'ragglish',
    en: [
        ['erratic'],
        ['wild', 'unreliable', 'undisciplined'],
        ['uneven', 'straggling', 'higgledy-piggledy'],
        ['<span>of weather</span> boisterous, uncertain, gusty with rain']
    ],
    tr: ['boisterous', 'uncertain'],
    gr: 'adj'
}, {
    sc: 'raivelt',
    en: [
        ['tangled', 'confused', 'muddled', 'in difficulties'],
        ['rambling', 'delirious'],
        ['<span>anent hair</span> unkempt', 'dishevelled']
    ],
    tr: ['raivelled', 'ravelled', 'reffelled', 'unkempt'],
    gr: 'adj',
    or: [
        [G.notes.or.as, 'ravelled, rawellit'],
        'see v'
    ]
}, {
    sc: 'reid',
    pr: ['rid', 'reed'],
    tr: 'read',
    en: 'red',
    gr: 'adj',
    or: [
        [G.notes.or.as, 'rede, reid'],
        [G.notes.or.me, 'red']
        [G.notes.or.ae, 'rēod']
    ]
}, {
    sc: 'richt',
    en: 'right',
    gr: ['adj', 'adv', 'n', 'v', 'exclamation']
}, { // S
    sc: 'sair',
    en: [
        ['sore', 'painful'],
        ['sorrowful', 'sad'],
        ['harsh', 'severe'],
        ['involving distress or grief', 'unfortunate'],
        ['<span>of hardship or difficulty</span> hard', 'fierce'],
        ['oppresive', 'hard to bear'],
        ['<span>of a task</span> physically difficult']
    ],
    tr: ['sare', 'aching', 'difficult', 'hard', 'fell', 'dowie', 'melancholic', 'intense'],
    hl: ['sare', 'aching', 'difficult', 'hard', 'fell', 'dowie', 'melancholic'],
    gr: 'adj',
    or: [
        [G.notes.or.as, 'sar(e), sair, sore'],
        [G.notes.or.ae, 'sār']
    ],
    ex: ['She’s sair on her feet!', 'My back’s been sair for a week noo', 'It’s a sair fecht, sae it is'],
}, {
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
    sc: 'sib',
    def: ['relatit by bluid, strynd or mairiage', 'similar'],
    tr: ['related', 'relatit', 'similar', 'seemilar', 'alike', 'close', 'familiar', 'like'],
    gr: 'adj',
    or: [
        [G.notes.or.as, 'sib'],
        [G.notes.or.ae, 'sibb']
    ]
}, {
    sc: 'sklent',
    en: [
        ['slanting', 'to one side'],
        'sidelong <span>of look or glance</span>'
    ],
    tr: ['oblique', 'sidelong'],
    gr: 'adj'
}, {
    sc: 'sleekit',
    en: [
        ['sly', 'cunning'], 'smooth'
    ],
    tr: ['untrustworthy', 'specious'],
    gr: 'adj',
    or: [
        [G.notes.or.as, 'slekit, sleikit'],
        [G.notes.or.me, 'sliken, sleken']
    ],
    ex: 'Ay, I wadna trust the sleekit bastart!'
}, {
    sc: 'sweir',
    pr: 'sweer',
    en: [
        ['lazy', 'slothful', 'indolent'],
        ['unwilling', 'reluctant', 'loath'],
    ],
    tr: 'laith',
    hl: [],
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
    hl: [],
    gr: 'adj',
    or: 'see adj <span>sweir</span>'
}, {
    sc: 'timeous',
    en: 'timely',
    tr: ['in good time', 'in guid time', 'early', 'prompt', 'opportune'],
    gr: 'adj',
    or: [
        [G.notes.or.as, 'tymous']
    ]
}, { // T
    sc: 'their',
    en: 'their',
    tr: ['thair', 'thir'],
    gr: 'possessive adj',
    or: [
        [G.notes.or.as, 'thair, thar(e)'],
        '?'
    ],
}, {
    sc: 'tuim',
    pr: ['tim', 'teem', 'toom', 'taim'],
    en: 'empty',
    tr: ['lanky', 'vacant', 'thin', 'lean', 'unoccupied', 'idling', 'idle'],
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
    ex: [G.ex.r, 'He fand hissel in an unco pairt o toun', 'An unco thrang bourached ootside the pairlament biggin', G.ex.v, 'The mechanic haed an unco job sortin the electrics']
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
    ex: ['Lizzie wis versant in baith Italians and French', 'He wis weel versant in Scots medieval history']
}, { // W
    sc: ['waster', 'wester'],
    en: ['western', 'the more westerly of two places'],
    tr: ['easter', 'eastern'],
    hl: 'wester',
    gr: 'adj',
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
    sc: 'weel',
    en: 'well',
    tr: ['healthy'],
    gr: '',
    or: [
        [G.notes.or.as, 'weill, wele'],
        [G.notes.or.ae, 'wel'],
        [G.notes.or.anor, 'val']
    ]
}, {
    sc: 'wrocht-up',
    en: 'overwrought',
    tr: ['over-wrought', 'wrocht up', 'wrochtup'],
    gr: 'adj',
    ex: G.ex.w
});
