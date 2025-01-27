"use client";

import { useRef, useEffect } from "react";
import { Particles as ParticlesFunc } from "@/scripts/Particles";

export default function Particles() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        let count = 500;

        if (window.innerWidth < 640) {
            count = 100;
        } else if (window.innerWidth < 1024) {
            count = 250;
        }

        const particles = new ParticlesFunc(canvasRef.current, 30, count);

        particles.enableUserInteraction();
        particles.start();

        const handleWinowResize = () => {
            if (window.innerWidth < 640) {
                particles.setParticles(100);
            } else if (window.innerWidth < 1024) {
                particles.setParticles(250);
            } else {
                particles.setParticles(500);
            }
            particles.resetParticles();
        };

        window.addEventListener("resize", handleWinowResize);

        return () => {
            particles.cancel();
            window.removeEventListener("resize", handleWinowResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed w-full h-full opacity-75 -z-10 block top-0 left-0"
        ></canvas>
    );
}
