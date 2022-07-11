import { defaultTheme } from "vuepress";

module.exports = {
  lang: "zh-CN",
  title: "wawa 的前端学习记录",
  description: "记录前端开发中的学习笔记",
  pagePatterns: ["**/*.md", "!README.md", "!node_modules"],
  logo: "/images/ldjj.jpg",
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: "首页",
        link: "/",
      },
    ],
  }),
};
