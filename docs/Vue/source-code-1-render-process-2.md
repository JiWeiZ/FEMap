# vue的渲染过程

```js
var app = new Vue({
  el: '#app',
  render (createElement) {
    return createElement('div', {
      attrs: {
        id: 'app'
      }
    }, this.message)
  },
  data () {
    return {
      message: 'Hello Vue'
    }
  }
})
```

## import vue

import vue的时候，发生了什么？

这问题非常简单：声明了Vue的构造函数，为后面 new Vue做准备。

第一步，src/core/instance/index.js里定义了Vue的构造函数，然后执行5个mixin

1. initMixin：挂\_init()方法
2. stateMixin：挂$set属性，$props属性（这两个属性是访问器属性，只在开发可以set）挂$set, $delete, $watch方法
3. eventsMixin：挂$on, $once, $off, $emit方法
4. lifecycleMixin：挂\_update, $forceUpdate, $destroy方法
5. renderMixin：挂$nextTick, \_render方法

第二步，src/core/instance/index.js里的Vue被src\core\index.js引用

1. 初始化全局API，即调用initGlobalAPI(Vue)，initGlobalAPI在src\core\global-api\index.js中定义
   1. 初始化全局配置Vue.config属性
   2. 挂Vue.util
   3. 挂Vue.set, Vue.delete, Vue.nextTick
   4. Vue.options的初始化工作
      1. Vue.options.components，Vue.options.directives，Vue.options.filtes = Object.create(null)
      2. Vue.options._base = Vue
      3. 添加内置组件，目前就一个keep-alive
      4. 初始化全局方法use，mixin，extend，全局方法component，directive，filter
2. 挂$isServer，$ssrContext，FunctionalRenderContext属性，和服务端渲染相关，暂时忽略其作用

第三步，src\platforms\web\runtime\index.js 引用src\core\index.js

1. 关于全局config的，平台directives和componts的一些配置
2. 挂\_\_patch\_\_方法
3. 挂$mount方法

第四步，如果是使用 Runtime + Compiler 版本的vue，会调用src\platforms\web\entry-runtime-with-compiler.js，包装一下$mount方法。主要是把template解析成render函数



## this._init

import vue的过程大概看完了，然后当我们new Vue的时候，我们会执行

```js
this._init(options)
```

根据传入的options实例化一个Vue对象，看看\_init干了些什么

1. 设uid

2.  merge options

3. 根据开发环境还是生产环境决定是否给vm加代理

4. 初始化工作开始：

   1. ​    initLifecycle(vm)

      ​    initEvents(vm)

      ​    initRender(vm)

      ​    callHook(vm, 'beforeCreate')

      ​    initInjections(vm) // resolve injections before data/props

      ​    initState(vm)

      ​    initProvide(vm) // resolve provide after data/props

      ​    callHook(vm, 'created')

5. 调用vm.$mount(vm.$options.el)，这个东西执行完以后挂载就完事儿了，所以下面的任务就是搞清楚挂载的过程

## vm.$mount

vm.$mount接收2个参数，一个是要挂载的dom，叫作el，一个是hydrating，和ssr相关，在非ssr情况下hydrating默认为false

vm.$mount本质上是执行的mountComponent函数，该函数在src/core/instance/lifecycle.js中定义。mountComponent函数接收3个参数：当前正在处理的Vue实例，要挂载的元素el，hydrating。看一下该函数做了什么事：

1. 给vm挂$el，这样我们能够访问dom节点了

2. 挂vm.$options.render，这个时候render就是一个空的VNode

3. callHook(vm, 'beforeMount')

4. 定义updateComponent函数

   ```js
   updateComponent = () => {
     vm._update(vm._render(), hydrating)
   }
   ```

5. 实例化一个渲染watcher，将updateComponent作为参数传进去，在合适的时机调用updateComponent。

   watcher的定义在src\core\observer\watcher.js中，因为这里updateComponent是函数，所以逻辑会走到第80行

   ```js
   this.getter = expOrFn
   ```

   这个this.getter会在什么时候调用呢？请看第106行

   ```js
   value = this.getter.call(vm, vm)
   ```

   this.getter被this.get方法调用，constructor函数初始化的最后一步就是执行this.get()（第93~95行）

   ```js
   this.value = this.lazy
     ? undefined
   : this.get()
   ```

6. 执行上面提到的this.get()实际上就是执行updateComponent函数，也就是执行

   ```js
   vm._update(vm._render(), hydrating)
   ```

vm.\_render()实际上会生成一个虚拟dom，然后vm.\_update将这个虚拟dom挂载到真实dom上，也就是options的el上。下面来看看虚拟dom是怎么生成的

## vm.\_render

vm.\_render不需要参数，所以需要的东西都在Vue实例vm的属性上，在src\core\instance\render.js定义

其他的先不看，vm.\_render最主要的是执行第75行

```js
vnode = render.call(vm._renderProxy, vm.$createElement)
```

vm.\_renderProxy暂时不用过多考虑，就是对vm做了一层代理，这东西是在initProxy(vm)的时候加上去的，initProxy是在src\core\instance\proxy.js里定义的，主要是用了ES6的Proxy对象，做了一些警告代理。

vm.$createElement的定义是在src\core\instance\render.js的第18行开始的initRender函数里定义的，看第30行和第33行：

```js
vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false) // 30行
vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true) // 33行
```

vm.\_c实际上是被编译生成的render函数执行的，而vm.$createElement是给手写render函数的时候执行的。我们上面的例子是手写的render函数，所以执行的是vm.$createElement

那么这个render是什么呢？对于我们这种手写render函数的情况，这个render就是我们手写的render

```js
render (createElement) {
  return createElement('div', {
    attrs: {
      id: 'app'
    }
  }, this.message)
}
```

可以看到第75行的执行结果就是createElement的执行结果，返回一个VNode，createElement是在src\core\vdom\create-element.js中定义的。下面我们主要看看这个createElement

## createElement

`createElement` 方法实际上是对 `_createElement` 方法的封装，它允许传入的参数更加灵活，在处理这些参数后，调用真正创建 VNode 的函数 `_createElement`

`_createElement` 方法有 5 个参数：

1. `context` 表示 VNode 的上下文环境，它是 `Component` 类型；
2. `tag`表示标签，它可以是一个字符串，也可以是一个 `Component`；
3. `data` 表示 VNode 的数据，它是一个 `VNodeData` 类型，可以在 `flow/vnode.js` 中找到它的定义，这里先不展开说；
4. `children` 表示当前 VNode 的子节点，它是任意类型的，它接下来需要被规范为标准的 VNode 数组；
5. `normalizationType` 表示子节点规范的类型，类型不同规范的方法也就不一样，它主要是参考 `render` 函数是编译生成的还是用户手写的。

**接下来主要分析 2 个重点的流程 ——**

1. `children` 的规范化
2. VNode 的创建。

## children 的规范化

children 规范化函数在 `src/core/vdom/helpers/normalzie-children.js` 中：

```js
// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
export function simpleNormalizeChildren (children: any) {
  for (let i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
export function normalizeChildren (children: any): ?Array<VNode> {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}
```

## VNode 的创建

这里先对 `tag` 做判断

1. 如果是 `string` 类型：
   1. 如果是内置的一些节点，若是则直接创建一个普通 VNode
   2. 如果是为已注册的组件名，则通过 `createComponent` 创建一个组件类型的 VNode
   3. 否则创建一个未知的标签的 VNode。
2. 如果是 一个 `Component` 类型，则直接调用 `createComponent` 创建一个组件类型的 VNode 节点。<br/>对于 `createComponent` 创建组件类型的 VNode 的过程，我们之后会去介绍，本质上它还是返回了一个 VNode。

## vm._update

vm.\_render()实际上会生成一个虚拟dom，然后vm.\_update将这个虚拟dom挂载到真实dom上，也就是options的el上。前面我们大致了解了虚拟dom的创建过程，接下来看看虚拟dom是如何挂载到真实dom上的

vm.\_update是在lifecycleMixin函数执行时挂上去的，它的定义从src\core\instance\lifecycle.js的第59行开始

```js
 Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) {
    const vm: Component = this
    const prevEl = vm.$el
    const prevVnode = vm._vnode
    const restoreActiveInstance = setActiveInstance(vm)
    vm._vnode = vnode
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */)
    } else {
      vm.$el = vm.__patch__(prevVnode, vnode)
    }
    restoreActiveInstance()
    if (prevEl) {
      prevEl.__vue__ = null
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm
    }
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el
    }
  }
```

prevEl，prevVnode，restoreActiveInstance是数据更新时用的，现在我们是初始化render阶段，所以逻辑进入第69行

```js
vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false)
```

vm.\_\_patch\_\_是调用createPatchFunction的结果。createPatchFunction是一个高阶函数，返回的结果是一个patch函数，实际上这里做了一个相当于是适配器的工作。我们看看createPatchFunction的定义，在src\core\vdom\patch.js第70行开始，是一个700多行的大函数。他接受一个backend对象作为参数，这个对象有两个属性，一个是对node的操作函数集合nodeOps，一个是modules，也是和平台相关的一些内置资源如refs，directives，transition这些东西，他们会有一些回调函数要处理，createPatchFunction的时候就都会处理了。

回到patch函数本身，它接收 4个参数

1. `oldVnode` 表示旧的 VNode 节点，它也可以不存在或者是一个 DOM 对象；
2. `vnode` 表示执行 `_render` 后返回的 VNode 的节点；
3. `hydrating` 表示是否是服务端渲染；
4. `removeOnly` 是给 `transition-group` 用的，之后会介绍。

