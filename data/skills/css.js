const skillContent = {};

skillContent['css-selectors'] = {
  title: 'CSS 选择器详解',
  description: '掌握各类 CSS 选择器及优先级计算',
  difficulty: '初级',
  detail: 'CSS 选择器用于匹配 HTML 元素并应用样式。基础选择器包括：元素选择器（div、p、h1）、类选择器（.class）、ID 选择器（#id）、通配选择器（*）。复合选择器包括：后代选择器（div p 空格）、子代选择器（div > p）、相邻兄弟选择器（h2 + p）、通用兄弟选择器（h2 ~ p）。属性选择器按属性匹配：[type="text"]、[href^="https"]、[src$=".jpg"]。伪类选择器描述元素状态：:hover、:focus、:nth-child(n)、:not(selector)。伪元素选择器创建虚拟元素：::before、::after 用于装饰性内容。选择器的优先级（权重）从高到低为：!important > 行内样式 > ID 选择器 > 类/属性/伪类 > 元素/伪元素。精确理解选择器和权重是编写可维护 CSS 的基础。',
  keyPoints: [
    '.class 和 #id 是最常用的选择器',
    '后代(空格) vs 子代(>) 的区别',
    ':nth-child(odd/even/n) 交替选择元素',
    '[type="email"] 属性精确匹配',
    '::before 和 ::after 必须配合 content 使用',
    '权重计算：ID > 类 > 元素',
    '!important 破坏级联规则，谨慎使用'
  ],
  code: {
    html: '<div class="card">\n  <h2 id="title">选择器演示</h2>\n  <p class="text">普通段落</p>\n  <p class="text special">特殊段落</p>\n  <ul>\n    <li>第一项</li>\n    <li>第二项</li>\n    <li>第三项</li>\n  </ul>\n  <a href="https://example.com" target="_blank">示例链接</a>\n  <input type="text" placeholder="文本输入">\n  <input type="email" placeholder="邮箱输入">\n</div>',
    css: '.card { padding: 20px; border: 1px solid #ddd; border-radius: 8px; font-family: system-ui; max-width: 400px; }\n#title { color: #4F46E5; border-bottom: 2px solid; }\n.text { color: #333; }\n.special { color: #F97316; font-weight: bold; }\nli:nth-child(2) { color: #4F46E5; font-weight: bold; }\nli:hover { background: #f5f3ff; cursor: pointer; }\na[target="_blank"]::after { content: " ↗"; font-size: 12px; }\ninput[type="email"] { border-color: #22C55E; }\ninput[type="text"] { border-color: #ccc; }\ninput { display: block; margin: 8px 0; padding: 6px; border: 2px solid; border-radius: 4px; width: 100%; box-sizing: border-box; }',
    js: ''
  }
};

skillContent['css-boxmodel'] = {
  title: 'CSS 盒模型',
  description: '透彻理解 content、padding、border、margin',
  difficulty: '初级',
  detail: 'CSS 盒模型是 CSS 布局的核心概念。每个 HTML 元素都被视为一个矩形盒子，从内到外包含：content（内容区域）、padding（内边距）、border（边框）、margin（外边距）。标准盒模型（content-box）中，width/height 只包含 content 区域，元素实际占据的宽度 = width + padding + border。怪异盒模型（border-box）中，width/height 包含 content + padding + border，更符合直觉，推荐全局使用 box-sizing: border-box。padding 在元素内部创建空间，背景色会延伸到 padding 区域。border 支持样式（solid/dashed/dotted）、宽度、颜色。margin 在元素外部创建间距，存在上下 margin 折叠（Collapse）现象：相邻元素上下 margin 取大值而非相加。负 margin 可以让元素偏移或拉伸。',
  keyPoints: [
    'content-box：width 只包含内容区',
    'border-box：width 包含 padding + border',
    '推荐全局设置 box-sizing: border-box',
    'margin 折叠：取大值而非相加',
    'padding 影响元素背景区域',
    'border 简写：width style color',
    '负 margin 可用于特殊布局技巧'
  ],
  code: {
    html: '<h2>盒模型对比</h2>\n<div class="demo">\n  <div class="box content-box">\n    <strong>content-box</strong>\n    <p>width: 200px</p>\n    <p>padding: 20px</p>\n    <p>实际宽: 240px</p>\n  </div>\n  <div class="box border-box">\n    <strong>border-box</strong>\n    <p>width: 200px</p>\n    <p>padding: 20px</p>\n    <p>实际宽: 200px</p>\n  </div>\n</div>\n<div class="margin-demo">\n  <div class="margin-box">margin: 20px</div>\n  <div class="margin-box">margin: 20px</div>\n  <p class="note">两个盒子之间的间距为 20px（折叠），而非 40px</p>\n</div>',
    css: 'body { font-family: system-ui; max-width: 600px; margin: 20px auto; padding: 20px; }\nh2 { color: #4F46E5; }\n.demo { display: flex; gap: 20px; margin: 16px 0; }\n.box { width: 200px; padding: 20px; border: 10px solid #4F46E5; background: #f5f3ff; border-radius: 8px; }\n.content-box { box-sizing: content-box; }\n.border-box { box-sizing: border-box; }\n.margin-demo { margin-top: 20px; }\n.margin-box { margin: 20px; padding: 12px; background: #FEF3C7; border-radius: 6px; text-align: center; }\n.note { color: #666; font-size: 13px; text-align: center; }',
    js: ''
  }
};

skillContent['css-flexbox'] = {
  title: 'Flexbox 弹性布局',
  description: '掌握一维弹性布局实现各种排列方式',
  difficulty: '中级',
  detail: 'Flexbox（弹性盒子）是 CSS3 引入的一维布局模型，适合在行或列方向上排列元素。容器属性：display: flex 创建弹性容器；flex-direction 控制主轴方向（row/column/row-reverse/column-reverse）；flex-wrap 控制是否换行（nowrap/wrap/wrap-reverse）；justify-content 主轴对齐方式（flex-start/flex-end/center/space-between/space-around/space-evenly）；align-items 交叉轴对齐（stretch/flex-start/flex-end/center/baseline）；align-content 多行整体对齐。项目属性：flex-grow 放大比例（默认 0）；flex-shrink 缩小比例（默认 1）；flex-basis 初始大小；flex 是 grow/shrink/basis 的简写；order 控制排列顺序（默认 0）。align-self 覆盖容器的 align-items 设置。Flexbox 解决垂直居中、等分布局、自适应导航栏等经典布局问题。',
  keyPoints: [
    'display: flex 创建弹性容器',
    'justify-content 主轴对齐、align-items 交叉轴对齐',
    'flex: 1 平均分配剩余空间',
    'flex-direction: column 垂直排列',
    'flex-wrap: wrap 实现响应式换行',
    'align-self 单独控制某个项目对齐',
    'order 改变项目展示顺序（不改变 DOM）'
  ],
  code: {
    html: '<h2>Flexbox 布局演示</h2>\n<div class="controls">\n  <label>justify-content:\n    <select id="jcSelect">\n      <option value="flex-start">flex-start</option>\n      <option value="center" selected>center</option>\n      <option value="flex-end">flex-end</option>\n      <option value="space-between">space-between</option>\n      <option value="space-around">space-around</option>\n      <option value="space-evenly">space-evenly</option>\n    </select>\n  </label>\n  <label>align-items:\n    <select id="aiSelect">\n      <option value="stretch" selected>stretch</option>\n      <option value="flex-start">flex-start</option>\n      <option value="center">center</option>\n      <option value="flex-end">flex-end</option>\n    </select>\n  </label>\n</div>\n<div class="container" id="container">\n  <div class="item">1</div>\n  <div class="item tall">2</div>\n  <div class="item">3</div>\n  <div class="item wide">4</div>\n</div>\n<div class="tip">尝试选择不同的对齐方式观察效果</div>',
    css: 'body { font-family: system-ui; max-width: 600px; margin: 20px auto; padding: 20px; }\nh2 { color: #4F46E5; }\n.controls { display: flex; gap: 16px; margin: 16px 0; flex-wrap: wrap; }\nlabel { font-size: 14px; color: #333; }\nselect { padding: 4px 8px; border: 1px solid #ccc; border-radius: 4px; }\n.container { display: flex; gap: 8px; min-height: 200px; padding: 12px; background: #f5f3ff; border-radius: 8px; border: 2px dashed #4F46E5; }\n.item { background: #4F46E5; color: #fff; padding: 16px; border-radius: 6px; text-align: center; font-size: 18px; min-width: 60px; }\n.tall { padding: 32px 16px; background: #F97316; }\n.wide { padding: 16px 32px; background: #22C55E; }\n.tip { margin-top: 12px; font-size: 13px; color: #666; text-align: center; }',
    js: 'var container = document.getElementById("container");\ndocument.getElementById("jcSelect").onchange = function() {\n  container.style.justifyContent = this.value;\n};\ndocument.getElementById("aiSelect").onchange = function() {\n  container.style.alignItems = this.value;\n};'
  }
};

skillContent['css-grid'] = {
  title: 'CSS Grid 网格布局',
  description: '掌握二维网格布局系统',
  difficulty: '较难',
  detail: 'CSS Grid 是 CSS3 引入的二维布局系统，同时控制行和列的排列，比 Flexbox 更适合复杂页面布局。容器属性：display: grid 创建网格容器；grid-template-columns 和 grid-template-rows 定义列和行的大小（使用 px、fr、%、auto、repeat()、minmax()）；gap 设置间距（合并 gap 属性）；grid-template-areas 用命名区域定义布局模板。项目属性：grid-column 和 grid-row 控制项目跨越的列/行范围（支持 span 关键字）；justify-self 和 align-self 控制项目在单元格内的对齐。fr 单位是 Grid 特有的弹性单位，按比例分配剩余空间。repeat(auto-fill/auto-fit, minmax(200px, 1fr)) 实现自动响应的网格，无需媒体查询即可适配不同屏幕宽度。Grid 适合页面整体布局和二维密集型排列。',
  keyPoints: [
    'grid-template-columns 定义列数和宽度',
    'fr 单位按比例分配剩余空间',
    'grid-column: span 2 跨两列',
    'repeat(3, 1fr) 三等分布局',
    'minmax(200px, 1fr) 弹性范围约束',
    'grid-area 配合 template-areas 命名布局',
    'auto-fill/auto-fit 实现自适应网格'
  ],
  code: {
    html: '<h2>Grid 网格布局</h2>\n<div class="grid-demo">\n  <header class="grid-header">页眉区域</header>\n  <nav class="grid-nav">导航区域</nav>\n  <main class="grid-main">主体区域</main>\n  <aside class="grid-aside">侧边栏</aside>\n  <footer class="grid-footer">页脚区域</footer>\n</div>\n<p class="tip">典型的 Grid 页面布局：页眉 + 导航 + 主体 + 侧边栏 + 页脚</p>',
    css: 'body { font-family: system-ui; max-width: 700px; margin: 20px auto; padding: 20px; }\nh2 { color: #4F46E5; }\n.grid-demo {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas:\n    "header header"\n    "nav main"\n    "sidebar main"\n    "footer footer";\n  gap: 10px;\n  min-height: 350px;\n}\n.grid-demo > * {\n  padding: 20px;\n  border-radius: 8px;\n  color: #fff;\n  font-weight: 500;\n}\n.grid-header { grid-area: header; background: #4F46E5; }\n.grid-nav { grid-area: nav; background: #818CF8; }\n.grid-main { grid-area: main; background: #F97316; }\n.grid-aside { grid-area: sidebar; background: #22C55E; }\n.grid-footer { grid-area: footer; background: #333; }\n.tip { margin-top: 12px; font-size: 13px; color: #666; text-align: center; }',
    js: ''
  }
};

skillContent['css-position'] = {
  title: 'CSS 定位机制',
  description: '掌握 relative、absolute、fixed、sticky 定位',
  difficulty: '中级',
  detail: 'CSS position 属性控制元素的定位方式。static（默认）按正常文档流排列。relative 保留元素原来占据的空间，根据 top/right/bottom/left 相对于自身原位置偏移。absolute 脱离文档流，相对于最近的非 static 定位祖先元素定位，常用于创建弹出层、工具提示。fixed 相对于视口定位，常用于固定导航栏和回到顶部按钮。sticky 在滚动到指定阈值前表现为 relative，超过后固定为 fixed，适合粘性表头和侧边栏。定位元素的层叠顺序由 z-index 控制，值越大层级越高。注意：z-index 仅在定位元素上生效。absolute 和 fixed 元素会脱离文档流，可能造成父元素高度塌陷，需要通过设置父元素高度来避免。',
  keyPoints: [
    'relative 相对自身偏移，保留原来位置',
    'absolute 脱离文档流，相对于最近定位祖先',
    'fixed 视口固定，不随滚动移动',
    'sticky 滚动到阈值后固定（需指定 top）',
    'z-index 控制堆叠顺序（仅在定位元素生效）',
    'absolute 元素需父容器设 position: relative',
    'fixed 常用于顶部导航和悬浮按钮'
  ],
  code: {
    html: '<h2>定位演示</h2>\n<div class="demo-area">\n  <div class="box static">static（默认）</div>\n  <div class="box relative">relative<br>top: 20px</div>\n  <div class="relative-parent">\n    相对定位父容器\n    <div class="absolute-child">absolute<br>相对于父容器</div>\n  </div>\n  <div class="box sticky-demo" id="stickyBox">sticky<br>滚动我试试</div>\n  <div class="box fixed-info">fixed<br>始终可见</div>\n</div>\n<div class="scroll-hint">滚动页面观察 sticky 和 fixed 效果</div>',
    css: 'body { font-family: system-ui; max-width: 600px; margin: 20px auto; padding: 20px; height: 600px; }\nh2 { color: #4F46E5; }\n.demo-area { position: relative; }\n.box { padding: 16px; margin: 8px 0; border-radius: 6px; background: #e5e7eb; text-align: center; font-size: 13px; }\n.relative { position: relative; top: 20px; background: #818CF8; color: #fff; }\n.relative-parent { position: relative; padding: 30px; margin-top: 30px; background: #f5f3ff; border-radius: 8px; min-height: 100px; }\n.absolute-child { position: absolute; bottom: 10px; right: 10px; padding: 10px; background: #F97316; color: #fff; border-radius: 6px; font-size: 12px; }\n.sticky-demo { position: sticky; top: 0; background: #22C55E; color: #fff; z-index: 1; }\n.fixed-info { position: fixed; bottom: 20px; right: 20px; background: #333; color: #fff; z-index: 10; }\n.scroll-hint { text-align: center; margin-top: 20px; color: #999; font-size: 13px; }',
    js: ''
  }
};

skillContent['css-responsive'] = {
  title: '响应式设计与媒体查询',
  description: '创建适配各种屏幕尺寸的响应式页面',
  difficulty: '中级',
  detail: '响应式设计（RWD）让页面在不同设备上都获得良好的浏览体验。核心三要素：媒体查询、弹性布局、相对单位。媒体查询 @media 根据设备特性应用不同样式：@media (max-width: 768px) 手机端，@media (min-width: 769px) and (max-width: 1024px) 平板端。移动优先（Mobile First）的写法是先写移动端样式，用 min-width 向上兼容。相对单位 rem（相对于根元素字体大小）和 em（相对于父元素字体大小）实现自适应缩放。视口单位 vw（视口宽度百分比）和 vh（视口高度百分比）直接基于视口尺寸。图片响应式使用 max-width: 100% 防止溢出。多列布局结合 Flexbox 和 Grid 的自动换行特性（flex-wrap: wrap、auto-fill），无需媒体查询即可适配。断点的选择应基于内容而非特定设备。',
  keyPoints: [
    '@media (max-width: 768px) 手机端断点',
    '移动优先：先写基础样式，min-width 渐进增强',
    'rem 相对于根字体大小，em 相对于父级',
    'vw/vh 基于视口宽高百分比',
    '图片设置 max-width: 100% 自适应',
    'flex-wrap + Grid auto-fill 免媒体查询适配',
    '断点基于内容，而非特定设备尺寸'
  ],
  code: {
    html: '<h2>响应式页面演示</h2>\n<div class="resize-hint">调整窗口宽度观察变化</div>\n<nav class="responsive-nav">\n  <div class="logo">LOGO</div>\n  <ul class="nav-links">\n    <li>首页</li>\n    <li>关于</li>\n    <li>服务</li>\n    <li>联系</li>\n  </ul>\n</nav>\n<div class="content-grid">\n  <div class="card">卡片 1</div>\n  <div class="card">卡片 2</div>\n  <div class="card">卡片 3</div>\n  <div class="card">卡片 4</div>\n</div>',
    css: 'body { font-family: system-ui; max-width: 1000px; margin: 0 auto; padding: 16px; }\nh2 { color: #4F46E5; }\n.resize-hint { font-size: 13px; color: #999; margin-bottom: 12px; }\n.responsive-nav { display: flex; justify-content: space-between; align-items: center; padding: 16px; background: #4F46E5; color: #fff; border-radius: 8px; }\n.nav-links { display: flex; gap: 20px; list-style: none; margin: 0; padding: 0; }\n@media (max-width: 480px) {\n  .responsive-nav { flex-direction: column; gap: 12px; }\n  .nav-links { flex-direction: column; align-items: center; gap: 8px; }\n}\n.content-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; margin-top: 20px; }\n.card { padding: 40px; background: #f5f3ff; border: 1px solid #ddd; border-radius: 8px; text-align: center; font-size: 18px; color: #4F46E5; }',
    js: ''
  }
};

skillContent['css-animation'] = {
  title: 'CSS 过渡与动画',
  description: '使用 transition 和 animation 创建流畅动效',
  difficulty: '较难',
  detail: 'CSS 过渡和动画为用户交互提供视觉反馈。transition 当属性值变化时平滑过渡，包含：transition-property（要过渡的属性）、duration（持续时间）、timing-function（缓动函数：ease/ease-in/ease-out/linear/cubic-bezier）、delay（延迟）。transition 简写：transition: all 0.3s ease。适合 hover、focus 等触发的简单状态变化。animation 更加灵活，通过 @keyframes 定义多阶段动画序列，包含：animation-name（动画名称）、duration（时长）、timing-function（缓动）、delay（延迟）、iteration-count（播放次数：infinite 循环）、direction（方向：normal/reverse/alternate）、fill-mode（结束后状态：forwards/backwards/both）。常见动画效果包括旋转加载器、淡入淡出、上滑出现、呼吸灯、摇晃提示。使用 transform 和 opacity 做动画性能最佳，因为它们只触发合成层而不触发布局重绘。',
  keyPoints: [
    'transition 适合简单状态变化的过渡',
    'transition: all 0.3s ease 常用简写',
    '@keyframes 定义多阶段动画关键帧',
    'animation: name duration timing-function',
    'infinite 无限循环动画',
    'transform 和 opacity 做动画性能最优',
    'cubic-bezier 自定义缓动曲线'
  ],
  code: {
    html: '<h2>CSS 动画演示</h2>\n<div class="demo-area">\n  <div class="anim-row">\n    <button id="animateBtn">触发动画</button>\n    <button id="toggleBtn" class="toggle-off">切换状态</button>\n  </div>\n  <div class="box-container">\n    <div class="box transition-box">transition</div>\n    <div class="box animation-box">animation</div>\n    <div class="box bounce-box">bounce</div>\n    <div class="box spinner-box">spinner</div>\n  </div>\n</div>',
    css: 'body { font-family: system-ui; max-width: 600px; margin: 20px auto; padding: 20px; }\nh2 { color: #4F46E5; }\n.anim-row { display: flex; gap: 12px; margin: 16px 0; flex-wrap: wrap; }\nbutton { padding: 8px 20px; border: none; border-radius: 6px; background: #4F46E5; color: #fff; cursor: pointer; }\nbutton:hover { opacity: 0.9; }\n.toggle-off { background: #999; }\n.toggle-on { background: #22C55E; }\n.box-container { display: flex; gap: 16px; flex-wrap: wrap; }\n.box { width: 120px; height: 80px; display: flex; align-items: center; justify-content: center; border-radius: 8px; color: #fff; font-size: 12px; text-align: center; }\n.transition-box { background: #4F46E5; transition: transform 0.3s, background 0.3s; }\n.transition-box:hover { transform: scale(1.1); background: #4338CA; }\n.animation-box { background: #F97316; animation: pulse 2s infinite; }\n@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }\n.bounce-box { background: #22C55E; }\n.bounce-box.play { animation: bounce 0.5s; }\n@keyframes bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }\n.spinner-box { background: transparent; border: 4px solid #ddd; border-top-color: #4F46E5; border-radius: 50%; animation: spin 1s linear infinite; }\n@keyframes spin { to { transform: rotate(360deg); } }',
    js: 'document.getElementById("animateBtn").onclick = function() {\n  var box = document.querySelector(".bounce-box");\n  box.classList.remove("play");\n  void box.offsetWidth;\n  box.classList.add("play");\n};\ndocument.getElementById("toggleBtn").onclick = function() {\n  this.classList.toggle("toggle-off");\n  this.classList.toggle("toggle-on");\n  this.textContent = this.classList.contains("toggle-on") ? "已开启" : "已关闭";\n};'
  }
};

var category = {
  key: 'css',
  label: 'CSS',
  skills: Object.keys(skillContent).map(function(id) { return { id: id, title: skillContent[id].title }; })
};

export { skillContent as cssSkillContent, category as cssCategory };
