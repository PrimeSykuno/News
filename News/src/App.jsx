import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/Navbartemp";
import CategoryPage from "./pages/categorypage";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", minHeight: "100vh", background: "#f4f6f8" }}>
   
        <div style={{ flex: 1 }}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Navigate to="/general" replace />} />
            <Route path="/:category" element={<CategoryPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
