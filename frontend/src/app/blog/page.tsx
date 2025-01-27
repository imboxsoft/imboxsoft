import Image from "next/image";
import Link from "next/link";

export default function Blog() {
    const blogs: number[] = [1, 2, 3, 4, 5];

    return (
        <div>
            <section className="bg-main-black-o-1 pt-48">
                <div className="flex flex-row gap-20 max-w-screen-xl mx-auto px-4 sm:px-10 md:px-16 pb-20">
                    <div className="max-w-lg">
                        <h1 className="text-5xl mb-10 font-semibold">
                            Ramai la zi cu noutatile in IT
                        </h1>
                        <p className="text-lg">
                            Citește despre cele mai recente tendințe IT și cele
                            mai bune practici din industrie! Află ce se ascunde
                            în spatele noilor tehnologii și cum poți profita de
                            inovațiile din zona dezvoltării de software.
                        </p>
                    </div>
                    <div className="flex-1">
                        <Image
                            src="/images/blog_news.webp"
                            className="w-full rounded-xl"
                            layout="intrinsic"
                            width={300}
                            height={50}
                            alt="Imboxsoft Logo"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-gray-900">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-10 md:px-16 py-24 text-center">
                    <h2 className="text-5xl mb-6 font-semibold">
                        Get in tune with our promotions
                    </h2>
                    <p className="text-2xl font-semibold mb-16">
                        Stay ahead of the curve & get weekly updates on the
                        latest industry trends, tips & news.
                    </p>
                    <form
                        action="#"
                        className="flex flex-row gap-6 justify-center items-center"
                    >
                        <div className="w-full max-w-lg">
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="email@company.tld"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-main-secondary sm:w-fit hover:bg-main-secondary-darker focus:ring-4 focus:outline-none focus:ring-primary-300"
                        >
                            Join the Club
                        </button>
                    </form>
                </div>
            </section>

            <section className="bg-gray-800">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-10 md:px-16 pt-16 pb-24">
                    <h1 className="text-4xl font-semibold mb-10">Articles</h1>
                    <div className="flex flex-row gap-10">
                        <div className="flex flex-col gap-10 flex-[2/3]">
                            {blogs.map((blog, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-600 rounded-xl p-12 shadow-xl"
                                >
                                    <h1 className="text-2xl md:text-4xl font-semibold mb-6">
                                        6 Dumbest Mistakes Smart People Make
                                        When Hiring A Web Designer
                                    </h1>
                                    <span className="block mb-6">Author</span>
                                    <div className="flex flex-col md:flex-row gap-10">
                                        <div className="w-full md:w-1/4 flex-shrink-0">
                                            <div className="relative aspect-square">
                                                <Image
                                                    src="/images/blog_news.webp"
                                                    className="rounded-xl"
                                                    layout="fill"
                                                    objectFit="cover"
                                                    alt="Imboxsoft Logo"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-1 text-xl">
                                            If you’re looking to hire a website
                                            designer for your next website
                                            design project, you’re in the right
                                            place. But, first of all, who is
                                            this written for? Table of Contents
                                            This article is for anyone who is a
                                            marketing manager. That could be
                                            anything from, the CMO of the
                                            company to a marketing intern […]
                                        </div>
                                    </div>
                                    <hr className="h-px my-16 bg-gray-200 border-0 dark:bg-gray-700" />
                                    <div className="flex flex-row justify-center">
                                        <Link
                                            href="/contact"
                                            className="bg-main-secondary hover:bg-main-secondary-darker focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded-lg text-lg px-4 py-3 text-center"
                                        >
                                            FIND OUT MORE
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* <div className="flex-[1/3]"></div> */}
                    </div>
                </div>
            </section>
        </div>
    );
}
