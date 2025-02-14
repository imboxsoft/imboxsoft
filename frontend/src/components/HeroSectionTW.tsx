"use client";

import React, { useEffect, useRef } from "react";
import { Typewriter } from "@/utils/TypeWriter";

const HeroSectionTW = () => {
    const twRef = useRef<Typewriter | null>(null);
    const didInit = useRef(false);

    useEffect(() => {
        if (didInit.current) return;

        didInit.current = true;

        twRef.current = new Typewriter(
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
            3000
        );

        twRef.current.start();

        return () => {
            if (twRef.current) {
                twRef.current.stop();
                twRef.current = null;
            }
        };
    }, []);

    return (
        <div className="relative w-full h-40 sm:h-24">
            <span
                id="home-typewriter"
                className="absolute left-0 top-0 sm:top-1/2 w-full sm:-translate-y-1/2 flex flex-row items-center py-4 ml-2"
            >
                <span className="align-middle font-semibold inline-block"></span>
                <span className="tw-caret text-cgreen text-3xl font-bold -ml-[1px] inline-block self-end">
                    |
                </span>
            </span>
        </div>
    );
};

export default HeroSectionTW;
