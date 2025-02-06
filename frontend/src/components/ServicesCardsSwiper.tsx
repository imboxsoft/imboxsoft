"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import routes from "@/constants/routes";

export default function ServicesCardsSwiper() {
    const services = [
        {
            title: "Software Development",
            image: "/images/blog_news.webp",
            description: "Web, mobile, and desktop applications.",
            route: routes.SOFTWARE_DEVELOPMENT,
        },
        {
            title: "IT Consulting",
            image: "/images/blog_news.webp",
            description: "Cloud, security, and infrastructure strategy.",
            route: routes.IT_CONSULTING,
        },
        {
            title: "SEO",
            image: "/images/blog_news.webp",
            description: "Lead generation and brand growth.",
            route: routes.SEO,
        },
        {
            title: "Email Marketing",
            image: "/images/blog_news.webp",
            description: "Lead generation and brand growth.",
            route: routes.EMAIL_MARKETING,
        },
        {
            title: "Graphic Design",
            image: "/images/blog_news.webp",
            description: "Logos, branding, UI/UX.",
            route: routes.GRAPHIC_DESIGN,
        },
    ];

    return (
        <div>
            <Swiper
                className="h-full"
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                touchStartPreventDefault={false}
            >
                {services.map((service, index) => (
                    <SwiperSlide key={index} className="flex h-full">
                        <div className="w-full max-w-96 md:max-w-full mx-auto border border-gray-600 rounded-xl overflow-hidden flex flex-col h-full">
                            <div className="relative w-full h-48 mb-2">
                                <Image
                                    src={service.image}
                                    className="w-full object-cover"
                                    fill
                                    alt="Hero Section Background"
                                />
                            </div>
                            <div className="flex-1 flex flex-col gap-6 items-center md:items-start p-6 flex-grow">
                                <h3 className="text-3xl font-semibold text-center md:text-left">
                                    {service.title}
                                </h3>
                                <div className="text-center md:text-left">
                                    {service.description}
                                </div>
                                <Link
                                    href={service.route}
                                    className="bg-main-secondary px-6 py-4 rounded-xl"
                                >
                                    Check out
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
