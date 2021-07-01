const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceID = process.env.SERVICE_ID;
const client = require("twilio")(accountSid, authToken);

function generateOTP(req, res) {
  const { toPhoneNumber } = req.body;
  try {
    client.verify
      .services(serviceID)
      .verifications.create({ to: toPhoneNumber, channel: "sms" })
      .then((verification) => {
        console.log("verification.status", verification.status);
        if (verification.status === "pending") {
          res.status(200).send("OTP Sent successfully");
        } else {
          res.status(400).send("Failed to send OTP");
        }
      });
  } catch (error) {
    console.log(error);
    res.status(400).send("serverError");
  }
}

function authenticateOTP(req, res) {
  const { toPhoneNumber, verificationCode } = req.body;
  try {
    client.verify
      .services(serviceID)
      .verificationChecks.create({ to: toPhoneNumber, code: verificationCode })
      .then((verification_check) => {
        console.log("verification_check.status", verification_check.status);
        if (verification_check.status === "approved") {
          res.status(200).send("OTP verified successfully");
        } else {
          res.status(403).send("Invalid OTP");
        }
      });
  } catch (error) {
    console.log(error);
    res.status(400).send("serverError");
  }
}

module.exports = {
  generateOTP,
  authenticateOTP,
};
