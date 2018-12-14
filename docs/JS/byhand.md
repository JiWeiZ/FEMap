# 手写系列

## 手写new

**题目：**

```js
function Point(x, y) {
    this.x = x
    this.y = y
}

Point.prototype.getLength = function () {
    let {x, y} = this
    return Math.sqrt(x * x + y * y)
}
var p1 = new Point(5, 12)
console.log([p1.x, p1.y, p1.getLength(), p1 instanceof Point])
// [5, 12, 13, true]
```

实现一个myNew函数

```js
var p2 = myNew(Point)(3, 4)
```

使得下面的输出正确

```js
console.log([p2.x, p2.y, p2.getLength(), p2 instanceof Point])
// 输出 [3, 4, 5, true]
```

**参考解答**

myNew函数经历4步：

1. 设置prototype（确保instanceof正确）
2. object.create（实现继承）
3. apply构造函数（调用构造函数）
4. return（返回）

```js
function myNew (fn) {
    return function f (...args) {
        f.prototype = fn.prototype
        let obj = Object.create(fn.prototype)
        fn.apply(obj, args)
        return obj
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

1. Promise构造器接收一个函数参数fn，该函数又拥有2个函数参数resolve和reject
2. promise的初始状态是pending，可以向resolved和rejected状态转换
3. promise会将调用成功或失败的值传给then方法，所以需要2个变量value和reason接收成功或失败的值

```js
function myPromise (fn) {
    let self = this
    self.status = 'pending'
    self.value = undefined
    self.reason = undefined
    function resolve (value) {
        if (self.status === 'pending') {
            self.status = 'fulfilled'
            self.value = value
        }
    }
    function reject (reason) {
        if (self.status === 'pending') {
            self.status = 'rejected'
            self.reason = reason
        }
    }
    fn(resolve, reject)
}
```

下面来写promise的then方法。

4. then方法接收2个函数回调：onFulfilled和onRejected
5. 在pending的时候，将回调添加到回调队列中；在fulfilled的时候，调用onFulfilled；在rejected的时候，调用onRejected

```js
function myPromise(fn) {
  const self = this
  self.status = 'pending'
  self.value = undefined
  self.reason = undefined
  self.resolvedCallbacks = []
  self.rejectedCallbacks = []

  self.resolve = value => {
    if (value instanceof myPromise) {
      return value.then(self.resolve, self.reject)
    }
    setTimeout(() => {
      if (self.status === 'pending') {
        self.status = 'fulfilled'
        self.value = value
        self.resolvedCallbacks.forEach(cb => cb())
      }
    }, 0)
  }

  self.reject = reason => {
    setTimeout(() => {
      if (self.status === 'pending') {
        self.status = 'rejected'
        self.reason = reason
        self.rejectedCallbacks.forEach(cb => cb())
      }
    }, 0)
  }

  try {
    fn(self.resolve, self.reject)
  } catch (e) {
    self.reject(e)
  }
}

myPromise.prototype.then = function (onFulfilled, onRejected) {
  let self = this
  if (self.status === 'pending') {
    self.resolvedCallbacks.push(() => onFulfilled(self.value))
    self.rejectedCallbacks.push(() => onRejected(self.reason))
  }
  if (self.status === 'fulfilled') {
    onFulfilled(self.value)
  }
  if (self.status === 'rejected') {
    onRejected(self.reason)
  }
}


module.exports = myPromise
```

但这个时候then还不支持链式调用，所以需要继续完善

```js

```

[Promises/A+规范（英文版）](https://promisesaplus.com/)

[Promises/A+规范（中文版）](http://malcolmyu.github.io/malnote/2015/06/12/Promises-A-Plus/#note-4)

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
