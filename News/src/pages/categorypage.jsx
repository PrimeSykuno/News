import React, { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";
import { useParams } from "react-router-dom";

const NEWS_API_KEY = "5a414439830d46f1bd17deec3ee790c8"; 

function CategoryPage() {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
useEffect(() => {
    fetch(`/api/news?category=${category}`)
      .then(res => res.json())
      .then(data => setArticles(data.articles))
      .catch(err => console.error(err));
  }, [category]);

  return (
    <div style={{ padding: 28 }}>
      <h2 style={{ marginBottom: 18, textTransform: "capitalize" }}>{category}</h2>
      {loading ? (
        <p>Loading news...</p>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: 28
        }}>
          {articles.length === 0 ? (
            <p>No news found.</p>
          ) : (
            articles.map((article, idx) => (
              <NewsCard key={idx} article={article} />
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
