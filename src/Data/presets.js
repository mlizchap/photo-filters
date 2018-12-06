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
            'hue-rotate': { ...filters.hueRotate, value: 180 },
            saturate: {...filters.saturate, value: 200}
        },
        background: bgDefaults
    },
    "night vision": {
        name: "night vision",
        filters: filters,
        background: {
            ...bgDefaults,
            type: "gradient",
            gradient: {
                ...bgDefaults.gradient,
                inner: {
                    color: '#0F0',
                    amount: 0
                },
                outer: {
                    color: '#000',
                    amount: 80
                },
                blendMode: "multiply"
            },
            
        }
    },
    "1977": {
        name: "1977",
        filters: {
            ...filters,
            sepia: { ...filters.sepia, value: 0.5 },
            hueRotate: {...filters.hueRotate, value: -30 },
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
                blendMode: "darken"
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
    }

}