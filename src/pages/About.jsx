import { motion } from 'framer-motion'

const timeline = [
  { year: '2024', title: 'Senior .NET Developer', subtitle: 'Leading full stack teams for enterprise applications', details: 'Guided architecture, APIs, and frontend delivery for customer-facing SaaS products.' },
  { year: '2022', title: 'Full Stack Consultant', subtitle: 'Delivered secure web ecosystems with React and ASP.NET Core', details: 'Built modular systems with authentication, reporting, and cloud readiness.' },
  { year: '2020', title: 'Software Engineer', subtitle: 'Developed web services and internal productivity tools', details: 'Implemented database solutions, UI workflows, and integration with SQL Server.' },
]

const strengths = ['Clean architecture', 'Performance optimization', 'Collaborative teamwork', 'Agile delivery', 'Problem solving']

export default function About() {
  return (
    <main className="relative overflow-hidden pb-20">
      <section className="mx-auto max-w-7xl px-5 pt-20 md:px-8">
        <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_0.7fr]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">About Me</p>
              <h1 className="neon-text text-4xl font-semibold text-white">Professional biography & career objective</h1>
              <p className="text-base leading-8 text-slate-300">
                I am a dedicated .NET Full Stack Developer with a strong foundation in C#, ASP.NET Core, React, and data-driven solutions. My career objective is to create enterprise-grade applications that feel intuitive, perform reliably under pressure, and align with strategic business goals.
              </p>
              <p className="text-base leading-8 text-slate-300">
                Passionate about software development, I enjoy turning complex requirements into beautiful user experiences, building secure APIs, and collaborating with product teams to deliver polished digital products.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-6 rounded-[28px] border border-white/10 bg-slate-900/80 p-6"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Expertise</p>
              <ul className="space-y-3 text-slate-300">
                {['C#', 'ASP.NET Core', 'React', 'Entity Framework', 'SQL Server', 'REST API'].map((skill) => (
                  <li key={skill} className="rounded-3xl border border-slate-800/70 bg-slate-950/70 px-4 py-3">{skill}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <section className="mx-auto max-w-7xl px-5 pt-16 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Strengths</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {strengths.map((item) => (
                <div key={item} className="rounded-3xl border border-slate-800/70 bg-slate-900/80 p-5 text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Career Timeline</p>
            <div className="mt-10 space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/10"
                >
                  <div className="absolute right-0 top-0 h-full w-1 rounded-full bg-cyan-500/20 blur-xl" />
                  <div className="relative">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm uppercase tracking-[0.24em] text-cyan-300/90">{item.year}</span>
                      <p className="text-sm text-slate-400">{item.subtitle}</p>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-slate-300 leading-7">{item.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </main>
  )
}
