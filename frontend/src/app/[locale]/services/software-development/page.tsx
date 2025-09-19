import Image from "next/image";

import { getRichTranslations } from "@/i18n/utils";

import { Link } from "@/i18n/navigation";

import { technologies, technologyLogos } from "@/utils/Technologies";

import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { ResponsiveFAQ } from "@/components/FAQ";
import ScrollToSection from "@/components/ScrollToSection";
import PointsWithIcons from "@/components/PointsWithIcons";
import { AutomatedCarousel } from "@/components/AutomatedCarousel";

type SVGIconProps = {
    children: React.ReactNode;
    className?: string;
};

function SVGIcon({ children, className }: SVGIconProps) {
    return (
        <svg
            className={className}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            {children}
        </svg>
    );
}

export default async function SoftwareDevelopment() {
    const ts = await getRichTranslations("services");

    const whatWeDoSVGIconClassName = "w-6 h-6 text-white";

    const whatWeDo = [
        {
            shortTitle: ts.text("softwareDevelopment.offer.design.shortTitle"),
            title: ts.text("softwareDevelopment.offer.design.title"),
            description: ts.text(
                "softwareDevelopment.offer.design.description"
            ),
            thumbnail: {
                src: "/images/our-work/design.png",
                alternativeText: "",
            },
            svgIcon: (
                <SVGIcon className={whatWeDoSVGIconClassName}>
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 18.5A2.493 2.493 0 0 1 7.51 20H7.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .92-3.182 2.477 2.477 0 0 1 1.876-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 12 5.5m0 13v-13m0 13a2.493 2.493 0 0 0 4.49 1.5h.01a2.468 2.468 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.477 2.477 0 0 0-1.875-3.344A2.5 2.5 0 0 0 14.5 3 2.5 2.5 0 0 0 12 5.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M20 10.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185"
                    />
                </SVGIcon>
            ),
        },
        {
            shortTitle: ts.text("softwareDevelopment.offer.apps.shortTitle"),
            title: ts.text("softwareDevelopment.offer.apps.title"),
            description: ts.text("softwareDevelopment.offer.apps.description"),
            thumbnail: {
                src: "/images/our-work/custom_apps.png",
                alternativeText: "",
            },
            svgIcon: (
                <SVGIcon className={whatWeDoSVGIconClassName}>
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                    />
                </SVGIcon>
            ),
        },
        {
            shortTitle: ts.text(
                "softwareDevelopment.offer.websites.shortTitle"
            ),
            title: ts.text("softwareDevelopment.offer.websites.title"),
            description: ts.text(
                "softwareDevelopment.offer.websites.description"
            ),
            thumbnail: {
                src: "/images/our-work/ecommerce.png",
                alternativeText: "",
            },
            svgIcon: (
                <SVGIcon className={whatWeDoSVGIconClassName}>
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                </SVGIcon>
            ),
        },
        {
            shortTitle: ts.text("softwareDevelopment.offer.api.shortTitle"),
            title: ts.text("softwareDevelopment.offer.api.title"),
            description: ts.text("softwareDevelopment.offer.api.description"),
            thumbnail: {
                src: "/images/our-work/api.webp",
                alternativeText: "",
            },
            svgIcon: (
                <SVGIcon className={whatWeDoSVGIconClassName}>
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6-2a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm0 0h-1a5 5 0 0 1-5-5v-.5"
                    />
                </SVGIcon>
            ),
        },
        {
            shortTitle: ts.text(
                "softwareDevelopment.offer.maintenance.shortTitle"
            ),
            title: ts.text("softwareDevelopment.offer.maintenance.title"),
            description: ts.text(
                "softwareDevelopment.offer.maintenance.description"
            ),
            thumbnail: {
                src: "/images/our-work/maintenance.webp",
                alternativeText: "",
            },
            svgIcon: (
                <SVGIcon className={whatWeDoSVGIconClassName}>
                    <path
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7.58209 8.96025 9.8136 11.1917l-1.61782 1.6178c-1.08305-.1811-2.23623.1454-3.07364.9828-1.1208 1.1208-1.32697 2.8069-.62368 4.1363.14842.2806.42122.474.73509.5213.06726.0101.1347.0133.20136.0098-.00351.0666-.00036.1341.00977.2013.04724.3139.24069.5867.52125.7351 1.32944.7033 3.01552.4971 4.13627-.6237.8375-.8374 1.1639-1.9906.9829-3.0736l4.8107-4.8108c1.0831.1811 2.2363-.1454 3.0737-.9828 1.1208-1.1208 1.3269-2.80688.6237-4.13632-.1485-.28056-.4213-.474-.7351-.52125-.0673-.01012-.1347-.01327-.2014-.00977.0035-.06666.0004-.13409-.0098-.20136-.0472-.31386-.2406-.58666-.5212-.73508-1.3294-.70329-3.0155-.49713-4.1363.62367-.8374.83741-1.1639 1.9906-.9828 3.07365l-1.7788 1.77875-2.23152-2.23148-1.41419 1.41424Zm1.31056-3.1394c-.04235-.32684-.24303-.61183-.53647-.76186l-1.98183-1.0133c-.38619-.19746-.85564-.12345-1.16234.18326l-.86321.8632c-.3067.3067-.38072.77616-.18326 1.16235l1.0133 1.98182c.15004.29345.43503.49412.76187.53647l1.1127.14418c.3076.03985.61628-.06528.8356-.28461l.86321-.8632c.21932-.21932.32446-.52801.2846-.83561l-.14417-1.1127ZM19.4448 16.4052l-3.1186-3.1187c-.7811-.781-2.0474-.781-2.8285 0l-.1719.172c-.7811.781-.7811 2.0474 0 2.8284l3.1186 3.1187c.7811.781 2.0474.781 2.8285 0l.1719-.172c.7811-.781.7811-2.0474 0-2.8284Z"
                    />
                </SVGIcon>
            ),
        },
    ];
    const benefits = [
        {
            svgIcon: (
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                </svg>
            ),
            title: ts.text("softwareDevelopment.benefits.list.results.title"),
            description: ts.text(
                "softwareDevelopment.benefits.list.results.description"
            ),
        },
        {
            svgIcon: (
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z"
                    />
                </svg>
            ),
            title: ts.text("softwareDevelopment.benefits.list.prices.title"),
            description: ts.text(
                "softwareDevelopment.benefits.list.prices.description"
            ),
        },
        {
            svgIcon: (
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
                    />
                </svg>
            ),
            title: ts.text("softwareDevelopment.benefits.list.meetings.title"),
            description: ts.text(
                "softwareDevelopment.benefits.list.meetings.description"
            ),
        },
        {
            svgIcon: (
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
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                </svg>
            ),
            title: ts.text(
                "softwareDevelopment.benefits.list.developers.title"
            ),
            description: ts.text(
                "softwareDevelopment.benefits.list.developers.description"
            ),
        },
        {
            svgIcon: (
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"
                    />
                </svg>
            ),
            title: ts.text("softwareDevelopment.benefits.list.web.title"),
            description: ts.text(
                "softwareDevelopment.benefits.list.web.description"
            ),
        },
    ];
    const faqs = ts.raw("softwareDevelopment.faq");

    return (
        <div className="bg-main-opacity-black-75">
            <section className="observe-navbar-intersect pt-16 lg:pt-24 w-full">
                <div className="relative custom-container pb-16 pt-28">
                    <div>
                        <div className="md:w-2/3">
                            <div className="mb-8">
                                <Breadcrumbs
                                    pageTitle={ts.text("services.shortTitle")}
                                />
                            </div>
                            <h1 className="text-5xl font-bold mb-4">
                                {ts.text("softwareDevelopment.title")}
                            </h1>

                            <p className="text-2xl">
                                {ts.text("softwareDevelopment.description")}
                            </p>
                            <div className="flex mt-6">
                                <Link
                                    href="/contact"
                                    className="p-4 text-2xl bg-main-secondary rounded-xl font-medium lg:font-semibold"
                                >
                                    {ts.text(
                                        "softwareDevelopment.cta.getInTouch"
                                    )}
                                </Link>
                            </div>
                        </div>

                        <div className="absolute right-0 bottom-0 translate-y-3 z-20 pointer-events-none">
                            <div className="relative w-full">
                                <div className="absolute w-full left-[9%]">
                                    <div className="relative w-1/4 aspect-square md:mb-2">
                                        <AutomatedCarousel
                                            breakpoints={{
                                                0: {
                                                    slidesPerView: 1,
                                                },
                                            }}
                                            speed={10}
                                            delay={1000}
                                            elements={technologyLogos.map(
                                                (el, index) => (
                                                    <div
                                                        className="relative w-full aspect-square md:mb-2"
                                                        key={index}
                                                    >
                                                        <Image
                                                            src={el.src}
                                                            className="object-fit"
                                                            fill
                                                            alt={el.name}
                                                        />
                                                    </div>
                                                )
                                            )}
                                        />
                                    </div>
                                </div>
                                <Image
                                    src="/images/common/guy-hand-up.svg"
                                    alt="SWD Man"
                                    layout="intrinsic"
                                    width={350}
                                    height={50}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:sticky z-20 lg:top-[78px] bg-main-secondary py-2">
                <div className="relative custom-container">
                    <div>
                        <ul className="services-ul relative z-50 flex flex-wrap lg:flex-nowrap flex-row gap-y-6 gap-x-20 lg:gap-x-6 lg:justify-between text-white">
                            {whatWeDo.map((item, index) => (
                                <li key={index}>
                                    <ScrollToSection
                                        id={`${index}`}
                                        offset={300}
                                    >
                                        <div className="flex flex-col items-center gap-0">
                                            <span>{item.svgIcon}</span>
                                            <span className="line-clamp-2 text-center">
                                                {item.shortTitle}
                                            </span>
                                        </div>
                                    </ScrollToSection>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect w-full bg-main-background-lighter">
                <div className="xl:py-24 xl:!pb-40">
                    <div className="custom-container xl:rounded-3xl py-20 md:py-32 bg-main-background">
                        <div>
                            <div className="flex flex-col md:flex-row md:gap-20 items-center text-center md:text-left lg:px-20">
                                <div className="flex-1">
                                    <h2 className="text-4xl lg:text-5xl mb-6 md:mb-0 font-semibold lg:font-medium">
                                        {ts.text(
                                            "softwareDevelopment.subtitle"
                                        )}
                                    </h2>
                                </div>
                                <div className="flex-1">
                                    <ul className="flex flex-col gap-6">
                                        {ts
                                            .raw(
                                                "softwareDevelopment.subtitleP"
                                            )
                                            .map((p: string, i: number) => (
                                                <li key={i}>
                                                    <span>{p}</span>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect w-full bg-main-background-lighter overflow-hidden">
                <div className="xl:pb-32">
                    <div className="custom-container xl:rounded-3xl bg-main-background pt-10 md:pt-0 pb-20 md:pb-0">
                        <div>
                            <div className="flex flex-col gap-32 xl:gap-40 md:pb-20 xl:pb-0 md:[&>*:nth-child(even)]:flex-row-reverse">
                                {whatWeDo.map((item, index) => (
                                    <div
                                        id={`${index}`}
                                        className="relative flex flex-col md:flex-row gap-10 xl:gap-10 lg:px-16 xl:px-0"
                                        key={index}
                                    >
                                        <div className="order-2 flex-1 xl:px-24 xl:pt-24 xl:pb-16 flex flex-col items-center md:items-start text-center md:text-left">
                                            <h3 className="text-3xl lg:text-4xl font-semibold mb-6">
                                                {item.title}
                                            </h3>
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
                </div>
            </section>

            <section className="observe-navbar-intersect w-full bg-main-background-lighter">
                <div className="custom-container py-20 md:pt-32 md:pb-24">
                    <div>
                        <div className="mb-32">
                            <PointsWithIcons
                                title={ts.text(
                                    "softwareDevelopment.benefits.title"
                                )}
                                subtitle={ts.text(
                                    "softwareDevelopment.benefits.subtitle"
                                )}
                                description={ts.text(
                                    "softwareDevelopment.benefits.description"
                                )}
                                points={benefits}
                            />
                        </div>

                        <div className="my-32 md:mt-0">
                            <div className="flex flex-col lg:flex-row gap-20">
                                <div className="flex-1">
                                    <h2 className="text-5xl font-semibold mb-6">
                                        {ts.text(
                                            "softwareDevelopment.expertise.title"
                                        )}
                                    </h2>
                                    <p className="w-full">
                                        {ts.text(
                                            "softwareDevelopment.expertise.description"
                                        )}
                                    </p>
                                </div>
                                <ul className="lg:max-w-[650px] flex flex-row flex-wrap gap-6">
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
                            <h2 className="text-5xl font-medium mb-10">
                                {ts.text(
                                    "softwareDevelopment.expertise.metrics.title"
                                )}
                            </h2>
                            <div className="flex flex-col lg:flex-row">
                                <div className="flex-1 p-10 pt-32 border border-gray-500">
                                    <h3 className="text-6xl font-semibold mb-4">
                                        {ts.text(
                                            "softwareDevelopment.expertise.metrics.recommendations.accent"
                                        )}
                                    </h3>
                                    <p className="text-2xl">
                                        {ts.rich(
                                            "softwareDevelopment.expertise.metrics.recommendations.suffix"
                                        )}
                                    </p>
                                </div>
                                <div className="flex-1 p-10 pt-32 border border-gray-500">
                                    <h3 className="text-6xl font-semibold mb-4">
                                        {ts.text(
                                            "softwareDevelopment.expertise.metrics.projects.accent"
                                        )}
                                    </h3>
                                    <p className="text-2xl">
                                        {ts.rich(
                                            "softwareDevelopment.expertise.metrics.projects.suffix"
                                        )}
                                    </p>
                                </div>
                                <div className="flex-1 p-10 pt-32 border border-gray-500">
                                    <h3 className="text-6xl font-semibold mb-4">
                                        {ts.text(
                                            "softwareDevelopment.expertise.metrics.clients.accent"
                                        )}
                                    </h3>
                                    <p className="text-2xl">
                                        {ts.rich(
                                            "softwareDevelopment.expertise.metrics.clients.suffix"
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect w-full">
                <div className="custom-container pt-24">
                    <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20 justify-between">
                        <div className="md:min-w-[400px] flex-1 order-1 md:order-2 lg:order-1">
                            <div className="text-center">
                                <h2 className="text-2xl md:text-4xl font-medium pb-10">
                                    {ts.text("softwareDevelopment.cta.title")}
                                </h2>
                            </div>
                            <div className="w-full max-w-[650px] mx-auto">
                                <ContactForm />
                            </div>
                        </div>

                        <div className="flex flex-1 justify-center order-2 md:order-1 lg:order-2">
                            <ResponsiveFAQ
                                id="home-faq-accordion-flush"
                                faqs={faqs}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
