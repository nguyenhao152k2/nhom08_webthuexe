const ProductRouter = require('./ProductRoute');

const routes = (app) => {
    app.use('/product', ProductRouter);
}

module.exports = routes;