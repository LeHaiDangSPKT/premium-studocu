const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user");

router.post("", UserController.add);
router.post("/check", UserController.check);
module.exports = router;
