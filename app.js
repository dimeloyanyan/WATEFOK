const http = require('http');
const colors = require('colors');
const port = 4000;



const HandleServer = function (req, res){
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.write('xd');
    res.end(); 
}

const server = http.createServer(HandleServer);

server.listen(port, function(){
    console.log("Listening on port: 4000".yellow);
});