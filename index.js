import wisp from "wisp-server-node";
import { createBareServer } from "@tomphttp/bare-server-node";
import httpProxy from "http-proxy";
import chalk from "chalk";
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import { libcurlPath } from "@mercuryworkshop/libcurl-transport";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { bareModulePath } from "@mercuryworkshop/bare-as-module3";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";
import express from "express";
import { createServer } from "node:http";
import { join } from "node:path";
import packageJson from "./package.json" with { type: "json" };
import compression from "compression";
import { fileURLToPath } from "node:url";

const cdnProxy = httpProxy.createProxyServer();
const bare = createBareServer("/bare/");
const __dirname = join(fileURLToPath(import.meta.url), "..");
const app = express();
const publicPath = "public";

app.set("views", join(__dirname, publicPath, "html"));
app.use(compression());
app.use(express.static(publicPath));
app.use("/uv/", express.static(uvPath));
app.use("/epoxy/", express.static(epoxyPath));
app.use("/baremux/", express.static(baremuxPath));
app.use("/libcurl/", express.static(libcurlPath));
app.use("/bareasmodule/", express.static(bareModulePath));

app.get("/", (req, res) => {
	res.sendFile(join(__dirname, publicPath, "html", "index.html"));
});
app.use("/cdn", (req, res) => {
	cdnProxy.web(req, res, {
		target: "https://gms.parcoil.com/",
		changeOrigin: true,
	});
});
app.get("/science", (req, res) => {
	res.sendFile(join(__dirname, publicPath, "html", "games.html"));
});
app.get("/search", (req, res) => {
	res.sendFile(join(__dirname, publicPath, "html", "search.html"));
});
app.get("/play", (req, res) => {
	res.sendFile(join(__dirname, publicPath, "html", "play.html"));
});
app.get("/forum*/*", (req, res) => {
	res.sendFile(join(__dirname, publicPath, "html", "forum.html"));
});
app.get("/math", (req, res) => {
	res.sendFile(join(__dirname, publicPath, "html", "apps.html"));
});
app.get("/settings", (req, res) => {
	res.sendFile(join(__dirname, publicPath, "html", "settings.html"));
});
app.get("/go", (req, res) => {
	res.sendFile(join(__dirname, publicPath, "html", "go.html"));
});
app.get("/package.json", (req, res) => {
	res.json(packageJson);
});
app.get("*", (req, res) => {
	res.sendFile(join(__dirname, publicPath, "html", "404.html"));
});
const server = createServer();

server.on("request", (req, res) => {
	if (bare.shouldRoute(req)) {
		bare.routeRequest(req, res);
	} else {
		app(req, res);
	}
});

server.on("upgrade", (req, socket, head) => {
	if (req.url.endsWith("/wisp/")) {
		wisp.routeRequest(req, socket, head);
	} else if (bare.shouldRoute(req)) {
		bare.routeUpgrade(req, socket, head);
	} else {
		socket.end();
	}
});

let port = parseInt(process.env.PORT || "");

if (isNaN(port)) port = 8080;

server.on("listening", () => {
	const address = server.address();
	console.log("Listening on:");
	console.clear();
	console.log(
		chalk.green(`🚀 Lunaar V6 Listening on http://localhost:${address.port}`),
	);
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
	bare.close();
	process.exit(0);
}

server.listen({
	port,
});
