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
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      firstname: $firstname
      lastname: $lastname
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;
// //Added the mutations for the profile
export const UPDATE_FIRSTNAME = gql`
  mutation updateFirstName($firstNameValue: String!) {
    updateFirstName(firstname: $firstNameValue) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_LASTNAME = gql`
  mutation updateLastName($lastName: String!) {
    updateLastName(lastname: $lastName) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_EMAIL = gql`
  mutation updateEmail($email: String!) {
    updateEmail(email: $email) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_USERNAME = gql`
  mutation updateUsername($username: String!) {
    updateUsername(username: $username) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_FAVORITE_CITY = gql`
  mutation saveCity($cityID: String!) {
    saveCity(cityID: $cityID) {
      favorites
    }
  }
`;
