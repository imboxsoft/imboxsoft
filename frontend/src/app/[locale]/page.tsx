import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

import { getTranslations } from "next-intl/server";
import { getRichTranslations } from "@/i18n/utils";

import { ROUTE_KEYS as routes } from "@/constants/routes";
import { HeroSection } from "@/components/HeroSection";
import ServicesCardsSwiper from "@/components/ServicesCardsSwiper";
import { ScrollManagerEvaluator } from "@/components/ScrollManager";
import { technologies, technologyLogos } from "@/utils/Technologies";
import ScrollToSection from "@/components/ScrollToSection";
import AutomatedCarousel from "@/components/AutomatedCarousel";
import Accordion from "@/components/Accordion";
import ScrollableWrapper from "@/components/ScrollableWrapper";
import ContactForm from "@/components/ContactForm";

// export async function generateMetadata({
//     params,
// }: {
//     params: { locale: string };
// }): Promise<Metadata> {
//     const t = await getTranslations({
//         locale: params.locale,
//         namespace: "meta.home",
//     });

//     return {
//         title: t("title"),
//         description: t("description"),
//         openGraph: {
//             title: t("ogTitle"),
//             description: t("ogDescription"),
//             locale: params.locale,
//             siteName: "Imboxsoft",
//             type: "website",
//         },
//         twitter: {
//             card: "summary_large_image",
//             title: t("ogTitle"),
//             description: t("ogDescription"),
//         },
//     };
// }

export default async function Home() {
    const t = await getRichTranslations("home");

    const faq = [
        {
            title: "Ce este?",
            description: "Accordionul funcționează cu JS pe client.",
        },
        {
            title: "Cum funcționează?",
            description: "Markup pe server, logică pe client.",
        },
        {
            title: "Cum funcționează?",
            description: "Markup pe server, logică pe client.",
        },
        {
            title: "Cum funcționează?",
            description: "Markup pe server, logică pe client.",
        },
        {
            title: "Cum funcționează?",
            description: "Markup pe server, logică pe client.",
        },
        {
            title: "Cum funcționează?",
            description: "Markup pe server, logică pe client.",
        },
        {
            title: "Cum funcționează?",
            description: "Markup pe server, logică pe client.",
        },
        {
            title: "Cum funcționează?",
            description: "Markup pe server, logică pe client.",
        },
        {
            title: "Cum funcționează?",
            description: "Markup pe server, logică pe client.",
        },
        {
            title: "Cum funcționează?",
            description: "Markup pe server, logică pe client.",
        },
        {
            title: "Cum funcționează?",
            description: "Markup pe server, logică pe client.",
        },
        {
            title: "Cum funcționează?",
            description: "Markup pe server, logică pe client.",
        },
    ];

    return (
        <div className="gap-16 font-[family-name:var(--font-geist-sans)]">
            <section className="dark-before-background pt-32 pb-14 scroll-section current-scroll sm:pb-10 lg:min-h-screen lg:max-h-screen flex-1 flex flex-col justify-center items-center">
                <div className="custom-container">
                    <div>
                        <HeroSection />
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect scroll-section shape-steep-section before:!bg-main-secondary lg:min-h-screen py-16 lg:py-0 flex items-center bg-main-background">
                <div className="relative custom-container">
                    <div>
                        <div className="flex flex-col md:flex-row gap-x-20 gap-y-10 w-full justify-center items-start md:items-center">
                            <div className="lg:flex-1">
                                <div className="relative w-full aspect-square h-[250px] lg:h-[500px]">
                                    <Image
                                        className="object-cover"
                                        src="/images/home/welcome.png"
                                        alt="Welcome to Imboxsoft"
                                        fill
                                    />
                                </div>
                            </div>

                            <div className="flex-1">
                                <div className="scroll-hidden text-left md:text-right mb-10 md:mb-16">
                                    <h2 className="mb-4 text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                                        {t.rich("welcomeSection.title")}
                                    </h2>
                                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold leading-none tracking-tight">
                                        <span className="leading-normal border-b-4 border-main-secondary">
                                            {t.text("welcomeSection.subtitle")}
                                        </span>
                                    </p>
                                </div>

                                <div className="scroll-hidden text-justify">
                                    {t
                                        .raw("welcomeSection.aboutUs")
                                        .map((p: string, i: number) => (
                                            <p key={i} className="mb-4">
                                                {t.rich(
                                                    `welcomeSection.aboutUs.${i}`
                                                )}
                                            </p>
                                        ))}

                                    <div className="flex flex-row justify-center pt-6">
                                        <Link
                                            href={routes.ABOUT_US}
                                            className="px-5 sm:px-3 py-3 sm:py-2 bg-main-secondary rounded-lg text-lg sm:text-base font-bold sm:font-semibold"
                                        >
                                            {t.text(
                                                "welcomeSection.learnMoreAboutUs"
                                            )}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect scroll-section lg:min-h-screen py-16 lg:py-0 flex items-center bg-main-background">
                <div className="custom-container">
                    <div>
                        <div className="relative flex flex-col lg:flex-row gap-y-10 gap-x-20 items-center">
                            <div className="absolute lg:relative right-0 w-full max-w-64 lg:max-w-96">
                                <Image
                                    className="rounded-3xl"
                                    src="/images/home/why-us.avif"
                                    width={1000}
                                    height={1000}
                                    alt="Why Imboxsoft?"
                                />
                            </div>

                            <div className="flex-1 z-10 mt-72 lg:mt-0">
                                <div>
                                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                        {t.text("whyUsSection.title")}
                                    </h2>
                                    <p>
                                        {t.rich("whyUsSection.description-1")}
                                    </p>
                                </div>

                                <hr className="h-px my-6 bg-main-secondary border-0"></hr>

                                <p className="mb-4">
                                    {t.text("whyUsSection.description-2")}
                                </p>
                                <ul className="flex flex-col gap-10">
                                    {t
                                        .raw("whyUsSection.bulletPoints")[0]
                                        .map((bp: any, i: number) => (
                                            <li key={i}>
                                                <div className="flex flex-row gap-4">
                                                    <div className="flex bg-main-secondary rounded-full shrink-0 items-center justify-center w-10 h-10">
                                                        <span className="font-semibold leading-5 border-b-2">
                                                            {bp.no}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-main-secondary">
                                                            {bp.title}
                                                        </h3>
                                                        <p>{bp.description}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative observe-navbar-intersect scroll-section lg:min-h-screen pt-0 py-16 lg:py-0 flex items-center bg-main-background">
                <div className="custom-container pb-20">
                    <div>
                        <ul className="grid gird-cols-1 md:grid-cols-2 gap-10 mb-10">
                            {t
                                .raw("whyUsSection.bulletPoints")[1]
                                .map((bp: any, i: number) => (
                                    <li key={i}>
                                        <div className="flex flex-row gap-4 p-10">
                                            <div className="flex bg-main-secondary rounded-full shrink-0 items-center justify-center w-10 h-10">
                                                <span className="font-semibold leading-5 border-b-2">
                                                    {bp.no}
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-main-secondary">
                                                    {bp.title}
                                                </h3>
                                                <p>{bp.description}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                        </ul>

                        <div className="w-full mt-4">
                            <AutomatedCarousel
                                elements={technologyLogos.map((el, index) => (
                                    <div
                                        className="relative w-full aspect-square mb-2"
                                        key={index}
                                    >
                                        <Image
                                            src={el.src}
                                            className="object-fit"
                                            fill
                                            alt={el.name}
                                        />
                                    </div>
                                ))}
                            />
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-10">
                    <div className="anim-bounce shape-arrow-point-bottom after:!border-t-main-secondary bg-main-secondary p-6 font-semibold">
                        <ScrollToSection id="our-expertise" offset={0}>
                            <span className="line-clamp-2 text-center">
                                {t.text("whyUsSection.gotoOurExpertise")}
                            </span>
                        </ScrollToSection>
                    </div>
                </div>
            </section>

            <section
                id="our-expertise"
                className="observe-navbar-intersect scroll-section lg:min-h-screen py-16 lg:py-0 flex items-center bg-main-background-lighter"
            >
                <div className="custom-container">
                    <div>
                        <div className="text-center mb-6 md:mb-12">
                            <div className="relative scroll-hidden inline-flex items-center justify-center w-full mb-3">
                                <hr className="w-72 xs:w-80 md:w-96 h-[4px] absolute my-8 bg-main-secondary-lighter border-0 z-0" />
                                <h2 className="!w-fit shape-steep-section before:bg-main-primary text-2xl md:text-3xl font-bold px-4 py-2 bg-main-background-dark text-center z-10">
                                    <span>
                                        {t.text("ourExpertiseSection.title")}
                                    </span>
                                </h2>
                            </div>
                            <p className="font-bold">
                                {t.text("ourExpertiseSection.subtitle")}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] lg:grid-rows-[auto_1fr] gap-y-6 gap-x-20 w-full">
                            <div className="w-full lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2">
                                <p className="scroll-hidden mb-4 text-justify">
                                    {t.text("ourExpertiseSection.description")}
                                </p>
                            </div>

                            <div className="w-full lg:max-w-[350px] lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3">
                                <ServicesCardsSwiper
                                    customBreakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        1024: {
                                            slidesPerView: 1,
                                        },
                                    }}
                                />
                            </div>

                            <div className="col-span-1 lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3">
                                <p className="scroll-hidden mb-2 text-justify font-semibold">
                                    {t.text(
                                        "ourExpertiseSection.ourCoreCompetenciesInclude"
                                    )}
                                </p>
                                <ul className="flex flex-row flex-wrap gap-x-4 gap-y-3">
                                    {technologies.map((el, index) => (
                                        <li key={index}>
                                            <span className="block bg-main-secondary text-base font-semibold px-2 py-1 rounded-md">
                                                {el}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="w-full mt-4">
                            <AutomatedCarousel
                                elements={technologyLogos.map((el, index) => (
                                    <div
                                        className="relative w-full aspect-square mb-2"
                                        key={index}
                                    >
                                        <Image
                                            src={el.src}
                                            className="object-fit"
                                            fill
                                            alt={el.name}
                                        />
                                    </div>
                                ))}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect scroll-section lg:min-h-screen pt-24 py-16 lg:py-0 flex items-center bg-main-opacity-black-75">
                <div className="custom-container">
                    <div>
                        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20 justify-between">
                            <div className="md:min-w-[400px] flex-1 order-1 md:order-2 lg:order-1">
                                <div className="mb-8 md:mb-16">
                                    <h2 className="text-5xl md:text-4xl font-bold py-2 mb-6">
                                        {t.text("ctaSection.title")}
                                    </h2>
                                    <p>{t.text("ctaSection.description")}</p>
                                </div>
                                <div>
                                    <ContactForm />
                                </div>
                                {/* <div className="flex flex-col gap-16">
                                    <Link
                                        href={routes.CONTACT}
                                        className="text-center w-full md:w-fit bg-main-secondary px-6 py-4 font-semibold rounded-md"
                                    >
                                        {t.text("ctaSection.letsTalk")}
                                    </Link>
                                </div> */}
                            </div>

                            <div className="flex flex-1 justify-center order-2 md:order-1 lg:order-2">
                                <div className="relative w-64 md:w-full max-w-full">
                                    <div className="absolute w-full h-full overflow-hidden rounded-[55px] lg:rounded-xl px-1 md:ps-[7%] md:pe-[2%] md:pb-[5%] lg:px-[10%] lg:pb-[4%]">
                                        <div className="relative w-full h-full bg-main-background-dark">
                                            <div className="absolute w-full h-full pt-9 lg:pt-4 pb-4 px-4 z-10">
                                                <ScrollableWrapper className="w-full h-full overflow-y-auto scroll-smooth beautiful-scrollbar">
                                                    <Accordion
                                                        id="home-faq-accordion-flush"
                                                        title="FAQ"
                                                        elements={faq}
                                                    />
                                                </ScrollableWrapper>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <Image
                                            className="relative block md:hidden w-full h-auto z-0"
                                            src="/images/home/cta-phone.png"
                                            width={500}
                                            height={500}
                                            alt="Welcome to Imboxsoft"
                                        />
                                        <Image
                                            className="relative hidden md:block lg:hidden w-full h-auto z-0"
                                            src="/images/home/cta-tablet.png"
                                            width={500}
                                            height={500}
                                            alt="Welcome to Imboxsoft"
                                        />
                                        <Image
                                            className="relative hidden lg:block w-full h-auto z-0"
                                            src="/images/home/cta-desktop.png"
                                            width={500}
                                            height={500}
                                            alt="Welcome to Imboxsoft"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ScrollManagerEvaluator />
        </div>
    );
}
