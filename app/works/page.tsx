import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function WorksPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  const projects: Array<{
    category: string;
    title: string;
    description?: string;
    tech?: string[];
    href?: string;
    imageSrc?: string;
    imageAlt?: string;
  }> = [
    {
      category: 'Product Analytics',
      title: 'Bubble Link',
      description:
        'Laundry pickup and delivery platform connecting customers with nearby shops, with customer, shop-owner and admin workflows.',
      tech: ['Laravel', 'MySQL', 'Blade', 'Tailwind CSS'],
      href: 'https://github.com/jbmondragon/BubbleLink',
      imageSrc: `${basePath}/src/img/bubblelink.png`,
      imageAlt: 'BubbleLink laundry booking platform',
    },
    {
      category: 'Dashboard Development',
      title: 'HRM Analytics',
      tech: ['Django', 'Excel', 'Dashboards'],
      imageSrc: `${basePath}/src/img/dashboard-weeklysync.png`,
      imageAlt: 'Weeklysync HRM analytics dashboard',
    },
    {
      category: 'Analytics Dashboard',
      title: 'Kwentadoor',
      imageSrc: `${basePath}/src/img/kwentadoor.png`,
      imageAlt: 'Kwentadoor analytics dashboard',
    },
    {
      category: 'Data Modeling',
      title: 'ManageMe',
      description:
        'Alumni management system for records, events, attendance, registration and payments, with dashboards for membership statistics.',
      tech: ['PostgreSQL', 'CRUD', 'Dashboards'],
    },
    {
      category: 'Algorithms',
      title: 'Huffman Image Compressor',
      description: 'Lossless image compression with Huffman coding; decompressed output is pixel-identical to the original.',
      tech: ['Huffman coding', 'Compression'],
    },
    // {
    //   category: 'Project 4',
    //   title: 'Bally Website Research',
    // },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10 md:py-16">
      <div className="rounded-xl border border-neutral-200/80 bg-white/70 p-6 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/60 md:p-10">
        <p className="text-sm font-medium italic text-neutral-500 dark:text-neutral-400">Work</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">RECENT PROJECTS</h1>

        <section className="mt-8 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article key={`${project.category}-${project.title}`} className="grid gap-5 sm:grid-cols-[0.9fr_1.2fr] sm:items-start">
              <div>
                <p className="text-sm font-medium italic text-neutral-500 dark:text-neutral-400">{project.category}</p>
                <h2 className="mt-3 text-3xl font-bold leading-none tracking-tight text-neutral-900 dark:text-white sm:text-4xl md:text-5xl">
                  {project.title}
                </h2>
                {project.description && (
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{project.description}</p>
                )}
                {project.tech && (
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-400"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center justify-center text-neutral-900 transition-transform hover:translate-x-0.5 hover:-translate-y-0.5 dark:text-white"
                    aria-label={`Open project ${project.title}`}
                  >
                    <ArrowUpRight size={34} strokeWidth={1.8} />
                  </a>
                )}
              </div>

              <div className="aspect-[4/3] w-full rounded-sm border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-800 dark:bg-neutral-800/70">
                {project.imageSrc ? (
                  <div className="relative h-full w-full overflow-hidden rounded-sm border border-neutral-200/80 bg-white dark:border-neutral-700/80 dark:bg-neutral-900">
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt ?? project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                ) : (
                  <div className="flex h-full items-center justify-center rounded-sm border border-dashed border-neutral-300 px-4 text-center text-xs font-medium uppercase tracking-[0.12em] text-neutral-500 dark:border-neutral-600 dark:text-neutral-400">
                    {project.title}
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
