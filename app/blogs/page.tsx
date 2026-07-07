export default function BlogsPage() {
  const posts = [
    {
      date: '10 July, 2022',
      title: '12 unique example of portfolio websites',
      imageLabel: 'Replace with blog cover (post-1)',
    },
    {
      date: '10 July, 2022',
      title: '12 unique example of portfolio websites',
      imageLabel: 'Replace with blog cover (post-2)',
    },
    {
      date: '10 July, 2022',
      title: '12 unique example of portfolio websites',
      imageLabel: 'Replace with blog cover (post-3)',
    },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10 md:py-16">
      <div className="rounded-xl border border-neutral-200/80 bg-white/70 p-6 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/60 md:p-10">
        <p className="text-center text-sm font-medium italic text-neutral-500 dark:text-neutral-400">Blog</p>
        <h1 className="mt-2 text-center text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">READ MY BLOG</h1>

        <section className="mt-10 grid gap-8 md:grid-cols-3">
          {posts.map((post, index) => (
            <article key={`${post.title}-${index}`} className="group border-b border-neutral-200 pb-4 dark:border-neutral-800">
              <div className="aspect-[4/3] w-full rounded-sm border border-neutral-200 bg-neutral-100 p-3 dark:border-neutral-800 dark:bg-neutral-800/70">
                <div className="flex h-full items-center justify-center rounded-sm border border-dashed border-neutral-300 px-4 text-center text-xs font-medium uppercase tracking-[0.12em] text-neutral-500 dark:border-neutral-600 dark:text-neutral-400">
                  {post.imageLabel}
                </div>
              </div>

              <p className="mt-5 text-sm italic text-neutral-500 dark:text-neutral-400">{post.date}</p>
              <h2 className="mt-2 text-4xl font-semibold leading-tight tracking-tight text-neutral-900 transition-colors group-hover:text-neutral-700 dark:text-white dark:group-hover:text-neutral-200">
                {post.title}
              </h2>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
