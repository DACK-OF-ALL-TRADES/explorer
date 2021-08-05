const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // users: async () => {
    //   return User.find().populate('thoughts');
    // },
    // user: async (parent, { username }) => {
    //   return User.findOne({ username }).populate('thoughts');
    // },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    saveCity: async (parent, { cityID }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          {
            _id: context.user._id,
          },
          {
            $push: { savedCities: cityID },
          },
          {
            new: true,
          }
        );
        console.log(updatedUser);
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addUser: async (
      parent,
      { username, email, password, firstname, lastname, city, country }
    ) => {
      const user = await User.create({
        username,
        email,
        password,
        firstname,
        lastname,
        city,
        country,
      });
      const token = signToken(user);
      return { token, user };
    },

    // adding the profile updates
    addFirstName: async (parent, { firstName }, context) => {
      if (context.user) {
        context.user.firstName = firstName;
        console.log(context.user);
        return User.findOneAndUpdate({
          _id: context.user._id,
          firstname: firstName,
        });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateLastName: async (parent, { lastName }, context) => {
      if (context.user) {
        console.log(context.user);
        return User.findOneAndUpdate({
          _id: context.user._id,
          lastname: lastName,
        });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateEmail: async (parent, { email }, context) => {
      if (context.user) {
        context.user.email = email;
        console.log(context.user);
        return User.findOneAndUpdate({
          _id: context.user._id,
          email: email,
        });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateUsername: async (parent, { username }, context) => {
      if (context.user) {
        console.log(context.user);
        return User.findOneAndUpdate({
          _id: context.user._id,
          username: username,
        });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    ///////////////////////////////////////////////////////////////////////

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
  },
};

module.exports = resolvers;
