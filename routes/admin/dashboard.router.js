const router = require("express").Router();
const { model } = require("mongoose");
const dashboardController = require("../../controllers/admin/dashboard.controller");

router.get("/", dashboardController.dashboard);

module.exports = router;