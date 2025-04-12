import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  envDir: "env",
  plugins: [vue()],
  base: "/",
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      "~bootstrap-icons": path.resolve(
        __dirname,
        "node_modules/bootstrap-icons"
      ),
      src: path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 配置 Sass 选项
        sassOptions: {
          // 抑制弃用警告
          silenceDeprecations: true,
        },
      },
    },
  },
});
