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
