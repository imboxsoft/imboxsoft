const Strapi = require("@strapi/strapi");

const app = Strapi({ distDir: "./dist" });

app.start();
