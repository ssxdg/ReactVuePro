const skillContent = {};

skillContent['vue2-basics'] = {
  title: 'Vue2 实例与生命周期',
  description: '掌握 Vue 实例创建和各个生命周期钩子',
  difficulty: '中级',
  detail: 'Vue 实例通过 new Vue({ options }) 创建，options 包含 data（数据）、methods（方法）、computed（计算属性）、watch（侦听器）、生命周期钩子等。生命周期钩子是实例在不同阶段自动执行的回调函数：beforeCreate（实例初始化后，数据未初始化）、created（数据已初始化，可访问 data/methods，常用于异步数据获取）、beforeMount（模板编译完成，未挂载）、mounted（DOM 已挂载，可操作 DOM 和访问 ）、beforeUpdate（数据变化前，可进行状态修改）、updated（数据变化导致 DOM 重新渲染后）、beforeDestroy（实例销毁前，清理定时器和事件监听）、destroyed（实例销毁后）。Vue2 的数据响应式通过 Object.defineProperty 实现。 API 可以手动监听数据变化。Vue.set 和 Vue.delete 处理对象属性的添加和删除响应式。',
  keyPoints: [
    'new Vue({ el, data, methods }) 创建实例',
    'created 适合异步数据初始化',
    'mounted 可操作 DOM 和 ',
    'beforeDestroy 清理定时器/事件',
    'data 必须是函数（组件中）',
    'Vue.set 保证新增属性是响应式',
    'Object.defineProperty 是 Vue2 响应式基础'
  ],
  code: {
    html: '<div id="app">\n  <h2>{{ title }}</h2>\n  <div class="counter">\n    <p>计数: {{ count }}</p>\n    <p>翻倍: {{ doubled }}</p>\n    <button @click="increment">+1</button>\n    <button @click="reset">重置</button>\n  </div>\n  <p class="lifecycle-msg">{{ msg }}</p>\n</div>',
    css: 'body { font-family: system-ui; max-width: 500px; margin: 20px auto; padding: 20px; }\nh2 { color: #42B883; }\n.counter { background: #f0fdf4; border-radius: 8px; padding: 20px; text-align: center; }\n.counter p { font-size: 18px; color: #333; }\nbutton { padding: 8px 20px; margin: 0 8px; border: none; border-radius: 6px; background: #42B883; color: #fff; cursor: pointer; font-size: 16px; }\nbutton:hover { background: #38A169; }\n.lifecycle-msg { font-size: 13px; color: #666; margin-top: 12px; text-align: center; }',
    js: 'new Vue({\n  el: "#app",\n  data: {\n    title: "Vue2 实例演示",\n    count: 0,\n    msg: "created 阶段初始化"\n  },\n  computed: {\n    doubled: function() { return this.count * 2; }\n  },\n  created: function() {\n    this.msg = "✅ created：数据已初始化，可发起 API 请求";\n  },\n  mounted: function() {\n    this.msg = "✅ mounted：已挂载到 DOM，可操作 ";\n  },\n  methods: {\n    increment: function() { this.count++; },\n    reset: function() { this.count = 0; this.msg = "已重置"; }\n  }\n});'
  }
};

skillContent['vue2-component'] = {
  title: 'Vue2 组件通信',
  description: '掌握父子、兄弟、跨级组件通信方式',
  difficulty: '中级',
  detail: 'Vue2 组件通信是核心难点。父子通信：父组件通过 props 向下传数据，子组件通过  向上传事件。兄弟通信通过共同父组件中转（父组件接收事件后改变数据流向另一个子组件）。provide/inject 允许父组件向所有后代注入依赖，适合深层嵌套的组件通信，但非响应式（需传递响应式对象）。/ 直接访问父/子组件实例，耦合度高。EventBus（new Vue() 作为事件总线）用于任意组件通信，适合小型项目但不利于追踪。Vuex 是官方状态管理库，适合大型应用。插槽（slot）让父组件向子组件传递模板内容，具名插槽支持多个位置，作用域插槽（slot-scope）让子组件向插槽传递数据。.sync 修饰符是 v-model 的扩展，实现双向绑定。',
  keyPoints: [
    'props 父 -> 子（单向数据流）',
    ' 子 -> 父（触发事件）',
    'provide/inject 深层传递（非响应式）',
    'EventBus 适合简单跨级通信',
    '具名插槽 <slot name="header">',
    '作用域插槽 slot-scope 子传数据给父模板',
    '.sync 修饰符实现双向绑定'
  ],
  code: {
    html: '<div id="app">\n  <h2>组件通信演示</h2>\n  <parent-component></parent-component>\n</div>',
    css: 'body { font-family: system-ui; max-width: 500px; margin: 20px auto; padding: 20px; }\nh2 { color: #42B883; text-align: center; }\n.parent { background: #f0fdf4; border: 2px solid #42B883; border-radius: 8px; padding: 20px; }\n.child { background: #fff; border: 1px solid #ddd; border-radius: 6px; padding: 16px; margin-top: 12px; }\n.grandchild { background: #f9f9f9; border: 1px solid #eee; border-radius: 4px; padding: 12px; margin-top: 8px; }\nbutton { padding: 6px 16px; border: none; border-radius: 4px; background: #42B883; color: #fff; cursor: pointer; }\nbutton:hover { background: #38A169; }',
    js: 'Vue.component("parent-component", {\n  template: \'<div class="parent">\\\n    <h3>父组件</h3>\\\n    <p>子组件说: {{ childMsg }}</p>\\\n    <child-component @message="handleMessage"></child-component>\\\n  </div>\',\n  data: function() { return { childMsg: "等待消息..." }; },\n  methods: {\n    handleMessage: function(msg) { this.childMsg = msg; }\n  }\n});\n\nVue.component("child-component", {\n  template: \'<div class="child">\\\n    <h4>子组件</h4>\\\n    <input v-model="input" placeholder="输入消息">\\\n    <button @click="sendToParent">发送给父组件</button>\\\n    <grand-child @broadcast="relayToParent"></grand-child>\\\n  </div>\',\n  data: function() { return { input: "" }; },\n  methods: {\n    sendToParent: function() {\n      this.("message", this.input || "Hello 父组件!");\n    },\n    relayToParent: function(msg) {\n      this.("message", "[孙组件] " + msg);\n    }\n  }\n});\n\nVue.component("grand-child", {\n  template: \'<div class="grandchild">\\\n    <h5>孙组件</h5>\\\n    <button @click="(\'broadcast\', \'来自孙组件的问候\')">向上通信</button>\\\n  </div>\'\n});\n\nnew Vue({ el: "#app" });'
  }
};

skillContent['vue2-router'] = {
  title: 'Vue Router（Vue2）',
  description: '掌握 Vue2 路由配置和导航守卫',
  difficulty: '较难',
  detail: 'Vue Router 是 Vue2 官方路由库。基础配置：Vue.use(VueRouter)；const router = new VueRouter({ routes: [ { path: \'/\', component: Home }, { path: \'/about\', component: About } ] })。动态路由匹配：path: \'/user/:id\' 通过 .params.id 获取参数。嵌套路由使用 children 配置，父组件需包含 <router-view>。命名路由 name: \'user\' 代替 path 跳转。编程式导航：this..push({ name: \'user\', params: { id: 1 } })、this..replace()、this..go(-1)。导航守卫：全局 beforeEach（权限验证）、beforeResolve；路由独享 beforeEnter；组件内 beforeRouteEnter/beforeRouteUpdate/beforeRouteLeave。路由元信息 meta 携带额外数据。懒加载：component: () => import(\'./views/About.vue\') 优化首屏加载。history 模式需服务端配置。',
  keyPoints: [
    'VueRouter 实例化并传入 routes 数组',
    '.params 获取动态路由参数',
    'this..push 编程式导航',
    '嵌套路由 children + <router-view>',
    'beforeEach 全局前置守卫（权限验证）',
    '路由懒加载 () => import()',
    '<router-link> 声明式导航'
  ],
  code: {
    html: '<div id="app">\n  <h2>Vue Router 演示</h2>\n  <div class="nav">\n    <router-link to="/">首页</router-link> |\n    <router-link to="/about">关于</router-link> |\n    <router-link to="/user/123">用户</router-link>\n  </div>\n  <div class="view">\n    <router-view></router-view>\n  </div>\n</div>',
    css: 'body { font-family: system-ui; max-width: 500px; margin: 20px auto; padding: 20px; }\nh2 { color: #42B883; }\n.nav { padding: 12px 0; text-align: center; }\n.nav a { color: #42B883; text-decoration: none; margin: 0 8px; }\n.nav a.router-link-exact-active { font-weight: bold; border-bottom: 2px solid #42B883; }\n.view { background: #f0fdf4; border-radius: 8px; padding: 20px; min-height: 100px; }',
    js: 'var Home = { template: "<div><h3>🏠 首页</h3><p>欢迎来到 Vue Router 演示页面</p></div>" };\nvar About = { template: "<div><h3>ℹ️ 关于</h3><p>本页面演示 Vue Router 的基础路由功能</p></div>" };\nvar User = { template: "<div><h3>👤 用户</h3><p>用户 ID: {{ .params.id }}</p></div>" };\n\nvar router = new VueRouter({\n  routes: [\n    { path: "/", component: Home },\n    { path: "/about", component: About },\n    { path: "/user/:id", component: User }\n  ]\n});\n\nnew Vue({\n  el: "#app",\n  router: router\n});'
  }
};

skillContent['vue2-computed-watch'] = {
  title: 'Vue2 计算属性与侦听器',
  description: '掌握 computed 和 watch 的正确用法',
  difficulty: '中级',
  detail: '计算属性（computed）基于依赖缓存，只有相关依赖变化时才重新计算，适合模板中复杂表达式的封装。computed 默认只有 getter，也可设置 setter。与 methods 不同，computed 有缓存机制。侦听器（watch）在数据变化时执行异步或开销较大的操作，可获取新旧值。watch 选项：deep: true 深度监听对象内部变化，immediate: true 立即执行。 API 可手动创建侦听器，返回 unwatch 函数用于取消监听。对比：computed 用于派生同步数据，watch 用于执行副作用（异步请求、DOM 操作）。大多数场景优先使用 computed。Vue.set 确保对象新增属性被响应式系统追踪。数组变化检测通过包裹的变异方法（push/pop/splice 等）实现。',
  keyPoints: [
    'computed 有缓存，依赖不变不重新计算',
    'methods 无缓存，每次渲染都执行',
    'watch 适合异步操作和开销较大的任务',
    'watch 的 deep 选项深度监听对象',
    'computed 默认 getter，可设置 setter',
    '优先 computed，需要副作用才用 watch',
    'Vue2 无法自动检测数组索引和对象新属性'
  ],
  code: {
    html: '<div id="app">\n  <h2>computed vs watch</h2>\n  <div class="demo">\n    <div class="field">\n      <label>名：<input v-model="firstName" placeholder="First"></label>\n      <label>姓：<input v-model="lastName" placeholder="Last"></label>\n    </div>\n    <div class="result">\n      <p>computed 全名：<strong>{{ fullName }}</strong></p>\n      <p>watch 倒序：<strong>{{ reversedFullName }}</strong></p>\n      <p>姓名长度：{{ nameLength }}</p>\n    </div>\n    <div class="log" v-if="log">\n      <h4>watch 日志：</h4>\n      <p v-for="(item, i) in log" :key="i">{{ item }}</p>\n    </div>\n  </div>\n</div>',
    css: 'body { font-family: system-ui; max-width: 500px; margin: 20px auto; padding: 20px; }\nh2 { color: #42B883; }\n.demo { background: #f0fdf4; border-radius: 8px; padding: 20px; }\n.field { display: flex; gap: 12px; margin-bottom: 12px; }\ninput { padding: 8px; border: 1px solid #ccc; border-radius: 4px; flex: 1; }\n.result p { margin: 8px 0; font-size: 15px; }\n.log { margin-top: 12px; padding: 12px; background: #fff; border-radius: 6px; font-size: 13px; }',
    js: 'new Vue({\n  el: "#app",\n  data: {\n    firstName: "张",\n    lastName: "三",\n    log: []\n  },\n  computed: {\n    fullName: function() {\n      return this.firstName + " " + this.lastName;\n    },\n    nameLength: function() {\n      return (this.firstName + this.lastName).length + " 个字";\n    }\n  },\n  watch: {\n    fullName: function(newVal, oldVal) {\n      this.log.unshift("📝 fullName 从 \\"" + oldVal + "\\" 变为 \\"" + newVal + "\\"");\n      if (this.log.length > 5) this.log.pop();\n    }\n  },\n  computed: {\n    reversedFullName: function() {\n      return this.fullName.split("").reverse().join("");\n    }\n  }\n});'
  }
};

var category = {
  key: 'vue2',
  label: 'Vue 2',
  skills: Object.keys(skillContent).map(function(id) { return { id: id, title: skillContent[id].title }; })
};

export { skillContent as vue2SkillContent, category as vue2Category };
