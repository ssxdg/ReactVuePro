# 前端技能训练平台（Frontend Skills Trainer）

## 概述
在 E:\LLM\ReactVuePro 根目录创建 React + Vite 单页应用，用于前端工程师培训。左侧分类技能树，右侧展示详情 + Monaco 编辑器 + 实时预览。支持深色/浅色主题切换，专业美观的 UI。

## 设计系统
- 风格: Minimalism & Swiss Style
- 配色: Educational App #4F46E5 靛蓝 / #818CF8 / #F97316
- 字体: Noto Sans SC(中文) + JetBrains Mono(代码)
- 主题: 浅色/深色双模式

## 技术栈
React 18 + Vite 5 + Ant Design 5.x + @monaco-editor/react

## 项目结构
```
E:\LLM\ReactVuePro\
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx / App.css
│   ├── theme.js
│   ├── context/
│   │   └── AppContext.jsx
│   └── components/
│       ├── Sidebar.jsx
│       ├── SkillDetail.jsx
│       ├── CodeEditor.jsx
│       ├── PreviewPane.jsx
│       └── Welcome.jsx
├── data/
│   └── skillsData.js
└── public/
```

这是一个非常适合作为**前端培训平台（Frontend Learning Platform）**的项目。对于你的背景（3年前端开发经验 + 正在准备 React/Vue 面试），这个项目不仅能训练技术能力，还能作为一个高质量作品集项目。

我建议把项目定位为：

> Frontend Skill Training Platform（前端技能训练平台）

目标不是简单的知识文档，而是：

* 学习（Learn）
* 实践（Practice）
* 测试（Challenge）
* 面试（Interview）
* 项目实战（Project）

五位一体的前端训练系统。

---

# 一、项目概述

## 项目名称

Frontend Skill Training Platform

前端技能训练平台

---

## 项目目标

帮助前端工程师系统学习：

* HTML
* CSS
* JavaScript
* TypeScript
* Vue2
* Vue3
* React
* Node.js
* 工程化
* 浏览器原理
* 网络
* 算法
* 面试题

每个知识点都提供：

```text
知识讲解
↓
示例演示
↓
在线练习
↓
代码运行
↓
答案解析
↓
面试题
```

形成完整学习闭环。

---

# 二、项目架构

```text
┌────────────────────────────────┐
│           Header               │
├──────────────┬─────────────────┤
│              │                 │
│   左侧菜单    │   学习区         │
│              │                 │
│ 技能树导航    │ 知识讲解         │
│              │ 示例代码         │
│              │ 在线练习         │
│              │ 运行结果         │
│              │ 面试题           │
│              │                 │
├──────────────┴─────────────────┤
│        Code Playground         │
└────────────────────────────────┘
```

---

# 三、技术选型

## 前端

### 推荐

```text
React18
TypeScript
Vite
```

原因：

* 企业使用率高
* 训练 React
* 支持插件扩展

---

## UI框架

推荐：

```text
Ant Design
```

或者

```text
Arco Design
```

---

## 状态管理

```text
Zustand
```

或者

```text
Redux Toolkit
```

---

## 编辑器

```text
CodeMirror6
```

或者

```text
Monaco Editor
```

VSCode同款编辑器。

---

## Markdown渲染

```text
remark
rehype
```

---

## 在线运行

### HTML/CSS/JS

```text
iframe sandbox
```

运行用户代码。

---

### Vue

```text
@vue/compiler-sfc
```

动态编译。

---

### React

```text
Babel Standalone
```

浏览器实时编译。

---

# 四、页面规划

## 首页

```text
技能总览

HTML
CSS
JavaScript
TypeScript
Vue2
Vue3
React
...
```

显示：

```text
完成度
练习数
面试题数
```

---

## 技能学习页

例如：

```text
React
```

左侧：

```text
React基础

├─ JSX
├─ Component
├─ Props
├─ State
├─ 生命周期
├─ Hooks
├─ Router
├─ Redux
├─ 性能优化
```

右侧：

```text
知识介绍
代码示例
在线练习
```

---

# 五、技能树设计

## HTML

```text
HTML

├─ 标签
├─ 语义化
├─ 表单
├─ 音视频
├─ Canvas
├─ SVG
├─ WebStorage
├─ WebSocket
```

---

## CSS

```text
CSS

├─ 选择器
├─ 盒模型
├─ Flex
├─ Grid
├─ Position
├─ 动画
├─ BFC
├─ 居中方案
├─ 响应式
├─ CSS变量
```

---

## JavaScript

```text
JS

├─ 数据类型
├─ 原型链
├─ this
├─ 闭包
├─ Promise
├─ EventLoop
├─ Async/Await
├─ 深拷贝
├─ 防抖节流
├─ 手写Promise
```

---

## TypeScript

```text
TS

├─ 类型系统
├─ Interface
├─ Type
├─ Generics
├─ Utility Types
├─ Decorator
├─ Infer
├─ Conditional Type
```

---

## Vue2

```text
Vue2

├─ MVVM
├─ 生命周期
├─ computed
├─ watch
├─ Vuex
├─ Router
├─ Diff
├─ 响应式原理
```

---

## Vue3

```text
Vue3

├─ Composition API
├─ ref
├─ reactive
├─ watch
├─ watchEffect
├─ Pinia
├─ Teleport
├─ Suspense
├─ Diff
```

---

## React

```text
React

├─ JSX
├─ State
├─ Props
├─ 生命周期
├─ Hooks
├─ Context
├─ Router
├─ Redux
├─ Fiber
├─ Diff
├─ React18
```

---

# 六、训练模式设计

## 1. 学习模式

展示：

```text
知识讲解
原理图
示例代码
```

---

## 2. 实践模式

题目：

```text
实现一个防抖函数
```

代码区：

```js
function debounce() {

}
```

用户填写。

---

## 3. 自动判题

运行测试用例：

```js
expect(debounce()).toBe(...)
```

显示：

```text
通过率
执行时间
```

---

## 4. 面试模式

随机抽题：

```text
什么是闭包？
```

点击：

```text
查看参考答案
```

---

# 七、代码编辑器设计

## 左侧

题目描述

```text
实现Promise.all
```

---

## 中间

```text
Monaco Editor
```

---

## 右侧

```text
测试结果
```

---

## 底部

```text
Console
```

输出：

```js
console.log()
```

---

# 八、数据库设计

## skill

```sql
id
name
icon
sort
```

---

## category

```sql
id
skill_id
name
sort
```

---

## lesson

```sql
id
category_id
title
content
difficulty
```

---

## challenge

```sql
id
lesson_id
title
description
template_code
answer
```

---

## interview

```sql
id
lesson_id
question
answer
```

---

# 九、进阶功能

## AI讲解

接入：

```text
OpenAI
DeepSeek
Claude
```

功能：

```text
解释代码
生成练习题
生成面试题
```

---

## AI代码审查

用户提交：

```js
Promise.all实现
```

AI分析：

```text
代码质量
复杂度
优化建议
```

---

## AI模拟面试

例如：

```text
React生命周期是什么？
```

用户回答：

```text
...
```

AI评分：

```text
85分
```

---

# 十、项目阶段规划

## 第一阶段（2周）

MVP

完成：

* 技能树
* Markdown文档
* Monaco编辑器
* 在线运行

---

## 第二阶段（2周）

练习系统

完成：

* 题库
* 自动判题
* 进度管理

---

## 第三阶段（2周）

面试系统

完成：

* 面试题库
* 随机抽题
* 收藏功能

---

## 第四阶段（2周）

AI能力

完成：

* AI讲解
* AI审查
* AI模拟面试

---

# 简历项目亮点（面试加分）

如果完成到第三阶段，这个项目可以包装为：

**Frontend Skill Training Platform（前端技能训练平台）**

技术栈：

```text
React18
TypeScript
Vite
Zustand
Ant Design
Monaco Editor
Markdown
Web Worker
IndexedDB
Node.js
```

核心亮点：

* 动态技能树系统
* 在线代码编辑与运行
* 自动判题引擎
* 面试题训练系统
* AI 辅助学习平台
* 插件化知识点扩展架构

这个项目的复杂度已经达到中高级前端工程师作品集水平，非常适合作为你应聘 React/Vue 前端岗位时的核心项目。
