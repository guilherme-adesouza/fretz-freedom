const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

const authRouter = require('./components/auth/authAPI');
const userRouter = require('./components/user/userAPI');
const itemRouter = require('./components/item/itemAPI');
const vehicleRouter = require('./components/vehicle/vehicleAPI');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/item', itemRouter);
app.use('/vehicle', vehicleRouter);

app.get('/', (req, res) => {
  res.send({message: "Fretz & Freedom API it's working!"});
});

app.use(function (req, res, next) {
  res.status(404).send({message: "Sorry can't find that!"});
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send({error: true, message: "Ops!"});
});

module.exports = app;