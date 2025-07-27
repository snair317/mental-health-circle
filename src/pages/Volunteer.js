import React, { useState, useEffect } from "react";
import { UserPlus, ShieldCheck, ChatCircle } from "lucide-react";
import "../App.css";

const affirmations = [
  "🌿 Your willingness to help makes a difference.",
  "💙 Empathy changes lives, one conversation at a time.",
  "✨ Thank you for bringing kindness into the world.",
];

const roles = [
  {
    icon: <UserPlus size={24} />,
    title: "Become a Listener",
    desc: "Sign up to lend an empathetic ear to those who need it."
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Training & Support",
    desc: "Get resources and training to confidently support others."
  },
  {
    icon: <ChatCircle size={24} />,
    title: "Join the Team",
    desc: <span>Work with our community managers to keep this space safe.</span>
  },
];

export default function Volunteer() {
  const [aIdx, setAIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setAIdx(i => (i + 1) % affirmations.length), 13000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <div className="affirmation-bar">{affirmations[aIdx]}</div>
      <div className="page-content">
        <h2>Volunteer With Us</h2>
        <div className="premium-card-list">
          {roles.map((r, i) => (
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
