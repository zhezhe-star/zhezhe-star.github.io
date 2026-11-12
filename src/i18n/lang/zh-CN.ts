import type { UIStrings } from "../types";

export default {
  nav: {
    home: "首页",
    posts: "文章",
    projects: "项目",
    tags: "标签",
    about: "关于",
    archives: "归档",
    search: "搜索",
  },
  post: {
    publishedAt: "发布于",
    updatedAt: "更新于",
    sharePostIntro: "分享这篇文章：",
    sharePostOn: "分享到 {{platform}}",
    sharePostViaEmail: "通过邮件分享这篇文章",
    tagLabel: "标签",
    backToTop: "回到顶部",
    tableOfContents: "目录",
    goBack: "返回",
    editPage: "编辑此页",
    previousPost: "上一篇",
    nextPost: "下一篇",
  },
  pagination: {
    prev: "上一页",
    next: "下一页",
    page: "第",
  },
  home: {
    socialLinks: "社交链接",
    featured: "精选文章",
    recentPosts: "最新文章",
    allPosts: "全部文章",
    featuredProjects: "精选项目",
    allProjects: "全部项目",
  },
  footer: {
    copyright: "版权所有",
    allRightsReserved: "保留所有权利。",
  },
  pages: {
    tagTitle: "标签",
    tagDesc: "带有该标签的全部文章",

    tagsTitle: "标签",
    tagsDesc: "文章里用到的全部标签。",

    postsTitle: "文章",
    postsDesc: "我发布的所有文章。",

    archivesTitle: "归档",
    archivesDesc: "我归档的所有文章。",

    searchTitle: "搜索",
    searchDesc: "搜索任意文章……",
  },
  a11y: {
    skipToContent: "跳到正文",
    skipTableOfContents: "跳到目录",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    toggleTheme: "切换主题",
    searchPlaceholder: "搜索文章……",
    noResults: "没有找到结果",
    goToPreviousPage: "上一页",
    goToNextPage: "下一页",
  },
  notFound: {
    title: "404 未找到",
    message: "页面不存在",
    goHome: "返回首页",
  },
} satisfies UIStrings;
