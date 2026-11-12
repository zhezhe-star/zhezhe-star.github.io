# Zhe 的博客

基于 [Astro](https://astro.build/) + [AstroPaper](https://github.com/satnaing/astro-paper) 的个人博客，部署在 GitHub Pages。

线上地址：https://zhezhe-star.github.io/

## 本地开发

需要 Node.js 22+ 和 pnpm。

```bash
pnpm install
pnpm dev
```

打开终端里提示的本地地址即可预览。

## 构建

```bash
pnpm build
pnpm preview
```

构建产物在 `dist/`。

## 写新文章

在 `src/content/posts/` 下新建 `.md` 或 `.mdx` 文件：

```md
---
title: 文章标题
pubDatetime: 2026-11-12T12:00:00+08:00
description: 一句话摘要
tags:
  - 标签
---

正文从这里开始。
```

可选字段：

- `featured: true`：在首页「精选」中展示
- `draft: true`：草稿，不发布
- `modDatetime`：更新时间
- `ogImage`：自定义社交分享图

## 自定义

- 站点信息、社交链接：`astro-paper.config.ts`
- 首页欢迎语：`src/pages/index.astro`
- 关于页面：`src/content/pages/about.md`
- 主题色：`src/styles/theme.css`
- 中英文案：`src/i18n/lang/zh-CN.ts`

## 部署

推送到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

首次使用时，需要在仓库的 **Settings → Pages** 中把 **Source** 设为 **GitHub Actions**。
