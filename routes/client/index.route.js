const homeRoute = require("./home.route");
const productRoute = require("./products.router");

module.exports = (app) => {
    app.use("/", homeRoute);
    app.use("/products", productRoute);
};

