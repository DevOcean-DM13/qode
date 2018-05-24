require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4891;
const massive = require("massive");
const { json } = require("body-parser");
const session = require("express-session");
const authRoute = require(`${__dirname}/routes/authRoute`);
const parseurl = require("parseurl");

//top level middlewares
app.use(json());
app.use(cors());

massive(process.env.DB_CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false, //only have a session if it was interacted with. Saves on storage.
    resave: false,
    cookie: {
      maxAge: 1000 * 60 // min
    }
  })
);

app.use(function(req, res, next) {
  //create a user object
  if (!req.session.user) {
    req.session.user = {};
    req.session.views = {};
    next();
  }
  //count the views
  var pathname = parseurl(req).pathname;
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;
  next();
});

app.use("/api/auth", authRoute);

// app.use((req, res, next) => {
//   res.status(404).send({ message: "PaGe NoT FOUnd:(" });
// });

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
