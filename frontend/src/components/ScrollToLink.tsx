"use client";

import React from "react";
import { Link } from "@/i18n/navigation";

interface ScrollToLinkProps {
    id: string;
    children: React.ReactNode;
}

const ScrollToLink: React.FC<ScrollToLinkProps> = ({ id, children }) => {
    return (
        <Link
            href={`#${id}`}
            className="flex flex-col items-center"
            onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({
                    behavior: "smooth",
                });
            }}
            scroll={false}
        >
            {children}
        </Link>
    );
};

export default ScrollToLink;
