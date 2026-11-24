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

