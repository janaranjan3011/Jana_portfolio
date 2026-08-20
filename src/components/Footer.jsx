import { FiArrowUpRight, FiGithub, FiMail, FiMapPin } from 'react-icons/fi'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
]

export default function Footer() {
  const handleScroll = (event, id) => {
    event.preventDefault()

    const target = document.getElementById(id)
    if (!target) return

    const offset = window.innerWidth < 768 ? 84 : 96
    const top = target.getBoundingClientRect().top + window.scrollY - offset

    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-cyan-400/20 bg-slate-950/70 py-10 text-slate-300 shadow-[0_0_20px_rgba(255,0,255,0.08)] backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3 md:px-8">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-cyan-200">Janaranjan S</p>
          <p className="max-w-sm text-sm leading-6 text-slate-400">
            Full Stack Developer passionate about building scalable and responsive web applications.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Quick links</p>
          <div className="flex flex-col gap-2 text-sm text-slate-400">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleScroll(event, link.href.replace('#', ''))}
                className="transition hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Connect</p>
          <div className="space-y-3 text-slate-400">
            <div className="flex items-center gap-3">
              <FiMail className="h-4 w-4 text-cyan-300" />
              <a href="mailto:janaranjan2000@gmail.com">janaranjan2000@gmail.com</a>
            </div>
            <div className="flex items-center gap-3">
              <FiMapPin className="h-4 w-4 text-cyan-300" />
              <span>Chennai, India</span>
            </div>
            <div className="flex items-center gap-3">
              <FiGithub className="h-4 w-4 text-cyan-300" />
              <a href="https://github.com/janaranjan" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl items-center justify-between px-5 text-sm text-slate-500 md:px-8">
        <p>© {new Date().getFullYear()} Janaranjan S. All rights reserved.</p>
        <a href="#top" className="inline-flex items-center gap-1 text-cyan-300 transition hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">
          Back to top <FiArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </footer>
  )
}
