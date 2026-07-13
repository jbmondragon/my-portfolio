import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Jake — Portfolio',
  description: 'Data analyst based in the Philippines.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-neutral-950 text-neutral-100">
        <div className="animated-bg" />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
