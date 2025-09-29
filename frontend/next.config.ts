import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost", // For Dev
                port: "1337",
            },
            {
                protocol: "https",
                hostname: "your-live-strapi-domain.com", // For production
            },
            {
                protocol: "https",
                hostname: "api.imboxsoft.com", // For production
            },
        ],
    },
    typescript: {
        ignoreBuildErrors: true, // Only for dev
    },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
