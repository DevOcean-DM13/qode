require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4891;
const massive = require("massive");
const { json } = require("body-parser");
const session = require("session");
const authRoute = require(`${__dirname}/routes/authRoute`);

//top level middlewares
app.use(json());
app.use(cors());

massive(process.env.DB_CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
