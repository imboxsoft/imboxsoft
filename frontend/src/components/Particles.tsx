"use client";

import { useRef, useEffect } from "react";
import { Particles } from "@/scripts/Particles";

export default function Header() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const particles = new Particles(canvasRef.current);

        particles.start();

        return () => {
            particles.cancel();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed w-full h-full -z-10 block top-0 left-0"
        ></canvas>
    );
}
