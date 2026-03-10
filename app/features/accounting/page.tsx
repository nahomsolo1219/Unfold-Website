import { Metadata } from "next";
import FeaturePageLayout from "@/components/FeaturePageLayout";

export const metadata: Metadata = {
  title: "Full Accounting Suite — Trust Accounting, Reports, 1099s | Unfold",
  description:
    "Chart of accounts, trust accounting, bank reconciliation, financial reports, 1099s, and Schedule E — all built in.",
};

export default function AccountingPage() {
  return (
    <FeaturePageLayout
      headline="Real accounting. Not a checkbox."
      subhead="Chart of accounts, trust accounting, bank reconciliation, financial reports, 1099s, and Schedule E — all built in. Not bolted on."
      heroScreenshot="feature-accounting.png"
      howItWorks={[
        "Transactions auto-categorize as they happen",
        "Reconcile against your bank statements",
        "Generate reports and tax documents in one click",
      ]}
      capabilities={[
        {
          title: "Chart of accounts",
          description:
            "28 IRS-mapped accounts. Customize to match your business.",
          screenshot: "feature-accounting.png",
        },
        {
          title: "Trust accounting",
          description:
            "Security deposits separated. Owner funds separated. State-compliant.",
        },
        {
          title: "Bank reconciliation",
          description:
            "Match books to bank. Check off cleared transactions.",
          screenshot: "feature-accounting-reconciliation.png",
        },
        {
          title: "Reports & tax prep",
          description:
            "P&L, balance sheet, cash flow, 1099s, Schedule E. Hand it to your CPA and they'll smile.",
          screenshot: "feature-accounting-reports.png",
        },
      ]}
      ctaText="Stop dreading tax season."
    />
  );
}
