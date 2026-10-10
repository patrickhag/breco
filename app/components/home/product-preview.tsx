import { ArrowUpRight, ArrowRight, Check, Globe, MessageCircle, Sparkles, FileText, Database, Zap, ShieldCheck, CheckCheck } from "lucide-react";

export default function ProductPreview({ onOpenChat }: { onOpenChat: () => void }) {

  return (
    <div className="hero-product">
      <div className="product-topline">
        <span>
          <span className="mini-mark">b.</span> Your business. Always
          online.
        </span>
        <span className="live">
          <span className="status-dot" /> All systems ready
        </span>
      </div>
      <div className="product-body">
        <aside className="knowledge-preview">
          <div className="panel-label">
            <Database size={14} /> Your knowledge base{" "}
            <span>5 sources</span>
          </div>
          <div className="domain">
            <Globe size={15} /> yourstore.com <CheckCheck size={14} />
          </div>
          {[
            "Homepage",
            "Products & collections",
            "Shipping policy",
            "Returns & exchanges",
            "About your business",
          ].map((x, i) => (
            <div className="source" key={x}>
              <FileText size={13} />
              <span>{x}</span>
              <span className="indexed">
                <Check size={11} /> Indexed
              </span>
            </div>
          ))}
          <div className="source-footer">
            <span className="status-dot" /> Trained on your content. Ready
            to help.
          </div>
        </aside>
        <div className="connection">
          <span />
          <div>
            <Sparkles size={22} />
          </div>
          <span />
        </div>
        <div className="chat-preview">
          <div className="chat-heading">
            <span className="bot-avatar">
              <MessageCircle size={19} />
            </span>
            <div>
              Breco assistant
              <small>
                <span className="status-dot" /> Here to help, 24/7
              </small>
            </div>
            <span className="dots">•••</span>
          </div>
          <div className="chat-content">
            <div className="chat-bubble customer">
              Which running shoe is best for long distance?
            </div>
            <div className="bot-message">
              <span className="tiny-bot">
                <Sparkles size={12} />
              </span>
              <div className="chat-bubble bot">
                The Ultra Glide 3 is a great fit. It’s built for
                comfortable miles, with extra cushioning.
                <button onClick={onOpenChat}>
                  Let’s find your perfect pair <ArrowUpRight size={12} />
                </button>
              </div>
            </div>
            <div className="conversation-result">
              <CheckCheck size={12} /> Answered using your product catalog
            </div>
          </div>
          <button className="fake-input" onClick={onOpenChat}>
            Ask us anything…{" "}
            <span>
              <ArrowRight size={14} />
            </span>
          </button>
        </div>
      </div>
      <div className="product-bottom">
        <span>
          <ShieldCheck size={12} /> Grounded in your content
        </span>
        <span>
          <Zap size={12} /> Powered by GPT-4o
        </span>
        <span>
          <Globe size={12} /> Works on any website
        </span>
      </div>
    </div>
  );
}
