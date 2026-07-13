'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
    </aside>
  );
}
