"use client";

import React, { useEffect } from "react";
import { Typewriter } from "@/utils/TypeWriter";

const HeroSectionTW = () => {
    useEffect(() => {
        new Typewriter(
            "home-typewriter",
            [
                "Specialized in Full Stack Software Development. We give life to your vision.",
                "Do you want to sell your products online, but you have no idea how to deploy an ecommerce platform? Hand over this responsibility to us.",
                "Can't keep up with the new coming trends in IT and you find it hard to make the right decisions? We can help.",
                "Are you looking to launch a presentation website? Give us 7 days and you will have it.",
                "Few visitors? Your website may benefit from professional SEO optimizations.",
                "You require help designing a logo? Give us a message.",
                "Let's create your first business card. Shall we?",
                "You can't decide how to plan, develop or deploy your app? We may have some suggestions.",
                "Monday to Sunday. We are at your disposal.",
                "Start Your Project Today.",
            ],
            25,
            15,
            5000,
            true
        ).start();
    }, []);

    return (
        <span
            id="home-typewriter"
            className="flex flex-row items-center py-4 ml-2"
        >
            <span className="align-middle font-semibold inline-block"></span>
            <span className="tw-caret text-cgreen text-3xl font-bold -ml-[1px] inline-block self-end">
                |
            </span>
        </span>
    );
};

export default HeroSectionTW;
