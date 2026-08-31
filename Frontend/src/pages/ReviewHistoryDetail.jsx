import { Link, useLocation } from "react-router-dom";
import UserMenu from "../components/codeReview/UserMenu";

const ReviewHistoryDetail = ({ darkMode, onToggleTheme }) => {
    const location = useLocation();
    const review = location.state?.review;

    const formatDate = (date) => {
        if (!date) return "Unknown date";

        return new Date(date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };

    const getScoreClass = (score) => {
        if (score >= 90) {
            return "text-emerald-600 dark:text-emerald-400";
        }

        if (score >= 70) {
            return "text-blue-600 dark:text-blue-400";
        }

        return "text-amber-600 dark:text-amber-400";
    };

    const grade =
        review?.score >= 90
            ? "A−"
            : review?.score >= 80
                ? "B+"
                : review?.score >= 70
                    ? "B"
                    : review?.score >= 60
                        ? "C"
                        : review?.score
                            ? "D"
                            : "--";

    if (!review) {
        return (
            <div className="min-h-screen bg-[#f5f7fa] text-slate-950 transition-colors dark:bg-[#0c0f14] dark:text-white">

                <header className="border-b border-slate-200/80 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#101318]/90">
                    <nav className="mx-auto flex h-[72px] max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-12">

                        <Link
                            to="/code-review"
                            className="flex items-center gap-2.5 text-[17px] font-semibold tracking-tight text-slate-950 dark:text-white"
                        >
                            <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-blue-600 text-white">
                                C
                            </span>

                            CodeScribe
                        </Link>

                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                onClick={onToggleTheme}
                                aria-label="Toggle color theme"
                                className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:text-slate-300"
                            >
                                {darkMode ? "☼" : "☾"}
                            </button>

                            <UserMenu />
                        </div>

                    </nav>
                </header>

                <main className="mx-auto max-w-4xl px-5 py-10 sm:px-8">

                    <div className="rounded-xl border border-rose-200 bg-rose-50 p-6 dark:border-rose-500/20 dark:bg-rose-500/5">

                        <h1 className="text-lg font-semibold text-rose-700 dark:text-rose-300">
                            Review not found
                        </h1>

                        <p className="mt-2 text-sm text-rose-600 dark:text-rose-400">
                            This review could not be loaded. Please return to
                            your review history and try again.
                        </p>

                        <Link
                            to="/history"
                            className="mt-5 inline-flex rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                        >
                            Back to History
                        </Link>

                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f5f7fa] text-slate-950 transition-colors dark:bg-[#0c0f14] dark:text-white">

            {/* Header */}
            <header className="border-b border-slate-200/80 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#101318]/90">
                <nav className="mx-auto flex h-[72px] max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-12">

                    <Link
                        to="/code-review"
                        className="flex items-center gap-2.5 text-[17px] font-semibold tracking-tight text-slate-950 dark:text-white"
                    >
                        <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                            C
                        </span>

                        CodeScribe
                    </Link>

                    <div className="flex items-center gap-3">

                        {/* Theme */}
                        <button
                            type="button"
                            onClick={onToggleTheme}
                            aria-label="Toggle color theme"
                            className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-300"
                        >
                            {darkMode ? "☼" : "☾"}
                        </button>

                        {/* User menu */}
                        <UserMenu />

                    </div>

                </nav>
            </header>

            {/* Main */}
            <main className="mx-auto max-w-[1380px] px-5 py-8 sm:px-8 lg:px-12 lg:py-10">

                {/* Back */}
                <Link
                    to="/history"
                    className="inline-flex items-center text-sm font-medium text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-300"
                >
                    ← Back to Review History
                </Link>

                {/* Heading */}
                <div className="mt-6">

                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
                        Saved review
                    </p>

                    <h1 className="mt-2 max-w-4xl text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                        {review.description || "Code Review"}
                    </h1>

                    <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <span>{review.language}</span>
                        <span>·</span>
                        <span>{review.techType}</span>
                        <span>·</span>
                        <span>{formatDate(review.createdAt)}</span>
                    </div>

                </div>

                {/* Score + Metrics */}
                <section className="mt-7 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#12161d] sm:p-6">

                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                                Overall score
                            </p>

                            <p
                                className={`mt-2 text-4xl font-bold ${getScoreClass(
                                    review.score
                                )}`}
                            >
                                {review.score ?? "--"}

                                <span className="ml-1 text-lg font-normal text-slate-400">
                                    /100
                                </span>
                            </p>
                        </div>

                        <div className="grid h-[72px] w-[72px] place-items-center rounded-full border-[5px] border-blue-500 text-base font-bold text-blue-600 dark:text-blue-400">
                            {grade}
                        </div>

                    </div>

                    <div className="mt-6 grid gap-4 border-t border-slate-100 pt-5 dark:border-white/10 sm:grid-cols-3">

                        <div>
                            <p className="text-[10px] uppercase tracking-wide text-slate-400">
                                Performance
                            </p>

                            <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                                {review.metrics?.performance ?? "--"}
                            </p>
                        </div>

                        <div>
                            <p className="text-[10px] uppercase tracking-wide text-slate-400">
                                Security
                            </p>

                            <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                                {review.metrics?.security ?? "--"}
                            </p>
                        </div>

                        <div>
                            <p className="text-[10px] uppercase tracking-wide text-slate-400">
                                Readability
                            </p>

                            <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                                {review.metrics?.readability ?? "--"}
                            </p>
                        </div>

                    </div>

                </section>

                {/* Submitted code */}
                <section className="mt-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#12161d] sm:p-6">

                    <div className="mb-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">
                            Submitted code
                        </p>

                        <h2 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                            Original submission
                        </h2>
                    </div>

                    <pre className="overflow-x-auto rounded-xl border border-slate-200 bg-slate-950 p-5 text-sm leading-6 text-slate-100 dark:border-white/10">
                        <code>{review.code}</code>
                    </pre>

                </section>

                {/* Recommended code */}
                <section className="mt-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#12161d] sm:p-6">

                    <div className="mb-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">
                            Recommended code
                        </p>

                        <h2 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                            AI-improved version
                        </h2>

                        {review.recommendedCode?.description && (
                            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                {review.recommendedCode.description}
                            </p>
                        )}
                    </div>

                    <pre className="overflow-x-auto rounded-xl border border-slate-200 bg-slate-950 p-5 text-sm leading-6 text-slate-100 dark:border-white/10">
                        <code>
                            {review.recommendedCode?.code ||
                                "No recommended code available."}
                        </code>
                    </pre>

                </section>

                {/* Changes */}
                <section className="mt-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#12161d] sm:p-6">

                    <div className="mb-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">
                            What changed & why
                        </p>

                        <h2 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                            Review notes
                        </h2>
                    </div>

                    <div className="space-y-4">

                        {review.changes?.length > 0 ? (
                            review.changes.map((change, index) => (
                                <div
                                    key={`${change.title}-${index}`}
                                    className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.03]"
                                >
                                    <div className="flex flex-wrap items-center gap-2">

                                        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold text-blue-700 dark:bg-blue-950/30 dark:text-blue-300">
                                            {change.type}
                                        </span>

                                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                                            {change.title}
                                        </h3>

                                    </div>

                                    <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                        {change.text}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                No changes were recorded for this review.
                            </p>
                        )}

                    </div>

                </section>

            </main>
        </div>
    );
};

export default ReviewHistoryDetail;
