# 数组相关

## splice

arr.splice(a, b, c)：一个数组arr，从头开始数a个元素，删除b个元素，插入变量从的值，arr会发生改变

```js
var a = [0,1,2,3,4,5,6]
a.splice(3, 1) // a = [0,1,2,4,5]
// a.splice(n, 1) 删除索引为n的元素
var a = [0,1,2,3,4,5,6]
a.splice(3, 0, 7) // a = [0,1,2,7,3,4,5,6]
// a.splice(n, 0, x) 
```



## 数组扁平化

```js
function flat (arr) {
  return arr.reduce((p, c) => p.concat(Array.isArray(c) ? flat(c) : c), [])
}
```



## 数组乱序

```js
function randomSort (arr) {
  return arr.sort(() => Math.random() > 0.5 ? 1 : -1)
}
```

## 数组去重

```js
// 法1 
// 双for循环，这个兼容性比较好
// 只要改变判断相等的条件，就可以处理数组元素是对象，对象指针不同但是属性都一样的情况
function unique1 (arr) {
  const res = []
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < res.length; j++) {
      if (res[j] === arr[i]) break
    }
    if (j === res.length) res.push(arr[i])
  }
  return res
}

// 法2
// 使用includes或indexOf
function unique2 (arr) {
  const res = []
  for (var i = 0; i < arr.length; i++) {
    // ES6
    if (!res.includes(arr[i])) res.push(arr[i])
    // ES5
    // if (!res.indexOf(arr[i]) === -1) res.push(arr[i])
  }
  return res
}

// 法3
// 数组使用 sort 方法排序后，相同的值就会被排在一起
// 然后我们就可以只判断当前元素与上一个元素是否相同，相同就说明重复，不相同就添加进 res
function unique3 (arr) {
  
  var arrSorted = arr.concat().sort(), res = [], last
  for (var i = 0; i < arrSorted.length; i++) {
    if (!i || last !== arrSorted[i]) res.push(arrSorted[i])
    last = arrSorted[i]
  }
  return res
}

// 法4
// 使用filter
function unique4 (arr) {
  return arr.filter((e, idx, array) => array.indexOf(e) === idx)
}

// 法5
// 使用Set
function unique5 (arr) {
  return [...new Set(arr)]
}

```

## 数组全排列

数组全排列是典型的考察递归的题目，思路很简单，就是依次取出数组的1个元素（降维），将降维后的数组全排列，直到数组是2维

<iframe width="100%" height="520" src="//jsfiddle.net/happysir/ut49zo0d/3/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>



