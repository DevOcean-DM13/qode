const express = require("express");
const router = express.Router();

const {
  lessonCompleted,
  getLesson,
  getQuiz
} = require(`${__dirname}/../controllers/contentCtrl`);
const { verifyUser } = require(`${__dirname}/../controllers/authCtrl`);

//middleware to track time of current request.
router.use(function timeLog(req, res, next) {
  console.log(`COlNTENT Time: ${new Date()}`);
  next();
});

router.get("/get_lesson/:lesson_id", getLesson);
router.get("/get_quiz/:quiz_id", getQuiz);

router.put("/lesson_completed/", lessonCompleted);
//NOW we specify the HTTP method. Opposed to just "app.use"

module.exports = router;
//export the express route
