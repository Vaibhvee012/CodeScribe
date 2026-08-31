import { useState } from "react";

const RecommendedCode = ({ recommendedCode }) => {

    const [copied, setCopied] = useState(false);

    const copyCode = async () => {

        if (!recommendedCode?.code) return;

        await navigator.clipboard.writeText(recommendedCode.code);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1800);
    };

    return (
        <section className="panel overflow-hidden">
            <div className="panel-header">
                <div className="flex items-center gap-2">
                    <span className="status-dot bg-blue-500" />
                    <span className="ml-1 truncate font-mono text-[11px] text-slate-400">
                        profile.reviewed.js
                    </span>
                </div>
                <button
                    onClick={copyCode}
                    disabled={!recommendedCode?.code}
                    className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1.5 text-[10px] font-semibold text-blue-700 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300"
                >
                    {copied ? "Copied!" : "Copy code"}
                    <span aria-hidden="true">
                        {copied ? "✓" : "⌘"}
                    </span>
                </button>
            </div>


            <div className="code-surface overflow-auto bg-[#f8fbff] dark:bg-[#111923]">
                {recommendedCode ? (
                    <pre className="min-h-[350px] whitespace-pre-wrap px-5 py-4 font-mono text-sm leading-6 text-slate-800 dark:text-slate-200">
                        {recommendedCode.code}
                    </pre>
                ) : (
                    <div className="grid min-h-[350px] place-items-center px-5 text-center text-sm text-slate-400">
                        Submit your code to see the AI recommendation.
                    </div>

                )}

                {recommendedCode && (
                    <div className="mx-5 mb-5 flex items-start gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2.5 text-[11px] leading-5 text-blue-800 dark:border-blue-500/20 dark:bg-blue-500/5 dark:text-blue-200">
                        <span className="mt-0.5">
                            ✦
                        </span>
                        <span>
                            {recommendedCode.description}
                        </span>
                    </div>
                )}
            </div>
        </section>
    );
};

export default RecommendedCode;