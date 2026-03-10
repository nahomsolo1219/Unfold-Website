import AnimateOnScroll from "./ui/AnimateOnScroll";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "Free",
    desc: "For landlords getting started",
    units: "Up to 10 units",
    fee: "0.5% transaction fee",
    cta: "Get Started Free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mo",
    desc: "For growing landlords",
    units: "Up to 30 units",
    fee: "0.3% transaction fee",
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Growth",
    price: "$39",
    period: "/mo",
    desc: "For scaling portfolios",
    units: "Up to 100 units",
    fee: "0.25% transaction fee",
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Scale",
    price: "$79",
    period: "/mo",
    desc: "For property management companies",
    units: "Up to 200 units",
    fee: "0% transaction fee",
    cta: "Start Free Trial",
    highlight: false,
  },
];

export default function PricingPreview() {
  return (
    <section id="pricing" className="relative bg-dark-surface noise-bg py-20 sm:py-28 overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(249,115,22,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Pricing that respects your margins.
            </h2>
            <p className="text-stone-400 text-lg mt-4">
              No per-unit fees. No surprise charges. Just honest pricing.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <AnimateOnScroll key={plan.name} delay={i * 80}>
              <div
                className={`glass-card rounded-2xl p-6 flex flex-col relative ${
                  plan.highlight
                    ? "ring-2 ring-orange-500/50"
                    : ""
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="dark">Popular</Badge>
                  </div>
                )}
                <h3 className="text-white font-bold text-lg">{plan.name}</h3>
                <div className="mt-3">
                  <span className="font-display text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-stone-400 text-sm">{plan.period}</span>
                  )}
                </div>
                <p className="text-stone-400 text-sm mt-2">{plan.desc}</p>
                <div className="mt-6 space-y-2 text-sm">
                  <p className="text-stone-300">{plan.units}</p>
                  <p className="text-orange-400 font-medium">{plan.fee}</p>
                </div>
                <div className="mt-auto pt-6">
                  <Button
                    href="https://app.unfoldpm.com/register"
                    variant={plan.highlight ? "primary" : "outline-light"}
                    size="md"
                    className="w-full justify-center"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="text-center mt-10 space-y-2">
            <p className="text-stone-400">
              Need more than 200 units?{" "}
              <Link
                href="mailto:hello@unfoldpm.com"
                className="text-orange-500 hover:text-orange-400 font-medium"
              >
                Let&apos;s talk.
              </Link>
            </p>
            <Link
              href="/pricing"
              className="inline-block text-orange-500 hover:text-orange-400 font-medium text-sm"
            >
              See full plan details &rarr;
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
