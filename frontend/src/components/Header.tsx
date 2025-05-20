"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import getCssVariableValue from "@/utils/Colors";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

import { ROUTE_KEYS as routes } from "@/constants/routes";
import SlideScrollManager from "@/utils/SlideScroll";

import LocaleSwitcher from "./LocaleSwitcher";

const fullConfig = resolveConfig(tailwindConfig);

export default function Header() {
    const t = useTranslations("common");
    const pathname = usePathname();

    const [navbarBg, setNavbarBg] = useState<string>("transparent");
    const [lastNavbarBgReg, setlastNavbarBgReg] =
        useState<string>("transparent");

    const [isNavigationVisible, setNavigationVisibility] =
        useState<boolean>(false);
    const [currentSubmenuKey, setCurrentSubmenuKey] = useState<
        keyof typeof navMenu | null
    >(null);
    const currentSubmenuKeyRef = useRef<keyof typeof navMenu | null>(null);

    const navbarRef = useRef<HTMLDivElement>(null);

    const navMenu = {
        services: {
            route: null,
            title: t("navbar.services.title"),
            subMenu: [
                {
                    route: routes.SOFTWARE_DEVELOPMENT,
                    title: t("navbar.softwareDevelopment.title"),
                    description: t("navbar.softwareDevelopment.description"),
                },
                {
                    route: routes.IT_CONSULTING,
                    title: t("navbar.itConsulting.title"),
                    description: t("navbar.itConsulting.description"),
                },
                {
                    route: routes.SEO,
                    title: t("navbar.seo.title"),
                    description: t("navbar.seo.description"),
                },
                {
                    route: routes.EMAIL_MARKETING,
                    title: t("navbar.emailMarketing.title"),
                    description: t("navbar.emailMarketing.description"),
                },
                {
                    route: routes.GRAPHIC_DESIGN,
                    title: t("navbar.graphicDesign.title"),
                    description: t("navbar.graphicDesign.description"),
                },
            ],
        },
        company: {
            route: null,
            title: t("navbar.company.title"),
            subMenu: [
                {
                    route: routes.ABOUT_US,
                    title: t("navbar.aboutUs.title"),
                    description: null,
                },
                {
                    route: routes.PORTFOLIO,
                    title: t("navbar.portfolio.title"),
                    description: null,
                },
            ],
        },
        insights: {
            route: routes.INSIGHTS,
            title: t("navbar.blog.title"),
            subMenu: [],
        },
    };

    useEffect(() => {
        currentSubmenuKeyRef.current = currentSubmenuKey;
    }, [currentSubmenuKey]);

    useEffect(() => {
        const navbar = navbarRef.current;

        const scrollSliderManager = SlideScrollManager.getCurrentInstance();
        if (scrollSliderManager && navbar) {
            scrollSliderManager.activateNavbarObserver(
                navbar,
                ".observe-navbar-intersect",
                (value: string) => {
                    const key = currentSubmenuKeyRef.current;

                    if (!key) {
                        setNavbarBg(value);
                    }
                    setlastNavbarBgReg(value);
                }
            );
            scrollSliderManager.evaluateNavbarObserver();
        }

        const handleWindowResize = () => {
            const body = document.body;
            body.classList.remove("no-scroll");

            if (window.innerWidth < 1024) {
                setNavigationVisibility(false);
            } else {
                setNavigationVisibility(true);
            }

            setCurrentSubmenuKey(null);
        };

        handleWindowResize();

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [pathname]);

    const handleNavigationVisibility = (
        event: React.MouseEvent,
        isLink: boolean = false
    ) => {
        event.stopPropagation();

        const body = document.body;

        setNavigationVisibility((prev) => {
            if (isLink) {
                if (window.innerWidth < 1024) {
                    return false;
                } else {
                    return true;
                }
            }

            if (!prev) {
                body.classList.add("no-scroll");
            } else {
                body.classList.remove("no-scroll");
            }

            return !prev;
        });

        handleSubmenuVisibility(event, null);
    };

    const handleSubmenuVisibility = (
        event: React.MouseEvent,
        key: keyof typeof navMenu | null
    ) => {
        event.stopPropagation();

        if (currentSubmenuKey == key) {
            setCurrentSubmenuKey(null);
            if (lastNavbarBgReg) {
                setNavbarBg(lastNavbarBgReg);
            }
            return;
        }

        setNavbarBg(
            getCssVariableValue(fullConfig.theme?.colors?.main.background.dark)
        );

        setCurrentSubmenuKey(key);
    };

    return (
        <header className="w-full">
            <nav
                ref={navbarRef}
                className={`fixed top-0 left-0 z-50 w-full lg:hover:!bg-main-background-dark duration-300`}
                style={{ backgroundColor: navbarBg }}
            >
                <div className="max-w-screen-2xl w-full flex flex-wrap items-center justify-between mx-auto p-6">
                    <Link
                        onClick={(event) => {
                            handleNavigationVisibility(event, true);
                        }}
                        href={routes.HOME}
                    >
                        <Image
                            src="/images/logo/logo_light.svg"
                            alt="Imboxsoft Logo"
                            layout="intrinsic"
                            width={300}
                            height={50}
                            className="w-48"
                        />
                    </Link>
                    <button
                        type="button"
                        onMouseDown={(event) => {
                            handleNavigationVisibility(event, false);
                        }}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    {isNavigationVisible && (
                        <div
                            className="fixed lg:unset h-screen lg:h-auto top-0 left-0 z-50 w-full bg-main-background-dark lg:bg-transparent block lg:w-auto overflow-y-auto lg:overflow-y-visible"
                            id="navbar-default"
                        >
                            <ul className="relative font-medium text-xl flex flex-col gap-4 lg:gap-0 p-4 lg:p-0 mt-4 lg:flex-row lg:space-x-8 lg:mt-0 items-center">
                                <button
                                    onClick={(event) => {
                                        handleNavigationVisibility(
                                            event,
                                            false
                                        );
                                    }}
                                    className="block lg:hidden width-full absolute top-0 right-0 py-2 pl-3 pr-4 lg:hover:text-main-secondary-lighter"
                                >
                                    <svg
                                        className="w-6 h-6 text-gray-800 dark:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        />
                                    </svg>
                                </button>
                                <li className="block lg:hidden">
                                    <Link
                                        onClick={(event) => {
                                            handleNavigationVisibility(
                                                event,
                                                true
                                            );
                                        }}
                                        href={routes.HOME}
                                        className="block py-2 pl-3 pr-4 lg:hover:text-main-secondary-lighter"
                                    >
                                        {t("navbar.home.title")}
                                    </Link>
                                </li>
                                {Object.entries(navMenu).map(
                                    ([key, menuItem], index) => (
                                        <li key={index}>
                                            {menuItem.route ? (
                                                <Link
                                                    onClick={(event) => {
                                                        handleNavigationVisibility(
                                                            event,
                                                            true
                                                        );
                                                    }}
                                                    href={menuItem.route}
                                                    className="block py-2 pl-3 pr-4 lg:hover:text-main-secondary-lighter"
                                                >
                                                    {menuItem.title}
                                                </Link>
                                            ) : (
                                                <button
                                                    onClick={(event) => {
                                                        handleSubmenuVisibility(
                                                            event,
                                                            key as keyof typeof navMenu
                                                        );
                                                    }}
                                                    className="flex items-center justify-between w-full py-2 px-3 rounded-sm lg:w-auto hover:text-main-secondary-lighter md:p-0"
                                                >
                                                    {menuItem.title}{" "}
                                                    <svg
                                                        className="w-2.5 h-2.5 ms-2.5"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 10 6"
                                                    >
                                                        <path
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="m1 1 4 4 4-4"
                                                        />
                                                    </svg>
                                                </button>
                                            )}
                                        </li>
                                    )
                                )}
                                <li className="mt-4 lg:mt-0">
                                    <Link
                                        onClick={(event) => {
                                            handleNavigationVisibility(
                                                event,
                                                true
                                            );
                                        }}
                                        href={routes.CONTACT}
                                        className="text-white bg-main-secondary hover:bg-main-secondary-darker focus:ring-4 focus:outline-none focus:ring-transparent font-[520] rounded-lg text-xl px-4 py-3 text-center"
                                    >
                                        {t("navbar.contact.title")}
                                    </Link>
                                </li>
                            </ul>
                            {currentSubmenuKey && (
                                <div className="w-full fixed lg:absolute z-[55] top-0 lg:top-full left-0  h-screen lg:h-auto overflow-y-auto lg:overflow-y-visible lg:shadow-xs lg:border-y bg-main-background-dark border-gray-600">
                                    <div className="w-full lg:max-w-screen-2xl px-4 py-4 mt-4 mx-auto md:px-6">
                                        <ul className="relative grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            <button
                                                onClick={(event) => {
                                                    handleSubmenuVisibility(
                                                        event,
                                                        null
                                                    );
                                                }}
                                                className="block lg:hidden width-full absolute top-0 right-0 py-2 pl-3 pr-4 lg:hover:text-main-secondary-lighter"
                                            >
                                                <svg
                                                    className="w-6 h-6 text-gray-800 dark:text-white"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M5 12h14M5 12l4-4m-4 4 4 4"
                                                    />
                                                </svg>
                                            </button>
                                            {navMenu[
                                                currentSubmenuKey
                                            ]?.subMenu.map((item, index) => (
                                                <li key={index}>
                                                    <Link
                                                        onClick={(event) => {
                                                            handleNavigationVisibility(
                                                                event,
                                                                true
                                                            );
                                                        }}
                                                        href={item.route}
                                                        className="block p-3 rounded-lg hover:bg-main-secondary"
                                                    >
                                                        <div className="font-semibold">
                                                            {item.title}
                                                        </div>
                                                        <span className="text-sm text-main-secondary-lighter">
                                                            {item.description}
                                                        </span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className="absolute left-0 top-100">
                    <LocaleSwitcher />
                </div>
            </nav>
        </header>
    );
}
