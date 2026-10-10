import { ArrowUpRight, ArrowRight, MessageCircle, ShoppingBag, Layers, Code2 } from "lucide-react";
import ProductPreview from "./product-preview";

export default function HeroSection({ onStartTrial, onOpenChat }: { onStartTrial: () => void; onOpenChat: () => void }) {

  return (
    <section className="hero container">
      <a href="#how-it-works" className="announcement">
        <span className="status-dot" /> Your website’s new best teammate{" "}
        <ArrowRight size={12} />
      </a>
      <h1>
        Every conversation.
        <br />
        <span>A new customer.</span>
      </h1>
      <p className="hero-description">
        Meet the AI chatbot that knows your business.
        <br className="desktop-break" /> Answer questions, capture leads,
        and turn visitors into customers.
        <br className="desktop-break" /> All on autopilot. All with Breco.
      </p>
      <div className="button-row">
        <button
          className="button primary"
          onClick={onStartTrial}
        >
          Give it a try <ArrowUpRight size={15} />
        </button>
        <button
          className="button secondary"
          onClick={onOpenChat}
        >
          <MessageCircle size={15} /> Try Breco live
        </button>
      </div>
      <ProductPreview onOpenChat={onOpenChat} />
      <div className="platform-strip">
        <p>Fits right into your world.</p>
        <div className="platform-logos">
          <span>
            <ShoppingBag />
            shopify
          </span>
          <span className="wordpress">ⓦ WordPress</span>
          <span className="wix">WIX</span>
          <span>
            <Layers /> Squarespace
          </span>
          <span className="webflow">▰ webflow</span>
          <span>
            <span className="framer-icon" />
            Framer
          </span>
          <span className="custom">
            <Code2 /> Custom code
          </span>
        </div>
      </div>
    </section>
  );
}
