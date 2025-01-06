import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
// import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      Assets: path.resolve(__dirname, "./src/assets"),
    },
  },
  server: {
    port: 3001,
    open: true,
    fs: {
      strict: false,
      allow: [path.resolve(__dirname, "..")],
    },
  },
  build: {
    outDir: "build",
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
    assetsDir: "assets",
    publicDir: "public",
  },
});
