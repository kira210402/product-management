const router = require("express").Router();
const controller = require("../../controllers/admin/products.controller")

router.get("/", controller.index);

router.patch("/change-status/:status/:id", controller.changeStatus);

module.exports = router;