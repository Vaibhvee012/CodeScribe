import UserMenu from "./UserMenu";

const CodeReviewNavbar = ({ darkMode, onToggleTheme }) => (
    <header className="border-b border-slate-200/80 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#101318]/90">
        <nav className="mx-auto flex h-[72px] max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-12">

            <a
                href="/"
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
            </a>

            <div className="flex items-center gap-3">

                {/* Theme toggle */}
                <button
                    type="button"
                    onClick={onToggleTheme}
                    className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:text-slate-300"
                    aria-label="Toggle color theme"
                >
                    {darkMode ? "☼" : "☾"}
                </button>

                <div className="hidden h-7 w-px bg-slate-200 dark:bg-white/10 sm:block" />

                {/* User menu */}
                <UserMenu />

            </div>
        </nav>
    </header>
);

export default CodeReviewNavbar;

