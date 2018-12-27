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
