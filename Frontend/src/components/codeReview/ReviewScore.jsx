const ReviewScore = ({ score, metrics }) => {
    const metricData = [
        {
            label: "Performance",
            value: metrics?.performance ?? 0,
            color: "bg-blue-500",
        },
        {
            label: "Security",
            value: metrics?.security ?? 0,
            color: "bg-emerald-500",
        },
        {
            label: "Readability",
            value: metrics?.readability ?? 0,
            color: "bg-violet-500",
        },
    ];

    const grade =
        score >= 90
            ? "A−"
            : score >= 80
                ? "B+"
                : score >= 70
                    ? "B"
                    : score >= 60
                        ? "C"
                        : score
                            ? "D"
                            : "--";

    return (
        <section className="panel p-5 sm:p-6">

            <div className="flex items-center justify-between">

                <div>
                    <p className="eyebrow">
                        Overall score
                    </p>

                    <p className="mt-2 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">
                        {score ?? "--"}

                        <span className="text-lg font-normal text-slate-400">
                            /100
                        </span>
                    </p>
                </div>

                <div className="grid h-[68px] w-[68px] place-items-center rounded-full border-[5px] border-blue-500 text-sm font-bold text-blue-600 dark:text-blue-400">
                    <span>
                        {grade}
                    </span>
                </div>

            </div>

            <div className="my-6 h-px bg-slate-100 dark:bg-white/10" />

            <div className="space-y-5">

                {metricData.map((metric) => (
                    <div key={metric.label}>

                        <div className="mb-2 flex items-center justify-between text-xs">

                            <span className="font-medium text-slate-600 dark:text-slate-300">
                                {metric.label}
                            </span>

                            <span className="font-semibold text-slate-900 dark:text-white">
                                {metric.value}
                            </span>

                        </div>

                        <div className="h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">

                            <div
                                className={`h-full rounded-full ${metric.color}`}
                                style={{
                                    width: `${metric.value}%`,
                                }}
                            />

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default ReviewScore;
