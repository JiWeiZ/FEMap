function color (str) {
  // 注意或的顺序！
  var regex = /#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}/g
  return str.match(regex)
}

var string = "#ffbbad #Fc01DF #FFF #ffE";
console.log(color(string))
