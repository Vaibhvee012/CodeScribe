import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import authService from "../services/auth.service";
import CodeScribeLogo from "../components/CodeScribeLogo";

const getErrorMessage = (error) => {
    const responseMessage = error?.response?.data?.message;

    return (
        responseMessage ||
        error?.message ||
        "We could not sign you in. Please try again."
    );
};

const Login = ({ darkMode, onToggleTheme }) => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [touched, setTouched] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState("");

    const errors = {
        email: !form.email.trim()
            ? "Email is required."
            : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
            ? "Enter a valid email address."
            : "",

        password: !form.password
            ? "Password is required."
            : "",
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((current) => ({
            ...current,
            [name]: value,
        }));

        setError("");
        setStatus("idle");
    };

    const handleBlur = (event) => {
        setTouched((current) => ({
            ...current,
            [event.target.name]: true,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setTouched({
            email: true,
            password: true,
        });

        setError("");

        if (Object.values(errors).some(Boolean)) {
            setStatus("error");
            setError(
                "Please correct the highlighted fields before continuing."
            );
            return;
        }

        setStatus("loading");

        try {
            await authService.login({
                email: form.email.trim(),
                password: form.password,
            });

            setStatus("success");

            navigate("/code-review");
        } catch (loginError) {
            setStatus("error");
            setError(getErrorMessage(loginError));
        }
    };

    const fieldClass = (field) =>
        `h-11 w-full rounded-lg border bg-white px-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15 dark:bg-[#11151b] dark:text-slate-100 dark:placeholder:text-slate-600 dark:focus:border-blue-400 dark:focus:ring-blue-500/15 ${
            touched[field] && errors[field]
                ? "border-rose-400/70"
                : "border-slate-200 hover:border-slate-300 dark:border-white/10 dark:hover:border-white/20"
        }`;

    return (
        <main className="min-h-screen bg-[#dbdcdd] px-4 py-5 text-slate-950 transition-colors dark:bg-[#101112] dark:text-white sm:px-6 sm:py-8">
            <div className="mx-auto grid min-h-[calc(100vh-2.5rem)] max-w-6xl overflow-hidden rounded-2xl border border-slate-300/80 bg-white shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-[#101216] dark:shadow-black/30 lg:grid-cols-[0.9fr_1.1fr]">
                <section className="flex flex-col px-6 py-7 sm:px-12 sm:py-10 lg:px-14 lg:py-12">

                    <div className="flex items-center justify-between">
                        <Link
                            to="/"
                            className="flex w-fit items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
                        >
                            <CodeScribeLogo size={32} />
                            CodeScribe
                        </Link>

                        <button
                            type="button"
                            onClick={onToggleTheme}
                            aria-label="Toggle color theme"
                            className="grid h-9 w-9 place-items-center rounded-lg border border-slate-300 text-slate-600 transition hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-300"
                        >
                            {darkMode ? "☼" : "☾"}
                        </button>
                    </div>

                    <div className="my-auto w-full max-w-md py-12">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
                            Welcome back
                        </p>

                        <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                            Sign in to CodeScribe
                        </h1>

                        <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                            Continue reviewing code with a clearer, faster
                            workflow.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            noValidate
                            className="mt-8 space-y-5"
                        >
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-xs font-medium text-slate-700 dark:text-slate-300"
                                >
                                    Email address
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="you@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    aria-invalid={Boolean(
                                        touched.email && errors.email
                                    )}
                                    className={fieldClass("email")}
                                />

                                {touched.email && errors.email && (
                                    <p className="mt-1.5 text-xs text-rose-500 dark:text-rose-300">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div>
                                <div className="mb-2 flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-xs font-medium text-slate-700 dark:text-slate-300"
                                    >
                                        Password
                                    </label>

                                    <button
                                        type="button"
                                        className="text-[11px] font-medium text-blue-600 transition hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
                                    >
                                        Forgot password?
                                    </button>
                                </div>

                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        autoComplete="current-password"
                                        placeholder="Enter your password"
                                        value={form.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        aria-invalid={Boolean(
                                            touched.password &&
                                                errors.password
                                        )}
                                        className={`${fieldClass(
                                            "password"
                                        )} pr-16`}
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(
                                                (current) => !current
                                            )
                                        }
                                        className="absolute inset-y-0 right-3 text-xs font-medium text-slate-500 transition hover:text-blue-600 dark:hover:text-blue-300"
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                    >
                                        {showPassword
                                            ? "Hide"
                                            : "Show"}
                                    </button>
                                </div>

                                {touched.password && errors.password && (
                                    <p className="mt-1.5 text-xs text-rose-500 dark:text-rose-300">
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            {error && (
                                <div
                                    role="alert"
                                    className="rounded-lg border border-rose-400/20 bg-rose-400/10 px-3.5 py-3 text-xs text-rose-200"
                                >
                                    {error}
                                </div>
                            )}

                            {status === "success" && (
                                <div
                                    role="status"
                                    className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3.5 py-3 text-xs text-emerald-200"
                                >
                                    Signed in successfully. Opening your
                                    workspace…
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={
                                    status === "loading" ||
                                    status === "success"
                                }
                                className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {status === "loading"
                                    ? "Signing in..."
                                    : status === "success"
                                    ? "Signed in"
                                    : "Sign in"}

                                {status === "idle" ||
                                status === "error" ? (
                                    <span aria-hidden="true">
                                        →
                                    </span>
                                ) : null}
                            </button>
                        </form>

                        <p className="mt-7 text-center text-xs text-slate-500">
                            Don&apos;t have an account?{" "}
                            <Link
                                to="/register"
                                className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
                            >
                                Create one
                            </Link>
                        </p>
                    </div>
                </section>

                <aside className="relative hidden overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-100 dark:from-[#171129] dark:via-[#13151d] dark:to-[#10171b] lg:flex lg:items-center lg:justify-center">
                    <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(37,99,235,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,.12)_1px,transparent_1px)] dark:[background-image:linear-gradient(rgba(139,92,246,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.15)_1px,transparent_1px)] [background-size:42px_42px]" />

                    <div className="relative mx-10 max-w-md text-center">
                        <div className="mx-auto mb-10 grid h-32 w-32 rotate-45 place-items-center rounded-3xl border border-blue-400/20 bg-blue-500/5 shadow-[0_0_80px_rgba(139,92,246,.2)]">
                            <div className="-rotate-45 grid h-16 w-16 place-items-center rounded-2xl bg-blue-600 text-3xl shadow-[0_0_35px_rgba(37,99,235,.45)] dark:bg-blue-600">
                                ✦
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                            Review smarter,{" "}
                            <span className="text-blue-600 dark:text-blue-300">
                                ship faster.
                            </span>
                        </h2>

                        <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
                            Keep your code quality moving forward with
                            focused, actionable AI feedback.
                        </p>

                        <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-[11px] text-blue-500 dark:border-white/10 dark:bg-white/5 dark:text-blue-400">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                            CodeScribe systems operational
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
};

export default Login;