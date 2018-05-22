import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

export const VERIFY_USER = gql`
  query {
    verifyUser(user_name: "mightJoe", user_password: "hashpassword") {
      user_id
    }
  }
`;

export default class LoginUser extends Component {
  render() {
    return (
      <Query query={VERIFY_USER}>
        {({ loading, error, data }) => {
          if (loading) return <h1>Checking our servers!</h1>;
          if (error) return <h1>{error.message}</h1>;
          return <div>{this.props.ender(data)}</div>;
        }}
      </Query>
    );
  }
}
