
const ChangesMade = ({ changes }) => (

    <section className="panel p-5 sm:p-6">

        <div className="mb-5 flex items-center justify-between">

            <div>
                <p className="eyebrow">
                    Review notes
                </p>

                <h2 className="mt-1 text-lg font-semibold text-slate-950 dark:text-white">
                    What changed & why
                </h2>
            </div>

            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                {changes?.length ?? 0} improvements
            </span>

        </div>


        {changes?.length > 0 ? (

            <div className="space-y-5">

                {changes.map((change) => (

                    <div
                        key={change.type}
                        className="flex gap-3"
                    >

                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-500" />

                        <div>

                            <div className="flex flex-wrap items-center gap-2">

                                <h3 className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                                    {change.title}
                                </h3>

                                <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                                    {change.type}
                                </span>

                            </div>

                            <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                                {change.text}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        ) : (

            <div className="flex min-h-[150px] items-center justify-center text-center text-sm text-slate-400">
                Submit your code to see the review changes.
            </div>

        )}

    </section>

);

export default ChangesMade;