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
      console.log(`i = ${i}时，j = ${L} + ${i} - 1 = ${j}\n`)
      m[i][j] = Number.MAX_SAFE_INTEGER;
      console.log(`M[${i}${j}] = ∞，进入关于k的循环，k ∈ [${i}, ${j - 1}]`)
      for (var k = i; k <= j - 1; k++) {
        var q = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j] //{1}
        console.log(`当k = ${k}时，计算q的值：
q = M[${i}, ${k}] + M[${k+1}, ${j}] + p[${i-1}] * p[${k}] * p[${j}] = ${m[i][k]} + ${m[k + 1][j]} + ${p[i - 1]} * ${p[k]} * ${p[j]} = ${q}
比较q和M[${i}, ${j}]的值，M[${i}, ${j}] = ${m[i][j]}`)
        if (q < m[i][j]) {
          m[i][j] = q
          console.log(`显然q < M[${i}, ${j}]，于是得M[${i}, ${j}] = ${q}\n`)
          //{2}
        } else {
          console.log(`显然q >= M[${i}, ${j}]，于是得M[${i}, ${j}] = ${m[i][j]}\n`)
        }
      }
    }
  }
  //{3}
  return m[1][n]
}
// p = [30,35,15,5,10,20,25]
p = [10,100,5,50,1]
console.log(matrixChainOrder(p))
