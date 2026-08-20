const entries = [
  {
    degree: 'Bachelor of Engineering in Mechanical Engineering',
    institution: 'SSN College of Engineering, Chennai',
    year: '2018 - 2022',
    grade: 'CGPA 7.53',
    description: '"Built a strong foundation in analytical problem‑solving and design principles, developing transferable skills for software development."',
  },
  {
    degree: '.NET Full‑Stack Developer Course',
    institution: 'SLA Institute',
    year: 'OCT 2025 - MAR 2026',
    grade: 'Completed',
    description: '"Completed intensive training in C#, ASP.NET, SQL, ReactJS, and TailwindCSS, with hands‑on projects covering backend services, REST APIs, and responsive UI design."',
  },
]

export default function Education() {
  return (
    <main className="pb-20">
      <section className="mx-auto max-w-7xl px-5 pt-20 md:px-8">
        <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Education</p>
            <h1 className="neon-text text-4xl font-semibold text-white">Academic journey and milestones</h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300">
              A solid academic foundation sharpened by professional experience. These milestones reflect disciplined learning and a strong technical mindset.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {entries.map((item) => (
              <div key={item.year} className="group relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/10 transition hover:-translate-y-1">
                <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-cyan-500/20 blur-xl" />
                <div className="relative space-y-4 pl-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">{item.year}</p>
                  <h2 className="text-2xl font-semibold text-white">{item.degree}</h2>
                  <p className="text-sm text-slate-400">{item.institution}</p>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <span className="rounded-2xl bg-slate-800/90 px-4 py-2 text-sm text-slate-300">{item.grade}</span>
                    <p className="text-sm text-slate-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
