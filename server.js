const app = require('express')();
const http = require('http').Server(app); //let us to listen port and callback when we start server
const io = require('socket.io')(http);

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  let user = Date.now();

  socket.broadcast.emit('message', `User ${user} connected`); //show to anyone exept new user
});

http.listen(3000, function () {
  console.log('Started server');
});