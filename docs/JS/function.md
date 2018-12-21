# 函数和闭包

## this对象

1. 全局函数，this等于window（因为全局函数相当于window的方法）
2. 函数当做某个对象的方法调用时，this等于那个对象

有时调用某个对象的回调的时候，这个回调的this一般指向这个对象，如果我们想访问外部作用域的this，需要将其保存起来（即 var that = this）

## 什么是闭包

闭包是函数和声明该函数的词法环境的组合。

### 1、执行环境及作用域链

几个概念：

1. 执行环境：执行环境有时就称为环境，决定了变量和函数有权访问的数据
   1. 全局环境是最外围的环境：
      1. 在浏览器中，全局环境是window对象
      2. 在nodejs中，全局环境是global对象
2. 执行环境堆栈：
3. 变量对象：变量对象是与执行环境相关联的数据的容器。它是一个特殊的对象，它存储在上下文中定义的变量和函数声明。每个执行环境都对应一个变量对象，解析器会在后台使用到它 
4. 活动对象：调用函数时会创建一个叫活动对象的特殊对象，包含**形参和arguments对象**。活动对象是函数上下文的变量对象。
5. 作用域链

### 2、闭包的关键

**外层函数执行完毕以后，闭包仍可以访问它外层函数的活动对象**，这就关于闭包这个问题关键所在。

没有闭包的情况下，函数执行完成以后其活动对象是会被销毁的，但是存在闭包时，因为在函数执行完成以后，闭包仍然在引用着函数的活动对象，所以这个活动对象不会被销毁。非得等到闭包被销毁后，这个活动对象才能被销毁。

## 闭包的用处

### 1、“冻结”全局变量

#### （1）在异步函数中使用

```javascript
function asyncFun(callback){
    setTimeout(callback,200)
}
var color = 'blue'
asyncFun(function(){
    console.log(color)
})
color = 'red'
```

上面的执行结果是red

使用闭包可以“冻结”变量

```javascript
function asyncFun(callback){
    setTimeout(callback,200)
}
var color = 'blue'
(function(color){
    asyncFun(function(){
    	console.log(color)
	})
})(color)
color = 'red'
```

执行结果是blue

### 2、模拟块级作用域

ES6出现以前没有块级作用域，使用闭包可以模拟块级作用域

```javascript
function foo(n){
    for(var i=0;i<n;i++){
        alert(i)
    }
    alert(i) //不报错
}
```

使用闭包：

```javascript
function foo(n){
	(function(){
        for(var i=0;i<n;i++){
        	alert(i)
        }
	})()
	
    alert(i) // 报错
}
```

##### 利用闭包可以模拟let

```javascript
var a=[]
for (var i=0;i<10;i++) {
    a[i] = function() {
        console.log(i)
    }
}
a[6]();
```

上面的代码输出是几？

正确答案是10。为什么呢？

因为a[i]引用的i是外层环境（本例中即是全局环境）的活动对象。在for循环的过程中，这个i从0增加到了10，无论你执行a\[1\](), a\[2\](), 还是a\[6\]()，实际上引用的都是i这个变量，所以都是10

怎么解决这个问题呢？

```javascript
var a=[]
for(var i=0;i<10;i++){
    a[i] = (function(num){
    	return function(){
            console.log(num)
    	}	
    })(i)
}
a[6]();
```

把这个函数暂且叫作A函数

```javascript
function(num){
return function(){
    	console.log(num)
    }	
}
```

这个函数叫作B函数

```javascript
function(){
	console.log(num)
}	
```

B函数访问的num是A函数的活动对象。

由于js传参都是传值的，所以num是对i的值的拷贝

现在我声明A函数，传入参数i，然后立即执行A函数，返回B函数，a[i]引用的正是这个B函数，而B函数打印的变量不是i，是i的拷贝num，所以可以得到我们想要的输出

当然，使用let是最简单的

```javascript
var a=[]
for(let i=0;i<10;i++){
    a[i] = function(){
        console.log(i)
    }
}
a[6]();
```

### 3、私有变量

一般来说我们创建一个单例使用花括号就可以了，它是一个普通的object，它的属性和方法都是公开的。现在我想要一个单例，其拥有的私有变量不能直接访问，那么应该怎么办呢？

比如说，现在我有这么一个类

```javascript
var agent = {
    fakeName: '余则成',
    realName: '峨眉峰',
    sayReal: function () {
        console.log(`我是${this.realName}, 共产党万岁`)
    },
    say: function () {
        console.log(`我是${this.fakeName}, 国民党万岁`)
    }
}
```

这个agent就是一个单例，显然这个realName和sayReal方法我是不希望公开的，那么我就可以这么做：

```javascript
var agent = (function () {

    var realName = '峨眉峰'

    function sayReal () {
        console.log(`我是${realName}，共产党万岁`)
    }

    return {
        fakeName: '余则成',
        say: function () {
            console.log(`我是${this.fakeName}，国民党万岁`)
        },
        whoAreU: function(secretSignal) {
            if (secretSignal === 'abcd1234') {
                sayReal()
            } else {
                this.say()
            }
        }
}     
})()
console.log(agent.fakeName)  // 余则成
agent.say()					 // 我是余则成，国民党万岁
console.log(agent.realName)  // undefined
agent.whoAreU()              // 我是余则成，国民党万岁
agent.whoAreU('abcd1234')    // 我是峨眉峰，共产党万岁
```

这里realName和sayRealName是外部访问不到的，只能通过agent.whoAreU方法访问到。这里如果whoAreU的参数secretSignal是'abcd1234'，就返回真实身份，否则返回假身份。
