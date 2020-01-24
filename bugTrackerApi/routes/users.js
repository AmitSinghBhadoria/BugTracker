const express = require("express");
const router = express.Router();
const userController = require("../api/controllers/user");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/postRegisterUser", (req, res) => {
  userController.registerUser(req, res);
});
router.post("/loginUser", (req, res) => {
  userController.loginUser(req, res);
});

module.exports = router;
