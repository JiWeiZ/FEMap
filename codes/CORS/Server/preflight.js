const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json({ "limit": "2048kb" }))
app.use(express.json());
// bodyParser.urlencoded 用来解析 request 中 body的 urlencoded字符，
// 只支持utf-8的编码的字符,也支持自动的解析gzip 和 zlib.
// 返回的对象是一个键值对，当extended为false的时候，键值对中的值就为
// 'String'或'Array'形式，为true的时候，则可为任何数据类型。

app.use(bodyParser.urlencoded({ extended: false }));

app.options('/check', function (req, res) {
  res.setHeader('Access-control-Allow-Origin', '*')
  res.setHeader('Access-control-Allow-Methods', 'POST, GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Foo-Header')
  res.end()
})

app.post('/check', function (req, res) {
  let checkCode = req.body.code
  res.setHeader('Access-control-Allow-Origin', '*')
  // res.setHeader('Access-Control-Expose-Headers', '*')
  res.send(`接收到前端数据：${checkCode}`)
})

app.listen(8066, () => console.log(`Sever running at 8066`))
