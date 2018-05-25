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
  //track time the day that the user's account was created.
  req.app
    .get("db")
    .add_user([
      userName,
      bcrypt.hashSync(password, 10),
      //synchronously hashes password
      email,
      startDate,
      codingBackground,
      purpose,
      goals
    ])
    .then(user => {
      console.log(user);
      //puts user on req.session.user object
      req.session.user = _.omit(user[0], ["user_password"]);
      res.status(201).send(_.omit(user[0], ["user_password"]));
      // res.sendStatus(201);
      // next(); //proceed to next middlewarse
    })
    .catch(err => {
      console.log("here joe", err);
      return res
        .status(500)
        .send({ message: err.detail.slice(err.detail.indexOf("=") + 1) });
      //slices the error message so it's easier to read on client side
    });
}
function verifyUser(req, res, next) {
  const { userName, password, email } = req.body;
  console.log("finding user....");

  console.log(req.body);
  //gets all the users from DB

  req.app
    .get("db")
    .get_users()
    .then(users => {
      console.log(users);
      //filter through the array of users that match either userName or email
      const filtered = users.filter(e => {
        return (
          e.user_email === userName ||
          e.user_name === userName ||
          e.user_email === email
        );
        //userName is going to either be an email or username
      });
      //If no user matches the email or userName send 401 Unauthorized
      console.log(filtered[0]);
      if (!filtered[0]) {
        console.log("401 1");
        return res.status(401).send("Email or username does not exist");
      }
      // else if (!filtered[0].account_activated) {
      //   return res.status(401).send({ error: "Please verify you email." });
      // }
      else {
        //USER'S USERNAME OR EMAIL HAS BEEN VERIFIED BY THIS POINT

        if (!req.session.user.user_name || req.method == "DELETE") {
          /*If the user object is empty OR if the HTTP method is DELETE,
            put users info, except password, onto the req.session object
            then pass EVERYTHING to be handled as promise.*/

          req.session.user = _.omit(filtered[0], ["user_password"]);
          return filtered[0];
        } else {
          //Doesnt allow user to keep logging in.
          return res.status(400).send({ message: "Already logged in" });
        }
      }
    })
    .then(credentials => {
      console.log("cred: ", credentials);
      //compares provided password with hashed password in DB
      if (
        credentials &&
        bcrypt.compareSync(password, credentials.user_password)
      ) {
        console.log(req.method);
        if (req.method !== "DELETE") {
          console.log("password confirmed...");
          console.log(req.session.user);
          return res.status(200).send(req.session.user);
          //user fully authenticated.
        } else {
          res.locals.verifiedUser = req.session.user;
          /*res.locals allows data to be passed between middlewares
          that happen to serve the request.*/
          next();
        }
      } else {
        //Password got rejected
        console.log("401 2");
        return res.status(401).send({ message: "Incorrect password" });
      }
    })
    .catch(err => {
      //good practice to ALWAYS log your errors.
      console.log(err);
    });
}
function deleteUser(req, res, next) {
  console.log("deleting user...");
  //after user is verified, NOW it will allow you to delete the user.
  req.app
    .get("db")
    .delete_user(res.locals.verifiedUser.user_name)
    .then(afterwards => {
      //deletes user from DB then destroys the session...No evidence left behind...
      req.session.destroy();
      res.status(200).send({ message: "session ended" });
    })
    .catch(err => {
      console.log(err);
    });
}
function getUser(req, res) {
  /*Grabs current user on sessions. No auth 
  required if session hasnt expired or been destroyed*/
  if (!req.session.user.user_name) {
    console.log("getuser err");
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
    return res.status(200).send({ message: "session ended" });
    console.log("session ended");
  } else {
    //Forbidden request. Cannot destroy a session that doesnt exist.
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
