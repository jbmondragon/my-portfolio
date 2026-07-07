'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/works', label: 'Works' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/contact', label: 'Contact' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = storedTheme ? storedTheme === 'dark' : prefersDark;
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const nextValue = !isDark;
    setIsDark(nextValue);
    document.documentElement.classList.toggle('dark', nextValue);
    window.localStorage.setItem('theme', nextValue ? 'dark' : 'light');
  };

  return (
    <aside className="w-full md:w-40 shrink-0 bg-white/90 text-neutral-700 flex md:flex-col md:h-screen md:sticky md:top-0 px-6 py-10 border-r border-neutral-200 backdrop-blur-sm dark:bg-neutral-900/80 dark:text-neutral-300 dark:border-neutral-800">
      <nav className="flex-1">
        <ul className="flex md:flex-col gap-4 md:gap-3 flex-wrap md:mt-16">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[11px] tracking-[0.18em] uppercase transition-colors inline-flex items-center gap-2 ${
                    isActive
                      ? 'text-neutral-900 font-semibold dark:text-white'
                      : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${isActive ? 'bg-neutral-900 dark:bg-white' : 'bg-transparent'}`} />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <button
        type="button"
        onClick={toggleTheme}
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-md border border-neutral-300 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-neutral-700 hover:bg-neutral-100 transition-colors dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
        aria-label="Toggle light and dark mode"
      >
        {isDark ? <Sun size={14} /> : <Moon size={14} />}
        {isDark ? 'Light' : 'Dark'}
      </button>
    </aside>
  );
}
