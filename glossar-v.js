/**
 * Verbs
 */

G.v = {}; // Verbs

// Complex Verbs

// v gae
G.v.gae = {
    sc: ['gae', 'gang', 'gan'],
    en: ['go'],
    tr: ['ging'],
    neg: {
        sc: ['gaena', 'gangna'],
        en: [
            ['do not go', 'go not']
        ],
        tr: ['ganna', 'gingna', 'gona', 'don\'t go'],
        tps: { // > Third person singular
            sc: ['gaesna', 'gangsna', 'gansna'],
            en: [
                ['does not go', 'goes not']
            ],
            tr: ['gingsna', 'goesna', 'doesn\'t go']
        }
    },
    pt: {
        sc: ['gaed', 'went'],
        en: 'went',
        tr: ['gad', 'goed', 'ginged', 'ganged'],
        neg: {
            sc: ['gaedna'],
            en: 'did not go',
        }
    },
    pp: {
        sc: 'gane',
        en: 'gone',
        tr: ['ganed', 'goan', 'gaen'],
    },
    ing: {
        sc: ['gaun', 'gangin', 'gaein'],
        en: 'going',
        tr: ['gingin', 'goin', 'gawn', 'gawin'],
    },
    tps: {
        sc: ['gaes', 'gangs', 'gans'],
        en: 'goes',
        tr: ['gings'],
    }
};
G.v.gae.trigs = [].concat( // Control display of conjugated 'gae'
    G.v.gae.sc, G.v.gae.en, G.v.gae.tr, // gae
    G.v.gae.neg.sc, G.v.gae.neg.en, G.v.gae.neg.tr, // gae neg
    G.v.gae.neg.tps.sc, G.v.gae.neg.tps.en, G.v.gae.neg.tps.tr, // gae neg third person singular
    G.v.gae.pt.sc, G.v.gae.pt.en, G.v.gae.pt.tr, // gae pt
    G.v.gae.pt.neg.sc, G.v.gae.pt.neg.en, // gae pt neg
    G.v.gae.pp.sc, G.v.gae.pp.en, G.v.gae.pp.tr, // gae pp
    G.v.gae.ing.sc, G.v.gae.ing.en, G.v.gae.ing.tr, // gae -ing form
    G.v.gae.tps.sc, G.v.gae.tps.en, G.v.gae.tps.tr // gae third person singular
);
G.v.gae.meta = { // Metadata
    gr_hw: G.utils.addSpan(G.v.gae.sc[0]) + ' etc.' // Which headwords should appear in the grammar definition
};
// gae end

// v be
G.v.be = {
    sc: 'be',
    en: 'be',
    tpps: { // Third person present singular
        sc: 'is',
        en: 'is',
        neg: {
            sc: ['isna', 'isnae'],
            en: [
                ['isn\'t', 'is not']
            ],
        }
    },
    ps: { // Present singular
        sc: 'am',
        en: 'am',
        neg: {
            sc: ['amna', 'amnae'],
            en: [
                ['amn\'t', 'am not']
            ],
        }
    },
    psp: { // Present singular and plural
        sc: 'are',
        en: 'are',
        tr: ['ur', 'ar'],
        neg: { // Present singular and plural
            sc: ['arena', 'arenae'],
            en: [
                ['aren\'t', 'are not']
            ],
            tr: ['urna', 'urnae', 'arna', 'arnae']
        }
    }
};
G.v.be.trigs = [].concat( // Control display of conjugated 'be'
    G.v.be.sc, G.v.be.en, // be
    G.v.be.ps.sc, G.v.be.ps.en, // be present singular
    G.v.be.ps.neg.sc, G.v.be.ps.neg.en, // neg
    G.v.be.tpps.sc, G.v.be.tpps.en, // be third present present singular
    G.v.be.tpps.neg.sc, G.v.be.tpps.neg.en, // neg
    G.v.be.psp.sc, G.v.be.psp.en, // be present singular and plural
    G.v.be.psp.neg.sc, G.v.be.psp.neg.en, G.v.be.psp.neg.tr // neg
);
// be end

// v wis
G.v.wis = {
    sc: 'wis',
    en: [
        ['was', 'had been']
    ],
    sc_alt: 'wes',
    tr: ['wiz', 'wus', 'wuz'],
    neg: {
        sc: ['wisna', 'wisnae'],
        en: [
            ['was not', 'wasn\'t', 'had not been']
        ],
        tr: ['wasnae', 'wasna', 'wesna', 'wesnae']
    }
};
G.v.wis.trigs = [].concat(
    G.v.wis.sc, G.v.wis.en, G.v.wis.sc_alt, G.v.wis.tr, // wis
    G.v.wis.neg.sc, G.v.wis.neg.en, G.v.wis.neg.tr // neg
    // G.v.wis.ps.neg.sc, G.v.wis.ps.neg.en, // neg
    // G.v.wis.tpps.sc, G.v.wis.tpps.en, // wis third present present singular
    // G.v.wis.tpps.neg.sc, G.v.wis.tpps.neg.en, // neg
    // G.v.wis.psp.sc, G.v.wis.psp.en, // wis present singular and plural
    // G.v.wis.psp.neg.sc, G.v.wis.psp.neg.en, G.v.wis.psp.neg.tr // neg
);
// be end

/**
 * Add verbs (both complex and more simple) to dictionary object
 */

G.dict.push(
    // v be
    {
        sc: G.v.be.sc,
        en: G.v.be.en,
        tr: G.v.be.trigs,
        hl: [].concat(G.v.be.en),
        gr: 'v'
    }, { // am
        sc: G.v.be.ps.sc,
        en: G.v.be.ps.en,
        tr: G.v.be.trigs,
        hl: [].concat(G.v.be.ps.en),
        gr: 'praisent singular o v ' + G.utils.addSpan('tae ' + G.v.be.sc)
    }, { // amna
        sc: G.v.be.ps.neg.sc,
        en: G.v.be.ps.neg.en,
        tr: G.v.be.trigs,
        hl: [].concat(G.v.be.ps.neg.en),
        gr: 'praisent singular neg o v ' + G.utils.addSpan('tae ' + G.v.be.sc)
    }, { // is
        sc: G.v.be.tpps.sc,
        en: G.v.be.tpps.en,
        tr: G.v.be.trigs,
        hl: [].concat(G.v.be.tpps.en),
        gr: 'third person praisent singular o v ' + G.utils.addSpan('tae ' + G.v.be.sc)
    }, { // isna
        sc: G.v.be.tpps.neg.sc,
        en: G.v.be.tpps.neg.en,
        tr: G.v.be.trigs,
        hl: [].concat(G.v.be.tpps.neg.en),
        gr: 'third person praisent singular neg o v ' + G.utils.addSpan('tae ' + G.v.be.sc)
    }, { // are
        sc: G.v.be.psp.sc,
        en: G.v.be.psp.en,
        tr: G.v.be.trigs,
        hl: [].concat(G.v.be.psp.en, G.v.be.psp.tr),
        gr: 'praisent singular an plural o v ' + G.utils.addSpan('tae ' + G.v.be.sc)
    }, { // arena
        sc: G.v.be.psp.neg.sc,
        en: G.v.be.psp.neg.en,
        tr: G.v.be.trigs,
        hl: [].concat(G.v.be.psp.en, G.v.be.psp.neg.tr),
        gr: 'praisent singular an plural neg o v ' + G.utils.addSpan('tae ' + G.v.be.sc)
    },
    // v be end
    {
        sc: 'contrair',
        en: [
            ['oppose', 'contradict', 'go contrary to']
        ],
        gr: 'v',
        or: [
            [G.notes.or.af, 'contraire']
        ]
    },
    // v gae
    { // v gae
        sc: G.v.gae.sc,
        en: G.v.gae.en,
        tr: G.v.gae.trigs, // Highlighted by default
        hl: [].concat(G.v.gae.en, G.v.gae.tr), // Overrides tr highlighting above, as here we don't want all the tr words being highlighted
        gr: 'v'
    }, { // v gae neg
        sc: G.v.gae.neg.sc,
        en: G.v.gae.neg.en,
        tr: G.v.gae.trigs,
        hl: [].concat(G.v.gae.neg.en, G.v.gae.neg.tr),
        gr: 'neg o ' + G.v.gae.meta.gr_hw
    }, { // v gae neg third person singular
        sc: G.v.gae.neg.tps.sc,
        en: G.v.gae.neg.tps.en,
        tr: G.v.gae.neg.tps.tr,
        hl: [].concat(G.v.gae.neg.tps.en, G.v.gae.neg.tps.tr),
        gr: 'neg third person singular o ' + G.v.gae.meta.gr_hw
    }, { // v gae pt
        sc: G.v.gae.pt.sc,
        en: G.v.gae.pt.en,
        tr: G.v.gae.trigs, // So this is triggered when 'go' is entered
        hl: G.v.gae.pt.tr, // Which trigger words should cause the headwords to be highlighted
        // gr: ['pt o <span>' + [].concat(G.v.gae.sc).join(', ')] + '</span>'
        gr: 'pt o ' + G.v.gae.meta.gr_hw
    }, { // v gae pt neg
        sc: G.v.gae.pt.neg.sc,
        en: G.v.gae.pt.neg.en,
        tr: G.v.gae.trigs,
        hl: G.v.gae.pt.neg.en,
        gr: 'neg pt o ' + G.v.gae.meta.gr_hw
    }, { // v gae pp
        sc: G.v.gae.pp.sc,
        en: G.v.gae.pp.en,
        tr: G.v.gae.trigs,
        hl: G.v.gae.pp.tr,
        gr: 'pp o ' + G.v.gae.meta.gr_hw
    }, { // v gae -ing form
        sc: G.v.gae.ing.sc,
        en: G.v.gae.ing.en,
        tr: G.v.gae.trigs,
        hl: G.v.gae.ing.tr
    }, { // v Third person singular
        sc: G.v.gae.tps.sc,
        en: G.v.gae.tps.en,
        tr: G.v.gae.trigs,
        hl: G.v.gae.tps.tr,
        gr: 'third person singular o ' + G.v.gae.meta.gr_hw

    },
    // v gae end
    {
        sc: 'jalouse',
        en: ['suspect', ['suppose', 'guess', 'surmise']],
        pr: 'jaLooz',
        // > pt: 'jaloused',
        gr: 'v',
        tr: ['jaloose'],
        or: [
            [G.notes.or.f, 'jalouser']
        ]
    }, {
        sc: 'dounlaid',
        en: 'download',
        pr: 'doonlaid',
        gr: ['n', 'v'],
        tr: ['doonload', 'downlaid'],
    }, {
        sc: 'edify',
        en: [
            ['instruct', 'enlighten']
        ],
        gr: ['v'],
        or: [
            [G.notes.or.mf, 'edifier'],
            [G.notes.or.l, 'aedificāre']
        ]
    }, {
        sc: 'effeir',
        pr: 'iFeer',
        en: [
            ['belong to', 'pertain to', 'be appropriate to', 'be fitting or proper']
        ],
        gr: ['v'],
        tr: ['effeirin tae', 'effeirin til'],
        hl: ['effeir', 'be fitting', 'be proper'],
        or: [
            [G.notes.or.af, 'afferir']
        ]
    }, {
        sc: ['effeirin tae', 'effeirin til'],
        pr: ['iFeerin tae', 'iFeerin til'],
        en: [
            ['pertaining to', 'belonging to'],
            ['in relation to', 'in proportion to', 'corresponding to']
        ],
        tr: ['effeir', 'relating to'],
        hl: ['effeirin tae', 'effeirin til', 'relating to'],
        or: [
            [G.notes.or.an + ', ' + G.notes.or.af, 'aferir']
        ]
    }, {
        sc: 'uplaid',
        en: 'upload',
        gr: ['n', 'v'],
    }, {
        sc: ['fash'],
        en: [
            ['irritate', 'annoy', 'anger', 'inconvenience'],
            ['take trouble over', 'take pains with'],
            ['vex', 'bother'],
            ['fret']
        ],
        pt: {
            sc: 'fasht',
            en: [
                ['irritated', 'annoyed', 'angered', 'inconvenienced', 'troubled', 'vexed', 'bothered', 'fretted']
            ],
            tr: 'fashed'
        },
        pp: {
            sc: 'fasht'
        },
        neg: {
            sc: ['fashna', 'fash na'],
            en: 'fash not'
        },
        gr: 'v',
        or: [
            [G.notes.or.mf, 'faschier']
        ]
    }, {
        sc: 'rax',
        en: [
            ['reach', 'stretch']
        ],
        gr: 'v',
        pt: {
            sc: ['raxed', 'raxt'],
            en: ['reached', 'stretched']
        },
        pp: {
            sc: ['raxed', 'raxt'],
            en: ['reached', 'stretched']
        }
    }, {
        sc: 'redd',
        en: [
            ['clear', 'rid'], 'clarify'
        ],
        gr: ['v']
    }, {
        sc: 'skare',
        en: 'share',
        gr: ['v']
    }, {
        sc: 'uise',
        pr: ['yöz', 'yüz', 'öz', 'yaiz', 'ees'],
        en: 'use',
        tr: ['yaise', 'uiss', 'yiss', 'yaize'],
        hl: ['yaise', 'yaize', 'uise', 'yaiz', 'ees'],
        gr: ['v']
    }, {
        sc: 'upsteir',
        pr: 'upsteer',
        en: [
            ['stir up', 'rouse', 'incite', 'quicken']
        ],
        gr: ['v']
    },
    // v wis
    {
        sc: G.v.wis.sc,
        sc_alt: G.v.wis.sc_alt,
        en: G.v.wis.en,
        tr: G.v.wis.trigs,
        hl: G.v.wis.sc,
        gr: ['v']
    }, { // wis neg
        sc: G.v.wis.neg.sc,
        en: G.v.wis.neg.en,
        tr: G.v.wis.trigs,
        hl: [].concat(G.v.wis.neg.sc, G.v.wis.neg.tr),
        gr: ['neg o v ' + G.utils.addSpan(G.v.wis.sc)]
    }, { // war neg
        sc: 'war',
        sc_alt: 'were',
        en: [
            ['were', 'had been']
        ],
        tr: ['warna', 'warnae', 'werena', 'werenae', 'were not', 'weren\'t'],
        hl: ['war', 'were', 'had been'],
        gr: ['past tense plural o v ' + G.utils.addSpan('wis')]
    }, { // wir neg
        sc: ['warna', 'warnae'],
        sc_alt: ['werena', 'werenae'],
        en: [
            ['were not', 'weren\'t']
        ],
        tr: ['war', 'were'],
        hl: ['warna', 'warnae', 'werena', 'werenae', 'were not', 'weren\'t'],
        gr: ['neg o v ' + G.utils.addSpan('war')]
    }
    // v wis end
);
