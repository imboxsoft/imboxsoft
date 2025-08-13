export const ROUTE_KEYS = {
    HOME: "/",

    SERVICES: "/services",
    SOFTWARE_DEVELOPMENT: "/services/software-development",
    PRESENTATION_WEBSITES: "/services/presentation-websites",
    ECOMMERCE: "/services/ecommerce",
    IT_CONSULTING: "/services/it-consulting",
    SEO: "/services/digital-marketing/seo",
    EMAIL_MARKETING: "/services/digital-marketing/email-marketing",
    GRAPHIC_DESIGN: "/services/graphic-design",

    ABOUT_US: "/company/about-us",
    PORTFOLIO: "/company/our-work",

    INSIGHTS: "/blog",
    INSIGHT_POST: (slug: string) => `/blog/${slug}`,

    CONTACT: "/contact",
} as const;

export type RouteKey = keyof typeof ROUTE_KEYS;
