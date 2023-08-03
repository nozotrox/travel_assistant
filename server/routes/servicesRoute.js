const express = require("express");
const { getCityOptions, getCityInfo, getCountryData } = require("../controllers/servicesController");
const router = express.Router();


router.get('/travelinfo', getCityInfo);

router.get('/cities', getCityOptions);

module.exports = router;
