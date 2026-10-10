import { MessageCircle } from "lucide-react";

export default function Logo({ small = false }: { small?: boolean }) {
  return (
    <a
      className={`logo ${small ? "small" : ""}`}
      href="#"
      aria-label="Breco home"
    >
      <span className="logo-mark">
        <MessageCircle size={20} strokeWidth={2.8} />
      </span>
      breco<span className="logo-dot">.</span>
    </a>
  );
}
