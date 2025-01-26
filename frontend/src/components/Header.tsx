import Image from "next/image";
import Link from "next/link";
import ContactModal from "@/components/ContactModal";
import "flowbite";

export default function Header() {
    return (
        <header className="scroll-section current-scroll w-full min-h-screen flex flex-col">
            <nav className="fixed top-0 left-0 z-50 w-full hover:bg-main-black-o-1 duration-300">
                <div className="max-w-screen-2xl w-full flex flex-wrap items-center justify-between mx-auto p-4 py-10">
                    <Link href="/">
                        <Image
                            src="/images/logo.svg"
                            alt="Imboxsoft Logo"
                            layout="intrinsic"
                            width={300}
                            height={50}
                        />
                    </Link>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div
                        className="hidden w-full lg:block lg:w-auto"
                        id="navbar-default"
                    >
                        <ul className="font-medium text-2xl flex flex-col p-4 lg:p-0 mt-4 border rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 ">
                            <li>
                                <a
                                    href="/services"
                                    className="block py-2 pl-3 pr-4 lg:hover:text-main-blue"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="block py-2 pl-3 pr-4 lg:hover:text-main-blue"
                                >
                                    Our work
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#expertise"
                                    className="block py-2 pl-3 pr-4 lg:hover:text-main-blue"
                                >
                                    Company
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/blog"
                                    className="block py-2 pl-3 pr-4 lg:hover:text-main-blue"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <button
                                    data-modal-target="contact-modal"
                                    data-modal-toggle="contact-modal"
                                    className="text-white bg-main-blue hover:bg-main-light focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded-lg text-lg px-4 py-2 text-center"
                                >
                                    Get in touch
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className="mt-32 max-w-[1500px] mx-auto px-10 py-10 flex-1 grid grid-cols-2 lg:grid-cols-4 grid-rows-3 lg:grid-rows-2 gap-6 md:gap-10">
                <div className="row-span-2 lg:row-span-2 col-span-2 lg:col-span-3 rounded-2xl bg-main-black-o-1 px-10 md:px-14 pt-14 md:pt-20 pb-14">
                    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-8">
                        <span className="text-main-light">IT</span> Services and
                        Consulting
                    </h1>
                    <h3 className="font-medium text-xl mb-8">
                        Empowering businesses through tech innovation with
                        software solutions & strategic IT consulting.
                    </h3>
                    <div className="mt-10 w-full flex flex-row gap-2 items-center">
                        <div>
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
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m8 9 3 3-3 3m5 0h3M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                                />
                            </svg>
                        </div>
                        <input
                            className="flex-1 bg-main-black-o-1 p-2.5 outline-none text-sm border-transparent rounded-lg ring-transparent focus:ring-transparent focus:border-transparent"
                            type="text"
                        />
                        <div>
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
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 12H5m14 0-4 4m4-4-4-4"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="rounded-2xl bg-main-black-o-1 p-10 row-span-1 lg:row-span-1"></div>
                <div className="rounded-2xl bg-main-black-o-1 p-10 row-span-1 lg:row-span-1"></div>
                <div className="col-span-2 lg:col-span-4 rounded-2xl bg-main-black-o-1 p-10"></div>
            </section>

            <ContactModal />
        </header>
    );
}
