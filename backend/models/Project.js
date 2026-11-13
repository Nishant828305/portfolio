const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: String,
  github: String,
  demo: String
}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);