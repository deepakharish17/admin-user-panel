const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

/* GET all jobs */
router.get("/", async (req, res) => {
  const jobs = await Job.find().sort({ postedDate: -1 });
  res.json(jobs);
});

/* POST new job */
router.post("/", async (req, res) => {
  const newJob = new Job(req.body);
  await newJob.save();
  res.json({ message: "Job Posted Successfully" });
});

/* UPDATE job */
router.put("/:id", async (req, res) => {
  await Job.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Job Updated Successfully" });
});

/* DELETE job */
router.delete("/:id", async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ message: "Job Deleted Successfully" });
});

module.exports = router;