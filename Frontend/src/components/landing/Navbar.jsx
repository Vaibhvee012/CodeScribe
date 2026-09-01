import { useState } from "react";
import { Link } from "react-router-dom";
import CodeScribeLogo from "../CodeScribeLogo";

const Navbar = ({ darkMode, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f7f8fa]/90 backdrop-blur-md dark:border-white/10 dark:bg-[#0f1115]/90">
      <nav className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-5 lg:px-8 lg:py-0">

        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-2">
          <CodeScribeLogo size={34} />
          <span className="text-xl font-bold">CodeScribe</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-sm text-slate-500 dark:text-slate-400 md:flex">
          <a
            href="#features"
            className="hover:text-blue-600"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="hover:text-blue-600">
            How It Works
          </a>

          <a
            href="#about"
            className="hover:text-blue-600"
          >
            About
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Theme */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-500 hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:text-slate-300"
          >
            {darkMode ? "☼" : "☾"}
          </button>

          {/* Login */}
          <Link
            to="/login"
            className="hidden px-3 py-2 text-sm text-slate-500 hover:text-blue-600 sm:block dark:text-slate-400"
          >
            Log in
          </Link>

          {/* Register */}
          <Link
            to="/register"
            className="rounded-lg bg-blue-600 px-3 py-2.5 text-xs font-semibold text-white hover:bg-blue-700 sm:px-4 sm:text-sm"
          >
            Register
          </Link>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-lg text-slate-500 md:hidden dark:border-white/10 dark:text-slate-300"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="order-3 flex w-full flex-col gap-1 border-t border-slate-200 pt-3 text-sm text-slate-600 dark:border-white/10 dark:text-slate-300 md:hidden">

            <a
              href="#features"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 hover:bg-blue-50 dark:hover:bg-white/5"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 hover:bg-blue-50 dark:hover:bg-white/5"
            >
              How It Works
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 hover:bg-blue-50 dark:hover:bg-white/5"
            >
              About
            </a>

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 hover:bg-blue-50 dark:hover:bg-white/5"
            >
              Log in
            </Link>

            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 hover:bg-blue-50 dark:hover:bg-white/5"
            >
              Register
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;