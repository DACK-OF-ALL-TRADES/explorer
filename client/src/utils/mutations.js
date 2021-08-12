// imports.....................................................
import { gql } from "@apollo/client";

// login.....................................................
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

// create_user.....................................................
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

// update_firstname.....................................................
export const UPDATE_FIRSTNAME = gql`
  mutation updateFirstName($firstname: String!) {
    updateFirstName(firstname: $firstname) {
      firstname
    }
  }
`;

// update_lastname.....................................................
export const UPDATE_LASTNAME = gql`
  mutation updateLastName($lastname: String!) {
    updateLastName(lastname: $lastname) {
      lastname
    }
  }
`;

// update_email.....................................................
export const UPDATE_EMAIL = gql`
  mutation updateEmail($email: String!) {
    updateEmail(email: $email) {
      email
    }
  }
`;

// update_username.....................................................
export const UPDATE_USERNAME = gql`
  mutation updateUsername($username: String!) {
    updateUsername(username: $username) {
      username
    }
  }
`;

// add_favorite_city.....................................................
export const ADD_FAVORITE_CITY = gql`
  mutation saveCity($cityID: String!) {
    saveCity(cityID: $cityID) {
      favorites
    }
  }
`;

// delete_user.....................................................
export const DELETE_USER = gql`
  mutation deleteUser($userID: ID!) {
    deleteUser(userID: $userID) {
      _id
    }
  }
`;

// remove_favorite_city.....................................................
export const REMOVE_FAVORITE_CITY = gql`
  mutation removeCity($cityValue: String!) {
    removeCity(cityValue: $cityValue) {
      favorites
    }
  }
`;

// add_review.....................................................
export const ADD_REVIEW = gql`
  mutation addReview(
    $city: String!
    $country: String!
    $review: String!
    $username: String!
    $rating: Int!
  ) {
    addReview(
      city: $city
      country: $country
      review: $review
      username: $username
      rating: $rating
    ) {
      city
      country
      review
      username
      rating
    }
  }
`;
