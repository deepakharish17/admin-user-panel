const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  salary: { type: Number, required: true },
  city: { type: String },
  department: {
  type: String,
  required: true,
  default: "Not Assigned"
},
  joiningDate: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model("Employee", EmployeeSchema);