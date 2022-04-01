const route = require("express").Router();
const upload = require("../middlewares/upload");
const uploadImage = require("../middlewares/uploadImage");
const uploadController = require("../controllers/uploadController");

route.post(
  "/api/upload",
  uploadImage,
  upload,
  uploadController.uploadImg
);

module.exports = route;


