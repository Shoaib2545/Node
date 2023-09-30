const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Hello World')
    }else if(req.url === '/about'){
        res.end('This is about page')
    }else {
        res.end(`<h1>Opps!!</h1><p>page you are looking for doesn\'t exist</p><a href='/'>Back to home page</a>`)
    }
})

server.listen(5000)
