import express from "express";
import http from "http";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
const server = http.createServer(app);

async function main() {
  const isDev = process.env.NODE_ENV !== "production";
  if (isDev) {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    log(`Server is listening on http://localhost:${port}`);
  });
}
main().catch(err => {
  console.error("Server error:", err);
  process.exit(1);
});
