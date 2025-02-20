import Image from "next/image";
import { BlogPostType } from "@/components/BlogPost";
import { generateWPBaseURL } from "@/utils/Wordpress";
import NewsletterForm from "@/components/NewsletterForm";
import { normalizeBlogPostsData } from "@/utils/Normalizer";
import { BlogPostHeadline } from "@/components/BlogPost";

export default async function BlogPage() {
    let posts: BlogPostType[] = [];

    try {
        const res = await fetch(generateWPBaseURL("/posts?_embed"), {
            cache: "force-cache",
        });

        if (!res.ok) throw new Error("Response failed");

        const wpData = await res.json();
        const wordpressPosts = normalizeBlogPostsData(wpData, "wordpress");

        posts = [...wordpressPosts];
    } catch (e) {
        console.log(e);
    }

    return (
        <div>
            <section className="relative bg-main-background-darker pt-48">
                <div className="observe-navbar-intersect flex flex-row gap-20 max-w-screen-xl mx-auto px-4 sm:px-10 md:px-16 pb-20">
                    <div className="w-full xs:max-w-[450px] md:max-w-[700px] lg:max-w-[66%] z-10">
                        <div className="lg:mr-20">
                            <h1 className="text-4xl md:text-5xl mb-10 font-semibold">
                                Stay up-to-date with the latest trends in IT
                            </h1>
                            <p className="text-lg text-justify">
                                Read the most recent trends in IT and what are
                                the best practices to follow! Learn about what
                                hides behind the new technologies and how you
                                can benefit from software innovation.
                            </p>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0 opacity-40 lg:opacity-60">
                        <Image
                            src="/images/news.jpg"
                            className="w-full h-full object-cover rounded-2xl"
                            fill
                            alt="Imboxsoft Logo"
                        />
                        <div className="absolute inset-0 block bg-gradient-to-r from-main-background-darker to-transparent"></div>
                        <div className="absolute inset-0 block lg:hidden bg-gradient-to-l from-main-background-darker to-transparent"></div>
                    </div>
                </div>
            </section>

            <section className="observe-navbar-intersect bg-main-background">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-10 md:px-16 py-16 md:py-24 text-center">
                    <h2 className="text-4xl md:text-5xl mb-6 font-semibold">
                        Get in tune with our promotions
                    </h2>
                    <div className="w-full flex justify-center">
                        <p className="max-w-[850px] text-xl md:text-2xl font-medium mb-16">
                            Be that one person who is always ahead of the curve
                            & get weekly updates on the latest industry trends,
                            tips & news.
                        </p>
                    </div>
                    <NewsletterForm />
                </div>
            </section>

            <section className="observe-navbar-intersect bg-main-background-lighter">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-10 md:px-16 pt-16 pb-24">
                    <h1 className="text-4xl font-semibold mb-10">Articles</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {posts.map((post, index) => (
                            <div className="col-span-1" key={index}>
                                <BlogPostHeadline post={post} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
