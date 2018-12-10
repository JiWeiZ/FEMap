const http = require('http')
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const Handlebars = require('handlebars')
const checksum = require('checksum')
const promisify = require('util').promisify
const readdir = promisify(fs.readdir)
const stat = promisify(fs.stat)

const { port, hostname, root } = require('./config')
const checkCache = require('./checkCache')
const mime = require('./mime')
const tplPath = path.join(__dirname, './dir.tpl')
const source = fs.readFileSync(tplPath)
const template = Handlebars.compile(source.toString())
let i = 1

const server = http.createServer(async function (req, res) {
  console.log(`接受了${i++}次http请求`)
  const filePath = path.join(root, req.url)
  try {
    const stats = await stat(filePath)
    if (stats.isDirectory()) {
      const files = await readdir(filePath)
      if (files) {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        const dir = path.relative(root, filePath)
        const data = {
          files,
          title: path.basename(filePath),
          dir: dir ? `/${dir}` : ''
        }
        res.end(template(data))
      }
    } else if (stats.isFile()) {
      res.setHeader('Content-Type', mime(filePath))
      res.setHeader('Expires', new Date(Date.now() + 600000))
      res.setHeader('Cache-Control', "max-age=10")
      const isCache = checkCache(stats, req, res)
      if (isCache) {
        res.statusCode = 304
        res.end()
      } else {
        res.statusCode = 200
        fs.createReadStream(filePath).pipe(res)
      }
    }
  } catch (e) {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain')
    res.write(`${e.toString()}\n`)
    res.end(`${filePath} is not a directory or file`)
  }

})

server.listen(port, hostname, () => {
  const addr = `http://${hostname}:${port}`
  console.log(`Server started at ${chalk.green(addr)}`)
})
