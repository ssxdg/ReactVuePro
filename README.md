# 前端技能训练平台 (Frontend Skills Trainer)

一个面向前端开发工程师的交互式技能训练平台，涵盖 HTML、CSS、JavaScript、TypeScript、Vue2、Vue3、React 七大类别 38 个技能点，提供知识讲解 + 在线代码编辑 + 实时预览的完整学习闭环。

## 技术栈

- **React 18** + **Vite 5** 构建工具
- **Ant Design 5** 企业级 UI 组件库（自定义主题）
- **Monaco Editor** VS Code 同款代码编辑器
- **React Router** 支持知识点深链访问
- **双主题切换** 浅色/深色模式

## 快速开始

\\\ash
# 安装依赖
npm install

# 启动开发服务器 → http://localhost:3000
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
\\\

## 项目结构

\\\
E:\LLM\ReactVuePro\
├── index.html                # 入口 HTML
├── package.json              # 依赖配置
├── vite.config.js            # Vite 配置
├── src/
│   ├── main.jsx              # 应用入口
│   ├── App.jsx               # 根组件（路由 + 布局）
│   ├── App.css               # 全局样式
│   ├── theme.js              # Ant Design 主题配置
│   ├── context/
│   │   └── AppContext.jsx    # 全局状态（主题/当前技能）
│   └── components/
│       ├── Sidebar.jsx       # 左侧技能导航树
│       ├── SkillDetail.jsx   # 技能详情 + 练习区
│       ├── CodeEditor.jsx    # Monaco 代码编辑器
│       ├── PreviewPane.jsx   # 实时预览 iframe
│       └── Welcome.jsx       # 首页欢迎页
├── data/
│   ├── skillsData.js         # 38 个技能知识点数据
│   └── skillEnhancements.js  # 学习目标/练习建议/扩展阅读
├── docs/
│   ├── PLAN.md               # 原始计划文档
│   └── PROJECT_ANALYSIS.md   # 项目分析与优化路线
└── README.md                 # 本文件
\\\

## 功能特性

### 目前已实现

- ✅ 七大技能分类导航（HTML/CSS/JS/TS/Vue2/Vue3/React）
- ✅ 38 个技能点知识讲解 + 核心知识点列表
- ✅ 每个技能点的学习目标、练习建议、扩展阅读
- ✅ Monaco Editor 在线代码编辑（HTML/CSS/JS 三栏）
- ✅ iframe 沙盒实时预览
- ✅ 浅色/深色双主题切换
- ✅ 路由深链直达特定知识点

### 规划中

- 📝 练习题模板 + 自动判题引擎
- 📝 面试模式（随机抽题 + 参考答案）
- 📝 学习进度追踪 + 收藏夹
- 📝 Markdown 内容渲染管线
- 📝 Node.js/工程化/浏览器原理等扩展分类

## 如何添加新的技能点

1. 在 \data/skillsData.js\ 的 \skillContent\ 中新增条目
2. 在 \skillCategories\ 对应分类的 \skills\ 数组中添加引用
3. 在 \data/skillEnhancements.js\ 中添加对应的增强数据

## 许可证

MIT
