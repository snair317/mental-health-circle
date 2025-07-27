import React from "react";

const tips = [
  { icon: "💡", title: "Stay Connected", text: "Reach out to friends or family, even if it's just a quick message. Connection helps!" },
  { icon: "🧘", title: "Practice Mindfulness", text: "Take a moment to breathe, meditate, or simply notice your surroundings." },
  { icon: "📓", title: "Journal Your Thoughts", text: "Writing down feelings can help process emotions and reduce anxiety." },
  { icon: "🚶", title: "Move Your Body", text: "A walk or some stretches can boost your mood and energy." },
];

export default function Tips() {
  return (
    <div>
      <h2>Wellness Tips</h2>
      <div className="cards-grid">
        {tips.map((tip, idx) => (
          <div className="card" key={idx}>
            <span className="card-icon">{tip.icon}</span>
            <h3>{tip.title}</h3>
            <p>{tip.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
