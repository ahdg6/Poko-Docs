import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { nextSearchPlugin } from "vuepress-plugin-next-search";

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

  plugins: [[
    nextSearchPlugin({
      locales: {
        '/': {
          fullText: true,
          placeholder: 'search',
          frontmatter: {
            tag: 'tag',
            category: 'category',
          }
        },
        '/zh/': {
          fullText: true,
          placeholder: '搜索',
          frontmatter: {
            tag: '标签',
            category: '分类',
          }
        },
        '/br/': {
          fullText: true,
          placeholder: 'search',
          frontmatter: {
            tag: 'tag',
            category: 'category',
          }
        }
      },
    }),
  ]],
  theme,
});
