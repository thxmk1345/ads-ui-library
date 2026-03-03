import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@company/tokens": path.resolve(__dirname, "../tokens/src"),
      "@company/ui": path.resolve(__dirname, "./src")
    }
  },
  css: {
    modules: {
      localsConvention: "camelCase"
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "CompanyUI",
      fileName: "index"
    },
    rollupOptions: {
      external: ["react", "react-dom"]
    }
  }
});
