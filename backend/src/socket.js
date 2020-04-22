socketHandler = (socket) => {
  socket.emit('time', new Date());

  socket.on('message', (text) => {
    console.log('message', text);
    if (!text) text = '';
    socket.broadcast.emit('message', text);
  });

  socket.on('end', () => {
    socket.disconnect();
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
};
module.exports = socketHandler;
