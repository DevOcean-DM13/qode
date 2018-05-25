const express = require("express");
const router = express.Router();

const {
  createUser,
  verifyUser,
  deleteUser,
  getUser,
  logout
} = require(`${__dirname}/../controllers/authCtrl`);
const { greetings } = require(`${__dirname}/../controllers/nodeMailerCtrl`);
router.use(function timeLog(req, res, next) {
  console.log(`AUTH Time: ${new Date()}`);
  if (req.headers && req.headers.referer) {
    console.log(req.headers.referer.slice(-13));
    console.log(req.session);
    if (req.headers.referer.slice(-13) === req.session.rando) {
      console.log("ACCOUNT ACTIVATED");
    }
  }
  next();
});

//Gets current req.session.user object...no auth required
router.get("/user", getUser);
//Creates user, then does 2-factor auth with nodemailer...
//or it WILL do 2 factor auth... hahah lol. im trying guys...😂
router.post("/signup", createUser, greetings);
//Creates new req.session.user obj
router.post("/login", verifyUser);
//ends session
router.get("/logout", logout);
//deletes user, and any relatives, from database
router.delete("/delete_account", verifyUser, deleteUser);

module.exports = router;
