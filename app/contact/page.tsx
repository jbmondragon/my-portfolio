import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { contactInfo, socialLinks } from '@/lib/siteData';

export default function ContactPage() {
  const socials = [
    { label: 'LinkedIn', href: socialLinks.linkedin },
    { label: 'GitHub', href: socialLinks.github },
    { label: 'Facebook', href: socialLinks.facebook },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10 md:py-16">
      <div className="rounded-xl border border-neutral-200/80 bg-white/70 p-6 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/60 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.7fr] lg:items-start">
          <section>
          <p className="text-sm font-medium italic text-neutral-500 dark:text-neutral-400">Contact</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl md:text-5xl">GET IN TOUCH</h1>
          <p className="mt-8 text-neutral-600 dark:text-neutral-300">{contactInfo.location}</p>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">Open to entry-level data analyst roles and freelance dashboard work.</p>

          <div className="mt-16 space-y-3">
            <a href={`tel:${contactInfo.phone}`} className="block break-all text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl md:text-5xl">
              {contactInfo.phoneDisplay}
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
          <ContactForm />
          </section>
        </div>
      </div>
    </main>
  );
}
