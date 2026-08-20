import { motion } from 'framer-motion'

export default function CertificationCard({ certification, onView }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/20 transition"
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/90">{certification.organization}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{certification.name}</h3>
        </div>
        <span className="rounded-2xl bg-slate-800/90 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
          {certification.date}
        </span>
      </div>
      <p className="mb-6 text-sm leading-7 text-slate-400">{certification.description}</p>
      {/* <button
        type="button"
        onClick={() => onView(certification)}
        className="inline-flex items-center rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
      >
        View Certificate
      </button> */}
    </motion.article>
  )
}
