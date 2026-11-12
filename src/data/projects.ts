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

export const projectCategories: {
  id: ProjectCategory;
  label: string;
  description: string;
}[] = [
  {
    id: "ai",
    label: "AI & Agent",
    description: "围绕 Agent 的密钥安全、开发流程、编排平台和编码助手。",
  },
  {
    id: "product",
    label: "产品 & 工具",
    description: "解决具体场景问题的小产品，以及自己和团队每天会用的效率工具。",
  },
  {
    id: "language",
    label: "语言学习",
    description: "从真实学习需求出发做的语言学习工具。",
  },
];

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
    slug: "zhe-coding-agent",
    name: "zhe-coding-agent",
    tagline: "基于 Claude Agent SDK 的学习型 Coding Agent",
    description:
      "不依赖 LangChain / LangGraph，用纯 Python 直接构建一个类似 Claude Code 的编码助手，重点是把 Agent 的核心机制讲清楚、跑起来。",
    category: "ai",
    visibility: "public",
    year: "2026",
    cover: "/projects/zhe-coding-agent.png",
    coverAlt: "zhe-coding-agent 项目封面",
    highlights: [
      "纯 Python + Claude Agent SDK，代码结构清晰，适合学习和二次开发",
      "支持文件编辑、命令执行、代码搜索和 TODO 任务管理",
      "提供 Textual TUI、Web GUI、REPL 三种交互模式",
      "通过 MCP 扩展工具能力，保留继续生长的空间",
    ],
    tags: ["Python", "Claude Agent SDK", "MCP"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/zhezhe-star/zhe-coding-agent",
      },
    ],
    featured: true,
  },
  {
    slug: "dev-flow",
    name: "Orca dev-flow",
    tagline: "Agent 自主长跑 + 人类固定决策节点",
    description:
      "一套让 Agent 连续运行数小时到数天、只在关键节点停下来等人确认的开发流程，把「自主」和「可控」放在同一套机制里。",
    category: "ai",
    visibility: "private",
    year: "2026",
    cover: "/projects/dev-flow.png",
    coverAlt: "Orca dev-flow 项目封面",
    highlights: [
      "5 个固定决策节点：需求澄清、计划批准、里程碑验收、高风险操作、最终验收",
      "plan.md + checklist.yaml + run-log.md 三件套，过程可审计、可恢复",
      "Agent 自主执行循环，小步提交、持续跑 CI、保持 draft PR",
      "每轮复盘沉淀 skills / AGENTS.md / eval，让下一轮起点更强",
    ],
    tags: ["Agent Workflow", "长跑", "可审计"],
    links: [],
    note: "私有项目 · 可线下演示",
    featured: true,
  },
  {
    slug: "local-multica",
    name: "local-multica",
    tagline: "本地优先的多 Agent 部署与编排平台",
    description:
      "在单台工作站上部署、编排和观测多个 AI Agent，代码、凭据、任务状态和事件流都留在本机。",
    category: "ai",
    visibility: "private",
    year: "2026",
    cover: "/projects/local-multica.png",
    coverAlt: "local-multica 项目封面",
    highlights: [
      "单机部署多个 Agent，控制平面下沉到本机",
      "复用 multica 的任务隔离、事件流和 profile 机制",
      "方案采用全原生零 Docker + 本机 PostgreSQL",
      "免登录本机身份直通，打开即用",
    ],
    tags: ["Multi-Agent", "Local-first", "Go"],
    links: [],
    note: "私有项目 · 可线下演示",
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
    slug: "yy-tools",
    name: "YY Tools",
    tagline: "表格 OCR 与数据分析工具",
    description:
      "上传表格截图，自动识别表格结构，计算关键指标并导出带颜色编码的 Excel 报告。",
    category: "product",
    visibility: "private",
    year: "2026",
    cover: "/projects/yy-tools.png",
    coverAlt: "YY Tools 表格 OCR 界面截图",
    highlights: [
      "自动检测表格结构，识别准确率 95%+",
      "支持 PNG / JPG / JPEG / BMP / TIFF",
      "自动生成 delta 值对比和颜色编码 Excel",
      "提供 Windows 安装包，本地一站式处理",
    ],
    tags: ["OCR", "Excel", "Windows", "本地处理"],
    links: [],
    note: "私有项目 · 可线下演示",
  },
  {
    slug: "live-info-collection",
    name: "Live Info",
    tagline: "把散落的演出信息聚合成一张清单",
    description:
      "按城市、时间、类型、票价和关注艺人抓取公开演出页面，聚合成一份可筛选的演出列表。",
    category: "product",
    visibility: "local",
    year: "2026",
    cover: "/projects/live-info-collection.png",
    coverAlt: "Live Info 项目封面",
    highlights: [
      "多数据源抓取与聚合",
      "按城市、时间窗口、类型和票价筛选",
      "支持关注艺人匹配",
      "本地 SQLite 缓存，Go 单二进制运行",
    ],
    tags: ["Go", "SQLite", "本地服务"],
    links: [],
    note: "本地项目 · 暂未开源",
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
  },
];

export const featuredProjects = projects.filter(project => project.featured);

export const visibilityLabel: Record<ProjectVisibility, string> = {
  public: "开源",
  private: "私有",
  local: "本地",
};
