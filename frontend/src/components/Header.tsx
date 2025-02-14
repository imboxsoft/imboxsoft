"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import routes from "@/constants/routes";
import SlideScrollManager from "@/utils/SlideScroll";

export default function Header() {
    const [isNavigationVisible, setNavigationVisibility] =
        useState<boolean>(false);
    const [navbarBg, setNavbarBg] = useState<string>("transparent");
    const [currentDropdownMenuKey, setCurrentDropdownKey] = useState<
        keyof typeof navMenu | null
    >(null);
    const navbarRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const navMenu = {
        portfolio: {
            route: routes.PORTFOLIO,
            name: "Our work",
            subMenu: [],
        },
        services: {
            route: null,
            name: "Services",
            subMenu: [
                {
                    route: routes.SOFTWARE_DEVELOPMENT,
                    title: "Software Development",
                    description:
                        "Presentation websites, e-commerce, web apps & desktop apps.",
                },
                {
                    route: routes.IT_CONSULTING,
                    title: "IT Consulting",
                    description:
                        "Recevie most optimal suggestions for you projects.",
                },
                {
                    route: routes.SEO,
                    title: "SEO",
                    description:
                        "Make your website discoverable and rank up well in Search Consoles.",
                },
                {
                    route: routes.EMAIL_MARKETING,
                    title: "Email marketing",
                    description:
                        "Compose well organized email campaigns for your clients.",
                },
                {
                    route: routes.GRAPHIC_DESIGN,
                    title: "Graphic Design",
                    description:
                        "Website design, logos, posters, flyers, business cards and more.",
                },
            ],
        },
        company: {
            route: null,
            name: "Company",
            subMenu: [
                {
                    route: routes.ABOUT_US,
                    title: "About us",
                    description: null,
                },
            ],
        },
        insights: {
            route: routes.INSIGHTS,
            name: "Insights",
            subMenu: [],
        },
    };

    useEffect(() => {
        const navbar = navbarRef.current;

        const scrollSliderManager = SlideScrollManager.getCurrentInstance();
        if (scrollSliderManager && navbar) {
            scrollSliderManager.activateNavbarObserver(
                navbar,
                ".observe-navbar-intersect",
                (value: string) => setNavbarBg(value)
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

            setCurrentDropdownKey(null);
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

        handleDropdownVisibility(event, null);
    };

    const handleDropdownVisibility = (
        event: React.MouseEvent,
        key: keyof typeof navMenu | null
    ) => {
        event.stopPropagation();

        if (currentDropdownMenuKey == key) {
            setCurrentDropdownKey(null);
            return;
        }

        setCurrentDropdownKey(key);
    };

    return (
        <header className="w-full">
            <nav
                ref={navbarRef}
                className={`fixed top-0 left-0 z-50 w-full hover:bg-main-opacity-black-75 duration-300`}
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
                            src="/images/logo_light.svg"
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
                            className="fixed lg:unset h-screen lg:h-auto top-0 left-0 z-50 w-full bg-gray-950 lg:bg-transparent block lg:w-auto overflow-y-auto lg:overflow-y-visible"
                            id="navbar-default"
                        >
                            <ul className="relative font-medium text-2xl flex flex-col gap-4 lg:gap-0 p-4 lg:p-0 mt-4 lg:flex-row lg:space-x-8 lg:mt-0 items-center">
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
                                        Home
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
                                                    {menuItem.name}
                                                </Link>
                                            ) : (
                                                <button
                                                    onClick={(event) => {
                                                        handleDropdownVisibility(
                                                            event,
                                                            key as keyof typeof navMenu
                                                        );
                                                    }}
                                                    className="flex items-center justify-between w-full py-2 px-3 rounded-sm lg:w-auto hover:text-main-secondary-lighter md:p-0"
                                                >
                                                    {menuItem.name}{" "}
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
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                            {currentDropdownMenuKey && (
                                <div className="w-full fixed lg:absolute z-[55] top-0 lg:top-full left-0  h-screen lg:h-auto overflow-y-auto lg:overflow-y-visible shadow-xs border-y bg-main-background-dark border-gray-600">
                                    <div className="w-full lg:max-w-screen-xl px-4 py-5 mx-auto md:px-6">
                                        <ul className="relative grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            <button
                                                onClick={(event) => {
                                                    handleDropdownVisibility(
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
                                                currentDropdownMenuKey
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
                                                        className="block p-3 rounded-lg hover:bg-gray-700"
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
            </nav>
        </header>
    );
}
