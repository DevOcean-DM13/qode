const bcrypt = require("bcrypt");
const _ = require("lodash");

// const authenticate = (req, res, next) => {
//   console.log(req.method);
//   const { userName, email, password } = req.body;
//   if (req.query.action === "login" || req.query.action === "delete") {
//     console.log("finding user....");
//     req.app
//       .get("db")
//       .get_users()
//       .then(users => {
//         const filtered = users.filter(e => {
//           return e.user_email === email || e.user_name === userName;
//         });
//         if (!filtered[0]) {
//           res.status(401).send("Email or username does not exist");
//         } else {
//           return filtered[0];
//         }
//       })
//       .then(credentials => {
//         if (bcrypt.compareSync(password, credentials.user_password)) {
//           res.status(200).send(_.omit(credentials, ["user_password"]));
//           next();
//           if (req.query.action === "delete") {
//             console.log("deleting user...");
//             req.app
//               .get("db")
//               .delete_user(credentials.user_name)
//               .then(response => {
//                 console.log(response);
//                 res.status(204).send({ message: "user deleted" });
//               })
//               .catch(err => {
//                 console.log(err);
//                 console.log("found an error joe");
//               });
//           }
//         } else {
//           res.status(401).send({ message: "Incorrect password" });
//         }
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   } else if (req.query.action === "signup") {
//     const { userName, email, password } = req.body;
//     const startDate = new Date();
//     return req.app
//       .get("db")
//       .add_user([userName, bcrypt.hashSync(password, 10), email, startDate])
//       .then(user => {
//         res.status(201).send(_.omit(user[0], ["user_password"]));
//       })
//       .catch(err => {
//         console.log(err);
//         res
//           .status(403)
//           .send({ message: err.detail.slice(err.detail.indexOf("=") + 1) });
//       });
//   } else {
//     res.status(400).send({ message: "Invalid query" });
//   }
// };

function createUser(req, res, next) {
  const { userName, email, password } = req.body;
  const startDate = new Date();
  return req.app
    .get("db")
    .add_user([userName, bcrypt.hashSync(password, 10), email, startDate])
    .then(user => {
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
  console.log(req.body);
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
        //store user on local state.
        res.locals.verifiedUser = _.omit(credentials, ["user_password"]);
        next();
      } else {
        res.status(401).send({ message: "Incorrect password" });
      }
    })
    .catch(err => {
      console.log(err);
    });
}
function deleteUser(req, res) {
  console.log("deleting user...");
  console.log(res.locals.verifiedUser);

  req.app
    .get("db")
    .delete_user(res.locals.verifiedUser.user_name)
    .then(response => {
      console.log(response);
      // res.status(204).send({ message: "user deleted" });
    })
    .catch(err => {
      console.log(err);
      console.log("found an error joe");
    });
}
module.exports = {
  createUser,
  verifyUser,
  deleteUser
};
