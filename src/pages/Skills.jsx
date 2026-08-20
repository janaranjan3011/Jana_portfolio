import SkillCard from '../components/SkillCard'

const categories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', level: '95%', levelValue: '95%' },
      { name: 'JavaScript', level: '92%', levelValue: '92%' },
      { name: 'TypeScript', level: '88%', levelValue: '88%' },
      { name: 'HTML5', level: '98%', levelValue: '98%' },
      { name: 'CSS3', level: '95%', levelValue: '95%' },
      { name: 'Tailwind CSS', level: '90%', levelValue: '90%' },
      { name: 'Bootstrap', level: '85%', levelValue: '85%' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'C#', level: '96%', levelValue: '96%' },
      { name: 'ASP.NET MVC', level: '90%', levelValue: '90%' },
      { name: 'ASP.NET Core', level: '94%', levelValue: '94%' },
      { name: 'ASP.NET Web API', level: '92%', levelValue: '92%' },
      { name: 'Entity Framework', level: '90%', levelValue: '90%' },
    ],
  },
  {
    title: 'Database',
    skills: [
      // { name: 'SQL Server', level: '95%', levelValue: '95%' },
      { name: 'MySQL', level: '95%', levelValue: '95%' },
    ],
  },
  {
    title: 'Tools & Practices',
    skills: [
      { name: 'Git / GitHub', level: '92%', levelValue: '92%' },
      { name: 'Visual Studio', level: '90%', levelValue: '90%' },
      { name: 'VS Code', level: '92%', levelValue: '92%' },
      { name: 'Postman', level: '88%', levelValue: '88%' },
      // { name: 'JWT Authentication', level: '90%', levelValue: '90%' },
      // { name: 'Responsive Design', level: '96%', levelValue: '96%' },
    ],
  },
]

export default function Skills() {
  return (
    <main className="pb-20">
      <section className="mx-auto max-w-7xl px-5 pt-20 md:px-8">
        <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Skills</p>
            <h1 className="neon-text text-4xl font-semibold text-white">Core competencies and development expertise</h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300">
              A robust stack rooted in .NET backend systems, modern React frontends, and database-driven solutions. These capabilities make every application performant, secure, and easy to evolve.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {categories.map((category) => (
              <SkillCard key={category.title} title={category.title} skills={category.skills} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
