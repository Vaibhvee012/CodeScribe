import { Link } from 'react-router-dom';

const CTA = () => (
  <section className="mx-5 mb-20 overflow-hidden rounded-2xl bg-slate-800 px-6 py-16 text-center text-white sm:px-12 lg:mx-auto lg:max-w-6xl">
    <p className="text-xs font-semibold uppercase tracking-[.18em] text-blue-300">
      Your next review starts here
    </p>
    <h2 className="mx-auto mt-4 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
      Write code with confidence.
    </h2>
    <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-slate-400">
      Give every line the second opinion it deserves.
    </p>
    <Link
      to="/register"
      className="mt-8 inline-block rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500"
    >
      Start reviewing free <span className="ml-2">↗</span>
    </Link>
  </section>
);

export default CTA;