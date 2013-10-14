var http = require('http');
http.createServer(function (req, res) {


var fs = require('fs');

// readFileSync example - set equal to variable and return that variable
// var server = fs.readFileSync(__dirname+ '/data.txt');

// res.end(server);


//readFile example - function returns data 
 var server = fs.readFile(__dirname+ '/data.txt', function(err, data){

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(data)

});
})

.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');


