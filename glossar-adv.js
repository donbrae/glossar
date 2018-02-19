/**
 * Adverbs
 */

G.adv = {}; // More complex adverbs

/**
 * Add adverbs to dictionary object
 */

G.dict.push({ // A
    sc: 'ablo',
    pr: 'abLo',
    sc_alt: 'ablow',
    en: 'below',
    gr: ['prep', 'adv']
}, {
    sc: 'about',
    sc_alt: 'aboot',
    pr: 'aboot',
    en: 'about',
    tr: 'anenst',
    hl: 'about',
    gr: ['prep', 'adv']
}, {
    sc: 'aft',
    en: [
        ['often', 'oft']
    ],
    gr: ['adv'],
    or: [
        [G.notes.or.ae, 'oft']
    ]
}, {
    sc: 'aft-times',
    tr: 'afttimes',
    en: [
        ['often', 'frequently']
    ],
    gr: ['adv']
}, { // B
    sc: 'braw',
    en: [
        ['well', 'finely'],
        ['very', 'extremely']
    ],
    tr: ['bra', 'braa', 'brow'],
    gr: ['adv'],
    or: 'see the adj'
}, {
    sc: ['braw an', 'braw and'],
    en: [
        ['very', 'extremely']
    ],
    gr: ['adv'],
    qu: 'I\'m braw an weel, thanks'
}, { // C
    sc: 'contrair',
    en: [
        ['in a contrary way']
    ],
    tr: 'contrarily',
    gr: 'adv',
    or: 'see n'
}, {
    sc: 'forby',
    sc_alt: 'forbye',
    pr: 'forBye',
    en: [
        ['beyond', 'past'],
        ['besides', 'in addition', 'as well']
    ],
    gr: ['adv']
}, {
    sc: 'gey',
    pr: 'guyee',
    en: [
        ['considerably', 'very', 'rather'],
    ],
    tr: ['guy', 'giy'],
    gr: ['adv'],
    or: [
        [G.notes.or.as, 'gay(e), gey'],
        ['frae the ' + G.notes.or.f, 'gai']
    ]
}, {
    sc: ['gey an', 'gey and'],
    en: [
        ['rather', 'very'],
    ],
    gr: 'adv'
}, {
    sc: 'hinderly',
    en: 'eventually',
    gr: ['adv']
}, {
    sc: 'guid',
    en: [
        ['good', 'very', 'pretty']
    ],
    tr: G.adj.guid.trigs,
    pr: G.adj.guid.pr,
    gr: 'adv'
}, {
    sc: 'atweel',
    en: [
        ['assuredly', 'certainly', 'indeed']
    ],
    gr: 'adv'
}, {
    sc: 'atour',
    en: [
        ['besides', 'over and above', 'moreover', 'in addition']
    ],
    tr: 'attour',
    gr: ['adv', 'prep']
}, {
    sc: ['certie', 'certes'],
    pr: ['certie', 'certis'],
    en: [
        ['certainly', 'assuredly']
    ],
    gr: ['adv'],
    or: [
        [G.notes.or.me, 'certes']
    ]
}, {
    sc: 'than',
    pr: ['than', 'thaun', 'thin', 'dan'],
    en: 'then',
    gr: ['adv', 'n']
}, {
    sc: 'sicweys',
    en: 'thus',
    gr: ['adv']
}, {
    sc: ['whan', 'fan'],
    pr: ['whan', 'whaun', 'whin', 'fan', 'fin', 'aan'],
    en: 'when',
    gr: ['adv', 'conj']
}, {
    sc: ['whiles', 'fyles'],
    pr: ['whilez', 'filez'],
    en: [
        ['sometimes', 'at times', 'occasionally']
    ],
    gr: ['adv']
});
