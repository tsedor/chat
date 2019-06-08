var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connect', function(socket){
  console.log('a user connected'+socket.id);
  socket.on('login', ({ username }) => {
    socket.username = username;
  });
  socket.on('message', data => {
    socket.broadcast.emit('newmessage', {message: data, author: socket.username})
  })
});

io.on('message', () => console.log('asd'))

http.listen(2037, function(){
  console.log('listening on *:2037');
});