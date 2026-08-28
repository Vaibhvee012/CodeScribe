const Hero = () => (
  <section className="mx-auto max-w-6xl px-5 pb-16 pt-20 text-center lg:px-8 lg:pb-20 lg:pt-28">
    <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:border-blue-900/70 dark:bg-blue-950/30 dark:text-blue-300">
      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> AI code review, built for teams
    </div>
    <h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
      Code deserves a<br />
      <span className="text-blue-600">second opinion.</span>
    </h1>
    <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-500 dark:text-slate-400 sm:text-lg">
      CodeScribe reviews every line for bugs, security risks, performance problems, and quality issues—before they reach production.
    </p>
    <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
      <a href="#review" className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">
        Start reviewing free <span className="ml-2">↗</span>
      </a>
      <a href="#how-it-works" className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
        See how it works <span className="ml-2">↓</span>
      </a>
    </div>
  </section>
);

export default Hero;