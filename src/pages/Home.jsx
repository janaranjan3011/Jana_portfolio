import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import AboutPage from './About'
import SkillsPage from './Skills'
import EducationPage from './Education'
import CertificationsPage from './Certifications'
import ContactPage from './Contact'
import ProjectsPage from './Projects'

export default function Home() {
  return (
    <main id="top" className="relative overflow-hidden">
      <div id="home" data-section-id="home" className="scroll-mt-24">
        <Hero />

        <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">Introduction</p>
              <h2 className="neon-text mt-4 text-3xl font-semibold text-white">Building polished digital systems for real business outcomes</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                As a .NET Full Stack Developer, I combine enterprise-grade backend architecture with modern React interfaces and clean UI design. My approach is focused on performance, scalability, accessibility and delivering strong visual trust for the clients.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                  <p className="text-sm text-cyan-300">Learning Journey</p>
                  <p className="mt-3 text-slate-300">"Actively building skills in .NET, ReactJS, and modern UI design through academic projects and personal portfolio work. Focused on applying concepts to real‑world scenarios and growing into a professional developer role."</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                  <p className="text-sm text-cyan-300">Growth Mindset</p>
                  <p className="mt-3 text-slate-300">"Eager to contribute to collaborative projects, adapt to new technologies, and continuously improve coding practices. Dedicated to writing clean, maintainable code and learning industry standards."</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="grid gap-6"
            >
              <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Quick Stats</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    { label: 'Experience', value: 'Fresher' },
                    { label: 'Projects', value: '5' },
                    { label: 'Certifications', value: '4' },
                    { label: 'Clients', value: '3' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-3xl bg-slate-900/80 p-5 text-slate-200">
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <div id="about" data-section-id="about" className="scroll-mt-24">
        <AboutPage />
      </div>

      <div id="skills" data-section-id="skills" className="scroll-mt-24">
        <SkillsPage />
      </div>

      <div id="education" data-section-id="education" className="scroll-mt-24">
        <EducationPage />
      </div>

      <div id="projects" data-section-id="projects" className="scroll-mt-24">
        <ProjectsPage />
      </div>

      <div id="certifications" data-section-id="certifications" className="scroll-mt-24">
        <CertificationsPage />
      </div>

      <div id="contact" data-section-id="contact" className="scroll-mt-24">
        <ContactPage />
      </div>

      <Footer />
    </main>
  )
}
