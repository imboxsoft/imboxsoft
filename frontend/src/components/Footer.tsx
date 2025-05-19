import Link from "next/link";
import Image from "next/image";
import routes from "@/constants/routes";

export default function Footer() {
    const today = new Date().getFullYear().toString();

    return (
        <footer className="scroll-section w-full pt-10 md:pt-20 md:pb-10 bg-main-opacity-black-75">
            <div className="custom-container">
                <div>
                    <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-32">
                        <div>
                            <Link
                                href="/"
                                className="flex items-center mb-4 sm:mb-0"
                            >
                                <Image
                                    src="/images/logo/logo_light.svg"
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
                                <h2 className="mb-6 text-base font-semibold text-white uppercase border-b-2 border-main-primary">
                                    Sitemap
                                </h2>
                                <ul className="flex flex-col gap-4 font-medium">
                                    <li>
                                        <Link
                                            href={routes.PORTFOLIO}
                                            className="hover:underline text-slate-50 hover:text-main-primary"
                                        >
                                            Our work
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={routes.SERVICES}
                                            className="hover:underline text-slate-50 hover:text-main-primary"
                                        >
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={routes.ABOUT_US}
                                            className="hover:underline text-slate-50 hover:text-main-primary"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={routes.INSIGHTS}
                                            className="hover:underline text-slate-50 hover:text-main-primary"
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={routes.CONTACT}
                                            className="hover:underline text-slate-50 hover:text-main-primary"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-base font-semibold text-white uppercase border-b-2 border-main-primary">
                                    Socials
                                </h2>
                                <ul className="flex flex-col gap-4 font-medium">
                                    <li>
                                        <Link
                                            href="https://www.linkedin.com/company/imboxsoft"
                                            className="hover:underline text-slate-50 hover:text-main-primary"
                                            target="_blank"
                                        >
                                            Linkedin
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-base font-semibold text-white uppercase border-b-2 border-main-primary">
                                    Legal
                                </h2>
                                <ul className="flex flex-col gap-4 font-medium">
                                    <li>
                                        <Link
                                            href={routes.ABOUT_US}
                                            className="hover:underline text-slate-50 hover:text-main-primary"
                                        >
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={routes.ABOUT_US}
                                            className="hover:underline text-slate-50 hover:text-main-primary"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={routes.ABOUT_US}
                                            className="hover:underline text-slate-50 hover:text-main-primary"
                                        >
                                            Cookies
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="custom-container pb-6">
                <div>
                    <span className="block text-base sm:text-center">
                        <span>© Copyright {today} </span>
                        <Link
                            href="/"
                            className="hover:hover:underline text-main-secondary"
                        >
                            Imboxsoft™
                        </Link>
                        . All Rights Reserved
                    </span>
                </div>
            </div>
        </footer>
    );
}
