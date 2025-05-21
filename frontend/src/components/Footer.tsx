import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

import Image from "next/image";
import { ROUTE_KEYS as routes } from "@/constants/routes";

export default async function Footer() {
    const t = await getTranslations("common");

    const today = new Date().getFullYear().toString();

    const navigation = [
        {
            route: routes.PORTFOLIO,
            title: t("navigation.portfolio.title"),
        },
        {
            route: routes.SERVICES,
            title: t("navigation.aboutUs.title"),
        },
        {
            route: routes.ABOUT_US,
            title: t("navigation.aboutUs.title"),
        },
        {
            route: routes.INSIGHTS,
            title: t("navigation.blog.title"),
        },
        {
            route: routes.CONTACT,
            title: t("navigation.contact.title"),
        },
    ];

    return (
        <footer className="scroll-section w-full pt-10 md:pt-20 md:pb-10 bg-main-opacity-black-75">
            <div className="custom-container">
                <div>
                    <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-32">
                        <div>
                            <Link
                                href="/"
                                className="flex items-center mb-4 sm:mb-0"
                            >
                                <Image
                                    src="/images/logo/logo_light.svg"
                                    className="h-8 mr-3"
                                    layout="intrinsic"
                                    width={300}
                                    height={50}
                                    alt="Imboxsoft Logo"
                                />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-20 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-base font-semibold text-white uppercase border-b-2 border-main-primary">
                                    {t("footer.sitemap")}
                                </h2>
                                <ul className="flex flex-col gap-4 font-medium">
                                    {navigation.map((el, index) => (
                                        <li key={index}>
                                            <Link
                                                href={el.route}
                                                className="hover:underline text-slate-50 hover:text-main-primary"
                                            >
                                                {el.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-base font-semibold text-white uppercase border-b-2 border-main-primary">
                                    {t("footer.socials")}
                                </h2>
                                <ul className="flex flex-col gap-4 font-medium">
                                    <li>
                                        <Link
                                            href="https://www.linkedin.com/company/imboxsoft"
                                            className="hover:underline text-slate-50 hover:text-main-primary"
                                            target="_blank"
                                        >
                                            Linkedin
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-base font-semibold text-white uppercase border-b-2 border-main-primary">
                                    {t("footer.legal")}
                                </h2>
                                <ul className="flex flex-col gap-4 font-medium">
                                    <li>
                                        <Link
                                            href={routes.ABOUT_US}
                                            className="hover:underline text-slate-50 hover:text-main-primary"
                                        >
                                            {t("footer.termsAndConditions")}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={routes.ABOUT_US}
                                            className="hover:underline text-slate-50 hover:text-main-primary"
                                        >
                                            {t("footer.privacyPolicy")}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={routes.ABOUT_US}
                                            className="hover:underline text-slate-50 hover:text-main-primary"
                                        >
                                            {t("footer.cookies")}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="custom-container pb-6">
                <div>
                    <span className="block text-base sm:text-center">
                        <span>© Copyright {today} </span>
                        <Link
                            href="/"
                            className="hover:hover:underline text-main-secondary"
                        >
                            Imboxsoft™
                        </Link>
                        . {t("footer.allRightsReserved")}
                    </span>
                </div>
            </div>
        </footer>
    );
}
