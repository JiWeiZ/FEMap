var arr = [16,25,37,29,11,75,32,1]

function bubbleSort(arr) {
  var len = arr.length
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
    console.log(arr)
  }
  return arr
}

console.log(bubbleSort(arr))
