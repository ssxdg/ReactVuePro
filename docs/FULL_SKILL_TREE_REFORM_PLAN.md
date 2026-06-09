# 前端全能力树补全整改计划

> 目标：把当前前端技能训练平台从“少量知识点展示”升级为“覆盖前端全能力树的系统化学习平台”，让小白可以按路径完成从 0 到 1 的学习、练习、测试与复盘。

## 一、整改目标

- 补全全部前端核心知识模块，不再只保留 HTML / CSS / JavaScript / TypeScript / Vue2 / Vue3 / React 的局部内容。
- 每个知识点都必须具备统一的教学闭环：概念、原理、示例、练习、误区、自测、面试追问、下一步。
- 学习路径从“分类浏览”改成“阶段推进”，降低小白的认知负担。
- 让平台具备长期维护能力，后续新增知识点时只需按统一模板填充。

## 二、内容组织原则

### 1. 统一知识点模板

每个知识点都应包含以下内容：

- 知识点名称
- 所属模块
- 难度等级
- 前置知识
- 学习目标
- 核心概念
- 核心原理
- 常用语法 / API / 配置
- 典型场景
- 示例代码
- 常见误区
- 练习题
- 验收标准
- 自测题
- 面试追问
- 进阶方向

### 2. 统一学习节奏

- 先理解概念，再看代码，再做练习，再做自测，最后进入面试追问。
- 每个知识点必须能回答四个问题：
  - 它是什么
  - 为什么要学
  - 怎么写
  - 怎么判断学会了

### 3. 统一分层逻辑

- 一级：模块
- 二级：知识点
- 三级：扩展、误区、练习、面试追问

## 三、全模块知识树

### A. HTML 模块

#### 1. HTML 基础结构

- DOCTYPE 与文档模式
- html / head / body 结构
- lang 语言声明
- meta charset、viewport、description
- title 的作用
- 页面骨架模板

#### 2. 文本与语义

- 标题标签 h1~h6
- 段落 p
- 强调 strong / em
- 引用 blockquote / cite
- 代码 code / pre
- 语义化标签 header / main / footer / section / article / aside / nav

#### 3. 链接与资源

- a 链接
- href、target、download
- img、alt
- picture / source
- 外链资源与相对路径

#### 4. 列表与表格

- ul / ol / li
- dl / dt / dd
- table / thead / tbody / tfoot
- 表格语义与可访问性

#### 5. 表单体系

- form
- input 各类型
- label / for / id
- textarea / select / option
- button
- fieldset / legend
- HTML5 校验属性

#### 6. 多媒体与图形

- audio / video
- canvas
- svg
- 媒体控制与资源加载

#### 7. 浏览器存储与通信

- Cookie
- sessionStorage
- localStorage
- History API
- WebSocket

#### 8. 可访问性与 SEO

- 语义化结构
- aria 基础
- tabindex
- alt 文本
- 标题层级
- 表单可用性

---

### B. CSS 模块

#### 1. CSS 基础语法

- 选择器
- 优先级
- 继承与层叠
- 样式书写规范
- 注释与组织方式

#### 2. 盒模型

- content
- padding
- border
- margin
- box-sizing
- margin 折叠

#### 3. 文本与字体

- font-family
- font-size
- font-weight
- line-height
- text-align
- text-overflow
- white-space
- overflow

#### 4. 布局基础

- display
- block / inline / inline-block
- float
- clear
- BFC
- 层叠上下文

#### 5. 定位体系

- static
- relative
- absolute
- fixed
- sticky
- z-index

#### 6. Flex 布局

- 主轴与交叉轴
- 容器属性
- 项目属性
- 等分布局
- 垂直居中
- 响应式换行

#### 7. Grid 布局

- grid-template
- fr 单位
- repeat
- minmax
- grid-area
- 自适应网格

#### 8. 响应式设计

- 媒体查询
- 移动优先
- rem / em / vw / vh
- 图片自适应
- 断点策略

#### 9. 视觉表现

- 背景
- 渐变
- 阴影
- 圆角
- 透明度
- 滤镜

#### 10. 动效体系

- transform
- transition
- animation
- keyframes
- 缓动函数
- 性能优化

#### 11. 现代特性

- CSS 变量
- calc
- clamp
- container query
- scroll 行为

---

### C. JavaScript 模块

#### 1. 语言基础

- 数据类型
- 类型判断
- 类型转换
- 变量声明
- 作用域
- 变量提升

#### 2. 表达式与运算

- 运算符
- 比较规则
- 短路表达式
- 解构
- 展开运算符
- 模板字符串

#### 3. 函数体系

- 函数声明
- 函数表达式
- 箭头函数
- 参数与默认值
- 剩余参数
- 闭包

#### 4. this 与原型

- this 绑定规则
- call / apply / bind
- 构造函数
- 原型链
- 继承

#### 5. 对象与数组

- 对象属性操作
- 数组方法
- 浅拷贝 / 深拷贝
- 不可变数据

#### 6. DOM / BOM

- DOM 查询
- DOM 更新
- DOM 创建与删除
- 属性与样式操作
- 事件
- 事件委托
- BOM 常用 API

#### 7. 异步编程

- 回调
- Promise
- async / await
- 宏任务 / 微任务
- 事件循环

#### 8. 网络请求

- fetch
- XMLHttpRequest
- 请求与响应
- 错误处理
- 请求取消
- 重试与超时

#### 9. 模块化

- CommonJS
- ES Module
- 导入导出
- 模块作用域

#### 10. 数据结构

- Map
- Set
- WeakMap
- WeakSet
- 迭代器
- 生成器

#### 11. 性能与内存

- 防抖
- 节流
- 柯里化
- 内存泄漏
- 垃圾回收
- 性能优化

#### 12. 正则与字符串

- 正则语法
- 捕获组
- 分组
- 边界
- 字符串处理

#### 13. 手写题

- deepClone
- myPromise
- myCall
- myBind
- myNew
- EventEmitter

#### 14. 设计模式

- 单例
- 工厂
- 观察者
- 发布订阅
- 策略
- 代理
- 装饰器

---

### D. TypeScript 模块

#### 1. 基础类型

- string / number / boolean
- null / undefined
- symbol / bigint
- any / unknown / never / void

#### 2. 类型系统

- 类型注解
- 类型推断
- 联合类型
- 交叉类型
- 字面量类型
- 类型守卫

#### 3. 接口与别名

- interface
- type
- 可选属性
- 只读属性
- 索引签名
- 函数类型

#### 4. 泛型体系

- 泛型函数
- 泛型接口
- 泛型约束
- keyof
- 索引访问类型
- 默认泛型

#### 5. 高级类型

- 条件类型
- 映射类型
- 模板字面量类型
- infer
- 分布式条件类型

#### 6. 工具类型

- Partial
- Required
- Readonly
- Pick
- Omit
- Record
- Exclude
- Extract
- ReturnType
- Parameters

#### 7. 模块与声明

- 命名空间
- 模块
- 声明文件
- 类型声明
- 第三方库类型

#### 8. 编译配置

- tsconfig
- strict
- path alias
- 编译目标
- 声明输出
- 增量编译

#### 9. 类与面向对象

- class
- public / private / protected
- abstract
- implements
- 构造函数
- 装饰器

#### 10. 框架场景

- React Props 类型
- Vue 组件类型
- ref 类型
- event 类型
- store 类型
- composable 类型

---

### E. Vue2 模块

#### 1. 入门基础

- 实例创建
- 模板语法
- 数据绑定
- 指令
- 事件绑定

#### 2. 响应式原理

- Object.defineProperty
- 依赖收集
- 更新触发
- 响应式局限

#### 3. 生命周期

- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeDestroy
- destroyed

#### 4. 组件体系

- 组件注册
- props
- emit
- slot
- 动态组件
- 异步组件

#### 5. 指令与过滤器

- v-if
- v-for
- v-show
- v-model
- 自定义指令
- filters

#### 6. 计算与侦听

- computed
- watch
- deep
- immediate
- 缓存机制

#### 7. 路由系统

- Vue Router 配置
- 动态路由
- 嵌套路由
- 守卫
- 懒加载
- meta

#### 8. 状态管理

- Vuex
- state
- getter
- mutation
- action
- module

#### 9. 高级特性

- mixin
- provide / inject
- ref
- nextTick
- keep-alive
- transition

#### 10. 性能与调试

- 渲染优化
- 数据更新限制
- 性能瓶颈
- 常见坑

---

### F. Vue3 模块

#### 1. 核心入口

- createApp
- setup
- script setup
- 模板编译思路

#### 2. 响应式系统

- Proxy
- ref
- reactive
- shallowRef
- shallowReactive
- readonly
- toRefs

#### 3. 组合式 API

- computed
- watch
- watchEffect
- 生命周期
- 逻辑复用

#### 4. 组件通信

- props
- emit
- v-model
- slots
- provide / inject
- defineExpose

#### 5. 路由系统

- Vue Router 4
- 动态路由
- 守卫
- 嵌套路由
- 懒加载

#### 6. 状态管理

- Pinia
- store
- getter
- action
- storeToRefs
- 持久化

#### 7. 内置组件

- Teleport
- Suspense
- Fragment
- KeepAlive
- Transition

#### 8. 自定义组合式函数

- useMouse
- useLocalStorage
- useDebounce
- useFetch

#### 9. 性能与编译

- 静态提升
- 更新粒度
- 响应式开销
- 模板优化

#### 10. 迁移与对比

- Vue2 vs Vue3
- Options API vs Composition API
- 迁移注意事项

---

### G. React 模块

#### 1. JSX 基础

- JSX 语法规则
- 表达式
- 条件渲染
- 列表渲染
- 属性命名
- 事件绑定

#### 2. 组件体系

- 函数组件
- 类组件
- Props
- children
- 默认值
- 组合模式

#### 3. 状态管理

- useState
- 状态提升
- 不可变更新
- 批处理
- useReducer

#### 4. Hooks 核心

- useEffect
- useMemo
- useCallback
- useRef
- useContext

#### 5. 副作用管理

- 依赖数组
- 清理函数
- 闭包陷阱
- Effect 执行时机

#### 6. 上下文与通信

- createContext
- Provider
- useContext
- 跨层级传值
- 性能优化

#### 7. 路由与页面

- React Router
- 动态路由
- 嵌套路由
- 路由守卫思路

#### 8. 复用与抽象

- 自定义 Hook
- 组件封装
- 逻辑分层
- 状态复用

#### 9. 进阶特性

- Portal
- Error Boundary
- Suspense
- Concurrent
- Transition

#### 10. 性能优化

- memo
- useMemo
- useCallback
- 懒加载
- 渲染控制

#### 11. 类型支持

- React + TS
- Props 类型
- 事件类型
- ref 类型
- children 类型

---

### H. Node.js 模块

#### 1. 运行时基础

- Node 运行机制
- CommonJS
- ESM
- 全局对象
- 模块加载

#### 2. 核心模块

- fs
- path
- url
- buffer
- process
- events
- stream

#### 3. 网络与服务

- http / https
- 请求响应
- 路由
- 静态资源
- 跨域处理

#### 4. 框架实践

- Express
- Koa
- 中间件
- 错误处理
- 参数校验

#### 5. 文件与流

- 读写文件
- 上传下载
- 管道
- 分片上传

#### 6. 异步与并发

- 回调
- Promise
- async / await
- 并发控制
- 任务队列

#### 7. 配置与环境

- 环境变量
- 配置分层
- 日志系统
- dotenv

#### 8. 安全与认证

- JWT
- Session
- Cookie
- 鉴权
- 限流
- 输入校验

#### 9. 数据交互

- 数据库连接
- ORM
- Redis
- 缓存
- 消息队列基础

#### 10. 部署与运维

- PM2
- Nginx
- 反向代理
- 进程管理
- 监控

---

### I. 工程化模块

#### 1. 包管理

- npm
- pnpm
- yarn
- lock 文件
- 依赖树

#### 2. 构建工具

- Vite
- Webpack
- Rollup
- HMR
- 代码分割

#### 3. 转译工具

- Babel
- SWC
- Polyfill
- Preset
- Plugin

#### 4. 代码规范

- ESLint
- Prettier
- Stylelint
- Commitlint
- Husky

#### 5. 测试体系

- Vitest
- Jest
- RTL
- E2E
- Mock
- 覆盖率

#### 6. Git 流程

- 分支策略
- Rebase
- Cherry-pick
- Tag
- Release

#### 7. CI/CD

- 自动化测试
- 自动构建
- 自动发布
- 流水线

#### 8. Monorepo

- 工作区
- 包拆分
- 统一依赖
- 共享工具

#### 9. 性能优化

- bundle 分析
- Tree Shaking
- 懒加载
- 预加载
- 缓存

#### 10. 版本发布

- 语义化版本
- Changelog
- 发包
- 版本策略

---

### J. 浏览器原理模块

#### 1. 浏览器架构

- 进程模型
- 渲染进程
- 网络进程
- GPU 进程

#### 2. 渲染流程

- HTML 解析
- DOM
- CSSOM
- 渲染树
- 布局
- 绘制
- 合成

#### 3. JS 执行机制

- 执行上下文
- 调用栈
- 事件循环
- 宏任务
- 微任务

#### 4. 缓存与存储

- 强缓存
- 协商缓存
- Storage
- Cookie
- IndexedDB

#### 5. 安全体系

- 同源策略
- CORS
- CSRF
- XSS
- CSP
- Sandbox

#### 6. 页面性能

- 重排
- 重绘
- 合成
- 首屏
- 白屏
- Core Web Vitals

#### 7. 网络层协同

- DNS
- TCP
- TLS
- HTTP
- CDN

#### 8. 浏览器 API

- MutationObserver
- IntersectionObserver
- requestAnimationFrame
- Web Worker
- Service Worker

#### 9. 调试与分析

- Performance
- Network
- Memory
- Lighthouse

---

### K. 网络模块

#### 1. 基础模型

- TCP/IP
- OSI
- IP
- 域名
- 端口
- DNS

#### 2. HTTP 协议

- 请求方法
- 状态码
- 请求头
- 响应头
- 报文结构

#### 3. HTTP 版本

- HTTP/1.1
- HTTP/2
- HTTP/3
- 复用
- 头部压缩
- 队头阻塞

#### 4. TLS 与安全

- HTTPS
- 证书
- 握手
- 加密
- 完整性

#### 5. 缓存策略

- Cache-Control
- ETag
- Last-Modified
- 强缓存
- 协商缓存

#### 6. 跨域机制

- CORS
- JSONP
- 代理
- 预检请求

#### 7. 实时通信

- WebSocket
- SSE
- 长轮询
- 短轮询

#### 8. 请求控制

- 重试
- 超时
- 取消
- 并发限制
- 幂等

#### 9. CDN 与加速

- 边缘节点
- 缓存命中
- 静态资源分发

#### 10. 前端网络实践

- fetch
- XHR
- 上传下载
- 断点续传
- 错误处理

---

### L. 算法模块

#### 1. 复杂度

- 时间复杂度
- 空间复杂度
- 渐进分析

#### 2. 数组与字符串

- 双指针
- 滑动窗口
- 前缀和
- 去重
- 反转

#### 3. 哈希与映射

- Map
- Set
- 频率统计
- 查找

#### 4. 栈与队列

- 括号匹配
- 单调栈
- 单调队列
- 模拟

#### 5. 链表

- 反转链表
- 合并链表
- 环检测
- 快慢指针

#### 6. 树结构

- 二叉树遍历
- 层序遍历
- BST
- 路径问题

#### 7. 图与搜索

- DFS
- BFS
- 最短路径
- 拓扑排序

#### 8. 排序与查找

- 冒泡
- 选择
- 插入
- 快排
- 归并
- 二分查找

#### 9. 回溯算法

- 组合
- 排列
- 子集
- 剪枝

#### 10. 动态规划

- 背包
- 最长子序列
- 路径问题
- 状态转移

#### 11. 贪心与数学

- 局部最优
- 区间问题
- 贪心证明

#### 12. 位运算

- 异或
- 掩码
- 二进制操作

---

### M. 面试题模块

#### 1. HTML / CSS 高频题

- 语义化
- 盒模型
- 布局
- 响应式
- 动画

#### 2. JavaScript 高频题

- 类型
- 闭包
- this
- 原型
- Promise
- 事件循环

#### 3. TypeScript 高频题

- 泛型
- 工具类型
- 条件类型
- 类型守卫

#### 4. Vue 高频题

- 响应式
- 组件通信
- 路由
- 状态管理
- Diff

#### 5. React 高频题

- Hooks
- Effect
- Context
- 状态管理
- 性能优化

#### 6. Node 高频题

- 事件循环
- 流
- HTTP
- 中间件
- 部署

#### 7. 工程化高频题

- 构建
- 缓存
- 测试
- CI/CD
- 发布流程

#### 8. 浏览器与网络高频题

- 渲染流程
- 缓存
- 跨域
- HTTPS
- 性能优化

#### 9. 算法题

- 数组
- 链表
- 树
- 字符串
- 回溯
- 动态规划

#### 10. 项目题

- 项目设计
- 难点拆解
- 性能优化
- 状态管理
- 上线流程

#### 11. 行为题

- 团队协作
- 技术选型
- 问题排查
- 冲突处理
- 学习方法

## 四、学习流程整改

### 1. 首页流程

- 新增“从零开始学习”入口。
- 新增“继续上次学习”入口。
- 新增“学习地图总览”入口。
- 新增“今日任务”和“本周任务”。

### 2. 知识点详情页流程

- 每个知识点固定显示学习目标、前置知识、完成标准。
- 每个知识点固定显示概念、原理、示例、练习、误区、自测、面试追问。
- 每个知识点底部推荐下一课。

### 3. 练习流程

- 基础练习
- 进阶练习
- 挑战练习
- 参考答案
- 错误示例
- 验收标准

### 4. 复盘流程

- 收藏
- 错题本
- 学习日志
- 复习提醒
- 掌握度统计

## 五、内容落地策略

### 短期

- 先把现有知识点补齐到统一模板。
- 先建立全模块知识树，不急于重做 UI。
- 先保证知识结构完整和一致。

### 中期

- 将静态内容迁移到 Markdown / 数据驱动结构。
- 每个知识点独立成文件，方便维护和增量更新。
- 建立练习与自测题库。

### 长期

- 建立内容版本管理。
- 建立题库版本管理。
- 建立知识点依赖关系。
- 支持个性化学习推荐与薄弱点复习。

## 六、实施验收标准

- 文档可以直接指导后续内容开发。
- 每个模块都能继续拆到知识点级别。
- 每个知识点都具备“讲解 + 练习 + 自测 + 面试”四层内容。
- 平台后续新增模块时不需要重新设计文档结构。

## 七、默认假设

- 本次先完成文档补全，再做页面与数据结构重构。
- 先按前端全能力树完成内容建设，不先做后端系统。
- 先保持现有 React + Vite 技术栈不变。
