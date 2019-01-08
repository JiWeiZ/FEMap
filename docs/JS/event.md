# 事件代理

## 事件流

### addEventListener

addEventListener(type, listener, options（可选）, useCapture（可选）)

options是一个对象，可用的选项如下：

| 参数    | 类型    | 说明                                                         |
| ------- | ------- | ------------------------------------------------------------ |
| capture | Boolean | 表示 `listener` 会在该类型的事件捕获阶段传播到该 `EventTarget` 时触发。 |
| once    | Boolean | 表示 `listener` 在添加之后最多只调用一次。如果是 `true`, `listener` 会在其被调用之后自动移除。 |
| passive | Boolean | 表示 `listener` 永远不会调用 `preventDefault()`。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。 |

### 事件流

事件捕获 → 目标处理 → 事件冒泡

1. onclick始终在冒泡阶段调用事件处理程序
2. addEventListener的第4个参数指定元素调用事件处理程序的阶段，true表示捕获阶段调用，false表示冒泡阶段调用，默认false

下面的demo演示了该事件流的处理过程：

​	首先定义了在捕获阶段调用的函数handleCapture，在冒泡阶段调用的函数handleBubble，onclick绑定的函数handleOnclick，然后从DOM树顶层开始绑定事件代理，最后请注意onclick的绑定顺序

<iframe width="100%" height="500" src="//jsfiddle.net/happysir/1brqupmv/4/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

说明：

1. 事件处理的顺序是：
   1. 事件捕获（eventPhase=\=1）
   2. 目标处理（eventPhase=\=2）
   3. 事件冒泡（eventPhase=\=3）
2. 事件从window开始捕获，到target处理目标，再从target冒泡到window结束事件
3. target元素（span）在目标处理阶段执行了3次，第1次是事件绑定在冒泡阶段，第2次事件绑定在捕获阶段，第3次用onclick绑定，但不是说onclick一定比addEventListener后执行
4. **addEventListener指定捕获阶段调用，addEventListener比onclick比先执行**；否则onclick和addEventListener谁先绑定谁先执行

## 事件处理程序

### 1、HTML内联的事件绑定

尽量别用

### 2、onclick

使用 ele.onclick = null移除事件

### 3、addEventListener

使用removeEventListener移除事件

## 事件对象

几个常用属性/方法

| 属性/方法                    | 说明                                                         |
| ---------------------------- | ------------------------------------------------------------ |
| e.target                     | 事件目标                                                     |
| e.currentTarget              | 事件处理程序正在处理事件的那个元素                           |
| e.type                       | 事件类型                                                     |
| e.preventDefault()           | 取消事件默认行为                                             |
| e.stopPropagation()          | 取消事件进一步捕获或冒泡                                     |
| e.stopImmediatePropagation() | 取消事件进一步捕获或冒泡，同时阻止剩下的所有事件处理程序的调用。参考: [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopImmediatePropagation) |

## 自定义事件

### 创建事件

旧版

```js
// 事件由多种类型，如果是自定义的UI事件，就应该写成UIEvent
var barEvent = document.createEvent('Event')
// 语法： event.initEvent(type, bubbles, cancelable)
barEvent.initEvent('bar', true, true)
```

新版

```js
// 创建一个支持冒泡且不能被取消的look事件
var ev = new Event("look", {"bubbles":true, "cancelable":false})
```

### 派发事件

```js
element.dispatchEvent(barEvent)
```

dispatchEvent 是分发模型流程实现的最后一步。 其中的事件可以通过document.createEvent 方法创建， 并通过 initEvent 或其他的初始化方法。其中barEvent是要被派发的事件对象，element是可以触发事件的目标。