var arr = [6, 7, 0, 4, 1, 5, 3, 2]
function quickSort(arr) {

  function partition(arr, il, ir) {
    var pivot = arr[Math.floor((il + ir) / 2)]

    while (il <= ir) {
      while(arr[il] < pivot) {
        il++
      }

      while(arr[ir] > pivot) {
        ir--
      }

      if (il <= ir) {
        [arr[il], arr[ir]] = [arr[ir], arr[il]]
        il++
        ir--
      }
    }
    return il
  }

  function quickSortRec (arr, il, ir) {
    var i
    if (arr.length > 1) {
      i = partition(arr, il, ir)
      if (il < i - 1) quickSortRec(arr, il, i - 1)
      if (ir > i) quickSortRec(arr, i, ir)
    }
    return arr
  }

  return quickSortRec(arr, 0, arr.length - 1)
}

console.log(quickSort(arr))

module.exports = quickSort
