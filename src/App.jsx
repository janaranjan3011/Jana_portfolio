import { BrowserRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import { ThemeProvider } from './context/ThemeContext'
import AppRoutes from './routes/AppRoutes'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 700)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white text-slate-950 transition-colors duration-500 selection:bg-cyan-400/60 selection:text-slate-950 dark:bg-slate-950 dark:text-slate-100">
          <ScrollProgress />

          {loading && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
              <div className="flex flex-col items-center gap-4">
                <div className="h-24 w-24 animate-pulse rounded-full bg-cyan-500/20 ring-8 ring-cyan-500/10" />
                <p className="text-lg font-medium">Preparing your portfolio experience…</p>
              </div>
            </div>
          )}

          <div className={`${loading ? 'pointer-events-none opacity-0' : 'opacity-100'} transition duration-500`}>
            <Navbar />
            <AppRoutes />
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
