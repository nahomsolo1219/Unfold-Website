import Link from "next/link";
import { CreditCard, BookOpen, Wrench, Users, Home } from "lucide-react";
import AnimateOnScroll from "./ui/AnimateOnScroll";

const features = [
  {
    icon: CreditCard,
    title: "Online Rent Collection",
    description:
      "Collect rent at 0.3%. ACH, cards, autopay — powered by Stripe.",
    href: "/features/payments",
  },
  {
    icon: BookOpen,
    title: "Full Accounting",
    description:
      "Chart of accounts, trust accounting, bank reconciliation, P&L, 1099s.",
    href: "/features/accounting",
  },
  {
    icon: Wrench,
    title: "Maintenance & Work Orders",
    description:
      "Requests to resolution. Tenant submits, you dispatch, vendor completes.",
    href: "/features/maintenance",
  },
  {
    icon: Users,
    title: "Owner Portal",
    description:
      "Monthly statements, payout tracking, property performance — self-serve.",
    href: "/features/owners",
  },
  {
    icon: Home,
    title: "Tenant Management",
    description:
      "Leases, charges, payments, documents. The full tenant lifecycle.",
    href: "/features/tenants",
  },
];

export default function FeatureShowcase() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
              Everything you need to run your portfolio.
            </h2>
            <p className="text-stone-500 text-lg mt-4">
              Five core modules. One platform. No bolt-ons.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <AnimateOnScroll key={f.href} delay={i * 80}>
              <Link
                href={f.href}
                className={`group block rounded-2xl border border-stone-200 bg-white p-8 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all ${
                  i >= 3 ? "lg:col-span-1 sm:col-span-1" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-5">
                  <f.icon size={24} className="text-orange-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-stone-900 group-hover:text-orange-600 transition-colors">
                  {f.title}
                </h3>
                <p className="text-stone-500 mt-2 leading-relaxed text-sm">
                  {f.description}
                </p>
                <span className="inline-block mt-4 text-sm font-medium text-orange-600 group-hover:translate-x-1 transition-transform">
                  Learn more &rarr;
                </span>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
