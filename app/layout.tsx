import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unfold — Property Management Software | 0.3% Transaction Fees",
  description:
    "Full-featured property management platform at 0.3% transaction fees. Tenant management, online payments, accounting, maintenance, owner portals. Stop overpaying.",
  keywords:
    "property management software, rental management, tenant management, landlord software, property accounting, rent collection",
  openGraph: {
    title: "Unfold — Stop Giving Away 3% of Every Rent Payment",
    description:
      "Property management software with 0.3% transaction fees. Save tens of thousands per year.",
    url: "https://unfoldpm.com",
    siteName: "Unfold",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unfold — Property Management Software",
    description: "Full-featured PM platform at 0.3% transaction fees.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}
