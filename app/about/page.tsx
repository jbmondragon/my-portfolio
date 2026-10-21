import Image from 'next/image';
import { Phone, Mail, MapPin, Download, Quote } from 'lucide-react';
import { certifications, contactInfo, cvPath, education, experience, skills, summary } from '@/lib/siteData';

const sectionLabel = 'text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400';

export default function AboutPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 md:py-14">
      <div className="rounded-xl border border-neutral-200/80 bg-white/70 p-6 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/60 md:p-10">
        <p className="text-sm font-medium italic text-neutral-500 dark:text-neutral-400">Nice to meet you!</p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl md:text-5xl">ABOUT ME</h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <section>
            <div className="relative mx-auto h-52 w-52 overflow-hidden rounded-full border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 sm:h-64 sm:w-64">
              <Image src={`${basePath}/src/img/img2.png`} alt="Jake Mondragon" fill className="object-cover object-top" priority />
            </div>

            <h2 className="mt-8 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
              <span className="bg-gradient-to-r from-violet-500 to-orange-500 bg-clip-text text-transparent">JAKE MONDRAGON</span>
            </h2>
            <p className="mt-2 text-center text-sm text-neutral-700 dark:text-neutral-300">
              <span className="font-semibold italic">Data Analyst</span> based in <span className="font-semibold italic">Leyte, Philippines</span>
            </p>

            <div className="mt-6 flex justify-center">
              <a
                href={`${basePath}${cvPath}`}
                download
                className="inline-flex items-center gap-2 border-b border-neutral-400 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-700 transition-colors hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white"
              >
                Download CV
                <Download size={12} />
              </a>
            </div>
          </section>

          <section>
            <div className="grid gap-4 border-b border-neutral-200 pb-6 text-sm dark:border-neutral-800 md:grid-cols-2">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700">
                  <Phone size={12} />
                </span>
                {contactInfo.phoneDisplay}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700">
                  <Mail size={12} />
                </span>
                {contactInfo.email}
              </a>
              <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 md:col-span-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700">
                  <MapPin size={12} />
                </span>
                {contactInfo.location}
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-[auto_1fr] md:items-start">
              <div>
                <p className="text-4xl font-extrabold leading-none">
                  <span className="bg-gradient-to-r from-fuchsia-500 to-orange-500 bg-clip-text text-transparent">200</span>
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">Internship hours</p>
              </div>
              <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">{summary}</p>
            </div>

            <blockquote className="mt-8 rounded-md bg-neutral-900 px-6 py-5 text-sm italic text-neutral-100 dark:bg-neutral-950">
              <Quote size={18} className="mb-2 text-neutral-500" />
              “Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.”
            </blockquote>
          </section>
        </div>

        <div className="mt-14 grid gap-12 border-t border-neutral-200 pt-10 dark:border-neutral-800 lg:grid-cols-[1.4fr_1fr]">
          <section>
            <h2 className={sectionLabel}>Experience</h2>
            <ol className="mt-6 space-y-8">
              {experience.map((job) => (
                <li key={job.role} className="border-l border-neutral-300 pl-5 dark:border-neutral-700">
                  <p className="text-xs uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">{job.period}</p>
                  <h3 className="mt-1 text-lg font-semibold text-neutral-900 dark:text-white">{job.role}</h3>
                  <p className="text-sm italic text-neutral-600 dark:text-neutral-400">{job.org}</p>
                  <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </section>

          <div className="space-y-10">
            <section>
              <h2 className={sectionLabel}>Education</h2>
              <ul className="mt-6 space-y-4">
                {education.map((item) => (
                  <li key={item.school}>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-white">{item.degree}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {item.school} · {item.period}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className={sectionLabel}>Skills</h2>
              <dl className="mt-6 space-y-3 text-sm">
                {skills.map((skill) => (
                  <div key={skill.group} className="grid grid-cols-[6.5rem_1fr] gap-3">
                    <dt className="text-neutral-500 dark:text-neutral-400">{skill.group}</dt>
                    <dd className="flex flex-wrap gap-1.5">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs text-neutral-700 dark:border-neutral-700 dark:text-neutral-300"
                        >
                          {item}
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section>
              <h2 className={sectionLabel}>Certifications</h2>
              <ul className="mt-6 list-disc space-y-1.5 pl-4 text-sm text-neutral-700 dark:text-neutral-300">
                {certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
