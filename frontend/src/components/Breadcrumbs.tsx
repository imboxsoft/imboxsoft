"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { ROUTE_KEYS as routes } from "@/constants/routes";
import { useTranslations } from "next-intl";

type BreadcrumbsProps = {
    /** De ex. https://imboxsoft.com – folosit pentru JSON-LD */
    pageTitle: string;
    baseUrl?: string;
    /** Map pentru etichete “frumoase” pe segmente */
    disabledPaths?: string[];
    /** Ascunde segmentul “locale” (ex: /ro, /en) dacă îl folosești */
    hideLocales?: string[]; // ["ro","en"]
};

export default function Breadcrumbs({
    pageTitle,
    baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "",
    disabledPaths = [],
    hideLocales = [],
}: BreadcrumbsProps) {
    const t = useTranslations("common.navigation");
    const pathname = usePathname();

    const segments = useMemo(() => {
        if (!pathname) return [];
        return pathname
            .split("/")
            .filter(Boolean)
            .filter((seg) => !hideLocales.includes(seg));
    }, [pathname, hideLocales]);

    const crumbs = useMemo(() => {
        const acc: { href: string; label: string; disabled: boolean }[] = [];
        let running = "";
        segments.forEach((seg) => {
            running += `/${seg}`;
            const label = decodeURIComponent(seg).replace(/[-_]/g, " ");
            const isDisabled = disabledPaths.includes(seg) ? true : false;
            acc.push({
                href: !isDisabled ? running : "#",
                label: capitalize(label),
                disabled: isDisabled,
            });
        });
        return acc;
    }, [segments, disabledPaths]);

    if (crumbs.length === 0)
        return (
            <h1 className="text-main-primary text-sm uppercase">{pageTitle}</h1>
        );

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: t("home.title"),
                item: routes.HOME,
            },
            ...crumbs.map((c, i) => ({
                "@type": "ListItem",
                position: i + 2,
                name: c.label,
                item: `${baseUrl}${c.href}`,
            })),
        ],
    };

    return (
        <>
            <nav aria-label="Breadcrumb" className="text-sm">
                <ol
                    className="flex flex-wrap gap-2 items-center"
                    itemScope
                    itemType="https://schema.org/BreadcrumbList"
                >
                    <li
                        className="flex items-center gap-2"
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/ListItem"
                    >
                        <Link href={routes.HOME} itemProp="item">
                            <span itemProp="name">{t("home.title")}</span>
                        </Link>
                        <meta itemProp="position" content="1" />
                        <span aria-hidden>›</span>
                    </li>

                    {crumbs.map((c, idx) => {
                        const isLast = idx === crumbs.length - 1;
                        const position = idx + 2; // Home e 1
                        return (
                            <li
                                key={c.href}
                                className="flex items-center gap-2"
                                itemProp="itemListElement"
                                itemScope
                                itemType="https://schema.org/ListItem"
                            >
                                {isLast ? (
                                    <span
                                        itemProp="name"
                                        className="opacity-80 text-main-primary"
                                    >
                                        {c.label}
                                    </span>
                                ) : !c.disabled ? (
                                    <Link href={c.href} itemProp="item">
                                        <span itemProp="name">{c.label}</span>
                                    </Link>
                                ) : (
                                    <span
                                        itemProp="name"
                                        className="opacity-50"
                                    >
                                        {c.label}
                                    </span>
                                )}
                                <meta
                                    itemProp="position"
                                    content={String(position)}
                                />
                                {!isLast && <span aria-hidden>›</span>}
                            </li>
                        );
                    })}
                </ol>
            </nav>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />
        </>
    );
}

function capitalize(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
