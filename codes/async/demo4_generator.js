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
