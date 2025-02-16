"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
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

export const PageStats: React.FC<NewsPageProps> = ({ articles }) => {
    const [linesOfCode] = useState(500000);
    const [projects] = useState(10);
    const [visitors] = useState(100);

    useEffect(() => {
        const interval = setInterval(() => {}, 10000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="w-full flex flex-col lg:flex-row gap-6">
            <div className="flex flex-col flex-1 gap-2 rounded-2xl bg-main-opacity-black-75 p-4 sm:p-6 lg:p-10 text-xl sm:text-2xl whitespace-nowrap">
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
                    <span className="font-semibold">💻 Lines of Code:</span>{" "}
                    {linesOfCode.toLocaleString()}
                </div>
            </div>
            <div className="max-w-[650px] relative h-full lg:flex-1 rounded-2xl bg-main-opacity-black-75 p-4 sm:p-6 lg:p-10">
                <Swiper
                    touchStartPreventDefault={false}
                    className="h-full"
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                >
                    {articles.map((article, index) => (
                        <SwiperSlide key={index} className="relative !h-auto">
                            <a
                                href={article.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative flex flex-col justify-between h-full w-full gap-2 bg-main-opacity-white-20 p-4 rounded-lg shadow hover:bg-main-opacity-black-75 transition"
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
    );
};
