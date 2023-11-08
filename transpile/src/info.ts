const values: { [key: string]: number | null } = {
    '292': 3672,
    '295': 3673,
    '296': 3674,
    '297': 3675,
    '300': 3676,
    '301': 301,
    '302': 3677,
    '303': 3678,
    '304': 3679,
    '305': 3503,
    '307': 3681,
    '308': 3682,
    '309': 3683,
    '310': 3684,
    '312': 531,
    '313': 3685,
    '314': 3686,
    '316': 3821,
    '317': 3822,
    '318': 4428,
    '319': 3823,
    '321': 3824,
    '322': 322,
    '326': 3825,
    '327': 3826,
    '328': 3827,
    '329': 329,
    '330': 3828,
    '331': 3829,
    '334': 3830,
    '335': 3831,
    '336': 3832,
    '337': 3833,
    '339': 3834,
    '340': 3835,
    '341': 3836,
    '342': 342,
    '343': 3500,
    '344': 3838,
    '345': 3839,
    '346': 3840,
    '348': 3841,
    '349': 3842,
    '395': 3843,
    '397': 3844,
    '400': 3845,
    '402': 3846,
    '404': 3847,
    '406': 3848,
    '408': 3849,
    '418': 3850,
    '607': 607,
    '609': 609,
    '611': 611,
    '613': 613,
    '615': 615,
    '618': 618,
    '621': 621,
    '648': 648,
    '649': 649,
    '650': 2683,
    '651': 651,
    '653': 653,
    '654': 654,
    '656': 3536,
    '657': 657,
    '658': 658,
    '660': 660,
    '799': 799,
    '806': 806,
    '807': 807,
    '808': 808,
    '809': 809,
    '1144': 1144,
    '1157': 1157,
    '1160': 1160,
    '1162': 1162,
    '1180': 1180,
    '1182': 1182,
    '1184': 1184,
    '1187': 1187,
    '1189': 1189,
    '1193': 1193,
    '1195': 1195,
    '1197': 1197,
    '1199': 1199,
    '1201': 1201,
    '1203': 1203,
    '1205': 1205,
    '1262': 1262,
    '1265': 1265,
    '1268': 1268,
    '1291': 1291,
    '1296': 1296,
    '1302': 1302,
    '1311': 1311,
    '1324': 1324,
    '1327': 1327,
    '1331': 1331,
    '1334': 1334,
    '1337': 1337,
    '1340': 1340,
    '1344': 1344,
    '1349': 1349,
    '1352': 1352,
    '1355': 1355,
    '1359': 1359,
    '1365': 1365,
    '1371': 1371,
    '1376': 1376,
    '1380': 1380,
    '1388': 1388,
    '1391': 1391,
    '1396': 1396,
    '1399': 1399,
    '1403': 1403,
    '1410': 1410,
    '1416': 1416,
    '1420': 1420,
    '1427': 1427,
    '1436': 1436,
    '1442': 1442,
    '1444': 1444,
    '1450': 1450,
    '1458': 1458,
    '1506': 1506,
    '1509': 1509,
    '1530': 1530,
    '1541': 1541,
    '1547': 1547,
    '1553': 1553,
    '1604': 1604,
    '1625': 1625,
    '1629': 1629,
    '1643': 1643,
    '1645': 1645,
    '1654': 1654,
    '1656': 1656,
    '1661': 1661,
    '1669': 1669,
    '1680': 1680,
    '1686': 1686,
    '1688': 1688,
    '1692': 1692,
    '1696': 1696,
    '1697': 1697,
    '1703': 1703,
    '1706': 1706,
    '1714': 1714,
    '1720': 1720,
    '1730': 1730,
    '1734': 1734,
    '1739': 1739,
    '1743': 1743,
    '1792': 1792,
    '1795': 1795,
    '1797': 1797,
    '1799': 1799,
    '1801': 1801,
    '1809': 1809,
    '1813': 1813,
    '1816': 1816,
    '1819': 1819,
    '1827': 1827,
    '1831': 1831,
    '1839': 1839,
    '1842': 1842,
    '1848': 1848,
    '1853': 1853,
    '1857': 1857,
    '1860': 1860,
    '1864': 1864,
    '1870': 1870,
    '1874': 1874,
    '1883': 1883,
    '1887': 1887,
    '1893': 1893,
    '1895': 1895,
    '1899': 1899,
    '1903': 1903,
    '1907': 1907,
    '1911': 1911,
    '1914': 1914,
    '1917': 1917,
    '1922': 1922,
    '1925': 1925,
    '1928': 1928,
    '1937': 1937,
    '1943': 1943,
    '1948': 1948,
    '1952': 1952,
    '1955': 1955,
    '1958': 1958,
    '1961': 1961,
    '1964': 1964,
    '1967': 1967,
    '1970': 1970,
    '1973': 1973,
    '1978': 1978,
    '1990': 1990,
    '1993': 1993,
    '1996': 1996,
    '2003': 2003,
    '2006': 2006,
    '2009': 2009,
    '2012': 2012,
    '2015': 2015,
    '2018': 2018,
    '2021': 2021,
    '2024': 2024,
    '2028': 2028,
    '2032': 2032,
    '2035': 2035,
    '2038': 2038,
    '2041': 2041,
    '2044': 2044,
    '2047': 2047,
    '2051': 2051,
    '2054': 2054,
    '2057': 2057,
    '2061': 2061,
    '2065': 2065,
    '2070': 2070,
    '2073': 2073,
    '2076': 2076,
    '2079': 2079,
    '2082': 2082,
    '2091': 2091,
    '2094': 2094,
    '2097': 2097,
    '2100': 2100,
    '2104': 2104,
    '2107': 2107,
    '2110': 3001,
    '2116': 2116,
    '2119': 2119,
    '2123': 2123,
    '2126': 2126,
    '2132': 2132,
    '2135': 2135,
    '2138': 2138,
    '2141': 2141,
    '2144': 2144,
    '2147': 2147,
    '2150': 2150,
    '2153': 2153,
    '2161': 2161,
    '2164': 2164,
    '2167': 2167,
    '2170': 2170,
    '2179': 2180,
    '2180': 2179,
    '2183': 2183,
    '2187': 2187,
    '2190': 2190,
    '2193': 2193,
    '2197': 2197,
    '2200': 2200,
    '2203': 2203,
    '2206': 2206,
    '2209': 2209,
    '2212': 2212,
    '2215': 2215,
    '2218': 2218,
    '2221': 2221,
    '2224': 2224,
    '2227': 2227,
    '2230': 2230,
    '2233': 2233,
    '2236': 2236,
    '2239': 2239,
    '2242': 2242,
    '2245': 2245,
    '2248': 2248,
    '2251': 2251,
    '2254': 2254,
    '2257': 2257,
    '2260': 2260,
    '2263': 2263,
    '2266': 2266,
    '2269': 2269,
    '2273': 2273,
    '2276': 2276,
    '2279': 2279,
    '2282': 2282,
    '2285': 2285,
    '2288': 2288,
    '2309': 2309,
    '2310': 2310,
    '2311': 2311,
    '2312': 2312,
    '2316': 2316,
    '2317': 2317,
    '2318': 2318,
    '2319': 2319,
    '2320': 2320,
    '2341': 2341,
    '2342': 2342,
    '2343': 2343,
    '2344': 2344,
    '2345': 2345,
    '2346': 2346,
    '2347': 2347,
    '2348': 2348,
    '2349': 2349,
    '2358': 2358,
    '2361': 2361,
    '2385': 2385,
    '2386': 2386,
    '2387': 2387,
    '2389': 2389,
    '2390': 2390,
    '2391': 2391,
    '2392': 2392,
    '2394': 2394,
    '2395': 2395,
    '2396': 2396,
    '2398': 2398,
    '2401': 2401,
    '2429': 2429,
    '2430': 2430,
    '2431': 2431,
    '2433': 2433,
    '2434': 2434,
    '2435': 2435,
    '2436': 2436,
    '2437': 2437,
    '2438': 2438,
    '2439': 2439,
    '2440': 2440,
    '2441': 2441,
    '2442': 2442,
    '2443': 2443,
    '2446': 2446,
    '2450': 2450,
    '2475': 2475,
    '2476': 2476,
    '2477': 2477,
    '2479': 2479,
    '2480': 2480,
    '2481': 2481,
    '2482': 2482,
    '2483': 2483,
    '2485': 2485,
    '2486': 2486,
    '2488': 2488,
    '2489': 2489,
    '2507': 2507,
    '2508': 2508,
    '2509': 2509,
    '2510': 2510,
    '2511': 2511,
    '2512': 2512,
    '2513': 2513,
    '2515': 2515,
    '2517': 2517,
    '2520': 2520,
    '2555': 2555,
    '2556': 2556,
    '2557': 2557,
    '2558': 2558,
    '2559': 2559,
    '2560': 2560,
    '2561': 2561,
    '2562': 2562,
    '2563': 2563,
    '2564': 2564,
    '2565': 2565,
    '2566': 2566,
    '2567': 2567,
    '2568': 2568,
    '2569': 2569,
    '2570': 2570,
    '2571': 2571,
    '2586': 2586,
    '2587': 2587,
    '2588': 2588,
    '2589': 2589,
    '2590': 2590,
    '2591': 2591,
    '2592': 2592,
    '2595': 2595,
    '2598': 2598,
    '2601': 2601,
    '2605': 2605,
    '2632': 2632,
    '2634': 2634,
    '2635': 2635,
    '2636': 2636,
    '2638': 2638,
    '2639': 2639,
    '2640': 2640,
    '2641': 2641,
    '2642': 2642,
    '2643': 2643,
    '2644': 2644,
    '2645': 2645,
    '2646': 2646,
    '2648': 2648,
    '2669': 2669,
    '2670': 2670,
    '2671': 2671,
    '2672': 2672,
    '2673': 2673,
    '2675': 2675,
    '2676': 2676,
    '2677': 2677,
    '2678': 2678,
    '2680': 2680,
    '2683': 650,
    '2687': 2687,
    '2690': 2690,
    '2693': 2693,
    '2696': 2696,
    '2699': 2699,
    '2702': 2702,
    '2705': 2705,
    '2708': 2708,
    '2711': 2711,
    '2714': 2714,
    '2717': 2717,
    '2720': 2720,
    '2725': 2725,
    '2728': 2728,
    '2731': 2731,
    '2734': 2734,
    '2737': 2737,
    '2740': 2740,
    '2743': 2743,
    '2746': 2746,
    '2749': 2749,
    '2752': 2752,
    '2755': 2755,
    '2758': 2758,
    '2761': 2761,
    '2764': 2764,
    '2767': 2767,
    '2770': 2770,
    '2773': 2773,
    '2776': 2776,
    '2779': 2779,
    '2782': 2782,
    '2785': 2785,
    '2788': 2788,
    '2791': 2791,
    '2794': 2794,
    '2797': 2797,
    '2801': 2801,
    '2804': 2804,
    '2807': 2807,
    '2810': 2810,
    '2813': 2813,
    '2817': 2817,
    '2820': 2820,
    '2823': 2823,
    '2826': 2826,
    '2829': 2829,
    '2833': 2833,
    '2836': 2836,
    '2839': 2839,
    '2842': 2842,
    '2845': 2845,
    '2850': 2850,
    '2853': 2853,
    '2856': 2856,
    '2858': 2858,
    '2862': 2862,
    '2867': 2867,
    '2870': 2870,
    '2873': 2873,
    '2877': 2877,
    '2880': 2880,
    '2883': 2883,
    '2887': 2887,
    '2890': 2890,
    '2893': 2893,
    '2896': 2896,
    '2899': 2899,
    '2902': 2902,
    '2905': 2905,
    '2908': 2908,
    '2911': 2911,
    '2914': 2914,
    '2917': 2917,
    '2920': 2920,
    '2923': 2923,
    '2926': 2926,
    '2929': 2929,
    '2932': 2932,
    '2935': 2935,
    '2938': 2938,
    '2941': 2941,
    '2944': 2944,
    '2947': 2947,
    '2950': 2950,
    '2953': 2953,
    '2956': 2956,
    '2959': 2959,
    '2962': 2962,
    '2965': 2965,
    '2968': 2968,
    '2971': 2971,
    '2974': 2974,
    '2977': 2977,
    '2980': 2980,
    '2983': 2983,
    '2986': 2986,
    '2989': 2989,
    '2992': 2992,
    '2995': 2995,
    '2998': 2998,
    '3001': 2110,
    '3004': 3004,
    '3007': 3007,
    '3014': 3014,
    '3017': 3017,
    '3020': 3020,
    '3023': 3023,
    '3026': 3026,
    '3029': 3029,
    '3032': 3032,
    '3035': 3035,
    '3038': 3038,
    '3041': 3041,
    '3044': 3044,
    '3047': 3047,
    '3050': 3050,
    '3053': 3053,
    '3056': 3056,
    '3060': 3060,
    '3063': 3063,
    '3066': 3066,
    '3069': 3069,
    '3072': 3072,
    '3076': 3076,
    '3081': 3081,
    '3084': 3084,
    '3087': 3087,
    '3090': 3090,
    '3093': 3093,
    '3096': 3096,
    '3099': 3099,
    '3102': 3102,
    '3105': 3105,
    '3108': 3108,
    '3111': 3111,
    '3114': 3114,
    '3117': 3117,
    '3132': 3132,
    '3133': 3133,
    '3134': 3134,
    '3135': 3135,
    '3136': 3136,
    '3137': 3137,
    '3142': 3142,
    '3145': 3145,
    '3146': 3146,
    '3147': 3147,
    '3150': 3150,
    '3153': 3153,
    '3156': 3156,
    '3159': 3159,
    '3162': 3162,
    '3165': 3165,
    '3168': 3168,
    '3171': 3171,
    '3174': 3174,
    '3177': 3177,
    '3204': 3204,
    '3207': 3207,
    '3213': 3213,
    '3218': 3218,
    '3261': 3261,
    '3262': 3262,
    '3263': 3263,
    '3264': 3264,
    '3265': 3265,
    '3266': 3266,
    '3267': 3267,
    '3268': 3268,
    '3269': 3269,
    '3270': 3270,
    '3271': 3271,
    '3272': 3272,
    '3273': 3273,
    '3274': 3274,
    '3275': 3275,
    '3277': 3277,
    '3278': 3278,
    '3279': 3279,
    '3280': 3280,
    '3283': 3283,
    '3286': 3286,
    '3289': 3289,
    '3292': 3292,
    '3295': 3295,
    '3299': 3299,
    '3304': 3304,
    '3307': 3307,
    '3310': 3310,
    '3313': 3313,
    '3316': 3316,
    '3319': 3319,
    '3322': 3322,
    '3325': 3325,
    '3328': 3328,
    '3331': 3331,
    '3334': 3334,
    '3337': 3337,
    '3340': 3340,
    '3343': 3343,
    '3346': 3346,
    '3349': 3349,
    '3352': 3352,
    '3355': 3355,
    '3358': 3358,
    '3361': 3361,
    '3364': 3364,
    '3367': 3367,
    '3370': 3370,
    '3373': 3373,
    '3376': 3376,
    '3379': 3379,
    '3382': 3382,
    '3385': 3385,
    '3388': 3388,
    '3391': 3391,
    '3394': 3394,
    '3397': 3397,
    '3400': 3400,
    '3403': 3403,
    '3406': 3406,
    '3414': 3414,
    '3417': 3417,
    '3420': 3420,
    '3423': 3423,
    '3426': 3426,
    '3429': 3429,
    '3432': 3432,
    '3435': 3435,
    '3438': 3438,
    '3441': 3441,
    '3444': 3444,
    '3447': 3447,
    '3453': 3453,
    '3456': 3456,
    '3459': 3459,
    '3462': 3462,
    '3468': 3468,
    '3471': 3471,
    '3474': 3474,
    '3479': 3479,
    '3482': 3482,
    '3485': 3485,
    '3488': 3488,
    '3491': 3491,
    '3494': 3494,
    '3497': 3497,
    '3500': 3837,
    '3503': 3680,
    '3506': 3506,
    '3509': 3509,
    '3513': 3513,
    '3515': 3515,
    '3518': 3518,
    '3520': 3520,
    '3523': 3523,
    '3528': 3528,
    '3530': 3530,
    '3533': 3533,
    '3536': 656,
    '3543': 3543,
    '3546': 3546,
    '3549': 3549,
    '3552': 3552,
    '3555': 3555,
    '3559': 3559,
    '3563': 3563,
    '3566': 3566,
    '3569': 3569,
    '3572': 3572,
    '3575': 3575,
    '3583': 3583,
    '3589': 3589,
    '3592': 3592,
    '3595': 3595,
    '3598': 3598,
    '3601': 3601,
    '3604': 3604,
    '3607': 3607,
    '3610': 3610,
    '3671': 3671,
    '3686': 3851,
    '3692': 3692,
    '3695': 3695,
    '3698': 3698,
    '3704': 3704,
    '3707': 3707,
    '3710': 3710,
    '3713': 3713,
    '3716': 3716,
    '3719': 3719,
    '3722': 3722,
    '3725': 3725,
    '3728': 3728,
    '3731': 3731,
    '3734': 3734,
    '3737': 3737,
    '3740': 3740,
    '3743': 3743,
    '3746': 3746,
    '3749': 3749,
    '3753': 3753,
    '3756': 3756,
    '3759': 3759,
    '3814': 3814,
    '3817': 3817,
    '3820': 3820,
    '3823': 3852,
    '3826': 3853,
    '3829': 3854,
    '3832': 3855,
    '3869': 3869,
    '3873': 3873,
    '3881': 3881,
    '3884': 3884,
    '3887': 3887,
    '3890': 3890,
    '3893': 3893,
    '3896': 3896,
    '3899': 3899,
    '3902': 3902,
    '3905': 3905,
    '3908': 3908,
    '3911': 3911,
    '3914': 3914,
    '3917': 3917,
    '3920': 3920,
    '3922': 3922,
    '3925': 3925,
    '3928': 3928,
    '3931': 3931,
    '3934': 3934,
    '3937': 3937,
    '3945': 3945,
    '3948': 3948,
    '3951': 3951,
    '3955': 3955,
    '4016': 4016,
    '4124': 4124,
    '4130': 4130,
    '4133': 4133,
    '4136': 4136,
    '4167': 4167,
    '4176': 4176,
    '4193': 4193,
    '4197': 4197,
    '4198': 4198,
    '4199': 4199,
    '4200': 4200,
    '4201': 4201,
    '4203': 4203,
    '4204': 4204,
    '4231': 4231,
    '4233': 4233,
    '4235': 4235,
    '4237': 4237,
    '4239': 4239,
    '4241': 4241,
    '4243': 4243,
    '4246': 4246,
    '4250': 4250,
    '4252': 4252,
    '4266': 4266,
    '4268': 4268,
    '4269': 4269,
    '4270': 4270,
    '4272': 4272,
    '4273': 4273,
    '4274': 4274,
    '4275': 4275,
    '4276': 4276,
    '4277': 4277,
    '4278': 4278,
    '4279': 4279,
    '4280': 4280,
    '4282': 4282,
    '4284': 4284,
    '4286': 4286,
    '4316': 4316,
    '4317': 4317,
    '4318': 4318,
    '4319': 4319,
    '4320': 4320,
    '4321': 4321,
    '4323': 4323,
    '4324': 4421,
    '4325': 4325,
    '4326': 4326,
    '4328': 4328,
    '4330': 4330,
    '4332': 4332,
    '4335': 4335,
    '4337': 4337,
    '4339': 4339,
    '4341': 4341,
    '4343': 4343,
    '4345': 4345,
    '4348': 4348,
    '4351': 4351,
    '4354': 4354,
    '4385': 4385,
    '4386': 4386,
    '4387': 4387,
    '4388': 4388,
    '4389': 4389,
    '4390': 4390,
    '4391': 4391,
    '4392': 4392,
    '4393': 4393,
    '4394': 4394,
    '4395': 4395,
    '4396': 4396,
    '4397': 4397,
    '4421': 4324,
    null: null,
};
export { values };