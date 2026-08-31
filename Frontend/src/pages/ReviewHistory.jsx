import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import codeReviewService from "../services/codeReview.service.js";
import UserMenu from "../components/codeReview/UserMenu";

const ReviewHistory = ({ darkMode, onToggleTheme }) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                setLoading(true);
                setError("");

                const result =
                    await codeReviewService.getReviewHistory();

                setReviews(result || []);
            } catch (error) {
                console.error(
                    "Failed to fetch review history:",
                    error
                );

                if (error.response?.status === 401) {
                    setError(
                        "Your session has expired. Please log in again."
                    );
                } else {
                    setError(
                        "Unable to load your review history. Please try again."
                    );
                }
            } finally {
                setLoading(false);
            }
        };

        fetchHistory();
    }, []);

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

    return (
        <div className="min-h-screen bg-[#f5f7fa] text-slate-950 transition-colors dark:bg-[#0c0f14] dark:text-white">

            {/* Header */}
            <header className="border-b border-slate-200/80 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#101318]/90">
                <nav className="mx-auto flex h-[72px] max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-12">

                    {/* Logo */}
                    <Link
                        to="/code-review"
                        className="flex items-center gap-2.5 text-[17px] font-semibold tracking-tight text-slate-950 dark:text-white"
                    >
                        <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                            <svg
                                viewBox="0 0 20 20"
                                fill="none"
                                className="h-4 w-4"
                                aria-hidden="true"
                            >
                                <path
                                    d="M5 4.5 2.5 7 5 9.5M15 4.5 17.5 7 15 9.5M11.5 3l-3 8"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>

                        CodeScribe
                    </Link>

                    {/* Right side */}
                    <div className="flex items-center gap-3">

                        {/* Theme toggle */}
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

                {/* Page heading */}
                <div className="mb-8">

                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
                        Your workspace
                    </p>

                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                        Review History
                    </h1>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                        View your previous CodeScribe reviews and the AI
                        recommendations generated for your code.
                    </p>

                </div>

                {/* Loading */}
                {loading && (
                    <div className="rounded-xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500 shadow-sm dark:border-white/10 dark:bg-[#12161d] dark:text-slate-400">
                        Loading your review history...
                    </div>
                )}

                {/* Error */}
                {!loading && error && (
                    <div className="rounded-xl border border-rose-200 bg-rose-50 p-5 text-sm text-rose-600 dark:border-rose-500/20 dark:bg-rose-500/5 dark:text-rose-300">
                        {error}
                    </div>
                )}

                {/* Empty state */}
                {!loading &&
                    !error &&
                    reviews.length === 0 && (
                        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center dark:border-white/10 dark:bg-[#12161d]">

                            <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-300">
                                ✓
                            </div>

                            <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                                No reviews yet
                            </h2>

                            <p className="mx-auto mt-2 max-w-md text-sm text-slate-500 dark:text-slate-400">
                                Your previous code reviews will appear here
                                after you submit your first review.
                            </p>

                            <Link
                                to="/code-review"
                                className="mt-5 inline-flex rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                            >
                                Review some code
                            </Link>

                        </div>
                    )}

                {/* Reviews */}
                {!loading &&
                    !error &&
                    reviews.length > 0 && (
                        <div className="space-y-4">

                            {reviews.map((review) => (
                                <article
                                    key={review._id}
                                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md dark:border-white/10 dark:bg-[#12161d] dark:hover:border-blue-500/30"
                                >

                                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                                        {/* Review info */}
                                        <div className="min-w-0">

                                            <h2 className="truncate text-base font-semibold text-slate-900 dark:text-white">
                                                {review.description ||
                                                    "Code review"}
                                            </h2>

                                            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">

                                                <span>
                                                    {review.language}
                                                </span>

                                                <span>·</span>

                                                <span>
                                                    {review.techType}
                                                </span>

                                                <span>·</span>

                                                <span>
                                                    {formatDate(
                                                        review.createdAt
                                                    )}
                                                </span>

                                            </div>

                                        </div>

                                        {/* Score + button */}
                                        <div className="flex items-center gap-4">

                                            <div className="text-right">

                                                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                                                    Score
                                                </p>

                                                <p
                                                    className={`mt-1 text-xl font-bold ${getScoreClass(
                                                        review.score
                                                    )}`}
                                                >
                                                    {review.score ?? "--"}

                                                    <span className="ml-0.5 text-xs font-normal text-slate-400">
                                                        /100
                                                    </span>

                                                </p>

                                            </div>

                                            <Link
                                                to={`/history/${review._id}`}
                                                state={{ review }}
                                                className="rounded-lg border border-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-300"
                                            >
                                                View Review →
                                            </Link>

                                        </div>

                                    </div>

                                    {/* Metrics */}
                                    <div className="mt-5 grid grid-cols-3 gap-3 border-t border-slate-100 pt-4 dark:border-white/10">

                                        <div>
                                            <p className="text-[10px] uppercase tracking-wide text-slate-400">
                                                Performance
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                                                {review.metrics?.performance ??
                                                    "--"}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-[10px] uppercase tracking-wide text-slate-400">
                                                Security
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                                                {review.metrics?.security ??
                                                    "--"}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-[10px] uppercase tracking-wide text-slate-400">
                                                Readability
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                                                {review.metrics?.readability ??
                                                    "--"}
                                            </p>
                                        </div>

                                    </div>

                                </article>
                            ))}

                        </div>
                    )}

            </main>
        </div>
    );
};

export default ReviewHistory;
