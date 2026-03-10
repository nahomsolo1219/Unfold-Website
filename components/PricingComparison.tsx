import AnimateOnScroll from "./ui/AnimateOnScroll";
import Button from "./ui/Button";
import { Check } from "lucide-react";

const rows = [
  { feature: "Transaction Fee", unfold: "0.3%", buildium: "2.99%", appfolio: "2.49%+", isHighlight: true },
  { feature: "Monthly Base Price", unfold: "$29/mo", buildium: "$55/mo+", appfolio: "$1.49/unit/mo" },
  { feature: "Tenant Screening", unfold: true, buildium: true, appfolio: true },
  { feature: "Online Payments", unfold: true, buildium: true, appfolio: true },
  { feature: "Full Accounting", unfold: true, buildium: true, appfolio: true },
  { feature: "Trust Accounting", unfold: true, buildium: true, appfolio: true },
  { feature: "Owner Portal", unfold: true, buildium: true, appfolio: true },
  { feature: "Maintenance Tracking", unfold: true, buildium: true, appfolio: true },
  { feature: "1099 Generation", unfold: true, buildium: true, appfolio: true },
  { feature: "Work Orders", unfold: true, buildium: true, appfolio: true },
  { feature: "Public Listings", unfold: true, buildium: true, appfolio: true },
];

function CellValue({ value, isUnfold, isHighlight }: { value: string | boolean; isUnfold?: boolean; isHighlight?: boolean }) {
  if (typeof value === "boolean") {
    return <Check size={20} className="text-green-500 mx-auto" />;
  }
  return (
    <span
      className={
        isUnfold && isHighlight
          ? "text-orange-600 font-bold text-xl font-display"
          : ""
      }
    >
      {value}
    </span>
  );
}

export default function PricingComparison() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-stone-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
              See how we compare.
            </h2>
            <p className="text-stone-500 text-lg mt-4">
              Full-featured property management at a fraction of the cost.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="bg-white rounded-2xl shadow-lg border border-stone-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="comparison-table w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-stone-200">
                    <th className="text-left font-medium text-stone-500 py-4 px-4 sm:px-6">
                      Feature
                    </th>
                    <th className="text-center font-bold text-orange-600 py-4 px-4 sm:px-6 bg-orange-50 border-t-4 border-t-orange-500">
                      Unfold
                    </th>
                    <th className="text-center font-medium text-stone-500 py-4 px-4 sm:px-6">
                      Buildium
                    </th>
                    <th className="text-center font-medium text-stone-500 py-4 px-4 sm:px-6">
                      AppFolio
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-b border-stone-100 hover:bg-stone-50 transition-colors"
                    >
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-stone-700">
                        {row.feature}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-center bg-orange-50/50">
                        <CellValue value={row.unfold} isUnfold isHighlight={row.isHighlight} />
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-center text-stone-600">
                        <CellValue value={row.buildium} />
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-center text-stone-600">
                        <CellValue value={row.appfolio} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="text-center mt-10">
            <Button href="https://app.unfoldpm.com/register" size="lg">
              Start your free trial — no credit card required
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
