import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Founding Program", href: "#founding" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-stone-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo */}
          <div>
            <Link
              href="/"
              className="font-display text-2xl font-bold text-white"
            >
              Unfold
            </Link>
            <p className="text-stone-400 text-sm mt-3">
              Property management software that doesn&apos;t eat your profits.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-stone-300 font-semibold text-sm uppercase tracking-wider mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-stone-400 hover:text-orange-500 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center">
          <p className="text-stone-500 text-sm">
            &copy; 2026 Unfold Property Management LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
