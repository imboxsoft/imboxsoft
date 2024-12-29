/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}",  "./src/*.{html,js}", "./src/**/*.{html,js}"],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                primary: "#212A3B",
                accent: "#3081ea",
            },
        },
    },
    plugins: [],
};
