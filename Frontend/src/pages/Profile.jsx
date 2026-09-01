import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CodeScribeLogo from "../components/CodeScribeLogo";
import authService from "../services/auth.service.js";
import UserMenu from "../components/codeReview/UserMenu";

const Profile = ({ darkMode, onToggleTheme }) => {
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("");
    const [about, setAbout] = useState("");
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true);

                const token = localStorage.getItem("jwt_token");

                if (!token) {
                    setStatus(
                        "Your session has expired. Please log in again."
                    );
                    return;
                }

                const response = await authService.getMe(token);

                const currentUser = response?.data || response;

                setUser(currentUser);
                setUsername(currentUser?.username || "");
                setAbout(currentUser?.about || "");

                localStorage.setItem(
                    "user",
                    JSON.stringify(currentUser)
                );
            } catch (error) {
                console.error("Failed to load profile:", error);

                if (error.response?.status === 401) {
                    setStatus(
                        "Your session has expired. Please log in again."
                    );
                } else {
                    setStatus(
                        error.response?.data?.message ||
                            "Unable to load your profile."
                    );
                }
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const handleSave = async (event) => {
        event.preventDefault();

        if (!username.trim()) {
            setStatus("Username cannot be empty.");
            return;
        }

        if (username.trim().length < 3) {
            setStatus("Username must be at least 3 characters.");
            return;
        }

        if (about.trim().length > 300) {
            setStatus("About must be 300 characters or less.");
            return;
        }

        try {
            setSaving(true);
            setStatus("");

            const updatedUser = await authService.updateProfile({
                username: username.trim(),
                about: about.trim(),
            });

            setUser(updatedUser);
            setUsername(updatedUser.username || "");
            setAbout(updatedUser.about || "");

            localStorage.setItem(
                "user",
                JSON.stringify(updatedUser)
            );

            setStatus("Profile updated successfully.");
        } catch (error) {
            console.error("Profile update failed:", error);

            if (error.response?.status === 401) {
                setStatus(
                    "Your session has expired. Please log in again."
                );
            } else {
                setStatus(
                    error.response?.data?.message ||
                        "Unable to update your profile."
                );
            }
        } finally {
            setSaving(false);
        }
    };

    const initials = username
        ? username
              .trim()
              .split(/\s+/)
              .map((name) => name[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()
        : "U";

    if (loading) {
        return (
            <div className="min-h-screen bg-[#f5f7fa] text-slate-950 transition-colors dark:bg-[#0c0f14] dark:text-white">
                <header className="border-b border-slate-200/80 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#101318]/90">
                    <nav className="mx-auto flex h-[72px] max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-12">
                        <Link
                            to="/code-review"
                            className="flex items-center gap-2.5 text-[17px] font-semibold tracking-tight text-slate-950 dark:text-white"
                        >
                            <CodeScribeLogo size={34} />
                            CodeScribe
                        </Link>

                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                onClick={onToggleTheme}
                                aria-label="Toggle color theme"
                                className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-300"
                            >
                                {darkMode ? "☼" : "☾"}
                            </button>

                            <UserMenu />
                        </div>
                    </nav>
                </header>

                <main className="mx-auto max-w-4xl px-5 py-10 sm:px-8 lg:py-14">
                    <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm dark:border-white/10 dark:bg-[#12161d]">
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Loading your profile...
                        </p>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f5f7fa] text-slate-950 transition-colors dark:bg-[#0c0f14] dark:text-white">
            <header className="border-b border-slate-200/80 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#101318]/90">
                <nav className="mx-auto flex h-[72px] max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-12">
                    <Link
                        to="/code-review"
                        className="flex items-center gap-2.5 text-[17px] font-semibold tracking-tight text-slate-950 dark:text-white"
                    >
                        <CodeScribeLogo size={34} />
                        CodeScribe
                    </Link>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={onToggleTheme}
                            aria-label="Toggle color theme"
                            className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-300"
                        >
                            {darkMode ? "☼" : "☾"}
                        </button>

                        <UserMenu />
                    </div>
                </nav>
            </header>

            <main className="mx-auto max-w-4xl px-5 py-10 sm:px-8 lg:py-14">
                <div className="mb-8">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
                        Account
                    </p>

                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                        Your Profile
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                        Manage your CodeScribe profile and tell others a
                        little about yourself.
                    </p>
                </div>

                <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#12161d] sm:p-8">
                    <div className="flex flex-col items-center border-b border-slate-100 pb-8 dark:border-white/10 sm:flex-row sm:items-center">
                        <div className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-blue-100 text-2xl font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-200">
                            {initials}
                        </div>

                        <div className="mt-4 text-center sm:ml-5 sm:mt-0 sm:text-left">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                {username || "User"}
                            </h2>

                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                CodeScribe Developer
                            </p>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSave}
                        className="mt-8 space-y-6"
                    >
                        <div>
                            <label
                                htmlFor="username"
                                className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                            >
                                Username
                            </label>

                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(event) =>
                                    setUsername(event.target.value)
                                }
                                placeholder="Enter your username"
                                maxLength={50}
                                className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15 dark:border-white/10 dark:bg-[#0f1319] dark:text-slate-100 dark:placeholder:text-slate-600 dark:focus:border-blue-400"
                            />

                            <p className="mt-1.5 text-xs text-slate-400">
                                You can change your username anytime.
                            </p>
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                            >
                                Email address
                            </label>

                            <input
                                id="email"
                                type="email"
                                value={user?.email || ""}
                                readOnly
                                className="h-11 w-full cursor-not-allowed rounded-lg border border-slate-200 bg-slate-100 px-3.5 text-sm text-slate-500 outline-none dark:border-white/10 dark:bg-[#0b0e13] dark:text-slate-500"
                            />

                            <p className="mt-1.5 text-xs text-slate-400">
                                Your email address cannot be changed here.
                            </p>
                        </div>

                        <div>
                            <label
                                htmlFor="about"
                                className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                            >
                                About me
                            </label>

                            <textarea
                                id="about"
                                value={about}
                                onChange={(event) =>
                                    setAbout(event.target.value)
                                }
                                rows={5}
                                maxLength={300}
                                placeholder="Tell us a little about yourself..."
                                className="w-full resize-none rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15 dark:border-white/10 dark:bg-[#0f1319] dark:text-slate-100 dark:placeholder:text-slate-600 dark:focus:border-blue-400"
                            />

                            <p className="mt-1.5 text-right text-xs text-slate-400">
                                {about.length}/300
                            </p>
                        </div>

                        {status && (
                            <div
                                className={`rounded-lg border px-4 py-3 text-sm ${
                                    status
                                        .toLowerCase()
                                        .includes("success")
                                        ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/5 dark:text-emerald-300"
                                        : "border-rose-200 bg-rose-50 text-rose-600 dark:border-rose-500/20 dark:bg-rose-500/5 dark:text-rose-300"
                                }`}
                            >
                                {status}
                            </div>
                        )}

                        <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 dark:border-white/10 sm:flex-row sm:justify-end">
                            <Link
                                to="/code-review"
                                className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 px-5 text-sm font-semibold text-slate-600 transition hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-300"
                            >
                                Back to Code Review
                            </Link>

                            <button
                                type="submit"
                                disabled={saving}
                                className="h-11 rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {saving ? "Saving..." : "Save Changes"}
                            </button>
                        </div>
                    </form>
                </section>
            </main>

            <footer className="border-t border-slate-200/80 py-5 text-center text-[11px] text-slate-400 dark:border-white/10">
                CodeScribe · Your coding workspace
            </footer>
        </div>
    );
};

export default Profile;