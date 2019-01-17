# 设计模式

## 发布订阅模式

总的来说，发布订阅模式依靠一个中介者来减少发布者和订阅者之间的耦合关系

1. 发布者不知道订阅者是谁，他只管把要发布的事件和相关数据提交到中介者那里就可以。
2. 订阅者告诉中介者，我要订阅什么事件，这个事件来了我怎么处理
3. 发布者发布事件的时候，会向所有订阅了该事件的订阅者发布事件的类型，以及相关数据；
4. 然后一旦发布者发布该事件，中介者就找到订阅了这个事件的订阅者，由于订阅者已经把如何处理这个事件告诉了中介者，所以中介者会帮订阅者执行对于该事件的处理方法。

核心代码

```js
class Mediator {
  constructor () {
    this.events = {}
  }
  pub (type, data) {
    this.events[type].forEach(solve => solve(data))
  }
  sub (type, subscriber, solution) {
    this.events[type] = this.events[type] || []
    this.events[type].push(solution.bind(subscriber))
  }
}
```

完整代码

<iframe width="100%" height="700" src="//jsfiddle.net/happysir/gb6nmfex/6/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

这里用到一个高阶函数monopoly，防止发布者和订阅者之间的循环发布。大致思想就是我在一个限定时间内只允许首次传入monopoly的函数执行。

### 改进

现在的需求变了，要求hintbar只在textarea滚动的时候改变，在preview滚动的时候不改变。

这时我们就发现了上面这种模式的一个缺点，即订阅者并不关心到底是哪个发布者发布了这个事件，只要你发布了这个事件，甭管是谁发布的，我都这么处理。

所以我们做一些改进，让订阅者会告诉中介者我订阅哪些发布者的消息

<iframe width="100%" height="700" src="//jsfiddle.net/happysir/gb6nmfex/4/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

这次hintbar只订阅了textare发布的scroll，满足了需求。











