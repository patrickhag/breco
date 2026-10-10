import { ArrowUpRight, Check, MessageCircle } from "lucide-react";

export default function TrialSection({ onStartTrial }: { onStartTrial: () => void }) {

  return (
    <section className="container final-cta">
      <div className="cta-orbit" />
      <span className="logo-mark">
        <MessageCircle size={25} />
      </span>
      <h2>
        Your best first impression.
        <br />
        <span>On every visit.</span>
      </h2>
      <p>
        Your next customer is already on your website.
        <br />
        Give them a reason to stay.
      </p>
      <div className="button-row">
        <button
          className="button primary"
          onClick={onStartTrial}
        >
          Start your free trial <ArrowUpRight size={14} />
        </button>
        <a className="button secondary" href="mailto:support@breco.io">
          Let’s talk <ArrowUpRight size={14} />
        </a>
      </div>
      <div className="cta-notes">
        <span>
          <Check size={12} /> 7-day free trial
        </span>
        <span>
          <Check size={12} /> No code required
        </span>
        <span>
          <Check size={12} /> Cancel anytime
        </span>
      </div>
    </section>
  );
}
