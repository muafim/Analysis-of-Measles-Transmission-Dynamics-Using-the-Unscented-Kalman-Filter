import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Analysis-of-Measles-Transmission-Dynamics-Using-the-Unscented-Kalman-Filter/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          charts: ["recharts"],
          icons: ["lucide-react"],
        },
      },
    },
  },
});
