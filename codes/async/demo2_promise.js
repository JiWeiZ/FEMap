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
