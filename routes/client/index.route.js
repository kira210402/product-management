const router = require("express").Router();
const homeController = require("../../controllers/client/home.controller")

// routes
router.get("/", homeController.index);

module.exports = router;

