const http = require('http');
const colors = require('colors');

const HandleServer = function (req, res){
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.write('xd');
    res.end(); 
}

const server = http.createServer(HandleServer);

server.listen(3000, function(){
    console.log("Listening on port: 3000".yellow);
});