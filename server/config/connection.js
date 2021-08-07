// imports.....................................................
const mongoose = require("mongoose");

// connect_local_mongoDB.....................................................
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/explorer", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// exports.....................................................
module.exports = mongoose.connection;
