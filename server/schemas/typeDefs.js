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
    favorites: [SavedCities]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type SavedCities {
    cityID: Int
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
      firstname: String!
      lastname: String!
      city: String
      country: String
    ): Auth
    login(email: String!, password: String!): Auth
    addFirstName(firstName: String!): Auth
    updateLastName(lastName: String!): Auth
    updateEmail(email: String!): Auth
    updateUsername(username: String!): Auth
    saveCity(cityID: Int!): User
  }
`;

module.exports = typeDefs;
