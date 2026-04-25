import http from "node:http";
import { spawnSync } from "node:child_process";

const DEV_HOST = "127.0.0.1";
const DEV_PORT = 3000;

function runDocusaurusClear() {
  const result = spawnSync("npx", ["docusaurus", "clear"], {
    stdio: "inherit",
    shell: true,
  });

  if (typeof result.status === "number") {
    process.exit(result.status);
  }

  process.exit(1);
}

const request = http.request(
  {
    host: DEV_HOST,
    port: DEV_PORT,
    path: "/",
    method: "GET",
    timeout: 900,
  },
  (response) => {
    response.resume();
    console.error("[ERROR] Dev server appears to be running on http://127.0.0.1:3000.");
    console.error("Stop \"npm start\" first, then run \"npm run clear\" again.");
    process.exit(1);
  },
);

request.on("error", () => {
  runDocusaurusClear();
});

request.on("timeout", () => {
  request.destroy();
  runDocusaurusClear();
});

request.end();
