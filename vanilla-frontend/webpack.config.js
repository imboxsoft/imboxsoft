const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const plugin = require("tailwindcss");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist/static/js"),
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "./"),
        },
        compress: true,
        port: 9000,
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: "src/img", to: "../assets" }],
            patterns: [{ from: "src/scripts", to: "../js" }],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};
