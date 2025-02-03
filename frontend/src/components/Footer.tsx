import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="scroll-section w-full p-4 pt-10 md:pt-20 md:pb-10 bg-main-black-o-1">
            <div className="max-w-screen-xl mx-auto sm:flex sm:items-center sm:justify-between">
                <Link href="/" className="flex items-center mb-4 sm:mb-0">
                    <Image
                        src="/images/logo_light.svg"
                        className="h-8 mr-3"
                        layout="intrinsic"
                        width={300}
                        height={50}
                        alt="Imboxsoft Logo"
                    />
                </Link>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
                    <li>
                        <Link
                            href="/about"
                            className="mr-4 hover:underline md:mr-6"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.linkedin.com/company/imboxsoft"
                            className="mr-4 hover:underline md:mr-6"
                            target="_blank"
                        >
                            Follow Us on Linkedin
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:underline">
                            Contact Us
                        </Link>
                    </li>
                </ul>
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
