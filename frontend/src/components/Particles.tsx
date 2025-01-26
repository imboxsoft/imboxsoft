"use client";

import { useRef, useEffect } from "react";
import { Particles } from "@/scripts/Particles";
import { SlideScrolling } from "@/scripts/SlideScroll";

export default function Header() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const particles = new Particles(canvasRef.current, 30, 500);

        particles.enableUserInteraction();
        particles.start();

        SlideScrolling.init(
            "scroll-hidden",
            "scroll-show",
            "scroll-section",
            "current-scroll"
        );

        return () => {
            particles.cancel();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed w-full h-full opacity-50 -z-10 block top-0 left-0"
        ></canvas>
    );
}
