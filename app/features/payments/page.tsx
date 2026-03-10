import { Metadata } from "next";
import FeaturePageLayout from "@/components/FeaturePageLayout";

export const metadata: Metadata = {
  title: "Online Rent Collection — 0.3% Transaction Fees | Unfold",
  description:
    "Collect rent at 0.3% transaction fees with ACH, cards, and autopay. Powered by Stripe.",
};

export default function PaymentsPage() {
  return (
    <FeaturePageLayout
      headline="Get paid. Keep more."
      subhead="Stripe-powered rent collection at 0.3% transaction fees. ACH, cards, and autopay — your tenants pay online, you get paid fast, and you actually keep what you earn."
      heroScreenshot="feature-payments.png"
      howItWorks={[
        "Tenant logs in and pays via ACH, card, or autopay",
        "Payment is processed through Stripe at 0.3%",
        "Money lands in your account — fast",
      ]}
      capabilities={[
        {
          title: "Autopay",
          description:
            "Set it and forget it. Tenants enroll, rent hits your account on the 1st. No chasing.",
          screenshot: "feature-payments-autopay.png",
        },
        {
          title: "Multiple payment methods",
          description:
            "ACH, debit, credit. Let tenants pay how they want.",
          screenshot: "feature-payments-tracking.png",
        },
        {
          title: "Automatic late fees",
          description:
            "Late? The system knows. Fees applied automatically per your lease terms.",
        },
        {
          title: "Payment tracking",
          description:
            "Every payment, every unit. Filter, search, export.",
          screenshot: "feature-payments-tracking.png",
        },
      ]}
      whyBetter={{
        text: "For a 100-unit portfolio at $1,500/month average rent, switching from a 2.99% competitor to Unfold at 0.3% saves you $48,420 per year. That's real money back in your pocket.",
      }}
      ctaText="Start collecting rent the smart way."
    />
  );
}
