import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserMenu = () => {
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState("User");

    const menuRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
            try {
                const user = JSON.parse(storedUser);
                setUsername(user.username || "User");
            } catch {
                setUsername("User");
            }
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem("jwt_token");
        localStorage.removeItem("user");

        navigate("/");
    };

    return (
        <div
    ref={menuRef}
    className="relative flex items-center gap-2"
>
    <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label="Open user menu"
        aria-expanded={open}
        className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-300"
    >
        {open ? "×" : "☰"}
    </button>

    <div className="hidden max-w-[150px] truncate text-sm font-medium text-slate-700 dark:text-slate-200 sm:block">
        {username}
    </div>

    {open && (
        <div className="absolute right-0 top-12 z-50 w-48 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl dark:border-white/10 dark:bg-[#12161d]">
            <Link
                to="/profile"
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
            >
                Profile
            </Link>

            <Link
                to="/history"
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
            >
                Review History
            </Link>

            <button
                type="button"
                onClick={handleSignOut}
                className="w-full rounded-lg px-3 py-2.5 text-left text-sm text-rose-600 hover:bg-rose-50 dark:text-rose-300 dark:hover:bg-rose-500/10"
            >
                Sign out
            </button>
        </div>
    )}
</div>
    );
};

export default UserMenu;
