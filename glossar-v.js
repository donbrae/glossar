/**
 * Verbs
 */

G.v = {}; // Verbs

// Complex Verbs

// Complex verb template
// v {{ wird }} [search also for // v {{ wird }}]
// G.v.{{ wird }} = {
//     sc: [],
//     en: [],
//     tr: [],
//     neg: {
//         sc: [],
//         en: [
//             []
//         ],
//         tr: [],
//         tps: { // > Third person singular
//             sc: [],
//             en: [
//                 []
//             ],
//             tr: []
//         }
//     },
//     pt: {
//         sc: [],
//         en: [],
//         tr: [],
//         neg: {
//             sc: [],
//             en: []
//         }
//     },
//     pp: {
//         sc: '',
//         en: '',
//         tr: [],
//     },
//     ing: {
//         sc: [],
//         en: '',
//         tr: [],
//     },
//     tps: {
//         sc: [],
//         en: '',
//         tr: [],
//     }
// };
// G.v.{{ wird }}.trigs = [].concat( // Control display of conjugated '{{ wird }}'
//     G.v.{{ wird }}.sc, G.v.{{ wird }}.en, G.v.{{ wird }}.tr, // {{ wird }}
//     G.v.{{ wird }}.neg.sc, G.v.{{ wird }}.neg.en, G.v.{{ wird }}.neg.tr, // {{ wird }} neg
//     G.v.{{ wird }}.neg.tps.sc, G.v.{{ wird }}.neg.tps.en, G.v.{{ wird }}.neg.tps.tr, // {{ wird }} neg third person singular
//     G.v.{{ wird }}.pt.sc, G.v.{{ wird }}.pt.en, G.v.{{ wird }}.pt.tr, // {{ wird }} pt
//     G.v.{{ wird }}.pt.neg.sc, G.v.{{ wird }}.pt.neg.en, // {{ wird }} pt neg
//     G.v.{{ wird }}.pp.sc, G.v.{{ wird }}.pp.en, G.v.{{ wird }}.pp.tr, // {{ wird }} pp
//     G.v.{{ wird }}.ing.sc, G.v.{{ wird }}.ing.en, G.v.{{ wird }}.ing.tr, // {{ wird }} -ing form
//     G.v.{{ wird }}.tps.sc, G.v.{{ wird }}.tps.en, G.v.{{ wird }}.tps.tr // {{ wird }} third person singular
// );
// G.v.{{ wird }}.meta = { // Metadata
//     gr_hw: G.utils.addSpan(G.v.{{ wird }}.sc[0]) + ' etc.' // Which headwords should appear in the grammar definition
// };
// {{ wird }} end

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
            en: 'did not go'
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
    gr_hw: 'v ' + G.utils.addSpan('tae ' + G.v.gae.sc[0]) + ' etc.' // Which headwords should appear in the grammar definition
};
// gae end

// v gie
G.v.gie = {
    sc: 'gie',
    en: 'give',
    pr: 'gee',
    neg: {
        sc: 'giena',
        en: [
            ['do not give', 'give not']
        ]
    },
    pt: {
        sc: 'gied',
        en: 'gave',
        neg: {
            sc: 'giedna',
            en: [
                ['did not give', 'gave not']
            ]
        }
    },
    pp: {
        sc: ['gien', 'gied'],
        en: 'given'
    },
    ing: {
        sc: ['giein'],
        en: 'giving',
        tr: 'givin'
    },
    tps: {
        sc: 'gies',
        en: 'gives'
    }
};
G.v.gie.trigs = [].concat( // Control display of conjugated 'gie'
    G.v.gie.sc, G.v.gie.en, // gie
    G.v.gie.pr, // gie pr
    G.v.gie.neg.sc, G.v.gie.neg.en, // gie neg
    G.v.gie.pt.sc, G.v.gie.pt.en, // gie pt
    G.v.gie.pt.neg.sc, G.v.gie.pt.neg.en, // gie pt neg
    G.v.gie.pp.sc, G.v.gie.pp.en, // gie pp
    G.v.gie.ing.sc, G.v.gie.ing.en, G.v.gie.ing.tr, // gie -ing form
    G.v.gie.tps.sc, G.v.gie.tps.en // gie third person singular
);
G.v.gie.meta = { // Metadata
    gr_hw: 'v ' + G.utils.addSpan('tae ' + G.v.gie.sc)
};
// gie end

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
                ['is not', 'isn\'t']
            ],
        }
    },
    ps: { // Present singular
        sc: 'am',
        en: 'am',
        tr: 'um',
        neg: {
            sc: ['amna', 'amnae'],
            en: [
                ['am not', 'amn\'t']
            ],
            tr: ['umna', 'umnae']
        }
    },
    psp: { // Present singular and plural
        sc: 'are',
        en: 'are',
        tr: ['ur', 'ar'],
        neg: { // Present singular and plural
            sc: ['arena', 'arenae'],
            en: [
                ['are not', 'aren\'t']
            ],
            tr: ['urna', 'urnae', 'arna', 'arnae']
        }
    },
    neg: {
        sc: 'binna',
        en: 'is not',
        tr: ['binnae', 'is no', 'ins\'t']
    }
};
G.v.be.trigs = [].concat( // Control display of conjugated 'be'
    G.v.be.sc, G.v.be.en, // be
    'to be', 'tae be',
    G.v.be.ps.sc, G.v.be.ps.en, G.v.be.ps.tr, // be present singular
    G.v.be.ps.neg.sc, G.v.be.ps.neg.en, G.v.be.ps.neg.tr, // neg
    G.v.be.tpps.sc, G.v.be.tpps.en, // be third present present singular
    G.v.be.tpps.neg.sc, G.v.be.tpps.neg.en, // neg
    G.v.be.psp.sc, G.v.be.psp.en, // be present singular and plural
    G.v.be.psp.neg.sc, G.v.be.psp.neg.en, G.v.be.psp.neg.tr, // neg
    G.v.be.neg.sc, G.v.be.neg.en, G.v.be.neg.tr // be neg
);
// be end

// v wis
G.v.wis = {
    sc: 'wis',
    pr: ['waz', 'wez', 'wiz', 'wuz'],
    en: [
        ['was', 'had been']
    ],
    sc_alt: 'wes',
    tr: 'wus',
    neg: {
        sc: ['wisna', 'wisnae'],
        en: [
            ['was not', 'wasn\'t', 'had not been']
        ],
        tr: ['wasnae', 'wasna', 'wesna', 'wesnae', 'wiznae', 'wizna', 'wuznae', 'wuzna']
    }
};
G.v.wis.trigs = [].concat(
    G.v.wis.sc, G.v.wis.pr, G.v.wis.en, G.v.wis.sc_alt, G.v.wis.tr, // wis
    G.v.wis.neg.sc, G.v.wis.neg.en, G.v.wis.neg.tr // neg
);
// wis end

// v wis
G.v.war = {
    sc: 'war',
    pr: ['war', 'wir', 'wur'],
    en: [
        ['were', 'had been']
    ],
    neg: {
        sc: ['warna', 'warnae'],
        en: [
            ['were not', 'weren\'t', 'had not been']
        ],
        tr: ['werena', 'werenae', 'wirna', 'wirnae']
    }
};
G.v.war.trigs = [].concat(
    G.v.war.sc, G.v.war.pr, G.v.war.en, G.v.war.tr, // war
    G.v.war.neg.sc, G.v.war.neg.en, G.v.war.neg.tr // neg
);
// wis end

// v hae
G.v.hae = {
    sc: ['hae', 'hiv'],
    en: 'have',
    pr: ['hae', 'ha', 'a', 'hiv', 'huv', 'hev'],
    neg: {
        sc: ['haena', 'hinna', 'hivna'],
        sc_alt: ['haenae', 'hinnae', 'hivnae'],
        en: [
            ['have not', 'haven\'t']
        ],
        tr: ['huvnae', 'huvna', 'havenae']
    },
    ps: { // Present singular
        sc: 'haes',
        sc_alt: 'hes',
        en: 'has',
        pr: ['hez', 'hiz', 'huz'],
        tr: ['his', 'hus'],
        neg: {
            sc: ['haesna', 'haesnae'],
            en: [
                ['has not', 'hasn\'t']
            ],
            tr: ['hesna', 'hisnae', 'hisna', 'hiznae', 'husnae']
        }
    },
    pt: {
        sc: 'haed',
        en: 'had',
        pr: ['haid', 'hed', 'hid', 'hud'],
        neg: {
            sc: ['haedna', 'haednae'],
            en: [
                ['had not', 'hadn\'t']
            ],
            tr: ['hudnae', 'hidnae', 'hidna', 'hudna']
        }
    },
    ptp: {
        sc: ['haed', 'haen'],
        en: 'had',
        sc_alt: 'hed',
        pr: ['haid', 'hed', 'hid', 'hud', 'hain']
    }
};
G.v.hae.trigs = [].concat( // Control display of conjugated 'hae'
    G.v.hae.sc, G.v.hae.en, G.v.hae.pr, // hae
    G.v.hae.neg.sc, G.v.hae.neg.sc_alt, G.v.hae.neg.en, G.v.hae.neg.tr, // hae neg
    G.v.hae.ps.sc, G.v.hae.ps.sc_alt, G.v.hae.ps.en, G.v.hae.ps.pr, G.v.hae.ps.tr, // hae present singular
    G.v.hae.ps.neg.sc, G.v.hae.ps.neg.en, G.v.hae.ps.neg.tr, // hae neg present singular
    G.v.hae.pt.sc, G.v.hae.pt.en, G.v.hae.pt.pr, // hae past tense
    G.v.hae.pt.neg.sc, G.v.hae.pt.neg.en, G.v.hae.pt.neg.tr, // hae neg past tense
    G.v.hae.ptp.sc, G.v.hae.ptp.sc_alt, G.v.hae.ptp.pr // hae past participle
);
// hae end

// ken and knaw triggers
G.v.ken_knaw = {};
G.v.ken_knaw.trigs = ['ken', 'know', 'kenna', 'know not', 'kent', 'kenned', 'knew', 'kentna', 'knew not', 'did not know', 'didn\'t know', 'known', 'knaw', 'knawed', 'knawn'];

// lat triggers
G.v.lat = {};
G.v.lat.trigs = ['allow', 'permit', 'cause', 'make happen', 'luit', 'latten', 'luiten', 'lit', 'lat', 'lit', 'leet', 'löt', 'lüt'];

/**
 * Add verbs (both complex and more simple) to dictionary object
 */

G.dict.push({
        sc: 'accress',
        pt_pp: {
            sc: 'accressed',
            tr: ['increased', 'accrued', 'grown', 'grew']
        },
        en: ['accrue', ['increase', 'grow']],
        gr: 'v',
        tr: 'added',
        hl: 'accress',
        or: [
            [G.notes.or.as, 'accress, accresce'],
            ['frae the ' + G.notes.or.rl + ' term', 'accrescere']
        ]
    }, { // A
        sc: 'adduce',
        en: ['cite as pertinent, quote as evidence'],
        tr: 'pertain',
        hl: 'adduce',
        gr: 'v',
        or: [
            [G.notes.or.as, 'adduce'],
            [G.notes.or.l, 'adūcere']
        ]
    },
    // v be
    {
        sc: G.v.be.sc,
        en: G.v.be.en,
        tr: G.v.be.trigs, // Highlighted by default
        hl: [].concat(G.v.be.en, 'to be', 'tae be'),
        gr: 'v'
    }, { // am
        sc: G.v.be.ps.sc,
        en: G.v.be.ps.en,
        tr: G.v.be.trigs,
        hl: [].concat(G.v.be.ps.en, G.v.be.ps.tr),
        gr: 'praisent singular o v ' + G.utils.addSpan('tae ' + G.v.be.sc)
    }, { // amna
        sc: G.v.be.ps.neg.sc,
        en: G.v.be.ps.neg.en,
        tr: G.v.be.trigs,
        hl: [].concat(G.v.be.ps.neg.en, G.v.be.ps.neg.tr),
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
        hl: [].concat(G.v.be.psp.neg.en, G.v.be.psp.neg.tr),
        gr: 'praisent singular an plural neg o v ' + G.utils.addSpan('tae ' + G.v.be.sc)
    }, { // binna
        sc: G.v.be.neg.sc,
        en: G.v.be.neg.en,
        tr: G.v.be.trigs,
        hl: [].concat(G.v.be.neg.en, G.v.be.neg.tr),
        gr: 'neg o v ' + G.utils.addSpan('tae ' + G.v.be.sc) + '; líterar'
    },
    // v be end
    { // C
        sc: 'cast-ower',
        en: 'review',
        tr: ['cast ower'],
        gr: 'v phr',
        ex: 'Whiles we will cast-ower the policy an mak mair recommends'
    }, {
        sc: 'complouther',
        en: [
            ['mix or associate with'],
            ['agree, coincide or fit in with']
        ],
        pt_pp: {
            sc: 'complouthert'
        },
        tr: ['compluter', 'compluther', 'comploother', 'agree', 'coincide', 'fit in'],
        gr: 'v',
        or: 'see n'
    }, {
        sc: 'comprise',
        en: [
            ['include', 'contain', 'consist of'],
            ['appraise', 'value']
        ],
        tr: 'make up',
        hl: 'comprise',
        gr: 'v',
        or: [
            [G.notes.or.as, 'comprise, compryse, comprize'],
            [G.notes.or.mf, 'compris']
        ]
    }, {
        sc: 'contrair',
        en: [
            ['oppose', 'contradict', 'go contrary to', 'act or speak against']
        ],
        tr: 'against',
        hl: 'contrair',
        gr: 'v',
        or: 'see n',
        ex: ['He contraired the new regulations the Pairlament haed pitten intae law']
    }, { // D
        sc: 'defaut',
        en: 'to fail to fulfil an obligation or pay a debt',
        tr: 'default',
        gr: 'v',
        or: [
            [G.notes.or.as, 'defalt, defawt, defaut'],
            [G.notes.or.af, 'defaillir']
        ]
    }, {
        sc: 'defeat',
        pr: ['defait', 'defeet'],
        en: 'defeat',
        pt_pp: {
            sc: 'defeat',
            tr: ['defeated', 'defait', 'defeet']
        },
        ex: 'Hibs war defeat by Hearts in the Cup final on Seturday',
        gr: 'v',
        or: [
            [G.notes.or.as, 'defait', 'defett'], G.notes.or.af + ' <span>desfait</span>, ptp o <span>desfaire</span>'
        ]
    }, {
        sc: 'depute',
        pt_pp: {
            sc: 'depute',
            tr: 'deputised'
        },
        // en: 'deputise',
        def: 'apynt as depute',
        gr: 'v',
        ex: 'Aaron wis depute tae cover for his manager at the comatee meetin',
        or: 'see adj'
    }, {
        sc: 'deburse',
        en: 'disburse',
        def: 'pey out (siller frae a fund)',
        gr: 'v',
        or: [
            [G.notes.or.as, 'deburs, debours'],
            [G.notes.or.mf, 'desbourser']
        ]
    }, {
        sc: 'develop',
        en: 'develop',
        pt_pp: {
            sc: 'developit',
            tr: 'developed'
        },
        gr: 'v'
    }, { // E
        sc: 'ettle',
        en: [
            ['intend', 'plan', 'propose'],
            'take aim at', ['attempt', 'venture'],
            'desire very much'
        ],
        pt_pp: {
            sc: 'ettelt',
            tr: ['intended', 'planned', 'proposed', 'attempted', 'ventured']
        },
        tr: ['aim', 'desire', 'ettlin'],
        hl: ['aim', 'desire'],
        gr: 'v',
        or: [
            [G.notes.or.as, 'ettle, ettill'],
            [G.notes.or.anor, 'ætla']
        ]
    }, {
        sc: 'ettlin',
        en: [
            ['endeavouring', 'trying']
        ],
        tr: ['attempting', 'ettle'],
        hl: ['ettlin'],
        gr: ['v']
    }, {
        sc: 'ettle sair',
        en: [
            ['try hard', 'strive']
        ],
        pt_pp: {
            sc: 'ettelt sair',
            tr: ['tried hard', 'strove', 'striven', 'strived']
        },
        gr: 'v phr',
        ex: 'She’d ettelt sair tae pass aw her exams',
        ph: true
    }, {
        sc: 'evite',
        pr: ['evite', 'eveet'],
        en: [
            ['avoid', 'escape', 'shun', 'evade']
        ],
        pt_pp: {
            sc: 'evitit',
            tr: ['avoided', 'escaped', 'shunned', 'evaded', 'evited']
        },
        gr: 'v',
        or: [
            [G.notes.or.as, 'evit(e), eveit'],
            [G.notes.or.f, 'éviter'],
            [G.notes.or.l, 'ēvītāre']
        ],
        ex: 'He ettelt tae evite bein liftit by the polis'
    }, {
        sc: ['examine', 'exaimine'],
        pt_pp: {
            sc: ['examint', 'exaimint'],
            tr: 'examined'
        },
        en: [
            ['inspect', 'question', 'investigate']
        ],
        gr: 'v',
        or: [
            [G.notes.or.as, 'examin, exemyn'],
            [G.notes.or.mf, 'examiner'],
            [G.notes.or.l, 'exāmināre']
        ]
    },
    // v gae
    { // v gae
        sc: G.v.gae.sc,
        en: G.v.gae.en,
        tr: G.v.gae.trigs,
        hl: [].concat(G.v.gae.sc, G.v.gae.tr), // Overrides tr highlighting above, as here we don't want all the tr words being highlighted
        gr: 'v'
    }, { // v gae neg
        sc: G.v.gae.neg.sc,
        en: G.v.gae.neg.en,
        tr: G.v.gae.trigs,
        hl: [].concat(G.v.gae.neg.sc, G.v.gae.neg.tr),
        gr: 'neg o ' + G.v.gae.meta.gr_hw
    }, { // v gae neg third person singular
        sc: G.v.gae.neg.tps.sc,
        en: G.v.gae.neg.tps.en,
        tr: G.v.gae.trigs,
        hl: [].concat(G.v.gae.neg.tps.sc, G.v.gae.neg.tps.tr),
        gr: 'neg third person singular o ' + G.v.gae.meta.gr_hw
    }, { // v gae pt
        sc: G.v.gae.pt.sc,
        en: G.v.gae.pt.en,
        tr: G.v.gae.trigs, // So this is triggered when 'go' is entered
        hl: G.v.gae.pt.tr, // Which trigger words should cause the headwords to be highlighted
        gr: 'pt o ' + G.v.gae.meta.gr_hw
    }, { // v gae pt neg
        sc: G.v.gae.pt.neg.sc,
        en: G.v.gae.pt.neg.en,
        tr: G.v.gae.trigs,
        hl: G.v.gae.pt.neg.sc,
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
    // v gie
    { // v gie
        sc: G.v.gie.sc,
        en: G.v.gie.en,
        pr: G.v.gie.pr,
        tr: G.v.gie.trigs,
        hl: [].concat(G.v.gie.sc, G.v.gie.pr),
        gr: 'v'
    }, { // v gie neg
        sc: G.v.gie.neg.sc,
        en: G.v.gie.neg.en,
        tr: G.v.gie.trigs,
        hl: G.v.gie.neg.sc,
        gr: 'neg o ' + G.v.gie.meta.gr_hw
    }, { // v gie pt
        sc: G.v.gie.pt.sc,
        en: G.v.gie.pt.en,
        tr: G.v.gie.trigs,
        hl: G.v.gie.pt.sc,
        gr: 'pt o ' + G.v.gie.meta.gr_hw
    }, { // v gie pt neg
        sc: G.v.gie.pt.neg.sc,
        en: G.v.gie.pt.neg.en,
        tr: G.v.gie.trigs,
        hl: G.v.gie.pt.neg.sc,
        gr: 'neg pt o ' + G.v.gie.meta.gr_hw
    }, { // v gie pp
        sc: G.v.gie.pp.sc,
        en: G.v.gie.pp.en,
        tr: G.v.gie.trigs,
        hl: G.v.gie.pp.sc,
        gr: 'pp o ' + G.v.gie.meta.gr_hw
    }, { // v gie -ing form
        sc: G.v.gie.ing.sc,
        en: G.v.gie.ing.en,
        tr: G.v.gie.trigs,
        hl: G.v.gie.ing.tr
    }, { // v Third person singular
        sc: G.v.gie.tps.sc,
        en: G.v.gie.tps.en,
        tr: G.v.gie.trigs,
        hl: G.v.gie.tps.sc,
        gr: 'third person singular o ' + G.v.gie.meta.gr_hw

    },
    // v gie end
    {
        sc: 'compone',
        en: [
            ['come to an agreement', 'settle a dispute with payment'],
            ['compound', 'combine'],
            'compose in speech or writing',
            'compound a payment for a certain sum',
            'compose or calm oneself'
        ],
        tr: ['compose', 'calm', 'settle'],
        gr: ['v', 'merkit obsolete in CSD2']
    }, {
        sc: 'compone',
        def: 'write or create (a wark o airt, inspecially muisic or poetry)',
        tr: ['compose', 'write'],
        hl: 'compose',
        gr: ['v'],
        or: [
            ['pairt archaism, pairt protologism, frae the ' + G.notes.or.as, 'compone <span>‘tae mak by pitten thegither, create in speak or writin’</span>'],
            [G.notes.or.l, 'compōnere']
        ]
    }, {
        sc: 'jalouse',
        en: ['suspect', ['suppose', 'guess', 'surmise']],
        pr: 'jaLooz',
        pt: {
            sc: 'jaloused'
        },
        gr: 'v',
        tr: ['jaloose'],
        or: [
            'this uissage first kythes in ' + G.notes.or.lms, [G.notes.or.f, 'jalouser']
        ]
    }, {
        sc: 'dounlaid',
        pt: {
            sc: 'dounlaidit',
            en: 'downloaded',
            tr: 'doonloadit'
        },
        def: '<em>v</em> copy data frae ae computer sýstem til anither, for ordinar ower the internet; <em>n</em> the data (file) dounlaidit',
        pr: 'doonlaid',
        gr: ['v', 'n'],
        tr: ['doonload', 'download'],
        or: [
            [G.notes.or.mode, 'download']
        ]
    }, {
        sc: 'edify',
        en: [
            ['instruct', 'enlighten']
        ],
        gr: 'v',
        or: [
            [G.notes.or.as, 'edify, edifie'],
            [G.notes.or.mf, 'edifier'],
            [G.notes.or.l, 'aedificāre']
        ]
    }, {
        sc: 'effeir',
        pr: 'iFeer',
        en: [
            ['belong to', 'pertain to', 'be appropriate to', 'be fitting or proper']
        ],
        pt_pp: {
            sc: 'effeirt'
        },
        gr: ['v', 'formal'],
        tr: ['effeirin tae', 'effeirin til', 'applicable to', 'apply to', 'relate to', 'correspond to', 'concern', 'about'],
        hl: ['effeir', 'be fitting', 'be proper', 'relate to', 'correspond to', 'concern'],
        or: [
            [G.notes.or.as, 'affer(e), effere'],
            [G.notes.or.an + ', ' + G.notes.or.af, 'aferir']
        ],
        ex: 'The regulations effeir til hous biggin'
    }, {
        sc: ['effeirin tae/til'],
        pr: ['iFeerin tae', 'iFeerin til'],
        en: [
            ['pertaining to', 'belonging to'],
            ['in relation to', 'in proportion to', 'corresponding to']
        ],
        gr: ['v phr', 'formal'],
        tr: ['effeir', 'relating to', 'according to', 'applicable to', 'concerning', 'about'],
        hl: ['effeirin tae', 'effeirin til', 'relating to', 'applicable to', 'concerning'],
        or: 'see v <span>effeir</span>',
        ex: 'The comatee spak anent maiters effeirin til halth policy',
        ph: true
    }, {
        sc: 'gar',
        def: ['cause something tae be duin', 'mak a body or thing dae something'],
        tr: ['make', 'cause', 'force', 'compel'],
        gr: 'v',
        or: [
            [G.notes.or.as, 'ger, gar'],
            [G.notes.or.anor, 'gera']
        ],
        ex: ['It gars ye think', G.ex.u, 'The court gart the company provide addítional wittins']
    }, {
        sc: 'gie bield tae/til',
        en: 'protect',
        tr: ['gie bield tae', 'gie bield til'],
        gr: 'v phr',
        ex: 'The 1992 Chairter gies bield til Europe’s regional or smaw leids',
        ph: true
    }, {
        sc: 'haud',
        pr: ['haud', 'hod', 'hud', 'had'],
        en: [
            ['have', 'keep in the hand', 'hold onto', 'possess'],
            ['confine', 'detain', 'hinder', 'restrain'],
            ['continue as before'],
            'arrange an event', ['continue', 'proceed', 'keep to a path or route'],
            ['observe', 'adhere to', 'maintain'],
            ['contain', 'keep within'],
            ['restrain oneself', 'prevent']
        ],
        pt: {
            sc: ['haudit', 'held', 'huild'],
            tr: 'held'
        },
        pp: {
            sc: 'hauden',
            tr: 'held'
        },
        tr: 'hauden',
        hl: 'haud',
        gr: 'v',
        ex: ['I div haud that ye’re wrang', 'I jaloused I’d better haud my tongue', 'The neist comatee meetin will be hauden in Mey']
    }, {
        sc: 'hauden',
        en: 'be obliged or required to do something',
        tr: ['obliged', 'required'],
    }, {
        sc: 'haud aff',
        en: 'keep off or away',
        tr: ['keep off', 'keep away'],
        gr: 'phrasal v'
    }, {
        sc: 'haud at',
        en: [
            ['persist in', 'keep at']
        ],
        tr: ['haud at', 'persist at', 'persevere at'],
        gr: 'phrasal v'
    }, {
        sc: 'haud awa',
        en: [
            ['keep away', 'keep out or off'],
            ['continue on one\'s way', 'go away']
        ],
        tr: ['keep out', 'keep off', 'continue'],
        gr: 'phrasal v'
    }, {
        sc: 'haud for',
        en: [
            ['aim at', 'make for']
        ],
        gr: 'phrasal v'
    }, {
        sc: 'haud forrit',
        en: 'continue to improve (in health)',
        tr: 'continue to improve',
        gr: 'phrasal v'
    }, {
        sc: 'haud gaun',
        en: 'keep going',
        gr: 'phrasal v'
    }, {
        sc: 'haud haul',
        en: [
            ['offer resistance', 'prop', 'support']
        ],
        gr: 'phrasal v'
    }, {
        sc: 'haud in',
        en: [
            ['confine', 'retain', 'restrain', 'keep in order'],
            ['save', 'economize', 'be miserly']
        ],
        gr: 'phrasal v'
    }, {
        sc: 'haud in about',
        pr: 'haud in aboot',
        en: [
            ['keep in order', 'restrain', 'control'],
            ['bring', 'come closer']
        ],
        gr: ['phrasal v']
    }, {
        sc: 'haud in wi',
        en: [
            ['keep in with', 'curry favour with'],
        ],
        gr: ['phrasal v']
    }, {
        sc: 'haud on',
        en: [
            ['carry on', 'continue'],
        ],
        gr: ['phrasal v']
    }, {
        sc: 'haud on',
        en: 'stop',
        gr: ['imp phrasal v']
    }, { // I
        sc: 'inbring',
        pt_pp: {
            sc: 'inbrocht',
            tr: ['imported', 'importit', 'conveyed']
        },
        en: [
            ['bring to or into a place', 'convey', 'import']
        ],
        tr: ['bring to a place', 'bring into a place'],
        gr: 'v',
        or: [
            [G.notes.or.ae, 'inbrengan']
        ],
        ex: [G.ex.l, G.ex.s]
    }, {
        sc: 'ken',
        en: 'know',
        neg: {
            sc: 'kenna',
            tr: 'know not'
        },
        tr: G.v.ken_knaw.trigs,
        hl: 'ken',
        gr: 'v',
        ex: [G.ex.h, G.ex.c]
    }, {
        sc: ['kent', 'kenned'],
        en: ['knew'],
        neg: {
            sc: 'kentna',
            tr: ['knew not', 'did not know', 'didn\'t know']
        },
        tr: G.v.ken_knaw.trigs,
        hl: ['kent', 'kenned'],
        gr: 'pt o v ' + G.utils.addSpan('tae ken'),
        ex: 'Tammas kentna whit tae dae'
    }, {
        sc: 'kent',
        en: 'known',
        gr: ['adj, an ptp o v ' + G.utils.addSpan('tae ken')],
        ex: 'Brian is a weel kent face on the Edinburgh jazz scene',
        tr: G.v.ken_knaw.trigs,
        hl: 'kent'
    }, {
        sc: 'knaw',
        en: 'know',
        pt: {
            sc: ['knew', 'knawed'],
            tr: ['knew']
        },
        pp: {
            sc: 'knawn',
            tr: 'known'
        },
        tr: G.v.ken_knaw.trigs,
        ex: G.ex.b,
        hl: 'knaw',
        gr: 'v'
    }, { // L
        sc: 'lat',
        en: 'let',
        pr: ['lat', 'lit'],
        tr: G.v.lat.trigs,
        hl: ['allow', 'permit', 'cause', 'make happen'],
        gr: 'v',
        ex: ['Lat’s hae a drink efter wark', G.ex.d],
        or: [
            [G.notes.or.as, 'lat, let, lete'],
            [G.notes.or.ae, 'lǽtan']
        ]
    }, {
        sc: 'luit',
        en: 'let',
        tr: G.v.lat.trigs,
        hl: 'luit',
        pr: ['lit', 'leet', 'löt', 'lüt'],
        gr: 'pt o the v <span>tae lat</span>',
        ex: G.ex.e
    }, {
        sc: ['latten', 'luiten'],
        en: 'let',
        tr: G.v.lat.trigs,
        hl: ['latten', 'luiten'],
        gr: 'ptp o the v <span>tae lat</span>',
        ex: 'John haed been latten doun by his colleague'
    }, {
        sc: 'lat see',
        en: 'produce',
        gr: 'v phr',
        ph: true
    }, { // M
        sc: 'maun',
        pr: ['maun', 'mon', 'man', 'mun'],
        en: 'must',
        neg: {
            sc: ['maunna', 'maunnae'],
            tr: ['must not', 'mustn\'t']
        },
        gr: ['v'],
        or: [
            [G.notes.or.as, 'man'],
            [G.notes.or.anor, 'muna > man']
        ],
        ex: ['Ye maun be jokin!', 'He maunna hae been able tae come', 'The essay maunna be ower 3,000 wirds']
    }, {
        sc: 'mind',
        pt: {
            sc: 'mindit',
            tr: ['reminded', 'remembered', 'recollected', 'called to mind', 'myndit']
        },
        en: ['remind', ['remember', 'recollect', 'call to mind']],
        tr: 'mynd',
        gr: 'v',
        or: [
            [G.notes.or.as, 'minde, mynd(e)'],
            [G.notes.or.ae, 'mynd']
        ]
    }, {
        sc: 'uplaid',
        tr: 'upload',
        pt: {
            sc: 'uplaidit',
            en: 'uploaded',
            tr: 'uploadit'
        },
        def: '<em>v</em> copy data frae ae computer sýstem til anither, for ordinar til a server, an aften ower the internet; <em>n</em> the data (file) uplaidit',
        gr: ['v', 'n'],
        or: [
            [G.notes.or.mode, 'upload']
        ]
    }, { // F
        sc: 'fankle',
        en: [
            ['tangle', 'mix up'], 'become tangled', ['trap', 'ensnare'],
            ['stumble', 'fumble']
        ],
        pt_pp: {
            sc: 'fankelt',
            tr: ['tangled', 'mixed up', 'trapped', 'ensnared', 'stumbled', 'fumbled']
        },
        gr: 'v',
        or: 'see n'
    }, {
        sc: ['fash'],
        en: [
            ['irritate', 'annoy', 'anger', 'inconvenience'],
            ['take trouble over', 'take pains with'],
            ['vex', 'bother'],
            ['fret']
        ],
        pt_pp: {
            sc: 'fasht',
            tr: [
                ['irritated', 'annoyed', 'angered', 'inconvenienced', 'troubled', 'vexed', 'bothered', 'fretted', 'fashed']
            ]
        },
        neg: {
            sc: 'fashna',
            tr: ['fash not', 'fash na']
        },
        gr: 'v',
        or: [
            [G.notes.or.ms, 'fasch, fash'],
            [G.notes.or.mf, 'faschier']
        ],
        ex: ['Dinna fash yersel', 'I wis sair fasht about the job interview', G.ex.d]
    }, {
        sc: 'fesh-on',
        en: [
            ['bring forward', 'advance', 'bring to maturity', 'develop']
        ],
        pt_pp: {
            sc: 'fesht-on',
            tr: ['feshed on', 'fesht on', 'brought forward', 'advanced', 'brought to maturity', 'developed']
        },
        tr: 'fesh on',
        gr: 'v',
        ex: 'The report recommendit we fesh-on a national policy'
    }, // H
    { // hae
        sc: G.v.hae.sc,
        pr: G.v.hae.pr,
        en: G.v.hae.en,
        tr: G.v.hae.trigs,
        hl: G.v.hae.sc,
        gr: 'v'
    }, { // hae neg
        sc: G.v.hae.neg.sc,
        sc_alt: G.v.hae.neg.sc_alt,
        pr: G.v.hae.neg.pr,
        en: G.v.hae.neg.en,
        tr: G.v.hae.trigs,
        hl: [].concat(G.v.hae.neg.sc, G.v.hae.neg.tr),
        gr: 'neg o the v ' + G.utils.addSpan('tae ' + G.v.hae.sc.join(', '))
    }, { // hae present singular
        sc: G.v.hae.ps.sc,
        sc_alt: G.v.hae.ps.sc_alt,
        en: G.v.hae.ps.en,
        pr: G.v.hae.ps.pr,
        tr: G.v.hae.trigs,
        hl: [].concat(G.v.hae.ps.sc, G.v.hae.ps.tr),
        gr: 'present singular o the v ' + G.utils.addSpan('tae ' + G.v.hae.sc.join(', '))
    }, { // hae present singular neg
        sc: G.v.hae.ps.neg.sc,
        en: G.v.hae.ps.neg.en,
        tr: G.v.hae.trigs,
        hl: [].concat(G.v.hae.ps.neg.sc, G.v.hae.ps.neg.tr),
        gr: 'neg present singular o the v ' + G.utils.addSpan('tae ' + G.v.hae.sc.join(', '))
    }, { // hae past tense
        sc: G.v.hae.pt.sc,
        pr: G.v.hae.pt.pr,
        en: G.v.hae.pt.en,
        tr: G.v.hae.trigs,
        hl: [].concat(G.v.hae.pt.sc),
        gr: 'pt o the v ' + G.utils.addSpan('tae ' + G.v.hae.sc.join(', '))
    }, { // hae neg past tense
        sc: G.v.hae.pt.neg.sc,
        en: G.v.hae.pt.neg.en,
        tr: G.v.hae.trigs,
        hl: [].concat(G.v.hae.pt.neg.sc, G.v.hae.pt.neg.tr),
        gr: 'neg pt o the v ' + G.utils.addSpan('tae ' + G.v.hae.sc.join(', '))
    }, { // hae past par
        sc: G.v.hae.ptp.sc,
        en: G.v.hae.ptp.en,
        pr: G.v.hae.ptp.pr,
        tr: G.v.hae.trigs,
        hl: [].concat(G.v.hae.ptp.sc, G.v.hae.ptp.pr),
        gr: 'pp o the v ' + G.utils.addSpan('tae ' + G.v.hae.sc.join(', '))
    }, {
        sc: 'haik',
        en: [
            ['trek', 'rove', 'roam', 'wander aimlessly', 'trudge'], 'carry or drag with difficulty'
        ],
        gr: 'v',
        or: [
            [G.notes.or.ms, 'haik']
        ]
    }, {
        sc: 'hous',
        pr: 'hoos',
        def: ['tae provide wi a hous', 'tae provide ainimals wi housin or bield', 'tae bouk guids or craps'],
        tr: ['houss', 'hoose', 'house'],
        gr: 'v',
        or: [
            [G.notes.or.as, 'hous, huse, hows'],
            [G.notes.or.ae, 'hūsian']
        ],
        ex: ['We can hous the kye in the byre the nicht']
    }, { // O
        sc: 'ocht',
        en: 'ought',
        gr: 'v'
    }, { // P
        sc: 'pit',
        en: 'put',
        pt: {
            sc: ['pat', 'pit'],
            tr: 'put'
        },
        pp: {
            sc: ['pat', 'pit', 'pitten', 'putten'],
            tr: 'put'
        },
        gr: 'v',
        or: [
            [G.notes.or.as, 'pit'],
            [G.notes.or.ae, 'pȳtan']
        ],
        ex: ['I pit it tae ye that ye’v tint the pynt o my threap', 'Jamie pit the cat out', G.ex.f, 'Iona haed pitten forrit mony guid ideas']
    }, {
        sc: 'proceed',
        en: 'proceed',
        gr: 'v',
        tr: 'go',
        or: [
            [G.notes.or.as, 'proced(e), proceid'],
            [G.notes.or.me + ' an ' + G.notes.or.eme, 'proced(e), proceede'],
            [G.notes.or.f, 'procéder'],
            [G.notes.or.l, 'procéder']
        ]
    }, { // T
        sc: 'tak',
        en: 'take',
        pt: {
            sc: 'teuk',
            tr: 'took'
        },
        pp: {
            sc: ['taen', 'takken', 'teuken'],
            tr: ['taken', 'tane', 'takkin', 'tooken', 'tookin']
        },
        pr: ['tak', 'take'],
        gr: 'v',
        or: [
            [G.notes.or.as, 'tak'],
            G.notes.or.ae + ' <span>tacan</span> frae the ' + G.notes.or.anor + ' <span>taka</span>'
        ],
        ex: 'The roaster’s comment haed been taen doun afore I coud repone til him'
    }, { // Tak -ing ending
        sc: ['takkin', 'taein'],
        en: 'taking',
        tr: ['take', 'teuk', 'took', 'taen', 'takken', 'teuken', 'taken', 'tane', 'takkin', 'tooken', 'tookin'],
        ex: 'I wis takkin the dug for a walk whan it stairtit smirrin',
        gr: 'pres pt o the v <span>tae tak</span>'
    }, {
        sc: 'tak on',
        en: 'adopt',
        tr: {
            sc: 'teuk on',
            tr: 'adopted'
        },
        pp: {
            sc: ['taen on', 'takken on', 'teuken on'],
            tr: 'adopted'
        },
        gr: 'v phr',
        ex: 'The Chairter wis taen on in 1992',
        ph: true
    }, {
        sc: 'tred',
        en: 'trade',
        gr: 'v'
    }, {
        sc: 'tuim',
        en: [
            'empty a container', ['pour', 'empty out'],
            'discharge (a gun or shot)',
            'drain water from (potatoes)',
            '<span>(of water)</span> flow or gush copiously', ['<span>(of rain)</span> to pour', 'come down in torrents']
        ],
        pt_pp: {
            sc: 'tuimt',
            tr: ['emptied', 'emptied out',
                'discharge', 'drained', 'gushed', 'poured'
            ]
        },
        tr: ['empty', 'gush'],
        gr: 'v',
        or: 'frae the adj',
        ex: 'He tuimt the watter doun the cundie'
    }, { // R
        sc: 'rax',
        en: [
            ['reach', 'stretch']
        ],
        gr: 'v',
        pt_pp: {
            sc: ['raxed', 'raxt'],
            en: ['reached', 'stretched']
        }
    }, {
        sc: 'redd',
        en: [
            ['clear', 'rid'], 'clarify'
        ],
        gr: 'v'
    }, {
        sc: ['set furth', 'furthset'],
        en: 'publish',
        gr: 'v phr, v',
        or: [G.notes.or.as + ' haes <span>furthset</span> ‘tae set furth or forrit; tae advance’ an <span>furthsettar, furthsetter</span>'],
        ex: 'She haes setten furth a pose o onco bonnie poetry'
    }, { // S
        sc: 'skare',
        en: 'share',
        gr: 'v',
        or: [
            [G.notes.or.as, 'skar, scar(e), schare'],
            ['?' + G.notes.or.anor, 'skera'],
            ['?' + G.notes.or.md, 'scare, scaer']
        ]
    }, {
        sc: 'swither',
        en: [
            ['doubt', 'falter', 'hesitate', 'dither']
        ],
        tr: ['ditter', 'doiter', 'unsure'],
        hl: 'swither',
        gr: 'v',
        ex: 'Dinna swither, min — haud gaun!',
        or: ['doutsome; first kythes (as a verb) in ' + G.notes.or.ms]
    }, {
        sc: 'uise',
        pr: ['yöz', 'yüz', 'öz', 'yaiz', 'ees'],
        en: 'use',
        tr: ['yaise', 'uiss', 'yiss', 'yaize'],
        hl: ['yaise', 'yaize', 'uise', 'yaiz', 'ees'],
        gr: 'v'
    }, {
        sc: 'upsteer',
        sc_alt: 'upsteir',
        en: [
            ['stir up', 'throw into turmoil', 'stimulate', 'encourage', 'arouse', 'incite']
        ],
        tr: 'rouse',
        gr: 'v'
    },
    // v wis
    {
        sc: G.v.wis.sc,
        sc_alt: G.v.wis.sc_alt,
        pr: G.v.wis.pr,
        en: G.v.wis.en,
        tr: [].concat(G.v.war.trigs, G.v.wis.trigs),
        hl: [].concat(G.v.wis.sc, G.v.wis.pr, G.v.wis.tr),
        gr: 'v'
    }, { // wis neg
        sc: G.v.wis.neg.sc,
        en: G.v.wis.neg.en,
        tr: [].concat(G.v.war.trigs, G.v.wis.trigs),
        hl: [].concat(G.v.wis.neg.sc, G.v.wis.neg.tr),
        gr: ['neg o v ' + G.utils.addSpan(G.v.wis.sc)]
    },
    // v wis end
    // v war
    {
        sc: G.v.war.sc,
        pr: G.v.war.pr,
        en: G.v.war.en,
        tr: [].concat(G.v.war.trigs, G.v.wis.trigs),
        hl: [].concat(G.v.war.sc, G.v.war.pr),
        gr: 'v'
    }, { // war neg
        sc: G.v.war.neg.sc,
        en: G.v.war.neg.en,
        tr: [].concat(G.v.war.trigs, G.v.wis.trigs),
        hl: [].concat(G.v.war.neg.sc, G.v.war.neg.tr),
        gr: ['neg o v ' + G.utils.addSpan(G.v.war.sc)]
    }
    // v war end
    // Template
    // // v {{ wird }}
    // { // v {{ wird }}
    //     sc: G.v.{{ wird }}.sc,
    //     en: G.v.{{ wird }}.en,
    //     pr: G.v.{{ wird }}.pr,
    //     tr: G.v.{{ wird }}.trigs,
    //     hl: [].concat(G.v.{{ wird }}.sc, G.v.{{ wird }}.pr),
    //     gr: 'v'
    // }, { // v {{ wird }} neg
    //     sc: G.v.{{ wird }}.neg.sc,
    //     en: G.v.{{ wird }}.neg.en,
    //     tr: G.v.{{ wird }}.trigs,
    //     hl: [].concat(G.v.{{ wird }}.neg.sc, G.v.{{ wird }}.neg.tr),
    //     gr: 'neg o ' + G.v.{{ wird }}.meta.gr_hw
    // }, { // v {{ wird }} neg third person singular
    //     sc: G.v.{{ wird }}.neg.tps.sc,
    //     en: G.v.{{ wird }}.neg.tps.en,
    //     tr: G.v.{{ wird }}.trigs,
    //     hl: G.v.{{ wird }}.neg.tps.sc, // no specific trigger for this conjugation
    //     gr: 'neg third person singular o ' + G.v.{{ wird }}.meta.gr_hw
    // }, { // v {{ wird }} pt
    //     sc: G.v.{{ wird }}.pt.sc,
    //     en: G.v.{{ wird }}.pt.en,
    //     tr: G.v.{{ wird }}.trigs,
    //     hl: G.v.{{ wird }}.pt.sc,
    //     gr: 'pt o ' + G.v.{{ wird }}.meta.gr_hw
    // }, { // v {{ wird }} pt neg
    //     sc: G.v.{{ wird }}.pt.neg.sc,
    //     en: G.v.{{ wird }}.pt.neg.en,
    //     tr: G.v.{{ wird }}.trigs,
    //     hl: G.v.{{ wird }}.pt.neg.sc,
    //     gr: 'neg pt o ' + G.v.{{ wird }}.meta.gr_hw
    // }, { // v {{ wird }} pp
    //     sc: G.v.{{ wird }}.pp.sc,
    //     en: G.v.{{ wird }}.pp.en,
    //     tr: G.v.{{ wird }}.trigs,
    //     hl: G.v.{{ wird }}.pp.sc,
    //     gr: 'pp o ' + G.v.{{ wird }}.meta.gr_hw
    // }, { // v {{ wird }} -ing form
    //     sc: G.v.{{ wird }}.ing.sc,
    //     en: G.v.{{ wird }}.ing.en,
    //     tr: G.v.{{ wird }}.trigs,
    //     hl: G.v.{{ wird }}.ing.sc
    // }, { // v Third person singular
    //     sc: G.v.{{ wird }}.tps.sc,
    //     en: G.v.{{ wird }}.tps.en,
    //     tr: G.v.{{ wird }}.trigs,
    //     hl: G.v.{{ wird }}.tps.sc,
    //     gr: 'third person singular o ' + G.v.{{ wird }}.meta.gr_hw
    //
    // },
    // // v {{ wird }} end
);
