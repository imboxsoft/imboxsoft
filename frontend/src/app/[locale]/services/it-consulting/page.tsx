import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function ITConsulting() {
    return (
        <div className="bg-main-background-lighter-lighter">
            <section className="observe-navbar-intersect pt-32 w-full bg-main-opacity-black-75">
                <div className="relative max-w-screen-2xl mx-auto px-4 xs:px-10 py-32">
                    <div className="md:w-2/3">
                        <h5 className="text-main-primary text-sm mb-8">
                            SERVICES
                        </h5>
                        <h1 className="text-5xl font-bold mb-4">
                            IT Consulting
                        </h1>
                        <h3 className="text-2xl">
                            We empower businesses with innovative IT solutions
                            and strategic digital planning. Our consulting
                            aligns technology investments with business goals,
                            enhances customer focus, and drives digital agility.
                            From strategic assessments to clear technology
                            roadmaps, we simplify your digital transformation
                            journey for sustainable growth.
                        </h3>
                        <div className="flex mt-6">
                            <Link
                                href="/contact"
                                className="p-6 text-2xl bg-main-secondary rounded-2xl"
                            >
                                <b>Get in touch</b>
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
            </section>

            <div className="overflow-x-hidden">
                <section className="observe-navbar-intersect w-full bg-main-background-lighter">
                    <div className="py-24">
                        <div className="max-w-screen-2xl rounded-3xl mx-auto px-10 xs:px-20 py-20 md:py-32 bg-main-background">
                            <div className="flex flex-row gap-6 items-center">
                                <div className="flex-1">
                                    <h2 className="text-5xl">
                                        Soluții software pentru nevoile afacerii
                                        tale
                                    </h2>
                                </div>
                                <div className="flex-1">
                                    <ul className="flex flex-col gap-6">
                                        <li>
                                            <span>
                                                Sprijin în fiecare etapă a
                                                proiectului, de la ideea
                                                inițială, până la implementare
                                                și, ulterior, consultanță la
                                                cerere;
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Echipe multidisciplinare, cu ani
                                                de experință în dezvoltarea de
                                                soluții custom;
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Implementare rapidă, pentru
                                                rezultate imediate.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="observe-navbar-intersect w-full bg-main-background-lighter">
                    <div className="max-w-screen-2xl mx-auto px-4 xs:px-10 pt-10 pb-24">
                        <div className="grid grid-cols-3 gap-20 mb-24">
                            <div className="flex-1 flex flex-col gap-4 items-start">
                                <span className="rounded-3xl p-4 bg-gray-500">
                                    Funcții și beneficii
                                </span>
                                <h2 className="text-4xl font-semibold">
                                    Avantajele unui software personalizat
                                </h2>
                                <p>
                                    Îmbunătățește-ți afacerea cu soluțiile
                                    noastre, adaptate nevoilor tale.
                                </p>
                            </div>
                            <div className="flex-1 flex flex-col gap-4 items-start">
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
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
                                    />
                                </svg>
                                <h4 className="text-4xl font-semibold">
                                    Rezultate imediate
                                </h4>
                                <p>
                                    Soluția personalizată special pentru
                                    businessul tău va fi implementată cât mai
                                    repede și cu promptitudine, astfel încât să
                                    poți vedea rezultatele în cel mai scurt timp
                                    posibil.
                                </p>
                            </div>
                            <div className="flex-1 flex flex-col gap-4 items-start">
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
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
                                    />
                                </svg>
                                <h4 className="text-4xl font-semibold">
                                    Rezultate imediate
                                </h4>
                                <p>
                                    Soluția personalizată special pentru
                                    businessul tău va fi implementată cât mai
                                    repede și cu promptitudine, astfel încât să
                                    poți vedea rezultatele în cel mai scurt timp
                                    posibil.
                                </p>
                            </div>
                            <div className="flex-1 flex flex-col gap-4 items-start">
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
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
                                    />
                                </svg>
                                <h4 className="text-4xl font-semibold">
                                    Rezultate imediate
                                </h4>
                                <p>
                                    Soluția personalizată special pentru
                                    businessul tău va fi implementată cât mai
                                    repede și cu promptitudine, astfel încât să
                                    poți vedea rezultatele în cel mai scurt timp
                                    posibil.
                                </p>
                            </div>
                            <div className="flex-1 flex flex-col gap-4 items-start">
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
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
                                    />
                                </svg>
                                <h4 className="text-4xl font-semibold">
                                    Rezultate imediate
                                </h4>
                                <p>
                                    Soluția personalizată special pentru
                                    businessul tău va fi implementată cât mai
                                    repede și cu promptitudine, astfel încât să
                                    poți vedea rezultatele în cel mai scurt timp
                                    posibil.
                                </p>
                            </div>
                            <div className="flex-1 flex flex-col gap-4 items-start">
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
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
                                    />
                                </svg>
                                <h4 className="text-4xl font-semibold">
                                    Rezultate imediate
                                </h4>
                                <p>
                                    Soluția personalizată special pentru
                                    businessul tău va fi implementată cât mai
                                    repede și cu promptitudine, astfel încât să
                                    poți vedea rezultatele în cel mai scurt timp
                                    posibil.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
