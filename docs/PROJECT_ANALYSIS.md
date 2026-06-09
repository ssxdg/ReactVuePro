# 项目功能分析与文档优化提案

> 前端技能训练平台（Frontend Skills Trainer）

本文件对当前实现进行客观盘点，与《docs/PLAN.md》的预期进行差距分析，并提供可执行的修复与优化路线，同时补充一份更全面的“知识点覆盖清单”，作为后续内容建设与功能迭代的参考基线。

---

## 一、当前实现概览（基于代码事实）

- 技术栈
  - React 18 + Vite 5（已配置 vite.config.js：@vitejs/plugin-react，dev 端口 3000）
  - Ant Design 5（定制 Token 与主题切换）
  - Monaco Editor（@monaco-editor/react，CDN 加载）
- 核心模块
  - `Sidebar`：从 `data/skillsData.js` 读取技能分类与条目
  - `SkillDetail`：知识点详情、关键知识点、在线代码编辑与预览
  - `CodeEditor`：Monaco 编辑器（HTML/CSS/JS 三栏）
  - `PreviewPane`：iframe sandbox 在线预览
  - `AppContext`：主题与当前技能的轻量状态
- 内容组织
  - 全部知识点与示例以 JS 对象硬编码在 `data/skillsData.js` 中
- 已具备的用户价值
  - 左侧技能树 → 右侧详情 + 在线练习 + 预览
  - 深浅色主题切换，较为一致的 UI 风格

---

## 二、与《PLAN.md》预期的主要差异

- 功能维度
  - 仅实现“学习 + 在线演练(HTML/CSS/JS)”的最小闭环；
  - 未实现：实践题模板、自动判题、面试模式、进度管理、收藏/错题本；
  - React/Vue 在线运行未落地（PLAN 期望通过 Babel Standalone 与 @vue/compiler-sfc 动态编译）。
- 内容维度（知识覆盖）
  - 已覆盖：HTML/CSS/JS/TS、Vue2/3、React（条目较基础）；
  - 缺少：Node.js、工程化（构建、打包、质量体系）、浏览器原理、网络、算法、面试题等大块；
  - 现有条目多数为“入门/概念+示例”，深度与系统性不足。
- 工程与体验
  - 未使用 TypeScript（PLAN 推荐 TS）；
  - 状态管理为 Context，未引入 Zustand/Redux（PLAN 预期可选其一）；
  - 内容硬编码在 JS 文件中，缺少 Markdown 渲染管线（PLAN 提到 remark/rehype）；
  - 无路由与可分享的深链；
  - 构建产物存在，但缺少部署与版本化说明。
- 重要缺陷（已发现）
  - 预览未注入用户 CSS：`PreviewPane` 计算了 `s = css`，但未写入 `<style>`，导致示例样式无法生效，体验与预期差异显著。
  - 部分图标命名可能与新版 `@ant-design/icons` 不完全匹配（小概率运行时告警）。

---

## 三、短期修复与增强（MVP 强化，建议本周完成）

- 修复预览 CSS 未生效（高优）
  - 在 `PreviewPane` 的 `srcDoc` 中合并基础样式与用户 CSS，以还原示例预期效果。
- 补齐基础体验
  - 为每个知识点增加“期望学习目标”“建议练习”字段（仍可先硬编码），提高学习闭环感；
  - 为每个分类增加“进阶阅读/外链”位，提升深度。
- 工程与可维护性
  - 添加 `README` 与“快速启动/打包/预览/部署”说明；
  - 引入简单路由（React Router）以支持可分享深链（如 `#/skill/html-basic`）。

---

## 四、阶段性路线（与 PLAN 对齐的轻量版本）

- 阶段 1（MVP 质量提升）
  - 修复预览 CSS；补充目标/练习/外链；引入路由；完善文档与脚本。
- 阶段 2（实践 + 评测）
  - 增加“练习题模板 + 本地断言校验”（在 iframe 内运行测试，展示通过率与日志）。
- 阶段 3（内容扩展 + 体系化）
  - 建立 Markdown 内容管线（remark/rehype），将 `skillsData.js` 逐步迁移为 `docs/skills/**/*.md`；
  - 扩展 Node.js/工程化/浏览器/网络/算法/面试 六大类基础目录与若干条目。

---

## 五、知识点覆盖清单（扩展版基线）

- HTML
  - 语义化、表单与校验、多媒体、Canvas、SVG、WebStorage、WebSocket
- CSS
  - 选择器、盒模型、Flex、Grid、Position、BFC、居中方案、动画、响应式、CSS 变量、层叠与优先级
- JavaScript
  - 类型与转换、作用域/闭包、原型与继承、this/bind、异步（Promise/Async/Await/EventLoop）、模块化、错误处理与调试、性能与内存、手写题（深拷贝/防抖节流/Promise 实现）
- TypeScript
  - 基础类型、接口与类型别名、泛型、条件类型、工具类型、声明与类型体操、React/Vue 场景实战
- Vue 2 / Vue 3
  - 生命周期、组件通信、路由、状态管理（Vuex/Pinia）、Composition API、性能优化、常见问题
- React
  - JSX、组件/Props/State、生命周期与 Hooks、Context、Router、性能优化、可访问性、并发特性（React18）
- Node.js（新增）
  - 模块与包管理、HTTP/Express/Koa、文件与流、异步与性能、日志与配置、部署与监控
- 工程化（新增）
  - Vite/Webpack/Rollup、Babel、ESLint/Prettier/Stylelint、单测（Jest/Vitest）与 E2E、CI/CD、Commitlint/Release、性能与体积分析
- 浏览器原理（新增）
  - 渲染流程、回流与重绘、事件与冒泡、跨域与安全（CSP、XSS、CSRF）、存储与缓存、Service Worker
- 网络（新增）
  - TCP/UDP、HTTP1.1/2/3、TLS、缓存与压缩、CDN、WebSocket/SSE、Fetch/Abort、重试与幂等
- 算法（新增）
  - 数组/字符串/哈希/栈队列/链表/树/图、排序与搜索、双指针/滑动窗口/二分/DFS/BFS、复杂度分析
- 面试题（新增）
  - 高频概念问答、手写实现清单、场景题（性能/安全/架构/边界）

> 建议采用“广度优先 + 逐步加深”的方式，每类先铺 5～10 个核心条目，再进行纵深扩写与题目化。

---

## 六、内容与数据结构建议（便于扩展）

- 过渡方案（短期）：继续在 `skillsData.js` 中新增字段
  - `learningGoals: string[]`
  - `practices: { title, starterCode, expected }[]`
  - `refs: { title, url }[]`
- 长期方案：迁移到 Markdown（`/docs/skills/<category>/<id>.md`）
  - 前置元数据（frontmatter）承载 title、difficulty、refs 等
  - 正文以教程 + 练习 + 面试题的结构书写

---

## 七、运行与开发说明（补充）

- 开发
  - `npm i`
  - `npm run dev`（http://localhost:3000）
- 构建与预览
  - `npm run build` → `dist/`
  - `npm run preview`
- 兼容性与外网依赖
  - Monaco 通过 CDN 加载，如需离线/内网环境，建议改为本地静态资源或自建代理。

---

## 八、已知问题与风险

- 预览 CSS 未注入，导致“示例样式不生效”的体验落差（应首修）。
- iframe sandbox 权限有限，需谨慎开放 `allow-same-origin/allow-forms` 等（安全优先）。
- 内容硬编码导致协作成本高，后续需尽快引入 Markdown 渲染管线。

---

## 九、验收标准（MVP 阶段）

- 功能：HTML/CSS/JS 在线演练可正确渲染样式与脚本；
- 体验：每个知识点包含目标/关键点/示例/练习/外链五块；
- 工程：提供可运行脚本、路由可直达具体知识点、文档完整（本文件 + README）；
- 内容：新增 20+ 条“新增类目”的基础条目清单（占位即可），为迭代做铺垫。

---

如需，我可以继续：
- 修复 `PreviewPane` 的 CSS 注入问题；
- 新增路由与深链；
- 起草 Markdown 内容结构与示例模板；
- 扩充 6 大新增类目的首批条目与练习。
