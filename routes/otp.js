const express = require("express");
const router = express.Router();
const { generateOTP, authenticateOTP } = require("../controllers/otp");

router.post("/generate", generateOTP);

router.post("/authenticate", authenticateOTP);

module.exports = router;
