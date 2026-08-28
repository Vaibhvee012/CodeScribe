import useCodeReview from "../hooks/useCodeReview";

import CodeReviewNavbar from "../components/codeReview/CodeReviewNavbar";
import CodeInfo from "../components/codeReview/CodeInfo";
import CodeEditor from "../components/codeReview/CodeEditor";
import RecommendedCode from "../components/codeReview/RecommendedCode";
import ReviewScore from "../components/codeReview/ReviewScore";
import ChangesMade from "../components/codeReview/ChangesMade";

const CodeReview = ({ darkMode, onToggleTheme }) => {

    const {
        code,
        setCode,

        language,
        setLanguage,

        techType,
        setTechType,

        description,
        setDescription,

        loading,
        reviewResult,
        error,

        handleReview
    } = useCodeReview();


    return (
        <div className="min-h-screen bg-[#f5f7fa] text-slate-950 transition-colors dark:bg-[#0c0f14] dark:text-white">

            <CodeReviewNavbar
                darkMode={darkMode}
                onToggleTheme={onToggleTheme}
            />

            <CodeInfo
                language={language}
                setLanguage={setLanguage}
                techType={techType}
                setTechType={setTechType}
                description={description}
                setDescription={setDescription}
            />

            <main className="mx-auto max-w-[1380px] px-5 py-7 sm:px-8 sm:py-9 lg:px-12 lg:py-10">

                <div className="mb-5 flex items-center justify-between">

                    <div>
                        <p className="eyebrow">
                            Code workspace
                        </p>

                        <h2 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                            Review comparison
                        </h2>
                    </div>

                    <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-semibold text-slate-500 dark:border-white/10 dark:bg-[#12161d] dark:text-slate-400">
                        {language} · {techType}
                    </span>

                </div>


                {/* Error message */}

                {error && (
                    <div className="mb-5 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600 dark:border-rose-500/20 dark:bg-rose-500/5 dark:text-rose-300">
                        {error}
                    </div>
                )}


                <div className="grid gap-5 xl:grid-cols-2">

                    <CodeEditor
                        code={code}
                        setCode={setCode}
                    />

                    <RecommendedCode
                        recommendedCode={reviewResult?.recommendedCode}
                    />

                </div>


                <div className="mt-5 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
    <ReviewScore
        metrics={reviewResult?.metrics}
        score={reviewResult?.score}
    />

    <ChangesMade
        changes={reviewResult?.changes}
    />
</div>


                {/* Review button */}

                <div className="mt-6 flex justify-end">

                    <button
                        onClick={handleReview}
                        disabled={loading}
                        className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading ? "Reviewing..." : "Review Code"}
                    </button>

                </div>

            </main>


            <footer className="border-t border-slate-200/80 py-5 text-center text-[11px] text-slate-400 dark:border-white/10">
                CodeScribe · AI-assisted code review
            </footer>

        </div>
    );
};

export default CodeReview;