import { sidebar } from "vuepress-theme-hope";

export const en = sidebar({
  "mod-list",
  "/guide/": [
    {
      icon: "creative",
      text: "Guide",
      collapsable: false,
      prefix: "/guide/",
      children: ["key-bind", "multi-play", "recommend"],
    },
  ],
});
