import fetch from "node-fetch";

const NEWS_API_KEY = "5a414439830d46f1bd17deec3ee790c8"; 

export default async function handler(req, res) {
  const category = req.query.category || "general";
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=9&apiKey=${NEWS_API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch news");

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
