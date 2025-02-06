"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

type NewsArticle = {
    title: string;
    link: string;
    pubDate: string;
};

type NewsPageProps = {
    articles: NewsArticle[];
};

export const HeroSection: React.FC<NewsPageProps> = ({ articles }) => {
    const [linesOfCode, setLinesOfCode] = useState(500000);
    const [projects, setProjects] = useState(10);
    const [visitors, setVisitors] = useState(100);
    const [btcPrice, setBtcPrice] = useState(null);

    useEffect(() => {
        const fetchCrypto = async () => {
            // const res = await fetch(
            //     "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
            // );
            // const data = await res.json();
            setBtcPrice(null);
        };

        fetchCrypto();

        const interval = setInterval(() => {}, 10000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="observe-navbar-intersect flex flex-col gap-6 md:gap-10 h-full min-h-0 overflow-hidden flex-1">
            <div className="relative rounded-2xl bg-main-black-o-1 flex-shrink min-h-0 max-h-[500px] overflow-hidden">
                <Image
                    src="/images/hero-section1.webp"
                    className="w-full rounded-xl opacity-75"
                    layout="intrinsic"
                    width={300}
                    height={50}
                    alt="Hero Section Background"
                />
            </div>
            <div className="flex flex-1 flex-col lg:flex-row gap-6 md:gap-10">
                <div className="flex-1 rounded-2xl bg-main-black-o-1 px-6 sm:px-10 md:px-14 pt-6 sm:pt-10 md:pt-14 pb-6 sm:pb-10 md:pb-14">
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl/tight tracking-wider mb-6">
                        Empowering Businesses Through{" "}
                        <span className="text-main-primary">
                            Tech Innovation
                        </span>
                    </h1>
                    <h3 className="text-lg mb-10">
                        From software development to IT consulting, graphic
                        design, and digital marketing – we craft solutions that
                        grow businesses.
                    </h3>
                    <div className="w-full flex flex-row gap-2 items-center bg-main-white-o-02 rounded-lg px-4">
                        <div>
                            <svg
                                className="w-6 h-6 text-main-secondary-lighter"
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
                        <div className="ml-2 flex-1 py-4 outline-none bg-transparent text-lg border-transparent rounded-lg ring-transparent focus:ring-transparent focus:border-transparent">
                            Start Your Project Today
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <svg
                                className="w-6 h-6 text-main-primary"
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
                            <a
                                href="/contact"
                                className="my-3 px-3 py-2 bg-main-secondary rounded-lg text-base font-semibold"
                            >
                                Let's begin!
                            </a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[450px] flex flex-col md:flex-row lg:flex-col gap-6">
                    <div className="md:w-1/2 lg:w-full flex flex-col gap-2  rounded-2xl bg-main-black-o-1 p-4 sm:p-6 lg:p-10 text-xl sm:text-2xl whitespace-nowrap">
                        <div>
                            <span className="font-semibold">👀 Visitors:</span>{" "}
                            {visitors}
                        </div>
                        <div>
                            <span className="font-semibold">
                                🚀 Projects Delivered:
                            </span>{" "}
                            {projects}
                        </div>
                        <div>
                            <span className="font-semibold">
                                💻 Lines of Code:
                            </span>{" "}
                            {linesOfCode.toLocaleString()}
                        </div>
                    </div>
                    <div className="md:w-1/2 lg:w-full relative h-full lg:flex-1 rounded-2xl bg-main-black-o-1 p-4 sm:p-6 lg:p-10">
                        <Swiper
                            touchStartPreventDefault={false}
                            className="h-full"
                            modules={[Navigation, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                        >
                            {articles.map((article, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="relative !h-auto"
                                >
                                    <a
                                        href={article.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative flex flex-col justify-between h-full w-full gap-2 bg-main-white-o-02 p-4 rounded-lg shadow hover:bg-main-black-o-1 transition"
                                    >
                                        <h3 className="text-lg font-semibold line-clamp-3">
                                            {article.title}
                                        </h3>
                                        <p className="text-sm text-main-secondary-lighter">
                                            {new Date(
                                                article.pubDate
                                            ).toLocaleDateString()}
                                        </p>
                                    </a>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};
