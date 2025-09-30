import "@/styles/theme.css";
import "@/styles/globals.scss";
import "@/styles/shapes/global-section-shapes.scss";
import "@/styles/animations/global-animations.scss";

import { headers } from "next/headers";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";

import { ScrollManager } from "@/components/ScrollManager";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import GlobalScripts from "@/components/GlobalScripts";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

type Props = {
    params: { locale: "en" | "ro" };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const host = (await headers()).get("host") || "imboxsoft.com";
    const protocol = host.includes("localhost") ? "http" : "https";
    const baseUrl = `${protocol}://${host}`;

    const translations = {
        en: {
            title: {
                default: "Imboxsoft — Software, Web & Design",
                template: "%s | Imboxsoft",
            },
            description:
                "Software development, web solutions, IT consulting and graphic design.",
            keywords: ["Software Developer", "Web Solutions", "IT Consulting"],
            locale: "en_US",
            siteUrl: "https://imboxsoft.com",
        },
        ro: {
            title: {
                default: "Imboxsoft — Software, Web & Design",
                template: "%s | Imboxsoft",
            },
            description:
                "Dezvoltare software, soluții web, consultanță IT și design grafic.",
            keywords: ["Dezvoltare Software", "Soluții Web", "Consultanță IT"],
            locale: "ro_RO",
            siteUrl: "https://imboxsoft.ro",
        },
    };

    const { locale } = await params;
    const t = translations[locale] ?? translations.en;

    return {
        metadataBase: new URL(baseUrl),
        title: t.title,
        description: t.description,
        keywords: t.keywords,
        openGraph: {
            title: t.title.default,
            description: t.description,
            url: t.siteUrl, //fallback
            siteName: "Imboxsoft",
            images: [
                {
                    url: `${baseUrl}/og-image.jpg`,
                    width: 1200,
                    height: 630,
                    alt: "Imboxsoft Open Graph Image",
                },
            ],
            locale: t.locale,
            type: "website",
        },
        alternates: {
            canonical: t.siteUrl, //fallback
            languages: {
                en: "https://imboxsoft.com",
                ro: "https://imboxsoft.ro",
            },
        },
        icons: {
            icon: [
                {
                    url: "/favicon-32x32.png",
                    sizes: "32x32",
                    type: "image/png",
                },
                {
                    url: "/favicon-192x192.png",
                    sizes: "192x192",
                    type: "image/png",
                },
            ],
            apple: `${baseUrl}/apple-touch-icon.png`,
        },
        manifest: `${baseUrl}/site.webmanifest`,
    };
}

export const viewport: Viewport = {
    themeColor: "#1ad8c6",
};

export default async function LocaleLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale}>
            <body
                className={`relative ${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen`}
            >
                <NextIntlClientProvider locale={locale}>
                    <ScrollManager />
                    <div className="flex-1">
                        <Header />
                        <main className="h-full text-xl">{children}</main>
                    </div>
                    <Footer />
                    <Particles />
                    <GlobalScripts />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
