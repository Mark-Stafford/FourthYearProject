const { Router } = require("express");
const route = Router();
const reportController = require("../controllers/reportController");

route.get("/reports", reportController.reportinfo);
route.post("/addReport", reportController.report);



module.exports = route;