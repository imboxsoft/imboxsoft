import { ROUTE_KEYS as routes } from "@/constants/routes";
import Image from "next/image";

import { getRichTranslations } from "@/i18n/utils";

import { Link } from "@/i18n/navigation";
import { ImageType } from "@/types/strapi";
import {
    generateStrapiBaseURL,
    generateStrapiAPIURL,
    generateWPAPIURL,
} from "@/utils/URLGenerators";
import { technologies } from "@/utils/Technologies";

interface ProjectType {
    title: string;
    shortDescription: string;
    clientLogo: ImageType;
    coverImage: ImageType;
}

export default async function OurWork() {
    const t = await getRichTranslations("company.ourWork");

    const industries = [
        {
            src: "/images/swi.png",
            name: t.text("it"),
            alt: "",
        },
        {
            src: "/images/swi.png",
            name: t.text("dm"),
            alt: "",
        },
        {
            src: "/images/swi.png",
            name: t.text("cd"),
            alt: "",
        },
        {
            src: "/images/swi.png",
            name: t.text("bc"),
            alt: "",
        },
    ];

    let projects: ProjectType[] = [];

    try {
        const res = await fetch(
            generateWPAPIURL("/our-works?_fields=acf&acf_format=standard"),
            {
                cache: "force-cache",
            }
        );

        if (!res.ok) throw new Error("Response failed");

        const resData = await res.json();

        projects = resData.map((el: any) => {
            const content = el.acf;
            return {
                title: content.title,
                shortDescription: content.shortDescription,
                clientLogo: {
                    src: content.clientLogo.url,
                    alternativeText: content.clientLogo.alt || content.title,
                },
                coverImage: {
                    src: content.coverImage.url,
                    alternativeText: content.coverImage.alt || content.title,
                },
            };
        });
    } catch (e) {
        console.log(e);
    }

    return (
        <div>
            <div className="observe-navbar-intersect pt-32 w-full bg-main-opacity-black-50">
                <div className="relative max-w-screen-2xl mx-auto px-4 xs:px-10 py-20">
                    <div className="max-w-[750px] mx-auto relative w-full text-center">
                        <h1 className="text-main-primary text-2xl mb-8">
                            {t.text("mainTitle")}
                        </h1>
                        <h2 className="text-5xl font-bold mb-6">
                            {t.text("subTitle")}
                        </h2>
                        <p className="text-2xl">{t.rich("description")}</p>
                    </div>
                </div>
            </div>

            <div className="observe-navbar-intersect w-full bg-main-background-lighter">
                <div className="max-w-screen-2xl mx-auto px-4 xs:px-10 pt-16 pb-20">
                    <h2 className="w-full text-center text-3xl font-semibold mb-10">
                        {t.text("ourPortfolio")}
                    </h2>

                    {t.raw("ourPortfolioP").map((p: string, i: number) => (
                        <p key={i} className="mb-4">
                            {t.rich(`ourPortfolioP.${i}`)}
                        </p>
                    ))}

                    <div className="flex flex-col gap-28 md:[&>*:nth-child(even)]:flex-row-reverse pt-20">
                        {projects.map((project, index) => (
                            <div
                                className="flex flex-col md:flex-row gap-16 lg:gap-24"
                                key={index}
                            >
                                <div className="flex flex-col flex-1 items-center md:items-start text-center md:text-left">
                                    <div className="relative w-64 max-w-full h-20 mb-6">
                                        <Image
                                            src={project.clientLogo.src}
                                            fill
                                            className="object-contain"
                                            alt={
                                                project.clientLogo
                                                    .alternativeText
                                            }
                                        />
                                    </div>
                                    <h3 className="text-3xl font-semibold mb-6">
                                        {project.title}
                                    </h3>
                                    <p>{project.shortDescription}</p>
                                </div>
                                <div className="relative w-full md:w-1/3 lg:flex-1 h-56 lg:h-96 md:mt-16 rounded-xl overflow-hidden">
                                    <Image
                                        src={project.coverImage.src}
                                        fill
                                        className="object-cover"
                                        alt={project.coverImage.alternativeText}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="observe-navbar-intersect w-full bg-main-background">
                <div className="max-w-screen-2xl mx-auto px-4 xs:px-10 pt-24 pb-20">
                    <div>
                        <h2 className="w-full text-center text-3xl font-semibold mb-10">
                            {t.text("featuredIndustries")}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24 text-center">
                            {industries.map((industry, index) => (
                                <div
                                    className="relative bg-main-secondary p-6 flex flex-col items-center mt-16"
                                    key={index}
                                >
                                    <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
                                        <Image
                                            src={industry.src}
                                            className="!relative"
                                            width={100}
                                            height={100}
                                            alt={industry.alt}
                                        />
                                    </div>
                                    <div className="mt-16 mb-4">
                                        <h3 className="font-semibold text-2xl">
                                            {industry.name}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="w-full text-center text-3xl font-semibold mb-10">
                            {t.text("techwww")}
                        </h2>
                        <div className="flex flex-row flex-wrap gap-6">
                            {technologies.map((el, index) => (
                                <div
                                    className="justify-self-center"
                                    key={index}
                                >
                                    {/* <Image
                                        src="/images/swi.png"
                                        className="w-12 aspect-sqaure"
                                        width={100}
                                        height={100}
                                        alt="Tech"
                                    /> */}
                                    <span className="block bg-main-secondary text-base font-semibold px-4 py-2 rounded-md">
                                        {el}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="max-w-xl mx-auto rounded-xl bg-main-background-dark py-24 mt-32 text-center flex flex-col items-center gap-3">
                        <p className="text-2xl font-medium">
                            {t.text("ctaTitle")}
                        </p>
                        <Link
                            href={routes.CONTACT}
                            className="px-4 py-2 bg-main-secondary rounded-md font-semibold"
                        >
                            {t.text("ctaBtn")}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
