import express from "express";
import { createServer } from "node:http";
import chalk from "chalk";
import httpProxy from 'http-proxy';
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";
import { join, dirname } from "node:path";
import wisp from "wisp-server-node";
import expressLayouts from "express-ejs-layouts";
import { fileURLToPath } from "url";
import packageJson from "./package.json" with { type: "json" };
import compression from "compression";
const cdnProxy = httpProxy.createProxyServer();
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const publicPath = join(__dirname, "public");

app.use(express.static(publicPath));


app.use("/uv/", express.static(uvPath));
app.use("/epoxy/", express.static(epoxyPath));
app.use("/baremux/", express.static(baremuxPath));
app.set("view engine", "ejs");
app.set("views", join(__dirname, "public/views"));
app.use(expressLayouts);
app.use(compression());
app.disable('x-powered-by');


app.get("/", (req, res) => {
  res.render("index");
});
app.use('/cdn', (req, res) => {
  cdnProxy.web(req, res, {
    target: 'https://assets-epeh.onrender.com/',
    changeOrigin: true
  });
});
app.get("/science", (req, res) => {
  res.render("games");
});
app.get("/play", (req, res) => {
  res.render("play");
});
app.get("/math", (req, res) => {
  res.render("apps");
});
app.get("/settings", (req, res) => {
  res.render("settings");
});
app.get("/go", (req, res) => {
  res.render("go");
});
app.get("/package.json", (req, res) => {
  res.json(packageJson);
});
app.get("*", (req, res) => {
  res.render("404");
});

const server = createServer();

server.on("request", (req, res) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "same-origin");
  app(req, res);
});
server.on("upgrade", (req, socket, head) => {
  if (req.url.endsWith("/wisp/")) wisp.routeRequest(req, socket, head);
  else socket.end();
});

let port = parseInt(process.env.PORT || "");
if (isNaN(port)) port = 8080;

server.on("listening", () => {
  const address = server.address();
  console.clear();
  console.log(chalk.green(`🚀 Lunaar Listening on http://localhost:${address.port}`));
  console.log();
  console.log(chalk.magenta(`🌙 Made by the Parcoil Network`));
  console.log();
  console.log(chalk.white(`⭐ Please Star on github`));
});

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

function shutdown() {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close();
  process.exit(0);
}

server.listen({ port });
