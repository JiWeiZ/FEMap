# JS运行机制

## 线程和进程

### 进程

通俗的解释就是，正在进行中的程序就叫进程

比如我们听音乐，上网，打游戏，对应的音乐播放器、网页和游戏程序都是一个个程序，当我们双击图标运行这个程序的时候实际上就是把它们加载到内存中去执行，我们就把这个执行中的程序叫作进程。

进程是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位。

所谓关于某数据集合，我们不论听音乐还是上网都要处理很多数据，执行程序的时候相应的底层系统是需要给它分配资源（比如内存和CPU）才能执行的，我们的资源分配和调度的基本单位就是进程

### 多进程

那是怎么实现同时听音乐又同时上网的呢？这就是多进程。

实际上它俩并不是同时执行的。CPU是在飞快地切换进程中执行的。CPU会通过一些调度算法保证程序正常运行。

这样在人看起来就是同时运行的了。

多进程就有两个问题：

假如每来一个任务请求，服务器就开一个进程来处理这个任务请求，我们知道一般Web任务都是IO密集的，如果是阻塞型IO的话这个进程就不能关掉，就等一直等IO完成以后才能返回。

这样第一个问题就是，CPU可以分配的最大进程数是有限的。不能没完没了的分配进程，用户并发到一定程度就必须排队。比如我这个CPU就只能分配5000个进程，那我同时有5001个请求，最后那个请求就必须等待一个进程完事儿才能处理。

第二个就是CPU的利用率很低，因为CPU一直在等IO的活干完才执行下一步动作，而IO是很慢的。

#### 浏览器内的进程

首先，浏览器是多进程的，我们可以打开谷歌浏览器的任务管理器查看当前浏览器所有进程：

![](https://ws1.sinaimg.cn/large/005vEMBhly1fy08l49jcnj30g609qt95.jpg)

我们看到每个任务也就是进程都有一个进程ID，并且都分配了内存、CPU和网络。这印证了前文“系统进行资源分配和调度的基本单位”这句话。

### 线程

线程是进程内一个独立的、可调度的执行单元，与同属一个进程的线程共享进程的资源

前文说了，进程是资源分配和调度的基本单位，计算机给这个进程分配了比如说200MB的内存，那么这个进程中的所有线程都可以访问这200MB的内存。就跟吃大锅饭似的，一个单位一个锅，单位就类比进程，完了大家都在这一个锅里吃饭，每个人就相当于线程

### 多线程

如果一个进程只有一个线程，就是单线程，一个单位就你一个人

一个进程不止一个线程，就是多线程

多线程同样可以用来处理多任务。

#### JS是单线程语言

JS诞生之初就决定了JS是一个单线程的语言，现在不会改变，将来也不会改变。因为假如JS是多线程的，一个线程加入了一个DOM，另一个线程删除了这个DOM，那么以谁为准呢？所以为了避免这种复杂性，JS就是单线程的。

尽管H5提出了Web Worker标准，允许JS创建多个线程，但是子线程完全受主线程控制，并且不得操作DOM。所以这并没有改变JS单线程的本质。

## 宏任务、微任务

JS的任务分为两种，一种是同步任务，一种是异步任务。

由于JS是单线程的，所以没有异步任务的话很容易出现假死的现象。

英文里面把宏任务叫tasks，把微任务叫microtasks

宏任务包括：

| #                       | 浏览器 | Node |
| ----------------------- | ------ | ---- |
| `script`                | ✅      | ✅    |
| `I/O`                   | ✅      | ✅    |
| `UI rendering`          | ✅      | ❌    |
| `setTimeout`            | ✅      | ✅    |
| `setInterval`           | ✅      | ✅    |
| `setImmediate`          | ❌      | ✅    |
| `requestAnimationFrame` | ✅      | ❌    |

微任务包括：

| #                            | 浏览器 | Node |
| ---------------------------- | ------ | ---- |
| `process.nextTick`           | ❌      | ✅    |
| `MutationObserver`           | ✅      | ❌    |
| `Promise.then catch finally` | ✅      | ✅    |

script就是整体的JS代码，也就是同步任务。Event Loop总是先执行同步任务，然后执行微任务，接着执行下一个宏任务，如果这个宏任务还有微任务，就先执行微任务，再执行下下个宏任务......如此循环

一次 Event loop 顺序是这样的

1. 执行同步代码，这属于宏任务
2. 执行栈为空，查询是否有微任务需要执行
3. 执行所有微任务
4. 必要的话渲染 UI
5. 然后开始下一轮 Event loop，执行宏任务中的异步代码

通过上述的 Event loop 顺序可知，如果宏任务中的异步代码有大量的计算并且需要操作 DOM 的话，为了更快的 界面响应，我们可以把操作 DOM 放入微任务中。

### 示例一

> 参考博文：[前端基础进阶（十二）：深入核心，详解事件循环机制](https://www.jianshu.com/p/12b9f73c5a4f#)
>  ```js
> setTimeout(function() {
>     console.log('timeout1');
> })
> 
> new Promise(function(resolve) {
>     console.log('promise1');
>     for(var i = 0; i < 1000; i++) {
>         i == 99 && resolve();
>     }
>     console.log('promise2');
> }).then(function() {
>     console.log('then1');
> })
> 
> console.log('global1');
> 
> // 作者：这波能反杀
> // 链接：https://www.jianshu.com/p/12b9f73c5a4f#
> // 來源：简书
> // 简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
>  ```
>
> 首先，事件循环从宏任务队列开始，这个时候，宏任务队列中，只有一个script(整体代码)任务。每一个任务的执行顺序，都依靠函数调用栈来搞定，而当遇到任务源时，则会先分发任务到对应的队列中去，所以，上面例子的第一步执行如下图所示。
>
>
>
> ![img](https:////upload-images.jianshu.io/upload_images/599584-92fc0827aa39e325.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp)
>
> 首先script任务开始执行，全局上下文入栈
>
> 第二步：script任务执行时首先遇到了setTimeout，setTimeout为一个宏任务源，那么他的作用就是将任务分发到它对应的队列中。
>
> ```
> setTimeout(function() {
>     console.log('timeout1');
> })
> ```
>
>
>
> ![img](https:////upload-images.jianshu.io/upload_images/599584-2a99131c2572f898.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp)
>
> 宏任务timeout1进入setTimeout队列
>
> 第三步：script执行时遇到Promise实例。Promise构造函数中的第一个参数，是在new的时候执行，因此不会进入任何其他的队列，而是直接在当前任务直接执行了，而后续的.then则会被分发到micro-task的Promise队列中去。
>
> 因此，构造函数执行时，里面的参数进入函数调用栈执行。for循环不会进入任何队列，因此代码会依次执行，所以这里的promise1和promise2会依次输出。
>
>
>
> ![img](https:////upload-images.jianshu.io/upload_images/599584-774ec33de48c1d41.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp)
>
> promise1入栈执行，这时promise1被最先输出
>
>
>
> ![img](https:////upload-images.jianshu.io/upload_images/599584-8b5e93798f6c9d52.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp)
>
> resolve在for循环中入栈执行
>
>
>
> ![img](https:////upload-images.jianshu.io/upload_images/599584-521c5da565a35a45.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp)
>
> 构造函数执行完毕的过程中，resolve执行完毕出栈，promise2输出，promise1页出栈，then执行时，Promise任务then1进入对应队列
>
> script任务继续往下执行，最后只有一句输出了globa1，然后，全局任务就执行完毕了。
>
> 第四步：第一个宏任务script执行完毕之后，就开始执行所有的可执行的微任务。这个时候，微任务中，只有Promise队列中的一个任务then1，因此直接执行就行了，执行结果输出then1，当然，他的执行，也是进入函数调用栈中执行的。
>
>
>
> ![img](https:////upload-images.jianshu.io/upload_images/599584-dd7673edbbe5e687.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp)
>
> 执行所有的微任务
>
> 第五步：当所有的micro-tast执行完毕之后，表示第一轮的循环就结束了。这个时候就得开始第二轮的循环。第二轮循环仍然从宏任务macro-task开始。
>
>
>
> ![img](https:////upload-images.jianshu.io/upload_images/599584-881e739c134cb6c9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp)
>
> 微任务被清空
>
> 这个时候，我们发现宏任务中，只有在setTimeout队列中还要一个timeout1的任务等待执行。因此就直接执行即可。
>
>
>
> ![img](https:////upload-images.jianshu.io/upload_images/599584-c4ea234b27c5f2f2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp)
>
> timeout1入栈执行
>
> 这个时候宏任务队列与微任务队列中都没有任务了，所以代码就不会再输出其他东西了。

### 示例二

**请写出点击内部div后是输出**

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>task</title>
  <style>
    #outer {
      padding: 20px;
      width: 200px;
      height: 200px;
      background: #555;
    }

    #inner {
      width: 100px;
      height: 100px;
      background: #999;
    }
  </style>
</head>

<body>
  <div id="outer">
    <div id="inner"></div>
  </div>
</body>
<script>
  console.log('script start')
  const $inner = document.querySelector('#inner')
  const $outer = document.querySelector('#outer')
  function handler() {
    console.log('click')
    Promise.resolve().then(_ => console.log('promise1'))
    setTimeout(_ => console.log('timeout1'))
    requestAnimationFrame(_ => {
      console.log('animation start')
      Promise.resolve().then(_ => console.log('promise2'))
      setTimeout(_ => console.log('timeout2'))
      console.log('animation end')
    })
    $outer.setAttribute('data-random', Math.random())
  }

  new MutationObserver(_ => {
    console.log('observer start')
    Promise.resolve().then(_ => console.log('promise3'))
    setTimeout(_ => console.log('timeout3'))
    console.log('observer end')
  }).observe($outer, {
    attributes: true
  })

  $inner.addEventListener('click', handler)
  $outer.addEventListener('click', handler)
  console.log('script end')
</script>

</html>
```

![](https://ws1.sinaimg.cn/large/005vEMBhly1fy0dzbbzy6j30g60g6dh1.jpg)

1. 执行同步任务
   1. 变量声明、函数声明
   2. **打印：script start**
   3. 给$inner注册click事件
   4. 给$outer注册click事件
   5. **打印：script end**
2. 点击元素，触发click事件，冒泡执行
   1. 先是inner的handler：
      1. **打印：click**
      2. 注册微任务promise1
      3. 注册宏任务timeout1
      4. 注册宏任务requestAnimationFrame
      5. 触发微任务MutationObserver
      6. 执行微任务promise1
         1. **打印：promise1**
      7. 执行微任务MutationObserver
         1. **打印：observer start**
         2. 注册微任务promise3
         3. 注册宏任务timeout3
         4. **打印：observer end**
         5. 执行微任务promise3
            1. **打印：promise3**
   2. 然后是outer的handler：
      1. 打印：click**
      2. 注册微任务promise1
      3. 注册宏任务timeout1
      4. 注册宏任务requestAnimationFrame
      5. 触发微任务MutationObserver
      6. 执行微任务promise1
         1. **打印：promise1**
      7. 执行微任务MutationObserver
         1. **打印：observer start**
         2. 注册微任务promise3
         3. 注册宏任务timeout3
         4. **打印：observer end**
         5. 执行微任务promise3
            1. **打印：promise3**
   3. 由于**requestAnimationFrame()** 在下一次重绘之前调用指定的函数，所以**requestAnimationFrame()** 比**setTimeout()**优先级高
      1. 执行inner的宏任务requestAnimationFrame：
         1. **打印：animation start**
         2. **打印：animation end**
         3. **执行微任务，打印：promise2**
      2. 执行outer的宏任务requestAnimationFrame：
         1. **打印：animation start**
         2. **打印：animation end**
         3. **执行微任务，打印：promise2**
   4. 执行宏任务timeout，timeout1首先注册的，timeout3是在微任务MutationObserver中注册的，timeout2是在宏任务requestAnimationFrame中注册的，所以执行顺序是
      1. inner的timeout1，**打印：timeout1**
      2. inner的timeout3，**打印：timeout3**
      3. outer的timeout1，**打印：timeout1**
      4. outer的timeout3，**打印：timeout3**
      5. inner的timeout2，**打印：timeout2**
      6. outer的timeout2，**打印：timeout2**

