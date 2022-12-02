import { sidebar } from "vuepress-theme-hope";

export const zh = sidebar({
  "mod-list",
  "/zh/guide/": [
    {
      icon: "creative",
      text: "使用指南",
      collapsable: false,
      prefix: "/zh/guide/",
      children: ["key-bind", "multi-play", "recommend"],
    },
  ],
});
