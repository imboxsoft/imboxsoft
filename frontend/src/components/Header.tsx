import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 left-0 z-50 w-full">
            <nav className="w-full hover:bg-white duration-300">
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
                        <ul className="font-medium text-2xl flex flex-col p-4 lg:p-0 mt-4 border rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 bg-white bg-opacity-70">
                            <li>
                                <Link
                                    href="/"
                                    className="block py-2 pl-3 pr-4 text-gray-900 hover:text-white lg:hover:text-blue-700 hover:bg-blue-700 lg:hover:bg-transparent"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#about"
                                    className="block py-2 pl-3 pr-4 text-gray-900 hover:text-white lg:hover:text-blue-700 hover:bg-blue-700 lg:hover:bg-transparent"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#expertise"
                                    className="block py-2 pl-3 pr-4 text-gray-900 hover:text-white lg:hover:text-blue-700 hover:bg-blue-700 lg:hover:bg-transparent"
                                >
                                    Expertise
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#clients"
                                    className="block py-2 pl-3 pr-4 text-gray-900 hover:text-white lg:hover:text-blue-700 hover:bg-blue-700 lg:hover:bg-transparent"
                                >
                                    Clients
                                </a>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="block py-2 pl-3 pr-4 text-gray-900 hover:text-white lg:hover:text-blue-700 hover:bg-blue-700 lg:hover:bg-transparent"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
