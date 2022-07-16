import { sidebar } from "vuepress-theme-hope";

export const zh = sidebar({
  "/zh/": [
    "",
    {
      icon: "creative",
      text: "使用指南",
      collapsable: true,
      prefix: "guide/",
      link: "guide/",
      children: ["", "key-bind", "multi-play", "recommend"],
    },
  ],
});
