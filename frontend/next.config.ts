import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
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
        ignoreBuildErrors: true,
    },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
