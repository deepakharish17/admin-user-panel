const express = require("express");
const router = express.Router();
const News = require("../models/News");

/* GET all news */
router.get("/", async (req, res) => {
  const news = await News.find().sort({ createdAt: -1 });
  res.json(news);
});

/* ADD news */
router.post("/", async (req, res) => {
  const newNews = new News(req.body);
  await newNews.save();
  res.json({ message: "News Added" });
});

/* UPDATE news */
router.put("/:id", async (req, res) => {
  await News.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "News Updated" });
});

/* DELETE news */
router.delete("/:id", async (req, res) => {
  await News.findByIdAndDelete(req.params.id);
  res.json({ message: "News Deleted" });
});

module.exports = router;