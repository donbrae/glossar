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
    sc: 'abuin',
    pr: ['abön', 'abün', 'abin', 'abain', 'abeen'],
    en: 'above',
    gr: ['adv', 'prep']
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
}, {
    sc: 'allevolie',
    en: ['at random'],
    gr: ['adv'],
    or: 'see the adj'
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
    ex: ['I\'m braw an weel, thanks', 'Hae yersels a braw an cantie Christmas']
}, {
    sc: 'byous',
    en: [
        ['exceedingly', 'very']
    ],
    gr: 'adv'
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
    tr: 'also',
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
        [G.notes.or.f, 'gai']
    ]
}, {
    sc: ['gey an', 'gey and'],
    en: [
        ['rather', 'very'],
    ],
    gr: 'adv',
    ex: [G.ex.g, 'The band’s new album wis gey an listenable']
}, {
    sc: 'hinderly',
    en: 'eventually',
    gr: ['adv']
}, { // J
    sc: 'juist',
    pr: ['jöst', 'jüst', 'düst', 'joost', 'doost', 'jist', 'dist', 'jeest'],
    en: [
        ['exactly', 'accurately', 'correctly', 'directly'],
        ['at this time', 'just now', 'precisely'],
        ['only', 'merely', 'barely']
    ],
    tr: 'just',
    gr: ['adv'],
    or: 'see adj'
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
        [G.notes.or.as, 'certis'],
        [G.notes.or.me, 'certes']
    ]
}, { // O
    sc: 'ony',
    en: [
        ['in any degree', 'to any extent'],
        ['in any way', 'at all']
    ],
    gr: ['adv'],
    or: 'see adj'
}, {
    sc: 'onyplace',
    en: 'anywhere',
    gr: ['adv']
}, {
    sc: 'onywhaur',
    en: 'anywhere',
    gr: ['adv']
}, {
    sc: 'onywey',
    en: [
        ['anyhow', 'in any way']
    ],
    tr: 'anyway',
    gr: ['adv']
}, {
    sc: 'onyweys',
    en: [
        ['anyhow', 'in any way', 'anywhere']
    ],
    tr: 'anyway',
    gr: ['adv']
}, {
    sc: 'ocht',
    en: [
        ['somewhat', 'rather', 'in some way', 'to some degree']
    ],
    gr: ['adv']
}, { // S
    sc: 'shuir',
    en: [
        ['surely', 'indeed', 'for certain']
    ],
    gr: ['adv'],
    tr: ['shair', 'shör', 'shür', 'sheer', 'seer', 'sure'],
    or: 'see adj'
}, {
    sc: 'aefauldly',
    en: [
        ['sincerely', 'honestly', 'faithfully']
    ],
    gr: 'adv'
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
