"use client";

import { useState } from "react";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import Button from "./ui/Button";

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function SavingsCalculator() {
  const [units, setUnits] = useState(200);
  const [avgRent, setAvgRent] = useState(1500);

  const annualRev = units * avgRent * 12;
  const buildiumCost = annualRev * 0.0299;
  const unfoldCost = annualRev * 0.003;
  const savings = buildiumCost - unfoldCost;
  const fiveYearSavings = savings * 5;

  return (
    <section className="py-20 sm:py-28 bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
              See how much you&apos;ll save.
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-6 sm:p-10">
            {/* Unit slider */}
            <div className="mb-8">
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-stone-700 font-medium">
                  How many units do you manage?
                </label>
                <span className="text-orange-600 font-bold text-lg font-display">
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
                className="w-full"
              />
              <div className="flex justify-between text-xs text-stone-400 mt-1">
                <span>10</span>
                <span>1,000</span>
              </div>
            </div>

            {/* Rent slider */}
            <div className="mb-10">
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-stone-700 font-medium">
                  Average monthly rent per unit
                </label>
                <span className="text-orange-600 font-bold text-lg font-display">
                  {formatCurrency(avgRent)}
                </span>
              </div>
              <input
                type="range"
                min={500}
                max={3000}
                step={50}
                value={avgRent}
                onChange={(e) => setAvgRent(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-stone-400 mt-1">
                <span>$500</span>
                <span>$3,000</span>
              </div>
            </div>

            {/* Results */}
            <div className="bg-stone-50 rounded-xl p-6 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-stone-500">With Buildium (2.99%):</span>
                <span className="text-stone-700 font-semibold calc-number">
                  {formatCurrency(buildiumCost)}/yr
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-500">With Unfold (0.3%):</span>
                <span className="text-stone-700 font-semibold calc-number">
                  {formatCurrency(unfoldCost)}/yr
                </span>
              </div>
              <hr className="border-stone-200" />
              <div className="flex justify-between items-center">
                <span className="text-stone-900 font-bold text-lg">
                  You save:
                </span>
                <span className="text-orange-600 font-bold text-2xl sm:text-3xl font-display calc-number">
                  {formatCurrency(savings)}/yr
                </span>
              </div>
            </div>

            <p className="text-center text-stone-500 mt-4">
              That&apos;s{" "}
              <span className="font-semibold text-stone-700">
                {formatCurrency(fiveYearSavings)}
              </span>{" "}
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
