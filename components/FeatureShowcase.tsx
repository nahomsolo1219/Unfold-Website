import AnimateOnScroll from "./ui/AnimateOnScroll";
import BrowserFrame from "./ui/BrowserFrame";

const features = [
  {
    headline: "Your entire portfolio at a glance",
    description:
      "See occupancy rates, revenue, outstanding balances, and maintenance status across all your properties — in real time.",
    screenshot: "feature-dashboard.png",
  },
  {
    headline: "Tenants, leases, and payments — all connected",
    description:
      "Manage the full tenant lifecycle from application to move-out. Track leases, automate rent charges, and keep every detail organized.",
    screenshot: "feature-tenants.png",
  },
  {
    headline: "Collect rent at 0.3% per transaction",
    description:
      "Stripe-powered ACH and card payments with autopay. Your tenants pay online, you get paid fast — without the 3% fee.",
    screenshot: "feature-payments.png",
  },
  {
    headline: "Tenant requests to vendor invoices — seamless",
    description:
      "Tenants submit requests, you create work orders, assign vendors, and track costs. When work is done, the expense auto-populates in your accounting.",
    screenshot: "feature-maintenance.png",
  },
  {
    headline: "Real accounting. Not a bolt-on.",
    description:
      "Chart of accounts, bank reconciliation, P&L reports, cash flow statements, trust accounting, 1099 generation, and Schedule E tax prep — all built in.",
    screenshot: "feature-accounting.png",
  },
  {
    headline: "Keep your owners informed and happy",
    description:
      "Owners get their own portal with monthly statements, property performance, and payout history. Generate and send statements with one click.",
    screenshot: "feature-owner-portal.png",
  },
];

export default function FeatureShowcase() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
              Everything you need. Nothing you don&apos;t.
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="space-y-20 sm:space-y-32">
          {features.map((feature, i) => {
            const reversed = i % 2 === 1;
            return (
              <AnimateOnScroll key={feature.screenshot}>
                <div
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    reversed ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={reversed ? "lg:order-2" : ""}>
                    <BrowserFrame filename={feature.screenshot} />
                  </div>
                  <div className={reversed ? "lg:order-1" : ""}>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
                      {feature.headline}
                    </h3>
                    <p className="text-stone-600 text-lg mt-4 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
