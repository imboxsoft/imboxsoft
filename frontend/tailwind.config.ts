import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                xs: "450px",
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                main: {
                    "black-o-1": "var(--black-o-1)",
                    dark: "var(--dark)",
                    medium: "var(--medium)",
                    light: "var(--light)",
                    blue: "var(--blue)",
                    white: "var(--white)",
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
