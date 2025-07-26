import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const listenerReplies = [
  "I'm here for you. Please share what's on your mind.",
  "Thank you for sharing that. How does it make you feel?",
  "I'm listening. Take your time.",
  "That's tough, but you're not alone here.",
  "Would you like to talk more about it?",
  "Remember, it's okay to feel this way.",
];

function getRandomReply() {
  return listenerReplies[Math.floor(Math.random() * listenerReplies.length)];
}

export default function Chat() {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.name || "Guest";
  const [messages, setMessages] = useState([
    { from: "listener", text: `Hi ${username}, I'm here to listen. What's on your mind?` },
  ]);
  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input.trim()) return;
    setMessages([...messages, { from: "you", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((msgs) => [...msgs, { from: "listener", text: getRandomReply() }]);
    }, 1200);
  }

  useEffect(() => {
    if (!location.state) navigate("/");
  }, [location, navigate]);

  return (
    <div className="page chat">
      <div className="chatbox">
        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`msg ${msg.from}`}>
              <span>{msg.from === "you" ? username : "Listener"}:</span> {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input-row">
          <input
            value={input}
            placeholder="Type your message..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={e => (e.key === "Enter" ? sendMessage() : null)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}
