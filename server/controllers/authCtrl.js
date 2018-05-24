const bcrypt = require("bcrypt");
const _ = require("lodash");

function createUser(req, res, next) {
  console.log("creating user...");
  const {
    userName,
    email,
    password,
    codingBackground,
    purpose,
    goals
  } = req.body;
  const startDate = new Date();

  console.log(req.session);
  req.app
    .get("db")
    .add_user([
      userName,
      bcrypt.hashSync(password, 10),
      email,
      startDate,
      codingBackground,
      purpose,
      goals
    ])
    .then(user => {
      req.session.user = _.omit(user[0], ["user_password"]);
      //201
      return res.status(200).send(_.omit(user[0], ["user_password"]));
    })
    .catch(err => {
      console.log(err.detail || err);
      return res
        .status(403)
        .send({ message: err.detail.slice(err.detail.indexOf("=") + 1) });
    });
}
function verifyUser(req, res, next) {
  const { userName, email, password } = req.body;
  console.log("finding user....");
  console.log(req.body);
  req.app
    .get("db")
    .get_users()
    .then(users => {
      const filtered = users.filter(e => {
        return e.user_email === email || e.user_name === userName;
      });
      if (!filtered[0]) {
        return res.status(401).send("Email or username does not exist");
      } else {
        req.session.user = _.omit(filtered[0], ["user_password"]);
        return filtered[0];
      }
    })
    .then(credentials => {
      if (bcrypt.compareSync(password, credentials.user_password)) {
        console.log("password confirmed...");
        res.status(200).send(req.session.user);
        res.locals.verifiedUser = req.session.user;
        //store user on local state.
        next();
      } else {
        return res.status(401).send({ message: "Incorrect password" });
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
      //does status code matter? 204
      return res.status(200).send({ message: "user deleted" });
    })
    .catch(err => {
      console.log(err);
      console.log("found an error joe");
    });
}
function getUser(req, res) {
  if (!req.session.user.user_name) {
    return res
      .status(401)
      .send({ message: "Unauthorized. Please login or register" });
  } else {
    return res.status(200).send(req.session.user);
  }
}
function logout(req, res) {
  if (req.session.user.user_name) {
    req.session.destroy();
    //does status code matter???? 204
    //204 wont send the response object
    return res.status(200).send({ message: "session ended" });
    console.log("session ended");
  } else {
    return res.status(403).send({
      message: "User not logged in."
    });
  }
}
module.exports = {
  createUser,
  verifyUser,
  deleteUser,
  getUser,
  logout
};
