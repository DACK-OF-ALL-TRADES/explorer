// import.....................................................
const { Schema, model } = require("mongoose");

// reviews_schema.....................................................
const reviewsSchema = new Schema({
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

// export.....................................................
const Reviews = model("Reviews", reviewsSchema);
module.exports = Reviews;
