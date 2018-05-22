import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";

// export const VERIFY_USER = gql`
//   query verifyUser($user_name: String, $user_password: String!, $email: String!) {
//     verifyUser(user_name: $user_name, user_password: $user_password, user_email: $email) {
//       user_id
//       user_name
//       user_email
//     }
//   }
// `;

export const ADD_USER = gql`
  mutation addUser(
    $user_name: String!
    $user_email: String!
    $user_password: String!
  ) {
    addUser(
      user_name: $user_name
      user_email: $user_email
      user_password: $user_password
    ) {
      user_name
      user_id
    }
  }
`;

export default class LoginUser extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email: "dumby3@gmail.com"
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };
  render() {
    return (
      <Mutation mutation={ADD_USER}>
        {(addUser, { loading, error, data }) => {
          console.log(data);
          if (loading) return <h1>Checking our servers!</h1>;
          if (error) return <h1>{error.message}</h1>;
          return (
            <div>
              {this.props.render(data)}

              <input name="username" onChange={this.handleInput} />
              <input name="password" onChange={this.handleInput} />
              <form
                onSubmit={e => {
                  /* e.preventDefault(); */

                  addUser({
                    variables: {
                      user_name: this.state.username,
                      user_password: this.state.password,
                      user_email: this.state.email
                    }
                  });
                }}
              >
                <button
                  style={{ padding: "2vh 3vw" }}
                  type="submit"
                  value="login"
                />
              </form>
            </div>
          );
        }}
      </Mutation>
    );
  }
}
