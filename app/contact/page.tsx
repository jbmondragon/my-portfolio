import Link from 'next/link';
import { ArrowUpRight, Link as LinkIcon } from 'lucide-react';
import { contactInfo, socialLinks } from '@/lib/siteData';

export default function ContactPage() {
  const socials = [
    { label: 'Facebook', href: socialLinks.facebook },
    { label: 'GitHub', href: socialLinks.github },
    { label: 'LinkedIn', href: socialLinks.linkedin },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10 md:py-16">
      <div className="rounded-xl border border-neutral-200/80 bg-white/70 p-6 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/60 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.7fr] lg:items-start">
          <section>
          <p className="text-sm font-medium italic text-neutral-500 dark:text-neutral-400">Contact</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl md:text-5xl">REACH OUT ME</h1>
          <p className="mt-8 text-neutral-600 dark:text-neutral-300">{contactInfo.location}</p>

          <div className="mt-16 space-y-3">
            <a href={`tel:${contactInfo.phone}`} className="block break-all text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl md:text-5xl">
              {contactInfo.phone}
            </a>
            <a href={`mailto:${contactInfo.email}`} className="block break-all text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl md:text-4xl">
              {contactInfo.email}
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-6 gap-y-3">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
              >
                {social.label}
              </Link>
            ))}
          </div>
          </section>

          <section className="rounded-sm bg-gradient-to-r from-violet-500 via-rose-400 to-amber-400 p-6 text-white sm:p-8 md:p-14">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-6xl">ANY PROJECT?</h2>

          <form className="mt-10 space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-white/80">Name</span>
                <input
                  type="text"
                  className="w-full border-b border-white/70 bg-transparent py-2 text-sm text-white placeholder-white/70 outline-none"
                  placeholder="Your name"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-white/80">Email</span>
                <input
                  type="email"
                  className="w-full border-b border-white/70 bg-transparent py-2 text-sm text-white placeholder-white/70 outline-none"
                  placeholder="you@email.com"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-white/80">Message</span>
              <textarea
                rows={3}
                className="w-full resize-none border-b border-white/70 bg-transparent py-2 text-sm text-white placeholder-white/70 outline-none"
                placeholder="Write your message"
              />
            </label>

            <button
              type="button"
              className="inline-flex items-center gap-2 bg-neutral-950 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-black"
            >
              Submit now
              <ArrowUpRight size={14} />
            </button>

            <button type="button" className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-white/90 hover:text-white">
              <LinkIcon size={13} />
              Attach file
            </button>
          </form>
          </section>
        </div>
      </div>
    </main>
  );
}
