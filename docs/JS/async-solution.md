# 异步解决方案

为了演示异步的解决方法，我们进行下面一系列异步操作：

读取本地一个叫“testDir”的文件夹，判断是不是文件夹，如果是文件夹就读取里面的所有文件，在这些文件中有一个叫"github"的，里面存的是github的一个json的url地址，然后读取这个json文件的内容。

[代码地址]()

## 回调

```js
const fs = require('fs')
const path = require('path')
const https = require('https')
const {targetPath} = require('./config')
let dirPath = path.join(__dirname, targetPath)

fs.stat(dirPath, (err, stats) => {
  if (err) {
    console.log(`发生错误：\n${err}`)
    return
  } else {
    if (stats.isDirectory()) {
      console.log(`${targetPath} is a dircectory`)
      fs.readdir(dirPath, (err, files) => {
        if (err) {
          console.log(`发生错误：\n${err}`)
          return
        } else {
          console.log(files)
          for (let i = 0; i < files.length;i++) {
            if (files[i] === "github") {
              let file = files[i]
              fs.readFile(path.join(dirPath, file), 'utf-8', (err, content) => {
                if (err) {
                  console.log(`发生错误：\n${err}`)
                  return
                }
                console.log(content)
                https.get(content, (res) => {
                  if (res.statusCode >= 400) {
                    console.log(`获取数据失败：错误代码：${res.statusCode}`)
                  } else {
                    var response = ""
                    res.on('data', (data) => {
                      response += data
                    })
                    res.on('end', () => {
                      console.log(response)
                    })
                  }
                }).on('error',err => {
                  console.log(`发生错误：\n${err}`)
                })
              })
            }
          }
        }
      })
    }
  }
})

```

## Promise

要用promise的话需要对回调包装一下

```js
// promisify.js
const fs = require('fs')
const https = require('https')

function promisify_fs (fn) {
  return function (args) {
      return new Promise((resolve, reject) =>
          fn(args, (err, data) =>  err ? reject(err) : resolve(data))
      )
  }
}

function promisify_Get (fn) {
  return function (url) {
      return new Promise((resolve, reject) =>
          fn(url, res => {
            if (res.statusCode >= 400) {
              reject(`获取数据失败：错误代码：${res.statusCode}`)
            } else {
              resolve(res)
            }
          })
      )
  }
}

const stat = promisify_fs(fs.stat)
const readDir = promisify_fs(fs.readdir)
const readFile = promisify_fs(fs.readFile)
const httpsGet = promisify_Get(https.get)

module.exports = {
  stat,
  readDir,
  readFile,
  httpsGet
}

```

然后使用这些promise

```js
const path = require('path')
const { stat, readDir, readFile, httpsGet } = require('./promisify')
const { targetPath } = require('./config')
let dirPath = path.join(__dirname, targetPath)

stat(dirPath)
  .then(stats => {
    if (stats.isDirectory()) {
      console.log(`${targetPath} is a dircectory`)
      return readDir(dirPath)
    }
  })
  .then(files => {
    console.log(files)
    for (let i = 0; i < files.length; i++) {
      if (files[i] === 'github') {
        let file = files[i]
        return readFile(path.join(dirPath, file))
      }
    }
  })
  .then(content => {
    content = content.toString()
    console.log(content)
    return httpsGet(content)
  })
  .then(res => {
    var response = ""
    res.on('data', (data) => {
      response += data
    })
    res.on('end', () => {
      console.log(response)
    })
  })
  .catch(e => {
    console.log(e)
  })

```

## async/await

异步解决的终极方案大概就是async/await了

```js
const path = require('path')
const { stat, readDir, readFile, httpsGet } = require('./promisify')
const { targetPath } = require('./config')
let dirPath = path.join(__dirname, targetPath)

async function asyncFn(dirPath) {
  try {
    let stats = await stat(dirPath)
    if (stats.isDirectory()) {
      console.log(`${targetPath} is a dircectory`)
      let files = await readDir(dirPath)
      console.log(files)
      for (let i = 0; i < files.length; i++) {
        if (files[i] === 'github') {
          var file = files[i]
          break;
        }
      }
      let content = await readFile(path.join(dirPath, file))
      content = content.toString()
      console.log(content)
      let res = await httpsGet(content)
      var response = ""
      res.on('data', (data) => {
        response += data
      })
      res.on('end', () => {
        console.log(response)
      })
    }
  } catch (e) {
    console.log(e)
  }
}
asyncFn(dirPath)
```

## generator

实际上使用generator可以模拟async/await实现

```js
const path = require('path')
const { stat, readDir, readFile, httpsGet } = require('./promisify')
const { targetPath } = require('./config')
let dirPath = path.join(__dirname, targetPath)

function* asyncFn(dirPath) {
  try {
    let stats = yield stat(dirPath)
    if (stats.isDirectory()) {
      console.log(`${targetPath} is a dircectory`)
      let files = yield readDir(dirPath)
      console.log(files)
      for (let i = 0; i < files.length; i++) {
        if (files[i] === 'github') {
          var file = files[i]
          break;
        }
      }
      let content = yield readFile(path.join(dirPath, file))
      content = content.toString()
      console.log(content)
      let res = yield httpsGet(content)
      var response = ""
      res.on('data', (data) => {
        response += data
      })
      res.on('end', () => {
        console.log(response)
      })
    }
  } catch (e) {
    console.log(e)
  }
}

function autoRun (gen) {
  var iter = gen()
  function nextRun(data) {
    var result = iter.next(data)
    if (result.done) return result.value
    result.value.then(data => nextRun(data))
  }
  nextRun()
}

asyncFn = asyncFn.bind(null, dirPath)
autoRun(asyncFn)
```

