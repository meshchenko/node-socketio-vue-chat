const app = require('express')();
const http = require('http').Server(app); //let us to listen port and callback when we start server
const io = require('socket.io')(http);

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  let user = Date.now();

  socket.on('message.sent', function(message){
    io.emit('message', `User ${user}: ${message}`)
  });

  io.emit('message', `User ${user} connected`);
});

http.listen(3000, function () {
  console.log('Started server');
});