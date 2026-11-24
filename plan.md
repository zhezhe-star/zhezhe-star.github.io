# plan.md — 个人博客持续迭代

> Orca 蓝图。本计划基于 2026-11-24 的历史工作复盘补建，用于后续按 devflow 流程继续处理个人博客 issue。  
> 决策节点 0 澄清完成后由 Agent 填写，决策节点 1 由人批准。  
> 批准后本文件是执行期的唯一蓝图；压缩/重启后必须重读。  
> 本文件面向人阅读，用中文撰写（代码、标识符、提交信息等保持英文）。

- **创建时间**：2026-11-24T18:02:31+08:00
- **批准时间**：2026-11-24T19:43:17+08:00
- **当前状态**：approved

## 1. 目标状态

个人博客继续作为对外主页稳定运行：站点保持 `Astro + AstroPaper + GitHub Pages` 自动部署，内容分成「个人项目」和「分享文章」两类；对外只展示稳定项目；桌面端宽度、项目卡片观感和 Web 交互细节经过验收优化；所有新增改动按 devflow 记录证据。

## 2. “完成”如何度量（验收口径）

- [ ] `git -C ~/Projects/personal-blog status --short --branch` 显示 `main...origin/main` 且无未提交业务改动。
- [ ] `npx pnpm@latest run lint` 通过。
- [ ] `npx pnpm@latest run format:check` 通过。
- [ ] `npx pnpm@latest run build` 通过。
- [ ] GitHub Pages 最新 workflow 状态为 `success`。
- [ ] `https://zhezhe-star.github.io/` 返回 200。
- [ ] `https://zhezhe-star.github.io/projects/` 返回 200。
- [ ] `/projects/` 页面只包含 Football Fans、AgentVault、WordMem 三个项目名。
- [ ] 在真实 1440 与 1920 浏览器窗口复核宽度与布局，并由老板确认桌面宽度策略。
- [ ] 封面图使用压缩资源，并具备 `loading="lazy"` 与 `decoding="async"`（或记录明确拒绝理由）。
- [ ] Web Interface Guidelines 细项复查完成：`prefers-reduced-motion`、键盘可达、触控目标、focus 状态等有结论或已修复。

## 3. 非目标（明确不做）

本期不做：

- 不改变 Astro / AstroPaper 主题整体架构。
- 不接入评论系统（如 Giscus）。
- 不接入访问统计。
- 不配置自定义域名。
- 不新增或恢复进行中项目。
- 不为历史 issue 重写 git 历史。

## 4. 约束与不变式（绝不能改变的东西）

- `main` 分支必须保持稳定可部署；每次业务变更前构建、Lint 和格式检查通过。
- 对外项目范围只允许 Football Fans、AgentVault、WordMem。
- 不把进行中项目主动发布到站点。
- 站点中文文案保持当前定位：三寸工程师；能做创业，但以稳定直播为主；关注 AI Agent 体验与安全。
- `checklist.yaml` 只追加不改删；状态流转遵守协议。
- 不推送三件套，直到老板批准计划；业务代码变更遵循正常提交流程。

## 5. 失败模式与回滚方案

| 失败模式 | 早期信号 | 回滚方案 |
|---|---|---|
| 桌面布局改动破坏移动端或文章可读性 | 本地 390/768/1280/1920 截图异常 | revert 对应业务提交并重新部署 |
| 项目范围配置错误，意外展示进行中项目 | `/projects/` HTML 出现第 4 个项目名 | revert 项目数据/页面提交，重建并部署 |
| 封面图优化造成视觉模糊或性能退化 | 截图清晰度异常或资源尺寸上升 | 恢复原图或调整压缩参数 |
| Web Guidelines 修复引入交互回归 | Lint/构建通过但浏览器交互异常 | revert 对应 commit |
| workflow 部署失败 | GitHub Actions 显示 `failure` | 保留本地提交，排查后 revert 或修复 |

## 6. 里程碑划分

> 每个里程碑结束时触发【决策节点 2】：停下，汇总证据，等人验收。

### M1：历史工作补录与流程初始化

- **包含任务**：见 `checklist.yaml` 中 `milestone: M1` 的条目。
- **验收证据要求**：三件套存在且可读；checklist 统计与历史 git/CI 证据一致；不涉及业务代码变更。

### M2：桌面宽度策略验收

- **包含任务**：见 `checklist.yaml` 中 `milestone: M2` 的条目。
- **验收证据要求**：老板明确选择全站统一或分页宽度；真实 1440/1920 浏览器截图；对应页面 `/projects/` 与首页/文章页检查结果。

### M3：项目网格与视觉体验优化

- **包含任务**：见 `checklist.yaml` 中 `milestone: M3` 的条目。
- **验收证据要求**：老板在“三列 / 横幅 / 占位卡”中给出选择；实施后构建部署成功，本地截图通过。

### M4：性能与 Web Interface Guidelines 复查

- **包含任务**：见 `checklist.yaml` 中 `milestone: M4` 的条目。
- **验收证据要求**：资源尺寸前后对比；`loading="lazy"` / `decoding="async"` 检查；`prefers-reduced-motion`、键盘与触控目标复查结论。

### M5：最终验收

- **包含任务**：见 `checklist.yaml` 中 `milestone: M5` 的条目。
- **验收证据要求**：干净构建、Lint、格式检查、部署状态、线上 URL 状态，以及老板验收记录。

## 7. 熔断与风险参数

- **连续失败熔断次数 N**：3（同一修复连续失败 N 次 → 停下写失败诊断 → 等人指示）
- **配额预算**：当前任务以本地构建、静态站点检查和少量截图为主，不适用子代理长跑配额预算。
- **高风险操作清单**（触发【决策节点 3】，执行前必须人批）：
  - 修改 GitHub Actions / Pages 部署配置。
  - 删除已发布资源或历史页面。
  - 恢复或新增对外项目。
  - 新增/升级依赖。
  - 修改站点对外定位文案。
  - 对外分享链接、社交账号或联系方式。

## 8. 技术方案要点

- 站点基于 Astro 静态输出，GitHub Actions 使用 pnpm 构建并部署到 GitHub Pages。
- 全局内容列由 `src/styles/global.css` 的 `app-layout` 控制，当前为 `max-w-3xl`（768px）。
- 项目页已改用 `wide-layout max-w-6xl`（1152px），桌面可用宽度更合理。
- 项目数据集中在 `src/data/projects.ts`，封面位于 `public/projects/`。
- 桌面策略待老板确认后再统一或分页调整，避免个人审美假设替代业务验收。
- 长文页面继续优先可读性，正文列不宜盲目全宽。

## 9. 质量闸门与发布影响

- **任务级快速验证**：`npx pnpm@latest run lint`；涉及样式或页面时本地构建并截图。
- **里程碑全量验证**：`npx pnpm@latest run lint && npx pnpm@latest run format:check && npx pnpm@latest run build`。
- **最终验收验证**：干净环境重跑上述全量命令；检查 GitHub Actions `success`；`curl -I` 验证首页与项目页 200。
- **发布影响**：个人站点内容/样式 patch；不涉及 dev-flow toolkit 版本发布。
- **回滚验证**：revert 对应 commit 后重跑全量验证，确认 GitHub Pages workflow `success`，并抽查目标页面。
