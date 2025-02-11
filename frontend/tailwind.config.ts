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
                main: {
                    background: {
                        DEFAULT: "var(--background)",
                        lighter: "var(--background-lighter)",
                        dark: "var(--background-dark)",
                    },
                    foreground: {
                        DEFAULT: "var(--background)",
                    },
                    primary: {
                        DEFAULT: "var(--primary)",
                    },
                    secondary: {
                        DEFAULT: "var(--secondary)",
                        light: "var(--secondary-light)",
                        lighter: "var(--secondary-lighter)",
                        darker: "var(--secondary-darker)",
                    },
                    opacity: {
                        "black-75": "var(--black-o-75)",
                        "black-50": "var(--black-o-50)",
                        "white-20": "var(--white-o-20)",
                    },
                },
            },
            position: {
                unset: "unset",
            },
        },
    },
    plugins: [],
} satisfies Config;
