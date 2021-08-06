const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    firstname: String
    lastname: String
    favorites: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
      firstname: String!
      lastname: String!
    ): Auth
    login(email: String!, password: String!): Auth
    updateFirstName(updateFirstName: String!): Auth
    updateLastName(lastName: String!): Auth
    updateEmail(email: String!): Auth
    updateUsername(username: String!): Auth
    saveCity(cityID: String!): User
  }
`;

module.exports = typeDefs;
