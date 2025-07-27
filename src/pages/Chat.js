import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Chat() {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.name || "Guest";
  const opt = location.state?.opt;

  const [messages, setMessages] = useState([
    {
      from: "listener",
      text: `Hi ${username}, I'm here to ${
        opt === "listen" ? "listen" : "hear you"
      }. What's on your mind?`
    }
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!location.state) navigate("/");
  }, [location, navigate]);

  const sendMessage = () => {
    const msg = input.trim();
    if (!msg) return;
    setMessages((m) => [...m, { from: "you", text: msg }]);
    setInput("");
    setTimeout(() => {
      const replies = [
        "I'm here for you.",
        "Tell me more about that.",
        "How does that make you feel?",
        "That sounds tough.",
        "I understand."
      ];
      const r = replies[Math.floor(Math.random() * replies.length)];
      setMessages((m) => [...m, { from: "listener", text: r }]);
    }, 1200);
  };

  return (
    <div className="page chat-page">
      <div className="chatbox">
        <div className="chat-header">
          <h2>
            {opt === "listen" ? "Listening Mode" : "Share Mode"}: {username}
          </h2>
        </div>
        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`msg ${msg.from === "you" ? "you" : "listener"}`}
            >
              <span>
                {msg.from === "you" ? username : "Listener"}:
              </span>{" "}
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input-row">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => (e.key === "Enter" ? sendMessage() : null)}
            placeholder="Type a message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}
