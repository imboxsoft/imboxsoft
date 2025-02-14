import Image from "next/image";
import Link from "next/link";
import {
    BlogPostType,
    TextBlock,
    ImageBlock,
    VideoBlock,
    ReferenceBlock,
} from "@/components/BlogPost";
import { generateAPIURL, generateBaseURL } from "@/utils/Strapi";

interface BlogPostProps {
    slug: string;
}

export async function generateStaticParams() {
    try {
        const res = await fetch(generateAPIURL("/blog-posts"));

        if (!res.ok) throw new Error("Response failed");

        const resData = await res.json();

        const posts: BlogPostType[] = resData.data;

        return posts.map((post) => ({ slug: post.slug }));
    } catch (e) {
        console.log(e);
        return [];
    }
}

async function getBlogPost(slug: string): Promise<BlogPostType | null> {
    const res = await fetch(
        generateAPIURL(`/blog-posts?filters[slug][$eq]=${slug}&populate=*`),
        {
            cache: "no-store",
        }
    );

    if (!res.ok) throw new Error("Failed to fetch blog post");

    const resData = await res.json();

    const posts: BlogPostType[] = resData.data;

    if (posts.length === 0) return null;

    return posts[0];
}

export default async function BlogPostPage({
    params,
}: {
    params: BlogPostProps;
}) {
    const post: BlogPostType | null = await getBlogPost(params.slug);

    if (!post) {
        return (
            <div className="text-center text-red-600 mt-10">
                Post not found.
            </div>
        );
    }

    return (
        <div>
            <section className="relative bg-main-background-darker pt-48">
                <div className="observe-navbar-intersect flex flex-row gap-20 max-w-screen-xl mx-auto px-4 sm:px-10 md:px-16 pb-20">
                    <h1 className="text-3xl font-bold mb-4 z-10">
                        {post.title}
                    </h1>
                </div>
                <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20">
                    <Image
                        src={generateBaseURL(post.coverImage.url)}
                        className="w-full h-full object-cover"
                        fill
                        alt={post.coverImage.alternativeText}
                    />
                </div>
            </section>

            <section className="relative bg-main-background pt-32">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-10 md:px-16 pb-20">
                    {post.content.map((block, index) => {
                        switch (block.type) {
                            case "paragraph":
                                return (
                                    <div>
                                        {block.children.map((child, index) => {
                                            switch (child.type) {
                                                case "text":
                                                    return (
                                                        <TextBlock
                                                            key={index}
                                                            block={child}
                                                        />
                                                    );
                                                default:
                                                    return null;
                                            }
                                        })}
                                    </div>
                                );
                            case "image":
                                return <ImageBlock key={index} block={block} />;
                            case "video":
                                return <VideoBlock key={index} block={block} />;
                            case "reference":
                                return (
                                    <ReferenceBlock key={index} block={block} />
                                );
                            default:
                                return null;
                        }
                    })}
                </div>
            </section>
        </div>
    );
}
