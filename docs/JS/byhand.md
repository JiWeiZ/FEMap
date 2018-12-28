# 手写系列

## 手写new

myNew函数经历4步：

1. 设置prototype（确保instanceof正确）
2. object.create（实现继承）
3. apply构造函数（调用构造函数）
4. return（返回）

```js
function myNew (fn) {
    return function f (...args) {
        f.prototype = fn.prototype // 确保instanceof正确
        let obj = Object.create(fn.prototype) // 创建一个新对象
        fn.apply(obj, args) // 设置this，调用构造函数
        return obj // 返回这个对象
    }
}
```

## 手写object.create

```js
function myCreate(obj) {
    function F () {}
    F.prototype = obj
    return new F()
}
```

## 手写bind

```js
Function.prototype.myBind = function (context, ...argsPre) {
    return (...args) => {
        return this.call(context, ...argsPre, ...args)
    }
}
```

## 手写ajax

```js
function ajax(url, data = {}, method = 'GET') {
    return new Promise((resolve, reject) => {
        let xhr = window.XMLHttpRequest ? 
            new XMLHttpRequest() : new window.ActiveXObject('Microsoft.XMLHTTP')
        let sendData
        
        if (method === 'GET') {
            xhr.open('GET', url, true)
            xhr.send(null)
        } else if (method === 'POST') {
            xhr.open('POST', url, true)
            xhr.withCredentials = true // 指定该请求发送凭据（cookie，HTTP认证及SSL证明等）
            sendData = JSON.stringify(data)
            xhr.setRequestHeader('Content-type', 'application/json')
            // 不用json也可以
        	// sendData = parseString(data)
        	// xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencode')
            xhr.send(sendData)
        } else if (method === "POSTDATA") {
            xhr.open('POST', url, true)
            xhr.send(data)
        }
        
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    let res = xhr.response
                    if (typeof res !== 'object') {
                        res = JSON.parse(res)
                    }
                    resolve(res)
                } else {
                    reject(xhr)
                }
            } 
        }
        
    })
}
// PS: 上面用到的解析对象的函数
// data属性值只能是string，数字，数组和对象，并且数组和对象的元素都是基本类型
function parseString (data) {
  return Object.entries(data).map(e => {
    if (e[1] instanceof Array) {
      return e[1].map((item, index) => `${e[0]}[${index}]=${item}`).join('&')
    } else if (e[1] instanceof Object) {
      return Object.entries(e[1]).map(item => `${e[0]}[${item[0]}]=${item[1]}`).join('&')
    } else {
      return `${e[0]}=${e[1]}`
    }
  }).join('&')
}
```

## 手写Promise

先来实现一个简易版的promise，然后实现一个符合[Promises/A+规范](http://www.ituring.com.cn/article/66566)的promise

### 简易版Promise

```js
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
  const self = this
  self.state = PENDING
  self.value = null
  self.resolvedCallbacks = []
  self.rejectedCallbacks = []
  // 待实现resolve
  // 待实现reject
  // 待执行fn
}
MyPromise.prototype.then = function () {...} // 待实现then
```

简易版的promise有4个属性和1个方法：

4个属性：

1. 状态：self.state
2. 值：self.value，用来保存resolve或reject传入的值
3. 接受回调队列：self.resolvedCallbacks
4. 拒绝回调队列：self.rejectedCallbacks

1个方法：then

简易版的promise实际上共做了这4件事：

1. 初始化4个属性
2. 声明resolve和reject
3. 执行 `Promise` 传入的函数fn
4. 定义then方法

首先，promise构造函数接受一个函数fn作为参数，并且要求fn必须有2个参数，一个是resolve，一个是reject。resolve和reject功能类似，就是在状态为“等待”时，将promise的状态变为“接受”或“拒绝”，然后将传入的值赋给promise.value，最后依次执行回调队列。

```js
function resolve (value) {
  if (self.state === PENDING) {
    self.state = RESOLVED
    self.value = value
    self.resolvedCallbacks.map(cb => cb(self.value))
  }
}

function reject (value) {
  if (self.state === PENDING) {
    self.state = REJECTED
    self.value = value
    self.rejectedCallbacks.map(cb => cb(self.value))
  }
}
```

执行fn的部分也很简单，由于执行函数过程中可能遇到错误，所以需要捕获错误并且执行 `reject` 函数

```js
try {
  fn(resolve, reject)
} catch (e) {
  reject(e)
}
```

最后来实现then方法

```js
MyPromise.prototype.then = function(onFulfilled, onRejected) {
  const self = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : r => {throw r}

  if (self.state === PENDING) {
    self.resolvedCallbacks.push(onFulfilled)
    self.rejectedCallbacks.push(onRejected)
  }

  if (self.state === RESOLVED) {
    onFulfilled(self.value)
  }

  if (self.state === REJECTED) {
    onRejected(self.value)
  }
}
```

我们知道then方法接收2个可选参数onFulfilled和onRejected，因为是可选的，所以我们需要给它们赋默认值。then方法在promise的3种状态下执行3种策略：

1. promise状态是pending：将onFulfilled和onRejected分别push到接收回调队列和拒绝回调队列
2. promise状态是resolved：执行onFulfilled(self.value)
3. promise状态是rejected：执行onRejected(self.value)

最后贴一下完整的代码

```js
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
  const self = this
  self.state = PENDING
  self.value = null
  self.resolvedCallbacks = []
  self.rejectedCallbacks = []

  function resolve (value) {
    if (self.state === PENDING) {
      self.state = RESOLVED
      self.value = value
      self.resolvedCallbacks.map(cb => cb(self.value))
    }
  }

  function reject (value) {
    if (self.state === PENDING) {
      self.state = REJECTED
      self.value = value
      self.rejectedCallbacks.map(cb => cb(self.value))
    }
  }

  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
  const self = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : r => throw r

  if (self.state === PENDING) {
    self.resolvedCallbacks.push(onFulfilled)
    self.rejectedCallbacks.push(onRejected)
  }

  if (self.state === RESOLVED) {
    onFulfilled(self.value)
  }

  if (self.state === REJECTED) {
    onRejected(self.value)
  }
}
```

### 符合 Promise/A+ 的 Promise

先来改造一下resolve和reject

```js
function resolve(value) {
  if (value instanceof MyPromise) {
    return value.then(resolve, reject)
  }
  setTimeout(() => {
    if (self.state === PENDING) {
      self.state = RESOLVED
      self.value = value
      self.resolvedCallbacks.map(cb => cb(self.value))
    }
  })
}
function reject(value) {
  setTimeout(() => {
    if (self.state === PENDING) {
      self.state = REJECTED
      self.value = value
      self.rejectedCallbacks.map(cb => cb(self.value))
    }
  })
}
```

1. 如果resolve或reject的是一个promise，就调用这个promise的then方法
2. 为了保证函数执行顺序，需要将两个函数体代码使用 `setTimeout` 包裹起来，将其放在一个宏任务中

接下来继续改造then。因为每个 `then` 函数都需要返回一个新的 `Promise` 对象，所以我们需要新增一个变量 `promise2`保存新的返回对象。

```js
MyPromise.prototype.then = function (onResolved, onRejected) {
  var self = this
  var promise2 // 规范 2.2.7，then 必须返回一个新的 promise
  onResolved = typeof onResolved === 'function' ? onResolved : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : r => throw r

  if (self.currentState === PENDING) {
  }
  
  if (self.currentState === RESOLVED) {
  }

  if (self.currentState === REJECTED) {
  }
};
```

我们先来改造判断等待态的逻辑

```js
if (self.state === PENDING) {
  reutrn (promise2 = new MyPromise((resolve, reject) => {
    self.resolvedCallbacks.push(() => {
      try {
        const x = onFufilled(self.value)
        resolutionProcedure(promise2, x, resolve, reject)
      } catch (r) {
        reject(r)
      }
    })
    
    self.rejectedCallbacks.push(() => {
      try {
        const x = onRejected(self.value)
        resolutionProcedure(promise2, x, resolve, reject)
      } catch (r) {
        reject(r)
      }
    })
  }))
}
```

然后我们改造判断执行态的逻辑

```js
if (self.currentState === RESOLVED) {
  return (promise2 = new MyPromise((resolve, reject) => {
    setTimeout(() => { // 规范 2.2.4
      try {
        const x = onFufilled(self.value)
        resolutionProcedure(promise2, x, resolve, reject)
      } catch (r) {
        reject(r)
      }
    })
  }))
}
if (self.currentState === REJECTED) {
  return (promise2 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      try {
        const x = onRejected(self.value)
        resolutionProcedure(promise2, x, resolve, reject)
      } catch (r) {
        reject(r)
      }
    })
  }))
}
```

规范 2.2.4：`onFulfilled` 和 `onRejected` 只有在执行环境堆栈仅包含**平台代码**时才可被调用。这里的**平台代码**指的是引擎、环境以及 promise 的实施代码。实践中要确保 `onFulfilled` 和 `onRejected` 方法异步执行，且应该在 `then` 方法被调用的那一轮事件循环之后的新执行栈中执行。这个事件队列可以采用“宏任务（macro-task）”机制或者“微任务（micro-task）”机制来实现。由于 promise 的实施代码本身就是平台代码（**译者注：**即都是 JavaScript），故代码自身在处理在处理程序时可能已经包含一个任务调度队列。

**简单的说，规范 2.2.4就是要求`onFulfilled` 和 `onRejected` 必须异步执行**

最后，当然也是最难的一部分，也就是实现兼容多种 `Promise` 的 `resolutionProcedure` 函数

**Promise 解决过程**是一个抽象的操作，其需输入一个 `promise` 和一个值，我们表示为 `[[Resolve]](promise, x)`，如果 `x` 有 `then` 方法且看上去像一个 Promise ，解决程序即尝试使 `promise` 接受 `x` 的状态；否则其用 `x` 的值来执行 `promise` 。这种 thenable 的特性使得 Promise 的实现更具有通用性：只要其暴露出一个遵循 Promise/A+ 协议的 `then` 方法即可；这同时也使遵循 Promise/A+ 规范的实现可以与那些不太规范但可用的实现能良好共存。

```js
function resolutionProcedure(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('Error'))
  }
}
```

规范规定了 `x` 不能与 `promise2` 相等，这样会发生循环引用的问题，比如如下代码

```js
let p = new MyPromise((resolve, reject) => {
  resolve(1)
})
let p1 = p.then(value => {
  return p1
})
```

然后需要判断 `x` 的类型

```js
if (x instanceof MyPromise) {
  x.then(function(value) {
    resolutionProcedure(promise2, value, resolve, reject)
  }, reject)
}
```

创建一个变量 `called` 用于判断是否已经调用过函数，然后判断 `x` 是否为对象或者函数，如果都不是的话，将 `x` 传入 `resolve` 中；如果`x`有then方法但then方法不是函数，也将 `x` 传入 `resolve` 中

```js
let called = false
if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
  try {
    let then = x.then
    if (typeof then === 'function') {
      ...
    } else {
      resolve(x)
    }
  }
} else {
  resolve(x)
}
```

如果x是一个thenable对象，需要将`x`作为函数的作用域 `this` 调用其then方法，并且传递两个回调函数作为参数，第一个参数叫做 `resolvePromise` ，第二个参数叫做 `rejectPromise`，两个回调函数都需要判断是否已经执行过函数，然后进行相应的逻辑

```js
let called = false
if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
  try {
    let then = x.then
    if (typeof then === 'function') {
      let resolvePromise = y => {
        if (called) return
        called = true
        resolutionProcedure(promise2, y, resolve, reject)
      }

      let rejectPromise = e => {
        if (called) return
        called = true
        reject(e)
      }

      then.call(x, resolvePromise, rejectPromise)
    } else {
      resolve(x)
    }
  } catch (e) {
    reject(e)
  }
} else {
  resolve(x)
}
```

最后贴一下完整代码

```js
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
  const self = this
  self.state = PENDING
  self.value = null
  self.resolvedCallbacks = []
  self.rejectedCallbacks = []

  function resolve(value) {
    if (value instanceof MyPromise) {
      return value.then(resolve, reject)
    }
    setTimeout(() => {
      if (self.state === PENDING) {
        self.state = RESOLVED
        self.value = value
        self.resolvedCallbacks.map(cb => cb(self.value))
      }
    })
  }
  function reject(value) {
    setTimeout(() => {
      if (self.state === PENDING) {
        self.state = REJECTED
        self.value = value
        self.rejectedCallbacks.map(cb => cb(self.value))
      }
    })
  }

  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  const self = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r }

  if (self.state === PENDING) {
    reutrn(promise2 = new MyPromise((resolve, reject) => {
      self.resolvedCallbacks.push(() => {
        try {
          const x = onFufilled(self.value)
          resolutionProcedure(promise2, x, resolve, reject)
        } catch (r) {
          reject(r)
        }
      })

      self.rejectedCallbacks.push(() => {
        try {
          const x = onRejected(self.value)
          resolutionProcedure(promise2, x, resolve, reject)
        } catch (r) {
          reject(r)
        }
      })
    }))
  }

  if (self.currentState === RESOLVED) {
    return (promise2 = new MyPromise((resolve, reject) => {
      setTimeout(() => { // 规范 2.2.4
        try {
          const x = onFufilled(self.value)
          resolutionProcedure(promise2, x, resolve, reject)
        } catch (r) {
          reject(r)
        }
      })
    }))
  }

  if (self.currentState === REJECTED) {
    return (promise2 = new MyPromise((resolve, reject) => {
      setTimeout(() => {
        try {
          const x = onRejected(self.value)
          resolutionProcedure(promise2, x, resolve, reject)
        } catch (r) {
          reject(r)
        }
      })
    }))
  }
}

function resolutionProcedure(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('Error'))
  }
  if (x instanceof MyPromise) {
    x.then(function (value) {
      resolutionProcedure(promise2, value, resolve, reject)
    }, reject)
  }
  let called = false
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      let then = x.then
      if (typeof then === 'function') {
        let resolvePromise = y => {
          if (called) return
          called = true
          resolutionProcedure(promise2, y, resolve, reject)
        }

        let rejectPromise = e => {
          if (called) return
          called = true
          reject(e)
        }

        then.call(x, resolvePromise, rejectPromise)
      } else {
        resolve(x)
      }
    } catch (e) {
      reject(e)
    }
  } else {
    resolve(x)
  }
}

module.exports = MyPromise

```

[Promises/A+规范（英文版）](https://promisesaplus.com/)

## 手写map

```js
Array.prototype._map = function (fn, thisArg) {
    thisArg = thisArg || this
    if (typeof fn !== 'function') throw TypeError("fn is not a function")
    let res = []
    for(let i = 0; i < this.length;i++) {
        res.push(fn.call(thisArg, this[i], i, this))
    }
    return res
}
```

## 手写async

async的核心是一个自动执行器

```js
function autoRun (gen) {
    var iter = gen()
    funcntion nextRun(data) {
        var result = iter.next(data)
        if (result.done) return result.value
        result.value.then(data => nextRun(data))
    }
    nextRun()
}
```

1. 自动执行器接收一个生成器函数作为参数，首先调用该生成器得到一个迭代器iter
2. 然后声明自动执行器的最主要的部分，也就是一个叫nextRun的递归函数，这个递归函数的终止条件就是迭代器iter停止迭代。
3. 因为迭代器的value总是一个promise，所以我们每次都调用then方法将把data给resolve了
4. 第一次调用nextRun()的时候，也就是上面第8行代码，这个时候data是undefined，然后迭代器调用next()方法，生成器函数才第一次进入调用栈。

示例代码：

使用async读取本地的文件或文件夹，如果是文件夹就显式文件夹的所有文件名，如果是文件就显示文件的内容

```js
const fs = require('fs')
const path = require('path')
// 虽然node提供了promisify方法，适用于类似fn(arg, callback: (err, data))的函数
// 这里我们不直接使用，自己顺便来实现一下
// const promisify = require('util').promisify
// const readFilePromised = promisify(fs.readFile)
// const readdirPromised = promisify(fs.readdir)
// const statPromised = promisify(fs.stat)

function promisify_fs (fn) {
  return function (arg) {
      return new Promise((resolve, reject) => 
          fn(arg, (err, data) =>  err ? reject(err) : resolve(data))
      )
  }
}
const readFilePromised = promisify_fs(fs.readFile)
const readdirPromised = promisify_fs(fs.readdir)
const statPromised = promisify_fs(fs.stat)


async function read(relativePath) {
  const root = __dirname
  const filePath = path.join(root, relativePath)
  console.log(filePath)
  let stats = await statPromised(filePath)
  if (stats.isDirectory()) {
    try {
      let res = await readdirPromised(filePath)
      console.log(res.join(','))
    } catch (e) {
      console.log(e)
    }
  } else if (stats.isFile()) {
    try {
      let res = await readFilePromised(filePath)
      console.log(res.toString())
    } catch (e) {
      console.log(e)
    }
  }
}

read('testDir/a.txt')
```

不使用async，使用生成器实现类似功能：

```js
const fs = require('fs')
const path = require('path')
function promisify_fs (fn) {
  return function (arg) {
      return new Promise((resolve, reject) => 
          fn(arg, (err, data) =>  err ? reject(err) : resolve(data))
      )
  }
}
const readFilePromised = promisify_fs(fs.readFile)
const readdirPromised = promisify_fs(fs.readdir)
const statPromised = promisify_fs(fs.stat)

// const promisify = require('util').promisify
// const readFilePromised = promisify(fs.readFile)
// const readdirPromised = promisify(fs.readdir)
// const statPromised = promisify(fs.stat)

function* read(relativePath) {
  const root = __dirname
  const filePath = path.join(root, relativePath)
  console.log(filePath)
  let stats = yield statPromised(filePath)
  if (stats.isDirectory()) {
      try {
      let res = yield readdirPromised(filePath)
      console.log(res.join(','))
    } catch (e) {
      console.log(e)
    }
  } else if (stats.isFile()) {
    try {
      let res = yield readFilePromised(filePath)
      console.log(res.toString())
    } catch (e) {
      console.log(e)
    }
  }
}

function autoRun (gen) {
  var iter = gen()
  function nextRun(data) {
    var result = iter.next(data)
    if (result.done) return result.value
    result.value.then(data => nextRun(data))
  }
  nextRun()
}

read = read.bind(null, 'testDir')
autoRun(read)

```

autoRun接收一个生成器函数gen作为参数，在内部调用它生成一个迭代器iter。

我们yield的值必须是一个promise，所以iter.next()返回的对象的value就必定是一个promise，我们递归地调用nextRun方法，直到迭代器停止迭代。

递归过程就是下面这样：

```js
function handRun(gen) {
    var iter = gen()
    iter.next().value  
    .then(data =>
        iter.next(data).value // 获取异步操作返回值
        .then(data =>
            iter.next(data).value // 获取异步操作返回值
            .then(data =>
                iter.next(data) // 获取异步操作返回值
                ...
            )
        )
    )
}
```
