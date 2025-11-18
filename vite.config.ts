import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
// For GitHub Pages: 
// - If repo is "username.github.io", use base: '/'
// - If repo is a project page, use base: '/repo-name/'
export default defineConfig({
  base: '/ux-portfolio/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
