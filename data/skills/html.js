// HTML 技能数据模块
const skillContent = {};

skillContent['html-basic'] = {
  title: 'HTML 基础结构',
  description: '掌握 HTML 文档的基本骨架和声明',
  difficulty: '初级',
  detail: 'HTML（HyperText Markup Language）是构建网页的标准标记语言。每个 HTML 文档都必须以 DOCTYPE 声明开头，告诉浏览器当前页面使用哪个 HTML 版本。对于 HTML5，使用 <!DOCTYPE html>。<html> 元素是整个文档的根节点，lang 属性指定页面语言（如 zh-CN）。<head> 区域包含元数据（meta charset 声明字符编码、title 定义标题、link 引入样式），这些内容不会直接显示在页面上。<body> 区域包含所有可见内容。良好的文档结构是 SEO 和可访问性的基础。',
  keyPoints: [
    '<!DOCTYPE html> 必须位于文档最顶部',
    '<html lang=\"zh-CN\"> 根元素指定语言',
    '<head> 存放元数据、样式引用、脚本',
    '<meta charset=\"UTF-8\"> 解决中文乱码',
    '<title> 影响 SEO 和浏览器标签页显示',
    '<body> 包含所有可见的页面内容',
    '使用语义化结构提升可访问性'
  ],
  code: {
    html: '<h1>欢迎学习 HTML</h1>\n<p>这是一个完整的 HTML5 文档结构示例。</p>\n<ul>\n  <li>DOCTYPE 声明告诉浏览器渲染模式</li>\n  <li>head 中的 meta 定义字符编码</li>\n  <li>body 包含可见内容</li>\n</ul>',
    css: 'body { font-family: system-ui, sans-serif; max-width: 640px; margin: 40px auto; padding: 0 20px; line-height: 1.6; color: #333; }\nh1 { color: #4F46E5; border-bottom: 3px solid #4F46E5; padding-bottom: 8px; }\nli { margin: 8px 0; padding: 8px 12px; background: #f5f3ff; border-radius: 6px; border-left: 3px solid #4F46E5; }',
    js: 'console.log("HTML 基础结构 - 文档已加载");'
  }
};

skillContent['html-tags'] = {
  title: '常用 HTML 标签',
  description: '掌握标题、段落、链接、图片、列表等核心标签',
  difficulty: '初级',
  detail: 'HTML 提供了丰富的标签来构建页面内容。标题标签 h1-h6 定义内容的层级结构，h1 页面唯一且最重要。段落标签 p 包裹文本段落。超链接 a 使用 href 属性跳转到其他页面或锚点，target=\"_blank\" 在新标签页打开。图片 img 是自闭合标签，src 指定图片路径，alt 提供替代文本（对 SEO 和无障碍至关重要）。列表分为无序 ul/li、有序 ol/li 和自定义列表 dl/dt/dd。合理使用这些标签是构建语义化页面的基础。',
  keyPoints: [
    'h1-h6 定义标题层级，h1 每页仅使用一次',
    'a 标签 href 指定跳转目标',
    'img 必须设置 alt 属性提升无障碍',
    'ul/ol 配合 li 使用，ul 无序 ol 有序',
    'br 换行、hr 水平分割线',
    'div 块级容器、span 行内容器',
    '<strong> 表示重要（加粗）、<em> 表示强调（斜体）'
  ],
  code: {
    html: '<h1>我的博客</h1>\n<h2>HTML 标签学习笔记</h2>\n<p>今天学习了常用的 <strong>HTML 标签</strong>，包括标题、段落、链接和图片。</p>\n<a href=\"https://developer.mozilla.org/zh-CN/\" target=\"_blank\">\n  前往 MDN 学习更多\n</a>\n<h3>我的技能清单</h3>\n<ul>\n  <li>HTML 基础结构</li>\n  <li>常用标签</li>\n  <li>表单与输入</li>\n</ul>\n<img src=\"https://picsum.photos/400/200\" alt=\"随机示例图片\" style=\"max-width:100%\">',
    css: 'body { font-family: system-ui; max-width: 600px; margin: 30px auto; padding: 20px; }\nh1 { color: #4F46E5; }\nh2 { color: #666; font-size: 18px; }\na { color: #4F46E5; text-decoration: none; font-weight: 500; }\na:hover { text-decoration: underline; }\nul { background: #f9f9f9; padding: 16px 32px; border-radius: 8px; }\nimg { border-radius: 8px; margin-top: 12px; }',
    js: ''
  }
};

skillContent['html-forms'] = {
  title: 'HTML 表单与输入',
  description: '学习表单元素、输入类型和 HTML5 表单验证',
  difficulty: '中级',
  detail: '表单是用户与网页交互的核心方式。<form> 标签定义表单区域，action 指定提交地址，method 指定 GET/POST 请求方式。input 是最常用的表单控件，type 属性决定输入类型：text（文本）、password（密码）、email（邮箱）、number（数字）、checkbox（复选框）、radio（单选框）、file（文件上传）、range（滑块）等。HTML5 引入了 required（必填）、pattern（正则校验）、min/max（数值范围）、placeholder（占位提示）等属性实现前端验证。select 创建下拉菜单，textarea 提供多行文本输入。button 的 type=submit 触发表单提交。合理使用 label 的 for 属性关联表单控件，点击标签即可聚焦输入框，提升可用性。',
  keyPoints: [
    'form 的 action 和 method 定义提交行为',
    'input type 决定输入形式和键盘类型',
    'required 实现必填校验',
    'pattern 使用正则表达式自定义验证',
    'placeholder 提供输入提示但不替代 label',
    'label for 与 input id 关联提升可访问性',
    'checkbox 支持多选、radio 保证单选（同名）',
    'select + option 创建下拉选择菜单'
  ],
  code: {
    html: '<h2>用户注册</h2>\n<form>\n  <label>邮箱：<input type=\"email\" placeholder=\"you@example.com\" required></label>\n  <label>密码：<input type=\"password\" placeholder=\"至少6位\" minlength=\"6\" required></label>\n  <label>年龄：<input type=\"number\" min=\"1\" max=\"150\" value=\"18\"></label>\n  <fieldset>\n    <legend>偏好</legend>\n    <label><input type=\"checkbox\"> 接收邮件通知</label>\n  </fieldset>\n  <label>城市：\n    <select><option>北京</option><option>上海</option><option>深圳</option></select>\n  </label>\n  <label>简介：<textarea rows=\"3\" placeholder=\"说点什么...\"></textarea></label>\n  <button type=\"submit\">注册</button>\n</form>',
    css: 'body { font-family: system-ui; max-width: 500px; margin: 30px auto; padding: 20px; }\nform { display: flex; flex-direction: column; gap: 14px; }\nlabel { display: flex; flex-direction: column; gap: 4px; font-size: 14px; font-weight: 500; color: #333; }\ninput, select, textarea { padding: 8px 12px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px; }\ninput:focus { border-color: #4F46E5; outline: none; box-shadow: 0 0 0 3px rgba(79,70,229,0.1); }\nfieldset { border: 1px solid #ddd; border-radius: 8px; padding: 12px; }\nbutton { background: #4F46E5; color: #fff; border: none; padding: 10px; border-radius: 6px; font-size: 15px; cursor: pointer; }\nbutton:hover { background: #4338CA; }\nh2 { color: #4F46E5; }',
    js: 'document.querySelector("form").onsubmit = function(e) {\n  e.preventDefault();\n  alert("表单提交成功！(演示模式)");\n};'
  }
};

skillContent['html-semantic'] = {
  title: 'HTML5 语义化标签',
  description: '用语义化标签构建结构清晰的页面',
  difficulty: '中级',
  detail: 'HTML5 引入了一系列语义化标签来替代无意义的 div 布局。header 表示页眉区域，通常包含 logo 和导航。nav 包裹主导航链接。main 表示页面主体内容，每页唯一。article 代表独立的内容单元（如博客文章、新闻条目）。section 对相关内容进行分组。aside 表示侧边栏或补充内容。footer 包含版权信息、友情链接等页脚内容。语义化的好处：搜索引擎能准确理解页面结构提升 SEO；屏幕阅读器可根据语义导航，改善无障碍体验；代码可读性更高，团队协作更顺畅。',
  keyPoints: [
    'header 页眉，可包含 logo、搜索、导航',
    'nav 主导航区域，通常包含 ul > li > a',
    'main 主体内容，每页有且仅有一个',
    'article 独立内容单元（文章、评论）',
    'section 对内容分组，通常带标题',
    'aside 侧边栏或补充信息',
    'footer 页脚，含版权、链接、备案信息'
  ],
  code: {
    html: '<header>\n  <h1>前端教程</h1>\n  <nav>\n    <a href=\"#\">HTML</a>\n    <a href=\"#\">CSS</a>\n    <a href=\"#\">JavaScript</a>\n  </nav>\n</header>\n<main>\n  <article>\n    <h2>语义化 HTML 的重要性</h2>\n    <p>使用语义化标签不仅让代码更易读，还能提升搜索引擎排名和无障碍体验。</p>\n    <section>\n      <h3>SEO 优势</h3>\n      <p>搜索引擎爬虫通过语义标签理解页面结构。</p>\n    </section>\n    <section>\n      <h3>无障碍优势</h3>\n      <p>屏幕阅读器利用语义标签辅助视障用户导航。</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2024 前端教程</p>\n</footer>',
    css: '* { margin: 0; padding: 0; box-sizing: border-box; }\nbody { font-family: system-ui; }\nheader { background: #4F46E5; color: #fff; padding: 20px; }\nnav { margin-top: 12px; display: flex; gap: 20px; }\nnav a { color: #fff; text-decoration: none; }\nmain { max-width: 800px; margin: 20px auto; padding: 20px; }\narticle { margin-bottom: 30px; }\nsection { margin: 16px 0; padding: 16px; background: #f5f3ff; border-radius: 8px; }\nfooter { background: #333; color: #fff; text-align: center; padding: 16px; margin-top: 30px; }',
    js: ''
  }
};

skillContent['html5-canvas'] = {
  title: 'Canvas 绘图 API',
  description: '用 Canvas 在浏览器中绘制图形、图表和动画',
  difficulty: '较难',
  detail: '<canvas> 元素提供了一个通过 JavaScript 绘制图形的位图画布。与 SVG 不同，Canvas 基于像素操作，适合实时渲染、游戏、数据可视化等场景。通过 getContext(\"2d\") 获取 2D 渲染上下文后，可以绘制矩形（fillRect/strokeRect）、路径（beginPath/moveTo/lineTo/arc）、文本（fillText）、图像（drawImage）。Canvas 还支持渐变（createLinearGradient）、阴影（shadowBlur）、变换（translate/rotate/scale）和像素级操作（getImageData/putImageData）。配合 requestAnimationFrame 可以创建流畅的动画。注意 Canvas 的坐标系原点在左上角，x 向右递增，y 向下递增。',
  keyPoints: [
    'canvas 元素设置 width/height，CSS 宽高可能导致缩放模糊',
    'getContext(\"2d\") 是唯一的 2D 渲染方式',
    'fillStyle/strokeStyle 设定填充和描边颜色',
    'beginPath/closePath 管理路径绘制',
    'arc(x,y,r,startAngle,endAngle) 绘制圆弧（角度用弧度）',
    'requestAnimationFrame 实现平滑动画循环',
    'save/restore 保存和恢复画布状态'
  ],
  code: {
    html: '<canvas id="cvs" width="500" height="300"></canvas>\n<div class="controls">\n  <button id="drawBtn">绘制随机图形</button>\n  <button id="clearBtn">清除画布</button>\n</div>',
    css: 'canvas { display: block; margin: 20px auto; border: 2px solid #4F46E5; border-radius: 8px; background: #fafafa; }\n.controls { text-align: center; }\nbutton { padding: 8px 20px; margin: 0 8px; border: none; border-radius: 6px; background: #4F46E5; color: #fff; cursor: pointer; }\nbutton:hover { background: #4338CA; }',
    js: 'var cv = document.getElementById("cvs");\nvar ctx = cv.getContext("2d");\n\n// 初始绘制\nctx.fillStyle = "#4F46E5";\nctx.fillRect(20, 20, 100, 80);\nctx.fillStyle = "#F97316";\nctx.beginPath();\nctx.arc(250, 60, 45, 0, Math.PI * 2);\nctx.fill();\nctx.fillStyle = "#22C55E";\nctx.beginPath();\nctx.moveTo(380, 100);\nctx.lineTo(430, 20);\nctx.lineTo(480, 100);\nctx.fill();\n\n// 绘制随机图形\ndocument.getElementById("drawBtn").onclick = function() {\n  var r = Math.floor(Math.random() * 200);\n  var g = Math.floor(Math.random() * 200);\n  var b = Math.floor(Math.random() * 200);\n  ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";\n  var x = Math.random() * 400;\n  var y = Math.random() * 200;\n  var size = Math.random() * 60 + 20;\n  ctx.beginPath();\n  ctx.arc(x, y, size / 2, 0, Math.PI * 2);\n  ctx.fill();\n};\n\ndocument.getElementById("clearBtn").onclick = function() {\n  ctx.clearRect(0, 0, 500, 300);\n};'
  }
};

skillContent['html5-svg'] = {
  title: 'SVG 矢量图形',
  description: '使用 XML 格式的矢量图形绘制可缩放图形',
  difficulty: '中级',
  detail: 'SVG（Scalable Vector Graphics）使用 XML 格式描述二维矢量图形。与 Canvas 的像素操作不同，SVG 基于形状描述，放大缩小不失真，适合制作图标、Logo、插图、图表等。基础形状包括 rect（矩形）、circle（圆形）、ellipse（椭圆）、line（直线）、polyline（折线）、polygon（多边形）、path（路径）。path 的 d 属性使用 M（移动到）、L（画线）、C（贝塞尔曲线）、A（圆弧）等命令绘制复杂图形。SVG 支持 CSS 样式、事件处理、动画（<animate> 元素和 CSS animation）。SMIL 动画允许声明式地控制元素的运动、变形和颜色变化。SVG 还支持渐变、滤镜、裁剪和遮罩等高级特性。',
  keyPoints: [
    'SVG 是矢量格式，放大不失真',
    'viewBox 定义坐标系和缩放比例',
    'rect x/y 定位、rx/ry 设置圆角',
    'circle cx/cy 圆心、r 半径',
    'path d 属性用 M/L/C/A 绘制路径',
    'CSS 可控制 SVG 元素的样式',
    '适合图标系统、Logo、插画、数据可视化'
  ],
  code: {
    html: '<h2>SVG 图形演示</h2>\n<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">\n  <!-- 矩形 -->\n  <rect x="20" y="20" width="100" height="80" rx="10" fill="#4F46E5" />\n  <!-- 圆形 -->\n  <circle cx="200" cy="60" r="40" fill="#F97316" />\n  <!-- 路径 -->\n  <path d="M 300 100 L 350 20 L 400 100 Z" fill="#22C55E" />\n  <!-- 文本 -->\n  <text x="60" y="150" font-size="14" fill="#666">矩形</text>\n  <text x="175" y="150" font-size="14" fill="#666">圆形</text>\n  <text x="330" y="150" font-size="14" fill="#666">三角形</text>\n</svg>\n<p>SVG 图形完全由 XML 描述，双击即可查看源代码结构。</p>',
    css: 'body { font-family: system-ui; max-width: 600px; margin: 30px auto; padding: 20px; }\nh2 { color: #4F46E5; }\nsvg { border: 1px solid #ddd; border-radius: 8px; margin: 16px 0; }\np { color: #666; font-size: 14px; }',
    js: ''
  }
};

skillContent['html-webstorage'] = {
  title: 'Web Storage 存储',
  description: '使用 localStorage 和 sessionStorage 在浏览器端存储数据',
  difficulty: '中级',
  detail: 'Web Storage 提供了在浏览器端存储键值对数据的 API，包括 localStorage 和 sessionStorage 两种。localStorage 的数据持久化保存，关闭浏览器后仍然存在，除非手动清除。sessionStorage 的数据仅在当前标签页会话中有效，关闭标签页即清除。两者都提供 setItem(key, value)、getItem(key)、removeItem(key)、clear() 和 key(index) 方法。存储容量约为 5-10MB（因浏览器而异）。注意：只能存储字符串类型，存储对象需用 JSON.stringify/parse 转换。Storage 事件在同一个域名下的其他标签页修改 localStorage 时触发，可用于跨标签页通信。Web Storage 不会自动发送到服务器，比 Cookie 更安全高效。',
  keyPoints: [
    'localStorage 持久保存，无过期时间',
    'sessionStorage 会话级存储，关闭即清除',
    'setItem/getItem/removeItem 核心 API',
    '只能存储字符串，对象需 JSON 序列化',
    '同域名下可存储约 5-10MB 数据',
    'StorageEvent 监听其他标签页的存储变化',
    '不会随 HTTP 请求自动发送到服务器'
  ],
  code: {
    html: '<h2>Web Storage 演示</h2>\n<div class="storage-app">\n  <div class="row">\n    <input type="text" id="input" placeholder="输入要保存的内容">\n    <button id="saveBtn">保存</button>\n    <button id="loadBtn">读取</button>\n    <button id="clearBtn">清除</button>\n  </div>\n  <div class="output" id="output">暂无数据</div>\n  <div class="info">\n    <p>类型：<span id="storageType">localStorage</span></p>\n    <p>已用空间：<span id="storageSize">0</span> / 约 5MB</p>\n  </div>\n</div>',
    css: 'body { font-family: system-ui; max-width: 500px; margin: 30px auto; padding: 20px; }\nh2 { color: #4F46E5; }\n.storage-app { display: flex; flex-direction: column; gap: 16px; }\n.row { display: flex; gap: 8px; }\ninput { flex: 1; padding: 8px; border: 1px solid #ccc; border-radius: 6px; }\nbutton { padding: 8px 16px; border: none; border-radius: 6px; background: #4F46E5; color: #fff; cursor: pointer; }\nbutton:hover { background: #4338CA; }\n.output { padding: 16px; background: #f5f3ff; border-radius: 8px; min-height: 40px; }\n.info { font-size: 13px; color: #666; }',
    js: 'var input = document.getElementById("input");\nvar output = document.getElementById("output");\n\nfunction updateSize() {\n  var total = 0;\n  for(var i = 0; i < localStorage.length; i++) {\n    var key = localStorage.key(i);\n    total += (key + localStorage.getItem(key)).length;\n  }\n  document.getElementById("storageSize").textContent = total;\n}\n\ndocument.getElementById("saveBtn").onclick = function() {\n  if(!input.value) return alert("请输入内容");\n  localStorage.setItem("demo_data", input.value);\n  output.textContent = "已保存: " + input.value;\n  input.value = "";\n  updateSize();\n};\n\ndocument.getElementById("loadBtn").onclick = function() {\n  var data = localStorage.getItem("demo_data");\n  output.textContent = data ? "读取到: " + data : "暂无保存的数据";\n};\n\ndocument.getElementById("clearBtn").onclick = function() {\n  localStorage.removeItem("demo_data");\n  output.textContent = "已清除";\n  updateSize();\n};\n\nupdateSize();'
  }
};

skillContent['html5-websocket'] = {
  title: 'WebSocket 通信',
  description: '实现浏览器与服务器的全双工实时通信',
  difficulty: '较难',
  detail: 'WebSocket 是 HTML5 提供的全双工通信协议，允许浏览器与服务器建立持久连接，实现实时数据传输。与传统的 HTTP 轮询不同，WebSocket 连接建立后，服务器可以主动推送数据到客户端，延迟更低、带宽更省。通过 new WebSocket(url) 创建连接，onopen 回调连接建立成功，onmessage 接收服务器消息（event.data 获取数据），onclose 处理连接关闭，onerror 处理错误。send(data) 方法向服务器发送数据。WebSocket 的 URL 以 ws:// 或 wss://（加密）开头。常用于聊天应用、实时通知、协同编辑、在线游戏、股票行情等场景。需要后端配合（如 Node.js + ws 库）。',
  keyPoints: [
    'new WebSocket(url) 创建全双工连接',
    'onopen 连接建立、onmessage 接收消息',
    'send() 发送数据到服务器',
    'onclose 处理断开、onerror 处理错误',
    'ws:// 非加密、wss:// 加密连接',
    '相比 HTTP 轮询，延迟更低，带宽更省',
    '适合实时聊天、通知、推送、协同编辑'
  ],
  code: {
    html: '<h2>WebSocket 聊天演示</h2>\n<div class="chat">\n  <div class="messages" id="messages">\n    <div class="msg system">提示：模拟 WebSocket 连接</div>\n  </div>\n  <div class="input-area">\n    <input type="text" id="msgInput" placeholder="输入消息">\n    <button id="sendBtn">发送</button>\n  </div>\n</div>',
    css: 'body { font-family: system-ui; max-width: 500px; margin: 30px auto; padding: 20px; }\nh2 { color: #4F46E5; }\n.chat { border: 1px solid #ddd; border-radius: 8px; overflow: hidden; }\n.messages { height: 250px; overflow-y: auto; padding: 12px; background: #fafafa; }\n.msg { padding: 8px 12px; margin: 4px 0; border-radius: 6px; }\n.msg.system { background: #e5e7eb; color: #666; font-size: 13px; text-align: center; }\n.msg.sent { background: #4F46E5; color: #fff; margin-left: 40px; }\n.msg.received { background: #fff; border: 1px solid #ddd; margin-right: 40px; }\n.input-area { display: flex; padding: 12px; gap: 8px; border-top: 1px solid #ddd; }\ninput { flex: 1; padding: 8px; border: 1px solid #ccc; border-radius: 6px; }\nbutton { padding: 8px 16px; background: #4F46E5; color: #fff; border: none; border-radius: 6px; cursor: pointer; }',
    js: 'var messages = document.getElementById("messages");\nvar input = document.getElementById("msgInput");\n\nfunction addMsg(text, type) {\n  var div = document.createElement("div");\n  div.className = "msg " + type;\n  div.textContent = text;\n  messages.appendChild(div);\n  messages.scrollTop = messages.scrollHeight;\n}\n\n// 模拟 WebSocket 连接\naddMsg("正在连接服务器...", "system");\nsetTimeout(function() {\n  addMsg("✅ 已连接到 WebSocket 服务器", "system");\n}, 1000);\n\ndocument.getElementById("sendBtn").onclick = function() {\n  var text = input.value.trim();\n  if (!text) return;\n  addMsg("你: " + text, "sent");\n  input.value = "";\n  // 模拟服务器回复\n  setTimeout(function() {\n    addMsg("服务器: 已收到 \"" + text + "\"", "received");\n  }, 800);\n};\n\ninput.onkeydown = function(e) {\n  if (e.key === "Enter") document.getElementById("sendBtn").click();\n};'
  }
};

skillContent['html5-history'] = {
  title: 'History API',
  description: '操作浏览器历史记录实现单页应用导航',
  difficulty: '较难',
  detail: 'HTML5 的 History API 允许 JavaScript 操作浏览器历史记录栈，实现无刷新的 URL 变化，是单页应用（SPA）路由的基础。核心方法包括 history.pushState(state, title, url) 向历史栈添加新条目，history.replaceState(state, title, url) 替换当前条目，history.back() 和 forward() 前进后退。popstate 事件在用户点击浏览器前进/后退按钮时触发，event.state 可获取之前保存的状态对象。与 hash 路由不同，pushState 可以改变完整 URL 路径而不会触发页面刷新。服务端需要配置所有路径返回同一个 HTML 文件（fallback），否则直接访问子路径会 404。使用时注意 state 对象的大小限制（约 640KB），且不能包含敏感信息。',
  keyPoints: [
    'pushState 添加历史条目不刷新页面',
    'replaceState 替换当前历史条目',
    'popstate 事件监听浏览器的前进/后退',
    '与 hash 路由不同，pushState 改变完整 URL',
    'SPA 路由的基础实现方式',
    '服务端需配置 fallback 处理直接访问',
    'state 对象有大小限制，勿存敏感数据'
  ],
  code: {
    html: '<h2>History API 导航演示</h2>\n<div class="nav">\n  <button id="page1Btn">页面 A</button>\n  <button id="page2Btn">页面 B</button>\n  <button id="page3Btn">页面 C</button>\n  <span id="pageCount">第 1 次</span>\n</div>\n<div class="page" id="currentPage">\n  <h3>这是首页</h3>\n  <p>点击上方按钮切换页面，使用浏览器的前进/后退按钮观察效果。</p>\n</div>\n<div class="info">\n  当前 URL：<span id="urlDisplay">/</span>\n  <p class="tip">提示：点击后观察浏览器地址栏的变化</p>\n</div>',
    css: 'body { font-family: system-ui; max-width: 500px; margin: 30px auto; padding: 20px; }\nh2 { color: #4F46E5; }\n.nav { display: flex; gap: 8px; align-items: center; margin: 16px 0; }\nbutton { padding: 8px 16px; border: none; border-radius: 6px; background: #4F46E5; color: #fff; cursor: pointer; }\nbutton:hover { background: #4338CA; }\n#pageCount { font-size: 13px; color: #666; margin-left: auto; }\n.page { padding: 20px; background: #f5f3ff; border-radius: 8px; min-height: 100px; }\n.info { margin-top: 12px; font-size: 14px; color: #666; }\n#urlDisplay { font-family: monospace; background: #f0f0f0; padding: 2px 6px; border-radius: 4px; }\n.tip { font-size: 12px; color: #999; }',
    js: 'var pageEl = document.getElementById("currentPage");\nvar urlDisplay = document.getElementById("urlDisplay");\nvar countEl = document.getElementById("pageCount");\nvar count = 1;\n\nvar pages = [\n  { title: "首页", content: "<h3>这是首页</h3><p>欢迎使用 History API 演示。</p>", url: "/" },\n  { title: "页面 A", content: "<h3>页面 A</h3><p>这是第一个子页面，展示了 pushState 的用法。</p>", url: "/page-a" },\n  { title: "页面 B", content: "<h3>页面 B</h3><p>第二个页面，浏览器地址已更新。</p>", url: "/page-b" },\n  { title: "页面 C", content: "<h3>页面 C</h3><p>第三个页面，支持前进/后退导航。</p>", url: "/page-c" }\n];\n\nfunction navigate(index) {\n  count++;\n  countEl.textContent = "第 " + count + " 次";\n  pageEl.innerHTML = pages[index].content;\n  history.pushState({page: index}, pages[index].title, pages[index].url);\n  urlDisplay.textContent = pages[index].url;\n}\n\ndocument.getElementById("page1Btn").onclick = function() { navigate(1); };\ndocument.getElementById("page2Btn").onclick = function() { navigate(2); };\ndocument.getElementById("page3Btn").onclick = function() { navigate(3); };\n\nwindow.onpopstate = function(e) {\n  if (e.state && e.state.page !== undefined) {\n    pageEl.innerHTML = pages[e.state.page].content;\n    urlDisplay.textContent = pages[e.state.page].url;\n  } else {\n    pageEl.innerHTML = pages[0].content;\n    urlDisplay.textContent = "/";\n  }\n};\n\n// 更新禁用默认行为\nwindow.addEventListener("DOMContentLoaded", function() {\n  urlDisplay.textContent = location.pathname;\n});'
  }
};

var category = {
  key: 'html',
  label: 'HTML',
  skills: Object.keys(skillContent).map(function(id) { return { id: id, title: skillContent[id].title }; })
};

export { skillContent as htmlSkillContent, category as htmlCategory };
