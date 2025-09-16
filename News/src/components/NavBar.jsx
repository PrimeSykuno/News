import React from "react";
import { NavLink } from "react-router-dom";

const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology"
];

function NavBar() {
  return (
    <>
       
    <nav style={{ display: "flex", background: "#232323", gap: 12, padding: "11px 30px" }}>
      <div style={{
      backgroundColor: "#7f27ddff",
      color: "white",
      fontSize:24,
      padding: "5px",
      letterSpacing: "2px",

    }}>
      NewsUV
    </div>
      {categories.map(cat => (
        <NavLink
          key={cat}
          to={`/${cat}`}
          style={({ isActive }) => ({
            background: isActive ? "#7f27ddff" : "#232323",
            color: "white",
            border: "none",
            padding: "9px 18px",
            fontSize: 16,
            borderRadius: 3,
            textDecoration: "none"
          })}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </NavLink>
      ))}
    </nav>
    </>
  );
}

export default NavBar;
