import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "libro-lab/index" },
    { path: "/editor", component: "libro-editor/index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
  // 引入
  plugins: ['@difizen/umi-plugin-mana'],
  // 配置
  mana: {
    decorator: true,
    nodenext: true,
    routerBase: true,
    runtime: true,
  },
  proxy: {
    '/api': {
      target: 'http://localhost:8888/',
      changeOrigin: true,
      secure: false,
      pathRewrite: {},
      ws: true,
    },
    '/files': {
      target: 'http://localhost:8888/',
      changeOrigin: true,
      secure: false,
      pathRewrite: {},
      ws: true,
    },
    '/lsp': {
      target: 'http://localhost:8888/',
      changeOrigin: true,
      secure: false,
      ws: true,
    },
  },
});
