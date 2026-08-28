const Field = ({ label, children, className = "" }) => (
    <label className={`block ${className}`}>
        <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            {label}
        </span>

        {children}
    </label>
);

const CodeInfo = ({
    language,
    setLanguage,
    techType,
    setTechType,
    description,
    setDescription
}) => (

    <section className="border-b border-slate-200/80 bg-white dark:border-white/10 dark:bg-[#12161d]">

        <div className="mx-auto max-w-[1380px] px-5 py-6 sm:px-8 lg:px-12 lg:py-7">

            <div className="mb-5 flex items-end justify-between gap-4">

                <div>
                    <p className="mb-1 text-xs font-medium text-blue-600 dark:text-blue-400">
                        New code review
                    </p>

                    <h1 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-[28px]">
                        Review your code
                    </h1>
                </div>

                <span className="hidden items-center gap-1.5 text-xs text-slate-400 sm:flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Draft saved
                </span>

            </div>


            <div className="grid gap-4 md:grid-cols-[180px_220px_1fr]">

                {/* Language */}

                <Field label="Language">

                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="form-control"
                    >
                        <option>JavaScript</option>
                        <option>TypeScript</option>
                        <option>Python</option>
                        <option>Java</option>
                    </select>

                </Field>


                {/* Framework / Technology */}

                <Field label="Framework">

                    <select
                        value={techType}
                        onChange={(e) => setTechType(e.target.value)}
                        className="form-control"
                    >
                        <option>React</option>
                        <option>Node.js</option>
                        <option>Next.js</option>
                        <option>Express</option>
                    </select>

                </Field>


                {/* Description */}

                <Field label="What does this code do?">

                    <input
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe what your code does..."
                    />

                </Field>

            </div>

        </div>

    </section>
);

export default CodeInfo;