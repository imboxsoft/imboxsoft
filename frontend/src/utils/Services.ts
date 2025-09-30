import { ROUTE_KEYS as routes } from "@/constants/routes";
import { DISABLED_PAGES } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

type Translator = ReturnType<typeof useTranslations>;

function getTranslatedServices(t: Translator) {
    return [
        {
            route: routes.SOFTWARE_DEVELOPMENT,
            title: t("softwareDevelopment.title"),
            description: t("softwareDevelopment.description"),
            image: "/images/services/software_development/software_development_thumbnail.jpg",
            alternativeText: "Software Development Services Thumbnail",
        },
        {
            route: routes.IT_CONSULTING,
            title: t("itConsulting.title"),
            description: t("itConsulting.description"),
            image: "/images/services/it_consulting/it_consulting_thumbnail.jpg",
            alternativeText: "IT Consulting Services Thumbnail",
        },
        {
            route: routes.PRESENTATION_WEBSITES,
            title: t("presentationWebsites.title"),
            description: t("presentationWebsites.description"),
            image: "/images/services/presentation_websites/presentation_websites_thumnail.jpg",
            alternativeText: "Presentation Websites Services Thumbnail",
        },
        {
            route: routes.ECOMMERCE,
            title: t("ecommerce.title"),
            description: t("ecommerce.description"),
            image: "/images/services/it-consulting.jpg",
            alternativeText: "Ecommerce Services Thumbnail",
        },
        {
            route: routes.SEO,
            title: t("seo.title"),
            description: t("seo.description"),
            image: "/images/services/seo.webp",
            alternativeText: "SEO Services Thumbnail",
        },
        {
            route: routes.GRAPHIC_DESIGN,
            title: t("graphicDesign.title"),
            description: t("graphicDesign.description"),
            image: "/images/services/graphic-design.jpg",
            alternativeText: "Graphic Design Services Thumbnail",
        },
        {
            route: routes.EMAIL_MARKETING,
            title: t("emailMarketing.title"),
            description: t("emailMarketing.description"),
            image: "/images/services/email-marketing.png",
            alternativeText: "Email Marketing Services Thumbnail",
        },
    ].filter(service => {
        return !DISABLED_PAGES.includes(service.route);
    });
}

export function useServices() {
    const t = useTranslations("common.navigation");
    return getTranslatedServices(t);
}

export async function getServices() {
    const t = await getTranslations("common.navigation");
    return getTranslatedServices(t);
}
