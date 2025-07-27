import React, { useState, useEffect, useRef } from "react";

const comfortBot = {
  name: "Comfort Bot",
  avatar: "🤖",
  initial:
    "Hi, I’m here to help you feel safe and heard. Type anything, or try '/help' for ideas. Remember, you are not alone 💙"
};

function randomId() { return Math.random().toString(36).slice(2,9); }

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: randomId(), sender: "bot", text: comfortBot.initial, time: new Date() }
  ]);
  const [input, setInput] = useState("");
  const [isBotTyping, setBotTyping] = useState(false);
  const chatEndRef = useRef();

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function sendMessage(text, sender="me") {
    setMessages(msgs => [
      ...msgs,
      { id: randomId(), sender, text, time: new Date() }
    ]);
  }

  function handleSend() {
    if (!input.trim()) return;
    sendMessage(input.trim(), "me");
    if (input.trim() === "/help") {
      setTimeout(() => sendMessage("Try sharing how you feel, or say what you need. You can also just listen, or send a kind emoji: 🌸"), 500);
    } else if (/sad|alone|anxious|depress|help/i.test(input)) {
      setTimeout(() => sendMessage("Thank you for sharing. Remember, feelings are valid. Would you like a calming tip? 🌱"), 700);
    }
    setInput("");
  }

  return (
    <div className="chat-premium-main">
      <div className="chat-premium-header">
        <span className="chat-bot-avatar">{comfortBot.avatar}</span>
        <span>
          You’re in the Circle. <b>Speak</b> or <b>Listen</b>
        </span>
      </div>
      <div className="chat-premium-messages">
        {messages.map(msg => (
          <div key={msg.id}
            className={msg.sender === "me" ? "chat-msg-me" : "chat-msg-bot"}
          >
            {msg.sender === "bot" && (
              <span className="chat-bot-avatar">{comfortBot.avatar}</span>
            )}
            <span>{msg.text}</span>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className="chat-premium-input-row">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message... (or /help)"
          onKeyDown={e => e.key === "Enter" && handleSend()}
        />
        <button className="chat-send-btn" onClick={handleSend}>
          Send
        </button>
      </div>
      <div className="chat-support-bar">
        <span>💙 You are not alone. Support is here, always.</span>
      </div>
    </div>
  );
}
