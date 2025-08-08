"use client";

import { useEffect, useRef } from "react";

export default function ScrollableWrapper({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const onWheel = (e: WheelEvent) => {
            e.stopPropagation();
        };

        const onTouchStart = (e: TouchEvent) => {
            e.stopPropagation();
        };

        const onTouchMove = (e: TouchEvent) => {
            e.stopPropagation();
        };

        el.addEventListener("wheel", onWheel, { passive: false });
        el.addEventListener("touchstart", onTouchStart, { passive: false });
        el.addEventListener("touchmove", onTouchMove, { passive: false });

        return () => {
            el.removeEventListener("wheel", onWheel);
            el.removeEventListener("touchstart", onTouchStart);
            el.removeEventListener("touchmove", onTouchMove);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`overflow-y-auto ${className} pe-2`}
            tabIndex={0}
        >
            {children}
        </div>
    );
}
