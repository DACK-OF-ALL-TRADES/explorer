// import.....................................................
const { gql } = require("apollo-server-express");

// typeDefs.....................................................
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

  type Reviews {
    _id: ID
    city: String
    country: String
    review: String
    username: String
    rating: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    reviews: [Reviews]
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
    addReview(
      city: String!
      country: String!
      review: String!
      username: String!
      rating: Int!
    ): Reviews
  }
`;

// exports.....................................................
module.exports = typeDefs;
