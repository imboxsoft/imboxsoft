// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Image from "next/image";
import { ImageType } from "@/types/strapi";

export interface BlogPostType {
    slug: string;
    title: string;
    author: string;
    coverImage: ImageType;
    excerpt: string;
    content: ContentBlockType[];
    date: string;
}

interface TextBlockType {
    type: "text";
    value: string;
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
    | TextBlockType
    | ImageBlockType
    | VideoBlockType
    | ReferenceBlockType;

export const TextBlock = ({ block }: { block: TextBlockType }) => (
    <p className="text-lg">{block.value}</p>
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
