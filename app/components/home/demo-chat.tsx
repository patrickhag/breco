"use client";

import { MessageCircle, X, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { getDemoReply } from "./demo-reply";

export default function DemoChat({ isOpen, onToggle, onClose }: { isOpen: boolean; onToggle: () => void; onClose: () => void }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([]);
  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!input.trim()) return;
    const question = input.trim();
    const reply = getDemoReply(question);
    setMessages((previousMessages) => [
      ...previousMessages,
      { role: "user", text: question },
      { role: "bot", text: reply },
    ]);
    setInput("");
  }
  return (
    <>
      <button
        className="chat-launcher"
        aria-label={isOpen ? "Close chat" : "Try Breco chat"}
        onClick={onToggle}
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={23} />}
        <span>{isOpen ? "Close" : "Try me"}</span>
      </button>
      {isOpen && (
        <section className="live-chat" aria-label="Breco demo chat">
          <div className="chat-heading">
            <span className="bot-avatar">
              <MessageCircle size={19} />
            </span>
            <div>
              Meet Breco<small>Interactive product demo</small>
            </div>
            <button
              className="close-chat"
              aria-label="Close chat"
              onClick={onClose}
            >
              <X size={18} />
            </button>
          </div>
          <div className="live-messages" aria-live="polite">
            <div className="chat-bubble bot">
              Hey there! I’m Breco. Ask me about integrations, lead capture,
              customization, or getting started.
            </div>
            {messages.map((m, i) => (
              <div
                key={i}
                className={`chat-bubble ${m.role === "user" ? "customer" : "bot"}`}
              >
                {m.text}
              </div>
            ))}
            <span className="demo-note">
              Preview with example responses, not a connected AI service.
            </span>
          </div>
          <form onSubmit={sendMessage} className="chat-form">
            <input
              aria-label="Your message"
              placeholder="Ask about Breco…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button aria-label="Send message" disabled={!input.trim()}>
              <Send size={17} />
            </button>
          </form>
        </section>
      )}
    </>
  );
}
