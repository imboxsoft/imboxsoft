import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

const defaultTags = {
    highlight: (chunk: React.ReactNode) => (
        <span className="text-main-primary">{chunk}</span>
    ),
    strong: (chunk: React.ReactNode) => (
        <strong className="font-semibold">{chunk}</strong>
    ),
    em: (chunk: React.ReactNode) => <em className="italic">{chunk}</em>,
};

export function useRichTranslation(namespace: string) {
    const t = useTranslations(namespace);
    return (key: string, tags = defaultTags) => t.rich(key, tags);
}

export async function getRichTranslations(namespace: string) {
    const t = await getTranslations(namespace);
    return (key: string, tags = defaultTags) => t.rich(key, tags);
}
