const { buildSchema } = require("graphql");
const {
  getUsers,
  getUser,
  addUser,
  verifyUser
} = require(`${__dirname}/schemaCtrl`);

const schema = buildSchema(`
    type User{
        user_id: Int!
        user_name: String!
        user_email: String!
        user_password: String!
        profile_pic: String!
        current_lesson: Int
        progress_bar: Float
        start_date: String!
        coding_background: String
        purpose: String
    }
    type Query{
        getUsers: [User]!
        getUser(id: Int!): User!
        verifyUser(user_name: String, user_email: String, user_password: String!): User!
    }
    type Mutation{
        addUser(
            user_name: String!
            user_email: String!
            user_password: String!
        ): User!
    }
`);
const root = {
  getUser,
  getUsers,
  addUser,
  verifyUser
};
module.exports = {
  root,
  schema
};
