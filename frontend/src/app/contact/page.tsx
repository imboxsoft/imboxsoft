import Image from "next/image";
import Link from "next/link";

import { ScrollManagerEvaluator } from "@/components/ScrollManager";

export default function Contact() {
    return (
        <div className="observe-navbar-intersect w-full h-full bg-main-opacity-black-50 ">
            <div className="xl:pt-32 max-w-screen-xl mx-auto">
                <section className="xl:rounded-xl">
                    <div className="pt-32 xl:pt-16 pb-16 px-12">
                        <div className="max-w-[750px] mx-auto mb-20">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
                                Contact Us
                            </h2>
                            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                                Need help with a technical issue? Want to
                                partner up or are you interested in how we can
                                be of service to you, let us know through the
                                contact form below.
                            </p>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-20">
                            <div className="w-full flex flex-row flex-wrap gap-16 order-2 lg:order-1">
                                <div className="w-full">
                                    <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
                                        Locations
                                    </h3>
                                    <div className="w-full flex flex-row justify-center lg:justify-start">
                                        <div className="w-full max-w-[500px] flex flex-col sm:flex-row bg-main-opacity-white-20 rounded-2xl overflow-hidden">
                                            <div className="flex-1 order-2 sm:order-1">
                                                <div className="py-6 px-6">
                                                    <h4 className="font-semibold text-xl mb-1">
                                                        România
                                                    </h4>
                                                    <p>
                                                        Piața Republicii, Nr. 38
                                                        B, Târgu Mureș, Mureș,
                                                        540100
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="relative flex-1 order-1 sm:order-2">
                                                <Image
                                                    className="w-full !relative sm:!absolute !h-[200px] sm:!h-full object-cover"
                                                    src="/images/blog_news.webp"
                                                    fill
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
                                        Contacts
                                    </h3>
                                    <div className="w-full flex flex-row justify-center lg:justify-start">
                                        <div className="flex flex-row flex-wrap gap-6">
                                            <div className="p-4 bg-main-opacity-white-20 rounded-2xl">
                                                <h4 className="font-semibold text-xl mb-1">
                                                    E-mail
                                                </h4>
                                                <p>office@imboxsoft.com</p>
                                            </div>
                                            <div className="p-4 bg-main-opacity-white-20 rounded-2xl">
                                                <h4 className="font-semibold text-xl mb-1">
                                                    Phone
                                                </h4>
                                                <p>+40 722 370 944</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-center w-full lg:min-w-[400px] max-w-[600px] order-1 lg:order-2">
                                <form action="#" className="w-full">
                                    <div className="w-full grid grid-cols-2 gap-6 sm:gap-8">
                                        <div className="col-span-2 xs:col-span-1">
                                            <label
                                                htmlFor="first_name"
                                                className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                First name
                                                <span className="text-main-secondary">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                id="first_name"
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                                placeholder="Enter your first name"
                                                required
                                            />
                                        </div>
                                        <div className="col-span-2 xs:col-span-1">
                                            <label
                                                htmlFor="last_name"
                                                className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                Last name
                                                <span className="text-main-secondary">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                id="last_name"
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                                placeholder="Enter your last name"
                                                required
                                            />
                                        </div>
                                        <div className="col-span-2 xs:col-span-1">
                                            <label
                                                htmlFor="email"
                                                className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                Work email
                                                <span className="text-main-secondary">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                                placeholder="email@company.tld"
                                                required
                                            />
                                        </div>
                                        <div className="col-span-2 xs:col-span-1">
                                            <label
                                                htmlFor="phone_number"
                                                className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                Phone number
                                            </label>
                                            <input
                                                type="text"
                                                id="phone_number"
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>
                                        <div className="col-span-2 xs:col-span-1">
                                            <label
                                                htmlFor="company"
                                                className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                                placeholder="Enter your company"
                                            />
                                        </div>
                                        <div className="col-span-2 xs:col-span-1">
                                            <label
                                                htmlFor="company"
                                                className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                Website URL
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                                placeholder="Enter your website"
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <label
                                                htmlFor="message"
                                                className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                Message
                                                <span className="text-main-secondary">
                                                    *
                                                </span>
                                            </label>
                                            <textarea
                                                id="message"
                                                rows={6}
                                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="How can we help you?"
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="flex items-start my-5">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="agree_terms"
                                                type="checkbox"
                                                value=""
                                                className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                                required
                                            />
                                        </div>
                                        <label
                                            htmlFor="agree_terms"
                                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            I have read the{" "}
                                            <Link
                                                href="#"
                                                className="text-main-secondary"
                                            >
                                                Privacy Policy
                                            </Link>{" "}
                                            and understand that my personal data
                                            will be processed for the purpose of
                                            providing the necessary information
                                            and assistance.
                                        </label>
                                    </div>
                                    <div className="col-span-2 flex justify-end">
                                        <button
                                            type="submit"
                                            className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-main-secondary sm:w-fit hover:bg-main-secondary-darker focus:ring-4 focus:outline-none focus:ring-primary-300"
                                        >
                                            Send message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <ScrollManagerEvaluator />
        </div>
    );
}
