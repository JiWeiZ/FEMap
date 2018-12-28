# 贪心算法

## 最少硬币找零问题

使用贪心算法解决最少硬币找零不一定可靠，比如总金额是6，如果用 [1, 3, 4] 面额执行贪心算法，会得到结果 [4, 1, 1] 。如果用动态规划的解法，会得到最优的结果 [3, 3] 

```js
function MinCoinChange(types){ 
  this.makeChange = function(amount) { 
    var change = [], total = 0 
    for (var i = types.length; i>=0; i--){
      var type = types[i] 
      while (total + type <= amount) {
        change.push(type)
        total += type
      } 
    } 
    return change; 
  }; 
} 
```

## 分数背包问题

求解分数背包问题的算法与动态规划版本稍有不同。在0-1背包问题中，只能向背包里装入完整的物品，而在分数背包问题中，我们可以装入分数的物品。

| 物品# | 重量weights | 价值values |
| ----- | ----------- | ---------- |
| 0     | 2           | 3          |
| 1     | 3           | 4          |
| 2     | 4           | 5          |

在动态规划的例子里，我们考虑背包能够携带的重量只有5。而在这个例子里，我们可以说最佳解决方案是往背包里装入物品1和物品2，总重量为5，总价值为7。 

如果在分数背包问题中考虑相同的容量，得到的结果是一样的。因此，我们考虑容量为6的情况。 在这种情况下，解决方案是装入物品1和物品2，还有25%的物品3。这样，重量为6的物品总价值为8.25。

```js
function knapSack(capacity, values, weights) { 
  var n = values.length, load = 0, val = 0; 
 
  for (var i = 0; i < n && load < capacity; i++) {
    if (weights[i] <= (capacity - load)) {
      val += values[i]; 
      load += weights[i]; 
    } else { 
      var r = (capacity - load) / weights[i]; 
      val += r * values[i]; 
      load += weights[i]; 
    } 
  } 
  return w; 
}
```

