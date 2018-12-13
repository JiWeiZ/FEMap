# 高阶函数

高阶函数的核心是在等价函数执行前后进行一些处理

```js
function highLevel (fn, ...args0) {
    // do something...
    return function (...args) {
        // do something...
        let result = fn.apply(this, args)
        // do something ...
        return result
    }
}
```

## 防抖

```js
function debounce (fn, wait) {
    let timer
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
            timer = setTimeout(() => timer = undefined, wait)
        } else {
            let result = fn.apply(this, args)
            timer = setTimeout(() => timer = undefined, wait)
            return result
        }
    }
}
```

## 节流

```js
function throttle (fn, wait) {
    let timer
    return function (...args) {
        if (timer === undefined) {
            let result = fn.apply(this, args)
            timer = setTimeout(() => timer = undefined, wait)
            return result
        }
    }
}
```

## once

```js
function once (fn) {
    return function (...args) {
        let result = fn.apply(this, args)
        fn = null
        return result
    }
}
```

## monopoly

在观察者模式中会用到

```js
function monopoly(fn, wait = 100) {
    return function (...args) {
        if (!monopoly.permit) {
            monopoly.permit = fn
        }
        if (monopoly.permit === fn) {
            clearTimeout(monopoly.timer)
            monopoly.timer = setTimeout(() => delete monopoly.permit, wait)
            return fn.apply(this, args)
        }
    }
}
```

