const express = require("express");
const router = express.Router();

const {
  createUser,
  verifyUser,
  deleteUser,
  getUser,
  logout
} = require(`${__dirname}/../controllers/authCtrl`);
const {
  greetings,
  getRando
} = require(`${__dirname}/../controllers/nodeMailerCtrl`);
router.use(function timeLog(req, res, next) {
  console.log(`AUTH Time: ${new Date()}`);
  var randoObj = getRando();

  if (req.headers && req.headers.referer) {
    if (req.headers.referer.slice(-13) == randoObj.rando) {
      console.log(`here is key${req.sessionID}`, req.sessionStore);
      for (var prop in req.sessionStore.sessions) {
        return req.app
          .get("db")
          .activate_account(
            JSON.parse(req.sessionStore.sessions[prop]).user.user_name
          )
          .then(response => {
            return res.sendStatus(200);
          })
          .catch(console.log);
      }
    } else {
      console.log("Rando no match");
      res.status(401).send({ error: "Verification session expired" });
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
