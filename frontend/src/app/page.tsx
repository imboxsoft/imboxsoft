import { HeroSection } from "@/components/HeroSection";
import { ScrollManager } from "@/components/ScrollManager";

import Parser from "rss-parser";

type NewsArticle = {
    title: string;
    link: string;
    pubDate: string;
};

export async function fetchNews(): Promise<NewsArticle[]> {
    const parser = new Parser();
    const response = await fetch(
        "https://news.google.com/rss/search?q=technology&hl=en-US&gl=US&ceid=US:en",
        {
            next: { revalidate: 86400 },
        }
    );

    const xml = await response.text();
    const feed = await parser.parseString(xml);

    return feed.items.map((item) => ({
        title: item.title ?? "No title",
        link: item.link ?? "#",
        pubDate: item.pubDate ?? "Unknown date",
    }));
}

export default async function Home() {
    const articles: NewsArticle[] = await fetchNews();
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
        "Docker",
        "Kubernetes",
        "AWS",
        "Google Cloud",
        "Shopify",
        "Bigcommerce",
        "Stripe",
        "Paypal",
        "Photoshop",
        "Illustrator",
        "Figma",
    ];

    return (
        <div className="gap-16 font-[family-name:var(--font-geist-sans)] text-lg md:text-2xl">
            <section className="pt-28 lg:pt-32 scroll-section current-scroll pb-10 max-w-screen-xl mx-auto lg:min-h-screen lg:max-h-screen px-4 lg:px-10 flex-1 flex flex-col">
                <HeroSection articles={articles} />
            </section>

            <section className="observe-navbar-intersect scroll-section lg:min-h-screen py-16 sm:py-24 lg:py-0 flex items-center bg-gray-900">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-10 md:px-16">
                    <div className="scroll-hidden text-center md:text-right mb-10 md:mb-16">
                        <h1 className="mb-4 text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                            Welcome to
                            <span className="text-main-primary">
                                {" "}
                                Imboxsoft
                            </span>
                        </h1>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-none tracking-tight">
                            <span className="leading-normal underline underline-offset-3 decoration-4 md:decoration-8 decoration-main-secondary">
                                Your trusted partner in cutting-edge technology
                            </span>
                        </h2>
                    </div>

                    <div className="scroll-hidden text-justify">
                        <p className="mb-1">
                            Our company specializes in delivering tailored
                            software development solutions and comprehensive IT
                            consulting services. We are dedicated to empowering
                            our clients with the tools they need to succeed in
                            today&apos;s dynamic digital landscape.
                        </p>
                        <p className="mb-1"></p>

                        <p className="mb-1">
                            Partner with us today and we will harness together
                            the power of technology and propel your business
                            forward.
                        </p>
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect scroll-section lg:min-h-screen py-16 sm:py-24 lg:py-0 flex items-center bg-gray-800">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-10 md:px-16">
                    <div className="scroll-hidden inline-flex items-center justify-center w-full mb-8 md:mb-16">
                        <hr className="w-56 xs:w-64 md:w-72 h-[2px] my-8 bg-main-primary border-0" />
                        <h3 className="text-2xl md:text-3xl font-bold absolute px-4 py-2 -translate-x-1/2 left-1/2 bg-main-medium text-center">
                            Expertise
                        </h3>
                    </div>

                    <p className="scroll-hidden mb-6 text-justify">
                        Imboxsoft specializes in a diverse array of technologies
                        and systems, ensuring that we stay at the forefront of
                        innovation to meet the evolving needs of our clients.
                    </p>

                    <p className="scroll-hidden mb-4 text-justify">
                        Our core competencies include:
                    </p>

                    <div className="scroll-hidden">
                        <ul className="flex flex-row flex-wrap gap-x-4 gap-y-3">
                            {technologies.map((el, index) => (
                                <li key={index}>
                                    <span className="block bg-gray-600 text-xs font-medium px-4 py-2 rounded-md">
                                        {el}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <ScrollManager />
        </div>
    );
}
