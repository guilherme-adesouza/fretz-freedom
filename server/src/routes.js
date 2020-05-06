const express = require('express');

const authRouter = require('./components/auth/authAPI');
const userRouter = require('./components/user/userAPI');
const itemRouter = require('./components/item/itemAPI');
const vehicleRouter = require('./components/vehicle/vehicleAPI');
const tokenRouter = require('./components/token/tokenAPI');
const regionRouter = require('./components/region/regionAPI');
const personRouter = require('./components/person/personAPI');
const orderRouter = require('./components/order/orderAPI');
const stateRouter = require('./components/state/stateAPI');
const cityRouter = require('./components/city/cityAPI');
const travelRouter = require('./components/travel/travelAPI');
const establishmentRouter = require('./components/establishment/establishmentAPI');

// available API versions
const routes = express.Router();

routes.use('/auth', authRouter);
routes.use('/user', userRouter);
routes.use('/item', itemRouter);
routes.use('/vehicle', vehicleRouter);
routes.use('/token', tokenRouter);
routes.use('/region', regionRouter);
routes.use('/person', personRouter);
routes.use('/order', orderRouter);
routes.use('/state', stateRouter);
routes.use('/city', cityRouter);
routes.use('/travel', travelRouter);
routes.use('/establishment', establishmentRouter);

module.exports = routes;
