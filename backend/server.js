const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const newsRoutes = require("./routes/newsRoutes");
const Job = require("./models/Job");
const News = require("./models/News");
const Issue = require("./models/Issue");
const jobRoutes = require("./routes/jobRoutes");
const issueRoutes = require("./routes/issueRoutes");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

app.use(cors());
app.use(express.json());




// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/jotishDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Error:", err));


// Routes
app.use("/employees", employeeRoutes);
app.use("/jobs", jobRoutes);
app.use("/issues", issueRoutes);
app.use("/news", newsRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("API Running Successfully");
});

// Get Jobs
app.get("/jobs", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Add Job (Admin)
app.post("/jobs", async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.json({ message: "Job Added" });
});

// Get Jobs
app.get("/jobs", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Add Job (Admin)
app.post("/jobs", async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.json({ message: "Job Added" });
});

// User submits issue
app.post("/issues", async (req, res) => {
  const issue = new Issue(req.body);
  await issue.save();
  res.json({ message: "Issue Submitted" });
});

// Admin view issues
app.get("/issues", async (req, res) => {
  const issues = await Issue.find();
  res.json(issues);
});

// Update Issue Status (Admin)
app.put("/issues/:id", async (req, res) => {
  await Issue.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Issue Updated" });
});

/* ================= JOB ROUTES ================= */

app.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/jobs", async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.json({ message: "Job Added" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


/* ================= NEWS ROUTES ================= */

app.get("/news", async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/news", async (req, res) => {
  try {
    const newsItem = new News(req.body);
    await newsItem.save();
    res.json({ message: "News Added" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


/* ================= ISSUE ROUTES ================= */

app.get("/issues", async (req, res) => {
  try {
    const issues = await Issue.find();
    res.json(issues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/issues", async (req, res) => {
  try {
    const issue = new Issue(req.body);
    await issue.save();
    res.json({ message: "Issue Submitted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/issues/:id", async (req, res) => {
  try {
    await Issue.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Issue Updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/", (req,res)=>{
  res.send("Server Working");
});

app.delete("/jobs/:id", async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: "Job Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/news/:id", async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.json({ message: "News Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/issues/:id", async (req, res) => {
  try {
    await Issue.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Issue Updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});