import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import SiteHeader from '../components/site-header';
import ContactForm from './contact-form';

export const metadata: Metadata = {
  title: 'Contact us — Breco',
  description: 'Talk to the Breco team about setup, plans, or support for your AI chatbot.',
};

export default function ContactPage() {
  return <>
    <SiteHeader/>
    <main className="container contact-page">
      <div className="contact-intro">
        <span className="contact-label"><MessageCircle size={16}/> Contact us</span>
        <h1>Good things start<br/>with a conversation.</h1>
        <p>Getting started with Breco? Need a hand with your chatbot? Tell us what you have in mind.</p>
        <a className="contact-email" href="mailto:support@breco.io"><Mail size={20}/><span><small>Email the team</small>support@breco.io</span><ArrowUpRight size={18}/></a>
        <div className="contact-help"><h2>A quick answer might be here.</h2><p>Explore setup, integrations, and customization in our frequently asked questions.</p><Link className="text-link" href="/#faq">Browse common questions <ArrowUpRight size={14}/></Link></div>
      </div>
      <ContactForm/>
    </main>
    <footer className="container contact-footer"><span>© {new Date().getFullYear()} Breco. Made for better conversations.</span><Link href="/">Back to home <ArrowUpRight size={13}/></Link></footer>
  </>;
}
