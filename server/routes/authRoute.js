const express = require("express");
const router = express.Router();
const {
  createUser,
  verifyUser,
  deleteUser
} = require(`${__dirname}/../controllers/authCtrl`);

//Log time for this route.
router.use(function timeLog(req, res, next) {
  console.log(`Time: ${new Date()}`);
  next();
});
// create a user(register)
router.post("/signup", createUser);

// get a user(login)
router.get("/login", verifyUser);

// delete a user
router.delete("/delete_account", verifyUser, deleteUser);
module.exports = router;
