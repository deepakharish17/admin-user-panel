const express = require("express");
const router = express.Router();
const Issue = require("../models/Issue");

/* GET all issues */
router.get("/", async (req, res) => {
  const issues = await Issue.find().sort({ createdAt: -1 });
  res.json(issues);
});

/* ADD issue */
router.post("/", async (req, res) => {
  const issue = new Issue(req.body);
  await issue.save();
  res.json({ message: "Issue Submitted" });
});

/* UPDATE issue */
router.put("/:id", async (req, res) => {
  await Issue.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Issue Updated" });
});

/* DELETE issue */
router.delete("/:id", async (req, res) => {
  await Issue.findByIdAndDelete(req.params.id);
  res.json({ message: "Issue Deleted" });
});

/* ACCEPT issue (Admin) */
router.put("/accept/:id", async (req, res) => {
  await Issue.findByIdAndUpdate(req.params.id, { status: "Accepted" });
  res.json({ message: "Issue Accepted" });
});

module.exports = router;