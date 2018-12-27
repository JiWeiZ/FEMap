var arr = [6, 7, 0, 4, 1, 5, 3, 2]

function mergeSort(arr) {

  function merge(left, right) {
    var result = [], il = 0, ir = 0

    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++])
      } else {
        result.push(right[ir++])
      }
    }

    while (il < left.length) {
      result.push(left[il++])
    }

    while (ir < right.length) {
      result.push(right[ir++])
    }

    return result
  }

  function mergeSortRec(arr) {
    var len = arr.length
    if (len === 1) return arr
    var midIdx = Math.floor(len / 2),
      leftArr = arr.slice(0, midIdx),
      rightArr = arr.slice(midIdx, len)
    return merge(mergeSortRec(leftArr), mergeSortRec(rightArr))
  }
  return mergeSortRec(arr)
}

console.log(mergeSort(arr))
