import { useState } from 'react'
import CertificationCard from '../components/CertificationCard'

const certifications = [
  {
    name: 'Dot Net Fullstack Development',
    organization: 'SLA Institute',
    date: '2026',
    description: 'Comprehensive certification in full-stack development using .NET technologies.',
    // image: 'https://via.placeholder.com/720x420?text=Azure+Certification',
  },
  {
    name: ' HTML, CSS, and JavaScript for Beginners',
    organization: 'IBM Developer Skills Network',
    date: '2026',
    description: 'Comprehensive certification covering fundamentals of web development including HTML structure, CSS styling, and JavaScript programming.',
    // image: 'https://via.placeholder.com/720x420?text=Web+API+Certification',
  },
  {
    name: 'Graded Examinations in Spoken English (GESE)',
    organization: 'Trinity College London',
    date: '2014-2016',
    description: 'Completed Trinity College London GESE Grades 1-3 over three years during school.',
    // image: 'https://via.placeholder.com/720x420?text=React+Certification',
  },
]

export default function Certifications() {
  const [active, setActive] = useState(null)

  return (
    <main className="pb-20">
      <section className="mx-auto max-w-7xl px-5 pt-20 md:px-8">
        <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Certifications</p>
            <h1 className="neon-text text-4xl font-semibold text-white">Verified credentials for production-ready development</h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300">
              Trusted certifications from Microsoft, Pluralsight, and Coursera that support professional .NET and frontend expertise.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {certifications.map((cert) => (
              <CertificationCard key={cert.name} certification={cert} onView={setActive} />
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-5 backdrop-blur-xl">
          <div className="relative max-w-3xl rounded-[32px] border border-white/10 bg-slate-950/95 p-6 shadow-2xl shadow-slate-950/40">
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 rounded-full border border-slate-700/40 bg-slate-900/80 px-3 py-2 text-sm text-slate-200 transition hover:bg-cyan-500/15"
            >
              Close
            </button>
            <h2 className="text-3xl font-semibold text-white">{active.name}</h2>
            <p className="mt-2 text-sm text-slate-400">{active.organization} · {active.date}</p>
            <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70">
              <img src={active.image} alt={active.name} className="h-72 w-full object-cover" />
            </div>
            <p className="mt-5 text-slate-300">{active.description}</p>
          </div>
        </div>
      )}
    </main>
  )
}
