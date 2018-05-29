const lessonCompleted = (req, res, next) => {
  const {
    sectionCompleted,
    nextSection,
    userName,
    isCompleted,
    score
  } = req.body;
  req.app
    .get("db")
    .lesson_completed([
      sectionCompleted,
      nextSection,
      userName,
      isCompleted,
      new Date(),
      score
    ])
    .then(response => {
      res.status(200).send({ message: "Congratulations! Section completed!" });
    });
};
const getLesson = (req, res) => {
  const { lesson_id } = req.params;
  console.log(lesson_id);
  req.app
    .get("db")
    .get_lesson(lesson_id)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(console.log);
};
const getQuiz = (req, res) => {
  const { quiz_id } = req.params;
  req.app
    .get("db")
    .get_quiz(quiz_id)
    .then(response => {
      console.log(response);
      res.status(200).send(response);
    });
};
module.exports = {
  lessonCompleted,
  getLesson,
  getQuiz
};
