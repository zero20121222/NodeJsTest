var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World\n');
}).listen(6868, "127.0.0.1");//监听的端口

//控制台
console.log('Server running at http://127.0.0.1:6868/');
