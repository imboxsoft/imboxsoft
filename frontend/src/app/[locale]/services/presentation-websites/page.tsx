import Image from "next/image";

import { getRichTranslations } from "@/i18n/utils";
import { ROUTE_KEYS as routes } from "@/constants/routes";

import PointsWithIcons from "@/components/PointsWithIcons";

import { Link } from "@/i18n/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ScrollManagerEvaluator } from "@/components/ScrollManager";
import SlideScrollManager from "@/utils/SlideScroll";

export default async function ITConsulting() {
    const ts = await getRichTranslations("services");
    const tc = await getRichTranslations("common");

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
            title: "WordPress Development", //ts.text("itConsulting.whatWeDo.list.digital.title"),
            descriptions: [
                //ts.text("itConsulting.whatWeDo.list.digital.description"),
                "Rapid deployment using pre-built themes or custom-built designs",
                "SEO-friendly structure with easy content management",
                "Ideal for businesses that need a beautiful online presence fast and affordably",
            ],
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
            title: "Custom Website Development", //ts.text("itConsulting.whatWeDo.list.architecture.title"),
            descriptions: [
                //ts.text("itConsulting.whatWeDo.list.architecture.description"),
                "Tailored codebases using Next.js, React, or static generators",
                "Pixel-perfect designs, optimized performance, and advanced scalability",
                "Freedom to integrate animations, API content, or custom logic",
            ],
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
            title: "Design to Code", //ts.text("itConsulting.whatWeDo.list.cloud.title"),
            descriptions: [
                //ts.text("itConsulting.whatWeDo.list.cloud.description"),
                "Got a design in Figma or Adobe? We’ll bring it to life with pixel-perfect implementation",
            ],
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
            title: "Mobile-First & Responsive Design", //ts.text("itConsulting.whatWeDo.list.automation.title"),
            descriptions: [
                //ts.text("itConsulting.whatWeDo.list.automation.description"),
                "Fully optimized across mobile, tablet, and desktop",
                "Focused on UI/UX principles for user engagement",
            ],
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

            <section className="observe-navbar-intersect w-full bg-main-background-lighter lg:pt-20 lg:pb-20">
                <div className="custom-container lg:rounded-3xl mx-auto pt-32 bg-main-background px-4">
                    <div>
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <div className="flex-1">
                                <h2 className="text-5xl">
                                    {ts.text("presentationWebsites.subtitle")}
                                </h2>
                            </div>
                            <div className="flex-1 me-20">
                                <ul className="flex flex-col gap-6 text-end text-main-secondary-lighter">
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
                        <p className="mt-20 pb-6 text-main-primary">
                            {ts.rich("presentationWebsites.turnaround")}
                        </p>
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect w-full bg-main-background-darker py-32">
                <div className="custom-container lg:rounded-3xl mx-auto">
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
                        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                <h3 className="mb-4 text-2xl font-semibold">
                                    Basic
                                </h3>
                                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                    Best option for personal use & for your next
                                    project.
                                </p>
                                <div className="flex justify-center items-baseline my-8">
                                    <span className="text-gray-500 dark:text-gray-400">
                                        de la
                                    </span>
                                    <span className="ms-4 text-5xl font-extrabold">
                                        €500
                                    </span>
                                </div>
                                <ul
                                    role="list"
                                    className="mb-8 space-y-4 text-left"
                                >
                                    <li className="flex items-center space-x-3">
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
                                        <span>Individual configuration</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
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
                                        <span>No setup, or hidden fees</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
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
                                        <span>
                                            Team size:{" "}
                                            <span className="font-semibold">
                                                1 developer
                                            </span>
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
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
                                        <span>
                                            Premium support:{" "}
                                            <span className="font-semibold">
                                                6 months
                                            </span>
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
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
                                        <span>
                                            Free updates:{" "}
                                            <span className="font-semibold">
                                                6 months
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                                <a
                                    href="#"
                                    className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                                >
                                    Get started
                                </a>
                            </div>
                            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                <h3 className="mb-4 text-2xl font-semibold">
                                    Professional
                                </h3>
                                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                    Relevant for multiple users, extended &
                                    premium support.
                                </p>
                                <div className="flex justify-center items-baseline my-8">
                                    <span className="text-gray-500 dark:text-gray-400">
                                        de la
                                    </span>
                                    <span className="ms-4 text-5xl font-extrabold">
                                        €1000
                                    </span>
                                </div>
                                <ul
                                    role="list"
                                    className="mb-8 space-y-4 text-left"
                                >
                                    <li className="flex items-center space-x-3">
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
                                        <span>Individual configuration</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
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
                                        <span>No setup, or hidden fees</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
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
                                        <span>
                                            Team size:{" "}
                                            <span className="font-semibold">
                                                10 developers
                                            </span>
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
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
                                        <span>
                                            Premium support:{" "}
                                            <span className="font-semibold">
                                                24 months
                                            </span>
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
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
                                        <span>
                                            Free updates:{" "}
                                            <span className="font-semibold">
                                                24 months
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                                <a
                                    href="#"
                                    className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                                >
                                    Get started
                                </a>
                            </div>
                            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                                <h3 className="mb-4 text-2xl font-semibold">
                                    Beyond
                                </h3>
                                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                    Best for large scale uses and extended
                                    redistribution rights.
                                </p>
                                <div className="flex justify-center items-baseline my-8">
                                    <span className="mr-2 text-5xl font-extrabold">
                                        Personalizat
                                    </span>
                                </div>
                                <ul
                                    role="list"
                                    className="mb-8 space-y-4 text-left"
                                >
                                    <li className="flex items-center space-x-3">
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
                                        <span>Individual configuration</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
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
                                        <span>No setup, or hidden fees</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
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
                                        <span>
                                            Team size:{" "}
                                            <span className="font-semibold">
                                                100+ developers
                                            </span>
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
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
                                        <span>
                                            Premium support:{" "}
                                            <span className="font-semibold">
                                                36 months
                                            </span>
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
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
                                        <span>
                                            Free updates:{" "}
                                            <span className="font-semibold">
                                                36 months
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                                <a
                                    href="#"
                                    className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                                >
                                    Get started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="window-self-contained-showcase">
                {ts
                    .raw("presentationWebsites.ourProcess.list")
                    .map((p: any, i: number) => (
                        <section
                            className={`observe-navbar-intersect w-full bg-main-background-lighter ${
                                i === 0 ? "current-scroll" : ""
                            }`}
                            key={i}
                        >
                            <div className="custom-container mx-auto h-full">
                                <div className="h-full flex items-center">
                                    {p.step}
                                </div>
                            </div>
                        </section>
                    ))}
            </div>

            {/* <section className="observe-navbar-intersect w-full bg-main-background-lighter">
                <div className="custom-container mx-auto pt-16 pb-24">
                    <div>
                        <PointsWithIcons
                            title="What We Offer"
                            subtitle={ts.text("itConsulting.whatWeDo.subtitle")}
                            description={ts.text(
                                "itConsulting.whatWeDo.description"
                            )}
                            points={whatWeDo}
                        />
                    </div>
                </div>
            </section> */}

            <section className="observe-navbar-intersect w-full bg-main-background-lighter">
                <div className="custom-container mx-auto py-32">
                    <div>
                        <h2 className="text-5xl font-semibold mb-16 text-center">
                            Why Choose Imboxsoft?
                        </h2>
                        <div className="flex justify-center gap-20">
                            <ul className="flex flex-col gap-12">
                                <li>
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
                                                    fillRule="evenodd"
                                                    d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-2xl">
                                            Strong experience with WordPress and
                                            modern frameworks like Next.js and
                                            TailwindCSS
                                        </p>
                                    </div>
                                </li>
                                <li>
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
                                                    fillRule="evenodd"
                                                    d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-2xl">
                                            Custom UI components and interactive
                                            sections
                                        </p>
                                    </div>
                                </li>
                                <li>
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
                                                    fillRule="evenodd"
                                                    d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-2xl">
                                            Clean, maintainable code & SEO
                                            optimization
                                        </p>
                                    </div>
                                </li>
                                <li>
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
                                                    fillRule="evenodd"
                                                    d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-2xl">
                                            Consulting included – we help define
                                            structure, layout, and best
                                            practices
                                        </p>
                                    </div>
                                </li>
                                <li>
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
                                                    fillRule="evenodd"
                                                    d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-2xl">
                                            Flexible maintenance & upgrade plans
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <div className="hidden lg:block">
                                <Image
                                    className="rounded-3xl"
                                    src="/images/home/why-us.avif"
                                    width={500}
                                    height={500}
                                    alt="Why Imboxsoft?"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect w-full bg-main-background">
                <div className="custom-container mx-auto py-32">
                    <div>
                        <div className="mb-32">
                            <h2 className="text-5xl font-semibold mb-4 text-center xl:text-start">
                                Opțiuni Suplimentare
                            </h2>
                            <p>
                                Vrei mai mult decât un simplu site de
                                prezentare? Îți oferim integrări și
                                funcționalități extra care fac site-ul mai
                                inteligent, mai rapid și mai eficient.
                            </p>
                        </div>

                        <ul className="flex flex-col gap-24">
                            <li className="flex flex-col md:flex-row gap-20 even:md:flex-row-reverse">
                                <div className="flex-1">
                                    <h3 className="text-4xl font-bold mb-2">
                                        Formulare de contact & integrare
                                        newsletter
                                    </h3>
                                    <p>
                                        Simplifică procesul de comunicare cu
                                        vizitatorii și colectează lead-uri prin
                                        formulare interactive sau abonări la
                                        newsletter integrate direct în site.
                                    </p>
                                </div>
                                <div className="w-fit flex">
                                    <Image
                                        className="rounded-3xl"
                                        src="/images/home/why-us.avif"
                                        width={500}
                                        height={500}
                                        alt="Formulare și newsletter"
                                    />
                                </div>
                            </li>

                            <li className="flex flex-col md:flex-row gap-20 even:md:flex-row-reverse">
                                <div className="flex-1">
                                    <h3 className="text-4xl font-bold mb-2">
                                        Secțiune Blog
                                    </h3>
                                    <p>
                                        Îți oferim posibilitatea de a publica
                                        articole, noutăți sau ghiduri pentru
                                        clienți, crescând vizibilitatea
                                        brandului și autoritatea online.
                                    </p>
                                </div>
                                <div className="w-fit">
                                    <Image
                                        className="rounded-3xl"
                                        src="/images/home/why-us.avif"
                                        width={500}
                                        height={500}
                                        alt="Blog setup"
                                    />
                                </div>
                            </li>

                            <li className="flex flex-col md:flex-row gap-20 even:md:flex-row-reverse">
                                <div className="flex-1">
                                    <h3 className="text-4xl font-bold mb-2">
                                        Optimizare SEO & Performanță
                                    </h3>
                                    <p>
                                        Ne asigurăm că site-ul tău se încarcă
                                        rapid, respectă bunele practici SEO și
                                        este ușor de găsit de către clienți în
                                        Google.
                                    </p>
                                </div>
                                <div className="w-fit">
                                    <Image
                                        className="rounded-3xl"
                                        src="/images/home/why-us.avif"
                                        width={500}
                                        height={500}
                                        alt="Optimizare SEO"
                                    />
                                </div>
                            </li>

                            <li className="flex flex-col md:flex-row gap-20 even:md:flex-row-reverse">
                                <div className="flex-1">
                                    <h3 className="text-4xl font-bold mb-2">
                                        Google Analytics & Search Console
                                    </h3>
                                    <p>
                                        Primești acces la instrumente
                                        profesionale de monitorizare a
                                        traficului și performanței site-ului,
                                        pentru a înțelege mai bine
                                        comportamentul vizitatorilor.
                                    </p>
                                </div>
                                <div className="w-fit">
                                    <Image
                                        className="rounded-3xl"
                                        src="/images/home/why-us.avif"
                                        width={500}
                                        height={500}
                                        alt="Google Analytics"
                                    />
                                </div>
                            </li>

                            <li className="flex flex-col md:flex-row gap-20 even:md:flex-row-reverse">
                                <div className="flex-1">
                                    <h3 className="text-4xl font-bold mb-2">
                                        Multilingual / Site în mai multe limbi
                                    </h3>
                                    <p>
                                        Oferim suport pentru site-uri
                                        multilingve, cu sistem de traduceri ușor
                                        de gestionat și optimizat pentru SEO
                                        internațional.
                                    </p>
                                    <p>
                                        *Ajută la extinderea pieței și
                                        îmbunătățirea experienței utilizatorului
                                        internațional.
                                    </p>
                                </div>
                                <div className="w-fit">
                                    <Image
                                        className="rounded-3xl"
                                        src="/images/home/why-us.avif"
                                        width={500}
                                        height={500}
                                        alt="Google Analytics"
                                    />
                                </div>
                            </li>

                            <li className="flex flex-col md:flex-row gap-20 even:md:flex-row-reverse">
                                <div className="flex-1">
                                    <h3 className="text-4xl font-bold mb-2">
                                        Panou de administrare personalizat (CMS)
                                    </h3>
                                    <p>
                                        Îți livrăm un panou intuitiv, complet
                                        adaptat conținutului tău — fără funcții
                                        inutile și fără bătăi de cap.
                                    </p>
                                    <p>
                                        *Pentru clienți care vor control complet
                                        fără să depindă de dezvoltatori.
                                    </p>
                                </div>
                                <div className="w-fit">
                                    <Image
                                        className="rounded-3xl"
                                        src="/images/home/why-us.avif"
                                        width={500}
                                        height={500}
                                        alt="Google Analytics"
                                    />
                                </div>
                            </li>

                            <li className="flex flex-col md:flex-row gap-20 even:md:flex-row-reverse">
                                <div className="flex-1">
                                    <h3 className="text-4xl font-bold mb-2">
                                        Pagini dinamice sau catalog produse /
                                        servicii
                                    </h3>
                                    <p>
                                        Configurăm template-uri dinamice pentru
                                        adăugare rapidă de produse, servicii sau
                                        portofolii, fără a modifica codul.
                                    </p>
                                    <p>
                                        *Pentru site-uri care trebuie să scaleze
                                        rapid fără refactor.
                                    </p>
                                </div>
                                <div className="w-fit">
                                    <Image
                                        className="rounded-3xl"
                                        src="/images/home/why-us.avif"
                                        width={500}
                                        height={500}
                                        alt="Google Analytics"
                                    />
                                </div>
                            </li>

                            <li className="flex flex-col md:flex-row gap-20 even:md:flex-row-reverse">
                                <div className="flex-1">
                                    <h3 className="text-4xl font-bold mb-2">
                                        Securitate & GDPR
                                    </h3>
                                    <p>
                                        Implementăm măsuri de securitate și
                                        module GDPR-compliant: cookie banner,
                                        politici de confidențialitate, protecție
                                        date.
                                    </p>
                                    <p>*Un must-have pentru companii.</p>
                                </div>
                                <div className="w-fit">
                                    <Image
                                        className="rounded-3xl"
                                        src="/images/home/why-us.avif"
                                        width={500}
                                        height={500}
                                        alt="Google Analytics"
                                    />
                                </div>
                            </li>

                            <li className="flex flex-col md:flex-row gap-20 even:md:flex-row-reverse">
                                <div className="flex-1">
                                    <h3 className="text-4xl font-bold mb-2">
                                        Backup automat & mentenanță tehnică
                                    </h3>
                                    <p>
                                        Ne ocupăm de mentenanță periodică,
                                        actualizări și backup-uri automate
                                        pentru ca tu să te concentrezi pe
                                        afacere.
                                    </p>
                                    <p>
                                        *Ideal pentru clienți care vor liniște
                                        pe termen lung.
                                    </p>
                                </div>
                                <div className="w-fit">
                                    <Image
                                        className="rounded-3xl"
                                        src="/images/home/why-us.avif"
                                        width={500}
                                        height={500}
                                        alt="Google Analytics"
                                    />
                                </div>
                            </li>
                        </ul>

                        <h3 className="text-5xl font-medium text-center mt-32">
                            Ai nevoie de ceva mai specific? Spune-ne ce îți
                            dorești, iar noi venim cu soluția potrivită.
                        </h3>
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect w-full bg-main-opacity-black-75">
                <div className="custom-container py-40 lg:py-72">
                    <div className="max-w-[1000px] mx-auto">
                        <div className="text-center">
                            <h2 className="text-2xl md:text-4xl font-medium pb-10">
                                {/* {tc.text(
                                    "common.cta.descriptions.happyToBuild"
                                )} */}
                                Pregătit să îți crești vizibilitatea online?
                            </h2>
                            <p className="mb-10">
                                Contactează-ne pentru o ofertă personalizată.
                                Fără obligații, doar soluții clare.
                            </p>
                        </div>
                        <div className="flex flex-col gap-16 items-center">
                            <Link
                                href={routes.CONTACT}
                                className="bg-main-secondary px-6 py-4 font-semibold rounded-md"
                            >
                                {tc.text("common.cta.btn.bookConsultaion")}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* <ScrollManagerEvaluator /> */}
        </div>
    );
}
