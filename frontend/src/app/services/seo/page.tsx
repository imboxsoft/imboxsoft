import Image from "next/image";
import Link from "next/link";

export default function SEO() {
    return (
        <div className="bg-main-medium">
            <section className="observe-navbar-intersect pt-24 lg:pt-32 w-full bg-main-medium">
                <div className="relative max-w-screen-xl mx-auto px-4 xs:px-10 pb-20 lg:py-32">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="flex-1 text-center lg:text-start">
                            <h5 className="text-main-primary text-sm mb-8">
                                SERVICES
                            </h5>
                            <h1 className="text-5xl font-bold mb-4">
                                Free SEO Audit
                            </h1>
                            <h3 className="text-2xl">
                                Get the exact keywords your competitors are
                                ranking with.
                            </h3>
                            <h3 className="text-2xl">
                                No Cost or Future Obligation. Guaranteed!
                            </h3>
                        </div>
                        <div className="flex flex-row justify-center">
                            <form
                                action="#"
                                className="grid grid-cols-2 gap-6 w-[500px]"
                            >
                                <div>
                                    <input
                                        type="text"
                                        id="name"
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        id="email"
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                        placeholder="Your email"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        id="brand"
                                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                        placeholder="Let us who you are"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        id="website"
                                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                        placeholder="Your website"
                                        required
                                    />
                                </div>
                                <div className="col-span-2">
                                    <textarea
                                        id="message"
                                        rows={6}
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Your SEO expectations..."
                                    ></textarea>
                                </div>
                                <div className="col-span-2 flex justify-center lg:justify-start">
                                    <button
                                        type="submit"
                                        className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-main-secondary sm:w-fit hover:bg-main-secondary-darker focus:ring-4 focus:outline-none focus:ring-primary-300"
                                    >
                                        Send request
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sticky z-10 top-20 xl:top-24 bg-main-secondary py-6">
                <div className="relative max-w-screen-xl mx-auto">
                    <div className="flex flex-row overflow-x-auto gap-10 text-white px-4 xs:px-10 justify-between">
                        <div className="flex flex-col gap-2 items-center whitespace-nowrap">
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                                <path
                                    fill-rule="evenodd"
                                    d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                                    clip-rule="evenodd"
                                />
                                <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
                            </svg>
                            <span>CUSTOM DESIGN</span>
                        </div>
                        <div className="flex flex-col gap-2 items-center whitespace-nowrap">
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                                <path
                                    fill-rule="evenodd"
                                    d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                                    clip-rule="evenodd"
                                />
                                <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
                            </svg>
                            <span>CUSTOM DESIGN</span>
                        </div>
                        <div className="flex flex-col gap-2 items-center whitespace-nowrap">
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                                <path
                                    fill-rule="evenodd"
                                    d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                                    clip-rule="evenodd"
                                />
                                <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
                            </svg>
                            <span>CUSTOM DESIGN</span>
                        </div>
                        <div className="flex flex-col gap-2 items-center whitespace-nowrap">
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                                <path
                                    fill-rule="evenodd"
                                    d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                                    clip-rule="evenodd"
                                />
                                <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
                            </svg>
                            <span>CUSTOM DESIGN</span>
                        </div>
                        <div className="flex flex-col gap-2 items-center whitespace-nowrap">
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                                <path
                                    fill-rule="evenodd"
                                    d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                                    clip-rule="evenodd"
                                />
                                <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
                            </svg>
                            <span>CUSTOM DESIGN</span>
                        </div>
                        <div className="flex flex-col gap-2 items-center whitespace-nowrap">
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                                <path
                                    fill-rule="evenodd"
                                    d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                                    clip-rule="evenodd"
                                />
                                <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
                            </svg>
                            <span>CUSTOM DESIGN</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="overflow-x-hidden">
                <section className="observe-navbar-intersect w-full bg-gray-800">
                    <div className="py-24">
                        <div className="max-w-screen-xl rounded-3xl mx-auto px-10 xs:px-20 py-20 md:py-32 bg-gray-900">
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
                <section className="observe-navbar-intersect w-full bg-gray-800">
                    <div className="lg:pb-32">
                        <div className="max-w-screen-xl rounded-3xl mx-auto bg-gray-900 pt-10 md:pt-0 pb-20 md:pb-0">
                            <div className="flex flex-col gap-20 md:gap-10 lg:gap-40 md:[&>*:nth-child(even)]:flex-row-reverse">
                                <div className="relative flex flex-col md:flex-row gap-10">
                                    <div className="flex-1 px-6 xs:px-16 pt-24 pb-6 md:pb-16 flex flex-col items-center md:items-start text-center md:text-left">
                                        <h2 className="text-3xl font-semibold mb-6">
                                            Creating one platform to manage 6
                                            sites led to a 400% revenue growth
                                        </h2>
                                        <p>
                                            Pet Media Group centralized the
                                            management of 6 pet marketplaces
                                            worth $12M by architecting a new
                                            platform and migrating millions of
                                            data points to it with The Software
                                            House.
                                        </p>
                                    </div>
                                    <div className="relative w-full md:w-2/5 flex">
                                        <div className="flex relative flex-wrap items-center w-full">
                                            <div className="w-full relative mx-10 md:mx-0">
                                                <div className="md:-mt-[10%] md:-mr-[15%] md:-mb-[10%] md:-ml-[13%]">
                                                    <Image
                                                        src="/images/blog_news.webp"
                                                        alt="Imboxsoft Logo"
                                                        fill
                                                        className="!relative w-3/4 h-auto object-cover rounded-md"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex flex-col md:flex-row gap-10">
                                    <div className="flex-1 p-6 md:p-16 flex flex-col items-center md:items-start text-center md:text-left">
                                        <h2 className="text-3xl font-semibold mb-6">
                                            Creating one platform to manage 6
                                            sites led to a 400% revenue growth
                                        </h2>
                                        <p>
                                            Pet Media Group centralized the
                                            management of 6 pet marketplaces
                                            worth $12M by architecting a new
                                            platform and migrating millions of
                                            data points to it with The Software
                                            House.
                                        </p>
                                    </div>
                                    <div className="relative w-full md:w-2/5 flex">
                                        <div className="flex relative flex-wrap items-center w-full">
                                            <div className="w-full relative mx-10 md:mx-0">
                                                <div className="md:-mt-[10%] md:-mr-[15%] md:-mb-[10%] md:-ml-[13%]">
                                                    <Image
                                                        src="/images/blog_news.webp"
                                                        alt="Imboxsoft Logo"
                                                        fill
                                                        className="!relative w-3/4 h-auto object-cover rounded-md"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex flex-col md:flex-row gap-10">
                                    <div className="flex-1 px-6 md:px-16 pt-6 md:pt-16 pb-6 md:pb-24 flex flex-col items-center md:items-start text-center md:text-left">
                                        <h2 className="text-3xl font-semibold mb-6">
                                            Creating one platform to manage 6
                                            sites led to a 400% revenue growth
                                        </h2>
                                        <p>
                                            Pet Media Group centralized the
                                            management of 6 pet marketplaces
                                            worth $12M by architecting a new
                                            platform and migrating millions of
                                            data points to it with The Software
                                            House.
                                        </p>
                                    </div>
                                    <div className="relative w-full md:w-2/5 flex">
                                        <div className="flex relative flex-wrap items-center w-full">
                                            <div className="w-full relative mx-10 md:mx-0">
                                                <div className="md:-mt-[10%] md:-mr-[15%] md:-mb-[10%] md:-ml-[13%]">
                                                    <Image
                                                        src="/images/blog_news.webp"
                                                        alt="Imboxsoft Logo"
                                                        fill
                                                        className="!relative w-3/4 h-auto object-cover rounded-md"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-screen-xl mx-auto px-4 xs:px-10 pt-10 pb-24">
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
