import Image from "next/image";

export default function OurWork() {
    const technologies: string[] = [
        "Next.js",
        "Angular",
        "Alpinejs",
        "Tailwind",
        "Django",
        "Nodejs",
        "Laravel",
        ".NET",
        "PostgreSQL",
        "MongoDB",
        "GIT",
        "Docker",
        "Kubernetes",
        "AWS",
        "Google Cloud",
        "Shopify",
        "Bigcommerce",
        "Stripe",
        "Paypal",
        "API Integration",
        "Photoshop",
        "Illustrator",
        "Figma",
    ];

    return (
        <div>
            <div className="observe-navbar-intersect pt-32 w-full bg-main-medium">
                <div className="relative max-w-screen-xl mx-auto px-4 xs:px-10 py-20">
                    <div className="max-w-[750px] mx-auto relative w-full text-center">
                        <h5 className="text-main-primary text-2xl mb-8">
                            OUR WORK
                        </h5>
                        <h1 className="text-5xl font-bold mb-6">
                            Explore how we helped our clients achieve real
                            business benefits
                        </h1>
                        <h3 className="text-2xl">
                            How we treat each other makes us better as software
                            creators. Our talent remains approachable and ready
                            to lend a hand because it’s the right thing to do.
                        </h3>
                    </div>
                </div>
            </div>
            <div className="observe-navbar-intersect w-full bg-gray-800">
                <div className="max-w-screen-xl mx-auto px-4 xs:px-10 pt-16 pb-20">
                    <div className="flex flex-col gap-32 md:[&>*:nth-child(even)]:flex-row-reverse">
                        <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
                            <div className="flex flex-col flex-1 items-center md:items-start text-center md:text-left">
                                <div className="relative w-64 max-w-full h-20 mb-6">
                                    <Image
                                        src="/images/logo_light.svg"
                                        alt="Imboxsoft Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h2 className="text-3xl font-semibold mb-6">
                                    Creating one platform to manage 6 sites led
                                    to a 400% revenue growth
                                </h2>
                                <p>
                                    Pet Media Group centralized the management
                                    of 6 pet marketplaces worth $12M by
                                    architecting a new platform and migrating
                                    millions of data points to it with The
                                    Software House.
                                </p>
                            </div>
                            <div className="relative w-full md:w-1/3 lg:flex-1 h-56 lg:h-72 md:mt-16 rounded-xl overflow-hidden">
                                <Image
                                    src="/images/blog_news.webp"
                                    alt="Imboxsoft Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
                            <div className="flex flex-col flex-1 items-center md:items-start text-center md:text-left">
                                <div className="relative w-64 max-w-full h-20 mb-6">
                                    <Image
                                        src="/images/logo_light.svg"
                                        alt="Imboxsoft Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h2 className="text-3xl font-semibold mb-6">
                                    Creating one platform to manage 6 sites led
                                    to a 400% revenue growth
                                </h2>
                                <p>
                                    Pet Media Group centralized the management
                                    of 6 pet marketplaces worth $12M by
                                    architecting a new platform and migrating
                                    millions of data points to it with The
                                    Software House.
                                </p>
                            </div>
                            <div className="relative w-full md:w-1/3 lg:flex-1 h-56 lg:h-72 md:mt-16 rounded-xl overflow-hidden">
                                <Image
                                    src="/images/blog_news.webp"
                                    alt="Imboxsoft Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
                            <div className="flex flex-col flex-1 items-center md:items-start text-center md:text-left">
                                <div className="relative w-64 max-w-full h-20 mb-6">
                                    <Image
                                        src="/images/logo_light.svg"
                                        alt="Imboxsoft Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h2 className="text-3xl font-semibold mb-6">
                                    Creating one platform to manage 6 sites led
                                    to a 400% revenue growth
                                </h2>
                                <p>
                                    Pet Media Group centralized the management
                                    of 6 pet marketplaces worth $12M by
                                    architecting a new platform and migrating
                                    millions of data points to it with The
                                    Software House.
                                </p>
                            </div>
                            <div className="relative w-full md:w-1/3 lg:flex-1 h-56 lg:h-72 md:mt-16 rounded-xl overflow-hidden">
                                <Image
                                    src="/images/blog_news.webp"
                                    alt="Imboxsoft Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="observe-navbar-intersect w-full bg-gray-900">
                <div className="max-w-screen-xl mx-auto px-4 xs:px-10 pt-24 pb-20">
                    <div>
                        <h3 className="w-full text-center text-3xl font-semibold mb-10">
                            Tech we work with
                        </h3>
                        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 grid-flow-row gap-10">
                            {technologies.map((el, index) => (
                                <div
                                    className="justify-self-center"
                                    key={index}
                                >
                                    {el}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
