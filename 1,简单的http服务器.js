var http = require('http')
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>this is a nodejs server</h1>');
    res.end('<p>ok I know, the two sentences is write by html  </p>')
}).listen(3000);
console.log('HTTP server is listening at port 3000')