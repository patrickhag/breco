"use client";

import { useCallback, useState } from "react";
import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";
import HeroSection from "./components/home/hero-section";
import FeaturesSection from "./components/home/features-section";
import ToolsSection from "./components/home/tools-section";
import InstallationSection from "./components/home/installation-section";
import SolutionsSection from "./components/home/solutions-section";
import TestimonialsSection from "./components/home/testimonials-section";
import FaqSection from "./components/home/faq-section";
import TrialSection from "./components/home/trial-section";
import DemoChat from "./components/home/demo-chat";
import ContactDialog, { type ContactDialogKind } from "./components/home/contact-dialog";

export default function Home() {
  const [isChatOpen, setChatOpen] = useState(false);
  const [dialog, setDialog] = useState<ContactDialogKind | null>(null);

  const openTrial = () => setDialog("trial");
  const openPricing = () => setDialog("pricing");
  const openChat = () => setChatOpen(true);
  const closeDialog = useCallback(() => setDialog(null), []);

  return (
    <>
      <SiteHeader onPricing={openPricing} onGetStarted={openTrial} />
      <main>
        <HeroSection onStartTrial={openTrial} onOpenChat={openChat} />
        <FeaturesSection onStartTrial={openTrial} />
        <ToolsSection />
        <InstallationSection />
        <SolutionsSection />
        <TestimonialsSection />
        <FaqSection />
        <TrialSection onStartTrial={openTrial} />
      </main>
      <SiteFooter onStartTrial={openTrial} onPricing={openPricing} onOpenChat={openChat} />
      <DemoChat
        isOpen={isChatOpen}
        onToggle={() => setChatOpen(isOpen => !isOpen)}
        onClose={() => setChatOpen(false)}
      />
      {dialog && <ContactDialog kind={dialog} onClose={closeDialog} />}
    </>
  );
}
