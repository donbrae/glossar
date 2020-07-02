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
    sc: 'aboot',
    en: 'about',
    tr: 'anenst',
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
    tr: ['alevoly', 'alevolie'],
    or: 'see the adj'
}, {
    sc: 'awmaist',
    en: 'almost',
    gr: 'adv'
}, { // B
    sc: 'a bittie',
    en: [
        ['somewhat', 'to a small extent', 'a little too']
    ],
    tr: ['bittie', 'little', 'ower', 'owre', 'too'],
    hl: ['little', 'a little', 'a bittie', 'bittie'],
    or: 'see n',
    ex: ['Jamie haed recovert frae the flu a bittie, but didna yet feel up tae gaun back til his wark', 'I’m a bittie tired for gaun oot, likes', 'It’s a bittie cauld for shorts an t-shirt, is it no?']
}, {
    sc: ['braw', 'brawly'],
    en: [
        ['well', 'finely'],
        ['very', 'extremely']
    ],
    tr: ['bra', 'braa', 'brow', 'good'],
    gr: ['adv'],
    or: 'see the adj',
    ex: G.ex.h
}, {
    sc: ['braw an', 'braw and'],
    en: [
        ['very', 'extremely']
    ],
    gr: ['adv'],
    ex: ['I\'m braw and weel, thanks', 'Hae yoursels a braw and cantie Christmas']
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
}, { // D
    sc: 'doun',
    pr: 'doon',
    en: 'down',
    gr: ['adv', 'prep', 'adj'],
    or: [
        [G.notes.or.as, 'doun, down']
    ]
}, { // E
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
    ex: 'Meet me there at fower oors exact'
}, { // F
    sc: 'fell',
    en: [
        ['extremely', 'very', 'severely'],
        ['vigorously', 'energetically']
    ],
    gr: 'adv',
    or: 'see adj'
}, {
    sc: 'forby',
    sc_alt: 'forbye',
    pr: 'forBye',
    en: [
        ['beyond', 'past'],
        ['besides', 'in addition', 'as well']
    ],
    tr: ['also', 'too', 'additionally'],
    hl: ['forby', 'also', 'additionally'],
    gr: ['adv']
}, { // G
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
    ex: [G.ex.g, 'The band’s new album wis gey and listenable']
}, {
    sc: 'hinderly',
    en: 'eventually',
    gr: ['adv']
}, { // J
    sc: 'juist',
    pr: G.pr.juist,
    en: [
        ['exactly', 'accurately', 'correctly', 'directly'],
        ['at this time', 'just now', 'precisely'],
        ['only', 'merely', 'barely']
    ],
    tr: ['just', 'exack', 'exact'],
    gr: ['adv'],
    or: 'see adj',
    ex: [G.ex.g1, 'It’s juist gane echt oors', G.ex.h1]
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
    tr: ['attour', 'further', 'as well', 'too', 'additionally', 'mairower', 'mairowre'],
    hl: ['attour', 'further', 'atour', 'additionally', 'mairower', 'mairowre'],
    gr: ['adv', 'prep']
}, {
    sc: 'mairower',
    en: 'moreover',
    tr: 'mairowre',
    gr: 'adv',
    tr: ['besides', 'further'],
    hl: 'besides',
    or: [
        [G.notes.or.as, 'mar(e)over, mairower']
    ]
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
    tr: ['most', 'maste'],
    gr: 'adv',
    or: 'see pron',
    ex: ['It wis maist kind o ye', 'What she wantit maist o aw wis a vacance']
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
    tr: 'mostly'
}, {
    sc: 'muckle',
    pr: ['muckl', 'meekl'],
    en: [
        ['to a large extent or degree']
    ],
    tr: ['much', 'greatly', 'very', 'exceedingly', 'mukkil'],
    gr: 'adv',
    or: 'see adj'
}, {
    sc: 'no',
    en: 'not',
    gr: 'adv',
    tr: ['nae', 'nay'],
    or: [
        [G.notes.or.as, 'no, nocht']
    ],
    ex: ['Haud on, I’ll no be a meenit', 'I’v no haed time tae check my email yet'],
    inf: G.notes.c
}, {
    sc: 'nae',
    en: 'not',
    gr: 'adv',
    tr: ['no', 'nay'],
    or: [
        [G.notes.or.as, 'na']
    ],
    ex: ['I’v nae heard that sang afore', 'She’s been nae weel for a whilie nou']
}, {
    sc: ['na', 'naw', 'nae'],
    en: 'no',
    gr: 'adv',
    def: 'the negative repone',
    tr: 'nay',
    ex: 'Naw thanks, pal',
    or: [
        [G.notes.or.as, 'na'],
        [G.notes.or.as, 'nay']
    ]
}, {
    sc: ['nae'],
    en: 'no',
    gr: ['adj', 'adv'],
    tr: 'nay',
    ex: ['It’s nae bother', 'Nae nukes!', 'The’r nae mair tickets left'],
    or: [
        [G.notes.or.as, 'na, nae']
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
}, {
    sc: 'for ordinar',
    en: [
        ['normally', 'usually']
    ],
    tr: 'ordinarily',
    gr: 'adv',
    or: 'see n <em>ordinar</em>'
}, {
    sc: 'ordinar',
    en: [
        ['usually', 'in the usual way', 'somewhat', 'to a certain extent']
    ],
    tr: 'ordinarily',
    gr: 'adv',
    or: 'see the adj'
}, {
    sc: 'ower',
    pr: ['uower', 'oar', 'oor', 'err'],
    en: [
        ['above', 'covering', 'downward (over)'],
        ['across', 'sideways'],
        ['overmuch, excessively'],
        ['from beginning to end', 'throughout'],
        ['off to sleep']
    ],
    tr: ['owre', 'ootthrou', 'overly', 'abuin', 'over', 'too'],
    gr: 'adv',
    or: [
        [G.notes.or.as, 'over, ouer, ower'],
        [G.notes.or.ae, 'ofer']
    ]
}, { // S
    sc: 'sae',
    en: 'so',
    tr: ['thus', 'therefore', 'as', 'actually', 'indeed', 'in order that', 'for tae'],
    gr: 'adv',
    or: [
        [G.notes.or.as, 'sa, swa, sua'],
        [G.notes.or.ae, 'swā']
    ],
    ex: ['I wis gey forfauchelt sae didna bather gaun oot', 'The wather’s no sae nice the day', 'He haed tae pit mair siller in the pairkin meter sae as tae evite gettin a ticket', 'Ye’r a bonnie fechter, sae ye ar!']
}, {
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
    ex: ['Ye’d shuirly need tae hae a permit, wad ye no?', G.ex.x]
}, {
    sc: 'sicweys',
    en: 'thus',
    gr: ['adv']
}, {
    sc: 'syne',
    pr: ['sine', 'seen'],
    en: [
        ['thereupon', 'directly after', 'next', 'afterwards', 'subsequently'],
        ['ago', 'since', 'before now'],
        ['from then', 'since', 'thereafter', 'as a result', 'consequently'],
        ['in that case', 'so', 'then']
    ],
    tr: 'than',
    gr: 'adv',
    or: [
        [G.notes.or.as, 'syn(e), sin, sen, sene'],
        [G.notes.or.ae, 'siþþan']
    ]
}, {
    sc: 'aefauldly',
    tr: 'aefauldlie',
    en: [
        ['sincerely', 'honestly', 'faithfully']
    ],
    gr: 'adv'
}, { // T
    sc: ['than'],
    pr: ['than', 'thaun', 'thin', 'dan'],
    en: ['at a particular time', 'subsequently', ['consequently', 'in that case']],
    tr: 'then',
    gr: ['adv'],
    ex: 'Lat’s gang til the pairty for a wee whilie than come hame',
    or: [
        [G.notes.or.as, 'than, then'],
        [G.notes.or.ae, 'ðanne']
    ]
}, {
    sc: 'the day',
    en: 'today',
    gr: ['adv', 'n'],
    ex: [G.ex.n, G.ex.o, G.ex.p],
    or: '<span>the day</span> first appears in scrievit form in ' + G.notes.or.as + ' frae aboot 1500'
}, {
    sc: 'the morn',
    en: [
        ['tomorrow', 'the following morning or day']
    ],
    gr: ['adv', 'n'],
    or: '<span>the morn(e)</span> ‘the follaein day’ dates back til aboot 1470',
    ex: 'I\'ll see ye the morn!'
}, {
    sc: 'the morra',
    en: 'tomorrow',
    gr: ['adv', 'n'],
    or: G.notes.or.as + ' haes <em>the morrow</em>',
    ex: 'Gie me a call the morra'
}, {
    sc: 'the nicht',
    en: 'tonight',
    tr: 'the night',
    gr: ['adv', 'n'],
    ex: ['Are ye gaun oot the nicht?', 'It’s awfu cauld the nicht'],
    or: 'first kythin DOST haes o <span>the nicht</span> (in the mak <em>the nycht</em>) ‘the present or approachin nicht’ is frae 1475'
}, {
    sc: 'the year',
    en: 'this year',
    or: [
        [G.notes.or.as, 'the year']
    ]
}, {
    sc: 'the nou',
    en: [
        ['just now', 'at present', 'just a moment ago'],
        ['in a moment', 'soon']
    ],
    tr: ['the-nou', 'the-noo', 'the noo', 'the now', 'at the moment', 'suin', 'sin', 'seen', 'momentarily', 'a moment ago'],
    ex: ['Haud on; I’ll be there the nou', 'I cawed her the nou but she wisna answerin'],
    or: 'first kythes in ' + G.notes.or.mods
}, {
    sc: 'timeously',
    def: 'in a timeous mainer, promptly',
    tr: ['promptly', 'expeditiously', 'opportunely', 'in good time', 'early', 'in guid time'],
    gr: 'adv',
    or: [
        [G.notes.or.as, 'tymously']
    ]
}, { // U
    sc: 'unco',
    en: [
        ['very', 'exceedingly', 'extremely']
    ],
    gr: 'adv',
    or: 'see adj'
}, {
    sc: 'up',
    en: 'up',
    gr: ['adv', 'prep', 'adj'],
    or: [
        [G.notes.or.as, 'up, upe']
    ]
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
}, {
    sc: ['what for', 'fat for'],
    sc_alt: ['whit for', 'fit for'],
    en: 'why',
    gr: 'adv'
});
