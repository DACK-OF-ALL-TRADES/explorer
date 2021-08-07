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
