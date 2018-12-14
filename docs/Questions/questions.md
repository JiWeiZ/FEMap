# 一些面试题

## 大数相加

```js
function bigAdd(min, max) {
  var res = ''
  if (min.length > max.length) [min, max] = [max, min]
  var maxLen = max.length
  min = min.padStart(maxLen, '0')
  for (var i = maxLen - 1, carry = 0; i >= 0; i--) {
    var temp = parseInt(min[i]) + parseInt(max[i]) + carry
    carry = temp > 9 ? 1 : 0
    var tempStr = temp + ''
    res = i === 0 ? tempStr + res : tempStr[1] + res
  }
  return res
}

console.log(bigAdd('999999999999999999999999999999999',
                   '9999999999999999999999999999999999999'))
```

## 分红包

<iframe width="100%" height="450" src="//jsfiddle.net/happysir/h4pztc5q/2/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

