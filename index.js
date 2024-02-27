import { createBareServer } from "@tomphttp/bare-server-node";
import { createServer } from "node:http";
import { join, dirname } from "node:path";
import { hostname } from "node:os";

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const bare = createBareServer("/bare/");

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
const __filename = fileURLToPath(import.meta.url);
const publicPath = join(__dirname, "public");
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
// Serve static files from the "public" directory
app.use(express.static(publicPath));
app.use("/uv/", express.static(uvPath));
app.use("/", express.static(path.join(__dirname, "/")));

app.get("/games", (req, res) => {
  const filePath = path.join(__dirname, "games.json");
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(404).send("Games not found");
    }
  });
});
// APPS
app.get("/discord", (req, res) => {
  res.redirect("/uv/service/hvtrs8%2F-dksaopd%2Ccmm-arp");
});

app.get("/google", (req, res) => {
  res.redirect("/uv/service/hvtrs8%2F-wuw%2Cgmoelg.aoo%2Fue%60hr");
});
app.get("/youtube", (req, res) => {
  res.redirect("/uv/service/hvtrs8%2F-wuw%2Cymuvu%60e%2Ccmm-");
});
app.get("/tiktok", (req, res) => {
  res.redirect("/uv/service/hvtrs8%2F-wuw%2Ctkkvoi.aoo%2Fgxrlmrg");
});
app.get("/x", (req, res) => {
  res.redirect("/uv/service/hvtrs8%2F-tuivtgr%2Ccmm-");
});
app.get("/chess", (req, res) => {
  res.redirect("/uv/service/hvtrs8%2F-wuw%2Ccjeqs%2Ccmm-");
});
//
// Define a route for handling pages using the ":page" parameter
app.get("/:page", (req, res) => {
  const page = req.params.page;
  res.sendFile(path.join(__dirname, `public/${page}.html`));
});
// Error for everything else
app.use((req, res) => {
  res.status(404);
  res.sendFile(join(publicPath, "404.html"));
});

const server = createServer();
// Start the server
server.on("request", (req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

server.on("upgrade", (req, socket, head) => {
  if (bare.shouldRoute(req)) {
    bare.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

let port = parseInt(process.env.PORT || "");

if (isNaN(port)) port = 8080;

server.on("listening", () => {
  const address = server.address();

  console.log();
  console.log(`Made by The Parcoil Network :`);
  console.log();
  console.warn(`https://github.com/Parcoil/nativegames.net`);
  console.log();
  console.log(`Nativegames Running on port ${address.port}`);
  console.log();
});

// https://expressjs.com/en/advanced/healthcheck-graceful-shutdown.html
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

function shutdown() {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close();
  bare.close();
  process.exit(0);
}

server.listen({
  port,
});
