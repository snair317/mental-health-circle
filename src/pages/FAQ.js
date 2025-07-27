import React from "react";

const faqs = [
  { icon: "❓", q: "Is this service confidential?", a: "Absolutely. We value your privacy and never share your data." },
  { icon: "⏰", q: "When can I get help?", a: "Anytime! Our resources are available 24/7." },
  { icon: "💬", q: "Can I chat with someone?", a: "Yes! Use the Chat section to reach out anonymously." },
];

export default function FAQ() {
  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      <div className="cards-grid">
        {faqs.map((faq, idx) => (
          <div className="card" key={idx}>
            <span className="card-icon">{faq.icon}</span>
            <h3>{faq.q}</h3>
            <p>{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
