require('dotenv').config();
const HttpStatus = require('http-status-codes');
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./config/mongodb');
const userRouter = require('./routes/user.routes');
const jwt = require('../src/jwt');
const app = express();
const PORT = process.env.PORT || 8080;

// database
mongodb.start();

// config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes

app.post('/refreshToken', (req, res) => {
  // need to check refresh token is valid*
  const token = req.body.token;
  const userId = req.body.userId;
  jwt.isValidToken(token, process.env.JWT_REFRESH_KEY).then((result) => {
    if (result) {
      const accessToken = jwt.createAccessToken({ id: userId });
      res.status(HttpStatus.OK).json({ accessToken });
    }
    res.status(HttpStatus.UNAUTHORIZED);
  });
});

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/auth', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on  ${PORT}`);
});
