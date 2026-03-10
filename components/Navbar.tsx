"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, CreditCard, BookOpen, Wrench, Users, Home } from "lucide-react";

const featureLinks = [
  { label: "Online Rent Collection", desc: "ACH, cards, autopay at 0.3%", href: "/features/payments", icon: CreditCard },
  { label: "Full Accounting", desc: "Trust accounting, reports, 1099s", href: "/features/accounting", icon: BookOpen },
  { label: "Maintenance & Work Orders", desc: "Requests to resolution", href: "/features/maintenance", icon: Wrench },
  { label: "Owner Portal", desc: "Statements and payout tracking", href: "/features/owners", icon: Users },
  { label: "Tenant Management", desc: "Leases, charges, payments", href: "/features/tenants", icon: Home },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setFeaturesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 nav-blur shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            href="/"
            className={`font-display text-2xl font-bold transition-colors ${
              scrolled ? "text-stone-900" : "text-white"
            }`}
          >
            Unfold
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setFeaturesOpen(!featuresOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-stone-600 hover:text-stone-900"
                    : "text-stone-300 hover:text-white"
                }`}
              >
                Features
                <ChevronDown
                  size={16}
                  className={`transition-transform ${featuresOpen ? "rotate-180" : ""}`}
                />
              </button>

              {featuresOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-white rounded-xl shadow-xl border border-stone-200 p-2 z-50">
                  {featureLinks.map((f) => (
                    <Link
                      key={f.href}
                      href={f.href}
                      onClick={() => setFeaturesOpen(false)}
                      className="flex items-start gap-3 rounded-lg p-3 hover:bg-stone-50 transition-colors"
                    >
                      <f.icon size={20} className="text-orange-600 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-stone-900">{f.label}</div>
                        <div className="text-xs text-stone-500">{f.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-stone-600 hover:text-stone-900"
                  : "text-stone-300 hover:text-white"
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/founding-program"
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-stone-600 hover:text-stone-900"
                  : "text-stone-300 hover:text-white"
              }`}
            >
              Founding Program
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#book-demo"
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-stone-700 hover:text-orange-600"
                  : "text-stone-300 hover:text-white"
              }`}
            >
              Book a Demo
            </Link>
            <Link
              href="https://app.unfoldpm.com/register"
              className="bg-orange-600 text-white px-5 py-2 rounded-xl text-sm font-semibold btn-hover hover:bg-orange-500 shadow-lg shadow-orange-600/20 transition-all"
            >
              Start Free Trial &rarr;
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 ${scrolled ? "text-stone-700" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider px-3 pt-2 pb-1">
              Features
            </p>
            {featureLinks.map((f) => (
              <Link
                key={f.href}
                href={f.href}
                onClick={() => setMobileOpen(false)}
                className="block text-stone-700 hover:text-orange-600 font-medium py-2 px-3 rounded-lg hover:bg-stone-50"
              >
                {f.label}
              </Link>
            ))}
            <hr className="border-stone-200 my-2" />
            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="block text-stone-700 hover:text-orange-600 font-medium py-2 px-3"
            >
              Pricing
            </Link>
            <Link
              href="/founding-program"
              onClick={() => setMobileOpen(false)}
              className="block text-stone-700 hover:text-orange-600 font-medium py-2 px-3"
            >
              Founding Program
            </Link>
            <hr className="border-stone-200 my-2" />
            <Link
              href="#book-demo"
              onClick={() => setMobileOpen(false)}
              className="block text-stone-700 font-medium py-2 px-3"
            >
              Book a Demo
            </Link>
            <Link
              href="https://app.unfoldpm.com/register"
              className="block bg-orange-600 text-white text-center px-5 py-3 rounded-xl font-semibold mt-2"
            >
              Start Free Trial &rarr;
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
