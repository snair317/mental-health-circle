import React from "react";
import { useNavigate } from "react-router-dom";
import hero from "../assets/hero.svg";

export default function Home() {
  const navigate = useNavigate();

  const handleOption = (opt) => {
    navigate("/chat", { state: { opt } });
  };

  return (
    <main className="home-main">
      <section className="hero-pro">
        <div className="hero-pro__content">
          <h1>
            <span>Welcome to</span>
            <span className="brand">Solace Circle</span>
          </h1>
          <p>
            <span role="img" aria-label="sparkle">✨</span>{" "}
            A modern mental health support space built for comfort, privacy, and community.
          </p>
          <div className="hero-pro__cta">
            <button
              className="btn-pro btn-pro--primary"
              onClick={() => handleOption("beheard")}
            >
              Be Heard
            </button>
            <button
              className="btn-pro btn-pro--outline"
              onClick={() => handleOption("listen")}
            >
              Listen
            </button>
          </div>
        </div>
        <div className="hero-pro__img-wrap">
          <img src={hero} alt="Mental health support illustration" />
        </div>
        <div className="hero-pro__bg"></div>
      </section>

      {/* Features */}
      <section className="features-pro">
        <Feature icon="🫶" title="Anonymous & Supportive" desc="Share without judgement—your privacy is respected." />
        <Feature icon="💬" title="Real Conversations" desc="Talk, listen, and feel heard. No bots, just people." />
        <Feature icon="🛡️" title="Safe Environment" desc="Community rules & moderation keep you safe and respected." />
      </section>
    </main>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="feature-pro-card">
      <div className="feature-pro-icon">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}
