const express = require("express");
const { getCityOptions, getCityInfo, getCurrency } = require("../controllers/servicesController");
const router = express.Router();


router.get('/travelinfo', getCityInfo);

router.get('/cities', getCityOptions);

router.get('/xrate', getCurrency);


module.exports = router;
