require('dotenv').config();
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const redis = require('./config/redis');
const mongodb = require('./config/mongodb');
const app = express();
const PORT = process.env.PORT || 8080;

// database
mongodb.start();
// redis.start();

// config
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.get('/', (req, res) => {
  res.send('Hello world ??');
});

app.listen(PORT, () => {
  console.log(`Server is running on  ${PORT}`);
});
