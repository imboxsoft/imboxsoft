import { ROUTE_KEYS as routes } from "@/constants/routes";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

type Translator = ReturnType<typeof useTranslations>;

function getTranslatedServices(t: Translator) {
    return [
        {
            route: routes.SOFTWARE_DEVELOPMENT,
            title: t("softwareDevelopment.title"),
            description: t("softwareDevelopment.description"),
            image: "/images/services/software-development.jpg",
            alternativeText: "Hero Section Background",
        },
        {
            route: routes.IT_CONSULTING,
            title: t("itConsulting.title"),
            description: t("itConsulting.description"),
            image: "/images/services/it-consulting.jpg",
            alternativeText: "Hero Section Background",
        },
        {
            route: routes.PRESENTATION_WEBSITES,
            title: t("presentationWebsites.title"),
            description: t("presentationWebsites.description"),
            image: "/images/services/it-consulting.jpg",
            alternativeText: "Hero Section Background",
        },
        {
            route: routes.ECOMMERCE,
            title: t("ecommerce.title"),
            description: t("ecommerce.description"),
            image: "/images/services/it-consulting.jpg",
            alternativeText: "Hero Section Background",
        },
        {
            route: routes.SEO,
            title: t("seo.title"),
            description: t("seo.description"),
            image: "/images/services/seo.webp",
            alternativeText: "Hero Section Background",
        },
        {
            route: routes.GRAPHIC_DESIGN,
            title: t("graphicDesign.title"),
            description: t("graphicDesign.description"),
            image: "/images/services/graphic-design.jpg",
            alternativeText: "Hero Section Background",
        },
        {
            route: routes.EMAIL_MARKETING,
            title: t("emailMarketing.title"),
            description: t("emailMarketing.description"),
            image: "/images/services/email-marketing.png",
            alternativeText: "Hero Section Background",
        },
    ];
}

export function useServices() {
    const t = useTranslations("common.navigation");
    return getTranslatedServices(t);
}

export async function getServices() {
    const t = await getTranslations("common.navigation");
    return getTranslatedServices(t);
}
