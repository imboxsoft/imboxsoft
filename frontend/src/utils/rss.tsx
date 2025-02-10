import Parser from "rss-parser";

export type NewsArticle = {
    title: string;
    link: string;
    pubDate: string;
};

export async function fetchNews(): Promise<NewsArticle[]> {
    return [];
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
