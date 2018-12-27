# 排序算法

常用排序算法及其复杂度

![img](http://images.cnitblog.com/blog/512692/201304/12095757-775cf861406644bfad60ff2763f499e4.png)

下面分别介绍之，均以顺序排序为例

## 冒泡排序

```js
var arr = [6, 7, 0, 4, 1, 5, 3, 2]

function bubbleSort(arr) {
  var len = arr.length
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

console.log(bubbleSort(arr))

```

要点：

1. 双循环，外循环len次，内循环len - 1 - i次
2. 前一个比后一个大就交换

## 选择排序

选择排序的大致思路：遍历整个数组，从当前元素及其所有后续元素中找到一个最小的，二者交换。

```js
var arr = [6, 7, 0, 4, 1, 5, 3, 2]

function selectSort(arr) {
  var len = arr.length, idxMin
  for (var i = 0; i < len - 1; i++) {
    idxMin = i
    for (var j = i; j < len; j++) {
      if (arr[idxMin] > arr[j]) idxMin = j
    }
    if (i !== idxMin) {
      [arr[i], arr[idxMin]] = [arr[idxMin], arr[i]]
    }
  }
  return arr
}

console.log(selectSort(arr))

```

## 插入排序

```js
var arr = [6, 7, 0, 4, 1, 5, 3, 2]

function insertSort(arr) {
  var len = arr.length, j, current
  for (var i = 1; i < len; i++) {
    [j, current] = [i, arr[i]]
    while (j > 0 && arr[j - 1] > current) {
      arr[j] = arr[j - 1]
      j--
    }
    if (j !== i) arr[j] = current
  }
  return arr
}

console.log(insertSort(arr))

```
**下面简单表示一下排序过程：**

未排序<br/>
67041532<br/>
i = 1, current = 7<br/>
67041532<br/>
i = 2, current = 0<br/>
67741532<br/>
66741532<br/>
06741532<br/>
i = 3, current = 4<br/>
06771532<br/>
06671532<br/>
04671532<br/>
i = 4, current = 1<br/>
04677532<br/>
04667532<br/>
04467532<br/>
01467532<br/>
i = 5, current = 5<br/>
01467732<br/>
01466732<br/>
01456732<br/>
i = 6, current = 3<br/>
01456772<br/>
01456672<br/>
01455672<br/>
01445672<br/>
01345672<br/>
i = 7, current = 2<br/>
01345677<br/>
01345667<br/>
01345567<br/>
01344567<br/>
01334567<br/>
01234567<br/>

1. 算法是从第二个位置（索引 1 ）而不是 0 位置开始的（我们认为第一项已排序了） 。
2. 不断while循环直到找到正确的插入位置

## 归并排序

























