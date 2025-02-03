"use client";

import { useEffect } from "react";
import SlideScrollManager from "@/utils/SlideScroll";

export const ScrollManager = () => {
    useEffect(() => {
        const scrollManager = SlideScrollManager.getInstance(
            "scroll-section",
            "current-scroll"
        );

        console.log("regergre");

        const handleWindowResize = () => {
            scrollManager.assess();
        };

        handleWindowResize();

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
            scrollManager.pause();
        };
    }, []);

    return null;
};
