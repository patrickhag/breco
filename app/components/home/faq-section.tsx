"use client";

import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  [
    "How long does setup take?",
    "Typically under five minutes. Add your website URL, let Breco index your pages, and embed one script tag. Your chatbot is ready to answer questions.",
  ],
  [
    "Can I train it on more than just my website?",
    "Yes. Upload PDFs, DOCX, CSV, TXT, and Markdown files, and add custom question-and-answer pairs for precise control over specific answers.",
  ],
  [
    "Will it work on my website platform?",
    "Yes. Breco works with Shopify, WordPress, Wix, Squarespace, Webflow, Framer, Next.js, and any custom HTML site.",
  ],
  [
    "Can I customize how the chatbot looks and sounds?",
    "Choose a dark or light theme, adjust the widget shape, and set its personality. The Brand Bundle adds custom colors, logo, name, and removal of Breco branding.",
  ],
  [
    "Does it capture leads?",
    "Yes. Enable lead capture so visitors can share their name and email during a conversation. You can find and export those leads from your dashboard.",
  ],
  [
    "What if I outgrow my plan?",
    "Upgrade from your dashboard for more messages and indexed pages. Page limits scale from 50 to 200 to 1,000, and extra messages are available as an add-on.",
  ],
];

export default function FaqSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  return (
    <section className="container section faq-section" id="faq">
      <div>
        <span className="eyebrow">A few more answers</span>
        <h2>Glad you asked.</h2>
        <p>
          Everything else you might be wondering.
          <br />
          Still curious? We’re a conversation away.
        </p>
        <a className="text-link" href="mailto:support@breco.io">
          Talk to the team <ArrowUpRight size={14} />
        </a>
      </div>
      <div className="faq-list">
        {faqs.map(([q, a], i) => (
          <div
            className={`faq-item ${expandedIndex === i ? "expanded" : ""}`}
            key={q}
          >
            <button
              aria-expanded={expandedIndex === i}
              aria-controls={`answer-${i}`}
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
            >
              {q}
              {expandedIndex === i ? <Minus size={16} /> : <Plus size={16} />}
            </button>
            {expandedIndex === i && <p id={`answer-${i}`}>{a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
