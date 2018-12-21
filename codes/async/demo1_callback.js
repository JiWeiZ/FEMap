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
