import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function handleOption(opt) {
    navigate("/chat", { state: { name, opt } });
  }

  return (
    <div className="page home">
      <div className="hero">
        <h1>Solace Circle</h1>
        <p className="tagline">A safe space to share and be heard.</p>
        <input
          className="name-input"
          placeholder="Enter your name or stay anonymous"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="cta-buttons">
          <button onClick={() => handleOption("beheard")}>Be Heard</button>
          <button onClick={() => handleOption("listen")}>Listen</button>
        </div>
      </div>
      <div className="links-row">
        <a href="/how-it-works">How it works</a>
        <a href="/tips">Tips</a>
        <a href="/faq">FAQ</a>
      </div>
    </div>
  );
}
