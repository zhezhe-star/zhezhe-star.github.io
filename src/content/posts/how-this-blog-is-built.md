---
author: Zhe
pubDatetime: 2026-11-12T11:00:00+08:00
title: 这个博客是怎么搭起来的
featured: false
draft: false
tags:
  - Astro
  - GitHub Pages
description: AstroPaper + GitHub Actions + GitHub Pages，一条从模板到上线的完整路径。
---

这个博客没有自己从零写页面，而是直接选了一个成熟的主题，再把重点放在内容和长期维护上。

## 技术栈

| 部分     | 选择                                                  |
| -------- | ----------------------------------------------------- |
| 站点框架 | [Astro](https://astro.build/)                         |
| 主题     | [AstroPaper](https://github.com/satnaing/astro-paper) |
| 样式     | Tailwind CSS                                          |
| 搜索     | Pagefind                                              |
| 托管     | GitHub Pages                                          |
| 部署     | GitHub Actions                                        |

## 为什么选 AstroPaper

它足够轻，构建出来是纯静态页面；同时该有的功能都有：

- 深色 / 浅色模式
- 文章标签、归档、分页
- 静态全文搜索
- RSS、Sitemap、SEO 元信息
- Markdown / MDX 写作

对个人博客来说，不需要数据库，也不需要服务器，维护成本很低。

## 部署方式

每次把文章 push 到 `main` 分支，GitHub Actions 会自动执行：

1. 安装依赖
2. 构建 Astro 站点
3. 生成 Pagefind 搜索索引
4. 发布到 GitHub Pages

整个过程不需要手动上传文件。

## 写一篇新文章

在 `src/content/posts/` 下新建一个 `.md` 文件，填好 frontmatter，然后提交即可：

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

简单，够用，可以一直写下去。
