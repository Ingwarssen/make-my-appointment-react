const express = require('express')
const next = require('next')

const https = require('https')
const fs = require('fs')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const key = fs.readFileSync(__dirname + '/certs/selfsigned.key')
const cert = fs.readFileSync(__dirname + '/certs/selfsigned.crt')
const httpsOptions = { key, cert }

const port = 3000

app
  .prepare()
  .then(() => {
    const expressServer = express()

    expressServer.all('*', (req, res) => {
      return handle(req, res)
    })

    const httpsServer = https.createServer(httpsOptions, expressServer)

    httpsServer.listen(port, err => {
      if (err) {
        throw err
      } else {
        console.log(`Server started at ${port}`)
      }
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
