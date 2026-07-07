import Image from 'next/image';
import { Phone, Mail, MapPin, Download, Quote } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 md:py-14">
      <div className="rounded-xl border border-neutral-200/80 bg-white/70 p-6 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/60 md:p-10">
        <p className="text-sm font-medium italic text-neutral-500 dark:text-neutral-400">Nice to meet you!</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-5xl">WELCOME TO...</h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <section>
            <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-full border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">
              <Image src="/src/img/img2.png" alt="Jake Mondragon" fill className="object-cover object-top" priority />
            </div>

            <h2 className="mt-8 text-center text-4xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-violet-500 to-orange-500 bg-clip-text text-transparent">JAKE MONDRAGON</span>
            </h2>
            <p className="mt-2 text-center text-sm text-neutral-700 dark:text-neutral-300">
              <span className="font-semibold italic">Jake Mondragon</span> based in <span className="font-semibold italic">Philippines</span>
            </p>

            <div className="mt-6 flex justify-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 border-b border-neutral-400 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-700 transition-colors hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white"
              >
                Download CV
                <Download size={12} />
              </a>
            </div>
          </section>

          <section>
            <div className="grid gap-4 border-b border-neutral-200 pb-6 text-sm dark:border-neutral-800 md:grid-cols-2">
              <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700">
                  <Phone size={12} />
                </span>
                +639263675034
              </div>
              <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700">
                  <Mail size={12} />
                </span>
                mondragonjake53@gmail.com
              </div>
              <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 md:col-span-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700">
                  <MapPin size={12} />
                </span>
                Leyte, Philippines
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-[auto_1fr] md:items-start">
              <div>
                <p className="text-4xl font-extrabold leading-none">
                  <span className="bg-gradient-to-r from-fuchsia-500 to-orange-500 bg-clip-text text-transparent">200+</span>
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">Hours Experience</p>
              </div>
              <div className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                Hello there! My name is <span className="font-semibold">Jake Mondragon</span>.
                <br />
                I am a Data Analyst and Developer, and I&apos;m very passionate and dedicated to my work.
              </div>
            </div>

            <blockquote className="mt-8 rounded-md bg-neutral-900 px-6 py-5 text-sm italic text-neutral-100 dark:bg-neutral-950">
              <Quote size={18} className="mb-2 text-neutral-500" />
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed sit ultrices et sed metus sollicitudin.”
            </blockquote>
          </section>
        </div>
      </div>
    </main>
  );
}
