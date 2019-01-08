Vue.js 中我们可以采用简洁的模板语法来声明式的将数据渲染为 DOM：

```html
<div id="app">
  {{ message }}
</div>
```

```js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

最终它会在页面上渲染出 `Hello Vue`。

下面我们将解决的一个问题就是：<span style="background:yellow">模板变量是如何渲染成最终DOM的？</span>

## new vue 发生了什么

1. 定义uid
2. 合并options

### initState(vm)

```js
export function initState (vm: Component) {
  vm._watchers = []
  const opts = vm.$options
  if (opts.props) initProps(vm, opts.props)
  if (opts.methods) initMethods(vm, opts.methods)
  if (opts.data) {
    initData(vm)
  } else {
    observe(vm._data = {}, true /* asRootData */)
  }
  if (opts.computed) initComputed(vm, opts.computed)
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch)
  }
}
```

### 初始化data



#### 为啥this.msg就能访问this.data.msg？

```js
export function proxy (target: Object, sourceKey: string, key: string) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  }
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}
```



当执行new Vue是时候实际上是执行了init方法，init方法会做一堆初始化的工作。首先是对options做合并，然后进行一系列初始化方法，最后是$mount进行挂载。

```js
initLifecycle(vm)
initEvents(vm)
initRender(vm)
callHook(vm, 'beforeCreate')
initInjections(vm) // resolve injections before data/props
initState(vm)
initProvide(vm) // resolve provide after data/props
callHook(vm, 'created')
```

我们主要看了initState的内容，initState实际上分别初始化了下面5个选项：

1. props
2. methods
3. data
4. computed
5. watch

然后又看了data的初始化过程，明白了为什么this.msg就能访问this.data.msg，是因为使用proxy代理了一个get/set方法；还知道了data初始化的时候进行了observer处理，即响应式处理。响应式的过程会在后面介绍。

初始的最后一个是挂载，那么挂载做了什么事情呢？

## $mount 做了什么

使用compiler的话入口文件是entry-runtime-with-compiler.js，

entry-runtime-with-compiler.js实际上就只做了一件事，就是重新定义一下$mount方法。vue首先缓存Vue原型上的$mount，然后：

1. 解析el
2. 如果没有显示定义render，就解析template，生成render函数。因为vue实际上是只认识render函数的，template也是必须先转化成render函数才进行下一步调用的。
3. 现在处理完template就得到了render函数，然后在调用缓存的mount方法

缓存的mount方法其实就是runtime-only用的挂载方法，是在runtime/index中定义的。然后返回mountComponent的结果。

