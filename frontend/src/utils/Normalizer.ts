import { BlogPostType } from "@/components/BlogPost";
import { generateStrapiBaseURL } from "./Strapi";

export function normalizeBlogPostData(
    source: "wordpress" | "strapi",
    data: any[]
): BlogPostType[] {
    return data.map((item) => {
        if (source === "wordpress") {
            return {
                from: "wordpress",
                slug: item.slug,
                title: item.title.rendered,
                author: item.author ?? "Unknown",
                coverImage: {
                    src:
                        item?._embedded["wp:featuredmedia"]?.[0].source_url ||
                        "",
                    alternativeText: item.title.rendered,
                },
                excerpt: item.excerpt.rendered ?? "",
                content: {
                    type: "wp-rendered-content",
                    rendered: item.content.rendered,
                },
                date: item.date,
            };
        } else if (source === "strapi") {
            return {
                from: "strapi",
                slug: item.slug,
                title: item.title,
                author: item.author?.name ?? "Unknown",
                coverImage: {
                    src: generateStrapiBaseURL(item?.coverImage?.url) ?? "",
                    alternativeText: item.coverImage?.alternativeText ?? "",
                },
                excerpt: item.excerpt ?? "",
                content: item.content || [],
                date: item.date,
            };
        }
        throw new Error("Unknown data source");
    });
}
