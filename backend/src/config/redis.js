const redis = require('redis');

let client = null;

function start() {
  client = redis.createClient();
  client.on('error', (error) => {
    console.log(error);
  });
}

function stop() {
  client.quit();
}

function get(key) {
  return new Promise((resolve, reject) => {
    client.get(key, (err, values) => {
      if (err) {
        reject(err);
      }
      resolve(values);
    });
  });
}

function set(key, value) {
  client.set(key, value);
}

function remove(key) {
  client.del(key);
}

module.exports = {
  start,
  stop,
  get,
  remove,
  set
};
