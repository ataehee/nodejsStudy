const http = require('http')
const server = http.createServer((req, res) => {
    res.end('Hello world, Lite!')
})

server.listen('8000')
