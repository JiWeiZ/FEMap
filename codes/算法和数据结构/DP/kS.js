function knapSack(capacity, weights, values, n) {

  function findValues(n, capacity, kS, weights, values) {
    var i = n, k = capacity;
    console.log('解决方案包含以下物品：');

    while (i > 0 && k > 0) {
      if (kS[i][k] !== kS[i - 1][k]) {
        console.log('物品' + i + '，重量：' + weights[i - 1] + '，价值：' + values[i - 1]);
        i--;
        k = k - kS[i][k];
      } else {
        i--;
      }
    }
  }

  var i, w, a, b, kS = [];

  for (i = 0; i <= n; i++) { //{1}
    kS[i] = [];
  }

  for (i = 0; i <= n; i++) {
    for (w = 0; w <= capacity; w++) {
      if (i == 0 || w == 0) { //{2}
        kS[i][w] = 0;
      } else if (weights[i - 1] <= w) { //{3}
        a = values[i - 1] + kS[i - 1][w - weights[i - 1]];
        b = kS[i - 1][w];
        kS[i][w] = (a > b) ? a : b; //{4} max(a,b)
      } else {
        kS[i][w] = kS[i - 1][w]; //{5}
      }
    }
  }
  findValues(n, capacity, kS, weights, values)
  return kS[n][capacity]; //{6}
}
var values = [3, 4, 5],
  weights = [2, 3, 4],
  capacity = 55,
  n = values.length;
console.log(knapSack(capacity, weights, values, n)); //输出 7
