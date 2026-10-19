import { htmlSkillContent as htmlBaseSkills, htmlCategory as htmlBaseCategory } from './skills/html.js';
import { cssSkillContent as cssBaseSkills, cssCategory as cssBaseCategory } from './skills/css.js';
import { jsSkillContent as jsBaseSkills, jsCategory as jsBaseCategory } from './skills/javascript.js';
import { tsSkillContent as tsBaseSkills, tsCategory as tsBaseCategory } from './skills/typescript.js';
import { vue2SkillContent as vue2BaseSkills, vue2Category as vue2BaseCategory } from './skills/vue2.js';
import { vue3SkillContent as vue3BaseSkills, vue3Category as vue3BaseCategory } from './skills/vue3.js';
import { reactSkillContent as reactBaseSkills, reactCategory as reactBaseCategory } from './skills/react.js';
import { htmlLessons } from './lessons/html.js';

function skill(id, title, description, difficulty, options = {}) {
  return Object.assign({ id, title, description, difficulty }, options);
}

const curriculumModules = [
  {
    key: 'html',
    label: 'HTML',
    phase: '基础',
    description: '从文档结构、语义化、表单到多媒体与浏览器原生能力，建立页面骨架能力。',
    playground: 'browser',
    skills: [
      skill('html-basic', 'HTML 基础结构', '掌握文档骨架、doctype、head/body 与元数据', '初级'),
      skill('html-tags', '常用 HTML 标签', '掌握标题、段落、链接、图片和列表', '初级'),
      skill('html-forms', 'HTML 表单与输入', '掌握表单、输入类型、校验和可访问性', '中级'),
      skill('html-semantic', 'HTML5 语义化标签', '用语义化标签组织页面结构', '中级'),
      skill('html-table', 'HTML 表格与数据展示', '掌握 table 语义、表头与复杂表格结构', '初级'),
      skill('html-media', 'HTML 多媒体与嵌入', '掌握 audio、video、picture、iframe 的使用边界', '中级'),
      skill('html5-canvas', 'Canvas 绘图 API', '理解 Canvas 绘图、坐标系和动画', '较难'),
      skill('html5-svg', 'SVG 矢量图形', '理解 SVG 路径、视口和可缩放图形', '中级'),
      skill('html-webstorage', 'Web Storage 存储', '掌握 localStorage 与 sessionStorage', '中级'),
      skill('html5-websocket', 'WebSocket 通信', '理解浏览器与服务端的实时双工通信', '较难'),
      skill('html5-history', 'History API', '掌握 SPA 路由底层实现能力', '较难'),
      skill('html-accessibility', 'HTML 可访问性', '掌握 aria、tabindex、alt 与可访问性实践', '中级')
    ]
  },
  {
    key: 'css',
    label: 'CSS',
    phase: '基础',
    description: '从选择器、盒模型、布局到动效与响应式，建立页面视觉与布局能力。',
    playground: 'browser',
    skills: [
      skill('css-selectors', 'CSS 选择器详解', '掌握基础、组合和伪类选择器', '初级'),
      skill('css-boxmodel', 'CSS 盒模型', '理解 content、padding、border、margin 与 box-sizing', '初级'),
      skill('css-typography', 'CSS 文本与字体', '掌握字体、行高、对齐与溢出控制', '初级'),
      skill('css-display-flow', 'CSS 布局流与 display', '理解 block、inline、inline-block 与 normal flow', '中级'),
      skill('css-float-bfc', 'Float 与 BFC', '掌握浮动、清除浮动和 BFC 解决方案', '中级'),
      skill('css-flexbox', 'Flexbox 弹性布局', '掌握一维弹性布局与常见对齐场景', '中级'),
      skill('css-grid', 'CSS Grid 网格布局', '掌握二维网格与自适应布局', '较难'),
      skill('css-position', 'CSS 定位机制', '理解 relative、absolute、fixed、sticky', '中级'),
      skill('css-responsive', '响应式设计与媒体查询', '掌握移动优先、断点和弹性布局', '中级'),
      skill('css-animation', 'CSS 过渡与动画', '掌握 transition、animation 与关键帧', '较难'),
      skill('css-variables', 'CSS 变量', '理解自定义属性与主题切换', '中级'),
      skill('css-modern-layout', '现代 CSS 布局', '掌握 calc、clamp、container query 与现代布局思维', '较难')
    ]
  },
  {
    key: 'javascript',
    label: 'JavaScript',
    phase: '基础',
    description: '从语言基础、函数、对象、异步到手写题，建立 JavaScript 核心能力。',
    playground: 'browser',
    skills: [
      skill('js-basics', 'JS 变量类型与数据类型', '掌握变量声明、类型判断和类型转换', '初级'),
      skill('js-operators', 'JS 运算符与表达式', '掌握比较、短路、解构和展开运算', '初级'),
      skill('js-functions', '函数与作用域', '理解函数、作用域链和闭包基础', '中级'),
      skill('js-this', 'this 与函数调用', '掌握 this 绑定、call/apply/bind', '中级'),
      skill('js-objects', '对象与原型链', '理解对象属性、构造函数和原型继承', '较难'),
      skill('js-arrays', '数组与常用方法', '掌握数组遍历、变换和不可变更新', '初级'),
      skill('js-dom', 'DOM 操作', '掌握选择、创建、更新、事件和委托', '中级'),
      skill('js-promise', 'Promise 与异步编程', '掌握 Promise、async/await 与并发', '较难'),
      skill('js-closure', '闭包与高阶函数', '深入理解闭包、防抖、节流和柯里化', '较难'),
      skill('js-eventloop', '事件循环 Event Loop', '理解宏任务、微任务和执行顺序', '较难'),
      skill('js-modules', 'JavaScript 模块化', '理解 ES Module 与 CommonJS', '中级'),
      skill('js-regexp', '正则表达式与字符串', '掌握模式匹配、分组和字符串处理', '中级'),
      skill('js-performance', 'JS 性能与内存', '理解性能优化、内存泄漏与垃圾回收', '较难'),
      skill('js-design-patterns', '常见设计模式', '掌握单例、工厂、观察者与策略模式', '较难')
    ]
  },
  {
    key: 'typescript',
    label: 'TypeScript',
    phase: '进阶',
    description: '从类型系统、泛型、高级类型到框架场景，建立工程级类型思维。',
    playground: 'browser',
    skills: [
      skill('ts-basics', 'TypeScript 基础类型', '掌握基础类型、联合与类型推断', '中级'),
      skill('ts-interfaces', '接口与类型别名', '理解 interface、type 与对象结构描述', '中级'),
      skill('ts-generics', 'TypeScript 泛型', '掌握泛型函数、约束与 keyof', '较难'),
      skill('ts-advanced-types', 'TS 高级类型', '掌握条件类型、映射类型与 infer', '较难'),
      skill('ts-utility-types', 'TS 工具类型', '掌握 Partial、Pick、Omit 等工具类型', '较难'),
      skill('ts-modules', 'TS 模块与命名空间', '理解模块、导入导出和命名空间', '较难'),
      skill('ts-declaration', 'TS 声明与类型定义', '掌握声明文件、类型合并与第三方库类型', '较难'),
      skill('ts-config', 'TS 编译配置', '理解 tsconfig、strict 和编译流程', '中级'),
      skill('ts-classes', 'TS 类与面向对象', '掌握 class、修饰符、抽象类与接口实现', '中级'),
      skill('ts-react', 'React + TypeScript 实战', '掌握 React 场景中的类型应用', '较难')
    ]
  },
  {
    key: 'vue2',
    label: 'Vue 2',
    phase: '进阶',
    description: '覆盖 Vue2 响应式、组件通信、路由和状态管理全链路。',
    playground: 'browser',
    skills: [
      skill('vue2-basics', 'Vue2 实例与生命周期', '掌握实例创建和生命周期执行时机', '中级'),
      skill('vue2-directives', 'Vue2 指令体系', '掌握 v-if、v-for、v-show、v-model 等指令', '中级'),
      skill('vue2-component', 'Vue2 组件通信', '掌握 props、emit、slot 与跨级通信', '中级'),
      skill('vue2-computed-watch', 'Vue2 计算属性与侦听器', '掌握 computed、watch 与缓存机制', '中级'),
      skill('vue2-router', 'Vue Router（Vue2）', '掌握路由配置、守卫与懒加载', '较难'),
      skill('vue2-vuex', 'Vuex 状态管理', '掌握 state、getter、mutation、action 与 module', '较难'),
      skill('vue2-slot', 'Vue2 插槽体系', '掌握默认插槽、具名插槽与作用域插槽', '中级'),
      skill('vue2-mixins', 'Vue2 mixin 与复用', '理解 mixin 的复用方式与局限', '中级'),
      skill('vue2-lifecycle', 'Vue2 生命周期实战', '把生命周期用于数据请求与资源释放', '中级'),
      skill('vue2-performance', 'Vue2 性能与常见坑', '理解响应式局限、更新机制与性能优化', '较难')
    ]
  },
  {
    key: 'vue3',
    label: 'Vue 3',
    phase: '进阶',
    description: '覆盖 Composition API、响应式系统、Pinia 与现代 Vue3 工程能力。',
    playground: 'browser',
    skills: [
      skill('vue3-composition', 'Vue3 Composition API', '掌握 setup 与逻辑复用方式', '较难'),
      skill('vue3-ref-reactive', 'ref 与 reactive 响应式核心', '理解 Proxy、ref 和 reactive 的差异', '较难'),
      skill('vue3-component-communication', 'Vue3 组件通信', '掌握 props、emit、slots 与 defineExpose', '中级'),
      skill('vue3-router', 'Vue Router 4', '掌握路由配置、守卫与动态路由', '较难'),
      skill('vue3-pinia', 'Pinia 状态管理', '掌握 store、getter、action 与 storeToRefs', '较难'),
      skill('vue3-composables', 'Vue3 组合式函数', '掌握 useXxx 逻辑复用方式', '较难'),
      skill('vue3-teleport-suspense', 'Teleport 与 Suspense', '理解异步组件、挂载点转移与加载态', '较难'),
      skill('vue3-keepalive-transition', 'KeepAlive 与 Transition', '掌握缓存组件与过渡动画', '中级'),
      skill('vue3-performance', 'Vue3 性能与编译优化', '理解静态提升、响应式开销和更新粒度', '较难')
    ]
  },
  {
    key: 'react',
    label: 'React',
    phase: '进阶',
    description: '覆盖 JSX、组件、Hooks、Context、路由和性能优化。',
    playground: 'browser',
    skills: [
      skill('react-jsx', 'JSX 语法', '掌握 JSX 表达式、条件渲染和列表渲染', '初级'),
      skill('react-components', 'React 组件与 Props', '掌握组件定义、Props 与组合模式', '初级'),
      skill('react-state', 'React State 与生命周期', '掌握 useState、状态提升和不可变更新', '中级'),
      skill('react-hooks', 'React Hooks 核心', '掌握 useEffect、useMemo、useCallback 与 useRef', '较难'),
      skill('react-useeffect', 'useEffect 完全指南', '深入理解副作用、依赖和清理', '较难'),
      skill('react-context', 'React Context API', '掌握跨层级数据共享与性能注意事项', '较难'),
      skill('react-router', 'React Router', '掌握路由配置、动态路由和嵌套路由', '较难'),
      skill('react-performance', 'React 性能优化', '掌握 memo、懒加载和渲染控制', '较难'),
      skill('react-portal', 'Portal 与浮层体系', '理解 Portal、弹层和 DOM 外挂载', '中级'),
      skill('react-errorboundary', '错误边界', '掌握错误捕获与降级渲染', '中级'),
      skill('react-ts', 'React + TypeScript', '掌握 React 场景中的类型声明', '较难')
    ]
  },
  {
    key: 'node',
    label: 'Node.js',
    phase: '扩展',
    description: '建立后端运行时、接口服务、文件处理和部署基础能力。',
    playground: 'snippet',
    skills: [
      skill('node-runtime', 'Node.js 运行时基础', '理解事件循环、模块与全局对象', '中级'),
      skill('node-modules', 'Node.js 模块系统', '掌握 CommonJS 与 ESM', '中级'),
      skill('node-fs-stream', '文件系统与流', '掌握 fs、stream 与管道处理', '中级'),
      skill('node-http', 'HTTP 服务与路由', '搭建基础 HTTP 服务与路由', '中级'),
      skill('node-express', 'Express 框架实践', '使用 Express 构建接口服务', '中级'),
      skill('node-koa', 'Koa 框架实践', '理解中间件洋葱模型', '中级'),
      skill('node-config-logging', '配置与日志', '掌握环境变量、配置分层与日志', '中级'),
      skill('node-auth-security', '认证与安全', '掌握 JWT、Session、Cookie 与鉴权', '较难'),
      skill('node-async-concurrency', '异步与并发控制', '掌握异步流程、队列与并发限制', '较难'),
      skill('node-deploy', '部署与运维', '掌握 PM2、Nginx、反向代理与监控', '较难')
    ]
  },
  {
    key: 'engineering',
    label: '工程化',
    phase: '扩展',
    description: '建立前端工程化、构建、测试、规范和发布能力。',
    playground: 'snippet',
    skills: [
      skill('eng-packages', '包管理体系', '掌握 npm、pnpm、yarn 与依赖管理', '中级'),
      skill('eng-vite-webpack', 'Vite 与 Webpack', '掌握构建工具、HMR 与代码分割', '中级'),
      skill('eng-babel', 'Babel 与转译链路', '理解语法降级、Preset 与 Plugin', '中级'),
      skill('eng-lint-format', '代码规范体系', '掌握 ESLint、Prettier、Stylelint、Commitlint', '中级'),
      skill('eng-testing', '测试体系', '掌握 Vitest、Jest、RTL 与 E2E', '较难'),
      skill('eng-git-release', 'Git 与发布流程', '掌握分支、Tag、Release 与 Changelog', '中级'),
      skill('eng-cicd', 'CI/CD', '掌握自动化测试、构建、发布流水线', '较难'),
      skill('eng-monorepo', 'Monorepo 架构', '理解工作区、包拆分与共享依赖', '较难'),
      skill('eng-performance', '工程性能优化', '掌握 bundle 分析、Tree Shaking 与缓存', '较难'),
      skill('eng-monitoring', '监控与诊断', '掌握错误收集、性能监控与告警', '较难')
    ]
  },
  {
    key: 'browser',
    label: '浏览器原理',
    phase: '扩展',
    description: '建立浏览器架构、渲染流程、安全体系与性能分析能力。',
    playground: 'snippet',
    skills: [
      skill('browser-architecture', '浏览器架构', '理解渲染进程、网络进程和 GPU 进程', '较难'),
      skill('browser-rendering', '页面渲染流程', '掌握 HTML 解析、布局、绘制和合成', '较难'),
      skill('browser-js', 'JS 执行机制', '掌握执行上下文、调用栈与事件循环', '较难'),
      skill('browser-cache-storage', '缓存与存储', '理解强缓存、协商缓存和浏览器存储', '中级'),
      skill('browser-security', '浏览器安全体系', '掌握同源策略、CORS、XSS、CSRF、CSP', '较难'),
      skill('browser-performance', '页面性能优化', '掌握重排、重绘、首屏和核心性能指标', '较难'),
      skill('browser-api', '浏览器原生 API', '掌握 rAF、Observer、Worker 与 SW', '中级'),
      skill('browser-debugging', '浏览器调试与分析', '掌握 Performance、Network 与 Memory 面板', '中级')
    ]
  },
  {
    key: 'network',
    label: '网络',
    phase: '扩展',
    description: '建立 HTTP、缓存、跨域、实时通信与网络安全能力。',
    playground: 'snippet',
    skills: [
      skill('net-basics', '网络基础模型', '掌握 TCP/IP、OSI、域名、端口和 DNS', '中级'),
      skill('net-http1', 'HTTP/1.1', '掌握请求方法、状态码和报文结构', '中级'),
      skill('net-http2', 'HTTP/2', '理解多路复用、头部压缩与性能改进', '较难'),
      skill('net-http3', 'HTTP/3', '理解 QUIC 与下一代传输协议', '较难'),
      skill('net-tls', 'TLS 与 HTTPS', '理解证书、握手和加密通信', '较难'),
      skill('net-cache', '缓存策略', '掌握强缓存、协商缓存、ETag 与 Last-Modified', '中级'),
      skill('net-cors', '跨域机制', '掌握 CORS、JSONP 与代理方案', '中级'),
      skill('net-realtime', '实时通信', '掌握 WebSocket、SSE 与轮询方案', '中级'),
      skill('net-request-control', '请求控制', '掌握超时、重试、取消与并发限制', '中级'),
      skill('net-cdn', 'CDN 与加速', '理解边缘缓存、资源分发和命中策略', '中级')
    ]
  },
  {
    key: 'algorithm',
    label: '算法',
    phase: '扩展',
    description: '建立常见算法、数据结构和复杂度分析能力。',
    playground: 'snippet',
    skills: [
      skill('alg-complexity', '复杂度分析', '掌握时间复杂度与空间复杂度', '中级'),
      skill('alg-array-string', '数组与字符串', '掌握双指针、滑动窗口和前缀和', '中级'),
      skill('alg-hash', '哈希与映射', '掌握 Map、Set 与频率统计', '中级'),
      skill('alg-stack-queue', '栈与队列', '掌握括号匹配、单调栈与单调队列', '中级'),
      skill('alg-linked-list', '链表', '掌握反转、合并、环检测', '中级'),
      skill('alg-tree', '树结构', '掌握二叉树遍历、BST 和路径问题', '较难'),
      skill('alg-graph', '图与搜索', '掌握 DFS、BFS、拓扑排序与最短路径', '较难'),
      skill('alg-sort-search', '排序与查找', '掌握快速排序、归并排序和二分查找', '中级'),
      skill('alg-backtracking', '回溯算法', '掌握组合、排列、子集与剪枝', '较难'),
      skill('alg-dp', '动态规划', '掌握状态转移、背包和路径问题', '较难'),
      skill('alg-greedy', '贪心算法', '掌握局部最优与区间问题', '较难'),
      skill('alg-bit', '位运算', '掌握异或、掩码和二进制操作', '中级')
    ]
  },
  {
    key: 'interview',
    label: '面试题',
    phase: '面试',
    description: '把知识点转成面试问答、追问和项目表达能力。',
    playground: 'snippet',
    skills: [
      skill('interview-html-css', 'HTML / CSS 高频题', '覆盖语义化、布局、盒模型、响应式和动画', '中级'),
      skill('interview-js', 'JavaScript 高频题', '覆盖类型、闭包、this、Promise 和事件循环', '中级'),
      skill('interview-ts', 'TypeScript 高频题', '覆盖泛型、工具类型与类型收窄', '较难'),
      skill('interview-vue', 'Vue 高频题', '覆盖响应式、组件通信、路由和状态管理', '较难'),
      skill('interview-react', 'React 高频题', '覆盖 Hooks、Effect、Context 与性能优化', '较难'),
      skill('interview-node', 'Node.js 高频题', '覆盖事件循环、流、HTTP 和部署', '较难'),
      skill('interview-engineering', '工程化高频题', '覆盖构建、测试、CI/CD 与发布流程', '较难'),
      skill('interview-browser-network', '浏览器与网络高频题', '覆盖渲染流程、缓存、跨域和 HTTPS', '较难'),
      skill('interview-algorithm', '算法题高频题', '覆盖数组、链表、树、回溯与动态规划', '较难'),
      skill('interview-project', '项目题', '覆盖项目设计、难点、优化与上线流程', '较难'),
      skill('interview-behavior', '行为题', '覆盖协作、选型、排查和学习方法', '中级')
    ]
  }
];

const existingSkillContent = Object.assign({},
  htmlBaseSkills, cssBaseSkills, jsBaseSkills,
  tsBaseSkills, vue2BaseSkills, vue3BaseSkills, reactBaseSkills
);

const baseCategoryMap = {
  html: htmlBaseCategory,
  css: cssBaseCategory,
  javascript: jsBaseCategory,
  typescript: tsBaseCategory,
  vue2: vue2BaseCategory,
  vue3: vue3BaseCategory,
  react: reactBaseCategory
};

function defaultRefs(moduleKey) {
  const refMap = {
    html: [{ title: 'MDN HTML', url: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML' }],
    css: [{ title: 'MDN CSS', url: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS' }],
    javascript: [{ title: 'MDN JavaScript', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript' }],
    typescript: [{ title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/' }],
    vue2: [{ title: 'Vue 2 官方文档', url: 'https://v2.cn.vuejs.org/' }],
    vue3: [{ title: 'Vue 3 官方文档', url: 'https://cn.vuejs.org/' }],
    react: [{ title: 'React 官方文档', url: 'https://react.dev/' }],
    node: [{ title: 'Node.js 文档', url: 'https://nodejs.org/docs/latest/api/' }],
    engineering: [{ title: 'Vite 官方文档', url: 'https://vite.dev/' }],
    browser: [{ title: 'MDN Web Docs', url: 'https://developer.mozilla.org/' }],
    network: [{ title: 'MDN HTTP 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/HTTP' }],
    algorithm: [{ title: 'LeetCode', url: 'https://leetcode.cn/' }],
    interview: [{ title: '前端面试题集合', url: 'https://developer.mozilla.org/' }]
  };
  return refMap[moduleKey] || [];
}

function defaultSnippet(module, item) {
  if (module.playground !== 'snippet') return {
    html: '<div class="placeholder-card"><h2>知识点示例</h2><p>当前知识点将通过代码编辑器与预览区进行学习。</p></div>',
    css: '.placeholder-card{font-family:system-ui;padding:24px;border:1px solid #ddd;border-radius:12px;background:#fff}.placeholder-card h2{margin:0 0 8px;color:#4F46E5}',
    js: ''
  };

  return {
    html: `<pre class="snippet-block">${item.title}\n\n${item.description}</pre>`,
    css: '.snippet-block{white-space:pre-wrap;font-family:"JetBrains Mono", monospace;padding:20px;border-radius:12px;background:#0f172a;color:#e2e8f0;line-height:1.8}',
    js: ''
  };
}

function defaultBrowserCode(module, item, guide) {
  return {
    html: `<section class="lesson-demo">
  <p class="eyebrow">${module.label} 示例</p>
  <h1>${item.title}</h1>
  <p>${item.description}</p>
  <ul>
    <li>先理解它解决什么问题</li>
    <li>再观察它在页面里的表现</li>
    <li>最后尝试修改代码验证结论</li>
  </ul>
  <button id="demoBtn">查看学习提示</button>
  <p id="demoOutput" class="demo-output">点击按钮开始互动</p>
</section>`,
    css: `.lesson-demo{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;max-width:560px;margin:0 auto;padding:28px;border:1px solid #ddd;border-radius:12px;background:#fff;box-shadow:0 10px 28px rgba(15,23,42,.08)}
.eyebrow{margin:0 0 8px;color:#4F46E5;font-size:13px;font-weight:700}
h1{margin:0 0 12px;color:#111827;font-size:28px}
p,li{color:#4b5563;line-height:1.8}
ul{padding-left:20px}
button{margin-top:12px;padding:10px 16px;border:0;border-radius:8px;background:#4F46E5;color:#fff;cursor:pointer}
button:hover{background:#4338ca}
.demo-output{margin-top:14px;padding:12px;border-radius:8px;background:#f5f3ff;color:#312e81}`,
    js: `var btn = document.getElementById('demoBtn');
var output = document.getElementById('demoOutput');
btn.onclick = function() {
  output.textContent = '${item.title} 的学习重点：${guide.focus}。先读懂概念，再改动示例代码，最后用自己的话复述。';
};`
  };
}

function buildStudyGuide(module, item) {
  const focusMap = {
    html: '文档结构、语义化、表单、可访问性',
    css: '布局、盒模型、响应式、动效',
    javascript: '运行机制、函数、对象、异步和 DOM',
    typescript: '类型系统、泛型、高级类型和工程约束',
    vue2: '响应式、组件通信、路由和状态管理',
    vue3: 'Composition API、响应式系统和组合式复用',
    react: 'JSX、Hooks、Context、路由和性能优化',
    node: '运行时、接口服务、文件处理和部署',
    engineering: '构建、规范、测试、发布和工程效率',
    browser: '渲染、缓存、安全、性能和浏览器 API',
    network: 'HTTP、缓存、跨域、实时通信和安全',
    algorithm: '数据结构、搜索、排序、递归和动态规划',
    interview: '高频问答、追问、项目表达和复盘'
  };

  const focus = focusMap[module.key] || module.label;
  const overview = `${item.title} 是 ${module.label} 学习路径里的一个关键节点，核心不是“记住名词”，而是理解它解决什么问题、依赖什么前提、和相邻方案有什么边界。对于小白来说，最容易迷茫的地方通常不是语法本身，而是“什么时候用它”和“为什么这么设计”。`;
  const howToUse = `${item.title} 通常出现在 ${focus} 这一类场景里。学习时不要只看结果，要顺着“输入是什么、输出是什么、它依赖哪些前置知识、失败时会发生什么”去看，这样才能把碎片知识串成完整理解。`;
  const studySteps = [
    `先读懂 ${item.title} 的定义和用途，不要急着记代码。`,
    `再结合 ${module.label} 的真实场景看它如何工作，重点理解边界。`,
    `最后做一个最小练习，确认自己能复述原理、能写出基础用法、也能说清常见误区。`
  ];
  const pitfalls = [
    `不要把 ${item.title} 当成万能方案，它只适合特定边界内的问题。`,
    `不要只背结论，必须能讲清“为什么是这样”以及“换一种写法会有什么后果”。`
  ];
  const practicePath = [
    `先做一个最小可运行示例，确认 ${item.title} 的基础行为。`,
    `再把示例扩展到实际业务场景，观察边界条件和异常情况。`
  ];
  const interviewFocus = [
    `请说明 ${item.title} 的工作机制和适用边界。`,
    `请比较 ${item.title} 和相邻方案的差异，以及为什么要选择它。`
  ];

  return { focus, overview, howToUse, studySteps, pitfalls, practicePath, interviewFocus };
}

function buildTeachingDetail(module, item, guide) {
  const title = item.title;
  const label = module.label;
  const focus = guide.focus;

  return {
    beginnerReading: [
      `一句话理解：${title} 是 ${label} 体系里用来处理“${focus}”相关问题的基础能力。`,
      `小白学习时不要先背 API，应该先判断它解决的问题、出现的场景、输入输出和失败边界。`,
      `掌握标准是：能看懂示例、能改动示例、能独立写一个最小版本，并能说清为什么这样写。`
    ],
    explanation: [
      {
        title: '它解决什么问题',
        content: `${title} 的价值在于把 ${focus} 里的常见问题变成一套可复用的写法或判断规则。学习它时，要先知道没有它会遇到什么麻烦，再理解它提供了什么能力。`
      },
      {
        title: '核心工作方式',
        content: `${title} 通常由概念、语法、运行环境和边界条件共同组成。真正要掌握的不是单个写法，而是每一步为什么存在、改变某个条件后结果会如何变化。`
      },
      {
        title: '真实使用场景',
        content: `当项目里出现 ${focus} 相关需求时，就可以考虑使用 ${title}。例如页面结构组织、交互逻辑封装、状态流转、性能优化、工程规范或面试表达，都需要先判断场景再选择方案。`
      },
      {
        title: '学习验收标准',
        content: `完成本知识点后，至少要能做到三件事：用自己的话解释 ${title}，基于示例改出一个可运行结果，并指出一个常见错误或不适用场景。`
      }
    ],
    exampleGuide: {
      title: `${title} 示例拆解`,
      description: `下面的示例不是让你照抄，而是帮助你观察 ${title} 在真实代码中的位置。建议先运行，再逐行修改，最后关闭参考自己重写。`,
      steps: [
        `先找到示例中和 ${title} 直接相关的代码。`,
        '修改一个最小参数或样式，观察预览区发生什么变化。',
        '故意制造一个错误，再根据页面表现或控制台信息定位原因。',
        `把示例改造成一个更贴近业务的小功能，确认自己真正理解 ${title}。`
      ],
      codeNotes: [
        'HTML 负责结构，先看页面上有哪些元素。',
        'CSS 负责表现，重点观察布局、颜色、间距和状态变化。',
        'JavaScript 负责行为，重点看事件、数据变化和结果输出。'
      ]
    }
  };
}

function buildAnswerText(module, item, guide, type, index) {
  const answerMap = {
    quiz: [
      `${item.title} 的作用是帮助你在 ${module.label} 场景中解决 ${guide.focus} 这一类问题。判断是否使用它，先看当前问题是否真的需要 ${item.title} 提供的能力，再看是否存在更简单的方案。`,
      `${item.title} 的关键边界条件通常来自输入、输出、依赖前置知识和运行环境。学习时最重要的是能说清楚它适合什么，不适合什么。`,
      `${item.title} 和相邻方案的区别，通常体现在适用场景、复杂度、可维护性和团队协作成本上。实际选择时应优先考虑业务目标和代码可维护性，而不是追求“看起来高级”的写法。`
    ],
    interview: [
      `${item.title} 的核心原理可以概括为：它通过一套明确的规则或机制解决特定问题。回答时要先讲设计目标，再讲工作过程，最后讲边界和缺点。`,
      `${item.title} 与相邻方案的差异，重点在适用场景、实现成本、性能影响和维护方式。面试里不要只背“它比别的好”，而要说明为什么在当前问题里选它。`
    ]
  };

  const fallback = `${item.title} 的答案应该围绕“是什么、为什么、怎么用、边界在哪里”来展开。结合 ${module.label} 的上下文理解，会比单纯背诵结论更稳。`;
  const items = answerMap[type] || [];
  return items[index] || fallback;
}

function buildQuestionBank(module, item, guide) {
  const quizQuestions = [
    `什么问题会促使你使用 ${item.title}？`,
    `${item.title} 的关键边界条件是什么？`,
    `${item.title} 和相邻方案相比，优缺点是什么？`
  ];

  const interviewQuestions = [
    `请说明 ${item.title} 的工作机制和适用边界。`,
    `请比较 ${item.title} 和相邻方案的差异，以及为什么要选择它。`
  ];

  return {
    quiz: quizQuestions.map(function(question, index) {
      return {
        question,
        answer: buildAnswerText(module, item, guide, 'quiz', index)
      };
    }),
    interview: interviewQuestions.map(function(question, index) {
      return {
        question,
        answer: buildAnswerText(module, item, guide, 'interview', index)
      };
    })
  };
}

function buildSkill(module, item) {
  const base = existingSkillContent[item.id];
  const lesson = module.key === 'html' ? htmlLessons[item.id] : null;
  const guide = buildStudyGuide(module, item);
  const teachingDetail = buildTeachingDetail(module, item, guide);
  const questionBank = buildQuestionBank(module, item, guide);
  const common = {
    moduleKey: module.key,
    moduleLabel: module.label,
    phase: module.phase,
    playground: module.playground,
    learningGoals: lesson?.learningGoals || [
      `理解 ${item.title} 在 ${module.label} 中的定位`,
      `能说清 ${item.title} 的输入、输出和适用边界`,
      `能把 ${item.title} 放进真实场景中使用`
    ],
    prerequisites: lesson?.prerequisites || [
      `先具备 ${focusOfModule(module.key)} 的基础认知`,
      `再理解 ${module.label} 的整体上下文`
    ],
    keyPoints: lesson?.keyPoints || [
      `${item.title} 的核心概念和作用`,
      `${item.title} 的真实使用场景`,
      `${item.title} 与相邻方案的边界`
    ],
    misconceptions: lesson?.misconceptions || guide.pitfalls,
    practices: lesson?.practices || [
      { title: `练习 1：${item.title} 基础验证`, description: `先做一个最小示例，确认 ${item.title} 的核心行为。` },
      { title: `练习 2：${item.title} 场景扩展`, description: `把示例扩展到真实业务场景，检查边界和异常。` }
    ],
    refs: lesson?.refs || defaultRefs(module.key),
    quiz: lesson?.quiz || questionBank.quiz,
    interviewQuestions: lesson?.interviewQuestions || questionBank.interview,
    nextSkills: item.nextSkills || [],
    detail: lesson?.detail || (base && base.detail ? base.detail : `${guide.overview}\n\n${guide.howToUse}\n\n${guide.studySteps.join('\n')}`),
    studyGuide: guide,
    teachingDetail,
    snippet: lesson?.snippet || defaultSnippet(module, item)
  };

  if (!base) {
    return Object.assign({}, common, {
      code: module.playground === 'browser' ? defaultBrowserCode(module, item, guide) : common.snippet
    });
  }

  return Object.assign({}, base, common, {
    code: base.code || (module.playground === 'browser' ? defaultBrowserCode(module, item, guide) : common.snippet)
  });
}

function focusOfModule(moduleKey) {
  const map = {
    html: 'HTML 文档结构与语义化',
    css: 'CSS 选择器、盒模型和布局',
    javascript: 'JavaScript 语言基础和异步机制',
    typescript: 'TypeScript 类型系统',
    vue2: 'Vue2 的响应式与组件基础',
    vue3: 'Vue3 的 Composition API 与响应式',
    react: 'React 组件与 Hooks',
    node: 'Node.js 运行时基础',
    engineering: '前端工程化',
    browser: '浏览器原理',
    network: '网络基础',
    algorithm: '基础算法和数据结构',
    interview: '面试表达与复盘'
  };
  return map[moduleKey] || '基础知识';
}

const skillContent = {};
const skillCategories = curriculumModules.map(function(module) {
  const skills = module.skills.map(function(item) {
    skillContent[item.id] = buildSkill(module, item);
    return { id: item.id, title: item.title };
  });
  return { key: module.key, label: module.label, skills, phase: module.phase, description: module.description };
});

function getSkill(id) {
  return skillContent[id] || null;
}

function getCategoryBySkillId(id) {
  for (var i = 0; i < skillCategories.length; i++) {
    var category = skillCategories[i];
    for (var j = 0; j < category.skills.length; j++) {
      if (category.skills[j].id === id) return category;
    }
  }
  return null;
}

function getModuleBySkillId(id) {
  for (var i = 0; i < curriculumModules.length; i++) {
    var module = curriculumModules[i];
    for (var j = 0; j < module.skills.length; j++) {
      if (module.skills[j].id === id) return module;
    }
  }
  return null;
}

export {
  curriculumModules,
  skillCategories,
  skillContent,
  getSkill,
  getCategoryBySkillId,
  getModuleBySkillId,
  baseCategoryMap
};
