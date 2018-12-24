# 设计模式

## 发布订阅模式

<iframe width="100%" height="700" src="//jsfiddle.net/happysir/ubfe6wyt/13/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

其中的关键是一个中介者mediator，负责管理消息的发布和订阅

```js
  class PubSub {
    constructor() {
      this.subscribers = {}
    }
	// 发布消息
    pub(type, data) {
      // 找到某类型的subscribers（这是一组函数集合），让这些subscriber分别处理data
      const subscribers = this.subscribers[type]
      subscribers.forEach(subscriber => {
        subscriber(data)
      })
    }
	// 订阅消息
    sub(type, target, callback) {
      // 获取或新增订阅者列表，然后把订阅者添加进去
      this.subscribers[type] = this.subscribers[type] || []
      this.subscribers[type].push(callback.bind(target))
    }
  }
```

另外要注意

```js
textarea.addEventListener('scroll', monopoly(deepCloneFn(pubScroll)))
preview.addEventListener('scroll', monopoly(deepCloneFn(pubScroll)))
```

这里用到一个高阶函数monopoly（阻止其他函数调用），还有一点就是事件处理函数要深拷贝一下