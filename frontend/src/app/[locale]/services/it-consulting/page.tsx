import Image from "next/image";

import { getRichTranslations } from "@/i18n/utils";
import { ROUTE_KEYS as routes } from "@/constants/routes";

import PointsWithIcons from "@/components/PointsWithIcons";

import { Link } from "@/i18n/navigation";

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
    ];

    return (
        <div>
            <section className="observe-navbar-intersect pt-32 w-full bg-main-opacity-black-75">
                <div className="relative custom-container py-32">
                    <div>
                        <div className="md:w-2/3">
                            <p className="text-main-primary text-sm mb-8 uppercase">
                                {ts.text("services.shortTitle")}
                            </p>
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
                        <div className="absolute right-0 bottom-0 translate-y-20 z-20">
                            <Image
                                src="/images/common/man.png"
                                alt="Imboxsoft Logo"
                                layout="intrinsic"
                                width={300}
                                height={50}
                            />
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
                        <h2 className="text-5xl font-semibold mb-16 text-center">
                            What Sets Us Apart
                        </h2>
                        <div className="flex justify-center">
                            <ul className="flex flex-col gap-12">
                                <li>
                                    <div>
                                        <h3 className="text-2xl">
                                            <span className="font-semibold">
                                                10+ Years Technical Expertise
                                            </span>{" "}
                                            — Real developers, real strategy.
                                        </h3>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h3 className="text-2xl">
                                            <span className="font-semibold">
                                                Business-Minded Advice
                                            </span>{" "}
                                            — We understand more than just code.
                                        </h3>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h3 className="text-2xl">
                                            <span className="font-semibold">
                                                Scalable Solutions
                                            </span>{" "}
                                            — We prepare you for growth.
                                        </h3>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h3 className="text-2xl">
                                            <span className="font-semibold">
                                                Lean & Actionable
                                            </span>{" "}
                                            — No fluff, just smart
                                            recommendations.
                                        </h3>
                                    </div>
                                </li>
                            </ul>
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
                        <div className="flex justify-center">
                            <ul className="flex flex-col gap-12">
                                <li>
                                    <div>
                                        <h3 className="text-2xl">
                                            {ts.text(
                                                "itConsulting.whenToReachOut.list.techStack"
                                            )}
                                        </h3>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h3 className="text-2xl">
                                            {ts.text(
                                                "itConsulting.whenToReachOut.list.workflows"
                                            )}
                                        </h3>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h3 className="text-2xl">
                                            {ts.text(
                                                "itConsulting.whenToReachOut.list.saas"
                                            )}
                                        </h3>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h3 className="text-2xl">
                                            {ts.text(
                                                "itConsulting.whenToReachOut.list.guidance"
                                            )}
                                        </h3>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h3 className="text-2xl">
                                            {ts.text(
                                                "itConsulting.whenToReachOut.list.thirdParty"
                                            )}
                                        </h3>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h3 className="text-2xl">
                                            {ts.text(
                                                "itConsulting.whenToReachOut.list.scaling"
                                            )}
                                        </h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect w-full bg-main-opacity-black-75">
                <div className="custom-container py-40 lg:py-72">
                    <div className="max-w-[1000px] mx-auto">
                        <div className="text-center">
                            <h2 className="text-2xl md:text-4xl font-medium pb-10">
                                {tc.text(
                                    "common.cta.descriptions.happyToBuild"
                                )}
                            </h2>
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
        </div>
    );
}
