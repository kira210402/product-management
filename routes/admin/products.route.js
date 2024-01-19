const router = require("express").Router();
const controller = require("../../controllers/admin/products.controller")

router.get("/", controller.index);

router.patch("/change-status/:status/:id", controller.changeStatus);

router.patch("/change-multi", controller.changeMulti);

module.exports = router;