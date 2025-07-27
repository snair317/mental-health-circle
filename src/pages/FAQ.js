mport React from "react";
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
  { icon: "❓", q: "Is this service confidential?", a: "Absolutely. We value your privacy and never share your data." },
  { icon: "⏰", q: "When can I get help?", a: "Anytime! Our resources are available 24/7." },
  { icon: "💬", q: "Can I chat with someone?", a: "Yes! Use the Chat section to reach out anonymously." },
];

export default function FAQ() {
  return (
    <div className="page-content">
    <div>
      <h2>Frequently Asked Questions</h2>
      <div className="premium-card-list">
        {faqs.map((f, i) => (
          <div key={i} className="premium-card">
            <h3>{f.q}</h3>
            <p>{f.a}</p>
      <div className="cards-grid">
        {faqs.map((faq, idx) => (
          <div className="card" key={idx}>
            <span className="card-icon">{faq.icon}</span>
            <h3>{faq.q}</h3>
            <p>{faq.a}</p>
          </div>
        ))}
      </div>
