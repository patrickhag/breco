import { MessageCircle, Database, Code2, Palette, BarChart3, Users } from "lucide-react";

const tools = [
  {
    icon: Database,
    title: "Multi-source knowledge",
    text: "Your website, files, and custom Q&A. One reliable source of answers.",
    detail: "PDF, DOCX, CSV, TXT & Markdown",
  },
  {
    icon: Users,
    title: "Every conversation, a lead",
    text: "Capture names and emails naturally, while interest is still high.",
    detail: "Lead dashboard & CSV export",
  },
  {
    icon: Code2,
    title: "One line. You’re live.",
    text: "Copy a single script tag. Breco fits into the stack you already use.",
    detail: "Works on any website",
  },
  {
    icon: Palette,
    title: "Unmistakably your brand",
    text: "Your colors, your name, your personality. Make Breco feel right at home.",
    detail: "Dark & light themes",
  },
  {
    icon: BarChart3,
    title: "See what’s working",
    text: "Understand your conversations, visitor feedback, and lead performance.",
    detail: "Analytics that make sense",
  },
  {
    icon: MessageCircle,
    title: "Test before you launch",
    text: "Try real questions in the live playground before your visitors do.",
    detail: "Instant widget preview",
  },
];

export default function ToolsSection() {

  return (
    <section className="container section tools-section">
      <div className="center-heading">
        <span className="eyebrow">One platform. Every conversation.</span>
        <h2>A small team’s unfair advantage.</h2>
        <p>
          All the tools to support, understand, and convert your visitors.
          <br />
          Without another tab to keep open.
        </p>
      </div>
      <div className="tools-grid">
        {tools.map(({ icon: Icon, title, text, detail }) => (
          <article className="tool-card" key={title}>
            <Icon size={21} />
            <h3>{title}</h3>
            <p>{text}</p>
            <div>
              <span className="status-dot" />
              {detail}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
