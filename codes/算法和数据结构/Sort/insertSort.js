var arr = [6, 7, 0, 4, 1, 5, 3, 2]

function insertSort(arr) {
  var len = arr.length, j, current
  for (var i = 1; i < len; i++) {
    j = i
    current = arr[i]
    while (j > 0 && arr[j - 1] > current) {
      arr[j] = arr[j - 1]
      j--
    }
    if (j !== i) arr[j] = current
  }
  return arr
}

console.log(insertSort(arr))
