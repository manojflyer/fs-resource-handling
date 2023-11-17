import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: "APP_",
  server: { port: 3000 },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      public: path.resolve(__dirname, "./public/"),
      pages: path.resolve(__dirname, "./src/pages"),
    },
  },
  plugins: [react()],
});
