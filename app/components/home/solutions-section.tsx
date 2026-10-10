import { ArrowUpRight, Check, ShoppingBag, Layers, Code2, Users } from "lucide-react";
import TickList from "../tick-list";

export default function SolutionsSection() {

  return (
    <section className="container section" id="solutions">
      <div className="section-heading split-heading">
        <div>
          <span className="eyebrow">Built for your kind of business</span>
          <h2>
            Your next customer
            <br />
            <span>has a question.</span>
          </h2>
        </div>
        <p>
          Whatever you do, be there when it matters.
          <br />
          Breco makes every visitor feel like your only visitor.
        </p>
      </div>
      <div className="solutions-grid">
        {[
          {
            icon: ShoppingBag,
            title: "For the next “add to cart.”",
            type: "E-commerce",
            className: "commerce-art",
            items: [
              "Personalized product recommendations",
              "Shipping & returns answers",
              "Less cart abandonment",
            ],
          },
          {
            icon: Layers,
            title: "For the next power user.",
            type: "SaaS & tech",
            className: "saas-art",
            items: [
              "Feature and pricing explanations",
              "Faster customer onboarding",
              "Fewer repetitive support tickets",
            ],
          },
          {
            icon: Users,
            title: "For the next big project.",
            type: "Agencies & services",
            className: "agency-art",
            items: [
              "Qualify leads around the clock",
              "Explain services and share your work",
              "Guide visitors to a consultation",
            ],
          },
        ].map(({ icon: Icon, title, type, className, items }, i) => (
          <article className="solution-card" key={type}>
            <div className={`solution-art ${className}`}>
              <div className="art-grid" />
              <span className="art-badge">{type}</span>
              {i === 0 ? (
                <div className="mini-store">
                  <div className="bag-illustration">
                    <ShoppingBag size={58} strokeWidth={1} />
                  </div>
                  <div className="store-label">
                    <span>The everyday collection</span>
                    <ArrowUpRight size={15} />
                  </div>
                  <span className="float-tag">
                    <Check size={11} /> The perfect match.
                  </span>
                </div>
              ) : i === 1 ? (
                <div className="mini-app">
                  <div className="app-bar">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="app-lines">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="floating-code">
                    <Code2 size={26} />
                    <span>
                      Less friction.
                      <br />
                      More “aha.”
                    </span>
                  </div>
                </div>
              ) : (
                <div className="mini-lead">
                  <span className="lead-avatar">JL</span>
                  <h4>Your next great client.</h4>
                  <p>Let’s build something together.</p>
                  <div>
                    <Check size={12} /> Qualified lead
                  </div>
                </div>
              )}
            </div>
            <div className="solution-body">
              <span className="solution-label">
                <Icon size={13} />
                {type}
              </span>
              <h3>{title}</h3>
              <TickList items={items} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
