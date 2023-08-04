const express = require("express");
const router = express.Router();
const { body } = require('express-validator');

// ::: Controller Modules
const authController = require('../controllers/authController');

// ::: POST to creating user
router.post("/register", [
    body('name').isLength({min: 3}).withMessage("Please provide a valid name. Names should be at least 3 charcters long."),
    body('email').isEmail().withMessage("Please provide a valid email!"),
    body('password').exists().isLength({min: 8}).withMessage("Password should be at least 8 characters long."),
], authController.register);

router.post("/login", [
    body('email').isEmail().withMessage("Please provide a valid email!"),
    body('password').exists().withMessage("Password is required. (Min: 8 characters long)"),
] ,authController.login);

module.exports = router;



