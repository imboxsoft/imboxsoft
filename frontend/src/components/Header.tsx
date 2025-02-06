"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import initIntersectionObserver from "@/utils/IntersectionObserver";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import getCssVariableValue from "@/utils/Colors";
import routes from "@/constants/routes";

const fullConfig = resolveConfig(tailwindConfig);

export default function Header() {
    const [isNavigationVisible, setNavigationVisibility] =
        useState<boolean>(false);
    const [isHomeDropdownVisible, setServicesDropdownVisibility] =
        useState<boolean>(false);
    const [isCompanyDropdownVisible, setCompanyDropdownVisibility] =
        useState<boolean>(false);
    const navbarRef = useRef<HTMLDivElement>(null);
    const [navbarBg, setNavbarBg] = useState<string>("transparent");
    //const activeSections = useRef(new Set<string>());
    const activeSections = useRef<string[]>([]);
    const hasRunOnce = useRef<boolean>(false);

    const pathname = usePathname();

    useEffect(() => {
        const navbar = navbarRef.current;

        if (!navbar) return;

        const topElementObserver = initIntersectionObserver(
            (entry) => {
                if (!hasRunOnce.current) {
                    hasRunOnce.current = true;
                    return;
                }

                activeSections.current.pop();
                const lastActiveSection =
                    activeSections.current[activeSections.current.length - 1];
                setNavbarBg(lastActiveSection || "transparent");
            },
            (entry) => {},
            { root: null, threshold: 0 }
        );

        const topElement = document.querySelector("#top-section");
        if (topElement) topElementObserver.observe(topElement);

        const offsetObserverYBound = window.innerHeight - navbar.offsetHeight;

        const navbarIntersectionObserver = initIntersectionObserver(
            (entry) => {
                let sectionBg = window.getComputedStyle(
                    entry.target
                ).backgroundColor;

                if (
                    sectionBg === "transparent" ||
                    sectionBg === "rgba(0, 0, 0, 0)"
                ) {
                    sectionBg = getCssVariableValue(
                        fullConfig.theme?.colors?.main["black-o-1"]
                    );
                }

                if (entry.isIntersecting) {
                    activeSections.current.push(sectionBg);
                } else {
                    const index = activeSections.current.lastIndexOf(sectionBg);
                    if (index !== -1 && activeSections.current.length > 1) {
                        activeSections.current.splice(index, 1);
                    }
                }

                const lastActiveSection =
                    activeSections.current[activeSections.current.length - 1];

                setNavbarBg(lastActiveSection || "transparent");
            },
            null,
            {
                root: null,
                rootMargin: `0px 0px -${offsetObserverYBound}px 0px`,
                threshold: 0,
            }
        );

        const targets = document.querySelectorAll(".observe-navbar-intersect");
        targets.forEach((target) => navbarIntersectionObserver.observe(target));

        const handleWindowResize = () => {
            const body = document.body;
            body.classList.remove("no-scroll");

            if (window.innerWidth < 1024) {
                setNavigationVisibility(false);
                setServicesDropdownVisibility(false);
            } else {
                setNavigationVisibility(true);
                setServicesDropdownVisibility(false);
            }
        };

        handleWindowResize();

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);

            hasRunOnce.current = false;
            activeSections.current = [];

            topElementObserver.disconnect();
            navbarIntersectionObserver.disconnect();
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

        setServicesDropdownVisibility(false);
        setCompanyDropdownVisibility(false);
    };

    const handleClickOnHomeDropdown = (event: React.MouseEvent) => {
        setServicesDropdownVisibility((prev) => {
            return !prev;
        });
        setCompanyDropdownVisibility(false);
    };

    const handleClickOnCompanyDropdown = (event: React.MouseEvent) => {
        setServicesDropdownVisibility(false);
        setCompanyDropdownVisibility((prev) => {
            return !prev;
        });
    };

    return (
        <header className="w-full">
            <section id="top-section" className="top-0 left-0"></section>
            <nav
                ref={navbarRef}
                className={`fixed top-0 left-0 z-50 w-full hover:bg-main-black-o-1 duration-300`}
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
                                <li className="block lg:hidden width-full absolute top-0 right-0">
                                    <button
                                        onClick={(event) => {
                                            handleNavigationVisibility(
                                                event,
                                                false
                                            );
                                        }}
                                        className="block py-2 pl-3 pr-4 lg:hover:text-main-secondary-lighter"
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
                                </li>
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
                                <li>
                                    <Link
                                        onClick={(event) => {
                                            handleNavigationVisibility(
                                                event,
                                                true
                                            );
                                        }}
                                        href={routes.PORTFOLIO}
                                        className="block py-2 pl-3 pr-4 lg:hover:text-main-secondary-lighter"
                                    >
                                        Our work
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={handleClickOnHomeDropdown}
                                        className="flex items-center justify-between w-full py-2 px-3 rounded-sm lg:w-auto hover:text-main-secondary-lighter md:p-0"
                                    >
                                        Services{" "}
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
                                </li>
                                <li>
                                    <button
                                        onClick={handleClickOnCompanyDropdown}
                                        className="flex items-center justify-between w-full py-2 px-3 rounded-sm lg:w-auto hover:text-main-secondary-lighter md:p-0"
                                    >
                                        Company{" "}
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
                                </li>
                                <li>
                                    <Link
                                        onClick={(event) => {
                                            handleNavigationVisibility(
                                                event,
                                                true
                                            );
                                        }}
                                        href={routes.INSIGHTS}
                                        className="block py-2 pl-3 pr-4 lg:hover:text-main-secondary-lighter"
                                    >
                                        Insights
                                    </Link>
                                </li>
                                <li className="mt-4 lg:mt-0">
                                    <Link
                                        onClick={(event) => {
                                            handleNavigationVisibility(
                                                event,
                                                true
                                            );
                                        }}
                                        href={routes.CONTACT}
                                        className="text-white bg-main-secondary hover:bg-main-secondary-darker focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded-lg text-xl px-4 py-3 text-center"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                            {(isHomeDropdownVisible ||
                                isCompanyDropdownVisible) && (
                                <div className="w-full lg:absolute top-full left-0 mt-6 lg:mt-0 shadow-xs border-y bg-gray-800 border-gray-600">
                                    <div className="max-w-screen-xl px-4 py-5 mx-auto md:px-6">
                                        <ul className="flex flex-row flex-wrap gap-10">
                                            {isHomeDropdownVisible ? (
                                                <>
                                                    <li>
                                                        <Link
                                                            onClick={(
                                                                event
                                                            ) => {
                                                                handleNavigationVisibility(
                                                                    event,
                                                                    true
                                                                );
                                                            }}
                                                            href={
                                                                routes.SOFTWARE_DEVELOPMENT
                                                            }
                                                            className="block p-3 rounded-lg hover:bg-gray-700"
                                                        >
                                                            <div className="font-semibold">
                                                                Software
                                                                Development
                                                            </div>
                                                            <span className="text-sm text-main-secondary-lighter">
                                                                Connect with
                                                                third-party
                                                                tools that
                                                                you&apos;re
                                                                already using.
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            onClick={(
                                                                event
                                                            ) => {
                                                                handleNavigationVisibility(
                                                                    event,
                                                                    true
                                                                );
                                                            }}
                                                            href={
                                                                routes.IT_CONSULTING
                                                            }
                                                            className="block p-3 rounded-lg hover:bg-gray-700"
                                                        >
                                                            <div className="font-semibold">
                                                                IT Consulting
                                                            </div>
                                                            <span className="text-sm text-main-secondary-lighter">
                                                                Connect with
                                                                third-party
                                                                tools that
                                                                you&apos;re
                                                                already using.
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            onClick={(
                                                                event
                                                            ) => {
                                                                handleNavigationVisibility(
                                                                    event,
                                                                    true
                                                                );
                                                            }}
                                                            href={routes.SEO}
                                                            className="block p-3 rounded-lg dark:hover:bg-gray-700"
                                                        >
                                                            <div className="font-semibold">
                                                                SEO
                                                            </div>
                                                            <span className="text-sm text-gray-400">
                                                                Connect with
                                                                third-party
                                                                tools that
                                                                you&apos;re
                                                                already using.
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            onClick={(
                                                                event
                                                            ) => {
                                                                handleNavigationVisibility(
                                                                    event,
                                                                    true
                                                                );
                                                            }}
                                                            href={
                                                                routes.EMAIL_MARKETING
                                                            }
                                                            className="block p-3 rounded-lg hover:bg-gray-700"
                                                        >
                                                            <div className="font-semibold">
                                                                Email marketing
                                                            </div>
                                                            <span className="text-sm text-gray-400">
                                                                Connect with
                                                                third-party
                                                                tools that
                                                                you&apos;re
                                                                already using.
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            onClick={(
                                                                event
                                                            ) => {
                                                                handleNavigationVisibility(
                                                                    event,
                                                                    true
                                                                );
                                                            }}
                                                            href={
                                                                routes.GRAPHIC_DESIGN
                                                            }
                                                            className="block p-3 rounded-lg hover:bg-gray-700"
                                                        >
                                                            <div className="font-semibold">
                                                                Graphic Design
                                                            </div>
                                                            <span className="text-sm text-gray-400">
                                                                Connect with
                                                                third-party
                                                                tools that
                                                                you&apos;re
                                                                already using.
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    {/* <li>
                                                        <Link
                                                            onClick={(
                                                                event
                                                            ) => {
                                                                handleNavigationVisibility(
                                                                    event,
                                                                    true
                                                                );
                                                            }}
                                                            href={routes.}
                                                            className="block p-3 rounded-lg hover:bg-gray-700"
                                                        >
                                                            <div className="font-semibold">
                                                                Educational
                                                            </div>
                                                            <span className="text-sm text-gray-400">
                                                                Connect with
                                                                third-party
                                                                tools that
                                                                you&apos;re
                                                                already using.
                                                            </span>
                                                        </Link>
                                                    </li> */}
                                                </>
                                            ) : isCompanyDropdownVisible ? (
                                                <>
                                                    <li>
                                                        <Link
                                                            onClick={(
                                                                event
                                                            ) => {
                                                                handleNavigationVisibility(
                                                                    event,
                                                                    true
                                                                );
                                                            }}
                                                            href={
                                                                routes.ABOUT_US
                                                            }
                                                            className="block p-3 rounded-lg hover:bg-gray-700"
                                                        >
                                                            <div className="font-semibold">
                                                                About Us
                                                            </div>
                                                        </Link>
                                                    </li>
                                                </>
                                            ) : (
                                                <></>
                                            )}
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
