(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{332:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"vue的渲染过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue的渲染过程"}},[t._v("#")]),t._v(" vue的渲染过程")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      attrs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello Vue'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"import-vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-vue"}},[t._v("#")]),t._v(" import vue")]),t._v(" "),a("p",[t._v("import vue的时候，发生了什么？")]),t._v(" "),a("p",[t._v("这问题非常简单：声明了Vue的构造函数，为后面 new Vue做准备。")]),t._v(" "),a("p",[t._v("第一步，src/core/instance/index.js里定义了Vue的构造函数，然后执行5个mixin")]),t._v(" "),a("ol",[a("li",[t._v("initMixin：挂_init()方法")]),t._v(" "),a("li",[t._v("stateMixin：挂$set属性，$props属性（这两个属性是访问器属性，只在开发可以set）挂$set, $delete, $watch方法")]),t._v(" "),a("li",[t._v("eventsMixin：挂$on, $once, $off, $emit方法")]),t._v(" "),a("li",[t._v("lifecycleMixin：挂_update, $forceUpdate, $destroy方法")]),t._v(" "),a("li",[t._v("renderMixin：挂$nextTick, _render方法")])]),t._v(" "),a("p",[t._v("第二步，src/core/instance/index.js里的Vue被src\\core\\index.js引用")]),t._v(" "),a("ol",[a("li",[t._v("初始化全局API，即调用initGlobalAPI(Vue)，initGlobalAPI在src\\core\\global-api\\index.js中定义\n"),a("ol",[a("li",[t._v("初始化全局配置Vue.config属性")]),t._v(" "),a("li",[t._v("挂Vue.util")]),t._v(" "),a("li",[t._v("挂Vue.set, Vue.delete, Vue.nextTick")]),t._v(" "),a("li",[t._v("Vue.options的初始化工作\n"),a("ol",[a("li",[t._v("Vue.options.components，Vue.options.directives，Vue.options.filtes = Object.create(null)")]),t._v(" "),a("li",[t._v("Vue.options._base = Vue")]),t._v(" "),a("li",[t._v("添加内置组件，目前就一个keep-alive")]),t._v(" "),a("li",[t._v("初始化全局方法use，mixin，extend，全局方法component，directive，filter")])])])])]),t._v(" "),a("li",[t._v("挂$isServer，$ssrContext，FunctionalRenderContext属性，和服务端渲染相关，暂时忽略其作用")])]),t._v(" "),a("p",[t._v("第三步，src\\platforms\\web\\runtime\\index.js 引用src\\core\\index.js")]),t._v(" "),a("ol",[a("li",[t._v("关于全局config的，平台directives和componts的一些配置")]),t._v(" "),a("li",[t._v("挂__patch__方法")]),t._v(" "),a("li",[t._v("挂$mount方法")])]),t._v(" "),a("p",[t._v("第四步，如果是使用 Runtime + Compiler 版本的vue，会调用src\\platforms\\web\\entry-runtime-with-compiler.js，包装一下$mount方法。主要是把template解析成render函数")]),t._v(" "),a("h2",{attrs:{id:"this-init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this-init"}},[t._v("#")]),t._v(" this._init")]),t._v(" "),a("p",[t._v("import vue的过程大概看完了，然后当我们new Vue的时候，我们会执行")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("根据传入的options实例化一个Vue对象，看看_init干了些什么")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("设uid")])]),t._v(" "),a("li",[a("p",[t._v("merge options")])]),t._v(" "),a("li",[a("p",[t._v("根据开发环境还是生产环境决定是否给vm加代理")])]),t._v(" "),a("li",[a("p",[t._v("初始化工作开始：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("​    initLifecycle(vm)")]),t._v(" "),a("p",[t._v("​    initEvents(vm)")]),t._v(" "),a("p",[t._v("​    initRender(vm)")]),t._v(" "),a("p",[t._v("​    callHook(vm, 'beforeCreate')")]),t._v(" "),a("p",[t._v("​    initInjections(vm) // resolve injections before data/props")]),t._v(" "),a("p",[t._v("​    initState(vm)")]),t._v(" "),a("p",[t._v("​    initProvide(vm) // resolve provide after data/props")]),t._v(" "),a("p",[t._v("​    callHook(vm, 'created')")])])])]),t._v(" "),a("li",[a("p",[t._v("调用vm.$mount(vm.$options.el)，这个东西执行完以后挂载就完事儿了，所以下面的任务就是搞清楚挂载的过程")])])]),t._v(" "),a("h2",{attrs:{id:"vm-mount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-mount"}},[t._v("#")]),t._v(" vm.$mount")]),t._v(" "),a("p",[t._v("vm.$mount接收2个参数，一个是要挂载的dom，叫作el，一个是hydrating，和ssr相关，在非ssr情况下hydrating默认为false")]),t._v(" "),a("p",[t._v("vm.$mount本质上是执行的mountComponent函数，该函数在src/core/instance/lifecycle.js中定义。mountComponent函数接收3个参数：当前正在处理的Vue实例，要挂载的元素el，hydrating。看一下该函数做了什么事：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("给vm挂$el，这样我们能够访问dom节点了")])]),t._v(" "),a("li",[a("p",[t._v("挂vm.$options.render，这个时候render就是一个空的VNode")])]),t._v(" "),a("li",[a("p",[t._v("callHook(vm, 'beforeMount')")])]),t._v(" "),a("li",[a("p",[t._v("定义updateComponent函数")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("updateComponent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hydrating"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("实例化一个渲染watcher，将updateComponent作为参数传进去，在合适的时机调用updateComponent。")]),t._v(" "),a("p",[t._v("watcher的定义在src\\core\\observer\\watcher.js中，因为这里updateComponent是函数，所以逻辑会走到第80行")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" expOrFn\n")])])]),a("p",[t._v("这个this.getter会在什么时候调用呢？请看第106行")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("this.getter被this.get方法调用，constructor函数初始化的最后一步就是执行this.get()（第93~95行）")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lazy\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("执行上面提到的this.get()实际上就是执行updateComponent函数，也就是执行")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hydrating"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),a("p",[t._v("vm._render()实际上会生成一个虚拟dom，然后vm._update将这个虚拟dom挂载到真实dom上，也就是options的el上。下面来看看虚拟dom是怎么生成的")]),t._v(" "),a("h2",{attrs:{id:"vm-render"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-render"}},[t._v("#")]),t._v(" vm._render")]),t._v(" "),a("p",[t._v("vm._render不需要参数，所以需要的东西都在Vue实例vm的属性上，在src\\core\\instance\\render.js定义")]),t._v(" "),a("p",[t._v("其他的先不看，vm._render最主要的是执行第75行")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("vnode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_renderProxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$createElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("vm._renderProxy暂时不用过多考虑，就是对vm做了一层代理，这东西是在initProxy(vm)的时候加上去的，initProxy是在src\\core\\instance\\proxy.js里定义的，主要是用了ES6的Proxy对象，做了一些警告代理。")]),t._v(" "),a("p",[t._v("vm.$createElement的定义是在src\\core\\instance\\render.js的第18行开始的initRender函数里定义的，看第30行和第33行：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("_c")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 30行")]),t._v("\nvm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("$createElement")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 33行")]),t._v("\n")])])]),a("p",[t._v("vm._c实际上是被编译生成的render函数执行的，而vm.$createElement是给手写render函数的时候执行的。我们上面的例子是手写的render函数，所以执行的是vm.$createElement")]),t._v(" "),a("p",[t._v("那么这个render是什么呢？对于我们这种手写render函数的情况，这个render就是我们手写的render")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    attrs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("可以看到第75行的执行结果就是createElement的执行结果，返回一个VNode，createElement是在src\\core\\vdom\\create-element.js中定义的。下面我们主要看看这个createElement")]),t._v(" "),a("h2",{attrs:{id:"createelement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createelement"}},[t._v("#")]),t._v(" createElement")]),t._v(" "),a("p",[a("code",[t._v("createElement")]),t._v(" 方法实际上是对 "),a("code",[t._v("_createElement")]),t._v(" 方法的封装，它允许传入的参数更加灵活，在处理这些参数后，调用真正创建 VNode 的函数 "),a("code",[t._v("_createElement")])]),t._v(" "),a("p",[a("code",[t._v("_createElement")]),t._v(" 方法有 5 个参数：")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("context")]),t._v(" 表示 VNode 的上下文环境，它是 "),a("code",[t._v("Component")]),t._v(" 类型；")]),t._v(" "),a("li",[a("code",[t._v("tag")]),t._v("表示标签，它可以是一个字符串，也可以是一个 "),a("code",[t._v("Component")]),t._v("；")]),t._v(" "),a("li",[a("code",[t._v("data")]),t._v(" 表示 VNode 的数据，它是一个 "),a("code",[t._v("VNodeData")]),t._v(" 类型，可以在 "),a("code",[t._v("flow/vnode.js")]),t._v(" 中找到它的定义，这里先不展开说；")]),t._v(" "),a("li",[a("code",[t._v("children")]),t._v(" 表示当前 VNode 的子节点，它是任意类型的，它接下来需要被规范为标准的 VNode 数组；")]),t._v(" "),a("li",[a("code",[t._v("normalizationType")]),t._v(" 表示子节点规范的类型，类型不同规范的方法也就不一样，它主要是参考 "),a("code",[t._v("render")]),t._v(" 函数是编译生成的还是用户手写的。")])]),t._v(" "),a("p",[a("strong",[t._v("接下来主要分析 2 个重点的流程 ——")])]),t._v(" "),a("ol",[a("li",[a("code",[t._v("children")]),t._v(" 的规范化")]),t._v(" "),a("li",[t._v("VNode 的创建。")])]),t._v(" "),a("h2",{attrs:{id:"children-的规范化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#children-的规范化"}},[t._v("#")]),t._v(" children 的规范化")]),t._v(" "),a("p",[t._v("children 规范化函数在 "),a("code",[t._v("src/core/vdom/helpers/normalzie-children.js")]),t._v(" 中：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The template compiler attempts to minimize the need for normalization by")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// statically analyzing the template at compile time.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For plain HTML markup, normalization can be completely skipped because the")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// generated render function is guaranteed to return Array<VNode>. There are")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// two cases where extra normalization is needed:")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. When the children contains components - because a functional component")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// may return an Array instead of a single root. In this case, just a simple")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// normalization is needed - if any child is an Array, we flatten the whole")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// because functional components already normalize their own children.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("simpleNormalizeChildren")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" children\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. When the children contains constructs that always generated nested Arrays,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// e.g. <template>, <slot>, v-for, or when the children is provided by user")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// with hand-written render functions / JSX. In such cases a full normalization")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// is needed to cater to all possible types of children values.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("normalizeChildren")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("Array"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isPrimitive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTextVNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("normalizeArrayChildren")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"vnode-的创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vnode-的创建"}},[t._v("#")]),t._v(" VNode 的创建")]),t._v(" "),a("p",[t._v("这里先对 "),a("code",[t._v("tag")]),t._v(" 做判断")]),t._v(" "),a("ol",[a("li",[t._v("如果是 "),a("code",[t._v("string")]),t._v(" 类型：\n"),a("ol",[a("li",[t._v("如果是内置的一些节点，若是则直接创建一个普通 VNode")]),t._v(" "),a("li",[t._v("如果是为已注册的组件名，则通过 "),a("code",[t._v("createComponent")]),t._v(" 创建一个组件类型的 VNode")]),t._v(" "),a("li",[t._v("否则创建一个未知的标签的 VNode。")])])]),t._v(" "),a("li",[t._v("如果是 一个 "),a("code",[t._v("Component")]),t._v(" 类型，则直接调用 "),a("code",[t._v("createComponent")]),t._v(" 创建一个组件类型的 VNode 节点。"),a("br"),t._v("对于 "),a("code",[t._v("createComponent")]),t._v(" 创建组件类型的 VNode 的过程，我们之后会去介绍，本质上它还是返回了一个 VNode。")])]),t._v(" "),a("h2",{attrs:{id:"vm-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-update"}},[t._v("#")]),t._v(" vm._update")]),t._v(" "),a("p",[t._v("vm._render()实际上会生成一个虚拟dom，然后vm._update将这个虚拟dom挂载到真实dom上，也就是options的el上。前面我们大致了解了虚拟dom的创建过程，接下来看看虚拟dom是如何挂载到真实dom上的")]),t._v(" "),a("p",[t._v("vm._update是在lifecycleMixin函数执行时挂上去的，它的定义从src\\core\\instance\\lifecycle.js的第59行开始")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("_update")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("vnode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" VNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hydrating"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Component "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" prevEl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" prevVnode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_vnode\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" restoreActiveInstance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setActiveInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_vnode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vnode\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Vue.prototype.__patch__ is injected in entry points")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// based on the rendering backend used.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("prevVnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// initial render")]),t._v("\n      vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__patch__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hydrating"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* removeOnly */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__patch__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prevVnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("restoreActiveInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prevEl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      prevEl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__vue__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__vue__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$parent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("prevEl，prevVnode，restoreActiveInstance是数据更新时用的，现在我们是初始化render阶段，所以逻辑进入第69行")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__patch__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hydrating"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("vm.__patch__是调用createPatchFunction的结果。createPatchFunction是一个高阶函数，返回的结果是一个patch函数，实际上这里做了一个相当于是适配器的工作。我们看看createPatchFunction的定义，在src\\core\\vdom\\patch.js第70行开始，是一个700多行的大函数。他接受一个backend对象作为参数，这个对象有两个属性，一个是对node的操作函数集合nodeOps，一个是modules，也是和平台相关的一些内置资源如refs，directives，transition这些东西，他们会有一些回调函数要处理，createPatchFunction的时候就都会处理了。")]),t._v(" "),a("p",[t._v("回到patch函数本身，它接收 4个参数")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("oldVnode")]),t._v(" 表示旧的 VNode 节点，它也可以不存在或者是一个 DOM 对象；")]),t._v(" "),a("li",[a("code",[t._v("vnode")]),t._v(" 表示执行 "),a("code",[t._v("_render")]),t._v(" 后返回的 VNode 的节点；")]),t._v(" "),a("li",[a("code",[t._v("hydrating")]),t._v(" 表示是否是服务端渲染；")]),t._v(" "),a("li",[a("code",[t._v("removeOnly")]),t._v(" 是给 "),a("code",[t._v("transition-group")]),t._v(" 用的，之后会介绍。")])])])}],!1,null,null,null);s.default=e.exports}}]);