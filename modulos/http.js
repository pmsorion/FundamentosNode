const http = requere('http');

http.createServer((req, res) => {
    console.log('neuva peticion¡');
    console.log(req.url);

    res.end();
}).lisent(3000);