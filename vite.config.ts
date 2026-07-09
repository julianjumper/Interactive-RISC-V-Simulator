import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Interactive-RISC-V-Simulator/",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
