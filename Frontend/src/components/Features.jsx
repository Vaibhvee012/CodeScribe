import Feature from './Feature';

const Features = () => {
  const features = [
    ['⌁', 'AI Review', 'A thorough review of every change, with context-aware explanations your team can act on.'],
    ['⌕', 'Bug Detection', 'Catch edge cases, null references, and logic errors before they become incidents.'],
    ['◈', 'Security', 'Find vulnerabilities and insecure patterns with checks built for modern applications.'],
    ['↗', 'Performance', 'Spot slow queries, unnecessary renders, and costly operations with precision.'],
    ['✓', 'Code Quality', 'Make code easier to read, maintain, and extend with practical suggestions.'],
    ['</>', 'Recommended Code', 'See a clean, production-ready fix—not just a warning or a cryptic error.']
  ];

  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
      <div className="mb-10 max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[.18em] text-blue-600">Everything in one review</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">A sharper lens for every pull request.</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(([icon, title, description]) => (
          <Feature key={title} icon={icon} title={title} description={description} />
        ))}
      </div>
    </section>
  );
};

export default Features;