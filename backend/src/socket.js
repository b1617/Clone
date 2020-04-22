socketHandler = (socket) => {
  socket.emit('time', new Date());

  socket.on('end', () => {
    socket.disconnect();
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
};
module.exports = socketHandler;
