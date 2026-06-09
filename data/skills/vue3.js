const skillContent = {};

skillContent['vue3-composition'] = {
  title: 'Vue3 Composition API',
  description: '掌握 setup 函数和组合式 API 的用法',
  difficulty: '较难',
  detail: 'Composition API 是 Vue3 的核心特性，解决了 Options API 在大型组件中逻辑分散的问题。setup 函数在组件创建前执行，是 Composition API 的入口。setup 返回的对象暴露给模板。ref 创建基本类型的响应式数据（返回带有 .value 的对象），reactive 创建对象类型的响应式数据。computed 创建计算属性。watch 和 watchEffect 侦听数据变化。onMounted、onUnmounted 等生命周期钩子替代 Options API 的 mounted、destroyed。provide/inject 在 setup 中使用。Composition API 的核心优势：逻辑复用（自定义 Hook 替代 mixin）、更好的类型推导、代码组织更灵活。将相关逻辑放在一起，而不是分散在 data/methods/computed 中。所有组合式函数（Composables）命名以 use 开头。',
  keyPoints: [
    'setup 是 Composition API 的入口',
    'ref 包装基本类型，reactive 包装对象',
    'computed + watchEffect 替代 Options API',
    'onMounted/onUnmounted 生命周期',
    '自定义组合式函数 useXxx() 复用逻辑',
    '比 Options API 更好的类型推导',
    '逻辑按功能组织而非选项类型'
  ],
  code: {
    html: '<div id="app">\n  <h2>Vue3 Composition API</h2>\n  <div class="demo">\n    <p>计数: {{ count }}</p>\n    <p>翻倍: {{ doubled }}</p>\n    <button @click="increment">+1</button>\n    <button @click="decrement">-1</button>\n  </div>\n  <div class="todo">\n    <h3>响应式数据：</h3>\n    <div v-for="(item, i) in list" :key="i" class="item">{{ item }}</div>\n  </div>\n</div>',
    css: 'body { font-family: system-ui; max-width: 500px; margin: 20px auto; padding: 20px; }\nh2 { color: #42B883; }\nh3 { font-size: 14px; color: #666; }\n.demo { background: #f0fdf4; border-radius: 8px; padding: 20px; text-align: center; }\n.demo p { font-size: 18px; margin: 8px 0; }\nbutton { padding: 8px 20px; margin: 0 8px; border: none; border-radius: 6px; background: #42B883; color: #fff; cursor: pointer; }\n.todo { margin-top: 16px; }\n.item { padding: 8px; margin: 4px 0; background: #fff; border-radius: 4px; border: 1px solid #eee; }',
    js: 'var app = Vue.createApp({\n  setup: function() {\n    var count = Vue.ref(0);\n    var list = Vue.reactive(["Vue3", "Composition API", "ref & reactive"]);\n    \n    var doubled = Vue.computed(function() {\n      return count.value * 2;\n    });\n    \n    Vue.watchEffect(function() {\n      console.log("count 变化:", count.value);\n    });\n    \n    function increment() { count.value++; }\n    function decrement() { count.value--; }\n    \n    Vue.onMounted(function() {\n      console.log("组件已挂载");\n    });\n    \n    return {\n      count: count,\n      doubled: doubled,\n      list: list,\n      increment: increment,\n      decrement: decrement\n    };\n  }\n});\n\napp.mount("#app");'
  }
};

skillContent['vue3-ref-reactive'] = {
  title: 'ref 与 reactive 响应式核心',
  description: '深入理解 ref 和 reactive 的响应式原理',
  difficulty: '较难',
  detail: 'Vue3 使用 Proxy 替代 Vue2 的 Object.defineProperty 实现响应式。ref 用于包装基本类型（string、number、boolean），返回一个包含 .value 属性的 Ref 对象。reactive 直接接收对象，返回响应式代理。ref 也可以在模板中自动解包，无需 .value。reactive 的限制：不能替换整个对象（会丢失响应式）、不能用于基本类型。使用 toRef 和 toRefs 从 reactive 对象中提取单独的 ref 引用而不丢失响应式。shallowRef 和 shallowReactive 只做浅层响应式，适合大数据量场景。triggerRef 手动触发 shallowRef 的更新。readonly 创建只读代理。isRef、isReactive、unref 等类型判断工具。Vue3 的响应式系统可以脱离组件独立使用（@vue/reactivity 包）。ref 的内部实现：通过 reactive 包装一个 { value: 原始值 } 的对象。',
  keyPoints: [
    'Vue3 使用 Proxy 实现响应式',
    'ref 包装基本类型（.value 访问）',
    'reactive 包装对象（直接访问属性）',
    'reactive 不能替换整个对象',
    'toRefs() 解构 reactive 而不丢失响应式',
    'shallowRef 只做浅层响应式',
    'readonly 创建只读响应式对象'
  ],
  code: {
    html: '<div id="app">\n  <h2>ref vs reactive</h2>\n  <div class="demo">\n    <div class="section">\n      <h3>ref 基本类型</h3>\n      <p>{{ greeting }}</p>\n      <button @click="changeGreeting">修改</button>\n    </div>\n    <div class="section">\n      <h3>reactive 对象</h3>\n      <p>姓名: {{ user.name }}，年龄: {{ user.age }}</p>\n      <button @click="changeUser">修改</button>\n    </div>\n  </div>\n</div>',
    css: 'body { font-family: system-ui; max-width: 500px; margin: 20px auto; padding: 20px; }\nh2 { color: #42B883; }\nh3 { font-size: 14px; color: #666; margin: 0 0 8px 0; }\n.demo { display: flex; gap: 20px; flex-wrap: wrap; }\n.section { flex: 1; min-width: 200px; background: #f0fdf4; border-radius: 8px; padding: 20px; text-align: center; }\n.section p { font-size: 16px; margin: 12px 0; }\nbutton { padding: 6px 16px; border: none; border-radius: 4px; background: #42B883; color: #fff; cursor: pointer; }\nbutton:hover { background: #38A169; }',
    js: 'var app = Vue.createApp({\n  setup: function() {\n    // ref 包装基本类型\n    var greeting = Vue.ref("Hello Vue3!");\n    function changeGreeting() {\n      greeting.value = "ref 已更新: " + new Date().toLocaleTimeString();\n    }\n    \n    // reactive 包装对象\n    var user = Vue.reactive({\n      name: "张三",\n      age: 25\n    });\n    function changeUser() {\n      user.name = user.name === "张三" ? "李四" : "张三";\n      user.age++;\n    }\n    \n    return {\n      greeting: greeting,\n      changeGreeting: changeGreeting,\n      user: user,\n      changeUser: changeUser\n    };\n  }\n});\n\napp.mount("#app");'
  }
};

skillContent['vue3-pinia'] = {
  title: 'Pinia 状态管理',
  description: '使用 Pinia 替代 Vuex 进行状态管理',
  difficulty: '较难',
  detail: 'Pinia 是 Vue3 官方推荐的状态管理库，完全替代 Vuex。核心概念：Store（状态仓库）、State（数据）、Getter（计算属性）、Action（方法）。defineStore(\'id\', options) 定义 Store，第一个参数是唯一 ID。可以使用 Options API（state/getters/actions）或 Setup API（类似 Composition API setup 函数）定义。Pinia 相比 Vuex 的优势：完整 TypeScript 支持（无需额外的类型包装）、不再有 mutations（只有 state/getters/actions）、支持多个 Store 互相引用、DevTools 集成更好、模块化（无需 modules 嵌套）。使用 storeToRefs() 解构 Store 属性而不丢失响应式。 方法批量更新状态。 重置状态到初始值。 监听状态变化。 监听 action 调用。组合式 Store 可以像组合式函数一样使用其他 Store。',
  keyPoints: [
    'defineStore 唯一 ID 标识 Store',
    '相比 Vuex 无需 mutations（更简洁）',
    'storeToRefs 解构时保持响应式',
    ' 批量更新状态',
    'TypeScript 开箱即用',
    '支持 Option Store 和 Setup Store',
    '多个 Store 可直接互相引用'
  ],
  code: {
    html: '<div id="app">\n  <h2>Pinia 状态管理</h2>\n  <div class="demo">\n    <div class="counter-store">\n      <h3>计数器 Store</h3>\n      <p>计数: <strong>{{ count }}</strong></p>\n      <p>翻倍: {{ doubleCount }}</p>\n      <button @click="increment">+1</button>\n      <button @click="decrement">-1</button>\n      <button class="reset" @click="resetAll">重置</button>\n    </div>\n  </div>\n</div>',
    css: 'body { font-family: system-ui; max-width: 500px; margin: 20px auto; padding: 20px; }\nh2 { color: #42B883; }\nh3 { font-size: 15px; color: #333; }\n.demo { background: #f0fdf4; border-radius: 8px; padding: 20px; text-align: center; }\n.demo p { font-size: 18px; margin: 8px 0; }\nbutton { padding: 8px 20px; margin: 0 8px; border: none; border-radius: 6px; background: #42B883; color: #fff; cursor: pointer; }\nbutton:hover { background: #38A169; }\n.reset { background: #999; }',
    js: '// 定义 Store\nvar useCounterStore = Pinia.defineStore("counter", {\n  state: function() {\n    return { count: 0 };\n  },\n  getters: {\n    doubleCount: function(state) {\n      return state.count * 2;\n    }\n  },\n  actions: {\n    increment: function() { this.count++; },\n    decrement: function() { this.count--; },\n    resetAll: function() { this.(); }\n  }\n});\n\nvar app = Vue.createApp({\n  setup: function() {\n    var store = useCounterStore();\n    return {\n      count: Pinia.storeToRefs(store).count,\n      doubleCount: Pinia.storeToRefs(store).doubleCount,\n      increment: store.increment,\n      decrement: store.decrement,\n      resetAll: store.resetAll\n    };\n  }\n});\n\napp.use(Pinia.createPinia());\napp.mount("#app");'
  }
};

skillContent['vue3-composables'] = {
  title: 'Vue3 组合式函数 Composables',
  description: '使用组合式函数（自定义 Hooks）复用逻辑',
  difficulty: '较难',
  detail: '组合式函数（Composables）是 Vue3 中复用有状态逻辑的主要方式，替代了 Vue2 的 mixin。命名约定为 useXxx。Composable 利用 Composition API（ref、reactive、onMounted、onUnmounted 等）封装可复用的逻辑。常见场景：useMouse（鼠标位置追踪）、useLocalStorage（本地存储封装）、useDebounce（防抖搜索）、useFetch（数据请求封装）。与 mixin 相比的优势：清晰的来源（组件调用时明确知道使用哪些 composable）、避免命名冲突（通过解构自行命名）、更好的类型推断。一个 Composable 可以调用其他 Composable。Composables 可以在 setup 中按需组合，像搭积木一样构建功能。组合式函数在 VueUse 库中有大量高质量实现参考。',
  keyPoints: [
    'useXxx 命名约定，替代 Vue2 mixin',
    '组合式函数内部可使用所有 Composition API',
    '来源清晰，无命名冲突',
    '一个 composable 可调用其他 composable',
    'VueUse 是社区最佳实践参考',
    '适合鼠标位置、存储、请求等可复用逻辑',
    '比 mixin 更好的类型支持和可维护性'
  ],
  code: {
    html: '<div id="app">\n  <h2>Composable 组合式函数</h2>\n  <div class="demo">\n    <div class="mouse-info">\n      <h3>🖱️ 鼠标位置追踪器</h3>\n      <p>X: <strong>{{ x }}</strong></p>\n      <p>Y: <strong>{{ y }}</strong></p>\n    </div>\n    <div class="search-demo">\n      <h3>🔍 防抖搜索</h3>\n      <input v-model="searchText" placeholder="输入搜索关键词">\n      <p>防抖结果：<strong>{{ debouncedText }}</strong></p>\n      <p class="hint">停止输入 300ms 后自动更新</p>\n    </div>\n  </div>\n</div>',
    css: 'body { font-family: system-ui; max-width: 500px; margin: 20px auto; padding: 20px; }\nh2 { color: #42B883; }\nh3 { font-size: 15px; color: #333; }\n.demo { display: flex; flex-direction: column; gap: 16px; }\n.mouse-info, .search-demo { background: #f0fdf4; border-radius: 8px; padding: 20px; text-align: center; }\ninput { width: 80%; padding: 8px; border: 1px solid #ccc; border-radius: 6px; }\n.hint { font-size: 12px; color: #999; }',
    js: '// 组合式函数：useMouse\nfunction useMouse() {\n  var x = Vue.ref(0);\n  var y = Vue.ref(0);\n  \n  function update(e) {\n    x.value = e.clientX;\n    y.value = e.clientY;\n  }\n  \n  Vue.onMounted(function() { window.addEventListener("mousemove", update); });\n  Vue.onUnmounted(function() { window.removeEventListener("mousemove", update); });\n  \n  return { x: x, y: y };\n}\n\n// 组合式函数：useDebounce\nfunction useDebounce(source, delay) {\n  var debounced = Vue.ref(source.value);\n  \n  Vue.watch(source, function() {\n    var timer = setTimeout(function() {\n      debounced.value = source.value;\n    }, delay);\n    \n    // 清理函数（每次 watch 回调执行前会执行上一个清理）\n    Vue.onUnmounted(function() { clearTimeout(timer); });\n  });\n  \n  return debounced;\n}\n\nvar app = Vue.createApp({\n  setup: function() {\n    var mouse = useMouse();\n    var searchText = Vue.ref("");\n    var debouncedText = useDebounce(searchText, 300);\n    \n    return {\n      x: mouse.x,\n      y: mouse.y,\n      searchText: searchText,\n      debouncedText: debouncedText\n    };\n  }\n});\n\napp.mount("#app");'
  }
};

var category = {
  key: 'vue3',
  label: 'Vue 3',
  skills: Object.keys(skillContent).map(function(id) { return { id: id, title: skillContent[id].title }; })
};

export { skillContent as vue3SkillContent, category as vue3Category };
