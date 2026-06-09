const htmlLessons = {
  'html-basic': {
    detail: `HTML 是网页的结构层。学习这个知识点时，不要只记住 "<!DOCTYPE html>"，而要理解浏览器如何通过文档声明进入标准模式，为什么 head 里放元信息，body 里放可见内容。

这一节的目标是让你能独立写出一个完整的 HTML5 页面骨架，并且说清楚 lang、meta charset、viewport、title 各自的职责。`,
    learningGoals: [
      '能写出完整的 HTML5 页面骨架',
      '理解 head 和 body 的职责边界',
      '能解释 DOCTYPE、lang、meta charset 的作用'
    ],
    prerequisites: [
      '会使用文本编辑器创建 HTML 文件',
      '知道浏览器会渲染 HTML 文本'
    ],
    keyPoints: [
      '<!DOCTYPE html> 告诉浏览器按 HTML5 标准模式渲染',
      '<html lang="zh-CN"> 帮助浏览器与辅助技术识别语言',
      '<meta charset="UTF-8"> 解决字符编码问题',
      '<title> 决定标签页标题和搜索结果标题',
      '<body> 承载页面可见内容'
    ],
    misconceptions: [
      'DOCTYPE 不是内容标签，它只是文档声明',
      'head 不是“可忽略区域”，它承载元数据和资源加载'
    ],
    practices: [
      { title: '练习：写最小 HTML5 页面', description: '只保留 DOCTYPE、html、head、body、title 和 charset，确认页面能正确显示中文。' },
      { title: '练习：补全页面元信息', description: '在骨架中加入 viewport 和 description，理解 SEO 与移动端适配的基础。' }
    ],
    refs: [{ title: 'MDN - HTML 入门', url: 'https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/HTML_basics' }]
  },
  'html-tags': {
    detail: `这一节讲的是“内容怎么被正确表达”。很多小白只会用 div 拼页面，但 div 不表达含义，标签本身的语义才决定页面结构是否清晰。

你要掌握的不只是标题、段落、链接、图片和列表的写法，还要知道什么时候该用 strong/em，什么时候该用普通的 div/span，以及 alt 为什么不是可选项。`,
    learningGoals: [
      '掌握常见文本标签和容器标签的用途',
      '理解语义化表达对可读性和无障碍的价值',
      '知道链接、图片、列表应该如何组合使用'
    ],
    prerequisites: [
      '已经了解 HTML 页面骨架',
      '能识别标签名与属性名'
    ],
    keyPoints: [
      'h1~h6 体现标题层级，不是单纯的字号',
      'a 的 href 决定跳转目标，target 影响打开方式',
      'img 的 alt 是替代文本，不只是“可不写的备注”',
      'ul/ol/li 表达列表结构',
      'strong/em 体现语义强调'
    ],
    misconceptions: [
      'h1 不是“越大越好”，而是页面主标题',
      '图片没有 alt 会降低无障碍和信息可达性'
    ],
    practices: [
      { title: '练习：把文章重写成语义化 HTML', description: '用 h1、p、a、img、ul/li 表达一篇文章结构，而不是一堆 div。' },
      { title: '练习：区分 strong/em 和 b/i', description: '观察它们在语义和视觉上的区别。' }
    ],
    refs: [{ title: 'MDN - HTML 元素参考', url: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element' }]
  },
  'html-forms': {
    detail: `表单是网页里最重要的交互入口之一。学习表单不是只会写 input，而是要理解“信息如何被收集、验证、提交，以及如何让用户少犯错”。

这一节要把 form、label、fieldset、legend、各种 input 类型和 HTML5 校验串起来，形成完整的表单思维。`,
    learningGoals: [
      '理解 form 的提交结构和方法',
      '掌握常见 input 类型与适用场景',
      '知道如何用 label 和校验属性提升可用性'
    ],
    prerequisites: [
      '知道基本 HTML 标签如何书写',
      '了解用户输入和提交的区别'
    ],
    keyPoints: [
      'form 决定表单的提交范围',
      'label 关联输入框能提升点击可用性',
      'required、pattern、minlength、maxlength 是前端校验基础',
      'select/textarea/button 是常见表单控件',
      '字段分组时可以使用 fieldset 和 legend'
    ],
    misconceptions: [
      'placeholder 不能代替 label',
      '前端校验不能替代后端校验'
    ],
    practices: [
      { title: '练习：注册表单', description: '设计邮箱、密码、年龄、职业等输入项，并加上最基础的校验。' },
      { title: '练习：登录表单可访问性检查', description: '让每个输入框都能通过 label 正确聚焦。' }
    ],
    refs: [{ title: 'MDN - 表单与验证', url: 'https://developer.mozilla.org/zh-CN/docs/Learn/Forms' }]
  },
  'html-semantic': {
    detail: `语义化标签的核心不是“好看”，而是“让结构自己说话”。一个页面如果全是 div，浏览器、搜索引擎和辅助技术都需要猜；如果使用正确的语义标签，页面结构就会明显清楚。

这一节重点理解 header、nav、main、article、section、aside、footer 各自的边界，以及为什么语义化会直接影响 SEO、无障碍和团队协作。`,
    learningGoals: [
      '理解常见语义化标签的职责边界',
      '能把一个无语义页面重构成结构清晰的页面',
      '知道语义化如何影响 SEO 和可访问性'
    ],
    prerequisites: [
      '能写基本 HTML 页面',
      '知道标签的内容模型概念'
    ],
    keyPoints: [
      'header 通常放导航、Logo、标题等顶部信息',
      'nav 用于主导航区域',
      'main 是页面主体内容，通常唯一',
      'article 表示可独立分发的内容单元',
      'section 用于主题分组'
    ],
    misconceptions: [
      'section 不是“万能容器”，它需要有主题',
      'main 不应该在页面里出现多个'
    ],
    practices: [
      { title: '练习：把 div 页面改写成语义结构', description: '让页面主结构自然分成 header、main、article、aside、footer。' },
      { title: '练习：比较语义化前后的 DOM 层级', description: '看代码可读性和结构是否更清晰。' }
    ],
    refs: [{ title: 'MDN - 文档与网站结构', url: 'https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure' }]
  },
  'html-table': {
    detail: `表格是“二维数据呈现”的标准方案。很多小白只会写 table，却不知道表格的语义结构、表头关联和复杂数据表该如何组织。

这一节要让你明白 table 不只是“排版工具”，而是适合展示行列型数据的结构化容器。你需要掌握 thead、tbody、tfoot、th、caption 的职责。`,
    learningGoals: [
      '掌握 table 的基础语义结构',
      '知道表头、表体、表脚分别做什么',
      '能写出可读性好的数据表格'
    ],
    prerequisites: [
      '了解 HTML 基础标签',
      '知道列表和块级结构的区别'
    ],
    keyPoints: [
      'caption 描述表格标题',
      'thead、tbody、tfoot 让结构更清晰',
      'th 表示表头单元格',
      'scope 属性可增强表头关联',
      '复杂表格中应优先考虑语义清晰而不是视觉堆叠'
    ],
    misconceptions: [
      'table 不是万能布局方案，页面布局优先考虑 CSS',
      'th 不是普通文本格，它承担表头语义'
    ],
    practices: [
      { title: '练习：做一张成绩表', description: '包含学科、分数、总分和平均分，练习表头和表体的结构。' },
      { title: '练习：给表格加上 caption 和 scope', description: '让表格更清晰、更易读。' }
    ],
    refs: [{ title: 'MDN - 表格基础', url: 'https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Tables/Basics' }],
    code: {
      html: '<table>\n  <caption>课程成绩表</caption>\n  <thead>\n    <tr><th scope="col">姓名</th><th scope="col">HTML</th><th scope="col">CSS</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>张三</td><td>90</td><td>88</td></tr>\n    <tr><td>李四</td><td>95</td><td>92</td></tr>\n  </tbody>\n</table>',
      css: 'table{width:100%;border-collapse:collapse;font-family:system-ui}caption{margin-bottom:8px;font-weight:600}th,td{border:1px solid #ddd;padding:10px;text-align:center}th{background:#f5f3ff}',
      js: ''
    }
  },
  'html-media': {
    detail: `媒体标签解决的是“页面不只是文本”的问题。音频、视频、图片和嵌入内容都属于多媒体范畴，它们有自己的加载方式、控制方式和可访问性要求。

这一节要知道 audio、video、picture、source、iframe 的职责边界，以及什么时候应该用原生媒体标签，什么时候该用更轻量的封装方式。`,
    learningGoals: [
      '理解 audio、video、picture、iframe 的用途',
      '知道 source 和 picture 的组合方式',
      '掌握多媒体内容的可访问性注意点'
    ],
    prerequisites: [
      '能理解 HTML 基础结构',
      '知道资源地址和属性的关系'
    ],
    keyPoints: [
      'audio 和 video 支持原生播放控制',
      'picture + source 适合做响应式图片',
      'iframe 适合嵌入外部页面或独立内容',
      '多媒体内容要考虑加载、替代文本和控制体验'
    ],
    misconceptions: [
      '所有外部内容都适合 iframe，实际上要先判断是否安全、是否影响性能',
      '图片不是纯装饰时必须提供替代信息'
    ],
    practices: [
      { title: '练习：做一个响应式图片展示区', description: '用 picture/source 根据屏幕尺寸加载不同图片。' },
      { title: '练习：嵌入一个视频预览框', description: '理解 video 的 controls 和基础播放体验。' }
    ],
    refs: [{ title: 'MDN - 多媒体与嵌入', url: 'https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding' }],
    code: {
      html: '<picture>\n  <source media="(max-width: 600px)" srcset="small.jpg">\n  <img src="large.jpg" alt="示例图片">\n</picture>\n<video controls width="320">\n  <source src="movie.mp4" type="video/mp4">\n</video>',
      css: 'picture,video{display:block;max-width:100%;margin:12px 0;border-radius:8px}',
      js: ''
    }
  },
  'html5-canvas': {
    detail: `Canvas 是“像素级画布”。它不是用标签描述内容，而是用 JavaScript 一步步绘制图形，这意味着你要先理解坐标系，再理解路径、填充、描边和动画循环。

它更适合图表、游戏、绘制、可视化和高频重绘场景。学习时不要只看 API 名字，而要理解“清空画布后重画”这一套工作方式。`,
    learningGoals: [
      '理解 Canvas 的像素绘制模型',
      '能使用 2d 上下文绘制基础图形',
      '理解 requestAnimationFrame 的作用'
    ],
    prerequisites: [
      '掌握 HTML 基础',
      '理解 JS 如何操作 DOM'
    ],
    keyPoints: [
      'canvas 需要 width 和 height，不只是 CSS 宽高',
      'getContext("2d") 获取二维绘图上下文',
      'beginPath、fill、stroke、arc 是基础 API',
      '动画通常用 requestAnimationFrame 驱动',
      '每次重绘前常需要清空画布'
    ],
    misconceptions: [
      'Canvas 不是“用来写普通排版”的',
      'canvas 的 CSS 尺寸和真实绘图尺寸不是一回事'
    ],
    practices: [
      { title: '练习：绘制一个简单图表', description: '画柱状图或饼图，理解坐标和路径。' },
      { title: '练习：做一个动画圆点', description: '用 rAF 做持续更新。' }
    ],
    refs: [{ title: 'MDN - Canvas API', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial' }]
  },
  'html5-svg': {
    detail: `SVG 是矢量图形，核心优势是放大不失真。它适合图标、Logo、插图和简单动画，因为它是“描述形状”，不是“描述像素”。

学习 SVG 时，重点要掌握 viewBox、path、基础图形元素以及它和 CSS 的配合方式。真正重要的是知道什么时候该用 SVG，什么时候该用 Canvas。`,
    learningGoals: [
      '理解 SVG 的矢量图形特性',
      '掌握 viewBox 和基础图形元素',
      '知道 SVG 适合的业务场景'
    ],
    prerequisites: [
      '知道 HTML 标签是如何描述页面结构的',
      '了解坐标系的基本概念'
    ],
    keyPoints: [
      'viewBox 定义 SVG 的坐标范围',
      'rect、circle、path 是最常用的图形元素',
      'path 的 d 属性可以描述复杂路径',
      'SVG 可以直接被 CSS 控制样式',
      '适合图标、Logo 和简单数据可视化'
    ],
    misconceptions: [
      'SVG 不是位图，不会像图片那样天然失真',
      'path 看起来复杂，但它是 SVG 的核心能力之一'
    ],
    practices: [
      { title: '练习：画一个简单图标', description: '用 rect、circle、path 组合一个可复用图标。' },
      { title: '练习：给 SVG 加样式', description: '用 CSS 改变填充、边框和悬停效果。' }
    ],
    refs: [{ title: 'MDN - SVG 教程', url: 'https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial' }]
  },
  'html-webstorage': {
    detail: `Web Storage 是浏览器本地存储最常见的方案。它的核心不是“能存数据”，而是理解 localStorage 和 sessionStorage 的持久化边界、同步 API 特点，以及字符串存储限制。

学习这一节时，要能把“主题偏好”“草稿保存”“最近访问记录”这些场景和存储方案对应起来。`,
    learningGoals: [
      '理解 localStorage 和 sessionStorage 的差异',
      '会对对象数据进行序列化和反序列化',
      '知道 Web Storage 的典型应用场景'
    ],
    prerequisites: [
      '理解键值对和对象的基本概念',
      '知道浏览器会保存一些本地数据'
    ],
    keyPoints: [
      'localStorage 通常用于长期保存偏好设置',
      'sessionStorage 只在当前标签页会话中存在',
      '只能存字符串，复杂数据要 JSON.stringify',
      '取值时需要 JSON.parse 还原对象',
      '适合保存低频、非敏感、客户端可恢复的数据'
    ],
    misconceptions: [
      '不要把敏感信息直接放在 localStorage 里',
      'Web Storage 不是数据库，它适合简单轻量数据'
    ],
    practices: [
      { title: '练习：保存主题偏好', description: '切换主题后，把结果存入 localStorage。' },
      { title: '练习：做一个草稿缓存', description: '输入内容后刷新页面仍能恢复。' }
    ],
    refs: [{ title: 'MDN - Web Storage API', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API' }]
  },
  'html5-websocket': {
    detail: `WebSocket 解决的是“浏览器和服务端实时双向通信”的问题。它和普通 HTTP 请求最大不同在于连接建立后可以持续通信，不需要每次都重新发起请求。

这一节你要掌握连接、收消息、发消息、断开和异常处理，还要能说清它为什么适合聊天室、通知、协同编辑和实时行情。`,
    learningGoals: [
      '理解 WebSocket 的双向通信特点',
      '知道连接生命周期的关键事件',
      '能分辨 WebSocket 和 HTTP 轮询的区别'
    ],
    prerequisites: [
      '理解请求与响应模型',
      '知道前端如何与后端交互'
    ],
    keyPoints: [
      'new WebSocket(url) 创建连接',
      'onopen、onmessage、onclose、onerror 是核心事件',
      'send() 用于发送消息',
      'ws:// 和 wss:// 分别表示普通连接和加密连接',
      '适合实时性要求高的场景'
    ],
    misconceptions: [
      'WebSocket 不是普通 fetch 的替代品，而是实时通信方案',
      '连接建立后也要考虑断线重连和心跳'
    ],
    practices: [
      { title: '练习：做一个聊天面板', description: '模拟发送消息和接收回复。' },
      { title: '练习：模拟断线重连逻辑', description: '理解连接中断后的恢复思路。' }
    ],
    refs: [{ title: 'MDN - WebSocket', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket' }]
  },
  'html5-history': {
    detail: `History API 是单页应用路由的底层基础之一。它真正要解决的问题是：在不刷新的情况下改变 URL，并且还能让浏览器的前进/后退按钮正常工作。

学习这一节时，要把 pushState、replaceState、popstate、history stack 串起来理解，同时知道它为什么要求服务端配合做 fallback。`,
    learningGoals: [
      '理解 History API 的路由能力',
      '会区分 pushState 和 replaceState',
      '知道 popstate 在何时触发'
    ],
    prerequisites: [
      '了解浏览器地址栏和历史记录的概念',
      '知道单页应用的基本定义'
    ],
    keyPoints: [
      'pushState 用于添加历史记录且不刷新页面',
      'replaceState 用于替换当前历史记录',
      'popstate 在浏览器前进/后退时触发',
      'history 方案通常需要服务端 fallback 配合',
      '它是 SPA 路由的底层实现之一'
    ],
    misconceptions: [
      '修改 URL 不等于刷新页面',
      'History 路由和 Hash 路由不是同一种方案'
    ],
    practices: [
      { title: '练习：手写简易路由切换', description: '用 pushState 模拟页面切换。' },
      { title: '练习：监听前进后退', description: '处理 popstate 并恢复页面状态。' }
    ],
    refs: [{ title: 'MDN - History API', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/History_API' }]
  },
  'html-accessibility': {
    detail: `可访问性不是“高级附加项”，而是让更多人能正常使用页面的基础能力。对于 HTML 来说，最关键的是 alt、label、语义化结构、tab 顺序和 aria 的正确使用。

学习这一节时，要把“我能看懂”切换成“键盘用户、读屏用户也能顺利使用”。这是前端教学里最容易被忽略、但非常重要的一节。`,
    learningGoals: [
      '理解可访问性的基本目标',
      '知道 alt、label、aria、tabindex 的职责',
      '能写出更友好的交互结构'
    ],
    prerequisites: [
      '已经掌握 HTML 基础标签',
      '了解表单和语义化标签'
    ],
    keyPoints: [
      'alt 是图片的替代文本',
      'label 让表单字段更容易操作',
      '语义化标签有助于读屏和搜索理解',
      'tabindex 影响键盘聚焦顺序',
      'aria 用于补充交互语义'
    ],
    misconceptions: [
      'aria 不是“越多越好”，乱加会适得其反',
      '可访问性不是只给特殊人群使用，而是提升所有人的体验'
    ],
    practices: [
      { title: '练习：给页面补全 alt 和 label', description: '检查是否存在缺失的替代文本和表单关联。' },
      { title: '练习：用键盘完整操作页面', description: '只用键盘完成焦点切换和提交。' }
    ],
    refs: [{ title: 'MDN - 可访问性基础', url: 'https://developer.mozilla.org/zh-CN/docs/Learn/Accessibility/What_is_accessibility' }]
  }
};

export { htmlLessons };
