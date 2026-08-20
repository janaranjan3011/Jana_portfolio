import React from 'react'

export default function ProjectsPage() {
  const projects = [
    { title: 'Bookverse', description: 'An E-commerce website for bookstore. Developed an online bookstore platform using ASP.NET Web API, React.js, and MySQL. Features include book catalog, search, and shopping cart with responsive design.', status: 'Live' },
    { title: 'Symptocare', description: 'Built a symptom analysis web application using ASP.NET MVC, Tailwind CSS, JavaScript, and MySQL. Integrated AI API to process symptoms and provide possible health condition suggestions with a responsive UI.', status: 'In progress' },
    { title: 'Secure Auth System', description: 'JWT authentication, role-based access, and REST API services.', status: 'Completed' },
  ]

  return (
    <main className="pb-20">
      <section className="mx-auto max-w-7xl px-5 pt-20 md:px-8">
        <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Projects</p>
            <h1 className="text-4xl font-semibold text-white">Featured work and digital product experience</h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300">
              A selection of practical projects that reflect full-stack delivery, modern UI implementation, and thoughtful user experience.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {projects.map((project) => (
              <div key={project.title} className="rounded-3xl border border-slate-800/70 bg-slate-900/80 p-6 transition hover:border-cyan-400/30">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="rounded-full bg-slate-800/90 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">{project.status}</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
