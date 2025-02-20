import Image from "next/image";
import {
    WPHTMLBlockType,
    StrapiContentBlockType,
    BlogPostType,
    TextBlock,
    ImageBlock,
    VideoBlock,
    ReferenceBlock,
} from "@/components/BlogPost";
import { generateStrapiAPIURL } from "@/utils/URLGenerators";
import { normalizeBlogPostData } from "@/utils/Normalizer";
import { notFound } from "next/navigation";
import Link from "next/link";
import routes from "@/constants/routes";

export async function generateStaticParams() {
    try {
        const res = await fetch(generateStrapiAPIURL("/blog-posts"));

        if (!res.ok) throw new Error("Response failed");

        const resData = await res.json();

        const posts: BlogPostType[] = resData.data;

        return posts.map((post) => ({ slug: post.slug }));
    } catch (e) {
        console.log(e);
        return [];
    }
}

async function getBlogPost(
    url: string,
    cache: RequestCache | undefined = "no-store"
): Promise<BlogPostType | null> {
    const res = await fetch(url, {
        cache: cache,
    });

    if (!res.ok) throw new Error("Failed to fetch blog post");

    console.log(url);

    const resData = await res.json();
    const post = normalizeBlogPostData(resData);

    return post;
}

type BlogPostProps = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ url?: string }>;
};

export async function generateMetadata({
    params,
    searchParams,
}: BlogPostProps) {
    const { slug } = await params;
    const { url } = await searchParams;

    if (!url) {
        return { title: "Not Found" };
    }

    const apiUrl = decodeURIComponent(url);
    const post: BlogPostType | null = await getBlogPost(apiUrl);

    if (!post) {
        return { title: "Not Found" };
    }

    return {
        title: `${post.title} | My Blog`,
        description: post.excerpt.replace(/<[^>]+>/g, ""),
    };
}

export default async function BlogPostPage({
    params,
    searchParams,
}: BlogPostProps) {
    const { slug } = await params;
    const { url } = await searchParams;

    if (!url) {
        return notFound();
    }

    const apiUrl = decodeURIComponent(url);
    const post: BlogPostType | null = await getBlogPost(apiUrl, "force-cache");

    if (!post) {
        return (
            <div className="text-center text-red-600 mt-10">
                Post not found.
            </div>
        );
    }

    return (
        <section>
            {/* <head>
                <link
                    rel="stylesheet"
                    href="https://api.imboxsoft.com/wp-content/themes/astra/assets/css/minified/style.min.css"
                />
            </head> */}
            <div className="relative bg-main-background-darker pt-48">
                <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20">
                    <Image
                        src={post.coverImage.src}
                        className="w-full h-full object-cover"
                        fill
                        alt={post.coverImage.alternativeText}
                    />
                </div>
                <div className="observe-navbar-intersect flex flex-col gap-20 max-w-screen-xl mx-auto px-4 sm:px-10 md:px-16 pb-20 z-10">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 z-10">
                        {post.title}
                    </h1>
                    <div className="text-2xl uppercase font-semibold z-10">
                        {post.date}
                    </div>
                </div>
            </div>

            <div className="relative bg-main-background pt-20">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-10 md:px-16">
                    {renderPostContent(post)}

                    <div className="w-full rounded-t-xl bg-main-background-dark py-24 mt-20 text-center flex flex-col items-center gap-3">
                        <h3 className="text-2xl font-medium">
                            Curious for more details? Let&apos;s discuss
                            further.
                        </h3>
                        <p></p>
                        <Link
                            href={routes.CONTACT}
                            className="px-4 py-2 bg-main-secondary rounded-md font-semibold"
                        >
                            Let&apos;s start a conversation
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

const renderPostContent = (post: BlogPostType) => {
    switch (post.from) {
        case "wordpress":
            return (
                <div
                    dangerouslySetInnerHTML={{
                        __html: (post.content as WPHTMLBlockType).rendered,
                    }}
                />
            );
        case "strapi":
            return (
                <>
                    {(post.content as StrapiContentBlockType[]).map(
                        (block, index) => {
                            switch (block.type) {
                                case "paragraph":
                                    return (
                                        <div>
                                            {block.children.map(
                                                (child, index) => {
                                                    switch (child.type) {
                                                        case "text":
                                                            return (
                                                                <TextBlock
                                                                    key={index}
                                                                    block={
                                                                        child
                                                                    }
                                                                />
                                                            );
                                                        default:
                                                            return null;
                                                    }
                                                }
                                            )}
                                        </div>
                                    );
                                case "image":
                                    return (
                                        <ImageBlock key={index} block={block} />
                                    );
                                case "video":
                                    return (
                                        <VideoBlock key={index} block={block} />
                                    );
                                case "reference":
                                    return (
                                        <ReferenceBlock
                                            key={index}
                                            block={block}
                                        />
                                    );
                                default:
                                    return null;
                            }
                        }
                    )}
                </>
            );
        default:
            return post.excerpt;
    }
};
