// function knapsack(weights, values, W){
//   var n = weights.length;
//   var f = new Array(n)
//   f[-1] = new Array(W+1).fill(0)
//   for(var i = 0 ; i < n ; i++){ //注意边界，没有等号
//       f[i] = new Array(W).fill(0)
//       for(var j=0; j<=W; j++){//注意边界，有等号
//           if( j < weights[i] ){ //注意边界， 没有等号
//               f[i][j] = f[i-1][j]
//           }else{
//               f[i][j] = Math.max(f[i-1][j], f[i-1][j-weights[i]]+values[i]);//case 3
//           }
//       }
//   }
//   return f[n-1][W]
// }
// var a = knapsack([2,3,4],[3,4,5],11)
// console.log(a)

//by 司徒正美
function knapsack(weights, values, W){
  var n = weights.length -1
  var f = [[]]
  for(var j = 0; j <= W; j++){
      if(j < weights[0]){ //如果容量不能放下物品0的重量，那么价值为0
         f[0][j] = 0
      }else{ //否则等于物体0的价值
         f[0][j] = values[0]
      }
  }
  for(var j = 0; j <= W; j++){
      for(var i = 1; i <= n; i++ ){
          if(!f[i]){ //创建新一行
              f[i] = []
          }
          if(j < weights[i]){ //等于之前的最优值
              f[i][j] = f[i-1][j]
          }else{
              f[i][j] = Math.max(f[i-1][j], f[i-1][j-weights[i]] + values[i])
          }
      }
  }
  return f[n][W]
}
var a = knapsack([2,3,4],[3,4,5],10)
console.log(a)
