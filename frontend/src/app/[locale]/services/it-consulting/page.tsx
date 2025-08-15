import Image from "next/image";

import { getRichTranslations } from "@/i18n/utils";
import { ROUTE_KEYS as routes } from "@/constants/routes";

import PointsWithIcons from "@/components/PointsWithIcons";

import { Link } from "@/i18n/navigation";
import { CallUsGuySVG } from "@/components/SVGs";
import { ResponsiveFAQ } from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";

export default async function ITConsulting() {
    const ts = await getRichTranslations("services");
    const tc = await getRichTranslations("common");

    const faqs = ts.raw("itConsulting.faq");

    const whatWeDo = [
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
            title: ts.text("itConsulting.whatWeDo.list.digital.title"),
            description: ts.text(
                "itConsulting.whatWeDo.list.digital.description"
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
            title: ts.text("itConsulting.whatWeDo.list.architecture.title"),
            description: ts.text(
                "itConsulting.whatWeDo.list.architecture.description"
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
            title: ts.text("itConsulting.whatWeDo.list.cloud.title"),
            description: ts.text(
                "itConsulting.whatWeDo.list.cloud.description"
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
            title: ts.text("itConsulting.whatWeDo.list.automation.title"),
            description: ts.text(
                "itConsulting.whatWeDo.list.automation.description"
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
            title: ts.text("itConsulting.whatWeDo.list.security.title"),
            description: ts.text(
                "itConsulting.whatWeDo.list.security.description"
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
            title: ts.text("itConsulting.whatWeDo.list.software.title"),
            description: ts.text(
                "itConsulting.whatWeDo.list.software.description"
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
            title: ts.text("itConsulting.whatWeDo.list.administration.title"),
            description: ts.text(
                "itConsulting.whatWeDo.list.administration.description"
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
            title: ts.text("itConsulting.whatWeDo.list.optimization.title"),
            description: ts.text(
                "itConsulting.whatWeDo.list.optimization.description"
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
            title: ts.text("itConsulting.whatWeDo.list.maintenance.title"),
            description: ts.text(
                "itConsulting.whatWeDo.list.maintenance.description"
            ),
        },
    ];

    return (
        <div>
            <section className="observe-navbar-intersect pt-32 w-full bg-main-opacity-black-75">
                <div className="relative custom-container py-32">
                    <div>
                        <div className="md:w-2/3">
                            <div className="mb-8">
                                <Breadcrumbs
                                    pageTitle={ts.text("services.shortTitle")}
                                />
                            </div>
                            <h1 className="text-5xl font-bold mb-4">
                                {ts.text("itConsulting.title")}
                            </h1>
                            <p className="text-2xl">
                                {ts.text("itConsulting.description")}
                            </p>
                            <div className="flex mt-6">
                                <Link
                                    href="/contact"
                                    className="p-4 text-2xl bg-main-secondary rounded-xl font-medium lg:font-semibold"
                                >
                                    {tc.text("common.cta.btn.letsTalkStrategy")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect w-full bg-main-background-lighter lg:pt-20 lg:pb-20">
                <div className="custom-container lg:rounded-3xl mx-auto py-32 bg-main-background">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="flex-1">
                            <h2 className="text-5xl">
                                {ts.text("itConsulting.subtitle")}
                            </h2>
                        </div>
                        <div className="flex-1">
                            <ul className="flex flex-col gap-6">
                                {ts
                                    .raw("itConsulting.subtitleP")
                                    .map((p: string, i: number) => (
                                        <li key={i}>
                                            <span>{p}</span>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect w-full bg-main-background-lighter">
                <div className="custom-container mx-auto pt-16 pb-24">
                    <div>
                        <PointsWithIcons
                            title={ts.text("itConsulting.whatWeDo.title")}
                            subtitle={ts.text("itConsulting.whatWeDo.subtitle")}
                            description={ts.text(
                                "itConsulting.whatWeDo.description"
                            )}
                            points={whatWeDo}
                        />
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect w-full bg-main-background">
                <div className="custom-container mx-auto py-32">
                    <div>
                        <div className="flex flex-col xl:flex-row gap-32">
                            <div className="xl:w-fit">
                                <h2 className="text-5xl font-semibold mb-16 text-center xl:text-left">
                                    {ts.text(
                                        "itConsulting.whoDoWeAddressTo.title"
                                    )}
                                </h2>
                                <div className="flex gap-20 justify-center xl:justify-start">
                                    <ul className="flex flex-col gap-12">
                                        {ts
                                            .raw(
                                                "itConsulting.whoDoWeAddressTo.list"
                                            )
                                            .map((el: any, index: number) => (
                                                <li key={index}>
                                                    <div className="flex gap-2 items-center">
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
                                                                    fill-rule="evenodd"
                                                                    d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                                                    clip-rule="evenodd"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <p className="text-base">
                                                            {el}
                                                        </p>
                                                    </div>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="flex-1">
                                <div className="mb-10">
                                    <h2 className="text-5xl font-semibold mb-16 text-center xl:text-start">
                                        {ts.text("itConsulting.whyUs.title")}
                                    </h2>
                                    <p>
                                        {ts.text(
                                            "itConsulting.whyUs.description"
                                        )}
                                    </p>
                                </div>

                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                                    {ts
                                        .raw("itConsulting.whyUs.list")
                                        .map((el: any, index: number) => (
                                            <li key={index}>
                                                <div className="p-6 bg-main-background-lighter w-fit mb-6">
                                                    <svg
                                                        className="w-8 h-8 text-white"
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
                                                </div>
                                                <h3 className="text-2xl font-semibold mb-2">
                                                    {el.title}
                                                </h3>
                                                <p>{el.description}</p>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect w-full bg-main-background-lighter">
                <div className="custom-container mx-auto py-32">
                    <div>
                        <h2 className="text-5xl font-semibold mb-16 text-center">
                            {ts.text("itConsulting.whenToReachOut.title")}
                        </h2>
                        <div className="flex justify-center gap-10">
                            <ul className="flex flex-col gap-12">
                                {ts
                                    .raw("itConsulting.whenToReachOut.list")
                                    .map((el: any, index: number) => (
                                        <li key={index}>
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
                                                            fill-rule="evenodd"
                                                            d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-semibold">
                                                        {el.title}
                                                    </h3>
                                                    <p className="text-base">
                                                        {el.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                            </ul>
                            <div className="hidden lg:block w-full max-w-64 lg:max-w-96">
                                <CallUsGuySVG />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect w-full bg-main-opacity-black-75">
                <div className="custom-container pt-32">
                    <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20 justify-between">
                        <div className="md:min-w-[400px] flex-1 order-1 md:order-2 lg:order-1">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                                    {ts.text("itConsulting.cta.title")}
                                </h2>
                                <p>{ts.text("itConsulting.cta.description")}</p>
                            </div>
                            <div className="w-full max-w-[650px] mx-auto">
                                <ContactForm
                                    buttonText={ts.text(
                                        "itConsulting.cta.button"
                                    )}
                                />
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
