"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { Link } from "@/i18n/navigation";

import { services } from "@/utils/Services";

import "swiper/css";
import "swiper/css/navigation";

type ServicesCardsSwiperProps = {
    fixedSlidesPerView?: number | null;
    customBreakpoints?: Record<number, { slidesPerView: number }> | null;
};

export default function ServicesCardsSwiper({
    fixedSlidesPerView = null,
    customBreakpoints = null,
}: ServicesCardsSwiperProps) {
    return (
        <div className="w-full">
            <Swiper
                className="h-full"
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={fixedSlidesPerView ? fixedSlidesPerView : 1}
                navigation
                breakpoints={
                    customBreakpoints
                        ? customBreakpoints
                        : {
                              0: {
                                  slidesPerView: fixedSlidesPerView
                                      ? fixedSlidesPerView
                                      : 1,
                              },
                              768: {
                                  slidesPerView: fixedSlidesPerView
                                      ? fixedSlidesPerView
                                      : 2,
                              },
                              1024: {
                                  slidesPerView: fixedSlidesPerView
                                      ? fixedSlidesPerView
                                      : 3,
                              },
                          }
                }
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
                                    alt={service.alternativeText}
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
