import "@/styles/theme.css";
import "@/styles/globals.css";

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

// export const metadata: Metadata = {
//     title: "Imboxsoft Official",
//     description: "Software developing company",
//     keywords: ["Software Developer", "Web Solutions", "IT Consulting"],
//     authors: [
//         { name: "Imbox Software Solutions SRL", url: "https://imboxsoft.com" },
//     ],
//     generator: "Next.js",
//     applicationName: "Imboxsoft Website",
//     referrer: "strict-origin",
//     openGraph: {
//         title: "Imboxsoft IT Consulting & Solutions",
//         description: "Software developing company",
//         url: "https://imboxsoft.com",
//         siteName: "Imboxsoft Official Website",
//         images: [
//             {
//                 url: "https://imboxsoft.com/og-image.jpg",
//                 width: 1200,
//                 height: 630,
//                 alt: "My Website Open Graph Image",
//             },
//         ],
//         locale: "en_US",
//         type: "website",
//     },
//     twitter: {
//         card: "summary_large_image", // Twitter card type
//         title: "Imboxsoft IT Consulting & Solutions",
//         description: "A brief description of my website for Twitter sharing.",
//         site: "@mytwitterhandle",
//         creator: "@creatorhandle",
//         images: ["https://imboxsoft.com/twitter-image.jpg"],
//     },
//     manifest: "/site.webmanifest",
// };

export const viewport: Viewport = {
    themeColor: "#000000",
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
