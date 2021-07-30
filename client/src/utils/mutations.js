import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $firstname: String!
    $lastname: String!
    $city: String!
    $country: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      firstname: $firstname
      lastname: $lastname
      city: $city
      country: $country
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;
