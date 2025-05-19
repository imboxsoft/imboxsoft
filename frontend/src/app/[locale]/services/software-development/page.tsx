import ScrollToLink from "@/components/ScrollToLink";
import Image from "next/image";
import Link from "next/link";

export default function SoftwareDevelopment() {
    const whatWeCanDo = [
        {
            id: "1",
            shortTitle: "Concept & Design",
            title: "Personalized Design",
            description:
                "Every project starts with designing the vision of our clients. We take the concept on top of which we build your digital solution. We set your prefered color palette, create icons, images and the whole design of your application.",
            thumbnail: {
                src: "/images/our-work/design.png",
                alternativeText: "",
            },
            svgIcon: (
                <svg
                    className="hidden sm:block w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                    <path
                        fill-rule="evenodd"
                        d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                        clip-rule="evenodd"
                    />
                    <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
                </svg>
            ),
        },
        {
            id: "2",
            shortTitle: "Custom Apps",
            title: "Custom Desktop & Web Apps",
            description:
                "Our team is skilled in several technologies for building custom apps from start to finish. Wether it is desktop or web applications, we can build it.",
            thumbnail: {
                src: "/images/our-work/custom_apps.png",
                alternativeText: "",
            },
            svgIcon: (
                <svg
                    className="hidden sm:block w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                    <path
                        fill-rule="evenodd"
                        d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                        clip-rule="evenodd"
                    />
                    <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
                </svg>
            ),
        },
        {
            id: "3",
            shortTitle: "Websites & E-commerce",
            title: "Presentation Website & E-commerce",
            description:
                "We specialize in tools as Wordpress, Shopify, Bigcommerce and other custom technologies. Wether you prefer a general website or a complete online shop, we build your solution in order to be scalable and maintainable. We analyze and optimize SEO parameters so you can be more discoverable.",
            thumbnail: {
                src: "/images/our-work/ecommerce.png",
                alternativeText: "",
            },
            svgIcon: (
                <svg
                    className="hidden sm:block w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                    <path
                        fill-rule="evenodd"
                        d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                        clip-rule="evenodd"
                    />
                    <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
                </svg>
            ),
        },
        {
            id: "4",
            shortTitle: "API Integration",
            title: "API Integration",
            description:
                "If you need to extend your current applications with more features offered by reputed vendors like payment gateways, invoicing, emailing, delivery trackings, then you are in the right place.",
            thumbnail: {
                src: "/images/our-work/api.webp",
                alternativeText: "",
            },
            svgIcon: (
                <svg
                    className="hidden sm:block w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                    <path
                        fill-rule="evenodd"
                        d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                        clip-rule="evenodd"
                    />
                    <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
                </svg>
            ),
        },
        {
            id: "5",
            shortTitle: "Maintenance",
            title: "Maintenance & Optimization",
            description:
                "We can take over exising projects for maintenance and functionality extensions.",
            thumbnail: {
                src: "/images/our-work/maintenance.webp",
                alternativeText: "",
            },
            svgIcon: (
                <svg
                    className="hidden sm:block w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                    <path
                        fill-rule="evenodd"
                        d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                        clip-rule="evenodd"
                    />
                    <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
                </svg>
            ),
        },
    ];
    const technologies: string[] = [
        "Next.js",
        "Angular",
        "Django",
        "Nodejs",
        "Laravel",
        ".NET",
        "Alpinejs",
        "Tailwind",
        "Shopify",
        "Bigcommerce",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "Google Cloud",
        "Photoshop",
        "Illustrator",
        "Figma",
    ];

    return (
        <div className="bg-main-opacity-black-75">
            <section className="observe-navbar-intersect pt-32 w-full">
                <div className="relative max-w-screen-2xl mx-auto px-4 xs:px-10 py-32">
                    <div className="md:w-2/3">
                        <h5 className="text-main-primary text-sm mb-8">
                            SERVICES
                        </h5>
                        <h1 className="text-5xl font-bold mb-4">
                            Software Development Services
                        </h1>
                        <h3 className="text-2xl">
                            Boost your business through digital solutions with
                            high development velocity and skilled agile team at
                            the best possible costs.
                        </h3>
                        <div className="flex mt-6">
                            <Link
                                href="/contact"
                                className="p-4 text-2xl bg-main-secondary rounded-2xl"
                            >
                                <b>Get in touch</b>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute right-0 bottom-0 translate-y-20 z-20">
                        <Image
                            src="/images/man.png"
                            alt="Imboxsoft Logo"
                            layout="intrinsic"
                            width={300}
                            height={50}
                        />
                    </div>
                </div>
            </section>

            <section className="lg:sticky z-10 top-[88px] lg:top-24 bg-main-secondary py-6">
                <div className="relative max-w-screen-2xl mx-auto">
                    <ul className="services-ul flex flex-wrap lg:flex-nowrap flex-row gap-y-6 gap-x-24 text-white px-4 xs:px-10 justify-center">
                        {whatWeCanDo.map((item, index) => (
                            <li key={index}>
                                <ScrollToLink id={item.id}>
                                    {item.svgIcon}
                                    <span className="line-clamp-2 text-center">
                                        {item.shortTitle}
                                    </span>
                                </ScrollToLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <div className="overflow-x-hidden">
                <section className="observe-navbar-intersect w-full bg-main-background-lighter">
                    <div className="xl:py-24 xl:!pb-40">
                        <div className="max-w-screen-2xl xl:rounded-3xl mx-auto px-10 xs:px-16 py-20 md:py-32 bg-main-background">
                            <div className="flex flex-col md:flex-row gap-6 items-center text-center md:text-left">
                                <div className="flex-1">
                                    <h2 className="text-5xl mb-6 md:mb-0">
                                        Software solutions for your business
                                    </h2>
                                </div>
                                <div className="flex-1">
                                    <ul className="flex flex-col gap-6">
                                        <li>
                                            <span>
                                                Support and consultancy in every
                                                stage of the project.
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Team of skilled developers with
                                                10+ years of coding experience.
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Fast implementation for
                                                immediate results.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="observe-navbar-intersect w-full bg-main-background-lighter">
                    <div className="xl:pb-32">
                        <div className="max-w-screen-2xl xl:rounded-3xl mx-auto bg-main-background pt-10 md:pt-0 pb-20 md:pb-0">
                            <div className="flex flex-col gap-32 xl:gap-40 pb-20 xl:pb-0 md:[&>*:nth-child(even)]:flex-row-reverse">
                                {whatWeCanDo.map((item, index) => (
                                    <div
                                        id={item.id}
                                        className="relative flex flex-col md:flex-row gap-10 xl:gap-10 px-16 xl:px-0"
                                        key={index}
                                    >
                                        <div className="order-2 flex-1 xl:px-24 xl:pt-24 xl:pb-16 flex flex-col items-center md:items-start text-center md:text-left">
                                            <h2 className="text-4xl font-semibold mb-6">
                                                {item.title}
                                            </h2>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="order-1 relative w-full md:w-2/5 flex">
                                            <div className="flex relative flex-wrap items-center w-full">
                                                <div className="w-full relative">
                                                    <div className="xl:-mt-[10%] xl:-mr-[15%] xl:-mb-[10%] xl:-ml-[13%]">
                                                        <Image
                                                            src={
                                                                item.thumbnail
                                                                    .src
                                                            }
                                                            fill
                                                            className="!relative w-3/4 h-auto object-cover rounded-md"
                                                            alt={
                                                                item.thumbnail
                                                                    .alternativeText
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="max-w-screen-2xl mx-auto px-4 xs:px-10 pt-32 pb-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mb-32">
                            <div className="flex-1 flex flex-col gap-4 items-start">
                                <span className="rounded-3xl p-4 bg-main-secondary text-base font-semibold">
                                    Benefits and uses
                                </span>
                                <h2 className="text-4xl font-semibold">
                                    Enhance your work with personalized apps
                                </h2>
                                <p>
                                    Let your business benefit from the power of
                                    digital solutions, through automation and
                                    logical organizing.
                                </p>
                            </div>
                            <div className="flex-1 flex flex-col gap-4 items-start">
                                <svg
                                    className="w-6 h-6 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                                <h4 className="text-2xl font-semibold">
                                    Immediate results
                                </h4>
                                <p>
                                    We customize your business workflow in the
                                    shortest time span possible.
                                </p>
                            </div>
                            <div className="flex-1 flex flex-col gap-4 items-start">
                                <svg
                                    className="w-6 h-6 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z"
                                    />
                                </svg>
                                <h4 className="text-2xl font-semibold">
                                    Lowest price possible
                                </h4>
                                <p>
                                    You receive best quality at the lowest price
                                    possible. We adjust our costs accordingly to
                                    your requirements in such a way that it can
                                    be profitable for both parties.
                                </p>
                            </div>
                            <div className="flex-1 flex flex-col gap-4 items-start">
                                <svg
                                    className="w-6 h-6 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
                                    />
                                </svg>
                                <h4 className="text-2xl font-semibold">
                                    Periodical meetings
                                </h4>
                                <p>
                                    You have 100% control over out team&apos;s
                                    development process thorugh scheduled
                                    meetings and periodical notifications
                                    regarding the progress of your project.
                                </p>
                            </div>
                            <div className="flex-1 flex flex-col gap-4 items-start">
                                <svg
                                    className="w-6 h-6 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-width="2"
                                        d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    />
                                </svg>

                                <h4 className="text-2xl font-semibold">
                                    Skilled developers
                                </h4>
                                <p>
                                    Our team consists of programmers with more
                                    than 10 years of experience. Rest assured
                                    that your pojects are in good hands.
                                </p>
                            </div>
                            <div className="flex-1 flex flex-col gap-4 items-start">
                                <svg
                                    className="w-6 h-6 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"
                                    />
                                </svg>
                                <h4 className="text-2xl font-semibold">
                                    Web&Desktop
                                </h4>
                                <p>
                                    Nowadays, the balance is shifting toward web
                                    technologies; however, certain projects
                                    still require desktop implementations, and
                                    this is where we come into play.
                                </p>
                            </div>
                        </div>

                        <div className="my-32 md:mt-0">
                            <div className="flex flex-col lg:flex-row gap-20">
                                <div className="flex-1">
                                    <h2 className="text-5xl font-semibold mb-6">
                                        Technology expertise
                                    </h2>
                                    <p className="w-full">
                                        Discover the power of the latest
                                        technologies and let us take over the
                                        hassle of going through the long
                                        decision process and instead remain
                                        focused on your responsibilites.
                                    </p>
                                </div>
                                <ul className="lg:max-w-[650px] flex flex-row flex-wrap gap-10">
                                    {technologies.map((technology, index) => (
                                        <li key={index}>
                                            <span className="block bg-main-secondary text-base font-semibold px-4 py-2 rounded-md">
                                                {technology}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-5xl font-medium mb-10">
                                Your success metrics become ours
                            </h1>
                            <div className="flex flex-col lg:flex-row">
                                <div className="flex-1 p-10 pt-32 border border-gray-500">
                                    <h3 className="text-6xl font-semibold mb-4">
                                        80%
                                    </h3>
                                    <p className="text-2xl">
                                        of our work comes from{" "}
                                        <span className="font-semibold">
                                            recommendations
                                        </span>{" "}
                                    </p>
                                </div>
                                <div className="flex-1 p-10 pt-32 border border-gray-500">
                                    <h3 className="text-6xl font-semibold mb-4">
                                        10+
                                    </h3>
                                    <p className="text-2xl">
                                        finalized projects in the past{" "}
                                        <span className="font-semibold">
                                            2 years
                                        </span>{" "}
                                    </p>
                                </div>
                                <div className="flex-1 p-10 pt-32 border border-gray-500">
                                    <h3 className="text-6xl font-semibold mb-4">
                                        All
                                    </h3>
                                    <p className="text-2xl">
                                        of our clients chose{" "}
                                        <span className="font-semibold">
                                            to continue
                                        </span>{" "}
                                        with us
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
