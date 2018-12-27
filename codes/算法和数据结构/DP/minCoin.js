var times = 0
function MinCoinChange(types) {
  var cache = {}
  this.makeChange = function (amount) {
    var self = this
    if (amount <= 0) return []
    if (cache[amount]) return cache[amount]
    var res = [], residualRes, residual
    for (var i = types.length - 1; i >= 0; i--) { // 从大面额开始找
      var type = types[i]
      residual = amount - type
      if (residual >= 0) {
        residualRes = self.makeChange(residual)
        if (res.length > residualRes.length + 1 || !res.length) {
            res = [type].concat(residualRes)
            // console.log(`[${res.join(', ')}] for ${amount}`)
        }
      }
    }
    cache[amount] = res
    return res
  }
}

var minCoinChange = new MinCoinChange([1, 5, 10, 25])
console.log(minCoinChange.makeChange(36))
