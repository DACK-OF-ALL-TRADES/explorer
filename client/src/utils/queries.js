// imports.....................................................
import { gql } from "@apollo/client";

// get_me.....................................................
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      password
      firstname
      lastname
      favorites
    }
  }
`;

// get_reviews.....................................................
export const QUERY_REVIEWS = gql`
  {
    reviews {
      _id
      city
      country
      review
      username
      rating
    }
  }
`;
