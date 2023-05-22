import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue({
      script: {
        refSugar: true,
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/style/common.scss";`,
      },
    },
    postcss: {
      plugins: [
        {
          postcssPlugin: "internal:charset-removal",
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === "charset") {
                atRule.remove();
              }
            },
          },
        },
      ],
    },
  },
  server: {
    host: "0.0.0.0",
    port: 9600,
    strictPort: true,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/"),
      },
    },
  },
  build: {
    outDir: "dist/",
  },
});
