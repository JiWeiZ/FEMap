# 响应式原理

实现下列功能：

```js
const state = {
    a: 1
    b: 10
}
```

如何让a变化的时候，b始终是a的10倍？也就是说像下面这样：

```js
state.a = 2 // 打印"state.b is 20"
state.a = 3 // 打印"state.b is 30"
```

这其实就是vue的响应式原理，vue依赖Object.defineProperty的get和set函数完成这一功能。

## Object.defineProperty

### Goal

实现一个convert函数完成下面的功能

``` js
const obj = { foo: 123 }
convert(obj)

obj.foo // should log: 'getting key "foo": 123'
obj.foo = 234 // should log: 'setting key "foo" to: 234'
obj.foo // should log: 'getting key "foo": 234'
```

### solution

```js
<script>
function convert (obj) {
  // Implement this!
  Object.keys(obj).forEach(key => {
    let internalValue = obj[key]
    Object.defineProperty(obj, key, {
      get () {
        console.log(`getting key "${key}": ${internalValue}`)
        return internalValue
      },
      set (newValue) {
        internalValue = newValue
        console.log(`setting key "${key}" to: ${newValue}`)
      }
    })
  })
}
</script>
```

## 依赖追踪

1.**watch和computed都是以Vue的依赖追踪机制为基础**的，它们都试图处理这样一件事情：当某一个数据（称它为依赖数据）发生变化的时候，所有依赖这个数据的“相关”数据“自动”发生变化，也就是自动调用相关的函数去实现数据的变动。

2.对methods:methods里面是用来定义函数的，很显然，它需要手动调用才能执行。而不像watch和computed那样，“自动执行”预先定义的函数

### Goal

完成如下代码，使输出符合预期：

- Create a `Dep` class with two methods: `depend` and `notify`.（创建一个类Dep，有2个方法：depend和notify）
  - Dep类代表依赖
  - depend 的作用是注册依赖
  - notify 的作用是执行依赖的订阅者：当前依赖改变了，之前的所有依赖Dep这个类的变量（比如函数、表达式等等）需要重新执行，也就是说通知他们Dep发生了改变（依赖的订阅者）
- Create an `autorun` function that takes an updater function.（创建一个autorun函数，这个autorun函数接收一个更新函数作为参数）
- Inside the updater function, you can explicitly depend on an instance of `Dep` by calling `dep.depend()`（在更新函数内部可以显示调用`dep.depend()`）
- Later, you can trigger the updater function to run again by calling `dep.notify()`.（之后可以显示调用`dep.notify()`触发更新函数）

### solution

```js
class Dep {
  // Implement this!
}

function autorun (update) {
  // Implement this!
}
const dep = new Dep()
const update1 = () => {
    dep.depend()
    console.log('111')
}
const update2 = () => {
    dep.depend()
    console.log('222')
}
autorun(update1)
autorun(update2)
dep.notify()
// 期望输出：
// 111
// 222
// 111
// 222
```

首先声明了一个全局变量activeUpdate，JS是一个单线程语言，无论何时只有一个函数在运行。如果我们创建了一个函数它可以mark自身是否在运行，那么我们在任何时候都可以很轻松地知道这个函数是否在运行，也就是说知道是否在这个函数内部。

然后我们在autorun内部创建一个函数wrappedUpate，在wrappedUpate里执行update函数。我们想要知道的是否在这个update函数内部，所以我们这么做：

```js
class Dep {
  // Implement this!
}

let activeUpdate

function autorun (update) {
  // Implement this!
    function wrappedUpate () {
        activeUpdate = wrappedUpate
        unpdate()
        activeUpdate = null
    }
    wrappedUpate()
}

const dep = new Dep()
const update1 = () => {
    dep.depend()
    console.log('111')
}
const update2 = () => {
    dep.depend()
    console.log('222')
}
autorun(update1)
autorun(update2)
dep.notify()
// 期望输出：
// 111
// 222
// 111
// 222
```

只要我们运行了wrappedUpate函数，update函数就会运行，在update函数内部我们会调用dep.depend()，这个dep.depend()将会访问全局变量activeUpdate，所以我们在dep.depend()访问activeUpdate之前将其赋值为wrappedUpdate。

这样一来，如果activeUpdate不是空的话，就把activeUpdate指向的变量作为dep的依赖订阅者，完成注册依赖；而notify方法的作用就是把所有的订阅者执行一遍。相应的，Dep需要一个属性存储它的所有订阅者，我们采用Set来存储。

```js
class Dep {
  // Implement this!
    constructor () {
        this.subscribers = new Set()
    }
    depend () {
        if (activeUpdate) {
            // 将当前active update注册为依赖订阅者
            this.subscribers.add(activeUpdate)
        }
    }
    notify () {
        // 执行所有的订阅者
        this.subscribers.forEach(sub => sub())
    }
}

let activeUpdate

function autorun (update) {
  // Implement this!
    function wrappedUpate () {
        activeUpdate = wrappedUpate
        update()
        activeUpdate = null
    }
    wrappedUpate()
}

const dep = new Dep()
const update1 = () => {
    dep.depend()
    console.log('111')
}
const update2 = () => {
    dep.depend()
    console.log('222')
}
autorun(update1)
autorun(update2)
dep.notify
```

## 观察者Observer

现在我们把1.1和1.2结合起来，解决最初提出的问题

### Goal

Combine the previous two functions, renaming `convert()` to `observe()` and keeping `autorun()`:

- `observe()` converts the properties in the received object and make them
  reactive. For each converted property, it gets assigned a `Dep` instance which keeps track of a list of subscribing update functions, and triggers them to re-run when its setter is invoked.
- `autorun()` takes an update function and re-runs it when properties that the
  update function subscribes to have been mutated. An update function is said
  to be "subscribing" to a property if it relies on that property during its
  evaluation.

They should support the following usage:

``` js
const state = {
    a: 1
}

observe(state)
computed(() => {
    state.b = state.a * 10
    console.log(`state.b is: ${state.b}`)
})

state.a = 2
state.a = 3
```

### Solution

```js
class Dep {
  constructor () {
    this.subscribers = new Set()
  }
  depend () {
    if (activeUpate) {
      this.subscribers.add(activeUpate)
    }
  }
  notify () {
    this.subscribers.forEach(sub => sub())
  }
}

let activeUpate

function observe (obj) {
  // Implement this!
  let dep = new Dep()
  Object.keys(obj).forEach(key => {
    let internalValue = obj[key]
    Object.defineProperty(obj, key, {
      get () {
        dep.depend()
        return internalValue
      },
      set (newValue) {
        let changed = internalValue !== newValue
        internalValue = newValue
        if (changed) {
          dep.notify()
        }
      }
    })
  })
}

function computed (update) {
  // Implement this!
  function wrapperUpdate () {
    activeUpate = wrapperUpdate
    update()
    activeUpate = null
  }
  wrapperUpdate()
}
```

我们只是把1.1中的convert函数改名为observer，autorun改名computed，然后在get和set函数中调用dep.depend()和dep.notify()，剩下的都是前面讲过的代码了，不必多说。
