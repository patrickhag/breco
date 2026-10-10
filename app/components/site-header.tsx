'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight, ChevronDown, Menu, MessageCircle, X } from 'lucide-react';
import ThemeToggle from './theme-toggle';

export default function SiteHeader({ onPricing, onGetStarted }: { onPricing?: () => void; onGetStarted?: () => void }) {
  const [mobile, setMobile] = useState(false);
  const close = () => setMobile(false);

  return <header className="header"><div className="nav-wrap">
    <Link className="logo" href="/" aria-label="Breco home"><span className="logo-mark"><MessageCircle size={20} strokeWidth={2.8}/></span>breco<span className="logo-dot">.</span></Link>
    <nav id="main-navigation" className={mobile ? 'nav open' : 'nav'} aria-label="Main navigation">
      <Link href="/#features" onClick={close}>Platform <ChevronDown size={12}/></Link>
      <Link href="/#solutions" onClick={close}>Solutions</Link>
      <Link href="/#how-it-works" onClick={close}>How it works</Link>
      {onPricing ? <button onClick={() => { close(); onPricing(); }}>Pricing</button> : <a href="mailto:support@breco.io?subject=Breco%20pricing%20inquiry">Pricing</a>}
      <Link href="/#faq" onClick={close}>FAQ</Link>
      <Link className="mobile-contact-link" href="/contact-us" onClick={close}>Contact us <ArrowUpRight size={12}/></Link>
    </nav>
    <div className="nav-actions"><ThemeToggle/>
      <Link className="contact-link" href="/contact-us">Contact us <ArrowUpRight size={12}/></Link>
      {onGetStarted ? <button className="button primary small-button" onClick={onGetStarted}>Get started <ArrowUpRight size={13}/></button> : <a className="button primary small-button" href="mailto:support@breco.io?subject=Start%20my%20Breco%20free%20trial">Get started <ArrowUpRight size={13}/></a>}
      <button className="menu-toggle" aria-label={mobile ? 'Close navigation' : 'Open navigation'} aria-controls="main-navigation" aria-expanded={mobile} onClick={() => setMobile(!mobile)}>{mobile ? <X/> : <Menu/>}</button>
    </div>
  </div></header>;
}
