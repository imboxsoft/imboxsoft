"use client";

import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

type AutomatedCarouselProps = {
    breakpoints: any;
    elements?: any[];
};

export default function AutomatedCarousel({
    breakpoints,
    elements = [],
}: AutomatedCarouselProps) {
    return (
        <div className="w-full pointer-events-none">
            <Swiper
                className="h-full"
                modules={[Autoplay]}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                loop
                speed={3000}
                allowTouchMove={false}
                navigation={false}
                pagination={false as any}
                breakpoints={breakpoints}
            >
                {elements.map((el, index) => (
                    <SwiperSlide key={index} className="flex h-full">
                        {el}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
