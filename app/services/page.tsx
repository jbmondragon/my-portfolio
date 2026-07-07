export default function ServicesPage() {
  const specialties = [
    {
      title: 'Product Analytics',
      description:
        'I define business questions, map them to measurable KPIs, and track interaction funnels and feature adoption.',
      proof: 'Sticker Customizer Dashboard',
      tieIn: 'Sticker Customizer Dashboard',
    },
    {
      title: 'Dashboard Development',
      description:
        'I build decision-focused dashboards with trend, comparison, and anomaly views for non-technical stakeholders.',
      proof: '5 analytics projects deployed across product, HR, and finance',
      tieIn: 'Accounting Dashboard, BubbleLink Analytics',
    },
    {
      title: 'Reporting Automation and ETL Pipelines',
      description:
        'I automate spreadsheet/API data flows into structured marts and recurring reports.',
      proof: '11 automated recurring reports',
      tieIn: 'HR and Marketing Reporting Automation',
    },
    {
      title: 'Data Modeling and Data Quality Management',
      description:
        'I design clean schemas, normalize records, and improve retrieval/report readiness.',
      proof: '192 alumni records standardized and managed',
      tieIn: 'Manage-Me Alumni System',
    },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10 md:py-16">
      <div className="rounded-xl border border-neutral-200/80 bg-white/70 p-6 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/60 md:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">Services</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">My Specialties</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          Focused services built around analytics clarity, reporting reliability, and practical business decisions.
        </p>

        <section className="mt-8 border-t border-neutral-200 dark:border-neutral-800">
          {specialties.map((item) => (
            <article
              key={item.title}
              className="grid gap-5 border-b border-neutral-200 py-9 dark:border-neutral-800 md:grid-cols-[1fr_1.3fr_auto] md:items-start md:gap-8"
            >
              <h2 className="text-xl font-semibold leading-snug tracking-tight text-neutral-900 dark:text-white md:text-[1.55rem]">
                <span className="mr-3 align-middle text-base">•</span>
                {item.title}
              </h2>

              <div className="space-y-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                <p>{item.description}</p>

                <div className="space-y-1.5 text-xs">
                  <p>
                    <span className="mr-2 uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">Proof</span>
                    {item.proof}
                  </p>
                  <p>
                    <span className="mr-2 uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">Project</span>
                    {item.tieIn}
                  </p>
                </div>
              </div>

              <div
                className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 text-xl font-light text-neutral-700 dark:border-neutral-700 dark:text-neutral-300"
                aria-hidden="true"
              >
                +
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
