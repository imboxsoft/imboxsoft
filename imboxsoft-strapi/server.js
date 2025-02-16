const strapi = require("@strapi/strapi");
strapi
    .createStrapi({
        distDir: "./dist",
        env: "production",
        host: "0.0.0.0",
        port: 1337,
        logger: {
            level: "info",
        },
    })
    .start();
