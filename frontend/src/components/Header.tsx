"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [isHomeDropdownVisible, setServicesDropdownVisibility] =
        useState<boolean>(false);
    const homeDropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOnHomeDropdown = (event: React.MouseEvent) => {
        if (
            homeDropdownRef.current &&
            homeDropdownRef.current.contains(event.target as Node)
        ) {
            return;
        }
        setServicesDropdownVisibility((prev) => !prev);
    };

    return (
        <header className="scroll-section current-scroll w-full">
            <nav className="fixed top-0 left-0 z-50 w-full hover:bg-main-black-o-1 duration-300">
                <div className="max-w-screen-2xl w-full flex flex-wrap items-center justify-between mx-auto p-4 py-10">
                    <Link href="/">
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
                    <div
                        className="hidden w-full lg:block lg:w-auto"
                        id="navbar-default"
                    >
                        <ul className="font-medium text-2xl flex flex-col p-4 lg:p-0 mt-4 border rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 items-center">
                            <li>
                                <button
                                    onClick={handleClickOnHomeDropdown}
                                    className="flex items-center justify-between w-full py-2 px-3 rounded-sm lg:w-auto hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-main-secondary-lighter md:p-0"
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
                                <Link
                                    href="/about"
                                    className="block py-2 pl-3 pr-4 lg:hover:text-main-secondary-lighter"
                                >
                                    Our work
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#expertise"
                                    className="block py-2 pl-3 pr-4 lg:hover:text-main-secondary-lighter"
                                >
                                    Company
                                </a>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="block py-2 pl-3 pr-4 lg:hover:text-main-secondary-lighter"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-white bg-main-secondary hover:bg-main-secondary-darker focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded-lg text-xl px-4 py-3 text-center"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {isHomeDropdownVisible && (
                    <div
                        ref={homeDropdownRef}
                        className="mt-1 shadow-xs border-y bg-gray-800 border-gray-600"
                    >
                        <div className="grid max-w-screen-xl px-4 py-5 mx-auto sm:grid-cols-2 md:px-6">
                            <ul>
                                <li>
                                    <Link
                                        href="/services/software-development"
                                        className="block p-3 rounded-lg hover:bg-gray-700"
                                    >
                                        <div className="font-semibold">
                                            IT Consulting and Software
                                            Development
                                        </div>
                                        <span className="text-sm text-main-secondary-lighter">
                                            Connect with third-party tools that
                                            you&apos;re already using.
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/email-marketing"
                                        className="block p-3 rounded-lg dark:hover:bg-gray-700"
                                    >
                                        <div className="font-semibold">SEO</div>
                                        <span className="text-sm text-gray-400">
                                            Connect with third-party tools that
                                            you&apos;re already using.
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/graphic-design"
                                        className="block p-3 rounded-lg hover:bg-gray-700"
                                    >
                                        <div className="font-semibold">
                                            Graphic Design
                                        </div>
                                        <span className="text-sm text-gray-400">
                                            Connect with third-party tools that
                                            you&apos;re already using.
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/email-marketing"
                                        className="block p-3 rounded-lg hover:bg-gray-700"
                                    >
                                        <div className="font-semibold">
                                            Email marketing
                                        </div>
                                        <span className="text-sm text-gray-400">
                                            Connect with third-party tools that
                                            you&apos;re already using.
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/email-marketing"
                                        className="block p-3 rounded-lg hover:bg-gray-700"
                                    >
                                        <div className="font-semibold">
                                            Educational
                                        </div>
                                        <span className="text-sm text-gray-400">
                                            Connect with third-party tools that
                                            you&apos;re already using.
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
