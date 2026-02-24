const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");


// ================= GET ALL =================
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find().sort({ createdAt: -1 });
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ================= GET SINGLE =================
router.get("/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json(employee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// ================= ADD =================
router.post("/", async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).json({ message: "Employee Added Successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// ================= UPDATE =================
router.put("/:id", async (req, res) => {
  try {
    const updated = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Employee Not Found" });
    }

    res.status(200).json({ message: "Employee Updated Successfully" });

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// ================= DELETE =================
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Employee.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Employee Not Found" });
    }

    res.status(200).json({ message: "Employee Deleted Successfully" });

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;