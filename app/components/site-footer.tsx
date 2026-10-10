import { ArrowUpRight } from "lucide-react";
import Logo from "./logo";

export default function SiteFooter({ onStartTrial, onPricing, onOpenChat }: { onStartTrial: () => void; onPricing: () => void; onOpenChat: () => void }) {

  return (
    <footer className="container footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Logo />
          <p>
            A little conversation.
            <br />A world of possibility.
          </p>
          <a href="mailto:support@breco.io">
            support@breco.io <ArrowUpRight size={12} />
          </a>
        </div>
        <div className="footer-column">
          <h4>Product</h4>
          <a href="#features">Platform</a>
          <button onClick={onPricing}>Pricing</button>
          <a href="#how-it-works">Installation</a>
          <button onClick={onOpenChat}>Live playground</button>
        </div>
        <div className="footer-column">
          <h4>Solutions</h4>
          <a href="#solutions">E-commerce</a>
          <a href="#solutions">SaaS & tech</a>
          <a href="#solutions">Agencies & services</a>
          <a href="#features">Lead generation</a>
        </div>
        <div className="footer-column">
          <h4>Let’s connect</h4>
          <a href="#faq">Common questions</a>
          <a href="/contact-us">Contact us</a>
          <a href="mailto:support@breco.io?subject=Breco%20support">
            Get support
          </a>
          <button onClick={onStartTrial}>Get started</button>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Breco. Made for better conversations.
        </span>
        <span>
          <span className="status-dot" /> Ready when your customers are.
        </span>
      </div>
    </footer>
  );
}
