require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./config/mongodb');
const userRouter = require('./routes/user.routes');

const app = express();
const PORT = process.env.PORT || 8080;

// database
mongodb.start();

// config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/auth', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on  ${PORT}`);
});
