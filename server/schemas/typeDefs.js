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
    updateFirstName(firstname: String!): User
    updateLastName(lastname: String!): User
    updateEmail(email: String!): User
    updateUsername(username: String!): User
    deleteUser(userID: ID!): User
    saveCity(cityID: String!): User
    removeCity(cityValue: String!): User
  }
`;

module.exports = typeDefs;
