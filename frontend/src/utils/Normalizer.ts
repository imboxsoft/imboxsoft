import { BlogPostType } from "@/components/BlogPost";
import {
    generateStrapiBaseURL,
    generateStrapiAPIURL,
    generateWPAPIURL,
} from "./URLGenerators";

function formatDateStr(dateStr: string): string {
    const date = new Date(dateStr);

    const formattedDate = date.toLocaleString("en-US", {
        month: "long",
        year: "numeric",
    });

    return formattedDate;
}

export function normalizeBlogPostData(
    post: any,
    source: string = ""
): BlogPostType {
    if (!source) {
        source = true ? "wordpress" : "strapi";
    }

    if (source === "wordpress") {
        return {
            from: source,
            slug: post.slug,
            title: post.title.rendered,
            author: post.author ?? "Unknown",
            url: generateWPAPIURL(`/posts/${post.id}?_embed`),
            coverImage: {
                src: post?._embedded["wp:featuredmedia"]?.[0].source_url || "",
                alternativeText: post.title.rendered,
            },
            excerpt: post.excerpt.rendered ?? "",
            content: {
                type: "wp-rendered-content",
                rendered: post.content.rendered,
            },
            date: formatDateStr(post.date),
        };
    } else if (source === "strapi") {
        return {
            from: source,
            slug: post.slug,
            title: post.title,
            author: post.author?.name ?? "Unknown",
            url: generateStrapiAPIURL(
                `/blog-posts?filters[slug][$eq]=${post.slug}&populate=*`
            ),
            coverImage: {
                src: generateStrapiBaseURL(post?.coverImage?.url) ?? "",
                alternativeText: post.coverImage?.alternativeText ?? "",
            },
            excerpt: post.excerpt ?? "",
            content: post.content || [],
            date: post.date,
        };
    }
    throw new Error("Unknown data source");
}

export function normalizeBlogPostsData(
    data: any[],
    source: "wordpress" | "strapi" | ""
): BlogPostType[] {
    return data.map((item) => {
        return normalizeBlogPostData(item, source);
    });
}
