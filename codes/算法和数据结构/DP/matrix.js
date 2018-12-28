function matrixChainOrder(p) {
  var n = p.length - 1
  var m = []
  for (var i = 1; i <= n; i++) {
    m[i] = []
    m[i][i] = 0
  }

  for (var L = 2; L <= n; L++) {
    for (var i = 1; i <= n - L + 1; i++) {
      var j = i + L - 1
      m[i][j] = Number.MAX_SAFE_INTEGER;
      for (var k = i; k <= j - 1; k++) {
        var q = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j] //{1}
        if (q < m[i][j]) {
          m[i][j] = q
        }
      }
    }
  }
  return m[1][n]
}
p = [10,100,5,50,1]
console.log(matrixChainOrder(p))
