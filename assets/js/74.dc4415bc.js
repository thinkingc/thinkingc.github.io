(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{456:function(t,a,s){"use strict";s.r(a);var e=s(21),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue-面试题-2021"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-面试题-2021"}},[t._v("#")]),t._v(" Vue 面试题 - 2021")]),t._v(" "),s("h2",{attrs:{id:"响应式数据原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应式数据原理"}},[t._v("#")]),t._v(" 响应式数据原理")]),t._v(" "),s("h3",{attrs:{id:"vue-2-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-2-x"}},[t._v("#")]),t._v(" Vue 2.x")]),t._v(" "),s("p",[t._v("Vue 2.x 采用"),s("strong",[t._v("数据劫持 + 发布订阅模式")]),t._v("实现数据双向绑定。通过"),s("code",[t._v("Object.defineProperty()")]),t._v("方法来为组件中"),s("code",[t._v("data")]),t._v("的每个属性添加"),s("code",[t._v("get")]),t._v("和"),s("code",[t._v("set")]),t._v("方法，在数据变动时，触发"),s("code",[t._v("set")]),t._v("里相应的监听回调函数，将变动信息发布到订阅者。主要步骤如下：")]),t._v(" "),s("ol",[s("li",[t._v("组件初始化时：\n"),s("ol",[s("li",[t._v("创建一个"),s("strong",[t._v("dep 对象作为观察者（依赖收集、订阅发布的载体）")])]),t._v(" "),s("li",[t._v("用"),s("code",[t._v("Object.defineProperty()")]),t._v("方法对"),s("code",[t._v("data")]),t._v("中的属性及子属性对象的属性添加"),s("code",[t._v("getter")]),t._v("和"),s("code",[t._v("setter")]),t._v("方法进行数据劫持。调用"),s("code",[t._v("getter")]),t._v("方法时，用对应的 dep 收集依赖；在操作数据时调用"),s("code",[t._v("setter")]),t._v("，触发 dep 中收集的依赖。")])])]),t._v(" "),s("li",[t._v("组件挂载时：\n"),s("ol",[s("li",[s("code",[t._v("compiler")]),t._v(" 解析模板指令，将其中的变量替换成数据。然后初始化页面，并将每个指令对应的节点绑定上更新函数。后续一旦数据发生变化，便会更新页面。页面发生变化时也会相应发布变动信息。")]),t._v(" "),s("li",[t._v("组件同时会定义一个 "),s("code",[t._v("Watcher")]),t._v(" 类作为订阅者，"),s("code",[t._v("Watcher")]),t._v("可以作为 dep 和 组件之间的桥梁。在组件渲染时触发"),s("code",[t._v("getter")]),t._v("，向 dep 中添加自己。同时自身又有一个"),s("code",[t._v("update")]),t._v("方法，待收到 dep 的变动通知时，便会调用自己的 "),s("code",[t._v("update")]),t._v(" 方法，触发 "),s("code",[t._v("compiler")]),t._v(" 中的相应函数完成更新。")])])])]),t._v(" "),s("p",[t._v("参考："),s("br"),t._v(" "),s("a",{attrs:{href:"https://www.cnblogs.com/tugenhua0707/p/11754291.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue系列---响应式原理实现及Observer源码解析(七)"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://my.oschina.net/u/3277205/blog/1499305",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 进阶之深入理解数据双向绑定"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"vue-3-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-3-x"}},[t._v("#")]),t._v(" Vue 3.x")]),t._v(" "),s("p",[t._v("使用"),s("code",[t._v("proxy")]),t._v("代理对象，无需再对数组或者对象添加/删除属性的响应做拦截。😎")]),t._v(" "),s("h2",{attrs:{id:"如何监听数组的变化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何监听数组的变化"}},[t._v("#")]),t._v(" 如何监听数组的变化")]),t._v(" "),s("p",[t._v("出于性能问题，vue 劫持了数组的7种原型方法，通过这7种方法修改会触发 dep 更新视图。")]),t._v(" "),s("ol",[s("li",[t._v("函数劫持的方式，重写了数组方法，具体呢就是更改了数组的原型，更改成自己的，用户调数组的一些方法的时候，走的就是自己的方法，然后通知视图去更新。")]),t._v(" "),s("li",[t._v("数组中的每一项可能是对象，那么我们会去遍历数组的每一项进行观测（且只有数组里的对象才能进行观测，观测过的也不会进行观测）。")])]),t._v(" "),s("h2",{attrs:{id:"vue-set-原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-set-原理"}},[t._v("#")]),t._v(" Vue.set 原理")]),t._v(" "),s("p",[t._v("用法："),s("code",[t._v("Vue.set (target: Array<any> | Object, key: any, val: any)")]),t._v("。")]),t._v(" "),s("ol",[s("li",[t._v("判断 target 是否为数组"),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isValidArrayIndex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类似$vm.set(vm.$data.arr, 0, 3)")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改数组的长度, 避免索引>数组长度导致splcie()执行有误")]),t._v("\n   target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 利用数组的splice变异方法触发响应式, 这个前面讲过")]),t._v("\n   target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("splice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" val\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("判断属性是否已经存在"),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// target为对象, key在target或者target.prototype上，同时必须不能在 Object.prototype 上")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" target "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" val\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" val\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("不允许为 Vue 实例 $data 添加属性"),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以上都不成立, 即开始给target创建一个全新的属性")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取Observer实例")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ob "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__ob__\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Vue 实例对象拥有 _isVue 属性, 即不允许给Vue 实例对象添加属性")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 也不允许Vue.set/$set 函数为根数据对象(vm.$data)添加属性")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_isVue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ob "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" ob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vmCount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("warn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Avoid adding reactive properties to a Vue instance or its root $data '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'at runtime - declare it upfront in the data option.'")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" val\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("非响应式属性直接赋值"),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// target本身就不是响应式数据, 直接赋值")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("ob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" val\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" val\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("最后进行响应式处理"),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 进行响应式处理")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineReactive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("notify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" val\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"vue-nexttick-callback-用法及原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-nexttick-callback-用法及原理"}},[t._v("#")]),t._v(" Vue.nextTick(callback) 用法及原理")]),t._v(" "),s("h3",{attrs:{id:"特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),s("p",[t._v("Vue 在更新 DOM 时是异步执行的。"),s("strong",[t._v("只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更")]),t._v("。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。")]),t._v(" "),s("h3",{attrs:{id:"实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现原理"}},[t._v("#")]),t._v(" 实现原理")]),t._v(" "),s("p",[t._v("Vue 在内部对异步队列尝试使用原生的 "),s("code",[t._v("Promise.then")]),t._v("、"),s("code",[t._v("MutationObserver")]),t._v(" 和 "),s("code",[t._v("setImmediate")]),t._v("，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。")]),t._v(" "),s("h2",{attrs:{id:"vue-组件通信"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-组件通信"}},[t._v("#")]),t._v(" Vue 组件通信")]),t._v(" "),s("ol",[s("li",[t._v("父子间通信\n"),s("ol",[s("li",[t._v("props、$on/$emit")]),t._v(" "),s("li",[t._v("$parent、$children")]),t._v(" "),s("li",[t._v("ref")])])]),t._v(" "),s("li",[t._v("多层级通信\n"),s("ol",[s("li",[t._v("provide/inject")]),t._v(" "),s("li",[t._v("Even Bus")]),t._v(" "),s("li",[t._v("Vuex")])])]),t._v(" "),s("li",[t._v("跨组件通信\n"),s("ol",[s("li",[t._v("Even Bus")]),t._v(" "),s("li",[t._v("Vuex")])])])]),t._v(" "),s("h2",{attrs:{id:"diff-算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#diff-算法"}},[t._v("#")]),t._v(" diff 算法")]),t._v(" "),s("h3",{attrs:{id:"注意点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意点"}},[t._v("#")]),t._v(" 注意点")]),t._v(" "),s("ol",[s("li",[t._v("只进行同层比较，不会进行跨层比较。")]),t._v(" "),s("li",[t._v("只有是同一个虚拟节点才会进行精细化比较，否则就是暴力删除旧的，插入新的。")]),t._v(" "),s("li",[t._v("最小量更新，key 很重要。这个可以是这个节点的唯一标识，告诉 diff 算法，在更改前后它们是同一个DOM节点。")])]),t._v(" "),s("h2",{attrs:{id:"vue-性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-性能优化"}},[t._v("#")]),t._v(" Vue 性能优化")]),t._v(" "),s("h3",{attrs:{id:"编码优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编码优化"}},[t._v("#")]),t._v(" 编码优化：")]),t._v(" "),s("ul",[s("li",[t._v("事件代理")]),t._v(" "),s("li",[t._v("keep-alive")]),t._v(" "),s("li",[t._v("拆分组件")]),t._v(" "),s("li",[t._v("key 保证唯一性")]),t._v(" "),s("li",[t._v("路由懒加载、异步组件")]),t._v(" "),s("li",[t._v("防抖节流")])]),t._v(" "),s("h3",{attrs:{id:"vue-加载性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-加载性能优化"}},[t._v("#")]),t._v(" Vue 加载性能优化")]),t._v(" "),s("ul",[s("li",[t._v("第三方模块按需导入（ babel-plugin-component ）")]),t._v(" "),s("li",[t._v("图片懒加载")])]),t._v(" "),s("h3",{attrs:{id:"用户体验"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户体验"}},[t._v("#")]),t._v(" 用户体验")]),t._v(" "),s("ul",[s("li",[t._v("app-skeleton  骨架屏")]),t._v(" "),s("li",[t._v("pwa")])]),t._v(" "),s("h2",{attrs:{id:"mixins-混入注意点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mixins-混入注意点"}},[t._v("#")]),t._v(" mixins 混入注意点")]),t._v(" "),s("ol",[s("li",[t._v("同名钩子函数将合并为一个数组，因此都将被调用。另外，"),s("strong",[t._v("混入对象的钩子将在组件自身钩子之前调用")]),t._v("。")]),t._v(" "),s("li",[t._v("值为对象的选项，例如 "),s("code",[t._v("methods")]),t._v("、"),s("code",[t._v("components")]),t._v(" 和 "),s("code",[t._v("directives")]),t._v("，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/6940454764421316644?utm_source=gold_browser_extension",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue3.0 新特性以及使用经验总结"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);