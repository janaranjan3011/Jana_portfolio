import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiStar } from 'react-icons/fi'
import heroImage from '../assets/image.jpg'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-20 md:pt-28" id="top">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.2),transparent_35%),radial-gradient(circle_at_20%_20%,rgba(255,0,255,0.18),transparent_25%),linear-gradient(180deg,#020617_0%,#03010f_60%,#050112_100%)]" />
      <div className="absolute inset-0 opacity-60">
        <div className="stars absolute left-10 top-20 h-2 w-2 rounded-full bg-white/80 blur-sm" />
        <div className="stars absolute left-1/2 top-24 h-2 w-2 rounded-full bg-white/70 blur-sm" />
        <div className="stars absolute right-16 top-44 h-2 w-2 rounded-full bg-white/80 blur-sm" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-5 md:px-8 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200 shadow-[0_0_14px_rgba(0,255,255,0.14)] backdrop-blur-sm">
            <FiStar className="h-4 w-4 text-cyan-300" />
            Full Stack .NET Developer focused on enterprise web apps
          </span>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-3000/90">hello, I'm</p>
            <h1 className="neon-text text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Janaranjan S
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
              I build scalable .NET full stack applications with modern React interfaces, clean architecture, and immersive cosmic UIs that deliver strong recruiter-first clarity.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="/JANARANJAN_S_Resume_2026-04-15 (1).pdf"
              download
              className="inline-flex items-center justify-center rounded-2xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_22px_rgba(0,255,255,0.24)] transition hover:bg-cyan-400 hover:shadow-[0_0_26px_rgba(255,0,255,0.24)]"
            >
              <FiDownload className="mr-2 h-4 w-4" /> Download Resume
            </a>
            {/* <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-cyan-400/20 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 shadow-[0_0_14px_rgba(255,0,255,0.1)] transition hover:border-cyan-400/50 hover:text-cyan-200 hover:shadow-[0_0_20px_rgba(0,255,255,0.16)]"
            >
              Contact Me
            </Link> */}
          </div>

          <div className="grid grid-cols-[auto_auto_auto] gap-3 text-slate-300">
            <a href="https://www.linkedin.com/in/janaranjan-shanmuga-gandhi/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0qvjiiqXRhKfJuw9SIh02A%3D%3D" target="_blank" rel="noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-slate-700/60 bg-slate-900/70 text-cyan-300 transition hover:bg-cyan-500/10">
              <FiLinkedin className="h-5 w-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-cyan-400/20 bg-slate-900/70 text-cyan-300 shadow-[0_0_12px_rgba(0,255,255,0.08)] transition hover:bg-cyan-500/10 hover:shadow-[0_0_16px_rgba(255,0,255,0.16)]">
              <FiGithub className="h-5 w-5" />
            </a>
            <a href="mailto:janaranjan2000@gmail.com" className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-cyan-400/20 bg-slate-900/70 text-cyan-300 shadow-[0_0_12px_rgba(0,255,255,0.08)] transition hover:bg-cyan-500/10 hover:shadow-[0_0_16px_rgba(255,0,255,0.16)]">
              <FiMail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mx-auto flex w-full max-w-lg flex-col gap-6 rounded-[32px] border border-cyan-400/20 bg-white/85 p-6 shadow-[0_0_28px_rgba(0,255,255,0.08)] backdrop-blur-xl dark:border-cyan-400/20 dark:bg-slate-950/80 dark:shadow-[0_0_28px_rgba(255,0,255,0.12)]"
        >
          <div className="absolute -right-8 top-6 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl" />
          <img src={heroImage} alt="Hero portrait" className="mx-auto h-full w-full rounded-[30px] object-cover" />
      

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: 'Years Experience', value: 'Fresher' },
              { label: 'Projects Delivered', value: '3' },
              { label: 'Certifications', value: '4' },
              { label: 'Active Clients', value: '2' },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-cyan-400/20 bg-slate-100/90 p-5 text-slate-900 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_16px_rgba(0,255,255,0.12)] dark:border-cyan-400/20 dark:bg-slate-900/70 dark:text-white">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/90">{item.label}</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
