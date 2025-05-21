import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

const linkTags = {
    servicesLink: (chunk: React.ReactNode) => (
        <Link href="/services" className="text-main-secondary">
            {chunk}
        </Link>
    ),
    privacypolicyLink: (chunk: React.ReactNode) => (
        <Link href="/" className="text-main-secondary">
            {chunk}
        </Link>
    ),
};

const defaultTags = {
    highlight: (chunk: React.ReactNode) => (
        <span className="text-main-primary">{chunk}</span>
    ),
    strong: (chunk: React.ReactNode) => (
        <strong className="font-semibold">{chunk}</strong>
    ),
    em: (chunk: React.ReactNode) => <em className="italic">{chunk}</em>,
    ...linkTags,
};

export function useRichTranslation(namespace: string) {
    const t = useTranslations(namespace);
    return {
        rich: (key: string, tags = defaultTags) => t.rich(key, tags),
        text: (key: string) => t(key),
        raw: (key: string) => t.raw(key),
    };
}

export async function getRichTranslations(namespace: string) {
    const t = await getTranslations(namespace);
    return {
        rich: (key: string, tags = defaultTags) => t.rich(key, tags),
        text: (key: string) => t(key),
        raw: (key: string) => t.raw(key),
    };
}
