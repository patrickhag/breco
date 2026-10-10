"use client";

import { ArrowUpRight, Database, MousePointer2, Palette } from "lucide-react";
import { useState } from "react";
import TickList from "../tick-list";
import FeaturePreview from "./feature-preview";

const features = [
  {
    label: "Knows your business",
    icon: Database,
    title: "Your website is\nyour chatbot’s brain.",
    description: "Breco learns from your real content — products, policies, pricing, and everything in between. Accurate answers, without the manual training.",
    benefits: [
      "Automatically crawls and indexes your pages",
      "Upload files and add custom Q&A",
      "Re-sync whenever your content changes",
    ]
  },
  {
    label: "Built to convert",
    icon: MousePointer2,
    title: "Turn “just browsing”\ninto “just bought.”",
    description: "Guide visitors to the right product, checkout, or contact page. Capture interest while it’s fresh and make every conversation count.",
    benefits: [
      "Personalized product recommendations",
      "Direct links to your conversion pages",
      "Capture leads mid-conversation",
    ]
  },
  {
    label: "Feels like your brand",
    icon: Palette,
    title: "Your voice. Your style.\nYour new teammate.",
    description: "Make your chatbot feel native to your website. Match your colors, choose a personality, and put your own name on the conversation.",
    benefits: [
      "Custom colors, logo, and chatbot name",
      "Light and dark themes with adjustable shape",
      "Remove Breco branding with the Brand Bundle",
    ]
  }
];

export default function FeaturesSection({ onStartTrial }: { onStartTrial: () => void }) {
  const [activeTab, setActiveTab] = useState(0);
  const feature = features[activeTab];
  const FeatureIcon = feature.icon;
  return (
    <section className="container section" id="features">
      <div className="section-heading split-heading">
        <div>
          <span className="eyebrow">Small widget. Big possibilities.</span>
          <h2>
            More than answers.
            <br />
            <span>Better conversations.</span>
          </h2>
        </div>
        <p>
          A little help at exactly the right moment.
          <br />
          Everything your visitors need to take the next step.
        </p>
      </div>
      <div
        className="feature-tabs"
        role="tablist"
        aria-label="Product features"
      >
        {features.map(({ label,
          icon: Icon }, i) => (
          <button
            key={label}
            id={`feature-tab-${i}`}
            role="tab"
            aria-selected={activeTab === i}
            aria-controls="feature-panel"
            className={activeTab === i ? "active" : ""}
            onClick={() => setActiveTab(i)}
          >
            <Icon size={14} />{" "}
            {label}
          </button>
        ))}
      </div>
      <div
        className="feature-showcase"
        id="feature-panel"
        role="tabpanel"
        aria-labelledby={`feature-tab-${activeTab}`}
      >
        <div className="feature-copy">
          <div className="icon-box">
            <FeatureIcon />
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
          <TickList items={feature.benefits} />
          <button className="text-link" onClick={onStartTrial}>
            Meet your new teammate <ArrowUpRight size={14} />
          </button>
        </div>
        <FeaturePreview activeTab={activeTab} />
      </div>
      <div className="stats-row">
        {[
          ["24/7", "Support without hiring"],
          ["< 5 min", "From signup to live"],
          ["95%", "Questions resolved"],
          ["GPT-4o", "Intelligence built in"],
        ].map(([value, label]) => (
          <div key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
