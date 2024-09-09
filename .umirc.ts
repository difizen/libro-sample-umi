import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "libro-lab/index" },
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
});
