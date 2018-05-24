const bcrypt = require("bcrypt");
const _ = require("lodash");

function createUser(req, res, next) {
  const { userName, email, password } = req.body;
  const startDate = new Date();

  console.log(req.session);
  return req.app
    .get("db")
    .add_user([userName, bcrypt.hashSync(password, 10), email, startDate])
    .then(user => {
      req.session.user = _.omit(user[0], ["user_password"]);
      res.status(201).send(_.omit(user[0], ["user_password"]));
    })
    .catch(err => {
      console.log(err);
      res
        .status(403)
        .send({ message: err.detail.slice(err.detail.indexOf("=") + 1) });
    });
}
function verifyUser(req, res, next) {
  const { userName, email, password } = req.body;
  console.log("finding user....");
  req.app
    .get("db")
    .get_users()
    .then(users => {
      const filtered = users.filter(e => {
        return e.user_email === email || e.user_name === userName;
      });
      if (!filtered[0]) {
        res.status(401).send("Email or username does not exist");
      } else {
        return filtered[0];
      }
    })
    .then(credentials => {
      if (bcrypt.compareSync(password, credentials.user_password)) {
        res.status(200).send(_.omit(credentials, ["user_password"]));
        res.locals.verifiedUser = _.omit(credentials, ["user_password"]);
        //store user on local state.
        next();
      } else {
        res.status(401).send({ message: "Incorrect password" });
      }
    })
    .catch(err => {
      console.log(err);
    });
}
function deleteUser(req, res, next) {
  console.log("deleting user...");
  console.log(res.locals.verifiedUser);

  req.app
    .get("db")
    .delete_user(res.locals.verifiedUser.user_name)
    .then(response => {
      console.log(response);
      next();
      // res.status(204).send({ message: "user deleted" });
    })
    .catch(err => {
      console.log(err);
      console.log("found an error joe");
    });
}
function getUser(req, res) {
  if (!req.session.user.user_name) {
    res.status(401).send({ message: "Unauthorized. Please login or register" });
  } else {
    res.status(200).send(req.session.user);
  }
}
function logout(req, res) {
  console.log("hit");
  // req.session.destroy(() => {
  //   res.redirect(process.env.HOME_URL);
  // });
}
module.exports = {
  createUser,
  verifyUser,
  deleteUser,
  getUser,
  logout
};
