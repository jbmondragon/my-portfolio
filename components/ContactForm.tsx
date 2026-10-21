'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { contactInfo } from '@/lib/siteData';

// Static export has no backend, so the form hands off to the visitor's mail client.
export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `Portfolio inquiry from ${name}`;
    const body = `${message}\n\n${name}\n${email}`;
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputClass = 'w-full border-b border-white/70 bg-transparent py-2 text-sm text-white placeholder-white/70 outline-none focus:border-white';

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-white/80">Name</span>
          <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} placeholder="Your name" />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-white/80">Email</span>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} placeholder="you@email.com" />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-white/80">Message</span>
        <textarea
          rows={3}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-none`}
          placeholder="Write your message"
        />
      </label>

      <button type="submit" className="inline-flex items-center gap-2 bg-neutral-950 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-black">
        Send message
        <ArrowUpRight size={14} />
      </button>
    </form>
  );
}
