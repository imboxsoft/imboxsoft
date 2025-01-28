const fs = require("fs");
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const path = require("path");

const port = process.env.NEXTJS_PORT;

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
            } else if (pathname === "/b") {
                await app.render(req, res, "/b", query);
            } else {
                await handle(req, res, parsedUrl);
            }
        } catch (err) {
            logFile.write("Error occurred handling", req.url, err);
            console.error("Error occurred handling", req.url, err);
            res.statusCode = 500;
            res.end("internal server error");
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
