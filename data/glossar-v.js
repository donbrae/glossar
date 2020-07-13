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
    sc: ['gae', 'gang', 'gan', 'ging'],
    en: ['go'],
    neg: {
        sc: ['gaena', 'gangna', 'gingna'],
        en: [
            ['do not go', 'go not']
        ],
        tr: ['ganna', 'gona', 'don\'t go'],
        tps: { // > Third person singular
            sc: ['gaesna', 'gangsna', 'gansna', 'gingsna'],
            en: [
                ['does not go', 'goes not']
            ],
            tr: ['goesna', 'doesn\'t go']
        }
    },
    pt: {
        sc: ['gaed', 'went', 'ginged'],
        en: 'went',
        tr: ['gad', 'goed', 'ganged'],
        neg: {
            sc: ['gaedna'],
            en: 'did not go'
        }
    },
    pp: {
        sc: 'gane',
        en: 'gone',
        tr: ['ganed', 'goan', 'gaen']
    },
    ing: {
        sc: ['gaun', 'gangin', 'gaein', 'gingin'],
        en: 'going',
        tr: ['goin', 'gawn', 'gawin', 'gauin']
    },
    tps: {
        sc: ['gaes', 'gangs', 'gans', 'gings'],
        en: 'goes'
    }
};
G.v.gae.trigs = [].concat( // Control display of conjugated 'gae'
    G.v.gae.sc, G.v.gae.en, // gae
    G.v.gae.neg.sc, // gae neg
    G.v.gae.neg.tps.sc, // gae neg third person singular
    G.v.gae.pt.sc, G.v.gae.pt.en, G.v.gae.pt.tr, // gae pt
    G.v.gae.pt.neg.sc, // gae pt neg
    G.v.gae.pp.sc, G.v.gae.pp.en, G.v.gae.pp.tr, // gae pp
    G.v.gae.ing.sc, G.v.gae.ing.en, G.v.gae.ing.tr, // gae -ing form
    G.v.gae.tps.sc, G.v.gae.tps.en // gae third person singular
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
        ],
        tps: { // > Third person singular
            sc: 'giesna',
            en: [
                ['does not give', 'gives not']
            ]
        }
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
    G.v.gie.neg.sc, // gie neg
    G.v.gie.neg.tps.sc, // gie neg third person singular
    G.v.gie.pt.sc, G.v.gie.pt.en, // gie pt
    G.v.gie.pt.neg.sc, // gie pt neg
    G.v.gie.pp.sc, G.v.gie.pp.en, // gie pp
    G.v.gie.ing.sc, G.v.gie.ing.en, G.v.gie.ing.tr, // gie -ing form
    G.v.gie.tps.sc, G.v.gie.tps.en // gie third person singular
);
G.v.gie.meta = { // Metadata
    gr_hw: 'v ' + G.utils.addSpan('tae ' + G.v.gie.sc)
};
// gie end

// v will
G.v.will = {
    sc: 'will',
    en: 'will',
    pr: ['will', 'wull'],
    neg: {
        sc: ['winna', 'willna'],
        sc_alt: ['winnae', 'willnae'],
        tr: ['wullna', 'wullnae', 'wunna', 'wunnae', 'winny', 'wunny'],
        en: 'will not'
    },
    pt_pp: {
        sc: 'wad',
        pr: ['wid', 'wad', 'wud'],
        en: 'would',
        neg: {
            sc: 'wadna',
            en: [
                ['wouldn\'t', 'would not']
            ],
            tr: ['widnae', 'wadnae', 'wudnae', 'widna', 'wudna', 'widny', 'wudny']
        }
    }
};
G.v.will.trigs = [].concat( // Control display of conjugated 'will'
    G.v.will.sc, G.v.will.en, // will
    G.v.will.pr, // will pr
    G.v.will.neg.sc, G.v.will.neg.sc_alt, G.v.will.neg.tr, G.v.will.neg.en, // will neg
    G.v.will.pt_pp.sc, G.v.will.pt_pp.pr, // will pt_pp
    G.v.will.pt_pp.neg.sc, G.v.will.pt_pp.neg.tr, G.v.will.pt_pp.neg.en // will pt_pp neg
)
// will end
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
            tr: ['umna', 'umnae', 'ament']
        }
    },
    psp: { // Present singular and plural
        sc: 'ar',
        en: 'ar',
        tr: ['ur', 'are'],
        neg: { // Present singular and plural
            sc: ['arna', 'arnae'],
            en: [
                ['are not', 'aren\'t']
            ],
            tr: ['urna', 'urnae']
        }
    },
    neg: {
        sc: 'binna',
        en: 'is not',
        tr: ['binnae', 'is no', 'isn\'t']
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
    G.v.war.sc, G.v.war.pr, G.v.war.en, // war
    G.v.war.neg.sc, G.v.war.neg.en, G.v.war.neg.tr // neg
);
// wis end

// v dae
G.v.dae = {
    sc: ['dae', 'div'],
    en: 'do',
    pr: ['day', 'dee', 'doo'],
    tr: 'duv',
    neg: {
        sc: ['daena', 'dinna', 'dae', 'divna'],
        sc_alt: ['dinnae', 'divnae'],
        en: [
            ['do not', 'don\'t']
        ],
        tr: ['daenae', 'deh', 'duvnae', 'duvna', 'dinny', 'dinnay']
    },
    ps: { // Present singular
        sc: ['daes', 'dis'],
        en: 'does',
        tr: 'dus',
        neg: {
            sc: ['daesna', 'disna'],
            sc_alt: ['daesnae', 'disnae'],
            en: [
                ['does not', 'doesn\'t']
            ],
            tr: ['duznae', 'dusnae', 'doesnae', 'doesna']
        }
    },
    pt: {
        sc: ['daed', 'did'],
        en: 'did',
        pr: ['did', 'daid', 'dood'],
        neg: {
            sc: ['daedna', 'didna'],
            sc_alt: ['daednae', 'didnae'],
            en: [
                ['did not', 'didn\'t']
            ]
        }
    },
    ptp: {
        sc: ['duin', 'daen'],
        en: 'done',
        pr: ['din', 'deen', 'dayn', 'doon']
    }
};
G.v.dae.trigs = [].concat( // Control display of conjugated 'hae'
    G.v.dae.sc, G.v.dae.en, G.v.dae.pr, // dae
    G.v.dae.neg.sc, G.v.dae.neg.sc_alt, G.v.dae.neg.en, G.v.dae.neg.tr, // dae neg
    G.v.dae.ps.sc, G.v.dae.ps.en, G.v.dae.ps.tr, // dae present singular
    G.v.dae.ps.neg.sc, G.v.dae.ps.neg.sc_alt, G.v.dae.ps.neg.en, G.v.dae.ps.neg.tr, // dae neg present singular
    G.v.dae.pt.sc, G.v.dae.pt.en, G.v.dae.pt.pr, // dae past tense
    G.v.dae.pt.neg.sc, G.v.dae.pt.neg.sc_alt, G.v.dae.pt.neg.en, // dae neg past tense
    G.v.dae.ptp.sc, G.v.dae.ptp.pr // dae past participle
);
// dae end

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
        tr: ['huvnae', 'huvna', 'havena', 'havenae']
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
G.v.ken_knaw.trigs = ['ken', 'know', 'kenna', 'know not', 'kent', 'kenned', 'kend', 'knew', 'kentna', 'knew not', 'did not know', 'didn\'t know', 'known', 'knaw', 'knawed', 'knawn'];

// lat triggers
G.v.lat = {};
G.v.lat.trigs = ['allow', 'permit', 'cause', 'make happen', 'luit', 'latten', 'luiten', 'lit', 'lat', 'lit', 'leet', 'löt', 'lüt'];

/**
 * Add verbs (both complex and more simple) to dictionary object
 */

G.dict.push({ // A
        sc: 'accress',
        pt_pp: {
            sc: 'accressed',
            tr: ['increased', 'accrued', 'grown', 'grew']
        },
        en: ['accrue', ['increase', 'grow']],
        gr: ['v', 'obsolete'],
        tr: 'added',
        hl: 'accress',
        or: [
            [G.notes.or.as, 'accress, accresce'],
            ['frae the ' + G.notes.or.rl + ' term', 'accrescere']
        ]
    }, {
        sc: 'adduce',
        en: ['cite as pertinent, quote as evidence'],
        tr: 'pertain',
        hl: 'adduce',
        gr: 'v',
        or: [
            [G.notes.or.as, 'adduce'],
            [G.notes.or.l, 'adūcere']
        ]
    }, {
        sc: 'allocate',
        def: 'tae assign',
        pt: {
            sc: 'allocatit',
            tr: ['allocated', 'assigned']
        },
        pp: {
            sc: 'allocate',
            tr: ['allocated', 'allocatit', 'assigned']
        },
        tr: ['assign', 'appoint'],
        hl: 'assign',
        gr: 'v',
        or: [
            [G.notes.or.as, 'allocat'],
            [G.notes.or.l, 'allocāt-, <span>ptp stem o</span> allocāre']
        ],
        ex: ['Aw students is allocate £100 o prent credit at the stert o ilka semester', 'Resources haes been allocate tae them that’s maist in need']
    }, { // v be
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
        gr: 'present singular o v ' + G.utils.addSpan('tae ' + G.v.be.sc)
    }, { // amna
        sc: G.v.be.ps.neg.sc,
        en: G.v.be.ps.neg.en,
        tr: G.v.be.trigs,
        hl: [].concat(G.v.be.ps.neg.en, G.v.be.ps.neg.tr),
        gr: 'present singular neg o v ' + G.utils.addSpan('tae ' + G.v.be.sc)
    }, { // is
        sc: G.v.be.tpps.sc,
        en: G.v.be.tpps.en,
        tr: G.v.be.trigs,
        hl: [].concat(G.v.be.tpps.en),
        gr: 'third person present singular o v ' + G.utils.addSpan('tae ' + G.v.be.sc)
    }, { // isna
        sc: G.v.be.tpps.neg.sc,
        en: G.v.be.tpps.neg.en,
        tr: G.v.be.trigs,
        hl: [].concat(G.v.be.tpps.neg.en),
        gr: 'third person present singular neg o v ' + G.utils.addSpan('tae ' + G.v.be.sc)
    }, { // are
        sc: G.v.be.psp.sc,
        en: G.v.be.psp.en,
        tr: G.v.be.trigs,
        hl: [].concat(G.v.be.psp.en, G.v.be.psp.tr),
        gr: 'present singular an plural o v ' + G.utils.addSpan('tae ' + G.v.be.sc)
    }, { // arena
        sc: G.v.be.psp.neg.sc,
        en: G.v.be.psp.neg.en,
        tr: G.v.be.trigs,
        hl: [].concat(G.v.be.psp.neg.en, G.v.be.psp.neg.tr),
        gr: 'present singular an plural neg o v ' + G.utils.addSpan('tae ' + G.v.be.sc)
    }, { // binna
        sc: G.v.be.neg.sc,
        en: G.v.be.neg.en,
        tr: G.v.be.trigs,
        hl: [].concat(G.v.be.neg.en, G.v.be.neg.tr),
        gr: 'neg o v ' + G.utils.addSpan('tae ' + G.v.be.sc) + '; líterar'
    },
    // v be end
    {
        sc: 'big',
        en: 'build',
        pt: {
            sc: ['biggit', 'bug'],
            tr: ['built', 'bigget']
        },
        pp: {
            sc: ['biggit', 'buggen'],
            tr: ['built', 'bigget']
        },
        tr: 'bigg',
        gr: 'v',
        or: [
            [G.notes.or.as, 'big'],
            [G.notes.or.anor, 'byggja']
        ],
        au: 'big'
    }, { // C
        sc: 'cast-ower',
        en: 'review',
        tr: ['cast ower'],
        gr: 'phrasal v',
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
        sc: 'consíder',
        pr: 'conseeder',
        def: 'tae think on, tak intil accoont',
        pt_pp: {
            sc: ['consídert', 'consídered'],
            tr: 'considered'
        },
        tr: ['think on', 'consider'],
        gr: 'v',
        or: [
            [G.notes.or.as, 'consider, considder'],
            [G.notes.or.af, 'considerer'],
            [G.notes.or.l, 'consīderāre']
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
        sc: 'depone agin',
        en: 'accuse',
        gr: 'phrasal v'
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
        sc: 'depone',
        en: [
            ['make a sworn statement', 'swear', 'testify', 'give evidence on oath']
        ],
        pt_pp: {
            sc: ['deponed', 'depone’t'],
            tr: ['swore', 'sworn', 'testified']
        },
        tr: 'declare',
        gr: 'v',
        or: [
            [G.notes.or.as, 'depone'],
            [G.notes.or.l, 'dēpōnere']
        ]
    }, {
        sc: 'depute',
        pt_pp: {
            sc: 'depute',
            tr: 'deputised'
        },
        def: 'apynt as depute',
        gr: 'v',
        ex: 'Aaron wis depute tae cover for his manager at the comatee meetin',
        or: [
            [G.notes.or.as, 'depute, deput'],
            [G.notes.or.af, 'deputer']
        ]
    }, {
        sc: 'deburse',
        en: 'disburse',
        def: 'pey oot (siller frae a fund)',
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
        tr: 'mak',
        hl: 'develop',
        gr: 'v'
    }, {
        sc: 'descrive',
        pr: ['descreeve', 'descryve'],
        pt_pp: {
            sc: 'descrived',
            tr: 'described'
        },
        en: 'describe',
        tr: ['descrieve', 'discrieve'],
        gr: 'v',
        or: [
            [G.notes.or.as, 'descrive, descryve, discrive, discryve'],
            [G.notes.or.me, 'descriven']
        ]
    }, {
        sc: 'differ',
        en: [
            ['be dissimilar or distinct'],
            ['quarrel', 'disagree']
        ],
        tr: 'row',
        gr: 'v',
        or: [
            [G.notes.or.as, 'differ'],
            [G.notes.or.mf, 'differer']
        ]
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
        gr: ['v'],
        ex: [G.ex.i1, G.ex.g1]
    }, {
        sc: 'ettle sair',
        en: [
            ['try hard', 'strive']
        ],
        pt_pp: {
            sc: 'ettelt sair',
            tr: ['tried hard', 'strove', 'striven', 'strived']
        },
        gr: 'phrasal v',
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
        ex: 'He tried tae evite bein liftit by the polis'
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
        tr: G.v.gae.neg.tps.tr,
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
        hl: G.v.gae.tps.sc,
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
        gr: 'v',
        au: 'gie',
        or: [
            [G.notes.or.as, 'give, gyve']
        ]
    }, { // v gie neg
        sc: G.v.gie.neg.sc,
        en: G.v.gie.neg.en,
        tr: G.v.gie.trigs,
        hl: G.v.gie.neg.sc,
        gr: 'neg o ' + G.v.gie.meta.gr_hw
    }, { // v gae neg third person singular
        sc: G.v.gie.neg.tps.sc,
        en: G.v.gie.neg.tps.en,
        tr: G.v.gie.trigs,
        hl: [].concat(G.v.gie.neg.tps.sc, G.v.gie.neg.tps.tr),
        gr: 'neg third person singular o ' + G.v.gie.sc
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
        pt_pp: {
            sc: 'componed',
            tr: ['composed', 'componit', 'compounded', 'combined', 'settled', 'calmed']
        },
        en: [
            ['come to an agreement', 'settle a dispute with payment'],
            ['compound', 'combine'],
            'compose in speech or writing',
            'compound a payment for a certain sum',
            'compose or calm oneself'
        ],
        or: [
            [G.notes.or.as, 'compone'],
            [G.notes.or.l, 'compōnere']
        ],
        tr: ['compose', 'calm', 'settle'],
        gr: ['v', 'merkit obsolete in CSD2']
    }, {
        sc: 'compone',
        pt_pp: {
            sc: 'componed',
            tr: ['composed', 'componit']
        },
        def: 'write or create (a wark o airt, inspecially muisic or poyetry)',
        tr: ['compose', 'write'],
        hl: 'compose',
        gr: ['v'],
        or: [
            'pairt archaism, pairt protologism, frae the ' + G.notes.or.as + ' <span>compone</span> ‘tae mak by pittin thegither, tae compose; create in speak or writin.’ Henryson wrate: ‘Of thir sex … fyve hevynly symphonyis Componyt ar,’ whaur <span>symphonyis</span> = ‘a harmonious muisical sound’',
            [G.notes.or.l, 'compōnere']
        ]
    }, { // dae
        sc: G.v.dae.sc,
        pr: G.v.dae.pr,
        en: G.v.dae.en,
        tr: G.v.dae.trigs,
        hl: G.v.dae.sc,
        gr: 'v'
    }, { // dae neg
        sc: G.v.dae.neg.sc,
        sc_alt: G.v.dae.neg.sc_alt,
        pr: G.v.dae.neg.pr,
        en: G.v.dae.neg.en,
        tr: G.v.dae.trigs,
        hl: [].concat(G.v.dae.neg.sc, G.v.dae.neg.tr),
        gr: 'neg o the v ' + G.utils.addSpan('tae ' + G.v.dae.sc.join(', ')),
        ex: 'I dae ken'
    }, { // dae present singular
        sc: G.v.dae.ps.sc,
        en: G.v.dae.ps.en,
        pr: G.v.dae.ps.pr,
        tr: G.v.dae.trigs,
        hl: [].concat(G.v.dae.ps.sc, G.v.dae.ps.tr),
        gr: 'present singular o the v ' + G.utils.addSpan('tae ' + G.v.dae.sc.join(', '))
    }, { // dae present singular neg
        sc: G.v.dae.ps.neg.sc,
        sc_alt: G.v.dae.ps.neg.sc_alt,
        en: G.v.dae.ps.neg.en,
        tr: G.v.dae.trigs,
        hl: [].concat(G.v.dae.ps.neg.sc, G.v.dae.ps.neg.tr),
        gr: 'neg present singular o the v ' + G.utils.addSpan('tae ' + G.v.dae.sc.join(', '))
    }, { // dae past tense
        sc: G.v.dae.pt.sc,
        pr: G.v.dae.pt.pr,
        en: G.v.dae.pt.en,
        tr: G.v.dae.trigs,
        hl: [].concat(G.v.dae.pt.sc),
        gr: 'pt o the v ' + G.utils.addSpan('tae ' + G.v.dae.sc.join(', '))
    }, { // dae neg past tense
        sc: G.v.dae.pt.neg.sc,
        sc_alt: G.v.dae.pt.neg.sc_alt,
        en: G.v.dae.pt.neg.en,
        tr: G.v.dae.trigs,
        hl: [].concat(G.v.dae.pt.neg.sc, G.v.dae.pt.neg.tr),
        gr: 'neg pt o the v ' + G.utils.addSpan('tae ' + G.v.dae.sc.join(', '))
    }, { // dae past par
        sc: G.v.dae.ptp.sc,
        sc_alt: G.v.dae.ptp.sc_alt,
        en: G.v.dae.ptp.en,
        pr: G.v.dae.ptp.pr,
        tr: G.v.dae.trigs,
        hl: [].concat(G.v.dae.ptp.sc, G.v.dae.ptp.pr),
        gr: 'pp o the v ' + G.utils.addSpan('tae ' + G.v.dae.sc.join(', '))
    }, {
        sc: 'jalouse',
        en: ['suspect', ['suppose', 'guess', 'surmise']],
        pr: 'jaLooz',
        pt: {
            sc: 'jaloused',
            tr: ['suspected', 'supposed', 'guessed', 'surmised', 'figured']
        },
        gr: 'v',
        tr: ['jaloose', 'assume', 'assumed', 'figure'],
        hl: ['jalouse', 'jaloose', 'figure'],
        or: [
            'this uissage first appears in ' + G.notes.or.lms, [G.notes.or.f, 'jalouser']
        ],
        ex: [G.ex.y, G.ex.z]
    }, {
        sc: 'dounlaid',
        pt: {
            sc: 'dounlaidit',
            en: 'downloaded',
            tr: 'doonloadit'
        },
        def: '<em>v</em> copy data frae ae computer system til anither, for ordinar ower the internet; <em>n</em> the data (file) dounlaidit',
        pr: 'doonlaid',
        gr: ['v', 'n'],
        tr: ['doonload', 'download'],
        or: [
            ['Scots <em>doun</em> + Scots <em>laid</em>, efter ' + G.notes.or.mode, 'download']
        ]
    }, {
        sc: 'edifee',
        def: 'instruct, enlichten',
        tr: ['edify', 'instruct', 'enlichten', 'enlighten', 'teach'],
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
            sc: 'effeirt',
            tr: ['belonged to', 'pertained to', 'related to', 'corresponded to', 'concerned', 'referred to', 'applied to', 'applicable to', 'belonged', 'pertained', 'related', 'corresponded', 'referred', 'applied', 'applicable', 'belonged']
        },
        gr: ['v', 'formal'],
        tr: ['belong', 'pertain', 'effeirin tae', 'effeirin til', 'applicable to', 'apply to', 'relate to', 'correspond to', 'concern', 'about', 'refer to'],
        or: [
            [G.notes.or.as, 'affer(e), effere'],
            [G.notes.or.an + ', ' + G.notes.or.af, 'aferir']
        ],
        ex: 'The regulations effeir til hoose biggin'
    }, {
        sc: ['effeirin tae/til'],
        pr: ['iFeerin tae', 'iFeerin til'],
        en: [
            ['pertaining to', 'belonging to'],
            ['in relation to', 'in proportion to', 'corresponding to']
        ],
        gr: ['phrasal v', 'formal'],
        tr: ['effeir', 'relating to', 'according to', 'applicable to', 'concerning', 'about', 'referring to'],
        hl: ['effeirin tae', 'effeirin til', 'relating to', 'applicable to', 'concerning', 'referring to'],
        or: 'see v <span>effeir</span>',
        ex: 'The comatee spak anent maiters effeirin til halth policy',
        ph: true
    }, {
        sc: 'gar',
        pt_pp: {
            sc: ['gart', 'garred'],
            tr: ['made', 'caused', 'forced', 'compelled', 'required', 'makkit']
        },
        def: ['cause something tae be duin', 'mak a body or thing dae something'],
        tr: ['make', 'mak', 'cause', 'force', 'compel', 'require'],
        gr: 'v',
        or: [
            [G.notes.or.as, 'ger, gar'],
            [G.notes.or.anor, 'gera']
        ],
        ex: ['It gars ye think', G.ex.u, 'The court gart the company provide mair wittins']
    }, {
        sc: 'gie bield tae/til',
        en: 'protect',
        tr: ['gie bield tae', 'gie bield til'],
        gr: 'phrasal v',
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
        tr: ['hauden', 'hold'],
        hl: ['haud', 'hold'],
        gr: 'v',
        ex: [G.ex.z, 'The neist comatee meetin will be hauden in Mey'],
        or: [
            [G.notes.or.as, 'hald, had, hauld, haud'],
            [G.notes.or.ae, 'healdan']
        ]
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
        tr: 'aim for',
        gr: 'phrasal v'
    }, {
        sc: 'haud forrit',
        en: 'continue to improve (e.g. in health, or in terms of the degree of one’s accomplishment at performing a given job, task or craft)',
        tr: 'continue to improve',
        gr: 'phrasal v'
    }, {
        sc: 'haud gaun',
        en: [
            ['keep going', 'continue']
        ],
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
        sc: 'haud in aboot',
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
            [G.notes.or.as, 'inbring, imbring'],
            [G.notes.or.ae, 'inbrengan']
        ],
        ex: [G.ex.l, G.ex.s]
    }, {
        sc: 'innovate',
        pt: {
            sc: 'innovatit',
            tr: 'innovated'
        },
        pp: {
            sc: 'innovate',
            tr: 'innovated'
        },
        en: [
            ['alter or revise (established practice or the status quo)', 'introduce something new']
        ],
        tr: ['alter', 'revise'],
        gr: 'v',
        or: [
            [G.notes.or.as, 'innovat, innovate'],
            G.notes.or.l + ' <em>innovāt-</em>, ptp stem o <em>innovāre</em>'
        ],
        ex: ['She aye likit tae innovate in her wark']
    }, {
        sc: 'interpone',
        en: 'interpose',
        pt_pp: {
            sc: ['interponed', 'interpone’t'],
            tr: ['interposed', 'intervened', 'interjected', 'interrupted', 'interruptit']
        },
        tr: ['intervene', 'interject', 'interrupt'],
        gr: 'v',
        or: [
            [G.notes.or.as, 'interpone'],
            [G.notes.or.l, 'interpõnere']
        ],
        inf: 'Uisses the day are limitit tae Scots law — aft-times in the phrase <span>interpone authority to</span> — but it wis uised mair braidly in Aulder Scots'
    }, {
        sc: 'introduce',
        pt_pp: {
            sc: 'introduced',
            tr: 'introduced',
        },
        en: 'introduce',
        gr: 'v'
        // or:
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
        en: 'knew',
        tr: G.v.ken_knaw.trigs,
        neg: {
            sc: 'kentna',
            tr: ['did not know', 'didn\'t know']
        },
        hl: ['kent', 'kenned', 'kend'],
        gr: 'pt o v ' + G.utils.addSpan('tae ken'),
        ex: 'Tammas kentna what tae dae'
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
        sc: 'lead ajee',
        pt: {
            sc: 'led ajee',
            tr: 'deceived'
        },
        en: 'deceive',
        gr: 'phrasal v'
    }, {
        sc: 'laid',
        en: 'load',
        gr: ['v', 'n'],
        or: [
            [G.notes.or.as, 'laid, lade']
        ]
    }, {
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
        sc: 'lair',
        en: 'teach',
        gr: 'v',
        tr: ['instruct', 'learn'],
        pt_pp: {
            sc: ['lairt', 'laired'],
            tr: ['taught', 'instructed']
        }
    }, {
        sc: 'lear',
        en: [
            ['teach', 'instruct'],
            'learn'
        ],
        gr: 'v',
        tr: 'instruct',
        pt_pp: {
            sc: ['leart', 'leared'],
            tr: ['taught', 'instructed', 'learned']
        }
    }, {
        sc: 'learn',
        en: [
            ['teach', 'instruct']
        ],
        tr: ['lair', 'lear'],
        hl: ['learn', 'lair', 'lear'],
        pt_pp: {
            sc: 'learnt',
            tr: ['taught', 'instructed']
        },
        gr: 'v',
        au: 'learn'
    }, {
        sc: 'licht',
        en: 'light',
        pt_pp: {
            sc: ['lichtit'],
            tr: 'lit'
        },
        gr: 'v',
        or: [
            [G.notes.or.as, 'licht, lycht, light'],
            [G.notes.or.ae, 'līhtan']
        ],
        au: 'licht'
    }, {
        sc: 'luit',
        en: 'let',
        tr: G.v.lat.trigs,
        hl: 'luit',
        pr: ['lit', 'leet', 'löt', 'lüt'],
        gr: 'pt o the v <span>tae lat</span>',
        ex: G.ex.e
    }, {
        sc: ['luiten', 'latten'],
        en: 'let',
        tr: G.v.lat.trigs,
        hl: ['latten', 'luiten'],
        gr: 'ptp o the v <span>tae lat</span>',
        ex: 'John haed been luiten doun by his colleague'
    }, {
        sc: 'lat see',
        en: 'produce',
        gr: 'phrasal v',
        ph: true
    }, {
        sc: 'mak',
        en: 'make',
        tr: ['manufacture', 'create', 'compose', 'compel'],
        gr: 'v',
        or: [
            [G.notes.or.as, 'mak'],
            [G.notes.or.ae, 'macian']
        ]
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
        gr: 'v',
        or: [
            [G.notes.or.as, 'minde, mynd(e)'],
            [G.notes.or.ae, 'mynd']
        ],
        au: 'mind'
    }, {
        sc: 'uplaid',
        tr: 'upload',
        pt: {
            sc: 'uplaidit',
            en: 'uploaded',
            tr: 'uploadit'
        },
        def: '<em>v</em> copy data frae ae computer system til anither, for ordinar til a server, an aften ower the internet; <em>n</em> the data (file) uplaidit',
        gr: ['v', 'n'],
        or: [
            ['Scots <em>up</em> + Scots <em>laid</em>, efter ' + G.notes.or.mode, 'upload']
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
        ex: ['Dinna fash yersel', 'I wis sair fasht aboot the job interview', G.ex.d]
    }, {
        sc: 'fecht',
        en: 'fight',
        tr: ['ficht', 'struggle', 'battle'],
        pt_pp: {
            sc: 'focht',
            tr: ['fought', 'fechtit']
        },
        gr: 'v',
        or: [
            [G.notes.or.as, 'fecht, feicht'],
            [G.notes.or.ae, 'feohtan']
        ]
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
    }, { // G
        sc: 'greet',
        en: ['cry', ['lament', 'complain']],
        tr: ['howl, sob', 'weep', 'whine', 'grumble', 'wheenge'],
        pt: {
            sc: ['grat', 'gret'],
            tr: ['cried', 'sobbed', 'wept', 'howled', 'wheenged', 'lamented', 'complained']
        },
        pp: {
            sc: ['grat', 'gret', 'grutten'],
            tr: ['cried', 'sobbed', 'wept', 'howled', 'wheenged', 'lamented', 'complained']
        },
        gr: 'v',
        or: [
            [G.notes.or.as, 'grete, greit'],
            [G.notes.or.ae, 'grētan']
        ],
        ex: 'Ye dinna need tae greet aboot it!',
        au: 'greet'
    }, { // Tak -ing ending
        sc: 'greetin',
        en: 'crying',
        tr: ['greeting', 'weeping'],
        ex: 'The film haed me greetin',
        gr: 'pres participle o the v <span>tae greet</span>',
        or: [
            [G.notes.or.as, 'gretand']
        ]
    },
    // H
    { // hae
        sc: G.v.hae.sc,
        pr: G.v.hae.pr,
        en: G.v.hae.en,
        tr: G.v.hae.trigs,
        hl: G.v.hae.sc,
        gr: 'v',
        ex: [G.ex.a1, G.ex.c1],
        or: [
            [G.notes.or.as, 'hafe, haif(f), ha, hae'],
            [G.notes.or.ae, 'habban']
        ],
        au: 'hae'
    }, { // hae neg
        sc: G.v.hae.neg.sc,
        sc_alt: G.v.hae.neg.sc_alt,
        pr: G.v.hae.neg.pr,
        en: G.v.hae.neg.en,
        tr: G.v.hae.trigs,
        hl: [].concat(G.v.hae.neg.sc, G.v.hae.neg.tr),
        gr: 'neg o the v ' + G.utils.addSpan('tae ' + G.v.hae.sc.join(', ')),
        ex: G.ex.b1
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
        gr: 'pt o the v ' + G.utils.addSpan('tae ' + G.v.hae.sc.join(', ')),
        ex: G.ex.d1
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
        gr: 'pp o the v ' + G.utils.addSpan('tae ' + G.v.hae.sc.join(', ')),
        ex: G.ex.e1
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
        sc: 'haud oot',
        pt: {
            sc: ['held oot', 'haudit oot'],
            tr: ['maintained', 'claimed']
        },
        pp: {
            sc: ['hauden oot', 'held oot'],
            tr: ['maintained', 'claimed']
        },
        en: [
            ['maintain', 'claim']
        ],
        gr: 'phrasal v',
        ex: 'He’d aye hauden oot tae be a millionaire, but fowk didna trew it'
    }, {
        sc: 'hoose',
        def: ['tae provide wi a hoose', 'tae bouk guids or craps'],
        tr: ['houss', 'hoose', 'house', 'hous'],
        gr: 'v',
        or: [
            [G.notes.or.as, 'hous, huse, hows'],
            [G.notes.or.ae, 'hūsian']
        ],
        ex: ['We can hoose the kye in the byre the nicht']
    }, { // O
        sc: 'ocht',
        en: 'ought',
        gr: 'v'
    }, {
        sc: 'ower',
        pr: ['uower', 'oar', 'oor', 'err'],
        pt_pp: {
            sc: ['owert, owered']
        },
        en: [
            ['overpower', 'take control', 'regulate or manage oneself']
        ],
        tr: ['over', 'owre'],
        hl: ['ower', 'owre'],
        gr: 'v',
        or: 'see adv'
    }, {
        sc: 'owergie',
        en: [
            ['give up', 'renounce', 'resign', 'surrender property']
        ],
        tr: ['owregie', 'relinquish', 'surrender'],
        gr: 'v',
        or: [
            [G.notes.or.as, 'overgive, ourgive']
        ]
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
        ex: ['Jamie pit the cat oot', G.ex.f, 'Iona haed pitten forrit mony guid ideas']
    }, {
        sc: 'pit forrit',
        en: 'introduce',
        gr: 'phrasal v'
    }, {
        sc: 'proceed',
        en: 'proceed',
        gr: 'v',
        tr: ['go', 'gae', 'gang', 'ging'],
        or: [
            [G.notes.or.as, 'proced(e), proceid'],
            [G.notes.or.me + ' an ' + G.notes.or.eme, 'proced(e), proceede'],
            [G.notes.or.f, 'procéder'],
            [G.notes.or.l, 'procéder']
        ]
    }, {
        sc: 'propone',
        pt_pp: {
            sc: ['proponed', 'propone’t'],
            tr: ['suggested', 'proposed', 'put forward']
        },
        def: [
            ['pit forrit for consíderation', 'suggest'],
            ['<span>law</span> pit forrit or state (a plea) in a court']
        ],
        en: 'propose',
        tr: 'bring forward',
        gr: 'v',
        or: [
            [G.notes.or.as, 'propone'],
            [G.notes.or.l, 'prōpōnere']
        ]
    }, { // T
        sc: 'tak',
        en: 'take',
        pt: {
            sc: 'teuk',
            tr: ['took', 'tuik']
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
        ex: 'The roaster’s comment haed been taen doun afore I could repone til him'
    }, { // Tak -ing ending
        sc: ['takkin', 'taein'],
        en: 'taking',
        tr: ['take', 'teuk', 'took', 'taen', 'takken', 'teuken', 'taken', 'tane', 'tooken', 'tookin', 'tak'],
        hl: 'takken', // Stops aw [tr] wirds frae bein highlichtit; wirds in [sc] and [en] will be highlichtit by defaut, sae need tae pit them here an aw
        ex: 'I wis takkin the dug for a walk whan it stertit smirrin',
        gr: 'pres participle o the v <span>tae tak</span>'
    }, {
        sc: 'tak on',
        en: 'adopt',
        tr: ['teuk on', 'adopted'],
        pp: {
            sc: ['taen on', 'takken on', 'teuken on'],
            tr: ['adopted', 'took on', 'adoptit']
        },
        gr: 'phrasal v',
        ex: 'The Chairter wis taen on in 1992',
        ph: true
    }, {
        sc: 'teach',
        en: 'teach',
        gr: 'v'
    }, {
        sc: 'tred',
        en: 'trade',
        gr: 'v'
    }, {
        sc: 'tuim',
        pr: ['tim', 'teem', 'toom', 'taim'],
        pt_pp: {
            sc: 'tuimt',
            tr: ['tuimed', 'emptied', 'emptied out',
                'discharged', 'drained', 'gushed', 'poured'
            ]
        },
        en: 'empty',
        tr: ['empty', 'gush', 'discharge', 'drain'],
        gr: 'v',
        or: 'frae the adj',
        ex: 'He tuimt the watter doun the cundie',
        au: 'tuim'
    }, { // R
        sc: 'rax',
        en: [
            'stretch', ['make a great effort', 'overexert', 'strain a part of yourself', 'rouse yourself'], 'deal (a person) a blow', ['lengthen by stretching', 'pull out', 'extend something to its full reach or capacity', 'be flexible or accommodating'], 'hang a person', ['reach out or over the hand or arm', 'give a person your hand'], 'extend, raise up the head or eyes in order to look or listen', 'hand a person an object', 'sprain a limb', 'reach for, stretch out to take or grasp something'
        ],
        gr: 'v',
        tr: ['hit', 'lengthen', 'rouse', 'reach', 'hand', 'sprain', 'hang', 'pass'],
        pt_pp: {
            sc: ['raxed', 'raxt'],
            tr: ['hit', 'handed', 'reached', 'stretched', 'overexterted', 'strained', 'sprained', 'roused', 'lengthened', 'extended', 'accomodated', 'hanged']
        },
        or: [
            [G.notes.or.as, 'rax, raux, wrax'],
            [G.notes.or.ae, 'raxan']
        ],
        ex: [G.ex.f1, 'I raxt mysel sair pittin in the byler']
    }, {
        sc: 'redd',
        en: [
            ['clear', 'rid'], 'clarify'
        ],
        gr: 'v'
    }, {
        sc: 'remeid',
        en: [
            ['remedy', 'redress']
        ],
        tr: ['remeed', 'rectify', 'cure'],
        gr: 'v',
        or: [
            [G.notes.or.as, 'remed(e)'],
            ['frae the noun or a reduced mak o ' + G.notes.or.an, 'remedier']
        ]
    }, {
        sc: ['set furth', 'furthset'],
        pt: {
            sc: ['set furth', 'furthset'],
            tr: 'published'
        },
        pp: {
            sc: ['set furth', 'setten furth'],
            tr: 'published'
        },
        en: 'publish',
        gr: 'phrasal v, v',
        or: [G.notes.or.as + ' haes <span>furthset</span> ‘tae set furth or forrit; tae advance’ an <span>furthsettar, furthsetter</span>'],
        ex: 'She haes setten furth a pose o unco bonnie poyetry'
    }, { // S
        sc: 'skair',
        en: 'share',
        gr: ['v', 'n'],
        tr: 'skare',
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
    }, { // U
        sc: 'uise',
        pr: ['yöz', 'yüz', 'öz', 'yaiz', 'ees'],
        en: 'use',
        tr: ['yaise', 'uiss', 'yiss', 'yaize'],
        hl: ['yaise', 'yaize', 'uise', 'yaiz', 'ees'],
        gr: 'v'
    }, {
        sc: 'unsteek',
        en: 'open',
        gr: 'v'
    }, {
        sc: 'upcast',
        en: [
            ['calculate', 'reckon', 'estimate']
        ],
        gr: 'v'
    }, {
        sc: 'upsteer',
        sc_alt: 'upsteir',
        en: [
            ['stir up', 'throw into turmoil', 'stimulate', 'encourage', 'arouse', 'incite']
        ],
        tr: 'rouse',
        gr: 'v'
    }, {
        sc: 'wirk',
        pr: 'wirk, wurk',
        pt_pp: {
            sc: 'wrocht',
            tr: ['worked', 'workit', 'made', 'built', 'manufactured', 'biggit']
        },
        tr: ['labour', 'labor', 'toil', 'wark'],
        hl: 'wirk',
        en: 'work',
        gr: 'v',
        or: [
            [G.notes.or.as, 'wirk, wyrk'],
            [G.notes.or.ae, 'wyrcan']
        ],
        ex: ['She haed wrocht hersel sair tae win the company the contract', 'The team haed been wirkin on the project for a guid while']
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
    }, { // will
        sc: G.v.will.sc,
        pr: G.v.will.pr,
        en: G.v.will.en,
        tr: G.v.will.trigs,
        hl: [].concat(G.v.will.sc, G.v.will.pr),
        gr: 'v',
        or: [
            [G.notes.or.as, 'will'],
            [G.notes.or.ae, 'willan']
        ]
    }, { // will neg
        sc: G.v.will.neg.sc,
        sc_alt: G.v.will.neg.sc_alt,
        en: G.v.will.neg.en,
        tr: G.v.will.trigs,
        hl: [].concat(G.v.will.neg.sc, G.v.will.neg.tr),
        gr: ['neg o v ' + G.utils.addSpan(G.v.will.sc)]
    }, { // will pt and pp
        sc: G.v.will.pt_pp.sc,
        en: G.v.will.pt_pp.en,
        tr: G.v.will.trigs,
        hl: [].concat(G.v.will.pt_pp.sc, G.v.will.pt_pp.pr),
        gr: ['pt and ptp o v ' + G.utils.addSpan(G.v.will.sc)],
        or: [
            [G.notes.or.as, 'wald'],
            [G.notes.or.ae, 'wolde']
        ]
    }, { // will pt and pp neg
        sc: G.v.will.pt_pp.neg.sc,
        en: G.v.will.pt_pp.neg.en,
        tr: G.v.will.trigs,
        hl: [].concat(G.v.will.pt_pp.neg.sc, G.v.will.pt_pp.neg.tr),
        gr: ['neg pt and ptp o v ' + G.utils.addSpan(G.v.will.sc)],
        ex: 'Ye wadna could tell he uised tae be in the airmy'
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
