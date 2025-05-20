"use client";

import React, { useEffect, useRef } from "react";

import { useRichTranslation } from "@/i18n/utils";

import { Typewriter } from "@/utils/TypeWriter";

const HeroSectionTW = () => {
    const t = useRichTranslation("home.heroSection");
    const twRef = useRef<Typewriter | null>(null);
    const didInit = useRef(false);

    useEffect(() => {
        if (didInit.current) return;

        didInit.current = true;

        twRef.current = new Typewriter(
            "home-typewriter",
            t.raw("typewriters"),
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
    }, [t]);

    return (
        <div className="relative w-full h-40 sm:h-24">
            <span
                id="home-typewriter"
                className="absolute left-0 top-0 sm:top-1/2 w-full sm:-translate-y-1/2 flex flex-row items-center sm:py-4 sm:ml-2"
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
