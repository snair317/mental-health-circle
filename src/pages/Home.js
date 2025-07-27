import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hero from "../assets/hero.svg"; // Replace with your SVG/PNG path

const affirmations = [
  "🌱 You are stronger than you think. Every step counts.",
  "☀️ It's okay not to be okay. You're not alone.",
  "🌿 Take a breath. You matter here.",
  "💙 Someone is ready to listen.",
  "✨ Sharing helps. We're here for you.",
];

export default function Home() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [affirm] = useState(
    affirmations[Math.floor(Math.random() * affirmations.length)]
  );

  function handleOption(opt) {
    navigate("/chat", { state: { name: name.trim(), opt } });
  }

  return (
    <main className="home-main">
      <div className="affirmation-bar">{affirm}</div>
      <section className="hero-peace">
        <div className="hero-peace__content">
          <h1>
            {name.trim()
              ? `Hi, ${name.trim()}!`
              : "Hi, friend!"}
          </h1>
          <div className="subtitle">
            You are not alone. This is a safe, supportive space to speak or listen—always anonymous, always caring.
          </div>
          <div className="hero-peace__cta">
            <input
              type="text"
              placeholder="What's your name? (optional)"
              value={name}
              onChange={e => setName(e.target.value)}
              autoComplete="off"
              spellCheck={false}
              maxLength={18}
            />
            <button className="btn-calm" onClick={() => handleOption("beheard")}>
              Speak Out
            </button>
            <button className="btn-calm btn-outline-calm" onClick={() => handleOption("listen")}>
              Just Listen
            </button>
          </div>
        </div>
        <div className="hero-peace__img-wrap">
          <img src={hero} alt="Mental health support illustration" />
        </div>
      </section>
      <section className="features-peace">
        <Feature
          icon="🫶"
          title="Confidential & Safe"
          desc="Your story is yours. Only share what you want—always private."
        />
        <Feature
          icon="💬"
          title="Real Human Support"
          desc="Connect with listeners who care. No bots, no judgement."
        />
        <Feature
          icon="🤝"
          title="Respectful Community"
          desc="Guided by empathy, everyone is welcome and respected here."
        />
      </section>
    </main>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="feature-peace-card">
      <div className="feature-peace-icon">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}
