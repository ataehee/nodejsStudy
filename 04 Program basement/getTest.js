const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    console.log('req method: ',req.method) //GET
    const url = req.url
    console.log('url: ', req.url) // /api/test.html?a=1&b=2&c=10
    req.query = querystring.parse(url.split('?')[1])
    console.log('req query: ', req.query) //[Object: null prototype] { a: '1', b: '2', c: '10' }
    res.end(JSON.stringify(req.query))
    // 如果不用JSON.stringify处理，直接使用会报错。
    // res.end(req.query) 
})

server.listen(8000)