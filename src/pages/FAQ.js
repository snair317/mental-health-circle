import React from "react";
import "../App.css";

const faqs = [
  {
    q: "Is Solace Circle really private?",
    a: "Yes—nothing you share is stored or tied to your identity."
  },
  {
    q: "Do I need to sign up?",
    a: "No sign‑up required. You can join as 'Friend' anonymously or share your name."
  },
  {
    q: "Can I switch between speaking and listening?",
    a: "Absolutely. Just come back and click the appropriate button anytime."
  }
];

export default function FAQ() {
  return (
    <div className="page-content">
      <h2>Frequently Asked Questions</h2>
      <div className="premium-card-list">
        {faqs.map((f, i) => (
          <div key={i} className="premium-card">
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
