import { defineRouting } from "next-intl/routing";

import { ROUTE_KEYS } from "@/constants/routes";

export const locales = ["en", "ro"];
export const defaultLocale = "en";

export const pathnames = {
    [ROUTE_KEYS.HOME]: {
        ro: "/",
    },

    [ROUTE_KEYS.SERVICES]: {
        ro: "/servicii",
    },
    [ROUTE_KEYS.SOFTWARE_DEVELOPMENT]: {
        ro: "/servicii/dezvoltare-software",
    },
    [ROUTE_KEYS.IT_CONSULTING]: {
        ro: "/servicii/consultanta-it",
    },
    [ROUTE_KEYS.SEO]: {
        ro: "/servicii/digital-marketing/seo",
    },
    [ROUTE_KEYS.EMAIL_MARKETING]: {
        ro: "/servicii/digital-marketing/email-marketing",
    },
    [ROUTE_KEYS.GRAPHIC_DESIGN]: {
        ro: "/servicii/graphic-design",
    },

    [ROUTE_KEYS.COMPANY]: {
        ro: "/companie",
    },
    [ROUTE_KEYS.ABOUT_US]: {
        ro: "/companie/despre-noi",
    },
    [ROUTE_KEYS.PORTFOLIO]: {
        ro: "/companie/proiecte",
    },

    [ROUTE_KEYS.INSIGHTS]: {
        ro: "/blog",
    },

    [ROUTE_KEYS.CONTACT]: {
        ro: "/contact",
    },
};

export const routing = defineRouting({
    locales: locales,
    defaultLocale: defaultLocale,
    pathnames: pathnames,
});
