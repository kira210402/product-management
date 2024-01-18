const dashboardRoute = require("./dashboard.router");
const systemConfig = require("../../config/system")
const productsRoute = require("./products.route");

module.exports = (app) => {
    const PATH_ADMIN = systemConfig.prefixAdmin;

    app.use(PATH_ADMIN + "/dashboard", dashboardRoute)
    app.use(PATH_ADMIN + "/products", productsRoute);
};