import type { NextConfig } from "next";

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

export default nextConfig;
