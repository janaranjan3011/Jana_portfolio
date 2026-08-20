import { useEffect, useMemo } from 'react'
import { ThemeContext } from './themeStore'

export function ThemeProvider({ children }) {
  const theme = 'dark'

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', theme)
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
    document.documentElement.style.colorScheme = 'dark'
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
