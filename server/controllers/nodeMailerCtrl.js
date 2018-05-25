var nodemailer = require("nodemailer");
var ses = require("nodemailer-ses-transport");

var validator = require("email-validator");

var rando = Math.ceil((Math.random() + 1) * 1000000000000); //random 13 digit number

var transporter = nodemailer.createTransport(
  ses({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY
  })
);

const greetings = (req, res, next) => {
  const { user_email } = req.session.user;
  if (validator.validate(user_email)) {
    var { history, email } = req.body;
    console.log(req.body);

    transporter.sendMail({
      from: "qodecommunity@gmail.com",
      to: user_email,
      subject: "Welcome to Qode:)",
      text: `Welcome to the Qode community!

      We have received a request to authorize this email address for use with Qode. If you requested this verification, please go to the following URL to confirm that you are authorized to use this email address:${
        process.env.AUTH_EMAIL_REDIRECT
      }/${rando} Your request will not be processed unless you confirm the address using this URL. This link expires 24 hours after your original verification request.

      If you did NOT request to verify this email address, do not click on the link. Please note that many times, the situation isn't a phishing attempt, but either a misunderstanding of how to use our service, or someone setting up email-sending capabilities on your behalf as part of a legitimate service, but without having fully communicated the procedure first. If you are still concerned, please forward this notification to ${
        process.env.QODE_EMAIL
      } and let us know in the forward that you did not request the verification.`
    });
    // req.session.destroy();
    //DESTROYING SESSION FORCES THE USER TO LOGIN ONCE THEY CLICK THE LINK IN EMAIL
  }
};

const getRando = (req, res) => {
  return {
    rando: rando,
    user: req
  };
};

module.exports = {
  greetings,
  getRando
};
