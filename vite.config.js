import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["gkkr3x-5173.csb.app"] // allow all Codesandbox subdomains
  }
});
