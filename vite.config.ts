/// <reference types="vitest" />
import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
  plugins: [
    remix(),
    tsconfigPaths(),
  ],
  test: {
    coverage: {
      enabled: true,
      all: true,
      provider: "v8",
      reportsDirectory: "./coverage",
      reporter: ["cobertura", "lcov", "text", "html"],
    },
    reporters: ["default", ["junit", { outputFile: "./coverage/junit.xml" }]],
    environment: "happy-dom",
  },
});
