import { useEffect, useState } from 'react'
import Landing from './pages/Landing'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('codescribe-theme')
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    localStorage.setItem('codescribe-theme', darkMode ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return <Landing darkMode={darkMode} onToggleTheme={() => setDarkMode((current) => !current)} />
}

export default App
