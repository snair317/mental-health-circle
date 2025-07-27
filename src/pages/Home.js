import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hero from "../assets/hero.svg"; // your illustration

export default function Home() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleOption = (opt) => {
    navigate("/chat", { state: { name, opt } });
  };

  return (
    <div className="home-landing">
      {/* Hero */}
      <section className="hero">
        <div className="hero__text">
          <h1>
            Welcome to <span className="highlight">Solace Circle</span>
          </h1>
          <p>
            ✨ A modern mental health support space built for comfort,
            privacy, and community.
          </p>

          <div className="hero__cta-buttons">
            <button
              className="btn-primary"
              onClick={() => handleOption("beheard")}
            >
              Be Heard
            </button>
            <button
              className="btn-outline"
              onClick={() => handleOption("listen")}
            >
              Listen
            </button>
          </div>
        </div>
        <img
          src={hero}
          alt="Mental health illustration"
          className="hero__img"
        />
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">🫶</div>
          <h3>Anonymous & Supportive</h3>
          <p>Share without judgement—your privacy is respected.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💬</div>
          <h3>Real Conversations</h3>
          <p>Talk, listen, and feel heard. No bots, just people.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🛡️</div>
          <h3>Safe Environment</h3>
          <p>Community rules & moderation keep you safe and respected.</p>
        </div>
      </section>

      {/* Value Prop */}
      <section className="value-prop">
        <h2>Why Solace Circle?</h2>
        <ul>
          <li>
            ✅ <b>Private</b>: No sign-up required—your data stays safe.
          </li>
          <li>
            ✅ <b>Accessible</b>: Mobile-first, light, and fast loading.
          </li>
          <li>
            ✅ <b>Resourceful</b>: Tips, guides, and immediate help lines.
          </li>
        </ul>
      </section>

      {/* CTA Footer */}
      <footer className="footer-cta">
        <h3>Ready to join your circle?</h3>
        <button
          className="btn-secondary"
          onClick={() => handleOption("beheard")}
        >
          Enter the Community →
        </button>
      </footer>
    </div>
  );
}
