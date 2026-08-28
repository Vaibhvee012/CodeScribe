import { useEffect, useState } from 'react'
import CodeReview from './pages/CodeReview'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('codescribe-theme')
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    localStorage.setItem('codescribe-theme', darkMode ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return <CodeReview darkMode={darkMode} onToggleTheme={() => setDarkMode((current) => !current)} />
}

export default App