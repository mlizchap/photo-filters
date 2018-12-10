import { filters } from './filters';

const bgDefaults = {
    type: "none",
    solid: {
        color: "#4978F7",
        opacity: .5,
        blendMode: "normal"
    },
    gradient: {
        inner: { color: "#ECECEC", amount: 20 },
        outer: { color: "#0D0D0D", amount: 80 },
        opacity: .5,
        blendMode: "normal"
    }                
}

export const presetInfo = {
    none: {
        name: "none",
        filters: filters,
        background: bgDefaults
    },
    infared: {
        name: "infared",
        filters: {
            ...filters,
            'hue-rotate': { ...filters['hue-rotate'], value: 180 },
            saturate: {...filters.saturate, value: 200}
        },
        background: bgDefaults
    },
    1977: {
        name: "1977",
        filters: {
            ...filters,
            sepia: { ...filters.sepia, value: 0.5 },
            'hue-rotate': {...filters['hue-rotate'], value: -30 },
            saturate: { ...filters.saturate, value: 140 }
        },
        background: bgDefaults
    },
    walden: {
        name: "walden",
        filters: {
            ...filters,
            sepia: { ...filters.sepia, value: .35 },
            contrast: { ...filters.contrast, value: .8 },
            brightness: {...filters.brightness, value: 125 },
            saturate: { ...filters.saturate, value: 140 }
        },
        background: {
            ...bgDefaults,
            type: "solid",
            solid: {
                ...bgDefaults.solid,
                color: "rgba(229, 240, 128)",
                blendMode: "darken",
                opacity: 0
            }
        }
    },
    willow: {
        name: "willow",
        filters: {
            ...filters,
            brightness: {...filters.brightness, value: 150 },
            contrast: {...filters.contrast, value: .85 },
            saturate: {...filters.saturate, value: 5 },
            sepia: {...filters.sepia, value: .2 }
        },
        background: bgDefaults
    },
    aden: {
        name: "aden",
        filters: filters,
        background: {
            ...bgDefaults,
            type: "solid",
            solid: {
                ...bgDefaults.solid,
                color: 'rgba(125,105,24);',
                opacity: .1,
                blendMode: 'multiply',
            }
        }
    },
    armaro: {
        name: "armaro",
        filters: {
            ...filters,
            sepia: {...filters.sepia, value: .35 },
            contrast: {...filters.contrast, value: 1.1 },
            brightness: {...filters.brightness, value: 120 },
            saturate: {...filters.saturate, value: 130 },
        },
        background: {
            ...bgDefaults,
            type: "solid",
            solid: {
                ...bgDefaults.solid,
                color: `#7d691833`,
                opacity: .2,
                blendMode: 'overlay',
            }
        }
    },
    ashby: {
        name: "ashby",
        filters: {
            ...filters,
            sepia: {...filters.sepia, value: .5},
            contrast: {...filters.contrast, value: 1.2},
            saturate: {...filters.saturate, value: 180},
        },
        background: {
            ...bgDefaults,

            type: "solid",
            solid: {
                ...bgDefaults.solid,
                color: `#7d691859`,
                opacity: .35,
                blendMode: 'lighten',
            },
        }
    },
    // brooklyn: {
    //     name: 'brooklyn',
    //     filters: {
    //         ...filters,
    //         sepia: {...filters.sepia, value: .25},
    //         contrast: {...filters.contrast, value: 1.25},
    //         brightness: {...filters.brightness, value: 125},
    //         'hue-rotate': {...filters['hue-rotate'], value: 5},
    //     },
    //     background:  { 
    //         ...bgDefaults
    //     }
    // },
    charmes: {
        name: "charmes",
        filters: {
            ...filters,
            sepia: {...filters.sepia, value: .25},
            contrast: {...filters.contrast, value: 1.25},
            brightness: {...filters.brightness, value: 125},
            saturate: {...filters.saturate, value: 135},
            'hue-rotate': {...filters['hue-rotate'], value: 5},
        },
        background: {
            ...bgDefaults,

            type: "solid",
            solid: {
                ...bgDefaults.solid,
                color: '#7d691840',
                opacity: .25,
                blendMode: 'darken'
            }
        }
    }
}

// brooklyn: {
//     name: 'brooklyn',
//     filters: {

//     },
//     background: {
        
//     }
// }