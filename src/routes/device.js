const express = require("express");
const router = express.Router();

const device = require("../controllers/device.js");

router.get("/api/devices", device.getDevices);
router.get("/api/device/get-device-by-name", device.getProductByName);

module.exports = router;
