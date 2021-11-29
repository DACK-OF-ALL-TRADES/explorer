// import.....................................................
const { AuthenticationError } = require("apollo-server-express");
const { User, Reviews } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    reviews: async (parent, args, context) => {
      if (context.user) {
        return Reviews.find();
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    saveCity: async (parent, { cityID }, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(
          {
            _id: context.user._id,
          },
          {
            $push: { favorites: cityID },
          },
          {
            new: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removeCity: async (parent, { cityValue }, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(
          {
            _id: context.user._id,
          },
          {
            $pull: { favorites: cityValue },
          },
          {
            new: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addUser: async (
      parent,
      { username, email, password, firstname, lastname }
    ) => {
      const user = await User.create({
        username,
        email,
        password,
        firstname,
        lastname,
      });
      const token = signToken(user);
      return { token, user };
    },

    updateFirstName: async (parent, { firstname }, context) => {
      if (context.user) {
        context.user.firstname = firstname;
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { firstname: firstname }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    updateLastName: async (parent, { lastname }, context) => {
      if (context.user) {
        context.user.lastname = lastname;
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { lastname: lastname }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    updateEmail: async (parent, { email }, context) => {
      if (context.user) {
        context.user.email = email;
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { email: email }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    updateUsername: async (parent, { username }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { username: username }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    deleteUser: async (parent, { userID }, context) => {
      if (context.user) {
        return await User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError("Please Login...");
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },

    addReview: async (parent, { city, country, review, rating, username }) => {
      const user = await Reviews.create({
        city,
        country,
        review,
        rating,
        username,
      });
    },
  },
};

// export.....................................................
module.exports = resolvers;
