import { defineUserConfig } from "vuepress";
import theme from "./theme";
import pluginFullTextSearch from "vuepress2-plugin-full-text-search";

export default defineUserConfig({
  base: "/",
  dest: "./dist",

  locales: {
    "/": {
      lang: "en-US",
      title: "Poko",
      description: "Documentation for modpack Poko",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Poko",
      description: "为 Poko 准备的文档",
    },
  },

  plugins: [[ pluginFullTextSearch, ]],

  theme,
});
