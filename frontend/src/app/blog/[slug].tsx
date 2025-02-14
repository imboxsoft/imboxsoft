// pages/blog/[slug].tsx
import {
    BlogPostType,
    TextBlock,
    ImageBlock,
    VideoBlock,
    ReferenceBlock,
} from "@/components/BlogPost";

interface BlogPostProps {
    slug: string;
}

export async function generateStaticParams() {
    const res = await fetch("https://myapi.com/posts");
    const posts: BlogPostType[] = await res.json();

    return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
    props,
}: {
    props: BlogPostProps;
}) {
    const res = await fetch(`https://myapi.com/posts/${props.slug}`, {
        cache: "no-store",
    });

    if (!res.ok) return null;

    const post: BlogPostType = await res.json();

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

            {post.content.map((block, index) => {
                switch (block.type) {
                    case "text":
                        return <TextBlock key={index} block={block} />;
                    case "image":
                        return <ImageBlock key={index} block={block} />;
                    case "video":
                        return <VideoBlock key={index} block={block} />;
                    case "reference":
                        return <ReferenceBlock key={index} block={block} />;
                    default:
                        return null;
                }
            })}
        </div>
    );
}
