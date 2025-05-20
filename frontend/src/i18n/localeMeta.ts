export const localeMeta = {
    en: {
        label: "English",
        flag: "🇬🇧",
    },
    ro: {
        label: "Română",
        flag: "🇷🇴",
    },
} as const;

export type Locale = keyof typeof localeMeta;
