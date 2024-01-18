const router = require("express").Router();
const productsController = require("../../controllers/admin/products.controller")

router.get("/", productsController.products);

module.exports = router;