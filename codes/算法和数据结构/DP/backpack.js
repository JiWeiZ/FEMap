function backpack(capacity, w, v) {
  var F = []

  for (var i = 0; i <= v.length; i++) {
    F[i] = []
    for (var j = 0; j <= capacity; j++) {
      if (i == 0 || j == 0) {
        F[i][j] = {
          value: 0,
          option: []
        }
      } else if (j < w[i - 1]) {
        F[i][j] = {
          value: F[i - 1][j].value,
          option: [i - 1]
        }
      } else if (F[i - 1][j].value > v[i - 1] + F[i - 1][j - w[i - 1]].value) {
        F[i][j] = F[i - 1][j]
      } else {
        F[i][j] = {
          value: v[i - 1] + F[i - 1][j - w[i - 1]].value,
          option: F[i - 1][j - w[i - 1]].option.concat(i - 1)
        }
      }
    }
  }

  return F[v.length][capacity]
}

var v = [3, 4, 5], w = [2, 3, 4], capacity = 7
console.log(backpack(capacity, w, v)) //输出 {value: 7, option: [0, 1]}
