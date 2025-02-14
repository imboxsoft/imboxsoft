import routes from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { ImageType } from "@/types/strapi";
import { generateBaseURL } from "@/utils/Strapi";

interface ProjectType {
    title: string;
    shortDescription: string;
    clientLogo: ImageType;
    coverImage: ImageType;
}

export default async function OurWork() {
    const industries = [
        {
            src: "/images/swi.png",
            name: "Information Technology (IT)",
            alt: "",
        },
        {
            src: "/images/swi.png",
            name: "Digital Marketing",
            alt: "",
        },
        {
            src: "/images/swi.png",
            name: "Creative and Design",
            alt: "",
        },
        {
            src: "/images/swi.png",
            name: "Business Consulting",
            alt: "",
        },
    ];
    const technologies: string[] = [
        "Next.js",
        "Angular",
        "Alpinejs",
        "Tailwind",
        "Django",
        "Nodejs",
        "Laravel",
        ".NET",
        "PostgreSQL",
        "MongoDB",
        "GIT",
        "Docker",
        "Kubernetes",
        "AWS",
        "Google Cloud",
        "Shopify",
        "Bigcommerce",
        "Stripe",
        "Paypal",
        "API Integration",
        "Photoshop",
        "Illustrator",
        "Figma",
    ];

    let projects: ProjectType[] = [];

    try {
        const res = await fetch(
            `${process.env.STRAPI_API_URL}/our-works?populate=*`,
            {
                cache: "force-cache",
            }
        );

        if (!res.ok) throw new Error("Response failed");

        const resData = await res.json();

        projects = resData.data;
    } catch (e) {
        console.log(e);
    }

    return (
        <div>
            <div className="observe-navbar-intersect pt-32 w-full bg-main-opacity-black-50">
                <div className="relative max-w-screen-xl mx-auto px-4 xs:px-10 py-20">
                    <div className="max-w-[750px] mx-auto relative w-full text-center">
                        <h5 className="text-main-primary text-2xl mb-8">
                            OUR WORK
                        </h5>
                        <h1 className="text-5xl font-bold mb-6">
                            Explore how we helped our clients achieve real
                            business benefits
                        </h1>
                        <h3 className="text-2xl">
                            How we treat each other makes us better as software
                            creators. Our talent remains approachable and ready
                            to lend a hand because it’s the right thing to do.
                        </h3>
                    </div>
                </div>
            </div>

            <div className="observe-navbar-intersect w-full bg-main-background-lighter">
                <div className="max-w-screen-xl mx-auto px-4 xs:px-10 pt-16 pb-20">
                    <div className="flex flex-col gap-32 md:[&>*:nth-child(even)]:flex-row-reverse">
                        {projects.map((project, index) => (
                            <div
                                className="flex flex-col md:flex-row gap-10 lg:gap-20"
                                key={index}
                            >
                                <div className="flex flex-col flex-1 items-center md:items-start text-center md:text-left">
                                    <div className="relative w-64 max-w-full h-20 mb-6">
                                        <Image
                                            src={generateBaseURL(
                                                project.clientLogo.url
                                            )}
                                            fill
                                            className="object-contain"
                                            alt={
                                                project.clientLogo
                                                    .alternativeText
                                            }
                                        />
                                    </div>
                                    <h2 className="text-3xl font-semibold mb-6">
                                        {project.title}
                                    </h2>
                                    <p>{project.shortDescription}</p>
                                </div>
                                <div className="relative w-full md:w-1/3 lg:flex-1 h-56 lg:h-72 md:mt-16 rounded-xl overflow-hidden">
                                    <Image
                                        src={generateBaseURL(
                                            project.coverImage.url
                                        )}
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
                <div className="max-w-screen-xl mx-auto px-4 xs:px-10 pt-24 pb-20">
                    <div>
                        <h3 className="w-full text-center text-3xl font-semibold mb-10">
                            Featured Industries
                        </h3>
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
                        <h3 className="w-full text-center text-3xl font-semibold mb-10">
                            Tech we work with
                        </h3>
                        <div className="grid grid-cols-3 xs:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 grid-flow-row gap-6">
                            {technologies.map((el, index) => (
                                <div
                                    className="justify-self-center"
                                    key={index}
                                >
                                    <Image
                                        src="/images/swi.png"
                                        className="w-12 aspect-sqaure"
                                        width={100}
                                        height={100}
                                        alt=""
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="max-w-xl mx-auto rounded-xl bg-main-background-dark py-24 mt-32 text-center flex flex-col items-center gap-3">
                        <h3 className="text-2xl font-medium">
                            What do you think? Let's discuss further.
                        </h3>
                        <p></p>
                        <Link
                            href={routes.CONTACT}
                            className="px-4 py-2 bg-main-secondary rounded-md font-semibold"
                        >
                            Book a free consultation
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
