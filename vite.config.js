import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/se_project10_react/",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
