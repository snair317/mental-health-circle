import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Tips from "./pages/Tips";
import FAQ from "./pages/FAQ";
import Resources from "./pages/Resources";
import Volunteer from "./pages/Volunteer";
import HowitWorks from "./pages/HowitWorks";
import Chat from "./pages/Chat";
import "./App.css";

const Navbar = () => (
  <nav className="navbar">
    <span className="site-title">Mental Health Circle</span>
    <span>
      <NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
      <NavLink to="/howitworks" className={({isActive}) => isActive ? "active" : ""}>How it Works</NavLink>
      <NavLink to="/tips" className={({isActive}) => isActive ? "active" : ""}>Tips</NavLink>
      <NavLink to="/faq" className={({isActive}) => isActive ? "active" : ""}>FAQ</NavLink>
      <NavLink to="/resources" className={({isActive}) => isActive ? "active" : ""}>Resources</NavLink>
      <NavLink to="/volunteer" className={({isActive}) => isActive ? "active" : ""}>Volunteer</NavLink>
      <NavLink to="/chat" className={({isActive}) => isActive ? "active" : ""}>Chat</NavLink>
    </span>
  </nav>
);

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/howitworks" element={<HowitWorks />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
