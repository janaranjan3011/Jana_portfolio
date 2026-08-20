import ContactForm from '../components/ContactForm'
import { FiMapPin, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

const info = [
  { icon: FiMail, label: 'Email', value: 'janaranjan2000@gmail.com', link: 'mailto:janaranjan2000@gmail.com' },
  { icon: FiMapPin, label: 'Location', value: 'Chennai, India', link: '#' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/janaranjan', link: 'https://www.linkedin.com/in/janaranjan-shanmuga-gandhi/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0qvjiiqXRhKfJuw9SIh02A%3D%3D' },
  { icon: FiGithub, label: 'GitHub', value: 'github.com/janaranjan', link: 'https://github.com/janaranjan' },
]

export default function Contact() {
  return (
    <main className="pb-20">
      <section className="mx-auto max-w-7xl px-5 pt-20 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.7fr]">
          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Contact</p>
            <h1 className="neon-text mt-4 text-4xl font-semibold text-white">Let’s build the next digital experience together</h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              Reach out for project collaboration, full stack development opportunities, or a recruiter conversation. I respond quickly to serious inquiries with practical planning.
            </p>
            <div className="mt-10 grid gap-4">
              {info.map((item) => {
                const Icon = item.icon
                return (
                  <a key={item.label} href={item.link} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-3xl border border-slate-800/70 bg-slate-900/80 px-5 py-4 text-slate-300 transition hover:border-cyan-400/30 hover:bg-slate-900/90">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">{item.label}</p>
                      <p className="mt-1 text-sm text-slate-200">{item.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  )
}
