const lessonCompleted = (req, res, next) => {
  const {
    sectionCompleted,
    nextSection,
    userName,
    isCompleted,
    score
  } = req.body;
  //updates completed lessons in database.
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
module.exports = {
  lessonCompleted
};
