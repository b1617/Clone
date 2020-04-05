const mongoose = require('mongoose');

start = () => {
  mongoose.connect('mongodb://localhost/clone', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

stop = () => {
  mongoose.connection.close();
};

module.exports = {
  start,
  stop,
};
