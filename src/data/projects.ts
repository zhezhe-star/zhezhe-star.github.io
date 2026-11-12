export type ProjectCategory = "ai" | "product" | "language";
export type ProjectVisibility = "public" | "private" | "local";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  visibility: ProjectVisibility;
  year: string;
  cover: string;
  coverAlt: string;
  highlights: string[];
  tags: string[];
  links: ProjectLink[];
  note?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "agentvault",
    name: "AgentVault",
    tagline: "给 AI Agent 用的本地密钥保险箱",
    description:
      "集中管理 AI 应用和 Agent 依赖的第三方 API 密钥，降低泄露风险，并在密钥泄露或疑似泄露时快速吊销、切换和恢复。",
    category: "ai",
    visibility: "public",
    year: "2026",
    cover: "/projects/agentvault.png",
    coverAlt: "AgentVault 项目封面",
    highlights: [
      "本地优先加密存储，密钥不落在明文 .env 或配置文件里",
      "按应用、Agent、环境和工具隔离凭据，落实最小权限",
      "泄露时一键禁用旧密钥、签发新密钥，并让依赖方自动恢复",
      "记录使用与轮换审计，系统下线时强制清理凭据",
    ],
    tags: ["Local-first", "加密", "密钥管理", "审计"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/zhezhe-star/AgentVault",
      },
    ],
    featured: true,
  },
  {
    slug: "football-fans",
    name: "Football Fans",
    tagline: "AI 足球观赛助手",
    description:
      "覆盖赛程、比赛详情、球队资料和 AI 赛前预测的看球工具，同时提供 Web 前端和微信小程序。",
    category: "product",
    visibility: "private",
    year: "2026",
    cover: "/projects/football-fans.png",
    coverAlt: "Football Fans 小程序界面截图",
    highlights: [
      "赛程、球队、球员数据定时同步",
      "AI 赛前预测、比赛资讯和比赛脉络",
      "Go 后端 + Next.js 前端 + 微信原生小程序",
      "一条命令启动本地开发环境",
    ],
    tags: ["Go", "Next.js", "微信小程序", "AI 预测"],
    links: [],
    note: "私有项目 · 可线下演示",
    featured: true,
  },
  {
    slug: "wordmem",
    name: "WordMem",
    tagline: "从文件导入开始的单词记忆 App",
    description:
      "面向英语学习者的 iOS 单词背诵应用，重点优化从 JSON / TXT 文件导入词库的体验。",
    category: "language",
    visibility: "public",
    year: "2026",
    cover: "/projects/wordmem.png",
    coverAlt: "WordMem 项目封面",
    highlights: [
      "支持 JSON / TXT 文件导入词库",
      "通过系统文件选择器从 iCloud Drive 或文件 App 导入",
      "导入后在 App 内直接开始背诵",
      "原生 SwiftUI 实现，轻量、无网络依赖",
    ],
    tags: ["SwiftUI", "iOS", "语言学习"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/zhezhe-star/WordMem",
      },
    ],
    featured: true,
  },
];

export const featuredProjects = projects.filter(project => project.featured);

export const visibilityLabel: Record<ProjectVisibility, string> = {
  public: "开源",
  private: "私有",
  local: "本地",
};
