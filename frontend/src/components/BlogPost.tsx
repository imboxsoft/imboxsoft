// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Image from "next/image";
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

export type ContentBlockType =
    | ParagraphBlockType
    | ImageBlockType
    | VideoBlockType
    | ReferenceBlockType;

export interface BlogPostType {
    slug: string;
    title: string;
    author: string;
    coverImage: ImageType;
    excerpt: string;
    content: ContentBlockType[];
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
