const Navbar = ({ darkMode, onToggleTheme }) => (
  <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f7f8fa]/90 backdrop-blur-md dark:border-white/10 dark:bg-[#0f1115]/90">
    <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
      <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight">
        <span className="grid h-7 w-7 place-items-center rounded-md bg-blue-600 text-sm text-white">⌁</span>
        CodeScribe
      </a>
      <div className="hidden items-center gap-8 text-sm text-slate-500 dark:text-slate-400 md:flex">
        <a href="#features" className="hover:text-blue-600">Features</a>
        <a href="#how-it-works" className="hover:text-blue-600">How It Works</a>
        <a href="#about" className="hover:text-blue-600">About</a>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleTheme}
          aria-label="Toggle color theme"
          className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-500 hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:text-slate-300"
        >
          {darkMode ? '☼' : '☾'}
        </button>
        <a href="#footer" className="hidden px-3 py-2 text-sm text-slate-500 hover:text-blue-600 sm:block dark:text-slate-400">
          Log in
        </a>
        <a href="#review" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
          Start reviewing <span className="ml-1">↗</span>
        </a>
      </div>
    </nav>
  </header>
);

export default Navbar;