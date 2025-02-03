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
                    "white-o-02": "var(--white-o-02)",
                    dark: "var(--dark)",
                    medium: "var(--medium)",
                    primary: {
                        DEFAULT: "var(--primary-light)",
                    },
                    secondary: {
                        DEFAULT: "var(--secondary-light)",
                        lighter: "var(--secondary-lighter)",
                        darker: "var(--secondary-darker)",
                    },
                    white: "var(--white)",
                },
            },
            position: {
                unset: "unset",
            },
        },
    },
    plugins: [],
} satisfies Config;
