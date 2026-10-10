'use client';

import { useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ContactForm() {
  const [prepared, setPrepared] = useState(false);

  function composeEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Breco: ${data.get('topic')}`;
    const body = `Name: ${String(data.get('name')).trim()}\nEmail: ${data.get('email')}\nWebsite: ${String(data.get('website')).trim() || 'Not provided'}\n\n${String(data.get('message')).trim()}`;
    window.location.href = `mailto:support@breco.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }

  return <form className="contact-form" onSubmit={composeEmail}>
    <h2>What can we help with?</h2>
    <p>Share a few details and let’s take it from there.</p>
    <div className="contact-fields">
      <label>Your name<input name="name" autoComplete="name" placeholder="Alex Morgan" required maxLength={120}/></label>
      <label>Email address<input name="email" type="email" autoComplete="email" placeholder="alex@company.com" required maxLength={254}/></label>
    </div>
    <label>Website <span>(optional)</span><input name="website" type="url" autoComplete="url" placeholder="https://yourcompany.com" maxLength={500}/></label>
    <label>What’s on your mind?<select name="topic" defaultValue="Getting started"><option>Getting started</option><option>Plans and pricing</option><option>Technical support</option><option>Partnerships</option><option>Something else</option></select></label>
    <label>Your message<textarea name="message" placeholder="Tell us a little about your business or the question you’re working through…" rows={5} required maxLength={4000}/></label>
    <button className="button primary" type="submit">Compose email <ArrowUpRight size={15}/></button>
    <p className="contact-form-note">Opens your email app with these details. Send your message there to reach our team.</p>
    {prepared && <p className="contact-form-status" role="status">Your email draft is ready to open. If no email app opened, email support@breco.io directly. Your message has not been sent yet.</p>}
  </form>;
}
