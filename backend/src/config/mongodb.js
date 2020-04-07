const mongoose = require('mongoose');

start = () => {
  mongoose.connect('mongodb://localhost/clone', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
};

stop = () => {
  mongoose.connection.close();
};

module.exports = {
  start,
  stop
};
