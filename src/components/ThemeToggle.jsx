import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../context/themeStore'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      aria-label="Toggle theme"
      type="button"
      onClick={toggleTheme}
      className="group inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/30 bg-slate-100 text-slate-900 shadow-[0_0_14px_rgba(0,255,255,0.12)] transition hover:border-cyan-400/60 hover:text-cyan-700 hover:shadow-[0_0_20px_rgba(255,0,255,0.16)] focus:outline-none focus:ring-2 focus:ring-cyan-500/30 dark:border-cyan-400/20 dark:bg-slate-900/80 dark:text-slate-100"
    >
      {theme === 'dark' ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
    </button>
  )
}
