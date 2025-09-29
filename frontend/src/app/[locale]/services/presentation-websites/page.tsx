import Image from "next/image";

import { getRichTranslations } from "@/i18n/utils";
import { ROUTE_KEYS as routes } from "@/constants/routes";

import { Link } from "@/i18n/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WhyUsGuySVG } from "@/components/SVGs";
import { technologyLogos } from "@/utils/Technologies";
import { AutomatedCarousel } from "@/components/AutomatedCarousel";
import { OurClients } from "@/components/OurClients";
import { generateWPAPIURL } from "@/utils/URLGenerators";

export default async function PresentationWebsites() {
    const ts = await getRichTranslations("services");
    const tc = await getRichTranslations("common");

    const stepsImages: {
        src: string;
    }[] = [
        {
            src: "/images/services/presentation_websites/consultanta&briefing.jpg",
        },
        {
            src: "/images/services/presentation_websites/visual_concept.jpg",
        },
        {
            src: "/images/services/presentation_websites/development.jpg",
        },
        {
            src: "/images/services/presentation_websites/deployment.jpg",
        },
        {
            src: "/images/services/presentation_websites/support.jpg",
        },
    ];

    const additionalImages: {
        src: string;
    }[] = [
        {
            src: "/images/services/presentation_websites/contact_forms.jpg",
        },
        {
            src: "/images/services/presentation_websites/blogs.jpg",
        },
        {
            src: "/images/services/presentation_websites/development.jpg",
        },
        {
            src: "/images/services/presentation_websites/seo.jpg",
        },
        {
            src: "/images/services/presentation_websites/multilingual.jpg",
        },
        {
            src: "/images/services/presentation_websites/cms.jpg",
        },
        {
            src: "/images/services/presentation_websites/products.jpg",
        },
        {
            src: "/images/services/presentation_websites/gdpr.jpg",
        },
        {
            src: "/images/services/presentation_websites/backup.jpg",
        },
    ];

    return (
        <div>
            <section className="observe-navbar-intersect pt-32 w-full bg-main-opacity-black-75">
                <div className="relative custom-container py-24">
                    <div>
                        <div className="md:w-2/3">
                            <div className="mb-8">
                                <Breadcrumbs
                                    pageTitle={ts.text("services.shortTitle")}
                                />
                            </div>
                            <h1 className="text-5xl font-bold mb-4">
                                {ts.text("presentationWebsites.title")}
                            </h1>
                            <p className="text-2xl">
                                {ts.text("presentationWebsites.description")}
                            </p>
                            <div className="flex mt-6">
                                <Link
                                    href="/contact"
                                    className="p-4 text-2xl bg-main-secondary rounded-xl font-medium lg:font-semibold"
                                >
                                    {ts.text("presentationWebsites.heroCta")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect w-full bg-main-background-dark lg:pt-20 lg:pb-10">
                <div className="custom-container lg:rounded-3xl mx-auto pt-24 bg-main-background-darker md:px-4">
                    <div>
                        <div className="flex flex-col md:flex-row gap-6 md:items-center">
                            <div className="flex-1">
                                <h2 className="text-4xl md:text-5xl font-semibold mb-6 md:mb-0">
                                    {ts.text("presentationWebsites.subtitle")}
                                </h2>
                            </div>
                            <div className="flex-1 lg:me-16">
                                <ul className="flex flex-col gap-6 text-start sm:text-center md:text-end text-main-primary">
                                    {ts
                                        .raw("presentationWebsites.subtitleP")
                                        .map((p: string, i: number) => (
                                            <li key={i}>
                                                <span>{p}</span>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                        <p className="mt-10 md:mt-20 pb-6 text-main-secondary">
                            {ts.rich("presentationWebsites.turnaround")}
                        </p>
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect w-full bg-main-background-dark py-20 md:py-24 pb-6">
                <div className="custom-container lg:rounded-3xl">
                    <div>
                        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                                {ts.text("presentationWebsites.prices.title")}
                            </h2>
                            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                                {ts.text(
                                    "presentationWebsites.prices.description"
                                )}
                            </p>
                        </div>
                        <div className="space-y-8 lg:grid lg:grid-cols-2 xl:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 justify-center">
                            {ts
                                .raw("presentationWebsites.prices.packages")
                                .map((p: any, i: number) => (
                                    <div
                                        className={`${
                                            i === 2
                                                ? "lg:col-span-2 xl:col-span-1"
                                                : ""
                                        } relative flex flex-col pt-8 p-6 mx-auto max-w-lg text-center bg-main-background-darker text-white rounded-lg border border-main-secondary shadow xl:p-8`}
                                        key={i}
                                    >
                                        {i ==
                                            ts.raw(
                                                "presentationWebsites.prices.recommended.id"
                                            ) && (
                                            <div className="w-full overflow-visible">
                                                <button
                                                    data-tooltip-target="tooltip-recommended"
                                                    type="button"
                                                    className="absolute top-2 right-2 bg-main-secondary-darker text-xs font-semibold px-2 py-1 rounded"
                                                >
                                                    {ts.raw(
                                                        "presentationWebsites.prices.recommended.tag"
                                                    )}
                                                </button>
                                                <div
                                                    id="tooltip-recommended"
                                                    role="tooltip"
                                                    className="absolute z-10 left-0 -translate-x-1/2 mt-2 max-w-[240px] px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow opacity-0 invisible group-hover:visible group-hover:opacity-100"
                                                >
                                                    {ts.raw(
                                                        "presentationWebsites.prices.recommended.description"
                                                    )}
                                                    <div
                                                        className="tooltip-arrow"
                                                        data-popper-arrow
                                                    ></div>
                                                </div>
                                            </div>
                                        )}

                                        <h3 className="mb-4 text-2xl font-semibold text-main-primary">
                                            {p.title}
                                        </h3>
                                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                            {p.description}
                                        </p>
                                        <div className="flex justify-center items-baseline my-8">
                                            <span className="text-gray-500 dark:text-gray-400">
                                                {p.from}
                                            </span>
                                            <span className="ms-4 text-5xl font-extrabold text-yellow-400">
                                                {p.price}
                                            </span>
                                        </div>
                                        <ul
                                            role="list"
                                            className="mb-8 space-y-4 text-left"
                                        >
                                            {p.features.map(
                                                (f: any, ifx: number) => (
                                                    <li
                                                        className="flex items-center space-x-3"
                                                        key={ifx}
                                                    >
                                                        <svg
                                                            className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                clipRule="evenodd"
                                                            ></path>
                                                        </svg>
                                                        <span>{f}</span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                        <Link
                                            href={routes.CONTACT}
                                            className="mt-2 bg-main-secondary px-6 py-4 font-semibold rounded-md"
                                        >
                                            {p.cta}
                                        </Link>
                                        <p className="mt-2 mb-10 text-main-primary">
                                            {p.idealFor}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="window-self-contained-showcase overflow-hidden">
                {ts
                    .raw("presentationWebsites.ourProcess.list")
                    .map((p: any, i: number) => (
                        <section
                            className={`observe-navbar-intersect w-full pt-10  bg-main-background-lighter even:bg-main-background ${
                                i === 0 ? "current-scroll" : ""
                            }`}
                            key={i}
                        >
                            <div className="custom-container mx-auto h-full flex flex-col justify-center items-center">
                                <div
                                    className={`h-fit lg:h-full flex flex-col lg:flex-row ${
                                        i % 2 != 0 ? "lg:flex-row-reverse" : ""
                                    } items-center lg:justify-between gap-x-20`}
                                >
                                    <div className="w-fit flex -mb-24">
                                        <Image
                                            className="rounded-3xl"
                                            src={stepsImages[i]?.src}
                                            width={500}
                                            height={500}
                                            alt={p.step}
                                        />
                                    </div>
                                    <div className="sm:max-w-[500px] lg:sm:max-w-[750px] lg:w-1/2">
                                        <div className="w-full">
                                            <div className="flex gap-10 md:gap-16 items-center -mb-16">
                                                <div className="font-semibold rounded-full p-10 bg-main-secondary w-24 h-24 mb-6 -ms-2">
                                                    <div className="w-fit text-6xl border-b-[12px] border-main-primary">
                                                        <p className="text-6xl">
                                                            {p.no}.
                                                        </p>
                                                    </div>
                                                </div>
                                                <h3 className=" inline-block text-4xl md:text-5xl font-semibold mb-2">
                                                    <div
                                                        className="relative before:content-[''] 
                                                        before:absolute 
                                                        before:-inset-y-2 
                                                        before:-left-4 
                                                        before:w-[600px]
                                                        before:bg-main-background-darker 
                                                        before:opacity-90 
                                                        before:rounded 
                                                        before:z-0
                                                        before:min-w-full"
                                                    >
                                                        <span className="relative z-[1]">
                                                            {p.step}
                                                        </span>
                                                    </div>
                                                </h3>
                                            </div>
                                            <div className="p-10 md:p-20 bg-main-background-dark">
                                                <p className="mt-10 md:mt-6">
                                                    {p.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
            </div>

            <section className="observe-navbar-intersect w-full bg-main-background">
                <div className="custom-container mx-auto py-24">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-center">
                            {ts.text("presentationWebsites.whyUs.title")}
                        </h2>
                        <p className="mb-10">
                            {ts.text("presentationWebsites.whyUs.description")}
                        </p>
                        <div className="relative flex justify-center gap-6">
                            <ul className="flex flex-col gap-12 flex-1 z-10">
                                {ts
                                    .raw("presentationWebsites.whyUs.list")
                                    .map((r: any, i: number) => (
                                        <li key={i}>
                                            <div className="flex gap-2 items-start">
                                                <div>
                                                    <svg
                                                        className="w-6 h-6 text-gray-800 dark:text-white"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-2xl font-semibold mb-4">
                                                        {r.title}
                                                    </p>
                                                    <p className="text-2xl">
                                                        {r.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                            </ul>
                            <div className="opacity-30 lg:opacity-100 w-full lg:max-w-[350px] xl:max-w-[500px] flex-1 absolute z-0 lg:relative">
                                <WhyUsGuySVG />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect w-full bg-main-background-dark">
                <div className="custom-container mx-auto pt-24 pb-16">
                    <div>
                        <div className="mb-16">
                            <h2 className="text-5xl font-semibold mb-10 text-center xl:text-start">
                                {ts.text(
                                    "presentationWebsites.extraOptions.title"
                                )}
                            </h2>
                            <p>
                                {ts.text(
                                    "presentationWebsites.extraOptions.description"
                                )}
                            </p>
                        </div>

                        <ul className="flex flex-col gap-24">
                            {ts
                                .raw("presentationWebsites.extraOptions.list")
                                .map((o: any, i: number) => (
                                    <li
                                        className="flex flex-col md:flex-row gap-y-10 gap-x-20 even:md:flex-row-reverse items-center"
                                        key={i}
                                    >
                                        <div className="flex-1">
                                            <h3 className="text-4xl font-bold mb-2">
                                                {o.title}
                                            </h3>
                                            <p>{o.description}</p>
                                        </div>
                                        <div className="w-fit flex">
                                            <Image
                                                className="rounded-3xl"
                                                src={additionalImages[i]?.src}
                                                width={500}
                                                height={500}
                                                alt={o.title}
                                            />
                                        </div>
                                    </li>
                                ))}
                        </ul>

                        <h3 className="text-4xl font-semibold text-center mt-32">
                            {ts.rich(
                                "presentationWebsites.extraOptions.needSpecifics"
                            )}
                        </h3>
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect w-full bg-main-opacity-black-75">
                <div className="custom-container py-40 lg:py-72">
                    <div className="max-w-[1000px] mx-auto">
                        <div className="relative w-full mb-16">
                            <div className="text-center mb-6">
                                <h2 className="text-2xl text-main-primary font-medium inline-block whitespace-nowrap mb-1">
                                    {tc.text("common.ourClients")}
                                </h2>
                            </div>
                            <OurClients
                                cmsAPIBaseURL={generateWPAPIURL(
                                    "/our-clients?_fields=acf&acf_format=standard"
                                )}
                            />
                        </div>

                        <div className="text-center">
                            <h2 className="text-2xl md:text-4xl font-medium pb-10">
                                {ts.rich(
                                    "presentationWebsites.footerCta.title"
                                )}
                            </h2>
                            <p className="mb-10">
                                {ts.rich(
                                    "presentationWebsites.footerCta.description"
                                )}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
                            <Link
                                href={routes.CONTACT}
                                className="bg-main-secondary hover:bg-main-secondary-dark px-6 py-4 font-semibold rounded-md"
                            >
                                {ts.rich(
                                    "presentationWebsites.footerCta.button"
                                )}
                            </Link>
                            <Link
                                href={routes.PORTFOLIO}
                                className="bg-main-primary-dark hover:bg-main-primary-darker px-6 py-4 font-semibold rounded-md"
                            >
                                {ts.rich(
                                    "presentationWebsites.footerCta.protfolio"
                                )}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
