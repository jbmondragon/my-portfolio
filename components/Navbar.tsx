'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/works', label: 'Works' },
  // { href: '/blogs', label: 'Blogs' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/80 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-4 md:relative md:flex-row md:justify-center md:px-10">
        <Link href="/" className="text-sm font-semibold tracking-[0.18em] uppercase text-neutral-900 dark:text-white md:absolute md:left-10">
          Jake
        </Link>

        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:gap-5">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-[10px] uppercase tracking-[0.14em] transition-colors md:text-[11px] md:tracking-[0.16em] ${
                      isActive
                        ? 'text-neutral-900 font-semibold dark:text-white'
                        : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
