import React, { useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { Menu, X, MessageCircle, Home, BookOpen, Users, HelpCircle, UserPlus } from "lucide-react";
import HomePage from "./pages/Home";
import HowitWorks from "./pages/HowitWorks";
import Tips from "./pages/Tips";
import FAQ from "./pages/FAQ";
import Resources from "./pages/Resources";
import Volunteer from "./pages/Volunteer";
import Chat from "./pages/Chat";
import "./App.css";

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home", icon: <Home size={18}/> },
    { to: "/how-it-works", label: "How it Works", icon: <BookOpen size={18}/> },
    { to: "/tips", label: "Tips", icon: <HelpCircle size={18}/> },
    { to: "/faq", label: "FAQ", icon: <HelpCircle size={18}/> },
    { to: "/resources", label: "Resources", icon: <BookOpen size={18}/> },
    { to: "/volunteer", label: "Volunteer", icon: <UserPlus size={18}/> },
  ];

  return (
    <div className="main-wrapper">
      {/* Premium Glassy NavBar */}
      <nav className="nav-glass">
        <Link to="/" className="nav-logo">
          <span className="logo-circle"></span>
          Solace Circle
        </Link>
        <button
          className="nav-mobile-btn"
          aria-label="Open menu"
          onClick={() => setNavOpen((n) => !n)}
        >
          {navOpen ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${navOpen ? "show" : ""}`}>
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setNavOpen(false)}
              className={({ isActive }) => (isActive ? "nav-active" : "")}
              end={l.to === "/"}
            >
              <span className="nav-icon">{l.icon}</span>
              {l.label}
            </NavLink>
          ))}
          <Link to="/chat" className="nav-chat-btn" onClick={() => setNavOpen(false)}>
            <span className="nav-icon"><MessageCircle size={18}/></span>
            Get Heard
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-it-works" element={<HowitWorks />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <footer className="footer">
        <span>
          Solace Circle © {new Date().getFullYear()} • A safe space to share and be heard.
        </span>
      </footer>
    </div>
  );
}
