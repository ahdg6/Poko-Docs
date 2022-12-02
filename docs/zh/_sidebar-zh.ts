import { sidebar } from "vuepress-theme-hope";

export const zh = sidebar({
  "/zh": [
    "mod-list",
    {
      icon: "creative",
      text: "使用指南",
      collapsable: false,
      prefix: "/guide/",
      link: "/guide/",
      children: ["key-bind", "multi-play", "recommend"],
    },
  ],
});
