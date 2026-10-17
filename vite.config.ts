import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite-plus";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: ["index.html", "life.html"],
    },
  },
});
