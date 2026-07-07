import { ArrowUpRight } from 'lucide-react';

export default function WorksPage() {
  const projects = [
    {
      category: 'Product Analytics',
      title: 'Bubble Link',
      imageLabel: 'Replace with your project photo (work-1)',
    },
    {
      category: 'Dashboard Development',
      title: 'HRM Analytics',
      imageLabel: 'Replace with your project photo (work-2)',
    },
    {
      category: 'Project 3',
      title: 'Bally Website Research',
      imageLabel: 'Replace with your project photo (work-3)',
    },
    {
      category: 'Project 4',
      title: 'Bally Website Research',
      imageLabel: 'Replace with your project photo (work-4)',
    },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10 md:py-16">
      <div className="rounded-xl border border-neutral-200/80 bg-white/70 p-6 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/60 md:p-10">
        <p className="text-sm font-medium italic text-neutral-500 dark:text-neutral-400">Work</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">RECENT PROJECT</h1>

        <section className="mt-8 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article key={`${project.category}-${project.title}`} className="grid gap-5 sm:grid-cols-[0.9fr_1.2fr] sm:items-start">
              <div>
                <p className="text-sm font-medium italic text-neutral-500 dark:text-neutral-400">{project.category}</p>
                <h2 className="mt-3 text-5xl font-bold leading-none tracking-tight text-neutral-900 dark:text-white">
                  {project.title}
                </h2>
                <button
                  type="button"
                  className="mt-8 inline-flex items-center justify-center text-neutral-900 transition-transform hover:translate-x-0.5 hover:-translate-y-0.5 dark:text-white"
                  aria-label={`Open project ${project.title}`}
                >
                  <ArrowUpRight size={40} strokeWidth={1.8} />
                </button>
              </div>

              <div className="aspect-[4/3] w-full rounded-sm border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-800 dark:bg-neutral-800/70">
                <div className="flex h-full items-center justify-center rounded-sm border border-dashed border-neutral-300 px-4 text-center text-xs font-medium uppercase tracking-[0.12em] text-neutral-500 dark:border-neutral-600 dark:text-neutral-400">
                  {project.imageLabel}
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
