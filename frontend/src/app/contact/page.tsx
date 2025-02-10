export default function Contact() {
    return (
        <div className="xl:pt-32 max-w-screen-xl mx-auto">
            <section className="observe-navbar-intersect bg-main-background-lighter-lighter xl:rounded-xl">
                <div className="pt-32 xl:pt-16 pb-8 lg:pb-16 px-12 xl:mb-10">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                        Contact Us
                    </h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                        Need help with a technical issue? Want to partner up or
                        are you interested in how we can be of service to you,
                        let us know through the contact form below.
                    </p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="email@company.tld"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="subject"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Let us know how we can help you"
                                required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                            >
                                Your message
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Leave a comment..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-main-secondary sm:w-fit hover:bg-main-secondary-darker focus:ring-4 focus:outline-none focus:ring-primary-300"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}
