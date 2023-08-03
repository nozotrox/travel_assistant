const express = require("express");
const router = express.Router();

// ::: Controller Modules
const authController = require('../controllers/authController');

// ::: POST to creating user
router.post("/register", authController.register);

router.post("/login", authController.login);

module.exports = router;



