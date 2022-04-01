const { Router } = require("express");
const route = Router();
const addingController = require("../controllers/addingController");

route.get("/addings", addingController.addinginfo);
route.post("/addAdding", addingController.adding);



module.exports = route;