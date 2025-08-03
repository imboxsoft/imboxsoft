import React from "react";
import Image from "next/image";

import { getRichTranslations } from "@/i18n/utils";

// import { fetchNews, NewsArticle } from "@/utils/rss";
import HeroSectionTW from "./HeroSectionTW";
import { Link } from "@/i18n/navigation";

import { getServices } from "@/utils/Services";

export const HeroSection = async () => {
    const t = await getRichTranslations("home.heroSection");
    // const ARTICLES: NewsArticle[] = await fetchNews();
    const services = await getServices();

    return (
        <div className="observe-navbar-intersect flex flex-col justify-center sm:gap-6 md:gap-10 h-full min-h-0 overflow-hidden flex-1">
            <div className="flex flex-col gap-6 md:gap-10">
                <div className="relative flex flex-col gap-14 sm:gap-10 flex-1 sm:rounded-2xl sm:pt-14 lg:pt-20 sm:pb-10 md:pb-14">
                    <div className="text-center sm:text-left w-full sm:w-2/3">
                        <h1 className="font-bold text-4xl md:text-5xl/tight tracking-wider mb-10 sm:mb-4">
                            {t.rich("title")}
                        </h1>
                        <p className="text-xl">{t.rich("subtitle")}</p>
                    </div>
                    <div className="hidden sm:block absolute top-0 right-[5%] w-52 translate-y-1/2">
                        <Image
                            className="w-full h-auto"
                            src="/images/home/test-hs-pers.webp"
                            width={2000}
                            height={2000}
                            alt="Imboxsoft Hero Section"
                        />
                    </div>
                    <div className="w-full flex flex-col sm:flex-row gap-2 items-center sm:bg-main-opacity-white-20 rounded-lg px-4">
                        <div className="flex flex-col sm:flex-row gap-2 items-center justify-center sm:justify-start flex-1 w-full">
                            <svg
                                className="w-10 sm:w-6 h-10 sm:h-6 text-main-secondary-lighter"
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
                            <div className="w-full flex-1 outline-none bg-transparent text-lg sm:text-xl border-transparent rounded-lg ring-transparent focus:ring-transparent focus:border-transparent font-medium text-center sm:text-left">
                                <HeroSectionTW />
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <svg
                                className="w-6 h-6 text-main-primary hidden sm:block"
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
                            <Link
                                href="/contact"
                                className="my-3 px-5 sm:px-3 py-3 sm:py-2 bg-main-secondary rounded-lg text-lg sm:text-base font-bold sm:font-semibold"
                            >
                                {t.text("letsBegin")}
                            </Link>
                        </div>
                    </div>

                    <ul className="flex flex-row flex-wrap gap-10">
                        {services.map((service, index) => (
                            <li key={index} className="">
                                <Link
                                    href={service.route}
                                    className="hover:text-main-secondary"
                                >
                                    {service.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* <div>
                    <PageStats articles={ARTICLES} />
                </div> */}
            </div>
            <div className="fixed top-0 left-0 w-full h-full flex-1 bg-main-opacity-black-75 min-h-0 overflow-hidden -z-10">
                <Image
                    src="/images/home/hero_section_computer_girl.jpg"
                    className="!relative w-full h-full opacity-50 object-cover"
                    fill
                    alt="Empowering Businesses Through Tech Innovation - Software Development"
                />
            </div>
        </div>
    );
};
