const Products = require("../../models/Product");
const filterStatusHelper = require("../../helpers/filterStatus");
const searchHelper = require("../../helpers/search");

module.exports.products = async (req, res) => {
    const filterStatus = filterStatusHelper(req.query);


    let find = {
        delete: false,
    }

    if (req.query.status) {
        find.status = req.query.status;
    }

    const objectSearch = searchHelper(req.query);

    if (objectSearch.keyword) {
        find.title = objectSearch.regex;
    }

    const products = await Products.find(find)

    res.render("admin/pages/products/index", {
        pageTitle: "Trang sản phẩm",
        products: products,
        filterStatus: filterStatus,
        keyword: objectSearch.keyword,
    })
}