import { Phone, Mail, ArrowRight } from 'lucide-react';
import { FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa';
import HeroGraphic from '@/components/HeroGraphic';
import { contactInfo, socialLinks } from '@/lib/siteData';

export default function Home() {
  return (
    <main className="w-full min-h-[calc(100vh-76px)] flex items-center px-8 md:px-14 py-14 bg-transparent">
      <div className="relative w-full grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* left: text content */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">Data Analyst</p>

          <h1 className="mt-6 text-4xl md:text-6xl leading-[1.05] tracking-tight text-neutral-900 dark:text-white">
            Jake Mondragon
          </h1>

          <p className="mt-8 max-w-xl text-base md:text-lg text-neutral-600 leading-relaxed dark:text-neutral-300">
            Data analyst based in the Philippines, focused on clear insights, reliable metrics, and practical decision support.
          </p>

          <button className="mt-10 inline-flex items-center gap-2 border border-neutral-900 text-neutral-900 text-xs uppercase tracking-[0.18em] px-6 py-3 hover:bg-neutral-900 hover:text-white transition-colors dark:border-neutral-200 dark:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-900">
            Contact
            <ArrowRight size={14} />
          </button>

          <div className="mt-14 flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-neutral-600 dark:text-neutral-300">
            <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 hover:text-neutral-900 dark:hover:text-white transition-colors">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700">
                <Phone size={11} />
              </span>
              {contactInfo.phone}
            </a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-neutral-900 dark:hover:text-white transition-colors">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700">
                <Mail size={11} />
              </span>
              {contactInfo.email}
            </a>
          </div>
        </div>

        {/* right: graphic */}
        <HeroGraphic />

        <div className="hidden lg:flex absolute -right-14 xl:-right-24 top-1/2 -translate-y-1/2 flex-col items-center gap-3 text-neutral-500 dark:text-neutral-400">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 hover:text-black dark:hover:text-white transition-colors"
          >
            <FaLinkedinIn size={12} />
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 hover:text-black dark:hover:text-white transition-colors"
          >
            <FaGithub size={12} />
          </a>
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 hover:text-black dark:hover:text-white transition-colors"
          >
            <FaFacebookF size={12} />
          </a>
          <span className="mt-1 block h-14 w-px bg-neutral-300 dark:bg-neutral-700" />
        </div>
      </div>
    </main>
  );
}
