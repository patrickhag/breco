"use client";

import { Check, Copy, Code2, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const snippet =
  '<!-- Add before your closing body tag -->\n<script\n  src="https://breco.io/widget.js"\n  data-key="ak_your_api_key"\n></script>';

export default function InstallationSection() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, []);

  async function copyInstallationCode() {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section
      className="container section install-section"
      id="how-it-works"
    >
      <div className="install-copy">
        <span className="eyebrow">From URL to “how can I help?”</span>
        <h2>
          Five minutes.
          <br />
          Three steps.
          <br />
          <span>Always-on support.</span>
        </h2>
        <p>
          No complex workflows. No training spreadsheets.
          <br />
          Just your website and one small line of code.
        </p>
        <div className="steps">
          {[
            [
              "Add your website",
              "Give Breco your URL. We’ll take it from there.",
            ],
            [
              "Let it learn",
              "Your pages become a knowledge base in minutes.",
            ],
            [
              "Make yourself available",
              "Add the script. Your chatbot is ready for visitors.",
            ],
          ].map(([title, description], index) => (
            <div className="step" key={title}>
              <span>{index + 1}</span>
              <div>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="code-area">
        <div className="code-window">
          <div className="code-header">
            <span>
              <Code2 size={14} /> index.html
            </span>
            <button
              onClick={copyInstallationCode}
              aria-label="Copy installation code"
            >
              {copied ? <Check size={15} /> : <Copy size={15} />}{" "}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <pre>
            <span className="code-muted">
              {"<!-- A little code. A lot of possibility. -->"}
            </span>
            {"\n\n"}
            <span className="code-peach">{"<script"}</span>
            {"\n  "}src=
            <span className="code-green">
              &quot;https://breco.io/widget.js&quot;
            </span>
            {"\n  "}data-key=
            <span className="code-green">&quot;ak_your_api_key&quot;</span>
            {"\n"}
            <span className="code-peach">{"></script>"}</span>
          </pre>
          <div className="code-footer">
            <span className="status-dot" /> That’s it. You’re live.
          </div>
        </div>
        <p className="code-caption">
          <ShieldCheck size={13} /> One lightweight script. Works with your
          existing website.
        </p>
      </div>
    </section>
  );
}
