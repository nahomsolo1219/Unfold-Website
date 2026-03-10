import AnimateOnScroll from "./ui/AnimateOnScroll";

const stats = [
  {
    amount: "$161,460/yr",
    label: "What you pay with Buildium (2.99%)",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    amount: "$16,200/yr",
    label: "What you pay with Unfold (0.3%)",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    amount: "$145,260",
    label: "What stays in your pocket",
    color: "text-green-600",
    bg: "bg-green-50",
    highlight: true,
  },
];

export default function ProblemStats() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            The math doesn&apos;t lie.
          </h2>
          <p className="text-stone-500 text-lg mt-4 max-w-2xl mx-auto">
            Here&apos;s what transaction fees really cost a 300-unit portfolio
            at $1,500 average rent.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-3 gap-6 mt-14">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 100}>
              <div
                className={`rounded-2xl p-8 ${stat.bg} ${
                  stat.highlight ? "ring-2 ring-green-200 scale-105" : ""
                }`}
              >
                <p
                  className={`font-display text-4xl sm:text-5xl font-bold ${stat.color}`}
                >
                  {stat.amount}
                </p>
                <p className="text-stone-600 mt-3 text-sm sm:text-base">
                  {stat.label}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={400}>
          <p className="text-stone-500 text-lg mt-10">
            And that&apos;s just one year. Over 5 years, that&apos;s over{" "}
            <span className="font-semibold text-stone-700">$700,000</span>.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
