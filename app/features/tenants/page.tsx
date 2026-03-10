import { Metadata } from "next";
import FeaturePageLayout from "@/components/FeaturePageLayout";

export const metadata: Metadata = {
  title: "Tenant Management — Full Lifecycle | Unfold",
  description:
    "Application to move-out. Leases, charges, payments, documents — all connected.",
};

export default function TenantsPage() {
  return (
    <FeaturePageLayout
      headline="Every tenant. Every lease. Every dollar. One place."
      subhead="Application to move-out. Leases, charges, payments, documents — all connected."
      heroScreenshot="feature-tenants.png"
      howItWorks={[
        "Tenant applies online and gets approved",
        "Lease created with portal access and automated charges",
        "Move-out with deposit accounting and refund processing",
      ]}
      capabilities={[
        {
          title: "Tenant portal",
          description:
            "Pay rent, submit maintenance, view lease. Self-serve.",
          screenshot: "feature-tenants-portal.png",
        },
        {
          title: "Lease management",
          description:
            "Create, track, manage. See expirations at a glance.",
          screenshot: "feature-tenants-lease.png",
        },
        {
          title: "Automated charges",
          description:
            "Rent auto-generated. Reminders sent. Late fees applied.",
        },
        {
          title: "Security deposits",
          description:
            "Full ledger. Deductions documented. Refunds processed.",
        },
      ]}
      ctaText="Manage tenants, not spreadsheets."
    />
  );
}
