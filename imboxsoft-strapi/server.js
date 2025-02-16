const strapi = require("@strapi/strapi");
strapi({ distDir: "./dist", host: "0.0.0.0", port: 1337 }).start();
