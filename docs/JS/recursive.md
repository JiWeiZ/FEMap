# 递归的优化

## 尾递归

### 尾调用

尾调用就是在函数的最后一步调用另一个函数。

```js
function f (x) {
    return g(x) 
}
```

以下三种情况，都不属于尾调用。

```javascript
// 情况一
function f(x){
  let y = g(x);
  return y;
}

// 情况二
function f(x){
  return g(x) + 1;
}

// 情况三
function f(x){
  g(x);
}
```

一些语言提供了尾递归优化，当识别出使用了尾递归时，会相应地只保留当前层函数的stack，节省内存。

所以，在没有尾递归优化的语言，如java, python中，鼓励用迭代iteration来改写尾递归；在有尾递归优化的语言如Erlang中，鼓励用尾递归来改写其他形式的递归。 [参考：什么是尾递归？](https://www.zhihu.com/question/20761771/answer/92233964)

### ES6的尾调用优化只在严格模式下开启

ES6的尾调用优化只在严格模式下开启，正常模式是无效的。

这是因为在正常模式下，函数内部有两个变量，可以跟踪函数的调用栈。

- `arguments`：返回调用时函数的参数。
- `func.caller`：返回调用当前函数的那个函数。

尾调用优化发生时，函数的调用栈会改写，因此上面两个变量就会失真。严格模式禁用这两个变量，所以尾调用模式仅在严格模式下生效。

### 尾递归

计算n的阶乘，最多需要保存n个调用记录。这么写的话，算到最后一步的时候，计算机内存需要存储的值是5,4,3,2,1,factorial

```javascript
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

factorial(5) // 120
```

使用尾递归可以极大的减少内存。像下面这么写的话，算到最后一步的时候，计算机内存需要存储的值是1, 120, factorial

```js
function factorial(n, total) {
  if (n === 1) return 1;
  return factorial(n - 1, n * total);
}

factorial(5) // 120
```

尾递归的实现，往往需要改写递归函数，确保最后一步只调用自身。做到这一点的方法，就是把所有用到的内部变量改写成函数的参数。比如上面的例子，阶乘函数 factorial 需要用到一个中间变量 total ，那就把这个中间变量改写成函数的参数。这样做的缺点就是不太直观，第一眼很难看出来，为什么计算5的阶乘，需要传入两个参数5和1？

两个方法可以解决这个问题。方法一是在尾递归函数之外，再提供一个正常形式的函数。

```javascript
function tailFactorial(n, total) {
  if (n === 1) return total;
  return tailFactorial(n - 1, n * total);
}

function factorial(n) {
  return tailFactorial(n, 1);
}

factorial(5) // 120
```

上面代码通过一个正常形式的阶乘函数 factorial ，调用尾递归函数 tailFactorial ，看起来就正常多了。

函数式编程有一个概念，叫做[柯里化](https://en.wikipedia.org/wiki/Currying)（currying），意思是将多参数的函数转换成单参数的形式。这里也可以使用柯里化。

```javascript
function currying(fn, n) {
  return function (m) {
    return fn.call(this, m, n);
  };
}

function tailFactorial(n, total) {
  if (n === 1) return total;
  return tailFactorial(n - 1, n * total);
}

const factorial = currying(tailFactorial, 1);

factorial(5) // 120
```

上面代码通过柯里化，将尾递归函数 tailFactorial 变为只接受1个参数的 factorial 。

第二种方法就简单多了，就是采用ES6的函数默认值。

```javascript
function factorial(n, total = 1) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

factorial(5) // 120
```

上面代码中，参数 total 有默认值1，所以调用时不用提供这个值。

总结一下，递归本质上是一种循环操作。纯粹的函数式编程语言没有循环操作命令，所有的循环都用递归实现，这就是为什么尾递归对这些语言极其重要。对于其他支持"尾调用优化"的语言（比如Lua，ES6），只需要知道循环可以用递归代替，而一旦使用递归，就最好使用尾递归。[参考：尾调用优化](http://www.ruanyifeng.com/blog/2015/04/tail-call.html)

