"use client";

import { useState } from "react";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import Button from "./ui/Button";

function fmt(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function SavingsCalculator() {
  const [units, setUnits] = useState(200);
  const [avgRent, setAvgRent] = useState(1500);

  const annualRev = units * avgRent * 12;
  const competitorCost = annualRev * 0.0299;
  const unfoldCost = annualRev * 0.003;
  const savings = competitorCost - unfoldCost;
  const fiveYear = savings * 5;

  return (
    <section className="relative bg-dark-surface noise-bg py-20 sm:py-28 overflow-hidden">
      {/* Warm glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(249,115,22,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              See your savings. Not someone else&apos;s.
            </h2>
            <p className="text-stone-400 text-lg mt-4">
              Enter your numbers. Watch the math do the talking.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 sm:p-10">
            {/* Unit slider */}
            <div className="mb-8">
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-stone-300 font-medium text-sm">
                  Units you manage
                </label>
                <span className="text-orange-500 font-bold text-lg font-display">
                  {units}
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={1000}
                step={10}
                value={units}
                onChange={(e) => setUnits(Number(e.target.value))}
              />
              <div className="flex justify-between text-xs text-stone-600 mt-1">
                <span>10</span>
                <span>1,000</span>
              </div>
            </div>

            {/* Rent slider */}
            <div className="mb-10">
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-stone-300 font-medium text-sm">
                  Average monthly rent
                </label>
                <span className="text-orange-500 font-bold text-lg font-display">
                  {fmt(avgRent)}
                </span>
              </div>
              <input
                type="range"
                min={500}
                max={3000}
                step={50}
                value={avgRent}
                onChange={(e) => setAvgRent(Number(e.target.value))}
              />
              <div className="flex justify-between text-xs text-stone-600 mt-1">
                <span>$500</span>
                <span>$3,000</span>
              </div>
            </div>

            {/* Results */}
            <div className="bg-stone-900/50 rounded-xl p-6 space-y-3 border border-dark-card-border">
              <div className="flex justify-between items-center">
                <span className="text-stone-400 text-sm">Competitor (2.99%):</span>
                <span className="text-red-400 font-semibold">
                  {fmt(competitorCost)}/yr
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-400 text-sm">Unfold (0.3%):</span>
                <span className="text-orange-400 font-semibold">
                  {fmt(unfoldCost)}/yr
                </span>
              </div>
              <hr className="border-dark-card-border" />
              <div className="flex justify-between items-center">
                <span className="text-white font-bold text-lg">You save:</span>
                <span className="text-green-400 font-bold text-2xl sm:text-3xl font-display">
                  {fmt(savings)}/yr
                </span>
              </div>
            </div>

            <p className="text-center text-stone-400 mt-4">
              That&apos;s{" "}
              <span className="font-semibold text-white">{fmt(fiveYear)}</span>{" "}
              saved over 5 years.
            </p>

            <div className="text-center mt-8">
              <Button href="https://app.unfoldpm.com/register" size="lg">
                Start Free Trial
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
