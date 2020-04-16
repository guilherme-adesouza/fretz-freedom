const express = require('express');

const authRouter = require('./components/auth/authAPI');
const userRouter = require('./components/user/userAPI');
const itemRouter = require('./components/item/itemAPI');
const vehicleRouter = require('./components/vehicle/vehicleAPI');
const tokenRouter = require('./components/token/tokenAPI');
const regionRouter = require('./components/region/regionAPI');
//const orderRouter = require('./components/order/orderAPI');

// available API versions
const routes = express.Router();

routes.use('/auth', authRouter);
routes.use('/user', userRouter);
routes.use('/item', itemRouter);
routes.use('/vehicle', vehicleRouter);
routes.use('/token', tokenRouter);
routes.use('/region', regionRouter);
//routes.use('/order', orderRouter);

module.exports = routes;
