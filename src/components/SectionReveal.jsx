import { motion } from 'framer-motion'

export default function SectionReveal({ id, children, className = '' }) {
  return (
    <motion.section
      id={id}
      data-section={id}
      initial={{ opacity: 0, y: 38 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`scroll-mt-24 ${className}`}
    >
      {children}
    </motion.section>
  )
}
