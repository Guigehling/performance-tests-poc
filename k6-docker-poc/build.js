const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["scenarios/load-test.ts"], // ou scripts/load-test.ts
    outfile: "dist/load-test.js",
    bundle: true,
    platform: "neutral",
    target: "es2019",
    external: [
      "k6",
      "k6/http",
      "k6/metrics",
      "k6/ws",
      "k6/crypto",
      "k6/encoding",
    ],
  })
  .catch(() => process.exit(1));
