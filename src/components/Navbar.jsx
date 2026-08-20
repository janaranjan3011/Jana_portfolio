import { useEffect, useState } from 'react'
import { FiMenu, FiX, FiStar } from 'react-icons/fi'

const links = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-section-id]'))

    if (!sections.length) return undefined

    const updateActiveSection = () => {
      const offset = window.innerHeight * 0.22 + window.scrollY
      let currentId = 'home'

      sections.forEach((section) => {
        const top = section.offsetTop
        if (offset >= top) {
          currentId = section.getAttribute('data-section-id')
        }
      })

      setActiveSection(currentId)
    }

    updateActiveSection()

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.getAttribute('data-section-id'))
        }
      },
      {
        rootMargin: '-25% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.5],
      },
    )

    sections.forEach((section) => observer.observe(section))

    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  const handleScroll = (id) => {
    const target = document.getElementById(id)
    if (!target) return

    const offset = window.innerWidth < 768 ? 84 : 96
    const top = target.getBoundingClientRect().top + window.scrollY - offset

    window.scrollTo({ top, behavior: 'smooth' })
    setActiveSection(id)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-500/10 bg-slate-950/80 backdrop-blur-xl dark:border-slate-700/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" onClick={(event) => { event.preventDefault(); handleScroll('home') }} className="flex items-center gap-3 text-slate-100">
          <span className="flex h-11 w-11 items-center justify-center rounded-3xl border border-cyan-400/30 bg-cyan-500/15 text-cyan-300 shadow-[0_0_20px_rgba(0,255,255,0.18)] ring-1 ring-cyan-300/20">
            <FiStar className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] uppercase text-cyan-300/90">Janaranjan S</p>
            <p className="text-xs text-slate-400">.NET Full Stack Developer</p>
          </div>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(event) => {
                  event.preventDefault()
                  handleScroll(link.id)
                }}
                className={`rounded-2xl px-4 py-2 text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-300/30 shadow-[0_0_18px_rgba(0,255,255,0.22)]'
                    : 'text-slate-300 hover:text-cyan-200 hover:shadow-[0_0_12px_rgba(255,0,255,0.12)]'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-500/10 bg-slate-900/80 text-slate-100 shadow-lg shadow-slate-950/20 transition hover:border-cyan-400/40"
          >
            {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-500/10 bg-slate-950/95 px-5 py-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(event) => {
                    event.preventDefault()
                    handleScroll(link.id)
                  }}
                  className={`rounded-2xl px-4 py-3 text-sm transition ${
                    isActive ? 'bg-cyan-500/15 text-cyan-300 shadow-[0_0_14px_rgba(0,255,255,0.16)]' : 'text-slate-300 hover:text-cyan-200 hover:shadow-[0_0_10px_rgba(255,0,255,0.12)]'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
