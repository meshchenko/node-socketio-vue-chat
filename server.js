const app = require('express')();
const http = require('http').Server(app); //let us to listen port and callback when we start server
let io = require('socket.io')(http);

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/index.html');
});

io.on('connection',function(){
  console.log('Someone joined');
})

http.listen(3000, function () {
  console.log('Started server');
})