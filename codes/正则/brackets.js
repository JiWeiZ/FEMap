// 模拟trim
function trim1 (str) {
  var reg = /^\s+|\s+$/g
  return str.replace(reg, '')
}
function trim2 (str) {
  var reg = /^\s*(.*?)\s*$/g
  return str.replace(reg, "$1")
}
console.log(trim1('    foo bar   '))
console.log(trim2('    foo bar   '))

// 将每个单词的首字母转换为大写
function titleize (str) {
  var reg = /(^|\s)\w/g
  return str.replace(reg, c => c.toUpperCase())
}
console.log(titleize('foo   bar you'))
