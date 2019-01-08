var arr = [6, 7, 0, 4, 1, 5, 3, 2]

function Sort(arr) {
  function p (arr, il, ir) {
    var main = arr[Math.floor((il + ir) / 2)]
    while (il <= ir) {
      while(arr[il] < main) {
        il++
      }
      while(arr[ir] > main) {
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
  function sortRec(arr, il, ir) {
    if (arr.length > 1) {
      var i = p(arr, il, ir)
      if (il < i - 1) sortRec(arr, il, i -1)
      if (ir > i) sortRec(arr, i, ir)
    }
    return arr
  }
  return sortRec(arr, 0, arr.length - 1)
}

console.log(Sort(arr))
