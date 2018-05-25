const express = require("express");
const router = express.Router();

const { lessonCompleted } = require(`${__dirname}/../controllers/contentCtrl`);
const { verifyUser } = require(`${__dirname}/../controllers/authCtrl`);

//middleware to track time of current request.
router.use(function timeLog(req, res, next) {
  console.log(`CONTENT Time: ${new Date()}`);
  next();
});

router.put("/lesson_completed", lessonCompleted);
//NOW we specify the HTTP method. Opposed to just "app.use"

module.exports = router;
//export the express route
