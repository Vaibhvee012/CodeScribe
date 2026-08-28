const HowItWorks = () => {
  const steps = [
    ['01', 'Paste', 'Drop in a function, file, or pull request. No setup, no ceremony.'],
    ['02', 'Review', 'CodeScribe reads the context and highlights what matters.'],
    ['03', 'Improve', 'Apply a recommended fix and ship code you can stand behind.']
  ];

  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
      <div className="mx-auto mb-14 max-w-lg text-center">
        <p className="text-xs font-semibold uppercase tracking-[.18em] text-blue-600">Simple by design</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Three steps to better code.</h2>
      </div>
      <div className="grid gap-10 md:grid-cols-3">
        {steps.map(([number, title, text]) => (
          <div key={number}>
            <span className="font-mono text-sm text-blue-600">{number}</span>
            <h3 className="mt-4 text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;