import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import HowitWorks from "./pages/HowitWorks";
import Tips from "./pages/Tips";
import FAQ from "./pages/FAQ";
import Resources from "./pages/Resources";
import Volunteer from "./pages/Volunteer";
import Chat from "./pages/Chat";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <nav className="navbar">
          <Link to="/" className="logo">
            <span className="logo-circle">🫶</span> Solace Circle
          </Link>
          <div>
            <Link to="/how-it-works">How It Works</Link>
            <Link to="/tips">Tips</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/volunteer">Volunteer</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
        <footer className="footer">
          <span>Solace Circle © {new Date().getFullYear()} • A safe space to share and be heard.</span>
        </footer>
      </div>
    </Router>
  );
}
