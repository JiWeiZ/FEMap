function lcs(wordX, wordY) {
  var res = []

  for (var i = 0; i <= wordX.length; i++) {
    res[i] = []
    for (var j = 0; j <= wordY.length; j++) {
      if (i == 0 || j == 0) {
        res[i][j] = ''
      } else if (wordX[i - 1] == wordY[j - 1]) {
        res[i][j] = res[i - 1][j - 1] + wordX[i - 1]
      } else if (res[i - 1][j].length > res[i][j - 1].length) {
        res[i][j] = res[i - 1][j]
      } else {
        res[i][j] = res[i][j - 1]
      }
    }
  }
  return res[wordX.length][wordY.length]
}
console.log(lcs('acbaed', 'abcadf'))
console.log(lcs('abcadf', 'acbaed'))
