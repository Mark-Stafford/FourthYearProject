const route = require("express").Router();
const upload = require("../middlewares2/upload2");
const uploadImage = require("../middlewares2/uploadImage2");
const auth2 = require("../middlewares/auth2");
const uploadController = require("../controllers/uploadController2");

route.post(
  "/api/upload",
  uploadImage,
  upload,
  auth2,
  uploadController.uploadAvar
);

module.exports = route;
