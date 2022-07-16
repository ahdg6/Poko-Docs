import { sidebar } from "vuepress-theme-hope";

export const en = sidebar({
  "/": [
    "",
    {
      icon: "creative",
      text: "Guide",
      collapsable: true,
      prefix: "guide/",
      link: "guide/",
      children: ["", "mod-list", "key-bind", "multi-play", "recommend"],
    },
  ],
});
