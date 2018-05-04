const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicpath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicpath));

io.on('connection',(socket)=>{
  console.log('new user connected');

  socket.emit('newMessage',{
    from: 'karthik',
    text: 'fine',
    createdAt: 123123
  });

  socket.on('createMessage',(message)=>{
    console.log('CreateMessage',message);
  });
  socket.on('disconnect', ()=>{
    console.log('Disconnected from client');
  });
});


server.listen(port,()=>{
  console.log(`Server is up on port ${port}`);
});
