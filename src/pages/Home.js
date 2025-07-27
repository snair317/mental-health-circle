import React, { useState, useEffect } from "react";
import hero from "../assets/hero.svg"; // Change to your own image path if needed

const affirmations = [
  "🌿 Take a deep breath. You're doing better than you think.",
  "🌞 It's okay not to be okay. You're not alone.",
  "💙 Sharing helps. We're here for you.",
  "🌱 Small steps are still progress. Keep going.",
  "🌸 Someone is ready to listen with kindness.",
  "✨ You matter. Your story matters.",
];

export default function Home() {
  // Affirmation rotates every 15s
  const [affirmIdx, setAffirmIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setAffirmIdx(i => (i + 1) % affirmations.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  // Group stats (random for now, could fetch from backend)
  const [speakers] = useState(() => Math.floor(Math.random() * 6) + 4);    // 4–9
  const [listeners] = useState(() => Math.floor(Math.random() * 13) + 8);  // 8–20

  // Name input for personal touch
  const [name, setName] = useState("");
  const [showAskHelp, setShowAskHelp] = useState(false);

  // Actions for Speak/Listen
  function handleOption(opt) {
    // This is where you'd route to chat. For now, just alert.
    alert(`${name ? name : "Friend"}, you chose to "${opt === "beheard" ? "Speak Out" : "Just Listen"}"! (This will connect you soon.)`);
    // You can add navigation code here later.
  }

  return (
    <main className="home-main">
      {/* Dynamic Affirmation */}
      <div className="affirmation-bar">{affirmations[affirmIdx]}</div>

      {/* Main Hero */}
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

          {/* Live stats */}
          <div
            style={{
              marginBottom: "1.2rem",
              color: "#1976d2",
              fontWeight: 600,
              fontSize: "1.08rem",
              letterSpacing: ".01em"
            }}
          >
            {speakers} people are speaking, {listeners} are listening right now!
          </div>

          {/* Name entry */}
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
            <button
              className="btn-calm"
              onClick={() => handleOption("beheard")}
            >
              Speak Out
            </button>
            <button
              className="btn-calm btn-outline-calm"
              onClick={() => handleOption("listen")}
            >
              Just Listen
            </button>
            <div style={{
              fontSize: "0.98rem",
              color: "#3671b9",
              marginTop: "0.8rem"
            }}>
              🔒 Share anonymously if you prefer – your privacy is always respected.
            </div>

            {/* 1:1 Ask for Help */}
            <button
              style={{
                marginTop: "1.1rem",
                background: "none",
                border: "none",
                color: "#1c7ed6",
                fontWeight: 600,
                textDecoration: "underline",
                cursor: "pointer"
              }}
              onClick={() => setShowAskHelp(true)}
            >
              Need personal support?
            </button>
            {showAskHelp && (
              <div
                style={{
                  marginTop: "1rem",
                  padding: "1.3rem",
                  background: "#e3f3ff",
                  borderRadius: "1.1rem",
                  fontWeight: 500,
                  color: "#22446d",
                  boxShadow: "0 2px 12px #bed3ef2d",
                  maxWidth: 330,
                  textAlign: "center"
                }}
              >
                <span style={{ fontSize: 28 }}>💬</span>
                <br />
                1:1 support is coming soon! For now, join as “Speaker” to talk, or as “Listener” to find someone caring.
                <br />
                <button
                  style={{
                    marginTop: "1rem",
                    background: "#2196f3",
                    color: "#fff",
                    border: "none",
                    borderRadius: "1.2rem",
                    fontWeight: 600,
                    padding: "0.5rem 1.4rem",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowAskHelp(false)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="hero-peace__img-wrap">
          <img src={hero} alt="Mental health support illustration" />
        </div>
      </section>

      {/* Wellness Music link */}
      <div style={{ textAlign: "center", margin: "2rem auto 0 auto" }}>
        <a
          href="https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#2591c9",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "1.01rem"
          }}
        >
          🎶 Need uplifting music? Try this calming playlist.
        </a>
      </div>

      {/* Feature cards */}
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

      {/* Footer visual */}
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        alt="Nature"
        style={{
          display: "block",
          margin: "2.5rem auto 1rem auto",
          borderRadius: "1.3rem",
          boxShadow: "0 4px 32px #b1e0f24b",
          maxWidth: "340px",
          width: "100%",
          objectFit: "cover",
          opacity: 0.93
        }}
      />
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
