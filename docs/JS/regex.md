# 正则表达式

参考文章：[JS正则表达式完整教程（略长）](https://juejin.im/post/5965943ff265da6c30653879)

正则一般还是处理字符串的时候用的多，这里有几个常用的API

1. regex.test()
2. regex.exec()
3. str.match()
4. str.replace()

## 正则的括号

### 引用分组

```js
var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
var result = string.replace(regex, "$2/$3/$1");
console.log(result); 
// => "06/12/2017"

// ====================================================

var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";

regex.test(string); // 正则操作即可，例如
//regex.exec(string);
//string.match(regex);

console.log(RegExp.$1); // "2017"
console.log(RegExp.$2); // "06"
console.log(RegExp.$3); // "12"
```



### 反向引用

/1, /2, /3...就是 反向引用

```js
var regex = /^((\d)(\d(\d)))\1\2\3\4$/;
var string = "1231231233";
console.log( regex.test(string) ); // true
console.log( RegExp.$1 ); // 123
console.log( RegExp.$2 ); // 1
console.log( RegExp.$3 ); // 23
console.log( RegExp.$4 ); // 3
```

`\10`是表示第10个分组，还是`\1`和`0`呢？答案是前者。

在正则里引用了不存在的分组时，此时正则不会报错，只是匹配反向引用的字符本身。例如`\2`，就匹配"\2"。

## 题目

### 匹配16进制颜色

```js
// #ffbbad
// #Fc01DF
// #FFF
// #ffE
function color (str) {
  // 注意或的顺序
  var regex = /#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}/g
  return str.match(regex)
}

var string = "#ffbbad #Fc01DF #FFF #ffE";
console.log(color(string))
```

### 匹配时间

#### 匹配 "23:59", "02:07"

```js
var regex = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/;
console.log( regex.test("23:59") ); 
console.log( regex.test("02:07") ); 
// => true
// => true
```

#### 要求匹配7:9，也就是说时分前面的0可以省略

```js
var regex = /^(0?[0-9]|1[0-9]|2[0-3]):(0?[0-9]|[1-5][0-9])$/g
console.log(regex.test('7:9'))
```

### 匹配日期

#### 匹配"2017-06-10"

```js
var regex = /\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/
console.log( regex.test("2017-06-10") );
// => true
```

### 数字插入逗号

#### 不匹配开头

```js
var regex = /(?!^)/
```

#### 把"12345678"替换成"12,345,678"

```js
var regex = /(?!^)(?=(\d{3})+$)/g
```

#### 把"12345678 123456789"替换成"12,345,678 123,456,789"

```js
var str = '12345678 123456789'
var regex = /\B(?=(\d{3})+\b)/g
var str1 = str.replace(regex, ',')
```

### 验证密码

#### 密码长度6-12位，由数字、小写字符和大写字母组成

```js
var regex = /^[0-9a-zA-Z]{6,12}$/
```

#### 密码长度6-12位，由数字、小写字符和大写字母组成，必须包括数字。

`(?=.*[0-9])`表示 “任意个通配符 + 一个数字”的前面的位置

```js
var regex = /(?=.*[0-9])^[0-9a-zA-Z]{6,12}$/
```

#### 密码长度6-12位，由数字、小写字符和大写字母组成，必须包括数字和小写字母。

上面那种情况再添加一种小写字母的情况

```js
var regex = /(?=.*[0-9])(?=.*[a-z])^[0-9a-zA-Z]{6,12}$/
```

#### 密码长度6-12位，由数字、小写字符和大写字母组成，不能全部是数字。

```js
var regex = /(?!^[0-9]{6,12}&)(?=.*[a-z])^[0-9a-zA-Z]{6,12}$/
```

#### 密码长度6-12位，由数字、小写字符和大写字母组成，必须至少包括2种字符。

<法1>：数字+小写字母，数字+大写字母，小写字母+大写字母，“或”一下

```js
var regex = /((?=.*[0-9])(?=.*[a-z])|(?=.*[0-9])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z]))^[0-9a-zA-Z]{6,12}$/
```

<法2>：3个“不能”且一下

```js
var regex = /(?!^[0-9]{6,12}&)(?!^[a-z]{6,12}&)(?!^[A-Z]{6,12}&)(?=.*[a-z])^[0-9a-zA-Z]{6,12}$/
```

### 模拟trim

```js

```

