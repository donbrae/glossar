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
    sc: 'a bittie',
    en: [
        ['somewhat', 'to a small extent', 'a little too']
    ],
    tr: ['bittie', 'little', 'ower', 'owre', 'too'],
    hl: ['little', 'a little', 'a bittie', 'bittie'],
    or: 'see n',
    ex: ['Jamie haed recovert frae the flu a bittie, but didna yet feel up tae gaun back til his wark', 'I’m a bittie tired for gaun out, likes', 'It’s a bittie cauld for shorts an t-shirts, is it no?']
}, {
    sc: ['braw', 'brawly'],
    en: [
        ['well', 'finely'],
        ['very', 'extremely']
    ],
    tr: ['bra', 'braa', 'brow'],
    gr: ['adv'],
    or: 'see the adj',
    ex: G.ex.h
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
    tr: ['contrarily', 'against'],
    hl: 'contrair',
    gr: 'adv',
    or: 'see n',
    ex: 'He chynged the contents o the file ’ithout takkin a backup, contrair til best prattick'
}, {
    sc: 'evendoun',
    en: [
        ['absolutely', 'completely', 'downright']
    ],
    tr: 'evendoon',
    gr: 'adv'
}, {
    sc: ['exact', 'exactly'],
    en: 'precisely',
    tr: 'exackly',
    gr: 'adv',
    or: 'see adj',
    ex: 'Meet me there at fower o’clock exact'
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
    tr: ['just', 'exack', 'exact'],
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
    tr: ['attour', 'further'],
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
}, { // M
    sc: 'maist',
    en: [
        ['to the greatest extent', 'in the highest degree'],
        '<span>as the superlative</span> most',
        'very',
        'mainly'
    ],
    tr: 'most',
    gr: 'adv',
    or: 'see pron',
    ex: ['She wis maist sonsie in her ettles', 'It wis maist kind o ye', 'Whit she wantit maist o aw wis a vacance']
}, {
    sc: 'maist',
    def: 'aphetic mak o <em>awmaist</em>',
    tr: ['almost', 'aamaist', 'awmaist'],
    gr: 'adv'
}, {
    sc: 'maistlins',
    en: [
        ['almost', 'nearly']
    ],
    gr: 'adv'
}, {
    sc: 'maistly',
    en: [
        ['most of all', 'especially'],
        ['almost', 'nearly']
    ],
    gr: 'adv',
    ex: ['The wather wis maistly sunny', 'I‘m maistly fínisht in the gairden']
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
    sc: 'shuirly',
    en: [
        ['securely', 'safely'],
        ['with assurance, certainty or conviction', 'undoubtedly']
    ],
    tr: ['with certainty', 'with conviction', 'shairly', 'sheerly', 'seerly', 'surely'],
    gr: 'adv',
    or: 'see adj',
    ex: 'Ye’d shuirly need tae hae a permit, wad ye no?'
}, {
    sc: 'sicweys',
    en: 'thus',
    gr: ['adv']
}, {
    sc: 'aefauldly',
    en: [
        ['sincerely', 'honestly', 'faithfully']
    ],
    gr: 'adv'
}, { // T
    sc: 'than',
    pr: ['than', 'thaun', 'thin', 'dan'],
    en: 'then',
    gr: ['adv', 'n']
}, {
    sc: 'the day',
    en: 'today',
    gr: 'adv, n',
    ex: [G.ex.n, G.ex.o, G.ex.p]
}, { // U
    sc: 'unco',
    en: [
        ['very', 'exceedingly', 'extremely']
    ],
    gr: 'adv',
    or: 'see adj'
}, {
    sc: 'up the stair',
    en: 'upstairs',
    gr: 'phrasal adv',
    ex: ['Awa up the stair an hae a leuk', 'My neebour up the stair telt me']
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
