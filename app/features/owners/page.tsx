import { Metadata } from "next";
import FeaturePageLayout from "@/components/FeaturePageLayout";

export const metadata: Metadata = {
  title: "Owner Portal & Statements | Unfold",
  description:
    "Owners see what's happening with their investment. Statements, payouts, performance — all self-serve.",
};

export default function OwnersPage() {
  return (
    <FeaturePageLayout
      headline="Happy owners. Less email."
      subhead="Owners see what's happening with their investment. Statements, payouts, performance — all self-serve."
      heroScreenshot="feature-owners.png"
      howItWorks={[
        "You manage properties — the system tracks per owner",
        "Owners log in to see properties, statements, and payouts",
        "Generate and send statements with one click",
      ]}
      capabilities={[
        {
          title: "Owner portal",
          description:
            "Own login. Properties, statements, payouts, documents.",
          screenshot: "feature-owners.png",
        },
        {
          title: "Automated statements",
          description:
            "Generated from real accounting data. One click.",
          screenshot: "feature-owners-statement.png",
        },
        {
          title: "Payout tracking",
          description: "ACH, check, wire. Complete history.",
        },
        {
          title: "1099-MISC",
          description:
            "Auto-generated for owners paid $600+.",
        },
      ]}
      ctaText="Keep your owners in the loop."
    />
  );
}
