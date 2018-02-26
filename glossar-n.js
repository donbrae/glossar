/**
 * Nouns
 */

G.n = {}; // More complex nouns

/**
 * Add nouns to dictionary object
 */

G.dict.push({
    sc: 'associe',
    pr: 'aSosee',
    en: 'association',
    gr: ['n'],
    or: [
        ['?' + G.notes.or.f, 'associé']
    ]
}, { // C
    sc: 'certificat',
    sc_alt: 'certificate',
    en: 'certificate',
    gr: ['n'],
    or: [
        [G.notes.or.ms, 'certificat'],
        [G.notes.or.mf, 'certificat']
    ],
}, {
    sc: 'claes',
    en: 'clothes',
}, {
    sc: 'dask',
    en: [
        ['desk', 'seat', 'church pew']
    ],
    gr: ['n'],
    or: [
        [G.notes.or.as + ' (frae 1530)', 'dask, daske'],
        ['possible influence o ' + G.notes.or.as + ' <em>dais, das</em>, frae the ' + G.notes.or.nfd, 'dais']
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
}, {
    sc: 'depute',
    en: 'a deputy',
    gr: ['n'],
    tr: 'deputy',
}, { // E
    sc: 'eneuch',
    pr: ['inyuch', 'inyooch', 'unyooch', 'unooch', 'unyoch'],
    tr: 'sufficient',
    hl: 'eneuch',
    en: 'enough',
    gr: ['n', 'adj', 'adv']
}, {
    sc: 'environs',
    en: [
        ['the environment', 'surrounds']
    ],
    tr: 'environment',
    gr: ['n'],
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
    gr: ['n'],
    or: 'see v'
}, {
    sc: 'ettlin',
    en: [
        ['purpose', 'intention', 'effort', 'endeavour', 'eagerness', 'ambition']
    ],
    tr: 'ettle',
    hl: 'ettlin',
    gr: ['n']
}, {
    sc: 'fowk',
    pr: ['fuowk', 'foak'],
    en: 'people',
    gr: ['n'],
    or: [
        [G.notes.or.ae, 'folc']
    ]
}, { // H
    sc: 'hauden gaun',
    en: 'continuation',
    gr: ['n']
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
    gr: ['n'],
    or: [
        [G.notes.or.as, 'mete, meit, met, mait, meat'],
        [G.notes.or.ae, 'mete']
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
    gr: ['n'],
    or: 'see v'
}, {
    sc: 'mindin',
    en: [
        ['a memory', 'a recollection']
    ],
    tr: ['memory', 'recollection'],
    gr: ['n']
}, { // N
    sc: 'nat',
    def: 'an ocht derogatory term for nationalist; a body that’s for Scotland’s polítical independence',
    gr: ['n', 'informal', 'derogatory'],
}, { // O
    sc: 'origin',
    en: 'origin',
    gr: ['n']
}, {
    sc: 'ocht',
    en: [
        ['aught', 'anything'], 'nothing'
    ],
    gr: ['n']
}, {
    sc: 'uiss',
    pr: ['yös', 'yis', 'ees', 'yoos'],
    tr: ['yiss', 'uise', 'yaise', 'yaize'],
    hl: ['uiss', 'yiss', 'ees'],
    en: 'use',
    gr: ['n']
}, {
    sc: 'roaster',
    def: 'a body that haivers, fashes fowk wi their ill laits, or is thocht tae be makkin an ídiot o thaimsels',
    gr: ['n', 'informal', 'derogatory']
}, { // S
    sc: 'springheid',
    pr: 'springheed',
    en: [
        ['source', 'origin']
    ],
    gr: ['n']
}, {
    sc: 'swither',
    en: [
        ['state of indecision or doubt', 'hesitation', 'uncertainty'],
        ['state of nervousness or agitation', 'panic', 'fluster'],
        ['state of confusion', 'tangled or muddled condition'],
        ['dithering, undecided person']
    ],
    tr: ['indecision', 'doubt', 'nervousness', 'agitation', 'confusion', 'tangle', 'muddle', 'ditter', 'doiter'],
    hl: ['indecision', 'doubt', 'nervousness', 'agitation', 'confusion', 'tangle', 'muddle'],
    gr: ['n'],
    or: 'see v'
}, {
    sc: 'toun',
    pr: 'toon',
    en: 'town',
    gr: ['n'],
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
    sc: 'yoon',
    def: 'a derogatory term for unionist; a body that’s for the hauden gaun o the polítical union atween Scotland an England',
    gr: ['n', 'informal', 'derogatory']
}, {
    sc: 'zoomer',
    def: 'a body that’s ragglish or allevolie',
    gr: ['n', 'informal', 'derogatory']
});
