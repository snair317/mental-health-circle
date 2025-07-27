// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/hero.svg"; // Place your SVG here

export default function Home() {
  return (
    <div className="home-landing">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__text">
          <h1>
            Welcome to <span className="highlight">Solace Circle</span>
          </h1>
          <p>
            <span role="img" aria-label="sparkles">✨</span> A modern mental health support space built for comfort, privacy, and community.
          </p>
          <Link to="/chat" className="btn-primary">
            Join the Conversation
          </Link>
        </div>
        <img src={hero} alt="Mental health illustration" className="hero__img" />
      </section>

      {/* Features Section */}
      <section className="features">
        <FeatureCard
          icon="🫶"
          title="Anonymous & Supportive"
          desc="Share without judgement—your privacy is respected."
        />
        <FeatureCard
          icon="💬"
          title="Real Conversations"
          desc="Talk, listen, and feel heard. No bots, just people."
        />
        <FeatureCard
          icon="🛡️"
          title="Safe Environment"
          desc="Community rules & moderation keep you safe."
        />
      </section>

      {/* Value Section */}
      <section className="value-prop">
        <h2>Why Solace Circle?</h2>
        <ul>
          <li>✅ <b>Private</b>: No sign-up required to join support chats.</li>
          <li>✅ <b>Accessible</b>: Mobile-first, light and fast loading.</li>
          <li>✅ <b>Resourceful</b>: Tips, articles, and links to get help fast.</li>
        </ul>
      </section>

      {/* CTA Footer */}
      <footer className="footer-cta">
        <h3>Ready to find your circle?</h3>
        <Link to="/chat" className="btn-secondary">
          Enter the Community &rarr;
        </Link>
        <p className="footer-copy">
          Solace Circle &copy; {new Date().getFullYear()} • Built for you, with care.
        </p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
