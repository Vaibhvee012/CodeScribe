const ProductPreview = () => {
  const code = [
    'function getUser(id) {',
    '  const user = db.users.find(id);',
    '  return user.profile.name;',
    '}'
  ];

  return (
    <section id="review" className="mx-auto max-w-6xl px-5 lg:px-8">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_70px_-35px_rgba(15,23,42,.3)] dark:border-white/10 dark:bg-[#171a21]">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 px-3 py-3 dark:border-white/10 sm:px-4">
          <div className="flex min-w-0 items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <span className="ml-2 truncate text-xs text-slate-400 sm:ml-3">user-service / profile.js</span>
          </div>
          <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600 dark:bg-blue-950/50 dark:text-blue-300">
            Reviewed just now
          </span>
        </div>
        <div className="grid lg:grid-cols-[1.08fr_.92fr]">
          <div className="min-w-0 border-b border-slate-200 bg-[#f8fafc] p-4 font-mono text-[11px] leading-7 dark:border-white/10 dark:bg-[#12151b] sm:min-h-[350px] sm:p-8 sm:text-xs sm:leading-8">
            <div className="mb-6 flex gap-4 overflow-hidden text-[11px] text-slate-400 sm:gap-5">
              <span className="border-b-2 border-blue-500 pb-2 text-slate-700 dark:text-slate-200">profile.js</span>
              <span>auth.js</span>
              <span>utils.js</span>
            </div>
            {code.map((line, i) => (
              <div
                key={line}
                className={
                  i === 2
                    ? 'rounded border-l-2 border-amber-400 bg-amber-50 px-3 text-amber-900 dark:bg-amber-950/30 dark:text-amber-200'
                    : 'text-slate-600 dark:text-slate-400'
                }
              >
                <span className="mr-3 inline-block w-3 text-right text-slate-300 dark:text-slate-600 sm:mr-6">
                  {i + 1}
                </span>
                <span className="break-all">{line}</span>
              </div>
            ))}
            <div className="mt-7 rounded-lg border border-blue-200 bg-blue-50/70 p-3 text-[11px] leading-5 text-blue-800 dark:border-blue-900/50 dark:bg-blue-950/20 dark:text-blue-200">
              ⌁ CodeScribe found a potential null reference on line 3.
            </div>
          </div>
          <div className="min-w-0 p-4 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.16em] text-slate-400">
                  Review score
                </p>
                <div className="mt-2 text-4xl font-semibold">
                  82<span className="text-xl text-slate-400">/100</span>
                </div>
              </div>
              <div className="grid h-16 w-16 place-items-center rounded-full border-4 border-blue-500 text-sm font-bold text-blue-600">
                B+
              </div>
            </div>
            <div className="my-7 h-px bg-slate-200 dark:bg-white/10" />
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.16em] text-slate-400">
              3 issues found
            </p>
            <div className="space-y-3">
              <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-900/50 dark:bg-red-950/20">
                <p className="text-xs font-semibold text-red-700 dark:text-red-300">
                  ● Bug · Null reference
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  `user` may be undefined when no record matches.
                </p>
              </div>
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-900/50 dark:bg-amber-950/20">
                <p className="text-xs font-semibold text-amber-700 dark:text-amber-300">
                  ▲ Quality · Missing validation
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Validate the id before querying the database.
                </p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-lg bg-blue-600 py-2.5 text-xs font-semibold text-white hover:bg-blue-700">
              View recommended fix <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;