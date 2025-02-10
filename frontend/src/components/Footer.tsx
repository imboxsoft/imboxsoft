import Link from "next/link";
import Image from "next/image";
import routes from "@/constants/routes";

export default function Footer() {
    return (
        <footer className="scroll-section w-full p-4 pt-10 md:pt-20 md:pb-10 bg-main-opacity-black-75">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-32">
                    <div>
                        <Link
                            href="/"
                            className="flex items-center mb-4 sm:mb-0"
                        >
                            <Image
                                src="/images/logo_light.svg"
                                className="h-8 mr-3"
                                layout="intrinsic"
                                width={300}
                                height={50}
                                alt="Imboxsoft Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-20 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Sitemap
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li>
                                    <Link
                                        href={routes.PORTFOLIO}
                                        className="mr-4 hover:underline md:mr-6"
                                    >
                                        Our work
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={routes.SOFTWARE_DEVELOPMENT}
                                        className="mr-4 hover:underline md:mr-6"
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={routes.ABOUT_US}
                                        className="mr-4 hover:underline md:mr-6"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={routes.INSIGHTS}
                                        className="mr-4 hover:underline md:mr-6"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={routes.CONTACT}
                                        className="mr-4 hover:underline md:mr-6"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Socials
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li>
                                    <Link
                                        href={
                                            process.env.LINKED_IN_PAGE ||
                                            "https://www.linkedin.com/company/imboxsoft"
                                        }
                                        className="mr-4 hover:underline md:mr-6"
                                        target="_blank"
                                    >
                                        Linkedin
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Legal
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li>
                                    <Link
                                        href={routes.ABOUT_US}
                                        className="mr-4 hover:underline md:mr-6"
                                    >
                                        Terms & Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={routes.ABOUT_US}
                                        className="mr-4 hover:underline md:mr-6"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={routes.ABOUT_US}
                                        className="mr-4 hover:underline md:mr-6"
                                    >
                                        Cookies
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm sm:text-center">
                ©<span className="current-year-el"></span>
                <Link href="/" className="hover:underline">
                    Imboxsoft™
                </Link>
                . All Rights Reserved
            </span>
        </footer>
    );
}
