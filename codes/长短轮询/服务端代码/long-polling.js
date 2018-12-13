const express = require('express')
const app = express()

class CodeGenerator {
    constructor () {
        let initCode = ('' + Math.random()).slice(-8)
        this.code = initCode
        this.previousCode = initCode
    }
    check (code) {
        return code === this.code || code === this.previousCode ? '验证通过' : '验证不通过'
    }
    setNewCode () {
        this.code = ('' + Math.random()).slice(-8)
        setTimeout(() => this.previousCode = this.code, 2000)
    }
    update (time) {
        let self = this
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.setNewCode()
                resolve(this.code)
            }, time)
        })
    }

}

let code_generator = new CodeGenerator()

app.get('/qrcode/:clientCode', async function (req, res) {
    res.setHeader('Access-control-Allow-Origin', '*')
    let clientCode = req.params.clientCode
    let code
    if (clientCode === code_generator.code) {
        code = await code_generator.update(5000)
    } else {
        code = code_generator.code
    }
    res.send({code, updateTimes: code_generator.updateTimes})
})

app.get('/check/:code', function (req, res) {
    let checkCode = req.params.code
    let msg = code_generator.check(checkCode)
    res.setHeader('Access-control-Allow-Origin', '*')
    res.send(msg)
})


app.listen(8065)
