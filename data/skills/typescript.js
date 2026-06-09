const skillContent = {};

skillContent['ts-basics'] = {
  title: 'TypeScript 基础类型',
  description: '掌握 TS 基础类型系统和类型注解',
  difficulty: '中级',
  detail: 'TypeScript 是 JavaScript 的超集，添加了静态类型系统。基础类型：number（数字）、string（字符串）、boolean（布尔）、array（T[] 或 Array<T>）、tuple（固定长度数组 [string, number]）、enum（枚举）、any（任意类型，避免使用）、void（无返回值）、null/undefined、never（永远不会发生的值）、unknown（类型安全的 any）。类型注解使用冒号语法：let age: number = 25。TypeScript 能根据初始值自动推断类型（类型推断）。函数参数和返回值都需要类型：function add(a: number, b: number): number { return a + b; }。对象类型使用接口或类型别名描述形状。联合类型 string | number 表示多种可能。交叉类型 A & B 合并多个类型。tsconfig.json 控制编译选项，strict 模式开启最严格的类型检查。',
  keyPoints: [
    ':type 注解变量、参数、返回值',
    '类型推断简化代码，能推断则不加注解',
    '联合类型 | 和交叉类型 &',
    'enum 定义常量枚举',
    'any 放弃类型检查，尽量用 unknown',
    'void 表示无返回值，never 表示永不返回（抛出异常）',
    'strict: true 开启完整类型检查'
  ],
  code: {
    html: '<h2>TS 基础类型演示</h2>\n<div class="panel">\n  <div class="output" id="output"></div>\n  <div class="controls">\n    <button data-type="basic">基础类型</button>\n    <button data-type="union">联合类型</button>\n    <button data-type="func">函数类型</button>\n    <button data-type="enum">枚举类型</button>\n  </div>\n  <p class="note">提示：以下为 TS 代码示例展示，实际运行需编译为 JS</p>\n</div>',
    css: 'body { font-family: system-ui; max-width: 500px; margin: 20px auto; padding: 20px; }\nh2 { color: #3178C6; }\n.panel { background: #f0f4ff; border-radius: 8px; padding: 20px; }\n.output { background: #1e293b; color: #e2e8f0; border-radius: 6px; padding: 16px; min-height: 80px; margin-bottom: 12px; font-family: "JetBrains Mono", monospace; font-size: 13px; line-height: 1.6; white-space: pre-wrap; }\n.controls { display: flex; gap: 8px; flex-wrap: wrap; }\nbutton { padding: 8px 16px; border: none; border-radius: 6px; background: #3178C6; color: #fff; cursor: pointer; }\nbutton:hover { background: #2563EB; }\n.note { font-size: 12px; color: #666; margin-top: 8px; }',
    js: 'var output = document.getElementById("output");\nvar code = {\n  basic: "// TS 基础类型\\nlet name: string = \\"TypeScript\\";\\nlet age: number = 25;\\nlet isReady: boolean = true;\\nlet list: number[] = [1, 2, 3];\\nlet tuple: [string, number] = [\\"Tom\\", 18];\\nlet data: unknown = { id: 1 };\\n\\n// 类型推断：TS 自动推断类型\\nlet message = \\"hello\\"; // 推断为 string",\n  union: "// 联合类型与类型守卫\\ntype Status = \\"active\\" | \\"inactive\\" | \\"pending\\";\\nlet s: Status = \\"active\\";\\n\\nfunction getId(id: string | number) {\\n  // 类型守卫缩小类型范围\\n  if (typeof id === \\"string\\") {\\n    return id.toUpperCase();\\n  }\\n  return id.toFixed(2);\\n}\\n\\n// 交叉类型\\ntype A = { a: number };\\ntype B = { b: string };\\ntype C = A & B; // { a: number, b: string }",\n  func: "// 函数类型\\nfunction add(a: number, b: number): number {\\n  return a + b;\\n}\\n\\n// 可选参数 ?\\nfunction greet(name: string, greeting?: string): string {\\n  return greeting || \\"Hello\\" + \\", \\" + name;\\n}\\n\\n// 函数类型作为变量\\ntype MathFn = (x: number, y: number) => number;\\nconst multiply: MathFn = (a, b) => a * b;\\n\\n// 重载\\nfunction pick(a: string[]): string;\\nfunction pick(a: number[]): number;\\nfunction pick(a: any[]): any { return a[0]; }",\n  enum: "// 枚举类型\\nenum Direction {\\n  Up,    // 0\\n  Down,  // 1\\n  Left,  // 2\\n  Right  // 3\\n}\\n\\n// 字符串枚举\\nenum Color {\\n  Red = \\"#FF0000\\",\\n  Green = \\"#00FF00\\",\\n  Blue = \\"#0000FF\\"\\n}\\n\\nconst dir = Direction.Up;\\nconsole.log(Direction[0]); // \\"Up\\"（反向映射）\\n\\n// const 枚举在编译时被内联，无运行时开销\\nconst enum Size { Small = 100, Medium = 200, Large = 300 }"\n};\nvar btns = document.querySelectorAll("button");\nfor (var i = 0; i < btns.length; i++) {\n  (function(btn) {\n    btn.onclick = function() {\n      output.textContent = code[this.dataset.type] || "选择类型";\n    };\n  })(btns[i]);\n}'
  }
};

skillContent['ts-generics'] = {
  title: 'TypeScript 泛型',
  description: '掌握泛型实现类型安全的通用函数和组件',
  difficulty: '较难',
  detail: '泛型（Generics）是 TypeScript 最强大的特性之一，允许创建可复用的类型安全组件。基本语法：<T> 是类型参数，在使用时指定具体类型。function identity<T>(arg: T): T { return arg; }。泛型可以约束：<T extends HasLength> 限定 T 必须满足某些条件。多个类型参数：<K, V>。泛型接口和泛型类：interface Response<T> { data: T; code: number; }。泛型约束使用 extends 关键字：<T extends { length: number }>。使用 keyof 约束参数为对象的键：function getProperty<T, K extends keyof T>(obj: T, key: K): T[K]。泛型在 React 组件、工具函数、类型工具中广泛应用。React.FC<Props>、useState<T>()、Promise<T> 都是泛型的实际应用。泛型默认值：<T = string>。',
  keyPoints: [
    '<T> 类型参数在使用时确定具体类型',
    'extends 约束泛型必须满足的条件',
    '多个类型参数 <K, V> 用于键值对场景',
    'keyof T 获取对象所有键的联合类型',
    'T[K] 索引访问类型获取属性类型',
    '泛型默认值 <T = string>',
    '泛型约束确保类型安全的同时保持灵活性'
  ],
  code: {
    html: '<h2>TS 泛型演示</h2>\n<div class="panel">\n  <div class="output" id="output"></div>\n  <div class="controls">\n    <button data-ex="basic">基础泛型</button>\n    <button data-ex="constraint">泛型约束</button>\n    <button data-ex="keyof">keyof 操作符</button>\n  </div>\n</div>',
    css: 'body { font-family: system-ui; max-width: 500px; margin: 20px auto; padding: 20px; }\nh2 { color: #3178C6; }\n.panel { background: #f0f4ff; border-radius: 8px; padding: 20px; }\n.output { background: #1e293b; color: #e2e8f0; border-radius: 6px; padding: 16px; min-height: 80px; margin-bottom: 12px; font-family: "JetBrains Mono", monospace; font-size: 13px; line-height: 1.6; white-space: pre-wrap; }\n.controls { display: flex; gap: 8px; flex-wrap: wrap; }\nbutton { padding: 8px 16px; border: none; border-radius: 6px; background: #3178C6; color: #fff; cursor: pointer; }\nbutton:hover { background: #2563EB; }',
    js: 'var output = document.getElementById("output");\nvar code = {\n  basic: "// 基础泛型函数\\nfunction identity<T>(arg: T): T {\\n  return arg;\\n}\\n\\n// 使用\\nidentity<string>(\\"hello\\");\\nidentity<number>(42);\\n\\n// 泛型接口\\ninterface ApiResponse<T> {\\n  code: number;\\n  message: string;\\n  data: T;\\n}\\n\\n// 泛型数组\\nfunction firstElement<T>(arr: T[]): T | undefined {\\n  return arr[0];\\n}\\nconst num = firstElement([1,2,3]); // number\\nconst str = firstElement([\\"a\\",\\"b\\"]); // string",\n  constraint: "// 泛型约束 extends\\ninterface HasLength {\\n  length: number;\\n}\\n\\nfunction logLength<T extends HasLength>(arg: T): T {\\n  console.log(arg.length);\\n  return arg;\\n}\\n\\n// 只有满足 HasLength 的类型才能使用\\nlogLength(\\"hello\\"); // 5\\nlogLength([1,2,3]);   // 3\\n// logLength(123);     // ❌ number 没有 length\\n\\n// 多参数\\nfunction pair<K, V>(key: K, value: V): [K, V] {\\n  return [key, value];\\n}\\nconst p = pair(1, \\"a\\"); // [number, string]",\n  keyof: "// keyof 操作符\\ninterface Person {\\n  name: string;\\n  age: number;\\n  email: string;\\n}\\n\\n// K extends keyof Person 限制为 name/age/email\\nfunction getProp<T, K extends keyof T>(obj: T, key: K): T[K] {\\n  return obj[key];\\n}\\n\\nconst p: Person = { name: \\"Tom\\", age: 25, email: \\"t@t.com\\" };\\ngetProp(p, \\"name\\"); // string\\ngetProp(p, \\"age\\");  // number\\n// getProp(p, \\"xxx\\"); // ❌ 类型错误"  \n};\nvar btns = document.querySelectorAll("button");\nfor (var i = 0; i < btns.length; i++) {\n  (function(btn) {\n    btn.onclick = function() {\n      output.textContent = code[this.dataset.ex] || "";\n    };\n  })(btns[i]);\n}'
  }
};

skillContent['ts-utility-types'] = {
  title: 'TS 工具类型',
  description: '掌握 Partial、Pick、Omit 等内置工具类型',
  difficulty: '较难',
  detail: 'TypeScript 内置了一系列工具类型（Utility Types），让类型转换变得简单高效。Partial<T> 将所有属性变为可选。Required<T> 将所有属性变为必选。Readonly<T> 将所有属性变为只读。Pick<T, K> 从 T 中选取部分属性。Omit<T, K> 从 T 中排除部分属性。Record<K, V> 创建键为 K（通常是联合类型）、值为 V 的对象类型。Exclude<T, U> 从联合类型 T 中排除 U。Extract<T, U> 从 T 中提取与 U 共有的类型。NonNullable<T> 排除 null 和 undefined。ReturnType<T> 获取函数类型的返回值类型。Parameters<T> 获取函数参数类型元组。这些工具类型的实现大量使用了条件类型、映射类型和 infer 推断，理解它们能极大提升 TS 开发效率。',
  keyPoints: [
    'Partial<T> 所有属性可选，常用于更新接口',
    'Pick<T, K> 选取部分属性',
    'Omit<T, K> 排除部分属性',
    'Record<K, V> 创建映射对象类型',
    'Readonly<T> 所有属性只读',
    'ReturnType<T> 获取函数返回值类型',
    'NonNullable<T> 排除 null/undefined'
  ],
  code: {
    html: '<h2>TS 工具类型</h2>\n<div class="panel">\n  <div class="output" id="output"></div>\n  <div class="controls">\n    <button data-ex="pick">Pick/Omit</button>\n    <button data-ex="partial">Partial</button>\n    <button data-ex="record">Record</button>\n  </div>\n</div>',
    css: 'body { font-family: system-ui; max-width: 500px; margin: 20px auto; padding: 20px; }\nh2 { color: #3178C6; }\n.panel { background: #f0f4ff; border-radius: 8px; padding: 20px; }\n.output { background: #1e293b; color: #e2e8f0; border-radius: 6px; padding: 16px; min-height: 80px; margin-bottom: 12px; font-family: "JetBrains Mono", monospace; font-size: 13px; line-height: 1.6; white-space: pre-wrap; }\n.controls { display: flex; gap: 8px; flex-wrap: wrap; }\nbutton { padding: 8px 16px; border: none; border-radius: 6px; background: #3178C6; color: #fff; cursor: pointer; }\nbutton:hover { background: #2563EB; }',
    js: 'var output = document.getElementById("output");\nvar code = {\n  pick: "interface User {\\n  id: number;\\n  name: string;\\n  email: string;\\n  role: string;\\n}\\n\\n// Pick: 只选需要的\\ntype UserPublic = Pick<User, \\"id\\" | \\"name\\">;\\n// { id: number; name: string; }\\n\\n// Omit: 排除敏感字段\\ntype UserSafe = Omit<User, \\"email\\" | \\"role\\">;\\n// { id: number; name: string; }\\n\\n// 组合使用\\ntype UserUpdate = Partial<Pick<User, \\"name\\" | \\"email\\">>;",\n  partial: "interface Config {\\n  url: string;\\n  port: number;\\n  timeout: number;\\n  retries: number;\\n}\\n\\n// Partial: 所有属性可选（适合更新操作）\\nfunction updateConfig(partial: Partial<Config>) {\\n  // 只需传入需要修改的字段\\n}\\nupdateConfig({ timeout: 5000 });\\nupdateConfig({ url: \\"/api\\", retries: 3 });\\n\\n// Required: 所有属性必选\\ntype StrictConfig = Required<Partial<Config>>;\\n\\n// Readonly: 不可变\\nconst frozen: Readonly<Config> = {\\n  url: \\"/api\\", port: 3000, timeout: 5000, retries: 2\\n};\\n// frozen.url = \\"/v2\\"; // ❌ 只读",\n  record: "// Record<K, V> - 映射类型\\ntype Page = \\"home\\" | \\"about\\" | \\"contact\\";\\ntype PageInfo = Record<Page, { title: string; visits: number }>;\\n\\nconst pages: PageInfo = {\\n  home: { title: \\"首页\\", visits: 100 },\\n  about: { title: \\"关于\\", visits: 50 },\\n  contact: { title: \\"联系\\", visits: 30 }\\n};\\n\\n// 实际应用：配置映射\\ntype Theme = \\"light\\" | \\"dark\\";\\ntype ThemeColors = Record<Theme, { bg: string; text: string }>;\\nconst colors: ThemeColors = {\\n  light: { bg: \\"#fff\\", text: \\"#333\\" },\\n  dark: { bg: \\"#333\\", text: \\"#fff\\" }\\n};"\n};\nvar btns = document.querySelectorAll("button");\nfor (var i = 0; i < btns.length; i++) {\n  (function(btn) {\n    btn.onclick = function() {\n      output.textContent = code[this.dataset.ex] || "";\n    };\n  })(btns[i]);\n}'
  }
};

skillContent['ts-react'] = {
  title: 'React + TypeScript 实战',
  description: '在 React 项目中全面使用 TypeScript',
  difficulty: '较难',
  detail: 'TypeScript 与 React 结合使用可以大幅提升开发效率和代码质量。组件 Props 类型定义：interface Props { name: string; age?: number; }，函数组件声明：const Comp: React.FC<Props> = ({ name, age }) => ...。useState 自动推断类型：const [count, setCount] = useState(0) 推断为 number。useRef 类型：const inputRef = useRef<HTMLInputElement>(null)。事件处理类型：onChange: (e: React.ChangeEvent<HTMLInputElement>) => void。useReducer 的类型安全：定义 Action 联合类型 { type: \'increment\' | \'decrement\'; payload?: number }。Context 的 createContext<T>() 需要泛型指定。React.CSSProperties 内联样式类型。React.ReactNode 作为 children 类型。React.ComponentProps<typeof Comp> 获取组件的 Props 类型。顶级类型：React.FC<Props>、React.ReactNode、React.CSSProperties、React.Dispatch<React.SetStateAction<T>>。',
  keyPoints: [
    'interface Props 定义组件参数类型',
    'React.FC<Props> 函数组件类型',
    'useState 自动类型推断',
    'useRef<HTMLInputElement>(null) DOM 引用',
    'React.ChangeEvent 事件对象类型',
    'useReducer 需要 Action 联合类型',
    'React.ReactNode 作为 children 类型'
  ],
  code: {
    html: '<h2>React + TS 类型示例</h2>\n<div class="panel">\n  <div class="output" id="output"></div>\n  <div class="controls">\n    <button data-ex="props">Props 类型</button>\n    <button data-ex="hooks">Hooks 类型</button>\n    <button data-ex="events">事件类型</button>\n  </div>\n</div>',
    css: 'body { font-family: system-ui; max-width: 500px; margin: 20px auto; padding: 20px; }\nh2 { color: #3178C6; }\n.panel { background: #f0f4ff; border-radius: 8px; padding: 20px; }\n.output { background: #1e293b; color: #e2e8f0; border-radius: 6px; padding: 16px; min-height: 80px; margin-bottom: 12px; font-family: "JetBrains Mono", monospace; font-size: 13px; line-height: 1.6; white-space: pre-wrap; }\n.controls { display: flex; gap: 8px; flex-wrap: wrap; }\nbutton { padding: 8px 16px; border: none; border-radius: 6px; background: #3178C6; color: #fff; cursor: pointer; }\nbutton:hover { background: #2563EB; }',
    js: 'var output = document.getElementById("output");\nvar code = {\n  props: "// 定义 Props 类型\\ninterface UserCardProps {\\n  name: string;\\n  age?: number;  // 可选\\n  onUpdate: (id: number) => void;  // 回调函数\\n  children?: React.ReactNode;\\n}\\n\\n// 函数组件\\nconst UserCard: React.FC<UserCardProps> = ({\\n  name, age, onUpdate, children\\n}) => {\\n  return <div>{name}</div>;\\n};\\n\\n// 默认 Props\\nUserCard.defaultProps = {\\n  age: 18\\n};\\n\\n// 从组件提取 Props 类型\\ntype CardProps = React.ComponentProps<typeof UserCard>;",\n  hooks: "// useState - 自动推断\\nconst [count, setCount] = useState(0);\\n// setCount 只接受 number\\n\\n// 复杂状态\\ninterface User { name: string; email: string; }\\nconst [user, setUser] = useState<User | null>(null);\\n\\n// useRef\\nconst inputRef = useRef<HTMLInputElement>(null);\\n// inputRef.current?.focus() - 可选链访问\\n\\n// useReducer\\ntype Action =\\n  | { type: \\"increment\\"; payload: number }\\n  | { type: \\"reset\\" };\\nconst reducer = (s: number, a: Action): number => {\\n  switch(a.type) {\\n    case \\"increment\\": return s + a.payload;\\n    case \\"reset\\": return 0;\\n  }\\n};",\n  events: "// 事件处理类型\\nconst InputField: React.FC = () => {\\n  const [val, setVal] = useState(\\"\\");\\n  \\n  // ChangeEvent 输入框变化\\n  const onChange = (\\n    e: React.ChangeEvent<HTMLInputElement>\\n  ) => setVal(e.target.value);\\n  \\n  // MouseEvent 点击\\n  const onClick = (\\n    e: React.MouseEvent<HTMLButtonElement>\\n  ) => console.log(e.clientX);\\n  \\n  // FormEvent 表单提交\\n  const onSubmit = (\\n    e: React.FormEvent<HTMLFormElement>\\n  ) => { e.preventDefault(); };\\n  \\n  // KeyboardEvent 键盘\\n  const onKeyDown = (\\n    e: React.KeyboardEvent\\n  ) => { if(e.key === \\"Enter\\") submit(); };\\n  \\n  return <input onChange={onChange} />;\\n};"\n};\nvar btns = document.querySelectorAll("button");\nfor (var i = 0; i < btns.length; i++) {\n  (function(btn) {\n    btn.onclick = function() {\n      output.textContent = code[this.dataset.ex] || "";\n    };\n  })(btns[i]);\n}'
  }
};

var category = {
  key: 'typescript',
  label: 'TypeScript',
  skills: Object.keys(skillContent).map(function(id) { return { id: id, title: skillContent[id].title }; })
};

export { skillContent as tsSkillContent, category as tsCategory };
