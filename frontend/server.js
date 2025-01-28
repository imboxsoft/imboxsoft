const fs = require("fs");
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const path = require("path");

const port = process.env.PORT || 3000;

const app = next({ dev: false });
const handle = app.getRequestHandler();

const logFile = fs.createWriteStream(path.join(__dirname, "app.log"), {
    flags: "a",
});

app.prepare().then(() => {
    createServer(async (req, res) => {
        try {
            const parsedUrl = parse(req.url, true);
            const { pathname, query } = parsedUrl;

            if (pathname === "/a") {
                await app.render(req, res, "/a", query);
            } else {
                await handle(req, res, parsedUrl);
            }
        } catch (err) {
            logFile.write(
                `Error occurred handling ${req.url}: ${
                    err.stack || err.message
                }\n`
            );
            console.error("Error occurred handling", req.url, err);
            res.statusCode = 500;
            res.end(`internal server error Nextjs ${err.message}`);
        }
    })
        .once("error", (err) => {
            logFile.write(err);
            console.error(err);
            process.exit(1);
        })
        .listen(port, () => {
            logFile.write("> Nextjs server is ready on port 3000");
        });
});
