const mongoose = require('mongoose');

function start() {
  mongoose.connect('mongodb://localhost/clone', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
}

function stop() {
  mongoose.connection.close();
}

module.exports = {
  start,
  stop
};
