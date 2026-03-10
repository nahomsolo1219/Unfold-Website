import { Metadata } from "next";
import FeaturePageLayout from "@/components/FeaturePageLayout";

export const metadata: Metadata = {
  title:
    "Maintenance & Work Orders — Request to Resolution | Unfold",
  description:
    "Tenants submit. You dispatch. Vendors complete. Expenses auto-populate. Loop closed.",
};

export default function MaintenancePage() {
  return (
    <FeaturePageLayout
      headline="From 'my sink is broken' to 'it's fixed.' Tracked every step."
      subhead="Tenants submit. You dispatch. Vendors complete. Expenses auto-populate. Loop closed."
      heroScreenshot="feature-maintenance.png"
      howItWorks={[
        "Tenant submits request with photos and description",
        "You create a work order and assign a vendor",
        "Vendor completes work — cost flows to accounting automatically",
      ]}
      capabilities={[
        {
          title: "Tenant requests",
          description:
            "Photos, descriptions, priorities. No phone tag.",
          screenshot: "feature-maintenance.png",
        },
        {
          title: "Work orders",
          description:
            "Create, assign, schedule, track costs.",
          screenshot: "feature-maintenance-workorder.png",
        },
        {
          title: "Vendor dispatch",
          description:
            "Vendors see assignments in their portal. Real-time updates.",
          screenshot: "feature-maintenance-vendor.png",
        },
        {
          title: "Auto-expense",
          description:
            "Completed work order = accounting expense. No double entry.",
        },
      ]}
      ctaText="Close the maintenance loop."
    />
  );
}
