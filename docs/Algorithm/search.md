# 搜索算法

## 二分搜索

二分搜索要求被搜索的数据结构已排序。

```js
const quickSort = require('../Sort/quickSort')

function binarySearch (arr, item) {
  arr = quickSort(arr)
  var low = 0, high = arr.length - 1, mid, element
  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    element = arr[mid]
    if (element < item) {
      low = mid + 1
    } else if (element > item) {
      high = mid -1
    } else {
      return true
    }
  }
  return false
}

var arr = [6, 7, 0, 4, 1, 5, 3, 2]
console.log(binarySearch(arr, 6))

```

