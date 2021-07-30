const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    firstname: String
    lastname: String
    city: String
    country: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    
  }

  type Mutation {
    
  }
`;

module.exports = typeDefs;
