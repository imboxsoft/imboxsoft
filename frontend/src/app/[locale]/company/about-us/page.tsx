import Image from "next/image";

import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { ROUTE_KEYS as routes } from "@/constants/routes";

export default async function AboutUs() {
    const t = await getTranslations("company.aboutUs");

    return (
        <div>
            <div className="bg-main-opacity-black-75">
                <section className="observe-navbar-intersect pt-32 w-full">
                    <div className="relative max-w-screen-2xl mx-auto px-4 xs:px-10 py-20">
                        <div className="md:w-2/3">
                            <h1 className="text-main-primary text-sm mb-8 uppercase">
                                {t("mainTitle")}
                            </h1>
                            <h2 className="text-3xl font-bold mb-4">
                                {t("subTitle")}
                            </h2>
                            <p className="text-2xl">{t("description")}</p>
                        </div>
                        <div className="absolute right-0 bottom-0 translate-y-20">
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

                <section className="observe-navbar-intersect w-full bg-main-background-lighter">
                    <div className="max-w-screen-2xl mx-auto px-4 xs:px-10 pt-20 pb-20">
                        <div className="flex flex-row gap-32">
                            <div className="flex-1">
                                <p className="text-main-primary mb-6 font-semibold">
                                    {t("makeDiff")}
                                </p>
                                <h2 className="text-4xl font-bold mb-6">
                                    {t("ourStory")}
                                </h2>
                                <div>
                                    <div className="mb-8">
                                        <p className="mb-4">{t("ourStoryP")}</p>
                                    </div>
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-semibold mb-4">
                                            {t("whoWeHelp")}
                                        </h3>
                                        <p>{t("whoWeHelpP")}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-4">
                                            {t("ourPhilosophy")}
                                        </h3>
                                        <p>{t("ourPhilosophyP")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <Image
                                    src="/images/blog_news.webp"
                                    alt="Imboxsoft Logo"
                                    layout="intrinsic"
                                    width={300}
                                    height={50}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="observe-navbar-intersect w-full bg-main-background">
                    <div className="max-w-screen-2xl mx-auto px-4 xs:px-10 pt-32 pb-32">
                        <p className="text-main-primary mb-6 font-semibold text-center">
                            {t("meetPartners")}
                        </p>
                        <h2 className="text-4xl font-bold mb-16 text-center">
                            {t("coFounders")}
                        </h2>
                        <div className="flex flex-row flex-wrap gap-20">
                            <div className="relative flex-1 flex justify-center">
                                <div className="flex flex-col gap-6">
                                    <div className="relative h-64 min-w-52">
                                        <Image
                                            src="/images/team/bojan.jpg"
                                            alt="Picture of CEO & Co-Founder Bojan Alex-Narcis"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl">
                                            Bojan Alex-Narcis
                                        </h3>
                                        <p>CEO & Co-Founder</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex-1 flex justify-center">
                                <div className="flex flex-col gap-6">
                                    <div className="relative h-64 min-w-52">
                                        <Image
                                            src="/images/team/imbre.jpeg"
                                            alt="Picture of CTO & Co-Founder Imbre Jozsef-Jafet"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl">
                                            Imbre Jozsef-Jafet
                                        </h3>
                                        <p>CTO & Co-Founder</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="observe-navbar-intersect scroll-section lg:min-h-screen py-16 sm:py-24 lg:py-0 flex items-center bg-main-opacity-black-75">
                <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-10 md:px-16">
                    <div className="text-center mb-8 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-medium px-4 py-2">
                            {t("ctaTitle")}
                        </h2>
                    </div>
                    <div className="flex flex-col gap-16 items-center">
                        <Link
                            href={routes.CONTACT}
                            className="bg-main-secondary px-6 py-4 font-semibold rounded-md"
                        >
                            {t("ctaBtn")}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
