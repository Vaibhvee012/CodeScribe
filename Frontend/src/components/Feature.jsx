const Feature = ({ icon, title, description }) => (
  <article className="rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 dark:border-white/10 dark:bg-[#171a21] dark:hover:border-blue-900">
    <div className="mb-6 grid h-10 w-10 place-items-center rounded-lg bg-blue-50 text-lg text-blue-600 dark:bg-blue-950/40">
      {icon}
    </div>
    <h3 className="font-semibold">{title}</h3>
    <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
      {description}
    </p>
  </article>
);

export default Feature;