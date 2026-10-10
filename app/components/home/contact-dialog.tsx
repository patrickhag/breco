"use client";

import { ArrowUpRight, Sparkles, X, Layers } from "lucide-react";
import { useEffect, useRef } from "react";
import TickList from "../tick-list";

export type ContactDialogKind = "trial" | "pricing";

export default function ContactDialog({ kind: modal, onClose }: { kind: ContactDialogKind; onClose: () => void }) {
  const dialogRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const nodes = dialogRef.current?.querySelectorAll<HTMLElement>("button, a");
        if (!nodes?.length) return;
        const first = nodes[0],
          last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const previous = document.activeElement as HTMLElement | null;
    dialogRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    document.addEventListener("keydown", onKey);
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = old;
      previous?.focus();
    };
  }, [onClose]);
  return (
    <div className="modal-overlay" onClick={onClose}>
      <section
        ref={dialogRef}
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          aria-label="Close dialog"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        <span className="icon-box">
          {modal === "trial" ? <Sparkles /> : <Layers />}
        </span>
        <h2 id="modal-title">
          {modal === "trial"
            ? "Let’s get you started."
            : "Room for your next chapter."}
        </h2>
        <p>
          {modal === "trial"
            ? "Start with a 7-day free trial. Send our team your website URL to get help setting up Breco."
            : "Find the right fit for your conversation volume. Plans scale from 50 to 200 to 1,000 indexed pages, with extra messages available as an add-on."}
        </p>
        <TickList
          items={
            modal === "trial"
              ? [
                "No charge until your trial ends",
                "Works with your existing website",
                "Cancel anytime",
              ]
              : [
                "Upgrade as your business grows",
                "Growth is a fit for around 3,000 chats per month",
                "Contact our team for current pricing",
              ]
          }
        />
        <a
          className="button primary"
          href={`mailto:support@breco.io?subject=${encodeURIComponent(modal === "trial" ? "Start my Breco free trial" : "Breco pricing inquiry")}`}
        >
          Email the Breco team <ArrowUpRight size={14} />
        </a>
        <small>support@breco.io</small>
      </section>
    </div>
  );
}
