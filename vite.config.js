import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/cdn": {
        target:
          "https://glcdn.githack.com/Thedogecraft/assets/-/raw/main/public",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cdn/, ""),
      },
    },
  },
});
