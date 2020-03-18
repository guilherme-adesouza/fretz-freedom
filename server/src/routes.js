const express = require('express');

const {checkToken} = require('./components/auth/security');

const authRouter = require('./components/auth/authAPI');
const userRouter = require('./components/user/userAPI');
const itemRouter = require('./components/item/itemAPI');
const vehicleRouter = require('./components/vehicle/vehicleAPI');

// available API versions
const routes = express.Router();

routes.use('/auth', authRouter);
routes.use('/user', checkToken, userRouter);
routes.use('/item', checkToken, itemRouter);
routes.use('/vehicle', checkToken, vehicleRouter);

module.exports = routes;
