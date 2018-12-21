const path = require('path')
const fs = require('fs')
const { readDir } = require('./promisify')
const { targetPath } = require('./config')
let dirPath = path.join(__dirname, targetPath)

function promisify_read(fn) {
  return function (args) {
    return new Promise((resolve, reject) =>
      fn(args, (err, data) => {
        if (err) {
          reject(err)
        } else {
          setTimeout(() => resolve(data), 3000)
        }
      })
    )
  }
}

let readFile = promisify_read(fs.readFile)

function PromiseSerial(tasks, fn) {
  tasks.reduce((p, c) => p.then(c).then(data => fn(data)), Promise.resolve())
}

// 以下方法串行执行
readDir(dirPath)
  .then(files => {
    console.log(files)
    let tasks = files.map(file => readFile.bind(null, path.join(dirPath, file)))
    PromiseSerial(tasks, data =>
      console.log(`file内容：${data.toString()}时间戳：${Date.now()}`))
  })

// Promise.all()：并行执行
// readDir(dirPath)
//   .then(files => {
//     console.log(files)
//     let tasks = files.map(file => readFile(path.join(dirPath, file)))
//     Promise.all(tasks).then(data => data.forEach(data => console.log(`file内容：${data.toString()}时间戳：${Date.now()}`)))
//   })

// readDir(dirPath)
//   .then(files => {
//     console.log(files)
//     let tasks = files.map(file => readFile.bind(null, path.join(dirPath, file)))
//     tasks.reduce((p, c) =>
//       p
//         .then(c)
//         .then(data => console.log(`file内容：${data.toString()}时间戳：${Date.now()}`))
//       , Promise.resolve())
//   })

// readDir(dirPath)
// .then(files => {
//   console.log(files)
//   Promise.resolve()
//   .then(() => readFile(path.join(dirPath, files[0])))
//   .then(data => console.log(`file内容：${data.toString()}时间戳：${Date.now()}`))
//   .then(() => readFile(path.join(dirPath, files[1])))
//   .then(data => console.log(`file内容：${data.toString()}时间戳：${Date.now()}`))
//   .then(() => readFile(path.join(dirPath, files[2])))
//   .then(data => console.log(`file内容：${data.toString()}时间戳：${Date.now()}`))
//   .then(() => readFile(path.join(dirPath, files[3])))
//   .then(data => console.log(`file内容：${data.toString()}时间戳：${Date.now()}`))
// })

// readDir(dirPath)
// .then(files => {
//   console.log(files)
//   let tasks = files.map(file => readFile.bind(null, path.join(dirPath, file)))
//   Promise.resolve()
//   .then(tasks[0])
//   .then(data => console.log(`file内容：${data.toString()}时间戳：${Date.now()}`))
//   .then(tasks[1])
//   .then(data => console.log(`file内容：${data.toString()}时间戳：${Date.now()}`))
//   .then(tasks[2])
//   .then(data => console.log(`file内容：${data.toString()}时间戳：${Date.now()}`))
//   .then(tasks[3])
//   .then(data => console.log(`file内容：${data.toString()}时间戳：${Date.now()}`))
// })
