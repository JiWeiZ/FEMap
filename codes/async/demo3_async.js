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
