import express from "express";
import fetch from "node-fetch";
const app = express();
const API_KEY = "YOUR_KEY";

app.get("/api/news", async (req, res) => {
  const category = req.query.category || "general";
  const url = `https://gnews.io/api/v4/top-headlines?category=${category}&apikey=${API_KEY}&max=9`;

  try {
    const response = await fetch(url);
    const data = await response.json(); // safe here
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

app.listen(5000, () => console.log("Server running"));