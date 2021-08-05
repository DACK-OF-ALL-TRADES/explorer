const { Schema, model } = require("mongoose");

const savedCitiesSchema = new Schema({
  cityID: {
    type: Number,
    required: false,
  },
});

module.exports = savedCitiesSchema;
