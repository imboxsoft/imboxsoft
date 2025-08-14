"use client";

import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

type AutomatedCarouselProps = {
    breakpoints: any;
    elements?: any[];
    speed?: number;
    delay?: number;
};

export function AutomatedCarousel({
    breakpoints,
    elements = [],
    speed = 0,
    delay = 0,
}: AutomatedCarouselProps) {
    return (
        <div className="w-full pointer-events-none">
            <Swiper
                className="h-full"
                modules={[Autoplay]}
                autoplay={{
                    delay: delay,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                loop
                speed={speed}
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
