const router = require("express").Router();
const productsController = require("../../controllers/client/products.controller")

router.get("/", productsController.index);

module.exports = router;
