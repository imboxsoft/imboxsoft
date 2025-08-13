"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

type DisplayOnViewportProps = {
    children: ReactNode;
    rootMargin?: string;
};

export default function DisplayOnViewport({
    children,
    rootMargin = "-80% 0px 0px 0px",
}: DisplayOnViewportProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                root: null,
                threshold: 0,
                rootMargin: rootMargin,
            }
        );

        observer.observe(el);

        return () => {
            observer.unobserve(el);
            observer.disconnect();
        };
    }, [rootMargin]);

    return (
        <div
            ref={ref}
            className={`transition-opacity duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
            {children}
        </div>
    );
}
