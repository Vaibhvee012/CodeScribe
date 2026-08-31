import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import authService from "../services/auth.service";

const passwordRules = [
    {
        key: "length",
        label: "At least 6 characters",
        test: (value) => value.length >= 6,
    },
    {
        key: "letter",
        label: "One letter",
        test: (value) => /[a-zA-Z]/.test(value),
    },
    {
        key: "number",
        label: "One number",
        test: (value) => /\d/.test(value),
    },
    {
        key: "special",
        label: "One special character",
        test: (value) => /[^a-zA-Z\d]/.test(value),
    },
];

const getErrorMessage = (error) => {
    const responseMessage = error?.response?.data?.message;

    return (
        responseMessage ||
        error?.message ||
        "We could not create your account. Please try again."
    );
};

const Register = ({ darkMode, onToggleTheme }) => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [touched, setTouched] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState("");

    const rules = useMemo(
        () =>
            passwordRules.map((rule) => ({
                ...rule,
                valid: rule.test(form.password),
            })),
        [form.password]
    );

    const passwordValid = rules.every((rule) => rule.valid);

    const errors = {
        username: !form.username.trim()
            ? "Username is required."
            : form.username.trim().length < 3
                ? "Username must be at least 3 characters."
                : "",

        email: !form.email.trim()
            ? "Email is required."
            : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
                ? "Enter a valid email address."
                : "",

        password: !form.password
            ? "Password is required."
            : !passwordValid
                ? "Password does not meet the requirements."
                : "",
    };

    useEffect(() => {
        if (status !== "success") return undefined;

        const redirectTimer = window.setTimeout(() => {
            navigate("/login");
        }, 900);

        return () => window.clearTimeout(redirectTimer);
    }, [navigate, status]);

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
            username: true,
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
            await authService.register({
                username: form.username.trim(),
                email: form.email.trim(),
                password: form.password,
            });

            setStatus("success");
        } catch (registrationError) {
            setStatus("error");
            setError(getErrorMessage(registrationError));
        }
    };

    const fieldClass = (field) =>
        `h-11 w-full rounded-lg border px-3.5 text-sm outline-none transition placeholder:text-slate-500 dark:placeholder:text-slate-600
        bg-white text-slate-900 dark:bg-[#11151b] dark:text-slate-100
        focus:border-blue-400 focus:ring-2 focus:ring-blue-500/15
        ${
            touched[field] && errors[field]
                ? "border-rose-400/70"
                : "border-slate-300 hover:border-slate-400 dark:border-white/10 dark:hover:border-white/20"
        }`;

    return (
        <main className="min-h-screen bg-slate-100 px-4 py-5 text-slate-950 transition-colors dark:bg-[#0b0d10] dark:text-white sm:px-6 sm:py-8">

            <div className="mx-auto grid min-h-[calc(100vh-2.5rem)] max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/30 transition-colors dark:border-white/10 dark:bg-[#101216] dark:shadow-black/30 lg:grid-cols-[0.9fr_1.1fr]">

                <section className="flex flex-col px-6 py-7 sm:px-12 sm:py-10 lg:px-14 lg:py-12">

                    <div className="flex items-center justify-between">

                        <Link
                            to="/"
                            className="flex w-fit items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-200"
                        >
                            <span className="grid h-7 w-7 place-items-center rounded-md bg-blue-600 text-xs font-bold text-white shadow-lg shadow-blue-600/25">
                                C
                            </span>

                            CodeScribe
                        </Link>

                        <button
                            type="button"
                            onClick={onToggleTheme}
                            aria-label="Toggle color theme"
                            className="grid h-9 w-9 place-items-center rounded-lg border border-slate-300 text-slate-600 transition hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-300"
                        >
                            {darkMode ? "☼" : "☾"}
                        </button>

                    </div>

                    <div className="my-auto py-12">

                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
                            Start building better code
                        </p>

                        <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                            Create your account
                        </h1>

                        <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
                            Join CodeScribe and turn every review into a faster,
                            clearer coding workflow.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            noValidate
                            className="mt-8 space-y-5"
                        >

                            <div>
                                <label
                                    htmlFor="username"
                                    className="mb-2 block text-xs font-medium text-slate-700 dark:text-slate-300"
                                >
                                    Username
                                </label>

                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    placeholder="e.g. ada_lovelace"
                                    value={form.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    aria-invalid={Boolean(
                                        touched.username && errors.username
                                    )}
                                    className={fieldClass("username")}
                                />

                                {touched.username && errors.username && (
                                    <p className="mt-1.5 text-xs text-rose-500 dark:text-rose-300">
                                        {errors.username}
                                    </p>
                                )}
                            </div>

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
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-xs font-medium text-slate-700 dark:text-slate-300"
                                >
                                    Password
                                </label>

                                <div className="relative">

                                    <input
                                        id="password"
                                        name="password"
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        autoComplete="new-password"
                                        placeholder="Create a strong password"
                                        value={form.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        aria-invalid={Boolean(
                                            touched.password &&
                                            errors.password
                                        )}
                                        className={`${fieldClass("password")} pr-16`}
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(
                                                (current) => !current
                                            )
                                        }
                                        className="absolute inset-y-0 right-3 text-xs font-medium text-slate-500 transition hover:text-blue-600 dark:text-slate-500 dark:hover:text-blue-300"
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>

                                </div>

                                <div className="mt-3 grid grid-cols-2 gap-2">

                                    {rules.map((rule) => (
                                        <p
                                            key={rule.key}
                                            className={`text-[11px] transition ${
                                                rule.valid
                                                    ? "text-emerald-600 dark:text-emerald-300"
                                                    : "text-slate-500"
                                            }`}
                                        >
                                            <span className="mr-1">
                                                {rule.valid ? "✓" : "○"}
                                            </span>

                                            {rule.label}
                                        </p>
                                    ))}

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
                                    className="rounded-lg border border-rose-300 bg-rose-50 px-3.5 py-3 text-xs text-rose-700 dark:border-rose-400/20 dark:bg-rose-400/10 dark:text-rose-200"
                                >
                                    {error}
                                </div>
                            )}

                            {status === "success" && (
                                <div
                                    role="status"
                                    className="rounded-lg border border-emerald-300 bg-emerald-50 px-3.5 py-3 text-xs text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200"
                                >
                                    Account created successfully. Taking you
                                    to login…
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
                                    ? "Creating account..."
                                    : status === "success"
                                        ? "Account created"
                                        : "Create account"}

                                {status === "idle" ||
                                status === "error" ? (
                                    <span aria-hidden="true">→</span>
                                ) : null}
                            </button>

                        </form>

                        <p className="mt-7 text-center text-xs text-slate-500 dark:text-slate-500">
                            Already have an account?{" "}

                            <Link
                                to="/login"
                                className="font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-200"
                            >
                                Log in
                            </Link>
                        </p>

                    </div>
                </section>

                <aside className="relative hidden overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 dark:from-[#171129] dark:via-[#13151d] dark:to-[#10171b] lg:flex lg:items-center lg:justify-center">

                    <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(37,99,235,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,.12)_1px,transparent_1px)] [background-size:42px_42px]" />

                    <div className="relative mx-10 max-w-md text-center">

                        <div className="mx-auto mb-10 grid h-32 w-32 rotate-45 place-items-center rounded-3xl border border-blue-400/20 bg-blue-500/5 shadow-[0_0_80px_rgba(59,130,246,.15)]">

                            <div className="-rotate-45 grid h-16 w-16 place-items-center rounded-2xl bg-blue-600 text-3xl shadow-[0_0_35px_rgba(37,99,235,.55)]">
                                ✦
                            </div>

                        </div>

                        <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                            Your code,{" "}
                            <span className="text-blue-600">
                                made clearer.
                            </span>
                        </h2>

                        <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
                            Get thoughtful, actionable reviews that help you
                            ship confidently and learn as you build.
                        </p>

                        <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-[11px] text-emerald-700 dark:border-white/10 dark:bg-blue-500/5 dark:text-blue-300">

                            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />

                            CodeScribe systems operational

                        </div>

                    </div>
                </aside>

            </div>
        </main>
    );
};

export default Register;

