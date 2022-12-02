import { sidebar } from "vuepress-theme-hope";

export const en = sidebar({
  "/": [
    "mod-list",
    {
      icon: "creative",
      text: "Guide",
      collapsable: false,
      prefix: "guide/",
      link: "guide/",
      children: ["key-bind", "multi-play", "recommend"],
    },
  ],
});
