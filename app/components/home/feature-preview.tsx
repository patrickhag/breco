import { Check, ChevronDown, Globe, MessageCircle, FileText, Database, CheckCheck } from "lucide-react";

export default function FeaturePreview({ activeTab }: { activeTab: number }) {

  return (
    <div className="knowledge-window">
      <div className="window-top">
        <div className="window-dots">
          <i />
          <i />
          <i />
        </div>
        <span>
          {activeTab === 0
            ? "Knowledge sources"
            : activeTab === 1
              ? "Conversation activity"
              : "Widget appearance"}
        </span>
        <span className="live">● Live preview</span>
      </div>
      {activeTab === 0 ? (
        <>
          <div className="window-title">
            <div>
              <h4>A little knowledge. A lot of answers.</h4>
              <p>Everything your assistant needs, in one place.</p>
            </div>
            <Database size={18} />
          </div>
          <div className="window-subnav">
            <span className="selected">Website</span>
            <span>Files</span>
            <span>Custom Q&A</span>
          </div>
          <div className="crawl-url">
            <Globe size={14} /> https://yourstore.com{" "}
            <span>
              <Check size={11} /> Synced
            </span>
          </div>
          <div className="table-label">
            <span>Page</span>
            <span>Status</span>
          </div>
          {[
            "/",
            "/products",
            "/shipping-policy",
            "/returns",
            "/about-us",
          ].map((x) => (
            <div className="crawl-row" key={x}>
              <span>
                <FileText size={13} />
                {x}
              </span>
              <span>
                <span className="status-dot" /> Indexed
              </span>
            </div>
          ))}
          <div className="window-bottom">
            5 pages indexed{" "}
            <span>
              Last synced just now <CheckCheck size={12} />
            </span>
          </div>
        </>
      ) : activeTab === 1 ? (
        <div className="alternate-preview">
          <div className="metric">
            <small>Visitor</small>
            <h4>I’d love to learn more about your services.</h4>
          </div>
          <div className="metric">
            <small>Breco assistant</small>
            <h4>Of course. What are you working on?</h4>
            <p>
              I can help you find the right service and connect you with
              our team.
            </p>
          </div>
          <div className="lead-captured">
            <CheckCheck /> A conversation becomes an opportunity.
          </div>
        </div>
      ) : (
        <div className="alternate-preview">
          <div className="setting">
            <span>Brand color</span>
            <span className="swatch" /> #E8CFB1
          </div>
          <div className="setting">
            <span>Chatbot name</span> Your assistant
          </div>
          <div className="setting">
            <span>Theme</span> Dark <ChevronDown size={13} />
          </div>
          <div className="setting">
            <span>Tone</span> Friendly <ChevronDown size={13} />
          </div>
          <div className="brand-preview">
            <MessageCircle />
            <h4>Hey there. How can I help?</h4>
            <p>Your brand, in every conversation.</p>
          </div>
        </div>
      )}
    </div>
  );
}
