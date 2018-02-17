/**
 * Adverbs
 */

G.adv = {}; // More complex adverbs

/**
 * Add adverbs to dictionary object
 */

G.dict.push({
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
    sc: 'bluitert',
    tr: ['bloutered', 'blootered', 'bloutert', 'blootert'],
    en: ['drunk', 'having been hit or kicked hard'],
    gr: ['adj', 'informal']
}, {
    sc: 'contrair',
    en: [
        ['in a contrary way']
    ],
    tr: 'contrarily',
    gr: 'adv',
    or: [
        [G.notes.or.af, 'contraire']
    ]
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
    sc: ['certes', 'certe'],
    sc_alt: 'certie',
    pr: ['certis', 'certie'],
    en: [
        ['assuredly', 'to be sure', 'sure enough', 'certainly']
    ],
    gr: ['adv'],
    or: [
        [G.notes.or.me, 'certis, certes'],
        [G.notes.or.af, 'certes'],
        [G.notes.or.l, 'certis, certas, certo']
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
