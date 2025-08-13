export const localeMeta = {
    ro: {
        label: "Română",
        flag: "🇷🇴",
    },
    en: {
        label: "English",
        flag: "🇬🇧",
    },
} as const;

export type Locale = keyof typeof localeMeta;
