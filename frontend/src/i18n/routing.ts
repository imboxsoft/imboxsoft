import { defineRouting } from "next-intl/routing";

import { ROUTE_KEYS } from "@/constants/routes";

export const locales = ["en", "ro"];
export const defaultLocale = "ro";

export const pathnames = {
    [ROUTE_KEYS.HOME]: {
        ro: "/",
        en: "/",
    },

    [ROUTE_KEYS.SERVICES]: {
        ro: "/servicii",
        en: "/services",
    },
    [ROUTE_KEYS.SOFTWARE_DEVELOPMENT]: {
        ro: "/servicii/dezvoltare-software",
        en: "/services/software-development",
    },
    [ROUTE_KEYS.IT_CONSULTING]: {
        ro: "/servicii/consultanta-it",
        en: "/services/it-consulting",
    },
    [ROUTE_KEYS.PRESENTATION_WEBSITES]: {
        ro: "/servicii/site-de-prezentare",
        en: "/services/presentation-websites",
    },
    [ROUTE_KEYS.ECOMMERCE]: {
        ro: "/servicii/magazin-online",
        en: "/services/ecommerce",
    },
    [ROUTE_KEYS.SEO]: {
        ro: "/servicii/digital-marketing/seo",
        en: "/services/digital-marketing/seo",
    },
    [ROUTE_KEYS.EMAIL_MARKETING]: {
        ro: "/servicii/digital-marketing/email-marketing",
        en: "/services/digital-marketing/email-marketing",
    },
    [ROUTE_KEYS.GRAPHIC_DESIGN]: {
        ro: "/servicii/graphic-design",
        en: "/services/graphic-design",
    },

    [ROUTE_KEYS.ABOUT_US]: {
        ro: "/companie/despre-noi",
        en: "/company/about-us",
    },
    [ROUTE_KEYS.PORTFOLIO]: {
        ro: "/companie/proiecte",
        en: "/companyour-work",
    },

    [ROUTE_KEYS.INSIGHTS]: {
        ro: "/blog",
        en: "/blog",
    },

    [ROUTE_KEYS.CONTACT]: {
        ro: "/contact",
        en: "/contact",
    },

    [ROUTE_KEYS.UNAVAILABLE]: {
        ro: "/indisponibil",
        en: "/unavailable",
    },
};

function getDisabledLocalizedPaths(): string[] {
    const disabledKeys = [
        "ECOMMERCE",
        "SEO",
        "EMAIL_MARKETING",
        "INSIGHTS",
    ] as const;

    const paths: string[] = [];

    disabledKeys.forEach((key) => {
        const path = pathnames[ROUTE_KEYS[key]];
        if (path) {
            if (typeof path === "string") {
                paths.push(path);
            } else {
                paths.push(...Object.values(path));
            }
        }
    });

    return paths;
}

export const DISABLED_PAGES: string[] = getDisabledLocalizedPaths();

export const routing = defineRouting({
    locales: locales,
    defaultLocale: defaultLocale,
    pathnames: pathnames,
    domains: [
        { domain: 'imboxsoft.com', defaultLocale: 'en', locales: ['en'] },
        { domain: 'imboxsoft.ro', defaultLocale: 'ro', locales: ['ro'] }
    ]
});
