import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductPreview from '../components/ProductPreview'
import Features from '../components/Features'
import BeforeAfter from '../components/BeforeAfter'
import HowItWorks from '../components/HowItWorks'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const Landing = ({ darkMode, onToggleTheme }) => <div className="min-h-screen overflow-hidden bg-[#dbdcdd] text-slate-950 transition-colors dark:bg-[#101112] dark:text-white">
  <Navbar darkMode={darkMode} onToggleTheme={onToggleTheme} />
  <main>
    <Hero />
    <ProductPreview />
    <Features />
    <BeforeAfter />
    <HowItWorks />
    <CTA />
    </main>
  <Footer />
</div>

export default Landing
