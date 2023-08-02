const express = require("express");
const { getCityOptions, getCityInfo } = require("../controllers/servicesController");
const router = express.Router();


router.get('/travelinfo', getCityInfo);

router.get('/cities', getCityOptions);

router.post('/xrate', (req, res) => {});


module.exports = router;
