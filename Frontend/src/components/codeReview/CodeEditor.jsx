const originalCode = [
  <><span className="syntax-keyword">function</span> <span className="syntax-function">getUserProfile</span>(id) {'{'}</>,
  <><span className="syntax-keyword">const</span> user = <span className="syntax-object">db.users</span>.find(id);</>,
  <>  <span className="syntax-keyword">return</span> {'{'}{' '}</>,
  <>    name: user.profile.name,</>,
  <>    email: user.email,</>,
  <>  {'}'};</>,
  <>{'}'}</>,
]

const CodeEditor = ({ code, setCode }) => {

    const lineCount = code ? code.split("\n").length : 1;

    return (
        <section className="panel overflow-hidden">

            {/* Header */}

            <div className="panel-header">

                <div className="flex items-center gap-2">
                    <span className="status-dot bg-rose-400" />
                    <span className="status-dot bg-amber-400" />
                    <span className="status-dot bg-emerald-400" />
                </div>

                <span className="ml-3 truncate font-mono text-[11px] text-slate-400">
                    profile.js
                </span>

                <span className="ml-auto rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-500 dark:bg-white/5 dark:text-slate-400">
                    Submitted
                </span>

            </div>


            {/* Code Editor */}

            <div className="code-surface overflow-auto">

                <div className="flex min-h-[350px] min-w-max">

                    {/* Line Numbers */}

                    <div className="select-none border-r border-slate-200/80 px-4 py-4 text-right font-mono text-sm leading-6 text-slate-400 dark:border-white/10 dark:text-slate-600">

                        {Array.from(
                            { length: lineCount },
                            (_, index) => (
                                <div key={index}>
                                    {index + 1}
                                </div>
                            )
                        )}

                    </div>


                    {/* Code Input */}

                    <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Paste or write your code here..."
                        spellCheck="false"
                        className="min-h-[350px] flex-1 resize-none border-0 bg-transparent px-4 py-4 font-mono text-sm leading-6 text-slate-800 outline-none placeholder:text-slate-400 dark:text-slate-200"
                    />

                </div>

            </div>

        </section>
    );
};

export default CodeEditor;