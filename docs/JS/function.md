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

这里realName和sayRealName是外部访问不到的，只能通过agent.whoAreU方法访问到。这里如果whoAreU的参数secretSignal是'abcd1234'，就返回真实身份，否则返回假身份

## 垃圾收集和内存泄漏

### 1、垃圾收集

执行环境会负责管理代码执行过程中使用的内存。 垃圾收集器会周期性的找出那些不在继续使用的变量，然后释放其内存。 因为这个过程开销比较大 ，所以不是实时的，是周期性的。

那么到底哪个变量是没有用的呢？对于这个问题有两种解决方案 （这个解决方案就叫**垃圾收集策略，GC，garbage collection）**：标记清除和引用计数

#### （1）标记清除

变量进入环境时，例如，在函数中声明一个变量，就将这个变量标记为“进入环境”。 变量离开环境时，则将其标记为“离开环境”。 

永远不能释放进入环境的变量所占用的内存。

垃圾回收器的标记工作采取先标记再清除的策略：垃圾回收器在运行的时候会给存储在内存中的所有变量都加上标记，然后清除环境中变量的标记和闭包引用变量的标记， 在此之后再被加上标记的变量将被视为准备删除的变量。最后垃圾收集器会销毁那些带标记的值 

#### （2）引用计数

引用计数的含义是跟踪记录每个值被引用的次数。当声明了一个变量并将一个引用类型值赋给该变量时，则这个值的引用次数就是1。如果同一个值又被赋给另一个变量，则该值的引用次数加1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数减1。当这个值的引用次数变成0时，则说明没有办法再访问这个值了，因而就可以将其占用的内存空间回收回来。这样，当垃圾回收器下次再运行时，它就会释放那些引用次数为0的值所占用的内存。 

IE中有一部分对象并不是原生js对象。例如，其DOM和BOM中的对象就是使用C++以COM（Component Object Model，组件对象模型）对象的形式实现的，而COM对象的垃圾回收机制采用的就是引用计数策略。因此，即使IE的js引擎采用标记清除策略来实现，但js访问的COM对象依然是基于引用计数策略的。换句话说，只要在IE中涉及DOM或者BOM对象，就会存在循环引用的问题。 

```
var element = document.getElementById("some_element");
var myObject = new Object();
element.o = myObject;
myObject.e = element;
```

这个例子在一个DOM元素（element)与一个原生js对象（myObject)之间创建了循环引用。其中，变量myObject有一个名为element的属性指向element对象；而变量element也有一个属性名为o回指myObject。由于存在这个循环引用，即使例子中的DOM从页面中移除，它也永远不会被回收。 

#### （3）关于闭包引起的内存泄漏

IE9之前DOM和BOM是使用C++以COM（Component Object Model，组件对象模型）对象的形式的，实现的不是真正的js对象，其垃圾回收基于引用计数策略， 如果一个闭包引用了一个DOM或BOM元素，就有可能出现内存泄漏。

```javascript
function assignHandler(){
    var element = document.getElementById('someElement')
    element.onclick = function(){}
}
```

element.onclick引用了一个闭包，同时由于闭包会引用包含函数的整个活动对象，所以即使闭包不直接引用element，包含函数的活动对象中也仍然会保存一个引用，这样的话闭包相当于也引用了element

只要这个闭包不被销毁，element的引用至少是1，因此也就无法销毁。

解决办法是手动清除闭包

```javascript
function assignHandler(){
    var element = document.getElementById('someElement')
    element.onclick = function(){}
    element = null
}
```

IE9把DOM和BOM对象都转换成了真正的js对象。消除了常见的内存泄漏。