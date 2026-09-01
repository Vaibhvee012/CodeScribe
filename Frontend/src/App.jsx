import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CodeReview from './pages/CodeReview'
import Login from './pages/Login'
import Register from './pages/Register'
import Landing from "./pages/Landing";
import ProtectedRoute from "./components/ProtectedRoute";
import ReviewHistory from "./pages/ReviewHistory";
import ReviewHistoryDetail from "./pages/ReviewHistoryDetail";
import Profile from "./pages/Profile";
function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('codescribe-theme')
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    localStorage.setItem('codescribe-theme', darkMode ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing darkMode={darkMode} onToggleTheme={() => setDarkMode((current) => !current)}/>} />
        <Route path="/login" element={<Login darkMode={darkMode} onToggleTheme={() => setDarkMode((current) => !current)} />} />
        <Route path="/register" element={<Register darkMode={darkMode} onToggleTheme={() => setDarkMode((current) => !current)} />} />
        <Route path="/code-review" element={<ProtectedRoute><CodeReview darkMode={darkMode} onToggleTheme={() =>setDarkMode((current) => !current)}/></ProtectedRoute>}/>
        <Route path="/history" element={ <ProtectedRoute> <ReviewHistory darkMode={darkMode} onToggleTheme={() =>setDarkMode((current) => !current) }/> </ProtectedRoute>}/>
        <Route path="/history/:reviewId" element={<ProtectedRoute><ReviewHistoryDetail darkMode={darkMode} onToggleTheme={() => setDarkMode((current) => !current)} /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile darkMode={darkMode} onToggleTheme={() => setDarkMode((current) => !current)} /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App