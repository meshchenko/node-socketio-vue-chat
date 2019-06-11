const app = require('express')();
const http = require('http').Server(app); //let us to listen port and callback when we start server

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/index.html');
});

http.listen(3000, function () {
  console.log('Started server');
})