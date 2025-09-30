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
                        strokeWidth="2"
                        d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                    />
                    <path
                        stroke="currentColor"
                        strokeWidth="2"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
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
                        d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"
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
                        d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"
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
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
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
                        d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
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
                        d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
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
                        strokeWidth="2"
                        d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"
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
                        strokeWidth="2"
                        d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                </svg>
            ),
            title: ts.text("itConsulting.whatWeDo.list.maintenance.title"),
            description: ts.text(
                "itConsulting.whatWeDo.list.maintenance.description"
            ),
        },
    ];

    const whyUs = [
        <>
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
            />
        </>,
        <>
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
            />
        </>,
        <>
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
        </>,
        <>
            <path
                stroke="currentColor"
                strokeWidth="2"
                d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
            />
        </>,
        <>
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z"
            />
        </>,
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
                                                        {whyUs[index]}
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
