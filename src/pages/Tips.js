import React, { useState, useEffect } from "react";
import "../App.css";

const affirmations = [
  "🌿 Take a deep breath. You're doing better than you think.",
  "🌞 It's okay not to be okay. You're not alone.",
  "💙 Sharing helps. We're here for you.",
  "🌱 Small steps are still progress. Keep going.",
  "🌸 Someone is ready to listen with kindness.",
  "✨ You matter. Your story matters.",
];

const tips = [
  "Practice deep breathing for 5 minutes each morning.",
  "Write down three things you're grateful for today.",
  "Take a short walk outside to clear your mind.",
  "Reach out to a friend or family member—even a quick chat helps.",
  "Try a 2-minute guided meditation before bedtime."
];

export default function Tips() {
  const [aIdx, setAIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setAIdx(i => (i+1)%affirmations.length), 15000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <div className="affirmation-bar">{affirmations[aIdx]}</div>
      <div className="page-content">
        <h2>Wellness Tips</h2>
        <div className="premium-card-list">
          {tips.map((tip, i) => (
            <div key={i} className="premium-card">{tip}</div>
          ))}
        </div>
      </div>
    </>
  );
}
