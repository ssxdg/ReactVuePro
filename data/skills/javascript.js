const skillContent = {};

skillContent['js-basics'] = {
  title: 'JS 变量类型与数据类型',
  description: '掌握 var/let/const 和 7 种数据类型',
  difficulty: '初级',
  detail: 'JavaScript 有 7 种基本数据类型：number（数字）、string（字符串）、boolean（布尔）、null（空）、undefined（未定义）、symbol（符号）、bigint（大整数），以及引用类型 object。使用 typeof 操作符检测类型。变量声明有三种方式：var 有函数作用域和变量提升，let 和 const 有块级作用域无提升。const 声明常量，引用类型值不可变但属性可变。== 会进行类型转换（如 1 == \"1\" 为 true），=== 严格比较值和类型。类型转换分为显式（String()、Number()、Boolean()）和隐式（if、==、+ 运算符）。NaN 是唯一不等于自身的值，用 Number.isNaN() 检测。null 是"空对象引用"，undefined 是"未定义"，两者在 if 中都转为 false。',
  keyPoints: [
    'typeof 检测基础类型，array/null 返回 object',
    'let/const 块级作用域，var 函数作用域',
    '=== 严格相等（值和类型），== 宽松相等',
    'const 常量引用不可变，但对象属性可变',
    'Number.isNaN() 判断 NaN',
    'null 和 undefined 的区别',
    '模板字符串 \ 简化字符串拼接'
  ],
  code: {
    html: '<h2>JS 数据类型演示</h2>\n<div class="demo-panel">\n  <div class="output" id="output"></div>\n  <div class="controls">\n    <button data-check="string">String</button>\n    <button data-check="number">Number</button>\n    <button data-check="boolean">Boolean</button>\n    <button data-check="null">Null</button>\n    <button data-check="array">Array</button>\n    <button data-check="object">Object</button>\n  </div>\n</div>',
    css: 'body { font-family: system-ui; max-width: 500px; margin: 20px auto; padding: 20px; }\nh2 { color: #4F46E5; }\n.demo-panel { background: #f5f3ff; border-radius: 8px; padding: 20px; }\n.output { background: #fff; border: 1px solid #ddd; border-radius: 6px; padding: 16px; min-height: 80px; margin-bottom: 12px; font-family: monospace; font-size: 14px; }\n.controls { display: flex; gap: 8px; flex-wrap: wrap; }\nbutton { padding: 8px 16px; border: none; border-radius: 6px; background: #4F46E5; color: #fff; cursor: pointer; }\nbutton:hover { background: #4338CA; }',
    js: 'var output = document.getElementById("output");\nvar checks = {\n  string: typeof "hello",\n  number: typeof 42,\n  boolean: typeof true,\n  null: typeof null,\n  array: Array.isArray([1,2,3]),\n  object: typeof {a:1}\n};\nvar details = {\n  string: "typeof \\"hello\\" = " + checks.string + "\\n\\"hello\\" === \\"hello\\" → true\\n\\"hello\\" == \\"hello\\" → true",\n  number: "typeof 42 = " + checks.number + "\\n42 === \\"42\\" → false\\n42 == \\"42\\" → true（类型转换）",\n  boolean: "typeof true = " + checks.boolean + "\\nBoolean(0) = false\\nBoolean(\\"\\") = false\\nBoolean(\\"hi\\") = true",\n  null: "typeof null = " + checks.null + "（历史遗留bug）\\nnull == undefined → true\\nnull === undefined → false",\n  array: "Array.isArray([1,2,3]) = " + checks.array + "\\ntypeof [1,2,3] = object\\n[1,2,3] instanceof Array → true",\n  object: "typeof {a:1} = " + checks.object + "\\n{}.constructor === Object → true"\n};\nvar btns = document.querySelectorAll("button");\nfor (var i = 0; i < btns.length; i++) {\n  (function(btn) {\n    btn.onclick = function() {\n      output.textContent = details[this.dataset.check] || "选择检查项";\n    };\n  })(btns[i]);\n}'
  }
};

skillContent['js-functions'] = {
  title: '函数与作用域',
  description: '掌握函数声明、作用域链和闭包',
  difficulty: '中级',
  detail: 'JavaScript 函数是一等公民，可赋值给变量、作为参数传递、作为返回值。定义方式：函数声明（function foo(){} 提升整个声明）、函数表达式（const foo = function(){}）、箭头函数（const foo = () => {} 不绑定 this）。作用域（Scope）决定变量的可访问范围：全局作用域、函数作用域（var）、块级作用域（let/const）。作用域链（Scope Chain）是从当前作用域向上查找变量的机制。闭包（Closure）是函数与其词法环境的组合，内部函数可以访问外部函数的变量，即使外部函数已执行完毕。闭包常用于数据私有化、柯里化、防抖节流、模块模式。箭头函数没有自己的 arguments 对象和 this 绑定，其 this 继承自外层作用域。高阶函数是接受函数作为参数或返回函数的函数（如 map、filter、reduce）。',
  keyPoints: [
    '函数声明提升（hoisting），函数表达式不提升',
    '箭头函数不绑定 this 和 arguments',
    '块级作用域（let/const）vs 函数作用域（var）',
    '闭包：内部函数持有外部函数变量的引用',
    '高阶函数：map/filter/reduce 回调',
    '立即执行函数 IIFE 创建独立作用域',
    '回调函数是 JS 异步的基础模式'
  ],
  code: {
    html: '<h2>函数与作用域</h2>\n<div class="demo-panel">\n  <div class="output" id="output"></div>\n  <div class="controls">\n    <button id="closureBtn">闭包演示</button>\n    <button id="hofBtn">高阶函数</button>\n    <button id="arrowBtn">箭头函数</button>\n  </div>\n</div>',
    css: 'body { font-family: system-ui; max-width: 500px; margin: 20px auto; padding: 20px; }\nh2 { color: #4F46E5; }\n.demo-panel { background: #f5f3ff; border-radius: 8px; padding: 20px; }\n.output { background: #fff; border: 1px solid #ddd; border-radius: 6px; padding: 16px; min-height: 80px; margin-bottom: 12px; font-family: monospace; font-size: 14px; line-height: 1.6; }\n.controls { display: flex; gap: 8px; flex-wrap: wrap; }\nbutton { padding: 8px 16px; border: none; border-radius: 6px; background: #4F46E5; color: #fff; cursor: pointer; }\nbutton:hover { background: #4338CA; }',
    js: 'var output = document.getElementById("output");\n\n// 闭包演示\ndocument.getElementById("closureBtn").onclick = function() {\n  function createCounter(start) {\n    var count = start;\n    return function() {\n      return ++count;\n    };\n  }\n  var counter = createCounter(10);\n  output.textContent = "闭包计数器：\\n第1次: " + counter() + "\\n第2次: " + counter() + "\\n第3次: " + counter() + "\\n变量 count 被闭包持有，不会被销毁";\n};\n\n// 高阶函数演示\ndocument.getElementById("hofBtn").onclick = function() {\n  var nums = [1, 2, 3, 4, 5, 6];\n  var doubled = nums.map(function(n) { return n * 2; });\n  var evens = nums.filter(function(n) { return n % 2 === 0; });\n  var sum = nums.reduce(function(a, b) { return a + b; }, 0);\n  output.textContent = "原始数组: [" + nums + "]\\nmap(x2): [" + doubled + "]\\nfilter(偶数): [" + evens + "]\\nreduce(求和): " + sum;\n};\n\n// 箭头函数\ndocument.getElementById("arrowBtn").onclick = function() {\n  var nums = [5, 2, 8, 1, 9];\n  nums.sort(function(a, b) { return a - b; });\n  var doubled = nums.map(function(n) { return n * n; });\n  output.textContent = "箭头函数简洁语法：\\n排序: [" + nums + "]\\n平方: [" + doubled + "]\\n\\n对比传统函数:\\nfunction(a,b){return a-b;}\\n=> (a,b) => a - b";\n};'
  }
};

skillContent['js-promise'] = {
  title: 'Promise 与异步编程',
  description: '掌握 Promise 核心机制和 async/await 语法',
  difficulty: '较难',
  detail: 'Promise 是 JS 处理异步操作的标准模式，表示一个可能现在、将来或永远不会完成的值。三种状态：pending（等待中）、fulfilled（成功）、rejected（失败）。状态一旦变更不可逆。new Promise((resolve, reject) => { ... }) 创建 Promise。.then(onFulfilled, onRejected) 处理成功/失败，.catch(onRejected) 处理失败，.finally() 无论成功失败都执行。Promise.all([p1, p2, p3]) 等待所有 Promise 完成，任一失败则快速失败。Promise.allSettled() 等待所有完成（无论成功失败）。Promise.race() 返回最先完成的 Promise。Promise.any() 返回第一个成功的。async/await 是 Promise 的语法糖：async 函数返回 Promise，await 暂停执行直到 Promise 解决。异常用 try/catch 捕获。注意 await 只能在 async 函数中使用。',
  keyPoints: [
    'Promise 三种状态：pending/fulfilled/rejected',
    'new Promise((resolve, reject) => {})',
    '.then 链式调用处理连续异步操作',
    'async 函数返回 Promise，await 等待结果',
    'try/catch 捕获 async/await 的异常',
    'Promise.all 并发执行全部任务',
    'Promise.race 返回最先完成的 Promise'
  ],
  code: {
    html: '<h2>Promise 异步演示</h2>\n<div class="demo-panel">\n  <div class="output" id="output">点击按钮开始</div>\n  <div class="controls">\n    <button id="simpleBtn">简单 Promise</button>\n    <button id="chainBtn">链式调用</button>\n    <button id="asyncBtn">Async/Await</button>\n    <button id="allBtn">Promise.all</button>\n  </div>\n</div>',
    css: 'body { font-family: system-ui; max-width: 500px; margin: 20px auto; padding: 20px; }\nh2 { color: #4F46E5; }\n.demo-panel { background: #f5f3ff; border-radius: 8px; padding: 20px; }\n.output { background: #fff; border: 1px solid #ddd; border-radius: 6px; padding: 16px; min-height: 80px; margin-bottom: 12px; font-family: monospace; font-size: 14px; line-height: 1.6; white-space: pre-wrap; }\n.controls { display: flex; gap: 8px; flex-wrap: wrap; }\nbutton { padding: 8px 16px; border: none; border-radius: 6px; background: #4F46E5; color: #fff; cursor: pointer; }\nbutton:hover { background: #4338CA; }',
    js: 'var output = document.getElementById("output");\n\nfunction delay(ms, value) {\n  return new Promise(function(resolve) {\n    setTimeout(function() { resolve(value); }, ms);\n  });\n}\n\ndocument.getElementById("simpleBtn").onclick = function() {\n  output.textContent = "⏳ 等待 1 秒...";\n  delay(1000, "✅ 1 秒后 Promise 完成！").then(function(msg) {\n    output.textContent = msg + "\\n\\n说明：new Promise 接收 executor 函数\\nexecutor(resolve, reject) 调用 resolve() 表示成功";\n  });\n};\n\ndocument.getElementById("chainBtn").onclick = function() {\n  output.textContent = "开始链式调用...";\n  delay(500, "第一步").then(function(r) {\n    output.textContent = "⏳ " + r + " → 等待 500ms";\n    return delay(500, "第二步");\n  }).then(function(r) {\n    output.textContent = "⏳ " + r + " → 等待 500ms";\n    return delay(500, "第三步");\n  }).then(function(r) {\n    output.textContent = "✅ " + r + "\\n\\n.then() 返回新 Promise，实现链式调用";\n  });\n};\n\ndocument.getElementById("asyncBtn").onclick = function() {\n  async function demo() {\n    output.textContent = "⏳ async/await 开始...";\n    var a = await delay(600, "A完成");\n    var b = await delay(600, "B完成");\n    var c = await delay(600, "C完成");\n    output.textContent = "✅ " + a + " → " + b + " → " + c + "\\n\\nawait 让异步代码像同步一样顺序执行";\n  }\n  demo();\n};\n\ndocument.getElementById("allBtn").onclick = function() {\n  output.textContent = "⏳ Promise.all 并发执行...";\n  var p1 = delay(800, "任务1(0.8s)");\n  var p2 = delay(1200, "任务2(1.2s)");\n  var p3 = delay(500, "任务3(0.5s)");\n  Promise.all([p1, p2, p3]).then(function(results) {\n    output.textContent = "✅ 全部完成！\\n" + results.join("\\n") + "\\n\\n总耗时: 约 1.2 秒（并发）";\n  });\n};'
  }
};

skillContent['js-dom'] = {
  title: 'DOM 操作',
  description: '掌握文档对象模型的查询、修改和事件处理',
  difficulty: '中级',
  detail: 'DOM（文档对象模型）是 JS 操作 HTML 的接口。查询元素：document.getElementById()、querySelector()（返回第一个匹配）、querySelectorAll()（返回 NodeList）、getElementsByClassName/TagName（返回动态 HTMLCollection）。修改内容：textContent（纯文本）、innerHTML（含 HTML 标签）、innerText（考虑 CSS 可见性）。创建和插入：createElement()、createTextNode()、appendChild()、insertBefore()、insertAdjacentHTML()。删除：removeChild()、remove()。属性操作：getAttribute()、setAttribute()、removeAttribute()、classList.add/remove/toggle/contains。样式修改通过 style 属性（驼峰命名）或 classList 切换类名。事件处理：addEventListener(type, handler) 绑定事件，removeEventListener(type, handler) 移除。事件对象 event 包含 type、target、preventDefault()、stopPropagation() 等。事件委托利用事件冒泡机制，在父元素监听子元素事件。',
  keyPoints: [
    'querySelector 功能最全的查询方法',
    'innerHTML 可解析 HTML，注意 XSS 风险',
    'classList.toggle 方便切换类名',
    'createElement + appendChild 动态创建元素',
    'addEventListener 推荐的事件绑定方式',
    'event.preventDefault() 阻止默认行为',
    '事件委托：在父元素监听，event.target 判断子元素'
  ],
  code: {
    html: '<h2>DOM 操作演示</h2>\n<div class="demo-panel">\n  <div class="todo-app">\n    <div class="input-row">\n      <input type="text" id="todoInput" placeholder="输入待办事项">\n      <button id="addBtn">添加</button>\n    </div>\n    <ul id="todoList">\n      <li>学习 DOM 操作 <button class="del">×</button></li>\n      <li class="done">理解事件委托 <button class="del">×</button></li>\n    </ul>\n    <div class="stats">\n      总计: <span id="totalCount">2</span>\n      已完成: <span id="doneCount">1</span>\n      <button id="clearDone">清除已完成</button>\n    </div>\n  </div>\n</div>',
    css: 'body { font-family: system-ui; max-width: 500px; margin: 20px auto; padding: 20px; }\nh2 { color: #4F46E5; }\n.demo-panel { background: #f5f3ff; border-radius: 8px; padding: 20px; }\n.input-row { display: flex; gap: 8px; margin-bottom: 12px; }\ninput { flex: 1; padding: 8px; border: 1px solid #ccc; border-radius: 6px; }\nbutton { padding: 8px 16px; border: none; border-radius: 6px; background: #4F46E5; color: #fff; cursor: pointer; }\n.del { background: #EF4444; padding: 4px 8px; float: right; }\n#todoList { list-style: none; padding: 0; }\n#todoList li { padding: 8px 12px; margin: 4px 0; background: #fff; border-radius: 6px; border: 1px solid #eee; cursor: pointer; }\n#todoList li.done { text-decoration: line-through; opacity: 0.6; }\n.stats { display: flex; gap: 12px; align-items: center; margin-top: 12px; font-size: 13px; color: #666; }',
    js: 'var input = document.getElementById("todoInput");\nvar list = document.getElementById("todoList");\n\n// 事件委托：监听 ul，处理删除和切换\ndocument.getElementById("todoList").onclick = function(e) {\n  if (e.target.classList.contains("del")) {\n    e.target.parentElement.remove();\n  } else if (e.target.tagName === "LI") {\n    e.target.classList.toggle("done");\n  }\n  updateStats();\n};\n\ndocument.getElementById("addBtn").onclick = function() {\n  var text = input.value.trim();\n  if (!text) return;\n  var li = document.createElement("li");\n  li.textContent = text;\n  var del = document.createElement("button");\n  del.className = "del";\n  del.textContent = "×";\n  li.appendChild(del);\n  list.appendChild(li);\n  input.value = "";\n  updateStats();\n};\n\ninput.onkeydown = function(e) {\n  if (e.key === "Enter") document.getElementById("addBtn").click();\n};\n\ndocument.getElementById("clearDone").onclick = function() {\n  var items = list.querySelectorAll("li.done");\n  for (var i = 0; i < items.length; i++) items[i].remove();\n  updateStats();\n};\n\nfunction updateStats() {\n  var all = list.querySelectorAll("li");\n  var done = list.querySelectorAll("li.done");\n  document.getElementById("totalCount").textContent = all.length;\n  document.getElementById("doneCount").textContent = done.length;\n}\n\nupdateStats();'
  }
};

skillContent['js-closure'] = {
  title: '闭包与高阶函数',
  description: '深入理解闭包机制和函数式编程模式',
  difficulty: '较难',
  detail: '闭包是 JavaScript 最强大的特性之一。当内部函数引用了外部函数的变量并可以在外部函数之外被调用时，就形成了闭包。闭包让函数可以"记住"创建时的环境。经典应用：数据私有化（计数器、单例模式）、柯里化（Currying：将多参数函数转为单参数函数链）、防抖（Debounce）和节流（Throttle）。防抖将多次触发合并为一次执行（搜索建议），节流控制执行频率（滚动事件）。高阶函数是接受函数参数或返回函数的函数。Array.prototype 中的 map、filter、reduce 是典型的高阶函数。函数式编程思想：纯函数（相同输入相同输出、无副作用）、不可变性（不修改原数据）、声明式（关注做什么而非怎么做）。掌握闭包和函数式编程是进阶中高级前端的关键。',
  keyPoints: [
    '闭包 = 函数 + 词法环境引用',
    '防抖 debounce：延迟执行，合并触发',
    '节流 throttle：固定频率执行',
    '柯里化 currying：多参转单参链式调用',
    '纯函数：无副作用，相同输入相同输出',
    'map/filter/reduce 代替 for 循环',
    '函数式编程让代码更可预测和可测试'
  ],
  code: {
    html: '<h2>闭包与函数式</h2>\n<div class="demo-panel">\n  <div class="output" id="output"></div>\n  <div class="controls">\n    <button id="counterBtn">计数器（闭包）</button>\n    <button id="curryBtn">柯里化</button>\n    <button id="pureBtn">纯函数 vs 非纯</button>\n  </div>\n</div>',
    css: 'body { font-family: system-ui; max-width: 500px; margin: 20px auto; padding: 20px; }\nh2 { color: #4F46E5; }\n.demo-panel { background: #f5f3ff; border-radius: 8px; padding: 20px; }\n.output { background: #fff; border: 1px solid #ddd; border-radius: 6px; padding: 16px; min-height: 80px; margin-bottom: 12px; font-family: monospace; font-size: 14px; line-height: 1.8; }\n.controls { display: flex; gap: 8px; flex-wrap: wrap; }\nbutton { padding: 8px 16px; border: none; border-radius: 6px; background: #4F46E5; color: #fff; cursor: pointer; }\nbutton:hover { background: #4338CA; }',
    js: 'var output = document.getElementById("output");\n\n// 闭包：计数器\nvar countBtn = document.getElementById("counterBtn");\nvar clickCount = 0;\ncountBtn.onclick = function() {\n  clickCount++;\n  var msg = "您点击了 " + clickCount + " 次";\n  output.textContent = msg + "\\n\\n原理：函数记住创建时的词法环境\\nclickCount 变量被内部函数持有引用";\n};\n\n// 柯里化\ndocument.getElementById("curryBtn").onclick = function() {\n  function curryAdd(a) {\n    return function(b) {\n      return function(c) {\n        return a + b + c;\n      };\n    };\n  }\n  var result = curryAdd(10)(20)(30);\n  output.textContent = "柯里化加法：\\ncurryAdd(10)(20)(30) = " + result + "\\n\\n每次接收一个参数，返回新函数\\n直到所有参数齐全才执行";\n};\n\n// 纯函数\ndocument.getElementById("pureBtn").onclick = function() {\n  var data = [1, 2, 3, 4, 5];\n  // 纯函数\n  var doubled = data.map(function(n) { return n * 2; });\n  // 非纯函数（修改原数组）\n  var pushed = data.slice();\n  pushed.push(6);\n  output.textContent = "原数组: [" + data + "]\\nmap(纯函数): [" + doubled + "] 原数组不变\\npush(非纯): [" + pushed + "] 需 slice 复制\\n\\n纯函数优点：可预测、可缓存、易测试";\n};'
  }
};

skillContent['js-eventloop'] = {
  title: '事件循环 Event Loop',
  description: '理解 JS 的事件循环机制和异步执行顺序',
  difficulty: '较难',
  detail: 'JavaScript 是单线程语言，通过事件循环（Event Loop）实现非阻塞异步。执行顺序：1. 执行同步代码（调用栈 Call Stack）。2. 遇到异步任务（setTimeout、fetch、Promise）交给 Web API 处理。3. 异步任务完成后回调进入任务队列。宏任务（MacroTask）：setTimeout、setInterval、setImmediate、I/O、UI 渲染。微任务（MicroTask）：Promise.then/catch/finally、MutationObserver、queueMicrotask。微任务优先级高于宏任务，每次事件循环会清空所有微任务后再执行下一个宏任务。典型面试题：console.log(1); setTimeout(() => console.log(2), 0); Promise.resolve().then(() => console.log(3)); console.log(4); 输出顺序为 1,4,3,2。理解事件循环对写出可预测的异步代码至关重要。',
  keyPoints: [
    'JS 单线程通过事件循环实现异步',
    '调用栈执行同步代码',
    '微任务（Promise.then）优先于宏任务（setTimeout）',
    'async/await 在 await 处暂停，后续代码为微任务',
    'requestAnimationFrame 在渲染前执行',
    'setTimeout(fn, 0) 至少延迟 4ms',
    '事件循环每轮：宏任务 → 清空微任务 → 渲染'
  ],
  code: {
    html: '<h2>Event Loop 执行顺序</h2>\n<div class="demo-panel">\n  <div class="output" id="output">点击按钮查看执行顺序日志</div>\n  <button id="runBtn">执行测试代码</button>\n  <p class="hint">观察控制台和输出区的日志顺序</p>\n</div>',
    css: 'body { font-family: system-ui; max-width: 500px; margin: 20px auto; padding: 20px; }\nh2 { color: #4F46E5; }\n.demo-panel { background: #f5f3ff; border-radius: 8px; padding: 20px; }\n.output { background: #fff; border: 1px solid #ddd; border-radius: 6px; padding: 16px; min-height: 100px; margin-bottom: 12px; font-family: monospace; font-size: 13px; line-height: 1.6; }\nbutton { padding: 8px 20px; border: none; border-radius: 6px; background: #4F46E5; color: #fff; cursor: pointer; }\n.hint { font-size: 12px; color: #999; margin-top: 8px; }',
    js: 'var output = document.getElementById("output");\n\ndocument.getElementById("runBtn").onclick = function() {\n  output.textContent = "执行顺序日志：\\n\\n";\n  \n  function log(msg) {\n    output.textContent += msg + "\\n";\n  }\n  \n  log("1️⃣ console.log(1) - 同步");\n  console.log(1);\n  \n  setTimeout(function() {\n    log("4️⃣ setTimeout - 宏任务");\n    console.log(2);\n  }, 0);\n  \n  Promise.resolve().then(function() {\n    log("3️⃣ Promise.then - 微任务");\n    console.log(3);\n  });\n  \n  log("2️⃣ console.log(4) - 同步");\n  console.log(4);\n  \n  log("\\n结论：同步 → 微任务 → 宏任务");\n};'
  }
};

var category = {
  key: 'javascript',
  label: 'JavaScript',
  skills: Object.keys(skillContent).map(function(id) { return { id: id, title: skillContent[id].title }; })
};

export { skillContent as jsSkillContent, category as jsCategory };
