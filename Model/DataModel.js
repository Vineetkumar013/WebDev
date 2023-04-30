const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  type: {
    type:String,
  },
  name: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
  },
  schedule: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
  },
  files: {
    type: String,
  },
  moderator: {
    type: String,
    ref: "User",
  },
  category: {
    type: String,
    required: true,
  },
  sub_category: {
    type: String,
  },
  rigor_rank: {
    type: Number,
  },
  attendees: [
    {
      type: String,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Data", DataSchema);
