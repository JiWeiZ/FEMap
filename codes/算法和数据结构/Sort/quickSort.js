var arr = [6, 7, 0, 4, 1, 5, 3, 2]
function quickSort(arr) {

  function partition(arr, il, ir) {
    // 找到主元素
    var main = arr[Math.floor((il + ir) / 2)]
    // 循环条件：左指针不大于右指针
    while (il <= ir) {
      // 左值小于主元素，不断右移左指针
      while(arr[il] < main) {
        il++
      }
      // 右值大于主元素，不断左移右指针
      while(arr[ir] > main) {
        ir--
      }
      // 左指针不在右指针右侧，就交换，然后继续移动
      if (il <= ir) {
        [arr[il], arr[ir]] = [arr[ir], arr[il]]
        il++
        ir--
      }
    }
    return il
  }

  function quickSortRec (arr, il, ir) {
    if (arr.length > 1) {
      var i = partition(arr, il, ir)
      if (il < i - 1) quickSortRec(arr, il, i - 1)
      if (ir > i) quickSortRec(arr, i, ir)
    }
    return arr
  }

  return quickSortRec(arr, 0, arr.length - 1)
}

console.log(quickSort(arr))

module.exports = quickSort
