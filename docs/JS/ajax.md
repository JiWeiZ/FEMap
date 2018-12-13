# Ajax

## XHR

## 长短轮询、协商

### 短轮询

短轮询：客户端不断发送请求，服务端接到请求后立刻响应之

![image](http://upload-images.jianshu.io/upload_images/12896055-84310aa304cdca3a.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

服务器代码，使用express：

```js
const express = require('express')
const app = express()

class CodeGenerator {
    constructor () {
        this.code = undefined
        this.previousCode = undefined
    }
    check (code) {
        return code === this.code || code === this.previousCode ? '验证通过' : '验证不通过'
    }
    setNewCode () {
        this.code = ('' + Math.random()).slice(-8)
        setTimeout(() => {
            this.previousCode = this.code
        }, 2000)
    }
    update (time) {
        setInterval(() => this.setNewCode(), time)
    }
}

let code_generator = new CodeGenerator()
code_generator.update(10000)

app.get('/qrcode', function (req, res) {
    res.setHeader('Access-control-Allow-Origin', '*')
    res.send({code: code_generator.code})
})

app.get('/check/:code', function (req, res) {
    let checkCode = req.params.code
    let msg = code_generator.check(checkCode)
    res.setHeader('Access-control-Allow-Origin', '*')
    res.send(msg)
})

app.listen(9999)
```

客户端代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div{
            margin: 10px;
            padding: 10px;
            border: 2px solid;
        }
        p {
            margin: 5px;
            padding: 5px;
            border: 1px solid;
        }
        span {
            margin: 5px;
        }
    </style>
</head>
<body>
    <div>
        <p id="time"></p>
        <p id="code"></p>
        <p>
            <input type="text" id="inputCode">
            <button id="button">发送</button>
            <span id="tips">还未发送</span>
        </p>
    </div>
</body>
<script>
    let code = document.querySelector("#code")
    let codePrevious
    setInterval(() => {
        time.innerHTML = new Date().toLocaleString()
    }, 1000)
    function poll () {
        const xhr = new XMLHttpRequest(),
            method = 'GET',
            url = 'http://localhost:9999/qrcode'
        xhr.open(method, url)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let xhrData = JSON.parse(xhr.responseText)
                    if (codePrevious !== xhrData.code) {
                        codePrevious = xhrData.code
                        code.innerHTML = codePrevious
                    }
                }
            }
        }
        xhr.send()
    }
    setInterval(poll, 1000)
    function check (code) {
        const xhr = new XMLHttpRequest(),
            method = 'GET',
            url = `http://localhost:9999/check/${code}`
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                tips.innerHTML = xhr.responseText
            }
        }
        xhr.open(method, url)
        xhr.send()
    }
    button.addEventListener('click', function () {
        let code = inputCode.value
        check(code)
    })
</script>
</html>
```

### 长轮询

长轮询：客户端发请求，服务器接收到请求后不立即响应，挂起一段时间以后再响应；同时客户端收到响应后立刻请求

![image](http://upload-images.jianshu.io/upload_images/12896055-6d31cb19d33ab5a9.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

客户端代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div{
            margin: 10px;
            padding: 10px;
            border: 2px solid;
        }
        p {
            margin: 5px;
            padding: 5px;
            border: 1px solid;
        }
        span {
            margin: 5px;
        }
    </style>
</head>
<body>
    <div>
        <p id="time"></p>
        <p id="code">请等待</p>
        <p>
            <input type="text" id="inputCode">
            <button id="button">发送</button>
            <span id="tips">还未发送</span>
        </p>
    </div>
</body>
<script>
    let code = document.querySelector("#code")
    setInterval(() => {
        time.innerHTML = new Date().toLocaleString()
    }, 1000)
    function longPoll () {
        const xhr = new XMLHttpRequest(),
            method = 'GET',
            url = 'http://localhost:8065/qrcode'
        xhr.open(method, url)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    longPoll()
                    let xhrData = JSON.parse(xhr.responseText)
                    code.innerHTML = xhrData.code
                }
            }
        }
        xhr.send()
    }
    longPoll()
    function check (code) {
        const xhr = new XMLHttpRequest(),
            method = 'GET',
            url = `http://localhost:8065/check/${code}`
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                tips.innerHTML = xhr.responseText
            }
        }
        xhr.open(method, url)
        xhr.send()
    }
    button.addEventListener('click', function () {
        let code = inputCode.value
        check(code)
    })
</script>
</html>
```

服务端代码：

```js
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

app.get('/qrcode', async function (req, res) {
    res.setHeader('Access-control-Allow-Origin', '*')
    let code = await code_generator.update(5000)
    res.send({code})
})

app.get('/check/:code', function (req, res) {
    let checkCode = req.params.code
    let msg = code_generator.check(checkCode)
    res.setHeader('Access-control-Allow-Origin', '*')
    res.send(msg)
})


app.listen(8065)
```

但是这里有一个很不愉快的事情：第一次请求以后必须等待很长时间才能获得结果，也就是说首次加载时页面没有数据

我们这么修改一下代码：每次客户端请求数据的时候都带上一个clientCode，这个clientCode就是服务端的code

然后我们第一次传的时候把这个clientCode置为0，此时服务端code无论如何不能是0，他俩不相等；随后始终把服务端的code赋值给clientCode，这样如果clientCode和服务端的code，他俩相等，这就区分了客户端首次请求和非首次请求

```js
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
```

客户端

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div{
            margin: 10px;
            padding: 10px;
            border: 2px solid;
        }
        p {
            margin: 5px;
            padding: 5px;
            border: 1px solid;
        }
        span {
            margin: 5px;
        }
    </style>
</head>
<body>
    <div>
        <p id="time"></p>
        <p id="code"></p>
        <p>
            <input type="text" id="inputCode">
            <button id="button">发送</button>
            <span id="tips">还未发送</span>
        </p>
    </div>
</body>
<script>
    let code = document.querySelector("#code")
    time.innerHTML = new Date().toLocaleString()
    setInterval(() => {
        time.innerHTML = new Date().toLocaleString()
    }, 1000)
    function longPoll (clientCode) {
        const xhr = new XMLHttpRequest(),
            method = 'GET',
            url = `http://localhost:8065/qrcode/${clientCode}`
        xhr.open(method, url)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let xhrData = JSON.parse(xhr.responseText)
                    code.innerHTML = xhrData.code
                    longPoll(xhrData.code)
                }
            }
        }
        xhr.send()
    }
    longPoll(0)
    function check (code) {
        const xhr = new XMLHttpRequest(),
            method = 'GET',
            url = `http://localhost:8065/check/${code}`
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                tips.innerHTML = xhr.responseText
            }
        }
        xhr.open(method, url)
        xhr.send()
    }
    button.addEventListener('click', function () {
        let code = inputCode.value
        check(code)
    })
</script>
</html>
```

### 协商

我觉得协商是最好的一种办法，服务器端不需要做太多改变，只是每次传code的时候在传一个过期时间，然后前端等待这么长时间再发起请求

服务端代码

```js
const express = require('express')
const app = express()

class CodeGenerator {
    constructor () {
        this.code = undefined
        this.previousCode = undefined
        this.expire = undefined
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
    res.setHeader('Access-control-Allow-Origin', '*')
    res.send({code: code_generator.code, expire: code_generator.expire})
})

app.get('/check/:code', function (req, res) {
    let checkCode = req.params.code
    let msg = code_generator.check(checkCode)
    res.setHeader('Access-control-Allow-Origin', '*')
    res.send(msg)
})

app.listen(8066)
```

客户端代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div{
            margin: 10px;
            padding: 10px;
            border: 2px solid;
        }
        p {
            margin: 5px;
            padding: 5px;
            border: 1px solid;
        }
        span {
            margin: 5px;
        }
    </style>
</head>
<body>
    <div>
        <p id="time"></p>
        <p id="code"></p>
        <p>
            <input type="text" id="inputCode">
            <button id="button">发送</button>
            <span id="tips">还未发送</span>
        </p>
    </div>
</body>
<script>
    let code = document.querySelector("#code")
    let codePrevious, expire
    setInterval(() => {
        time.innerHTML = new Date().toLocaleString()
    }, 1000)
    function poll () {
        const xhr = new XMLHttpRequest(),
            method = 'GET',
            url = 'http://localhost:8066/qrcode'
        xhr.open(method, url)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let xhrData = JSON.parse(xhr.responseText)
                    if (codePrevious !== xhrData.code) {
                        codePrevious = xhrData.code
                        code.innerHTML = codePrevious
                        expire = parseInt(xhrData.expire, 10)
                        setTimeout(poll, expire)
                    }
                }
            }
        }
        xhr.send()
    }
    poll()
    function check (code) {
        const xhr = new XMLHttpRequest(),
            method = 'GET',
            url = `http://localhost:8066/check/${code}`
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                tips.innerHTML = xhr.responseText
            }
        }
        xhr.open(method, url)
        xhr.send()
    }
    button.addEventListener('click', function () {
        let code = inputCode.value
        check(code)
    })
</script>
</html>
```