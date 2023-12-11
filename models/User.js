const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: { type: String },
    code: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", User);
