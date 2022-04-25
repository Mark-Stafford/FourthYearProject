const { Router } = require("express");
const route2 = Router();
const userController2 = require("../controllers/userController2");
const auth2 = require("../middlewares2/auth2");

route2.post("/api/auth2/register2", userController2.register);
route2.post("/api/auth2/activation2", userController2.activate);
route2.post("/api/auth2/signing2", userController2.signing);
route2.post("/api/auth2/access2", userController2.access);
route2.post("/api/auth2/forgot_pass2", userController2.forgot);
route2.post("/api/auth2/reset_pass2", auth2, userController2.reset);
route2.get("/api/auth2/user2", auth2, userController2.info);
route2.patch("/api/auth2/user_update2", auth2, userController2.update);
route2.get("/api/auth2/signout2", userController2.signout);
route2.post("/api/auth2/google_signing2", userController2.google);

module.exports = route2;
