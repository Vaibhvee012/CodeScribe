const BeforeAfter = () => (
  <section className="border-y border-slate-200 bg-white/60 py-24 dark:border-white/10 dark:bg-white/[.02]">
    <div className="mx-auto max-w-6xl px-5 lg:px-8">
      <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-blue-600">From review to refined</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Better code, made obvious.</h2>
        </div>
        <p className="max-w-xs text-sm leading-6 text-slate-500 dark:text-slate-400">
          Understand the problem. See the solution. Ship with confidence.
        </p>
      </div>
      <div className="grid overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 md:grid-cols-2">
        <div className="bg-[#f8fafc] p-6 dark:bg-[#12151b] sm:p-8">
          <div className="mb-7 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Before</span>
            <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-700 dark:bg-red-950/40 dark:text-red-300">
              Needs attention
            </span>
          </div>
          <pre className="font-mono text-xs leading-7 text-slate-500 dark:text-slate-400">
            {`const total = items.reduce(\n  (sum, item) => sum + item.price,\n  0\n);\n\ncheckout(total);`}
          </pre>
          <div className="mt-8 flex items-center gap-3">
            <span className="text-3xl font-semibold text-red-600">58</span>
            <span className="text-sm text-slate-400">/ 100<br />Review score</span>
          </div>
        </div>
        <div className="bg-blue-600 p-6 text-white sm:p-8">
          <div className="mb-7 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-100">After</span>
            <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold text-blue-50">
              Recommended
            </span>
          </div>
          <pre className="font-mono text-xs leading-7 text-blue-50">
            {`const total = items.reduce(\n  (sum, { price = 0 }) =>\n    sum + Math.max(0, price),\n  0\n);\n\nawait checkout({ total });`}
          </pre>
          <div className="mt-8 flex items-center gap-3">
            <span className="text-3xl font-semibold">96</span>
            <span className="text-sm text-blue-100">/ 100<br />Review score</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BeforeAfter;