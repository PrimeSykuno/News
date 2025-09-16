import React from "react";

function NewsCard({ article }) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: 8,
      boxShadow: "0 2px 8px rgba(44,62,80,0.14)",
      padding: 18,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}>
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          style={{
            borderRadius: 4,
            width: "100%",
            height: "140px",
            objectFit: "cover",
            marginBottom: 12
          }}
        />
      )}
      <h3 style={{ fontSize: 20, margin: "5px 0" }}>{article.title}</h3>
      <p style={{ color: "#444", marginBottom: 7 }}>
        {article.description || "No description available."}
      </p>
      <div style={{ fontSize: 12, color: "#900", marginBottom: 8 }}>
        By {article.author || article.source.name} on {new Date(article.publishedAt).toUTCString()}
      </div>
      <a
        href={article.url}
        target="_blank"

        style={{
          color: "#fff",
          backgroundColor: "#007bff",
          padding: "8px 15px",
          borderRadius: 4,
          textDecoration: "none",

          width: "fit-content"
        }}
      >
        Read More
      </a>
    </div>
  );
}

export default NewsCard;
