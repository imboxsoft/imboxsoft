import { defineRouting } from "next-intl/routing";

import { ROUTE_KEYS } from "@/constants/routes";

export const locales = ["en", "ro"];
export const defaultLocale = "en";

export const pathnames = {
    [ROUTE_KEYS.HOME]: {
        en: "/",
        ro: "/",
    },

    [ROUTE_KEYS.SERVICES]: {
        en: "/services",
        ro: "/servicii",
    },
    [ROUTE_KEYS.SOFTWARE_DEVELOPMENT]: {
        en: "/services/software-development",
        ro: "/servicii/dezvoltare-software",
    },
    [ROUTE_KEYS.IT_CONSULTING]: {
        en: "/services/it-consulting",
        ro: "/servicii/consultanta-it",
    },
    [ROUTE_KEYS.PRESENTATION_WEBSITES]: {
        en: "/services/presentation-websites",
        ro: "/servicii/site-de-prezentare",
    },
    [ROUTE_KEYS.ECOMMERCE]: {
        en: "/services/ecommerce",
        ro: "/servicii/magazin-online",
    },
    [ROUTE_KEYS.SEO]: {
        en: "/services/digital-marketing/seo",
        ro: "/servicii/digital-marketing/seo",
    },
    [ROUTE_KEYS.EMAIL_MARKETING]: {
        en: "/services/digital-marketing/email-marketing",
        ro: "/servicii/digital-marketing/email-marketing",
    },
    [ROUTE_KEYS.GRAPHIC_DESIGN]: {
        en: "/services/graphic-design",
        ro: "/servicii/graphic-design",
    },

    [ROUTE_KEYS.COMPANY]: {
        en: "/company",
        ro: "/companie",
    },
    [ROUTE_KEYS.ABOUT_US]: {
        en: "/company/about-us",
        ro: "/companie/despre-noi",
    },
    [ROUTE_KEYS.PORTFOLIO]: {
        en: "/companyour-work",
        ro: "/companie/proiecte",
    },

    [ROUTE_KEYS.INSIGHTS]: {
        en: "/blog",
        ro: "/blog",
    },

    [ROUTE_KEYS.CONTACT]: {
        en: "/contact",
        ro: "/contact",
    },
};

export const routing = defineRouting({
    locales: locales,
    defaultLocale: defaultLocale,
    pathnames: pathnames,
});
