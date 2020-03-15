const express = require('express');

const authRouter = require('./components/auth/authAPI');
const userRouter = require('./components/user/userAPI');
const itemRouter = require('./components/item/itemAPI');
const vehicleRouter = require('./components/vehicle/vehicleAPI');

// available API versions
const routes = express.Router();

routes.use('/auth', authRouter);
routes.use('/user', userRouter);
routes.use('/item', itemRouter);
routes.use('/vehicle', vehicleRouter);

module.exports = routes;