const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  raisedBy: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "Pending" // Pending | Accepted
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Issue", IssueSchema);