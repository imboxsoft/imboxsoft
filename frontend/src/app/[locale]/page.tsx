import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

import { getTranslations } from "next-intl/server";
import { getRichTranslations } from "@/i18n/utils";

import { ROUTE_KEYS as routes } from "@/constants/routes";
import { HeroSection } from "@/components/HeroSection";
import ServicesCardsSwiper from "@/components/ServicesCardsSwiper";
import { ScrollManagerEvaluator } from "@/components/ScrollManager";
import { technologies } from "@/utils/Technologies";

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

    return (
        <div className="gap-16 font-[family-name:var(--font-geist-sans)]">
            <section className="dark-before-background pt-32 pb-14 scroll-section current-scroll sm:pb-10 lg:min-h-screen lg:max-h-screen flex-1 flex flex-col justify-center items-center">
                <div className="custom-container">
                    <div>
                        <HeroSection />
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect scroll-section lg:min-h-screen py-16 lg:py-0 flex items-center bg-main-background">
                <div className="relative custom-container">
                    <div>
                        <div className="flex flex-col lg:flex-row gap-x-20 gap-y-10 w-full">
                            <div className="flex-1">
                                <div className="relative w-full aspect-square md:h-[500px]">
                                    <Image
                                        className="object-cover"
                                        src="/images/home/welcome.png"
                                        alt="Welcome to Imboxsoft"
                                        fill
                                    />
                                </div>
                            </div>

                            <div className="flex-1">
                                <div className="scroll-hidden text-center md:text-right mb-10 md:mb-16">
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

            <section className="observe-navbar-intersect scroll-section lg:min-h-screen py-16 lg:py-0 flex items-center bg-main-background-lighter">
                <div className="custom-container">
                    <div>
                        <div className="text-center mb-8 md:mb-16">
                            <div className="scroll-hidden inline-flex items-center justify-center w-full mb-6">
                                <hr className="w-56 xs:w-64 md:w-72 h-[4px] my-8 bg-main-secondary-lighter border-0" />
                                <h2 className="text-2xl md:text-3xl font-bold absolute px-4 py-2 -translate-x-1/2 left-1/2 bg-main-background-dark text-center">
                                    {t.text("ourExpertiseSection.title")}
                                </h2>
                            </div>
                            <p className="font-bold">
                                {t.text("ourExpertiseSection.subtitle")}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] lg:grid-rows-[auto_1fr] gap-y-10 gap-x-20 w-full">
                            <div className="w-full lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2">
                                <p className="scroll-hidden mb-8 text-justify">
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
                                <p className="scroll-hidden mb-4 text-justify font-semibold">
                                    {t.text(
                                        "ourExpertiseSection.ourCoreCompetenciesInclude"
                                    )}
                                </p>
                                <ul className="flex flex-row flex-wrap gap-x-4 gap-y-3">
                                    {technologies.map((el, index) => (
                                        <li key={index}>
                                            <span className="block bg-main-secondary text-base font-semibold px-4 py-2 rounded-md">
                                                {el}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect scroll-section lg:min-h-screen py-16 lg:py-0 flex items-center bg-main-background">
                <div className="custom-container">
                    <div>
                        <div className="relative flex flex-col lg:flex-row gap-y-10 gap-x-20 items-center">
                            <div className="w-full xs:max-w-64 lg:max-w-96">
                                <Image
                                    className="rounded-3xl"
                                    src="/images/home/why-us.avif"
                                    width={1000}
                                    height={1000}
                                    alt="Why Imboxsoft?"
                                />
                            </div>

                            <div className="flex-1 z-10">
                                <div className="mb-10">
                                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                        {t.text("whyUsSection.title")}
                                    </h2>
                                    <p>
                                        Deliver great service experiences fast -
                                        without the complexity of traditional
                                        ITSM solutions.Accelerate critical
                                        development work, eliminate toil, and
                                        deploy changes with ease.
                                    </p>
                                </div>

                                <hr className="h-px my-8 bg-main-secondary border-0"></hr>

                                <ul className="flex flex-col gap-10">
                                    {t
                                        .raw("whyUsSection.bulletPoints")
                                        .map((bp: any, i: number) => (
                                            <li key={i}>
                                                <div className="flex flex-row gap-4">
                                                    <div className="flex bg-main-secondary rounded-full shrink-0 items-center justify-center w-10 h-10">
                                                        <svg
                                                            className="w-6 h-6 text-gray-800 dark:text-white"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M15.0524 2.01283c-.2634-.00221-.7706-.00646-1.3064.08808-.6053.10681-1.377.35866-1.975.99279-.557.59067-.8308 1.31504-.9706 1.92248-.1413.61388-.1628 1.1828-.1628 1.5327v1h1c.0429 0 .0873.00018.1333.00036.8172.00329 2.1026.00847 3.2375-.9589.7023-.59862.9572-1.43277 1.059-2.06861.0871-.54385.0798-1.08153.0758-1.37798-.0007-.051-.0013-.09486-.0013-.13038v-1h-1c-.0255 0-.0554-.00025-.0895-.00054Zm-3.0525 7.02912c-.2934 0-.3974-.0566-.7263-.23555-.1027-.05589-.2273-.12372-.3865-.20548-.6797-.34907-1.55211-.64467-3.12486-.59552-1.30968.04093-2.37715.88151-3.01521 2.0359-.64078 1.1594-.90215 2.7005-.65499 4.4145.1543 1.07.66239 2.84 1.39644 4.358.36735.7596.81762 1.5119 1.34963 2.0895C7.35502 21.4646 8.08053 22 8.99163 22c1.17857 0 1.86287-.2589 2.38977-.5504.1663-.092.2761-.1558.3523-.2001.1161-.0674.1542-.0895.1949-.0968.0198-.0035.0403-.0035.0708-.0035.0105 0 .0195-.0003.0268-.0005.0132-.0003.0222-.0006.031.0009.0193.0032.0373.0146.095.0514.0638.0408.1761.1125.3925.2382.5319.3091 1.2263.5608 2.4635.5608.9293 0 1.6712-.5145 2.2105-1.0909.5456-.5832.9936-1.3421 1.3526-2.1048.7186-1.5268 1.1845-3.2947 1.3365-4.3485.2471-1.714-.0142-3.2551-.655-4.4145-.6381-1.15439-1.7055-1.99497-3.0152-2.0359-1.5728-.04915-2.4451.24645-3.1248.59552-.1592.08176-.2839.14959-.3866.20548-.3289.17895-.4329.23555-.7263.23555Z"
                                                            />
                                                        </svg>
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

            <section className="observe-navbar-intersect scroll-section lg:min-h-screen pt-24 py-16 lg:py-0 flex items-center bg-main-opacity-black-75">
                <div className="custom-container">
                    <div>
                        <div className="flex flex-col md:flex-row items-center gap-20 justify-between">
                            <div className="flex-1">
                                <div className="mb-8 md:mb-16">
                                    <h2 className="text-5xl md:text-4xl font-bold py-2 mb-6">
                                        {t.text("ctaSection.title")}
                                    </h2>
                                    <p>
                                        Flowbite helps you connect with friends
                                        and communities of people who share your
                                        interests. Connecting with your friends
                                        and family as well as discovering new
                                        ones is easy with features like Groups.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-16">
                                    <Link
                                        href={routes.CONTACT}
                                        className="text-center w-full md:w-fit bg-main-secondary px-6 py-4 font-semibold rounded-md"
                                    >
                                        {t.text("ctaSection.letsTalk")}
                                    </Link>
                                </div>
                            </div>

                            <div className="flex flex-1 justify-center">
                                <Image
                                    className="hidden md:block w-64"
                                    src="/images/home/cta-phone.png"
                                    width={500}
                                    height={500}
                                    alt="Welcome to Imboxsoft"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ScrollManagerEvaluator />
        </div>
    );
}
