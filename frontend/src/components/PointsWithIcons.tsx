"use client";

import React, { ReactElement, useState } from "react";

import { Link } from "@/i18n/navigation";

type PointType = {
    svgIcon: ReactElement;
    title: string;
    descriptions: string[];
};

type PointsWithIconsProps = {
    title: string;
    subtitle: string;
    description: string;
    points: PointType[];
};

const PointsWithIcons = ({
    title,
    subtitle,
    description,
    points,
}: PointsWithIconsProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            <div className="flex-1 flex flex-col gap-4 items-start">
                <span className="rounded-3xl p-4 bg-main-secondary text-base font-semibold">
                    {title}
                </span>
                <h2 className="text-4xl font-semibold">{subtitle}</h2>
                <p>{description}</p>
            </div>
            {points.map((item, index) => (
                <div
                    className="flex-1 flex flex-col gap-4 self-center lg:self-start"
                    key={index}
                >
                    <div className="flex flex-row lg:flex-col gap-2">
                        <span>{item.svgIcon}</span>
                        <h3 className="text-2xl font-semibold">{item.title}</h3>
                    </div>
                    <div className="flex flex-col gap-3">
                        {item.descriptions.map((description, index) => (
                            <p key={index}>{description}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PointsWithIcons;
