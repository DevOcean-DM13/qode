import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";

const ADD_USER = gql`
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
      user_email
      user_password
    }
  }
`;

export default class Login extends Component {
  render() {
    return (
      <Mutation mutation={ADD_USER}>
        {(addUser, { loading, error }) => {
          <div>
            <input />
            <input />
          </div>;
        }}
      </Mutation>
    );
  }
}
