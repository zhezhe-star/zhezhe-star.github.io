# run-log.md — 个人博客证据日志

> Orca 执行期的黑匣子：所有决策、验证证据、失败诊断按时间顺序追加，只增不删。  
> 每条带 ISO 时间戳 + 类型。这是复盘（/orca-retro）和验收的唯一证据来源。  
> 本文件于 2026-11-24 根据聊天上下文、git log、GitHub Actions 与本地截图证据补建。

## 条目格式

```
### [<ISO 时间戳>] <类型>
<内容>
```

类型说明：`decision` / `evidence` / `failure` / `milestone` / `checkpoint` / `quota-stop` / `evolve` / `release` / `publish`。

---

## 日志

### [2026-11-12T18:00:00+08:00] decision
- 老板要求调研 GitHub.io 个人博客并选择可挂载模板。
- 对比 AstroPaper、Hugo PaperMod、Hexo、Jekyll、Next.js Starter Blog。
- **决定**：选择 Astro + AstroPaper。理由：静态输出、构建快、内置搜索/标签/归档/RSS/深色模式、Markdown 工作流简单，GitHub Pages 部署成本低。
- **影响范围**：新仓库 `~/Projects/personal-blog` 与远程 `zhezhe-star/zhezhe-star.github.io`。

### [2026-11-12T18:44:30+08:00] checkpoint
- commit：`caafa5f Initial personal blog`
- 内容：中文化、系统字体、站点配置、两篇起始文章、自定义 favicon 与 OG 图；移除模板示例文章；新增 GitHub Pages deploy workflow。
- 验证：本地 lint、format、build 通过。

### [2026-11-12T18:45:02+08:00] publish
- 分支：`main`
- 提交：`caafa5f Initial personal blog`
- 推送：`origin/main`
- workflow：`43203096829`
- 结果：`success`
- 发布：`https://zhezhe-star.github.io/`

### [2026-11-12T18:45:50+08:00] evidence
- 首次部署验证：
  - `curl https://zhezhe-star.github.io/` 返回 200。
  - HTML title：`Zhe 的博客`。
  - 首屏包含“你好，我是 Zhe 👋”。
  - `/posts/hello-world/`、`/about/`、`/archives/`、`/tags/`、`/search/` 返回 200。

### [2026-11-12T18:52:00+08:00] decision
- 老板确认网站定位为两类内容：个人项目展示、分享文章。
- **决定**：新增 `/projects/` 项目页、`ProjectCard`、集中项目数据 `src/data/projects.ts`；首页增加精选项目；导航改为“项目 / 文章 / 关于”。
- **影响范围**：`src/pages/projects.astro`、`src/components/ProjectCard.astro`、`src/data/projects.ts`、`src/pages/index.astro`、`Header`、i18n。

### [2026-11-12T18:53:52+08:00] checkpoint
- commit：`898f219 Add personal projects showcase`
- 内容：项目页、项目数据、项目卡片、首页精选项目、关于页同步更新。

### [2026-11-12T18:53:56+08:00] publish
- 分支：`main`
- 提交：`898f219 Add personal projects showcase`
- 推送：`origin/main`
- workflow：`43204394146`
- 结果：`success`

### [2026-11-12T18:55:52+08:00] checkpoint
- commit：`8e3a19d Refine navigation and project section labels`
- 内容：导航与项目区块文案调整。

### [2026-11-12T18:55:56+08:00] publish
- 分支：`main`
- 提交：`8e3a19d Refine navigation and project section labels`
- 推送：`origin/main`
- workflow：`43204684613`
- 结果：`success`

### [2026-11-12T18:56:35+08:00] evidence
- 首页结构验证：HTML 同时包含“项目 / 文章 / 关于 / 精选项目 / 精选文章”。
- `/projects/` 返回 200。
- 项目封面资源线上加载成功。

### [2026-11-12T18:59:35+08:00] checkpoint
- commit：`532e925 Refine personal positioning and homepage intro`
- 内容：站点标题改为“Zhe · 三寸工程师”；首屏新增三方向定位卡；关于页与项目页介绍同步更新；OG 图更新。

### [2026-11-12T18:59:39+08:00] publish
- 分支：`main`
- 提交：`532e925 Refine personal positioning and homepage intro`
- 推送：`origin/main`
- workflow：`43205203160`
- 结果：`success`

### [2026-11-12T19:00:45+08:00] evidence
- 线上验证：
  - title：`Zhe · 三寸工程师`。
  - HTML 包含三方向文案与“Zhe · 三寸工程师”。
- 决策保留老板原话表述；“三寸”具体含义与“稳定直播”业务形态待后续确认，不擅自扩写。

### [2026-11-12T19:02:54+08:00] checkpoint
- commit：`aab25f4 Limit public project showcase to three projects`
- 内容：项目数据只保留 Football Fans、AgentVault、WordMem；删除其他项目数据与封面；项目页开头说明“其他还在进行中的项目，等稳定后再放上来”。

### [2026-11-12T19:02:58+08:00] publish
- 分支：`main`
- 提交：`aab25f4 Limit public project showcase to three projects`
- 推送：`origin/main`
- workflow：`43205708891`
- 结果：`success`

### [2026-11-12T19:03:45+08:00] evidence
- 首次收敛后验证：`/projects/` 只包含 AgentVault、Football Fans、WordMem；3 个项目封面返回 200。
- 被删除项目名不在 HTML 中。

### [2026-11-24T17:04:00+08:00] decision
- 老板反馈 Web 端体验不好，质疑宽度写死。
- **诊断**：AstroPaper 全局 `app-layout` 使用 `max-w-3xl`（768px），桌面内容过窄；项目页受该约束最明显。
- **决策**：先做保守修复：项目页改用 `wide-layout max-w-6xl`（1152px），保留长文页面 768px 可读列宽；等老板确认后再决定是否全站统一。
- **影响范围**：`src/styles/global.css`、`src/pages/projects.astro`。

### [2026-11-24T17:16:36+08:00] evidence
- 本地构建与截图验证：
  - `/tmp/projects-max6-1440.png`
  - `/tmp/projects-max6-1680.png`
  - `/tmp/projects-max6-1920.png`
  - 项目页在 1440/1680/1920 不再呈窄长条；3 项目仍为两列布局，第三卡下方存在空位。
- 静态检查：ESLint、Prettier、Astro build 通过。

### [2026-11-24T17:17:22+08:00] checkpoint
- commit：`0183566 Improve desktop layout width and project grid`
- 内容：新增 `wide-layout`；`/projects/` 主容器改为 `wide-layout max-w-6xl`。

### [2026-11-24T17:17:28+08:00] publish
- 分支：`main`
- 提交：`0183566 Improve desktop layout width and project grid`
- 推送：`origin/main`
- workflow：`45363778810`
- 结果：`success`

### [2026-11-24T17:18:23+08:00] evidence
- workflow `45363778810` Build 与 Deploy to GitHub Pages 均为 `success`。
- 线上部署完成，最新 commit 为 `0183566`。
- 待办：仍需真实 1440/1920 浏览器由老板复验；首页/文章页宽度策略未最终确定。

### [2026-11-24T17:38:22+08:00] evidence
- 项目范围线上复查：
  - `https://zhezhe-star.github.io/projects/` 返回 200。
  - HTML 只出现 AgentVault、Football Fans、WordMem。
  - `https://zhezhe-star.github.io/projects/zhe-coding-agent.png` 返回 404。
  - 三个保留项目封面均返回 200。

### [2026-11-24T17:45:00+08:00] milestone
- **M0 历史交付盘点完成**：
  - 个人博客已上线。
  - 两类内容结构完成。
  - 三方向定位上线。
  - 对外项目收敛为 3 个。
  - 项目页桌面宽度第一版修复完成并部署。
- **遗留**：全站宽度策略、大屏项目网格视觉、封面性能与 Web Guidelines 细项复查、真实浏览器最终验收。

### [2026-11-24T18:02:31+08:00] decision
- 按老板要求补建 devflow 三件套，作为后续 issue 处理的唯一事实源。
- **决策**：
  1. `plan.md` 当前状态为 `draft`，批准时间 `PENDING`，等待老板批准。
  2. 历史任务在 `checklist.yaml` 中补录为 `complete`，证据引用本 run-log 时间戳。
  3. 桌面宽度策略、大屏视觉策略、最终验收均标记 `owner_gate: true`，依赖老板决策。
  4. 三件套仅本地落盘，不推送；是否随后续计划进入仓库由老板批准。
- **影响范围**：仅流程文件，不改业务代码。

### [2026-11-24T18:02:31+08:00] milestone
- **M1 流程初始化进行中**：
  - 已补建 `plan.md`、`checklist.yaml`、`run-log.md`。
  - 历史工作已按可验证证据补录。
  - 后续任务待老板批准计划后开始。
### [2026-11-24T19:43:17+08:00] decision
- 老板在 Orca 转交消息中回复「批准」，批准当前 `plan.md`。
- **决策**：
  1. `plan.md` 状态由 `draft` 改为 `approved`，批准时间为 `2026-11-24T19:43:17+08:00`。
  2. 按批准流程，三件套先以 docs commit 推送 `main`。
  3. 开始执行不依赖老板决策的 `T008`、`T009`；`T006`、`T007` 保持 pending 等 owner 决策。
  4. 后续高风险操作（新增依赖等）仍按决策节点 3 先停下审批。


### [2026-11-24T19:54:36+08:00] decision
- 老板在 Orca item 上拍板：`T007` 定案为「大屏 3 个项目改三列铺满」，直接实施。
- **决策**：`/projects/` 桌面网格从两列改为三列（`md:grid-cols-2 lg:grid-cols-3`），小步提交并验证。
- `T008`、`T009` 继续执行；`T006` 先调研业界最佳实践，调研结论返回老板选择。

### [2026-11-24T19:54:36+08:00] decision
- **T006 桌面宽度调研结论（带来源）**：
  1. WCAG 2.0 §4.8 Visual Presentation（AAA）：文本块宽度不超过 80 字符，中日韩不超过 40 字符。来源：https://www.w3.org/TR/WCAG20/#visual-audio-contrast-visual-presentation
  2. Practical Typography（Matthew Butterick）：平均行长建议 45–90 字符（含空格）。来源：https://practicaltypography.com/line-length.html
  3. Tailwind Typography 官方插件 v0.5.20 源码：`.prose` 默认 `maxWidth: 65ch`，即生态默认做法是「外层容器自由 + 正文内部 65ch 约束」。来源：https://github.com/tailwindlabs/tailwindcss/blob/main/packages/@tailwindcss/typography（`src/styles.js`）
- **结论**：业界证据明确支持「统一外层容器 + 正文内部 65ch 约束」的混合模式；单一统一 1152px 会让文章正文行长超过 90 字符，不符合上述排版与可访问性建议。
- **按老板指示停下**：将两个候选方案（A 纯统一宽度 / B 统一容器+正文 65ch）转老板选择，`T006` 保持 pending。

### [2026-11-24T20:00:05+08:00] evidence
- `T008` 封面优化产物与实现：
  - 生成 1200×750 q90 WebP：AgentVault 21 KB（原 145 KB）、Football Fans 37 KB（原 183 KB）、WordMem 21 KB（原 164 KB），合计 79 KB（原 492 KB，降低 83.9%）。
  - 原图保留在 `public/projects/*.png`，新数据模型增加 `optimizedCover`，当前 UI 使用 q90 WebP。
  - `ProjectCard` 输出 `loading="lazy"` 与 `decoding="async"`，并加 `motion-reduce:transition-none` / `motion-reduce:group-hover:scale-100`。
  - 本地构建产物引用 q90 WebP；首页与 `/projects/` 各 3 张图均带 `loading="lazy"`。
  - 1440/1920 截图：`/tmp/t008-projects-1440.png`、`/tmp/t008-projects-1920.png`、`/tmp/t008-home-1440.png`、`/tmp/t008-home-1920.png`；未见明显视觉退化。

### [2026-11-24T20:00:42+08:00] decision
- `T009` Web Interface Guidelines 复查与最小修复：
  - 已有基础符合项：全局可见 focus outline（`global.css`）；文章页 lightbox、PostToc 已尊重 `prefers-reduced-motion`；Header 主题切换图标为 48px（移动端），导航与按钮主体可点区域正常；文本排版由主题与 prose 控制。
  - 发现并修复 3 处非必要动效：社交图标 hover rotate、分享图标 hover rotate、主题切换图标 transition。统一追加 `motion-reduce:hover:rotate-0` 或 `motion-reduce:transition-none`。
  - 接受项：Footer/项目卡中的普通标签为非交互元素；Pagefind 组件自身样式暂不改动；当前文本对比度来自主题设计，无低对比告警。

### [2026-11-24T20:00:55+08:00] evidence
- `T009` 静态检查：ESLint、Prettier、Astro build 通过。
- 变更文件：`Socials.astro`、`ShareLinks.astro`、`Header.astro`；构建 CSS 包含 `motion-reduce:hover:rotate-0` 与 `motion-reduce:transition-none`。

### [2026-11-24T20:01:10+08:00] checkpoint
- commit：`58db798 fix(projects): use three-column grid on large screens`
- 内容：`/projects/` 大屏网格改 `sm:grid-cols-2 lg:grid-cols-3`。
- 本地验证：1280/1440/1920 三列铺满截图，移动端单列正常。

### [2026-11-24T20:01:30+08:00] publish
- 分支：`main`
- 提交：`58db798`
- 推送：`origin/main`
- workflow：`45388692449`
- 结果：`success`，GitHub Pages 部署成功。
- 线上 HTML 包含 `sm:grid-cols-2 lg:grid-cols-3`。

### [2026-11-24T20:01:35+08:00] publish
- 分支：`main`
- 提交：`0670042 perf(a11y): optimize covers and respect reduced motion`、`845544a style: format socials`
- 推送：`origin/main`
- workflow：`45389562570`（最终成功；`45389497462` 因同分支新 push 被 cancelled）
- 结果：GitHub Pages 部署成功。

### [2026-11-24T20:02:20+08:00] evidence
- 线上复验：
  - `/` 与 `/projects/` 均 200。
  - `/projects/` 引用 3 个 q90 WebP；首页/项目页各 3 张图带 `loading="lazy"`。
  - 线上资源大小：AgentVault 21,012 B、Football Fans 38,246 B、WordMem 8,067 B。
  - 部署 CSS 包含 reduced motion 修复类。
- `T007`、`T008`、`T009` 完成；`T006` 保持 pending，等老板在宽度方案 A/B 中选择。

### [2026-11-24T20:03:00+08:00] milestone
- **M3/M4 完成**：项目页三列铺满、封面性能优化、Web Guidelines 最小修复全部上线。
- **剩余**：`T006` 桌面宽度统一策略（owner choice）；`T010` 最终浏览器验收（owner gate）。

### [2026-11-24T20:13:02+08:00] decision
- 老板拍板 `T006` 采用方案 B：全站外层容器统一 1152px，文章正文在 prose 内部使用 `65ch` 约束。
- **实施口径**：
  1. 将现有 `app-layout` 的宽度从 `max-w-3xl` 调整为 `max-w-6xl`，保留响应式 padding。
  2. 单篇文章正文从 `max-w-app` 改用语义化的 `max-w-prose`，固定为 `65ch`。
  3. TOC 悬浮定位继续引用 `max-w-app`，因为其注释依赖当前主容器宽度，所以同步继承新统一值。
  4. 项目页已有 `wide-layout max-w-6xl` 与新 `app-layout` 合并为同一套 `max-w-6xl` 体系。
- **影响范围**：所有页面外层容器、单篇文章正文列宽、TOC 定位；不改项目数据与功能代码。

### [2026-11-24T20:16:00+08:00] evidence
- `T006` 方案 B 实施证据：
  - 统一外层容器：`app-layout` 改为 `max-w-6xl`（1152px）+ 响应式 padding；项目页删除双轨 `wide-layout`，改用同一 `app-layout`。
  - 文章正文：单篇 post 的 `.app-prose` 外层改用新 `max-w-prose`（65ch）。
  - 构建产物 CSS：`.app-layout{max-width:var(--container-6xl)}`、`.max-w-prose{max-width:65ch}`。
  - 本地 lint、format:check、build 全部通过。
  - 390/768/1280/1440/1920 截图：`/tmp/t006-home-*.png`、`/tmp/t006-projects-*.png`、`/tmp/t006-post-*.png`、`/tmp/t006-about-*.png`。
  - 大屏首页骨架变宽，正文页正文仍为窄列居中；移动端未发现横向滚动。

### [2026-11-24T20:16:00+08:00] milestone
- **M2 完成**：全站桌面宽度策略按方案 B 落地。
