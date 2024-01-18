const Products = require("../../models/Product");

module.exports.products = async (req, res) => {
    const products = await Products.find({
        delete: false, 
    })

    res.render("admin/pages/products/index", {
        pageTitle: "Trang sản phẩm",
        products: products, 
    })
}