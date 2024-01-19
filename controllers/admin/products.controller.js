const Products = require("../../models/Product");
const filterStatusHelper = require("../../helpers/filterStatus");
const searchHelper = require("../../helpers/search");
const Product = require("../../models/Product");

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

    // Pagination
    let objectPagination = {
        currentPage: 1,
        limitItems: 4,
    };

    if (req.query.page) {
        objectPagination.currentPage = parseInt(req.query.page);
    }

    objectPagination.skip = (objectPagination.currentPage - 1) * objectPagination.limitItems;

    const countProducts = await Product.countDocuments(find);
    const totalPages = Math.ceil(countProducts/objectPagination.limitItems);
    objectPagination.totalPages = totalPages;
    // End Pagination


    const products = await Products.find(find).limit(objectPagination.limitItems).skip(objectPagination.skip);

    res.render("admin/pages/products/index", {
        pageTitle: "Trang sản phẩm",
        products: products,
        filterStatus: filterStatus,
        keyword: objectSearch.keyword,
        pagination: objectPagination,
    })
}