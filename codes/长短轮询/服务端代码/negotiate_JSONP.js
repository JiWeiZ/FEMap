const express = require('express')
const app = express()

class CodeGenerator {
    constructor () {
        this.code = undefined
        this.previousCode = undefined
        this.expire = ('' + Math.random()).slice(-8)
    }
    check (code) {
        return code === this.code || code === this.previousCode ? '验证通过' : '验证不通过'
    }
    setNewCode () {
        this.code = ('' + Math.random()).slice(-8)
        setTimeout(() => this.previousCode = this.code, 2000)
    }
    update (time) {
        this.expire = time
        setInterval(() => this.setNewCode(), time)
    }
}

let code_generator = new CodeGenerator()
code_generator.update(5000)

app.get('/qrcode', function (req, res) {
    // 自己拼jsonp
    let callback = req.query.callback
    let sendData = `{"code": ${code_generator.code}, "expire": ${code_generator.expire}}`
    let jsonp = `${callback}(${sendData})`
    res.send(jsonp)

    // 使用express的jsonp函数
    // res.jsonp({code: code_generator.code, expire: code_generator.expire})
})

app.get('/check/:code', function (req, res) {
    let checkCode = req.params.code
    let msg = code_generator.check(checkCode)
    res.setHeader('Access-control-Allow-Origin', '*')
    res.send(msg)
})

app.listen(8067)
