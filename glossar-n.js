/**
 * Nouns
 */

G.n = {}; // More complex nouns

/**
 * Add nouns to dictionary object
 */

G.dict.push({
    sc: 'annualrent',
    def: ['rent peyed ilka year', 'interest on borraed siller'],
    tr: ['interest', 'annual rent'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'annualrent, annual rent']
    ]
}, {
    sc: 'associe',
    pr: 'aSosee',
    en: 'association',
    gr: 'n',
    or: [
        ['?' + G.notes.or.f, 'associé']
    ]
}, { // C
    sc: 'certificate',
    en: 'certificate',
    gr: 'n',
    or: [
        [G.notes.or.ms, 'certificat'],
        [G.notes.or.mf, 'certificat']
    ],
}, {
    sc: 'claes',
    en: 'clothes',
    gr: 'n'
}, {
    sc: 'collectorie',
    def: 'the office o (tax) collector',
    tr: 'tax collector',
    gr: ['n', 'obsolete'],
    or: [
        ['Ablins ' + G.notes.or.af, 'collecterie']
    ]
}, {
    sc: 'complouther',
    pr: 'comploother',
    en: [
        ['a mix up', 'confusion'], 'a mixture', 'a conversation'
    ],
    tr: ['mix up', 'mix-up', 'mixture', 'conversation', 'compluter', 'compluther'],
    gr: 'n',
    or: ['wankent, but mak compare wi ' + G.notes.or.af + ' <span>complote</span>, ‘a raivelt thrang o fowk’']
}, {
    sc: 'componer',
    en: 'composer',
    gr: 'n',
    or: 'see the v <span>tae compone</span>'
}, {
    sc: 'composition',
    en: [
        ['<span>law</span> a sum paid in settlement of a claim, dispute or obligation; the amount fixed by mutual agreement'],
        ['a piece of writing; a work of literature, music or art'],
        ['a combination of elements', 'a mixture']
    ],
    tr: 'settlement',
    gr: 'n',
    or: [
        [G.notes.or.as, 'compositioun, composicioun'],
        [G.notes.or.me, 'composicioun'],
        [G.notes.or.l, 'compositio']
    ]
}, {
    sc: 'contrair',
    en: [
        ['the contrary', 'the opposite']
    ],
    tr: ['contrary', 'opposite', 'on the contrary', 'to the contrary'],
    hl: ['contrary', 'opposite'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'contrar, contrair'],
        ['frae the ' + G.notes.or.af, 'contraire']
    ]
}, { // D
    sc: 'dask',
    en: [
        ['desk', 'seat', 'church pew']
    ],
    gr: 'n',
    or: [
        [G.notes.or.as + ' (frae 1530)', 'dask, daske'],
        ['possible influence o ' + G.notes.or.as + ' <em>dais, das</em>, frae the ' + G.notes.or.nfd, 'dais']
    ]
}, {
    sc: 'debursement',
    en: 'disbursement',
    gr: 'n',
    or: 'see v <span>deburse</span>'
}, {
    sc: 'defeat',
    en: 'defeat',
    tr: ['defait', 'defeet'],
    gr: 'n',
    or: 'see v'
}, {
    sc: 'defect',
    pr: ['deefekt', 'deefek'],
    en: [
        ['shortcoming', 'imperfection', 'flaw']
    ],
    gr: 'n',
    or: [
        [G.notes.or.as, 'defect'],
        [G.notes.or.l, 'dēfectus']
    ]
}, {
    sc: 'defection',
    en: [
        ['desertion', 'failure in duty'],
        ['defect', 'flaw', 'failure']
    ],
    gr: 'n',
    or: [
        [G.notes.or.as, 'defection'],
        [G.notes.or.l, 'dēfectio']
    ]
}, {
    sc: 'depute',
    en: 'a deputy',
    gr: 'n',
    tr: 'deputy',
    ex: ['The Green Pairty convener wis ettlin tae appynt a depute by the end o the simmer'],
    or: 'see adj'
}, {
    sc: 'desuetude',
    en: [
        ['disuse', 'discontinuance']
    ],
    gr: 'n law',
    or: [
        [G.notes.or.f, 'désuétude'],
        [G.notes.or.l, 'dēsuētūdo']
    ],
    ex: 'It wis an auld law that haed fawen intae desuetude'
}, { // E
    sc: 'eneuch',
    pr: ['inyuch', 'inyooch', 'unyooch', 'unooch', 'unyoch'],
    tr: 'sufficient',
    hl: 'eneuch',
    en: 'enough',
    gr: ['n', 'adj', 'adv'],
    ex: 'I’ve haed juist about eneuch o your haiverin'
}, {
    sc: 'environs',
    en: [
        ['the environment', 'surrounds']
    ],
    tr: 'environment',
    gr: 'n',
    or: [
        '?uissage as n frae Modren English',
        G.notes.or.as + ' haes the v <em>enveron, inviroun, inveroun</em> <em>(to encircle, surround)</em>', ['frae the ' + G.notes.or.me, 'envirounen'],
        [G.notes.or.af, 'environner']
    ]
}, {
    sc: 'ettle',
    en: [
        ['one\'s aim or purpose', 'one\'s design or object'],
        ['an effort', 'an attempt'],
        ['an ambition', 'a desire']
    ],
    tr: ['objective', 'effort', 'attempt', 'aim', 'purpose', 'design', 'object', 'ambition', 'desire', 'ettlin'],
    hl: ['objective', 'effort', 'attempt', 'aim', 'purpose', 'design', 'object', 'ambition', 'desire'],
    gr: 'n',
    or: 'see v'
}, {
    sc: 'ettlin',
    en: [
        ['purpose', 'intention', 'effort', 'endeavour', 'eagerness', 'ambition']
    ],
    tr: 'ettle',
    hl: 'ettlin',
    gr: 'n'
}, { // F
    sc: 'fankle',
    en: [
        ['tangle', 'muddle']
    ],
    gr: 'n',
    or: [
        [G.notes.or.as, 'fang'],
        [G.notes.or.anor, 'fang']
    ]
}, {
    sc: 'fash',
    en: [
        ['trouble', 'bother', 'annoyance'], 'a troublesome person'
    ],
    gr: 'n',
    or: 'see v',
    ex: 'Whit wi aw the snaw, gettin tae wark wis a muckle fash'
}, {
    sc: 'fasherie',
    en: [
        ['trouble', 'annoyance', 'fuss']
    ],
    gr: 'n',
    or: [
        [G.notes.or.ms, 'fasch(e)rie, fash(e)rie'],
        [G.notes.or.mf, 'fascherie']
    ],
    ex: 'There wis a wee bit fasherie atween supporters efter the fitba gemm'
}, {
    sc: 'feartie',
    en: 'coward',
    gr: 'n'
}, {
    sc: 'fowk',
    pr: ['fuowk', 'foak'],
    en: 'people',
    gr: 'n',
    or: [
        [G.notes.or.ae, 'folc']
    ]
}, { // G
    sc: 'gloriosity',
    en: 'self-importance',
    tr: ['boast', 'gloriositie', 'self importance'],
    hl: ['gloriosity', 'gloriositie', 'self importance'],
    gr: 'n',
    or: [
        [G.notes.or.ms, 'gloriositie'],
        [G.notes.or.mf, 'glorieuseté']
    ]
}, { // H
    sc: 'hauden gaun',
    en: 'continuation',
    gr: 'n'
}, {
    sc: 'hous',
    sc_alt: ['hoose'],
    pr: 'hooss',
    en: 'house',
    tr: ['houss', 'hooss'],
    gr: 'n'
}, {
    sc: 'maet',
    sc_alt: 'meat',
    en: [
        ['food', 'sustenance'],
        'a meal',
        'meat'
    ],
    tr: ['meal', 'mait'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'mete, meit, met, mait, meat'],
        [G.notes.or.ae, 'mete']
    ]
}, { // I
    sc: 'ilk',
    en: [
        ['a family', 'a race', 'a kind', 'a type']
    ],
    tr: ['family', 'race', 'kind', 'type'],
    gr: 'n'
}, {
    sc: ['ilkane', 'ilk ane'],
    en: [
        ['each one', 'everyone']
    ],
    gr: ['pron']
}, {
    sc: 'accress',
    en: 'increase',
    gr: 'n',
    or: 'see v'
}, {
    sc: 'knawledge',
    en: 'knowledge',
    gr: 'n'
}, { // L
    sc: 'lad',
    en: [
        ['a boy', 'young man'],
        ['a male servant', 'groom'],
        'a son',
        'a male sweetheart'
    ],
    tr: ['son', 'male sweetheart', 'boy', 'young man', 'laddie', 'loun'],
    hl: ['son', 'male sweetheart', 'boy', 'young man'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'lad']
    ]
}, {
    sc: 'laddie',
    en: ['a young man', 'a male child', 'a male sweetheart', 'a son'],
    tr: ['young man', 'male child', 'male sweetheart', 'son', 'boy', 'loun', 'lad'],
    hl: ['young man', 'male child', 'male sweetheart', 'son', 'boy'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'laddie']
    ]
}, {
    sc: 'loun',
    pr: 'loon',
    en: [
        ['a young man', 'boy', 'youth'],
        ['a young farm worker'],
        ['a male child', 'son', 'baby boy']
    ],
    tr: ['young man', 'farm-boy', 'farm boy', 'lad', 'laddie'],
    hl: ['young man', 'farm-boy', 'farm boy'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'loun']
    ]
}, { // M
    sc: 'maun',
    pr: 'maun',
    en: [
        ['compulsion', 'necessity']
    ],
    gr: 'n',
    or: 'see v'
}, {
    sc: 'mind',
    def: 'the mind; that whilk is brocht back tae mind or mindit, memory, a mindin',
    gr: 'n',
    or: 'see v'
}, {
    sc: 'mindin',
    en: [
        ['a memory', 'a recollection']
    ],
    tr: ['memory', 'recollection'],
    gr: 'n'
}, { // N
    sc: 'nationalist',
    def: 'a body that’s for Scotland’s polítical independence',
    gr: ['n'],
}, {
    sc: 'naturality',
    en: [
        ['innate ability or intelligence', 'talent']
    ],
    gr: 'n',
    or: [
        [G.notes.or.as, 'naturalité, naturalty'],
        [G.notes.or.f, 'naturalité'],
        [G.notes.or.l, 'nātūrālitas']
    ]
}, {
    sc: 'nat',
    def: 'ocht derogatory term for a Scots nationalist',
    gr: ['n', 'informal']
}, { // O
    sc: 'onybody',
    en: 'anybody',
    tr: ['oniebody', 'emdie', 'emdy'],
    gr: 'n'
}, {
    sc: 'origin',
    en: 'origin',
    gr: 'n'
}, {
    sc: 'ocht',
    en: [
        ['aught', 'anything'], 'nothing'
    ],
    gr: 'n',
    ex: ['Jamie didna hae the time tae mak ocht for the bake sale', 'John haed ocht ava tae dae wi the maist recent failt IT project']
}, {
    sc: 'pneumonie',
    en: 'pneumonia',
    gr: 'n',
    or: [
        [G.notes.or.as, 'peripneumonie'],
        [G.notes.or.eme, 'peripneumony'],
        [G.notes.or.f, 'péripneumonie']
    ],
    ex: 'She wis awfu unweel wi the pneumonie'
}, { // Q
    sc: ['quine', 'quinie'],
    sc_alt: 'quean',
    pr: ['kwine', 'kwinie'],
    en: [
        ['a young (unmarried) woman', 'a wench', 'a girl'],
        ['a female child', 'a schoolgirl'],
        'a female sweetheart',
        'a daughter'
    ],
    tr: ['young woman', 'wench', 'girl', 'schoolgirl', 'sweetheart', 'daughter', 'lass', 'lassie', 'dochter'],
    gr: 'n',
    or: [
        [G.notes.or.as, 'quene, quein'],
        [G.notes.or.ae, 'cwēn, cwene']
    ]
}, {
    sc: 'uiss',
    pr: ['yös', 'yis', 'ees', 'yoos'],
    tr: ['yiss', 'uise', 'yaise', 'yaize'],
    hl: ['uiss', 'yiss', 'ees'],
    en: 'use',
    gr: 'n'
}, { // R
    sc: 'rhetoric',
    pr: 'rEtorik',
    en: 'rhetoric',
    gr: 'n',
    or: [
        [G.notes.or.as, 'rethorik, rethorie, rethoreis'],
        [G.notes.or.af, 'rhétorique'],
        [G.notes.or.l, 'rhētorica'],
        'frae the Greek <span>rhētorikē</span>'
    ],
    ex: 'It wis naething but tuim rhetoric'
}, {
    sc: 'roaster',
    def: 'a body that haivers, fashes fowk wi their ill laits, or is thocht tae be makkin an ídiot o thaimsels',
    gr: ['n', 'informal', 'derogatory']
}, { // S
    sc: 'signatur',
    en: 'signature',
    gr: 'n'
}, {
    sc: 'springheid',
    pr: 'springheed',
    en: [
        ['source', 'origin']
    ],
    gr: 'n'
}, {
    sc: 'swither',
    en: [
        ['a state of indecision or doubt', 'hesitation', 'uncertainty'],
        ['a state of nervousness or agitation', 'panic', 'fluster'],
        ['a state of confusion', 'a tangled or muddled condition'],
        ['a dithering, undecided person']
    ],
    tr: ['indecision', 'doubt', 'nervousness', 'agitation', 'confusion', 'tangle', 'muddle', 'ditter', 'doiter'],
    hl: ['indecision', 'doubt', 'nervousness', 'agitation', 'confusion', 'tangle', 'muddle'],
    gr: 'n',
    ex: 'Will wis in a swither about whit Hogmanay pairty tae gang tae',
    or: 'see v'
}, {
    sc: 'toun',
    pr: 'toon',
    en: 'town',
    gr: 'n',
    or: [
        [G.notes.or.as, 'toun, town(e), ton(e)'],
        [G.notes.or.ae, 'tūn']
    ]
}, { // W
    sc: 'wabsteid',
    en: 'website',
    pr: 'wabsteed',
    tr: ['websteid', 'websteed', 'wabsite'],
    gr: 'n',
}, {
    sc: 'unionist',
    def: 'a body that’s for the hauden gaun o the polítical union atween Scotland an England',
    gr: ['n']
}, {
    sc: 'yoon',
    def: 'a derogatory term for unionist',
    gr: ['n', 'informal', 'derogatory']
}, {
    sc: 'zoomer',
    def: 'a body that’s ragglish or allevolie',
    gr: ['n', 'informal', 'derogatory']
});
