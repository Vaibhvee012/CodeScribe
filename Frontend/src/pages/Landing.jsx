import Navbar from "../components/landing/Navbar.jsx";
import Hero from "../components/landing/Hero.jsx";
import ProductPreview from "../components/landing/ProductPreview.jsx";
import Features from "../components/landing/Features.jsx";
import BeforeAfter from "../components/landing/BeforeAfter.jsx";
import HowItWorks from "../components/landing/HowItWorks.jsx";
import CTA from "../components/landing/CTA.jsx";
import Footer from "../components/landing/Footer.jsx";
const Landing = ({ darkMode, onToggleTheme }) => <div className="min-h-screen overflow-hidden bg-[#dbdcdd] text-slate-950 transition-colors dark:bg-[#101112] dark:text-white">
  <Navbar darkMode={darkMode} onToggleTheme={onToggleTheme} />
  <main>
    <Hero />
    <ProductPreview />
    <Features />
    <BeforeAfter />
    <HowItWorks />
    <CTA />.jsx
    </main>
  <Footer />
</div>

export default Landing
