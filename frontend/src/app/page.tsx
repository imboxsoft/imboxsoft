"use client";

import { useEffect } from "react";
import { SlideScrolling } from "@/scripts/SlideScroll";

export default function Home() {
    const technologies: string[] = [
        "Next.js",
        "Angular",
        "Alpinejs",
        "Tailwind",
        "Django",
        "Nodejs",
        "Laravel",
        ".NET",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "Kubernetes",
        "AWS",
        "Google Cloud",
        "Shopify",
        "Bigcommerce",
        "Stripe",
        "Paypal",
        "Photoshop",
        "Illustrator",
        "Figma",
    ];

    useEffect(() => {
        SlideScrolling.init(
            "scroll-hidden",
            "scroll-show",
            "scroll-section",
            "current-scroll"
        );
        SlideScrolling.assess();

        const handleWinowResize = () => {
            SlideScrolling.assess();
        };

        window.addEventListener("resize", handleWinowResize);

        return () => {
            window.removeEventListener("resize", handleWinowResize);
        };
    }, []);

    return (
        <div className="gap-16 font-[family-name:var(--font-geist-sans)] text-lg md:text-2xl">
            <section className="pt-44 pb-10 max-w-screen-xl mx-auto lg:min-h-screen px-4 lg:px-10 flex-1 flex flex-col gap-6 md:gap-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-3 lg:grid-rows-2 gap-6 md:gap-10">
                    <div className="row-span-2 lg:row-span-2 col-span-2 lg:col-span-3 rounded-2xl bg-main-black-o-1 px-10 md:px-14 pt-10 sm:pt-14 pb-10 sm:pb-14">
                        <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl/tight tracking-wider mb-8">
                            Empowering businesses through{" "}
                            <span className="text-main-primary">
                                tech innovation
                            </span>
                        </h1>
                        <div className="mt-20 w-full flex flex-row gap-2 items-center">
                            <div>
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
                                        d="m8 9 3 3-3 3m5 0h3M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                                    />
                                </svg>
                            </div>
                            <input
                                className="flex-1 bg-main-black-o-1 p-2.5 outline-none text-sm border-transparent rounded-lg ring-transparent focus:ring-transparent focus:border-transparent"
                                type="text"
                            />
                            <div>
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
                                        d="M19 12H5m14 0-4 4m4-4-4-4"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-main-black-o-1 p-10 row-span-1 lg:row-span-1"></div>
                    <div className="rounded-2xl bg-main-black-o-1 p-10 row-span-1 lg:row-span-1"></div>
                </div>

                <div className="flex-1 rounded-2xl bg-main-black-o-1 p-10">
                    a
                </div>
            </section>

            <section className="scroll-section lg:min-h-screen py-16 sm:py-24 lg:py-0 flex items-center bg-gray-900">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-10 md:px-16">
                    <div className="scroll-hidden text-center md:text-right mb-10 md:mb-16">
                        <h1 className="mb-4 text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                            Welcome to
                            <span className="text-main-primary">
                                {" "}
                                Imboxsoft
                            </span>
                        </h1>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-none tracking-tight">
                            <span className="leading-normal underline underline-offset-3 decoration-4 md:decoration-8 decoration-main-secondary">
                                Your trusted partner in cutting-edge technology
                            </span>
                        </h2>
                    </div>

                    <div className="scroll-hidden text-justify">
                        <p className="mb-1">
                            Our company specializes in delivering tailored
                            software development solutions and comprehensive IT
                            consulting services. We are dedicated to empowering
                            our clients with the tools they need to succeed in
                            today&apos;s dynamic digital landscape.
                        </p>
                        <p className="mb-1"></p>

                        <p className="mb-1">
                            Partner with us today and we will harness together
                            the power of technology and propel your business
                            forward.
                        </p>
                    </div>
                </div>
            </section>

            <section className="scroll-section lg:min-h-screen py-16 sm:py-24 lg:py-0 flex items-center bg-gray-800">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-10 md:px-16">
                    <div className="scroll-hidden inline-flex items-center justify-center w-full mb-8 md:mb-16">
                        <hr className="w-56 xs:w-64 md:w-72 h-[2px] my-8 bg-main-primary border-0" />
                        <h3 className="text-2xl md:text-3xl font-bold absolute px-4 py-2 -translate-x-1/2 left-1/2 bg-main-medium text-center">
                            Expertise
                        </h3>
                    </div>

                    <p className="scroll-hidden mb-6 text-justify">
                        Imboxsoft specializes in a diverse array of technologies
                        and systems, ensuring that we stay at the forefront of
                        innovation to meet the evolving needs of our clients.
                    </p>

                    <p className="scroll-hidden mb-4 text-justify">
                        Our core competencies include:
                    </p>

                    <div className="scroll-hidden">
                        <ul className="flex flex-row flex-wrap gap-x-4 gap-y-3">
                            {technologies.map((el, index) => (
                                <li key={index}>
                                    <span className="block bg-gray-600 text-xs font-medium px-4 py-2 rounded-md">
                                        {el}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
