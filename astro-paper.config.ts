import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://zhezhe-star.github.io/",
    title: "Zhe · 三寸工程师",
    description:
      "三寸工程师。做创业，也做稳定直播；关注 AI Agent 的体验与安全。",
    author: "Zhe",
    profile: "https://github.com/zhezhe-star",
    ogImage: "default-og.jpg",
    lang: "zh-CN",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/zhezhe-star/zhezhe-star.github.io/edit/main/",
    },
    search: "pagefind",
    toc: true,
  },
  socials: [
    { name: "github", url: "https://github.com/zhezhe-star" },
  ],
  shareLinks: [
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
  ],
});
