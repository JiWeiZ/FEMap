# 面经

## 小红书1面

视频面

1. 用js实现栈和队列
2. 手写快排
3. 手写debounce
4. 出了1个题目，实现add(1)(2)(3)()等于6
5. 期间问了vue-router有什么钩子，vue的computed和watch有什么区别（watch可以执行异步，computed不行），还问为什么要这样设计
6. even loop，解释微任务宏任务
7. 知道哪些http请求方法，除了get和post
   1. 我说delete，head，option之类的
8. 问我什么时候用option，我说预检，什么时候会预检？我说简单请求，什么是简单请求？blablabla...

## 小红书2面

视频面

1. 什么是闭包，写一段代码解释一下闭包
2. 闭包的实际用处有了解吗？我一寻思昨天不是问了防抖和节流吗，就说了防抖和节流
3. 果然问我什么是防抖什么是节流，对应的应用场景有什么，又让我写一遍防抖和节流
4. 如何向你的朋友介绍一个他不知道的概念
5. 文章内容的关键词搜索如何实现？
   1. 面试官说在文章创建时，调用算法计算出文章匹配的关键字。然后把搜寻的关键字与文章做索引。
6. 

## 小米1面

直接电话面，当时刚睡醒，懵逼状态接的电话，面了半个小时左右

1. typeof和instanceof怎么用，区别是什么

2. 如何检测数组

3. 知道哪些BOM对象

4. setTimeout是DOM的方法还是BOM的方法

5. 关于promise的

   1. promise有几种状态
   2. 一个promise.then.then.then.catch，其中一个.then被reject了其他的promise会怎样

6. 解释微任务宏任务，问下面的输出是什么

   ```js
   Promise.resolve().then(() => {
     console.log('then1')
     Promise.resolve().then(() => {
       console.log('then2')
     })
   })
   setTimeout(() => console.log('settimeout'))
   ```

7. 使用new执行了什么

8. 构造函数需要写return吗？如果在构造函数里写了return会怎么样？（我说你return什么就得到什么，不知道对不对...）

9. 记不清了，回答了几个问题都不好，估计是凉了。

面试官没有一个问CSS的......

## 头条1面

1. CSS的position属性和z-index属性
2. 手写ajax封装成promise
3. ES6新增的内容有哪些
4. vue的父子组件通信方式有哪些
5. vue的渲染过程
6. 布局的问题，实现一个头像卡片，左边头像右边介绍