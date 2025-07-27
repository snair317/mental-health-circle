import React, { useState, useEffect } from "react";
import { CheckCircle2, MessageSquare, HeartHandshake } from "lucide-react";
import "../App.css";

const affirmations = [
  "🌿 Take a deep breath. You're doing better than you think.",
  "🌞 It's okay not to be okay. You're not alone.",
  "💙 Sharing helps. We're here for you.",
];

const steps = [
  {
    icon: <CheckCircle2 size={28} />,
    title: "Choose Your Path",
    desc: "Decide whether you want to speak out or simply listen. Both roles matter."
  },
  {
    icon: <MessageSquare size={28} />,
    title: "Join the Circle",
    desc: "Enter anonymously or share your name—whatever feels right."
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "Share & Support",
    desc: "Speak your mind or lend a caring ear. Every voice is valued."
  },
];

export default function HowItWorks() {
  // rotating affirmation
  const [aIdx, setAIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setAIdx(i => (i + 1) % affirmations.length), 12000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <div className="affirmation-bar">{affirmations[aIdx]}</div>
      <div className="page-content">
        <h2>How It Works</h2>
        <div className="premium-card-list">
          {steps.map((s, i) => (
            <div key={i} className="premium-card" style={{ "--card-index": i }}>
              <div className="card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
