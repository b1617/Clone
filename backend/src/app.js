const express = require('express');
const userRouter = require('./routes/user.routes');
const mongodb = require('./config/mongodb');

const app = express();
const PORT = process.env.PORT || 3000;

mongodb.start();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/auth', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on  ${PORT}`);
});
