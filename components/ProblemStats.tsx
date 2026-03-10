"use client";

import { useEffect, useRef, useState } from "react";
import AnimateOnScroll from "./ui/AnimateOnScroll";

function useCountUp(end: number, duration: number = 1500) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { value, ref };
}

function formatCurrency(n: number): string {
  return "$" + n.toLocaleString("en-US");
}

const stats = [
  {
    amount: 53820,
    label: "What you pay with Buildium",
    sublabel: "2.99% transaction fee",
    color: "text-red-500",
    bg: "bg-red-50 border-red-100",
  },
  {
    amount: 5400,
    label: "What you pay with Unfold",
    sublabel: "0.3% transaction fee",
    color: "text-orange-600",
    bg: "bg-orange-50 border-orange-100",
  },
  {
    amount: 48420,
    label: "Back in your pocket. Every year.",
    sublabel: "That\u2019s $242,100 over 5 years.",
    color: "text-green-600",
    bg: "bg-green-50 border-green-200",
    highlight: true,
  },
];

function StatCard({
  stat,
  delay,
}: {
  stat: (typeof stats)[0];
  delay: number;
}) {
  const { value, ref } = useCountUp(stat.amount);

  return (
    <AnimateOnScroll delay={delay}>
      <div
        ref={ref}
        className={`rounded-2xl border p-8 ${stat.bg} ${
          stat.highlight ? "ring-2 ring-green-200 sm:scale-105" : ""
        }`}
      >
        <p className={`font-display text-4xl sm:text-5xl font-bold ${stat.color}`}>
          {formatCurrency(value)}
          {!stat.highlight && "/yr"}
        </p>
        <p className="text-stone-700 font-medium mt-3">{stat.label}</p>
        <p className="text-stone-500 text-sm mt-1">{stat.sublabel}</p>
      </div>
    </AnimateOnScroll>
  );
}

export default function ProblemStats() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            The math your PM software doesn&apos;t want you to see.
          </h2>
          <p className="text-stone-500 text-lg mt-4 max-w-2xl mx-auto">
            Here&apos;s what transaction fees actually cost a 100-unit portfolio
            at $1,500 average rent.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-3 gap-6 mt-14">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
