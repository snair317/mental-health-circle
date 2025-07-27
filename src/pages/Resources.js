import React, { useState, useEffect } from "react";
import { BookOpen, Phone, Globe } from "lucide-react";
import "../App.css";

const affirmations = [
  "🌸 Someone is ready to listen with kindness.",
  "✨ You matter. Your story matters.",
  "🌱 Small steps are still progress. Keep going.",
];

const resources = [
  {
    icon: <Phone size={24} />,
    title: "24/7 Helpline",
    desc: <a href="tel:+18002738255">1‑800‑273‑TALK</a>
  },
  {
    icon: <BookOpen size={24} />,
    title: "Self‑Help Guides",
    desc: <a href="https://www.mentalhealth.gov/" target="_blank" rel="noopener noreferrer">mentalhealth.gov</a>
  },
  {
    icon: <Globe size={24} />,
    title: "Global Support",
    desc: <a href="https://findahelpline.com/" target="_blank" rel="noopener noreferrer">findahelpline.com</a>
  },
];

export default function Resources() {
  const [aIdx, setAIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setAIdx(i => (i + 1) % affirmations.length), 14000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <div className="affirmation-bar">{affirmations[aIdx]}</div>
      <div className="page-content">
        <h2>Helpful Resources</h2>
        <div className="premium-card-list">
          {resources.map((r, i) => (
            <div key={i} className="premium-card" style={{ "--card-index": i }}>
              <div className="card-icon">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
