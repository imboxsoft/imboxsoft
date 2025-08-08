"use client";

import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

type AutomatedCarouselProps = {
    elements?: any[];
};

export default function AutomatedCarousel({
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
                spaceBetween={30}
                speed={3000}
                allowTouchMove={false}
                navigation={false}
                pagination={false as any}
                breakpoints={{
                    0: { slidesPerView: 6 },
                    640: { slidesPerView: 10 },
                }}
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
