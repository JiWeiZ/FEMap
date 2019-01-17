# 动画

使用js实现动画要理解一件事情，即动画方程应该是时间的函数

比如使用js实现圆周运动

```html
<div class="wrapper">
  <div>JS圆周运动1（rotate）</div>
  <div class="circle-wrapper">
    <div class="circle circle-position circle-position-1" id="js1"></div>
  </div>
</div>
```

这里

```js
let jsCircle1 = document.querySelector('#js1')
function startJsCircle1() {
  let startTime = Date.now(),
      cycle = 4000
  requestAnimationFrame(function update() {
    let currentTime = Date.now()
    let p = (currentTime - startTime) / cycle
    jsCircle1.style.transform = `rotate(${360 * p}deg)`
    requestAnimationFrame(update)
  })
}
startJsCircle1()
```

我们通过一个参数p表示动画执行的阶段