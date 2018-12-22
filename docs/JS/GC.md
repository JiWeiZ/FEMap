# 垃圾收集和内存泄漏

## 垃圾收集

JS执行环境会负责管理代码执行过程中使用的内存。 垃圾收集器会周期性的找出那些不在继续使用的变量，然后释放其内存。 这个过程不是实时的而是周期性的。

**垃圾收集策略，GC，garbage collection**有2种：标记清除和引用计数

#### 标记清除

1. 变量进入环境时（例如，在函数中声明一个变量）就将这个变量标记为“进入环境”。 变量离开环境时，则将其标记为“离开环境”。 
2. JS永远不释放进入环境的变量所占用的内存。
3. 标记采取先标记再清除的策略：
   1. 垃圾回收器在运行的时候给内存中的所有变量都加上标记
   2. 然后清除进入环境变量的标记和闭包引用变量的标记
   3. 之后再被加上标记的变量将被视为准备删除的变量。
   4. 最后垃圾收集器会销毁那些带标记的值 

#### 引用计数

引用计数的含义是跟踪记录每个值被引用的次数。

当声明了一个变量并将一个引用类型值赋给该变量时，则这个值的引用次数就是1。如果同一个值又被赋给另一个变量，则该值的引用次数加1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数减1。当这个值的引用次数变成0时，则说明没有办法再访问这个值了，因而就可以将其占用的内存空间回收回来。这样，当垃圾回收器下次再运行时，它就会释放那些引用次数为0的值所占用的内存。 

IE中有一部分对象并不是原生js对象。例如，其DOM和BOM中的对象就是使用C++以COM（Component Object Model，组件对象模型）对象的形式实现的，而COM对象的垃圾回收机制采用的就是引用计数策略。因此，即使IE的js引擎采用标记清除策略来实现，但js访问的COM对象依然是基于引用计数策略的。

```javascript
var element = document.getElementById("some_element");
var myObject = new Object();
element.o = myObject;
myObject.e = element;
```

这个例子在一个DOM元素（element)与一个原生js对象（myObject)之间创建了循环引用。即使页面删除了这个DOM，但由于myObject.e仍在引用这个DOM，这个DOM也不会被回收。

#### 关于闭包引起的内存泄漏

IE9之前DOM和BOM是使用C++以COM（Component Object Model，组件对象模型）对象的形式的，实现的不是真正的js对象，其垃圾回收基于引用计数策略， 如果一个闭包引用了一个DOM或BOM元素，就有可能出现内存泄漏。

```javascript
function assignHandler(){
    var element = document.getElementById('someElement')
    element.onclick = function(){}
}
```

element.onclick引用了一个闭包，如果这个闭包不被清除的话，element的引用至少是1，因此也就无法销毁。

解决办法是手动清除闭包

```javascript
function assignHandler(){
    var element = document.getElementById('someElement')
    element.onclick = function(){}
    element = null
}
```

IE9把DOM和BOM对象都转换成了真正的js对象。消除了常见的内存泄漏。

## WeakMap和WeakSet

WeakMap和WeakSet中的对象都是弱引用，GC不会考虑WeakMap和WeakSet对对象的引用。

### [WeakMap](http://es6.ruanyifeng.com/#docs/set-map#WeakMap)

有时我们想在某个对象上面存放一些数据，但是这会形成对于这个对象的引用。

```javascript
const e1 = document.getElementById('foo');
const e2 = document.getElementById('bar');
const arr = [
  [e1, 'foo 元素'],
  [e2, 'bar 元素'],
];
```

`arr`引用了`e1`和`e2`，当我们不再需要这两个对象，我们就必须手动删除这个引用，否则垃圾回收机制就不会释放`e1`和`e2`占用的内存。

```javascript
// 不需要 e1 和 e2 的时候
// 必须手动删除引用
arr [0] = null;
arr [1] = null;
```

上面这样的写法显然很不方便。一旦忘了写，就会造成内存泄露。

WeakMap 就是为了解决这个问题而诞生的。

WeakMap的键名所引用的对象都是弱引用，即垃圾回收机制不将该引用考虑在内。因此，只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。

WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。

### [WeakSet](http://es6.ruanyifeng.com/#docs/set-map#WeakSet)

WeakSet 的成员只能是对象，而不能是其他类型的值。WeakSet 中的对象都是弱引用，因此WeakSet 的成员是不适合引用的，并且由于GC执行时机不可预测，因此WeakSet 不可遍历。