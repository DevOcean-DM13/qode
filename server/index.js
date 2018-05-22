require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4891;
const massive = require("massive");
const { json } = require("body-parser");
const session = require("session");
const graphqlHTTP = require("express-graphql");
const { schema, root } = require(`${__dirname}/graphql/schema.js`);

//top level middlewares
app.use(json());
app.use(cors());

massive(process.env.DB_CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.use("/graphql", graphqlHTTP({ schema, rootValue: root, graphiql: true }));
app.post("/graphql", graphqlHTTP({ schema, rootValue: root, graphiql: false }));

app.listen(port, () => {
  console.log(`GraphQL server listening on port ${port}`);
});
