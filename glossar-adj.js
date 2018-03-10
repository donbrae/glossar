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
    tr: 'single-minded',
    gr: 'adj'
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
    ex: G.ex.g,
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
}, { // C
    sc: 'cantie',
    en: [
        ['lively', 'cheerful', 'pleasant'],
        ['small and neat'],
        ['comfortable']
    ],
    tr: 'canty',
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
    sc: 'contrair',
    en: [
        ['contrary', 'opposite', 'unfavourable', 'adverse']
    ],
    gr: 'adj',
    or: 'see n'
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
}, {
    sc: 'easter',
    en: ['eastern', 'the more easterly of two places'],
    tr: ['wester', 'wastern', 'western'],
    hl: 'easter',
    gr: ['adj'],
    def: 'locatit tae the east; the mair easter o twa steids, biggins or ither things; kythes in steid names, e.g. Easter Road'
}, { // F
    sc: 'fantoush',
    en: [
        ['overdressed', 'flashy', 'fancy', 'ultra fashionable']
    ],
    gr: 'adj',
    or: [
        [G.notes.or.mode, 'fanty-sheeny'],
        [G.notes.or.it, 'fantoccino']
    ]
}, {
    sc: 'fashious',
    en: [
        ['troublesome', 'annoying', 'difficult'],
        ['fractious', 'peevish']
    ],
    gr: 'adj'
}, {
    sc: 'feart',
    en: [
        ['afraid', 'anxious']
    ],
    gr: 'adj',
    ex: G.ex.a
}, {
    sc: 'forby',
    sc_alt: 'forbye',
    pr: 'forBye',
    en: [
        ['extraordinary', 'strange', 'unusually good'],
    ],
    gr: ['adj']
}, {
    sc: 'forementioned',
    en: 'aforementioned',
    gr: ['adj'],
    or: ['?' + G.notes.or.me + '; ?by analogy wi <em>foresaid</em>; kythes in ' + G.notes.or.lms + ' an ' + G.notes.or.emods]
}, {
    sc: 'foresaid',
    en: 'aforesaid',
    gr: ['adj'],
    tr: 'mention',
    hl: 'foresaid',
    or: [
        [G.notes.or.as, 'for(e)said, foirsaid'],
        [G.notes.or.me, 'forsayde, forsaid']
    ]
}, { // F
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
    sc: 'gey',
    pr: 'guyee',
    en: [
        ['excellent', 'splendid'],
        ['considerable', 'good-sized', 'great'],
        ['disreputable', 'wild']
    ],
    tr: ['guy', 'giy'],
    gr: ['adj'],
    or: 'see adv'
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
}, { // J
    sc: 'juist',
    en: [
        ['equitable', 'fair', 'lawful', 'justified'],
        ['exact', 'precise', 'correct', 'accurate']
    ],
    tr: ['just', 'jist'],
    gr: ['adj'],
    or: [
        [G.notes.or.me, 'just']
    ]
}, {
    sc: 'depute',
    gr: ['adj'],
    tr: 'deputy',
    hl: 'depute',
    def: 'apointit as, or exercein the duties o, depute',
    ex: ['The preses depute gied a gey dreich screed at the annual collogue', G.ex.f],
    or: [
        [G.notes.or.as, 'depute, deput'],
        [G.notes.or.me, 'depute'],
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
    ex: [
        'I’m no yet fully acquent wi the policy'
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
}, { // R
    sc: 'ragglish',
    en: [
        ['erratic'],
        ['wild', 'unreliable', 'undisciplined'],
        ['uneven', 'straggling', 'higgledy-piggledy'],
        ['of weather: boisterous, uncertain, gusty with rain']
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
    sc: 'shuirly',
    en: [
        ['securely', 'safely'],
        ['with assurance, certainty or conviction', 'undoubtedly']
    ],
    tr: ['with certainty', 'with conviction', 'shairly', 'sheerly', 'seerly', 'surely'],
    gr: 'adv',
    or: 'see adj'
}, {
    sc: 'sweir',
    pr: 'sweer',
    en: [
        ['lazy', 'slothful', 'indolent'],
        ['unwilling', 'reluctant', 'loath'],
    ],
    gr: 'adj',
    or: [
        [G.notes.or.as, 'swer(e), sweir(e), sweer'],
        [G.notes.or.ae, 'swǽr']
    ]
}, {
    sc: 'sweirt',
    en: [
        ['sluggish', 'loath', 'reluctant']
    ],
    gr: 'adj',
    or: 'see adj <span>sweir</span>'
}, { // T
    sc: 'tuim',
    pr: ['toom', 'teem', 'taim', 'tim'],
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
}, {
    sc: ['waster', 'wester'],
    en: ['western', 'the more westerly of two places'],
    tr: ['easter', 'eastern'],
    hl: 'wester',
    gr: ['adj'],
    def: 'locatit tae the wast; the mair waster o twa steids, biggins or ither things; aft-times in steid names, e.g. Wester Hailes'
});
