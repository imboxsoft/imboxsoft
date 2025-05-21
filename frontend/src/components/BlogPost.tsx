// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Image from "next/image";

import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { ROUTE_KEYS as routes } from "@/constants/routes";
import { ImageType } from "@/types/strapi";

interface ParagraphBlockTextType {
    type: "text";
    text: string;
}

type ParagraphBlockChildrenType = ParagraphBlockTextType;

interface ParagraphBlockType {
    type: "paragraph";
    children: ParagraphBlockChildrenType[];
}

interface ImageBlockType {
    type: "image";
    src: string;
    alt: string;
    layout: "full" | "side";
}

interface VideoBlockType {
    type: "video";
    src: string;
}

interface ReferenceBlockType {
    type: "reference";
    link: string;
    text: string;
}

export interface WPHTMLBlockType {
    type: "wp-rendered-content";
    rendered: string;
}

export type StrapiContentBlockType =
    | ParagraphBlockType
    | ImageBlockType
    | VideoBlockType
    | ReferenceBlockType;

export interface BlogPostType {
    from: "wordpress" | "strapi";
    url: string;
    slug: string;
    title: string;
    author: string;
    coverImage: ImageType;
    excerpt: string;
    content: WPHTMLBlockType | StrapiContentBlockType[];
    date: string;
}

export const TextBlock = ({ block }: { block: ParagraphBlockTextType }) => (
    <p className="text-lg">{block.text}</p>
);

export const ImageBlock = ({ block }: { block: ImageBlockType }) => (
    <div className={block.layout === "full" ? "w-full" : "w-1/2"}>
        <Image src={block.src} alt={block.alt} className="w-full rounded-lg" />
    </div>
);

export const VideoBlock = ({ block }: { block: VideoBlockType }) => (
    <div className="w-full aspect-video">
        <iframe className="w-full h-full" src={block.src} allowFullScreen />
    </div>
);

export const ReferenceBlock = ({ block }: { block: ReferenceBlockType }) => (
    <a href={block.link} className="text-blue-500 underline">
        {block.text}
    </a>
);

// export const CodeBlock = ({ code }: { code: string }) => (
//     <SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
// );

export const BlogPostHeadline = async ({ post }: { post: BlogPostType }) => {
    const t = await getTranslations("blog.blog");

    return (
        <div className="w-full">
            <div
                key={post.slug}
                className="border border-gray-600 rounded-xl shadow-xl"
            >
                <div className="relative w-full max-h-[250px] sm:max-h-[350px] aspect-square">
                    <Image
                        src={post.coverImage.src}
                        className="rounded-xl object-cover"
                        fill
                        alt={post.coverImage.alternativeText || `${post.title}`}
                    />
                </div>
                <div className="px-6 pb-6 sm:px-10 sm:pb-10">
                    <div className="mt-6 mb-4 uppercase font-semibold text-base">
                        {post.date}
                    </div>
                    <h1 className="text-2xl md:text-3xl font-semibold mb-6">
                        {post.title}
                    </h1>
                    <div className="text-xl">{renderPostExcerpt(post)}</div>
                    <hr className="h-px my-10 bg-gray-200 border-0 dark:bg-gray-700" />
                    <div className="flex flex-row justify-center">
                        <Link
                            href={{
                                pathname: routes.INSIGHT_POST(post.slug),
                                query: {
                                    url: encodeURIComponent(post.url),
                                },
                            }}
                            className="uppercase bg-main-secondary hover:bg-main-secondary-darker focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded-lg text-lg px-4 py-3 text-center"
                        >
                            {t("findOut")}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const renderPostExcerpt = (post: BlogPostType) => {
    switch (post.from) {
        case "wordpress":
            return (
                <div
                    dangerouslySetInnerHTML={{
                        __html: post.excerpt,
                    }}
                />
            );
        case "strapi":
            return post.excerpt;
        default:
            return post.excerpt;
    }
};
