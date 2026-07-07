export default function Home() {
  const projects = [
    {
      name: 'Project One',
      description: 'A short description of what this project does and why it matters.',
      link: '#',
    },
    {
      name: 'Project Two',
      description: 'A short description of what this project does and why it matters.',
      link: '#',
    },
    {
      name: 'Project Three',
      description: 'A short description of what this project does and why it matters.',
      link: '#',
    },
  ];

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <header className="mb-16">
        <h1 className="text-3xl font-semibold tracking-tight">Your Name</h1>
        <p className="mt-2 text-neutral-600">
          Short one-line description of what you do.
        </p>
      </header>

      <section>
        <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500 mb-6">
          Projects
        </h2>
        <ul className="space-y-8">
          {projects.map((project) => (
            <li key={project.name}>
              <a
                href={project.link}
                className="group block"
              >
                <h3 className="text-lg font-medium group-hover:underline">
                  {project.name}
                </h3>
                <p className="mt-1 text-neutral-600">{project.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
