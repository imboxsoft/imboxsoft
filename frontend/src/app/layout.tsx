import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
    title: "Imboxsoft Official",
    description: "Software developing company",
    keywords: ["Software Developer", "Web Solutions", "IT Consulting"],
    authors: [
        { name: "Imbox Software Solutions SRL", url: "https://imboxsoft.com" },
    ],
    generator: "Next.js",
    applicationName: "Imboxsoft Website",
    themeColor: "#ffffff",
    referrer: "strict-origin",
    openGraph: {
        title: "Imboxsoft IT Consulting & Solutions",
        description: "Software developing company",
        url: "https://imboxsoft.com",
        siteName: "Imboxsoft Official Website",
        images: [
            {
                url: "https://imboxsoft.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "My Website Open Graph Image",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image", // Twitter card type
        title: "Imboxsoft IT Consulting & Solutions",
        description: "A brief description of my website for Twitter sharing.",
        site: "@mytwitterhandle",
        creator: "@creatorhandle",
        images: ["https://imboxsoft.com/twitter-image.jpg"],
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {/* <Header /> */}
                <main>{children}</main>
                {/* <Footer /> */}
                <Particles />
                <GlobalScripts />
            </body>
        </html>
    );
}
