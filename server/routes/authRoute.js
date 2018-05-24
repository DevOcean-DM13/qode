const express = require("express");
const router = express.Router();

const {
  createUser,
  verifyUser,
  deleteUser,
  getUser,
  logout
} = require(`${__dirname}/../controllers/authCtrl`);
router.use(function timeLog(req, res, next) {
  console.log(`Time: ${new Date()}`);
  next();
});
router.get("/user", getUser);
router.post("/signup", createUser);
router.post("/login", verifyUser);
router.get("/logout", logout);
router.delete("/delete_account", verifyUser, deleteUser);

module.exports = router;
