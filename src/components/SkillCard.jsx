import { motion } from 'framer-motion'

export default function SkillCard({ title, skills }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group rounded-[28px] border border-slate-700/80 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20 transition"
    >
      <h3 className="mb-5 text-xl font-semibold text-white">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full rounded-full bg-cyan-400 transition" style={{ width: skill.levelValue }} />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
