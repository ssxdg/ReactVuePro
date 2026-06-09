const skillContent = {};

skillContent['react-jsx'] = {
  title: 'JSX 语法',
  description: '掌握 JSX 的语法规则和表达式用法',
  difficulty: '初级',
  detail: 'JSX 是 JavaScript 的语法扩展，看起来像 HTML，但被编译为 React.createElement() 调用。规则：必须有且只有一个根元素，可以使用空标签 <></> (Fragment) 作为根。{} 中嵌入 JavaScript 表达式（变量、函数调用、三元运算符）。JSX 中的属性使用驼峰命名（className 代替 class，htmlFor 代替 for）。style 属性接收对象而非字符串：style={{ color: "red", fontSize: 16 }}。JSX 防 XSS 注入：React DOM 默认转义所有嵌入值。条件渲染：三元运算符 {condition ? <A /> : <B />}、&& 短路 {isShow && <Component />}、|| 默认值。列表渲染使用 array.map() 返回 JSX 数组，每个项需要唯一的 key 属性。事件绑定使用驼峰 on 命名。JSX 是声明式 UI 的核心。',
  keyPoints: [
    'JSX 编译为 React.createElement 调用',
    '{ } 嵌入 JavaScript 表达式',
    'className 代替 class，htmlFor 代替 for',
    'style 接收对象 { color: "red" }',
    '列表渲染使用 map() + key',
    '条件渲染：&& 和三元运算符',
    'React 默认防 XSS（转义输出）'
  ],
  code: {
    html: '<div id="root"></div>',
    css: 'body { font-family: system-ui; margin: 0; padding: 20px; background: #f8fafc; }',
    js: 'ReactDOM.render(\n  React.createElement("div", { style: { maxWidth: 500, margin: "20px auto" } },\n    React.createElement("h2", { style: { color: "#61DAFB" } }, "JSX 语法演示"),\n    React.createElement("div", { className: "card" },\n      React.createElement("p", null, "表达式: ", 1 + 2),\n      React.createElement("p", null, "三元: ", true ? "真" : "假"),\n      React.createElement("ul", null,\n        React.createElement("li", null, "数组项 1"),\n        React.createElement("li", null, "数组项 2"),\n        React.createElement("li", null, "数组项 3")\n      )\n    )\n  ),\n  document.getElementById("root")\n);'
  }
};

skillContent['react-components'] = {
  title: 'React 组件与 Props',
  description: '掌握函数组件、类组件和 Props 传参',
  difficulty: '初级',
  detail: 'React 组件分为函数组件和类组件。函数组件是返回 JSX 的纯函数：function Welcome(props) { return <h1>Hello {props.name}</h1>; }。类组件继承 React.Component，必须有 render 方法：class Welcome extends React.Component { render() { return <h1>Hello {this.props.name}</h1>; } }。Props 是组件的输入参数，遵循单向数据流（父传子）。Props 默认是只读的，组件不能修改自己的 props。children prop 代表组件标签之间的内容。PropTypes 进行运行时类型检查。defaultProps 定义默认值。组件组合优于继承：将组件作为 props 或 children 传递来实现复用。函数组件更简洁，React 16.8+ 推荐优先使用函数组件加 Hooks。组件名必须大写开头以区分 HTML 标签。',
  keyPoints: [
    '函数组件返回 JSX，类组件有 render 方法',
    'Props 单向数据流，只读不可修改',
    'children 表示组件标签内的内容',
    '组件名必须大写开头',
    '组合优于继承（通过 children 传递）',
    '函数组件 + Hooks 是推荐方式',
    'Props 提供默认值：defaultProps'
  ],
  code: {
    html: '<div id="root"></div>',
    css: 'body { font-family: system-ui; padding: 20px; background: #f8fafc; }\n.card { background: #fff; border-radius: 8px; padding: 20px; border: 1px solid #e2e8f0; margin: 10px 0; }\n.card h3 { color: #61DAFB; margin: 0 0 8px 0; }\n.card p { color: #475569; margin: 4px 0; }',
    js: '// 函数组件\nfunction UserCard(props) {\n  return React.createElement("div", { className: "card" },\n    React.createElement("h3", null, props.name),\n    React.createElement("p", null, "年龄: " + props.age),\n    React.createElement("p", null, "职位: " + (props.role || "前端开发"))\n  );\n}\n\n// 使用组件\nReactDOM.render(\n  React.createElement("div", { style: { maxWidth: 400, margin: "0 auto" } },\n    React.createElement("h2", { style: { color: "#61DAFB" } }, "组件与 Props"),\n    React.createElement(UserCard, { name: "张三", age: 25, role: "高级前端" }),\n    React.createElement(UserCard, { name: "李四", age: 22 }),\n    React.createElement("p", { style: { color: "#94a3b8", fontSize: 13, textAlign: "center", marginTop: 16 } },\n      "Props 是只读的，遵循单向数据流")\n  ),\n  document.getElementById("root")\n);'
  }
};

skillContent['react-state'] = {
  title: 'React State 与生命周期',
  description: '掌握 useState 和组件内状态管理',
  difficulty: '中级',
  detail: 'State 是组件的私有数据，可以通过 useState Hook 在函数组件中使用。const [count, setCount] = useState(0)。useState 返回一个数组，第一个是当前状态，第二个是更新函数。setCount(newValue) 更新状态并触发重新渲染。状态更新是异步的（批处理），多次 setCount 会被合并。使用函数式更新：setCount(prev => prev + 1) 避免闭包陷阱。State 提升：多个组件共享状态时，将状态提升到最近的共同父组件。不可变性：更新对象/数组状态时需创建新引用而非直接修改。useState 的初始值只用于首次渲染。复杂状态逻辑可使用 useReducer。在类组件中使用 this.state 和 this.setState。组件的生命周期对应 useEffect Hook：componentDidMount（空依赖）、componentDidUpdate（有依赖）。',
  keyPoints: [
    'useState(initial) 返回 [state, setState]',
    'setState 触发重新渲染',
    '函数式更新 setCount(prev => prev + 1)',
    '状态不可变，对象/数组需复制后更新',
    '状态提升：共享状态放到共同父组件',
    '多条状态更新被自动批处理',
    'useState 初始值仅首次渲染有效'
  ],
  code: {
    html: '<div id="root"></div>',
    css: 'body { font-family: system-ui; padding: 20px; background: #f8fafc; }\n.counter { max-width: 400px; margin: 0 auto; background: #fff; border-radius: 10px; padding: 24px; text-align: center; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }\n.counter h2 { color: #61DAFB; margin: 0 0 16px 0; }\n.counter p { font-size: 24px; margin: 16px 0; }\nbutton { padding: 8px 20px; margin: 0 6px; border: none; border-radius: 6px; background: #61DAFB; color: #fff; cursor: pointer; font-size: 16px; }\nbutton:hover { opacity: 0.9; }\n.history { margin-top: 16px; font-size: 13px; color: #94a3b8; }',
    js: 'function Counter() {\n  var state = React.useState(0);\n  var count = state[0];\n  var setCount = state[1];\n  \n  var historyState = React.useState([]);\n  var history = historyState[0];\n  var setHistory = historyState[1];\n  \n  function increment() {\n    setCount(function(prev) { return prev + 1; });\n    setHistory(function(prev) { return prev.concat(["+1"]); });\n  }\n  \n  function decrement() {\n    setCount(function(prev) { return prev - 1; });\n    setHistory(function(prev) { return prev.concat(["-1"]); });\n  }\n  \n  function reset() {\n    setCount(0);\n    setHistory([]);\n  }\n  \n  return React.createElement("div", { className: "counter" },\n    React.createElement("h2", null, "useState 演示"),\n    React.createElement("p", null, "计数: " + count),\n    React.createElement("div", null,\n      React.createElement("button", { onClick: decrement }, "- 1"),\n      React.createElement("button", { onClick: increment }, "+ 1"),\n      React.createElement("button", { onClick: reset, style: { background: "#94a3b8" } }, "重置")\n    ),\n    React.createElement("div", { className: "history" },\n      history.length > 0\n        ? "操作: " + history.join(" → ") + " = " + count\n        : "点击按钮开始计数"\n    )\n  );\n}\n\nReactDOM.render(React.createElement(Counter), document.getElementById("root"));'
  }
};

skillContent['react-hooks'] = {
  title: 'React Hooks 核心',
  description: '掌握 useEffect、useCallback、useMemo 等核心 Hook',
  difficulty: '较难',
  detail: 'Hooks 让函数组件拥有类组件的能力。核心 Hook 规则：只在最顶层调用 Hook，不在条件或循环中使用；只在 React 函数组件或自定义 Hook 中调用。useEffect(fn, deps) 处理副作用：数据请求、订阅、DOM 操作、定时器。空依赖 [] 表示只执行一次（类似 componentDidMount）。返回清理函数防止内存泄漏（类似 componentWillUnmount）。useCallback(fn, deps) 缓存函数引用，避免子组件不必要渲染。useMemo(() => value, deps) 缓存计算结果，适合复杂计算。useRef(initial) 创建可变引用：.current 获取 DOM 元素，或保存不触发渲染的变量。forwardRef 让父组件访问子组件的 DOM。useImperativeHandle 定制 ref 暴露给父组件的方法。单个组件中可以使用多个 useEffect 分离不同关注点。',
  keyPoints: [
    'Hook 必须无条件在最顶层调用',
    'useEffect 空依赖 [] 只执行一次',
    'useEffect 返回清理函数防内存泄漏',
    'useCallback 缓存函数引用优化渲染',
    'useMemo 缓存计算结果',
    'useRef 获取 DOM 引用或保存可变值',
    '多个 useEffect 分离不同逻辑'
  ],
  code: {
    html: '<div id="root"></div>',
    css: 'body { font-family: system-ui; padding: 20px; background: #f8fafc; }\n.hooks-demo { max-width: 400px; margin: 0 auto; }\n.card { background: #fff; border-radius: 8px; padding: 20px; margin: 12px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }\n.card h3 { color: #61DAFB; margin: 0 0 8px 0; }\n.timer { font-size: 32px; text-align: center; margin: 16px 0; }\nbutton { padding: 6px 16px; border: none; border-radius: 4px; background: #61DAFB; color: #fff; cursor: pointer; margin: 0 4px; }\n.search-input { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 6px; box-sizing: border-box; }',
    js: 'function Timer() {\n  var time = React.useState(0);\n  var seconds = time[0];\n  var setSeconds = time[1];\n  \n  React.useEffect(function() {\n    var timer = setInterval(function() {\n      setSeconds(function(p) { return p + 1; });\n    }, 1000);\n    return function() { clearInterval(timer); };\n  }, []);\n  \n  return React.createElement("div", { className: "card" },\n    React.createElement("h3", null, "⏱️ useEffect 定时器"),\n    React.createElement("div", { className: "timer" }, seconds + "s"),\n    React.createElement("p", { style: { fontSize: 13, color: "#94a3b8", textAlign: "center" } },\n      "组件卸载时自动清理定时器")\n  );\n}\n\nfunction SearchDemo() {\n  var state = React.useState("");\n  var text = state[0];\n  var setText = state[1];\n  \n  var squa = React.useMemo(function() {\n    if (!text) return "";\n    var n = parseInt(text) || 0;\n    return n + " 的平方 = " + (n * n);\n  }, [text]);\n  \n  return React.createElement("div", { className: "card" },\n    React.createElement("h3", null, "🧮 useMemo 计算"),\n    React.createElement("input", {\n      className: "search-input",\n      value: text,\n      onChange: function(e) { setText(e.target.value); },\n      placeholder: "输入数字"}),\n    React.createElement("p", null, squa)\n  );\n}\n\nfunction App() {\n  return React.createElement("div", { className: "hooks-demo" },\n    React.createElement("h2", { style: { color: "#61DAFB" } }, "React Hooks 演示"),\n    React.createElement(Timer),\n    React.createElement(SearchDemo)\n  );\n}\n\nReactDOM.render(React.createElement(App), document.getElementById("root"));'
  }
};

skillContent['react-useeffect'] = {
  title: 'useEffect 完全指南',
  description: '深入理解 useEffect 的执行时机、依赖和清理',
  difficulty: '较难',
  detail: 'useEffect 是 React 中最常用也最容易出错的 Hook。基本形式：useEffect(() => { /* effect */ }, [deps])。执行时机：默认每次渲染后执行（无依赖）；空依赖 [] 只在挂载后执行一次；有依赖在挂载后和依赖变化后执行。依赖数组必须包含所有外部变量（eslint-plugin-react-hooks 的 exhaustive-deps 规则）。常见错误：遗漏依赖导致闭包捕获过期值；不必要的依赖导致频繁执行。清理函数：useEffect 返回的函数在组件卸载时执行，也在每次重新执行 effect 前执行（清除上次的副作用）。常见清理场景：取消订阅（WebSocket）、取消请求（AbortController）、清除定时器。useEffectEvent（React 19）可以将非响应式逻辑从依赖中分离。useLayoutEffect 在浏览器绘制前同步执行，适合 DOM 测量。大多数场景使用 useEffect。',
  keyPoints: [
    '依赖数组为空 [] 仅在挂载后执行一次',
    '依赖数组包含所有外部引用的变量',
    '返回清理函数防止内存泄漏',
    '闭包陷阱：effect 内引用过期的状态',
    'useEffect 在渲染后异步执行（不阻塞渲染）',
    'useLayoutEffect 在渲染前同步执行（测量 DOM）',
    '多个 useEffect 按书写顺序执行'
  ],
  code: {
    html: '<div id="root"></div>',
    css: 'body { font-family: system-ui; padding: 20px; background: #f8fafc; }\n.demo { max-width: 400px; margin: 0 auto; }\n.card { background: #fff; border-radius: 8px; padding: 20px; margin: 12px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }\n.card h3 { color: #61DAFB; margin: 0 0 8px 0; }\n.card p { margin: 8px 0; }\n.log { font-size: 12px; color: #94a3b8; max-height: 150px; overflow-y: auto; }\ninput { padding: 8px; border: 1px solid #ccc; border-radius: 6px; width: 100%; box-sizing: border-box; }\nbutton { padding: 6px 16px; border: none; border-radius: 4px; background: #61DAFB; color: #fff; cursor: pointer; }',
    js: 'function EffectDemo() {\n  var state = React.useState("");\n  var input = state[0];\n  var setInput = state[1];\n  \n  var logState = React.useState([]);\n  var logs = logState[0];\n  var setLogs = logState[1];\n  \n  // 组件挂载时执行一次\n  React.useEffect(function() {\n    setLogs(function(prev) { return prev.concat(["✅ 组件已挂载"]); });\n    return function() {\n      setLogs(function(prev) { return prev.concat(["❌ 组件将卸载"]); });\n    };\n  }, []);\n  \n  // input 变化时执行\n  React.useEffect(function() {\n    if (input) {\n      setLogs(function(prev) { return prev.concat(["✏️ input 变化: " + input]); });\n    }\n  }, [input]);\n  \n  return React.createElement("div", { className: "demo" },\n    React.createElement("h2", { style: { color: "#61DAFB" } }, "useEffect 指南"),\n    React.createElement("div", { className: "card" },\n      React.createElement("h3", null, "依赖控制"),\n      React.createElement("input", {\n        value: input,\n        onChange: function(e) { setInput(e.target.value); },\n        placeholder: "输入内容触发 effect" }),\n      React.createElement("p", null, "输入的字符数: " + input.length)\n    ),\n    React.createElement("div", { className: "card" },\n      React.createElement("h3", null, "Effect 日志"),\n      React.createElement("div", { className: "log" },\n        logs.map(function(log, i) {\n          return React.createElement("div", { key: i }, (i+1) + ". " + log);\n        })\n      )\n    )\n  );\n}\n\nReactDOM.render(React.createElement(EffectDemo), document.getElementById("root"));'
  }
};

skillContent['react-context'] = {
  title: 'React Context API',
  description: '使用 Context 跨组件层级传递数据',
  difficulty: '较难',
  detail: 'Context 提供一种在组件树中共享数据的方式，无需逐层传递 props。createContext(defaultValue) 创建上下文。Provider 组件包裹子树，接受 value 属性。useContext(Context) 在消费组件中获取上下文值。Context 适合主题、用户认证、语言偏好等全局数据。常见模式：Context + useReducer 实现轻量级状态管理替代 Redux。多个 Context 分别管理不同领域的数据（主题、用户、设置），避免不必要的重渲染。性能优化：将 Provider value 用 useMemo 包裹防止每渲染创建新对象导致所有消费组件重渲染。Context 的缺点：不推荐用于高频更新的数据（如表单输入），此时应使用局部状态。Context 数据流特点：任意深度的组件都可以直接访问，但不利于数据流追踪。React DevTools 可以查看 Provider/Consumer 嵌套。',
  keyPoints: [
    'createContext 创建上下文，Provider 提供值',
    'useContext(Context) 消费上下文',
    'Provider value 用 useMemo 防止多余渲染',
    'Context + useReducer 做轻量状态管理',
    '适合主题、用户、国际化等全局数据',
    '多个 Context 分离关注点',
    '不适用于高频更新的状态'
  ],
  code: {
    html: '<div id="root"></div>',
    css: 'body { font-family: system-ui; padding: 20px; background: #f8fafc; }\n.demo { max-width: 400px; margin: 0 auto; }\n.card { background: #fff; border-radius: 8px; padding: 20px; margin: 12px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1); text-align: center; }\n.card h3 { color: #61DAFB; margin: 0 0 8px 0; }\n.toggle-btn { padding: 8px 24px; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; color: #fff; }',
    js: '// 创建 Context\nvar ThemeContext = React.createContext({ isDark: false, toggle: function() {} });\n\nfunction ThemedCard() {\n  var theme = React.useContext(ThemeContext);\n  var bg = theme.isDark ? "#1e293b" : "#fff";\n  var textColor = theme.isDark ? "#e2e8f0" : "#1e293b";\n  \n  return React.createElement("div", { className: "card", style: { background: bg, color: textColor } },\n    React.createElement("h3", null, "当前主题: " + (theme.isDark ? "🌙 深色" : "☀️ 浅色")),\n    React.createElement("p", null, "使用 useContext 获取主题值"),\n    React.createElement("button", {\n      className: "toggle-btn",\n      style: { background: theme.isDark ? "#61DAFB" : "#334155" },\n      onClick: theme.toggle\n    }, "切换主题")\n  );\n}\n\nfunction App() {\n  var state = React.useState(false);\n  var isDark = state[0];\n  var setIsDark = state[1];\n  \n  var themeValue = React.useMemo(function() {\n    return {\n      isDark: isDark,\n      toggle: function() { setIsDark(function(p) { return !p; }); }\n    };\n  }, [isDark]);\n  \n  return React.createElement(ThemeContext.Provider, { value: themeValue },\n    React.createElement("div", { className: "demo" },\n      React.createElement("h2", { style: { color: "#61DAFB" } }, "Context API 演示"),\n      React.createElement(ThemedCard),\n      React.createElement(ThemedCard),\n      React.createElement("p", { style: { fontSize: 13, color: "#94a3b8", textAlign: "center" } },\n        "所有组件共享同一个 Context 值")\n    )\n  );\n}\n\nReactDOM.render(React.createElement(App), document.getElementById("root"));'
  }
};

var category = {
  key: 'react',
  label: 'React',
  skills: Object.keys(skillContent).map(function(id) { return { id: id, title: skillContent[id].title }; })
};

export { skillContent as reactSkillContent, category as reactCategory };
