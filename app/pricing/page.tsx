import { Metadata } from "next";
import { Check, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — Simple Plans, Massive Savings | Unfold",
  description:
    "Pick a plan, start your trial, stop overpaying. Plans from Free to $79/mo.",
};

const plans = [
  {
    name: "Starter",
    price: "Free",
    desc: "For landlords getting started",
    units: "Up to 10 units",
    fee: "0.5% transaction fee",
    cta: "Get Started Free",
    highlight: false,
    features: [
      { name: "Property & unit management", included: true },
      { name: "Tenant management", included: true },
      { name: "Lease tracking", included: true },
      { name: "Maintenance requests", included: true },
      { name: "Online rent collection (ACH & card)", included: true },
      { name: "Basic financial reports", included: true },
      { name: "1 active listing", included: true },
      { name: "Email support", included: true },
      { name: "Online applications", included: false },
      { name: "Autopay", included: false },
      { name: "Tax reports", included: false },
      { name: "Document storage", included: false },
    ],
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
    extra: "Everything in Starter, plus:",
    features: [
      { name: "Unlimited listings", included: true },
      { name: "Online rental applications", included: true },
      { name: "Autopay for tenants", included: true },
      { name: "Schedule E tax reports", included: true },
      { name: "1099 generation", included: true },
      { name: "Vendor management", included: true },
      { name: "5 GB document storage", included: true },
      { name: "Priority email support", included: true },
    ],
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
    extra: "Everything in Pro, plus:",
    features: [
      { name: "Next-day payouts (free)", included: true },
      { name: "E-signatures", included: true },
      { name: "Custom branding", included: true },
      { name: "Vendor portal", included: true },
      { name: "20 GB document storage", included: true },
      { name: "Chat support", included: true },
    ],
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
    extra: "Everything in Growth, plus:",
    features: [
      { name: "Owner portal & statements", included: true },
      { name: "Unlimited document storage", included: true },
      { name: "Phone support", included: true },
      { name: "Dedicated onboarding", included: true },
      { name: "Integrations (Zapier, Make, more)", included: true, comingSoon: true },
    ],
  },
];

const comparisonRows = [
  { feature: "Starting price", unfold: "$19/mo", buildium: "$55/mo", appfolio: "$1.49/unit/mo" },
  { feature: "Transaction fee", unfold: "0.3%", buildium: "2.99%", appfolio: "2.49%+", isHighlight: true },
  { feature: "Units included", unfold: "30", buildium: "Varies", appfolio: "Per unit" },
  { feature: "Full accounting", unfold: true, buildium: true, appfolio: true },
  { feature: "Trust accounting", unfold: true, buildium: true, appfolio: true },
  { feature: "Owner portal", unfold: "Scale", buildium: true, appfolio: true },
  { feature: "1099 generation", unfold: true, buildium: true, appfolio: true },
  { feature: "Work orders", unfold: true, buildium: true, appfolio: true },
  { feature: "Vendor portal", unfold: "Growth+", buildium: "Add-on", appfolio: true },
  { feature: "E-signatures", unfold: "Growth+", buildium: "Add-on", appfolio: true },
  { feature: "Custom branding", unfold: "Growth+", buildium: true, appfolio: true },
  { feature: "Integrations", unfold: "Coming soon", buildium: true, appfolio: true },
];

const faqs = [
  {
    q: "Is there really no catch with the low fees?",
    a: "No catch. We make money from subscriptions, not by taking a cut of your rent. Stripe charges us ~0.8% for ACH — we pass through a fraction and absorb the rest.",
  },
  {
    q: "What happens when my trial ends?",
    a: "After 14 days, choose a plan or drop to Starter (free, up to 10 units). No credit card required. Your data stays safe.",
  },
  {
    q: "Can I switch plans anytime?",
    a: "Yes. Upgrade, downgrade, or cancel anytime. Changes take effect next billing cycle.",
  },
  {
    q: "Do tenants pay to use the portal?",
    a: "No. The tenant portal is free for all tenants on every plan.",
  },
  {
    q: "What about the 0% transaction fee on Scale?",
    a: "We absorb all processing costs. You pay $79/mo and that's it — no fees on rent payments. For a 200-unit portfolio, that alone saves thousands versus any competitor.",
  },
  {
    q: "What integrations are coming?",
    a: "We're building connections with Zapier, Make, and other platforms so you can connect Unfold with tools you already use. Coming soon for Scale customers first, broader availability to follow.",
  },
];

function CellValue({
  value,
  isUnfold,
  isHighlight,
}: {
  value: string | boolean;
  isUnfold?: boolean;
  isHighlight?: boolean;
}) {
  if (value === true)
    return <Check size={18} className="text-green-500 mx-auto" />;
  if (value === false)
    return <X size={18} className="text-stone-300 mx-auto" />;
  return (
    <span
      className={
        isUnfold && isHighlight
          ? "text-orange-600 font-bold text-lg font-display"
          : ""
      }
    >
      {value}
    </span>
  );
}

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero — dark */}
        <section className="relative bg-stone-950 noise-bg overflow-hidden">
          <div className="absolute inset-0 dot-grid" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(249,115,22,0.07) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 pt-32 sm:pt-40 pb-20 sm:pb-28">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <AnimateOnScroll>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight">
                  Simple pricing. Massive savings.
                </h1>
                <p className="text-lg sm:text-xl text-stone-400 mt-6 max-w-xl mx-auto">
                  Pick a plan, start your trial, stop overpaying.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Plan cards */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {plans.map((plan, i) => (
                <AnimateOnScroll key={plan.name} delay={i * 80}>
                  <div
                    className={`rounded-2xl border p-6 flex flex-col h-full relative ${
                      plan.highlight
                        ? "border-orange-300 bg-orange-50/30 ring-2 ring-orange-200"
                        : "border-stone-200 bg-white"
                    }`}
                  >
                    {plan.highlight && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge variant="dark">Popular</Badge>
                      </div>
                    )}
                    <h3 className="text-stone-900 font-bold text-lg">
                      {plan.name}
                    </h3>
                    <div className="mt-3">
                      <span className="font-display text-4xl font-bold text-stone-900">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-stone-500 text-sm">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <p className="text-stone-500 text-sm mt-1">{plan.desc}</p>

                    <div className="mt-4 pt-4 border-t border-stone-100 space-y-1.5 text-sm">
                      <p className="text-stone-700 font-medium">{plan.units}</p>
                      <p className="text-orange-600 font-semibold">
                        {plan.fee}
                      </p>
                    </div>

                    {plan.extra && (
                      <p className="text-stone-500 text-xs font-medium mt-4 mb-1">
                        {plan.extra}
                      </p>
                    )}

                    <ul className="mt-2 space-y-2 text-sm flex-1">
                      {plan.features.map((f) => (
                        <li
                          key={f.name}
                          className={`flex items-start gap-2 ${
                            f.included ? "text-stone-700" : "text-stone-400"
                          }`}
                        >
                          {f.included ? (
                            <Check
                              size={16}
                              className="text-green-500 mt-0.5 shrink-0"
                            />
                          ) : (
                            <X
                              size={16}
                              className="text-stone-300 mt-0.5 shrink-0"
                            />
                          )}
                          <span>
                            {f.name}
                            {"comingSoon" in f && f.comingSoon && (
                              <span className="ml-1.5 text-xs bg-stone-100 text-stone-500 px-1.5 py-0.5 rounded">
                                Coming Soon
                              </span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-4">
                      <Button
                        href="https://app.unfoldpm.com/register"
                        variant={plan.highlight ? "primary" : "secondary"}
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
              <p className="text-center text-stone-500 mt-8">
                Need more than 200 units?{" "}
                <Link
                  href="mailto:hello@unfoldpm.com"
                  className="text-orange-600 hover:text-orange-500 font-medium"
                >
                  Contact us for custom pricing.
                </Link>
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Competitor comparison — dark */}
        <section className="relative bg-dark-surface noise-bg py-20 sm:py-28 overflow-hidden">
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll>
              <div className="text-center mb-14">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                  See how we compare.
                </h2>
                <p className="text-stone-400 text-lg mt-4">
                  Unfold Pro vs. the competition.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="glass-card rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-dark-card-border">
                        <th className="text-left font-medium text-stone-500 py-4 px-4 sm:px-6">
                          Feature
                        </th>
                        <th className="text-center font-bold text-orange-500 py-4 px-4 sm:px-6 bg-orange-500/5 border-t-2 border-t-orange-500">
                          Unfold (Pro)
                        </th>
                        <th className="text-center font-medium text-stone-500 py-4 px-4 sm:px-6">
                          Buildium
                        </th>
                        <th className="text-center font-medium text-stone-500 py-4 px-4 sm:px-6">
                          AppFolio
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row) => (
                        <tr
                          key={row.feature}
                          className="border-b border-dark-card-border/50"
                        >
                          <td className="py-3.5 px-4 sm:px-6 font-medium text-stone-300">
                            {row.feature}
                          </td>
                          <td className="py-3.5 px-4 sm:px-6 text-center bg-orange-500/5">
                            <CellValue
                              value={row.unfold}
                              isUnfold
                              isHighlight={row.isHighlight}
                            />
                          </td>
                          <td className="py-3.5 px-4 sm:px-6 text-center text-stone-400">
                            <CellValue value={row.buildium} />
                          </td>
                          <td className="py-3.5 px-4 sm:px-6 text-center text-stone-400">
                            <CellValue value={row.appfolio} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 text-center mb-14">
                Frequently asked questions
              </h2>
            </AnimateOnScroll>

            <div className="space-y-8">
              {faqs.map((faq, i) => (
                <AnimateOnScroll key={i} delay={i * 60}>
                  <div>
                    <h3 className="font-bold text-stone-900 text-lg">
                      {faq.q}
                    </h3>
                    <p className="text-stone-600 mt-2 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA — dark */}
        <section className="relative bg-stone-950 noise-bg py-20 sm:py-24 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(249,115,22,0.06) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimateOnScroll>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                Start your free trial today.
              </h2>
              <p className="text-stone-400 text-lg mt-4">
                14 days free. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <Button href="https://app.unfoldpm.com/register" size="lg">
                  Start Free Trial
                </Button>
                <Button href="#book-demo" variant="outline-light" size="lg">
                  Book a Demo
                </Button>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
