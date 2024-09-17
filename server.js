import { build } from "vite";
import { consola } from "consola";
import httpProxy from "http-proxy";
import path from "node:path";
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";
import { createServer } from "node:http";
import express from "express";
import fs from "fs";
import wisp from "wisp-server-node";

const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

const app = express();
const port = 8080;
const HttpProxy = httpProxy.createProxyServer();

async function startServer() {
  consola.start("Building 🔨");

  await build();

  app.use(express.static("dist"));
  app.use("/uv/", express.static(uvPath));
  app.use("/epoxy/", express.static(epoxyPath));
  app.use("/baremux/", express.static(baremuxPath));

  app.use("/cdn", (req, res) => {
    HttpProxy.web(req, res, {
      target: "https://parcoil-assets.onrender.com",
      changeOrigin: true,
    });
  });

  app.get("/package.json", (req, res) => {
    res.json(packageJson);
  });

  app.get("*", (req, res) => {
    res.sendFile(path.resolve("dist", "index.html"));
  });

  const server = createServer((req, res) => {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "same-origin");
    app(req, res);
  });

  server.on("upgrade", (req, socket, head) => {
    if (req.url.endsWith("/wisp/")) {
      wisp.routeRequest(req, socket, head);
    } else {
      socket.end();
    }
  });

  server.listen(port, () => {
    consola.success("Native built");
    consola.info(`Native running on port ${port}`);
  });

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);

  function shutdown() {
    consola.info("SIGTERM signal received: closing HTTP server");
    server.close(() => {
      consola.success("Server closed");
      process.exit(0);
    });
  }
}

startServer().catch((err) => consola.error("Failed to start server:", err));
