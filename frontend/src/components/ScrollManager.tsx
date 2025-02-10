"use client";

import { useEffect } from "react";
import SlideScrollManager from "@/utils/SlideScroll";

export const ScrollManager = () => {
    useEffect(() => {
        const scrollSliderManager = SlideScrollManager.getInstance(
            "scroll-section",
            "current-scroll"
        );

        scrollSliderManager.assess();

        return () => {
            scrollSliderManager.destroy();
        };
    }, []);

    return null;
};
