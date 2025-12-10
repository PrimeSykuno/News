// server.js
import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 5000;
const NEWS_API_KEY = "5a414439830d46f1bd17deec3ee790c8";

app.get("/api/news", async (req, res) => {
  const category = req.query.category || "general";
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=9&apiKey=${NEWS_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
