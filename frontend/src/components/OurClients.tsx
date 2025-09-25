"use client";

import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { ImageType } from "@/types/strapi";
import Image from "next/image";
import { AutomatedCarousel } from "@/components/AutomatedCarousel";
import { generateWPAPIURL } from "@/utils/URLGenerators";

interface ClientType {
    name: string;
    logo: ImageType;
}

type OurClientsProps = {
    cmsAPIBaseURL: string;
};

export const OurClients = ({ cmsAPIBaseURL }: OurClientsProps) => {
    const [clients, setClients] = useState<ClientType[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(cmsAPIBaseURL); //{cache: "force-cache",}

                if (!res.ok) throw new Error("Response failed");

                const resData = await res.json();

                setClients(
                    resData.map((el: any) => {
                        const content = el.acf;
                        return {
                            name: content.name,
                            logo: {
                                src: content.logo.url,
                                alternativeText:
                                    content.logo.alt || content.logo.title,
                            },
                        };
                    })
                );
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    return (
        <div className="w-full">
            <AutomatedCarousel
                breakpoints={{
                    0: {
                        spaceBetween: 100,
                        slidesPerView: 1,
                    },
                    640: {
                        spaceBetween: 150,
                        slidesPerView: 1,
                    },
                    768: {
                        spaceBetween: 100,
                        slidesPerView: 3,
                    },
                    1280: {
                        spaceBetween: 150,
                        slidesPerView: 3,
                    },
                }}
                elements={clients.map((el, index) => (
                    <div
                        className="relative w-full h-[100px] md:mb-2"
                        key={index}
                    >
                        <Image
                            src={el.logo.src}
                            className="object-fit"
                            fill
                            alt={el.name}
                        />
                    </div>
                ))}
            />
        </div>
    );
};
