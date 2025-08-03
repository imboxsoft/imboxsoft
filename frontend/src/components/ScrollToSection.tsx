"use client";

import React from "react";
import Link from "next/link";

interface ScrollToLinkProps {
    id: string;
    children: React.ReactNode;
    offset: number;
}

const ScrollToSection: React.FC<ScrollToLinkProps> = ({
    id,
    children,
    offset,
}) => {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: y, behavior: "smooth" });
            window.scrollTo({ top: y - offset, behavior: "smooth" });
        }
    };

    return (
        <Link
            href={`#${id}`}
            className="flex flex-col items-center"
            onClick={handleClick}
            scroll={false}
        >
            {children}
        </Link>
    );
};

export default ScrollToSection;
