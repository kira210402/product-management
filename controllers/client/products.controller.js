const Product = require("../../models/Product");

const productsController = {
    index: async (req, res) => {
        const products = await Product.find({
            status: "active",
            delete: false
        });

        const newProducts = products.map((item) => {
            item.priceNew = (item.price - item.price * item.discountPercentage / 100).toFixed(2);
            return item;
        })

        console.log(newProducts);
        res.render("client/pages/products/index", {
            titlePage: "Products",
            products: newProducts
        })
    }
};

module.exports = productsController;