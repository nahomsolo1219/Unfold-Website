import { Lock, MessageCircle, Zap, Users } from "lucide-react";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

const perks = [
  {
    icon: Lock,
    headline: "Locked-in pricing",
    description:
      "Your launch price is your forever price. No increases, ever.",
  },
  {
    icon: MessageCircle,
    headline: "Direct founder access",
    description:
      "Slack channel and phone line directly to the founder. Your feedback shapes the product.",
  },
  {
    icon: Zap,
    headline: "Priority feature requests",
    description:
      "Tell us what you need and watch it get built. Founding customers come first.",
  },
  {
    icon: Users,
    headline: "White-glove onboarding",
    description:
      "We\u2019ll migrate your data, set up your account, and train your team personally.",
  },
];

export default function FoundingProgram() {
  return (
    <section id="founding" className="py-20 sm:py-28 bg-orange-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <Badge>LIMITED — 20 spots</Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mt-6">
            Shape the future of property management.
          </h2>
          <p className="text-stone-600 text-lg mt-4 max-w-2xl mx-auto">
            We&apos;re launching Unfold and looking for founding customers who
            want to help build the PM software they actually want to use.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 gap-6 mt-14">
          {perks.map((perk, i) => (
            <AnimateOnScroll key={perk.headline} delay={i * 100}>
              <div className="bg-white rounded-2xl p-8 text-left border border-orange-100 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                  <perk.icon size={20} className="text-orange-600" />
                </div>
                <h3 className="text-stone-900 font-bold text-lg">
                  {perk.headline}
                </h3>
                <p className="text-stone-500 mt-2 leading-relaxed">
                  {perk.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={400}>
          <div className="mt-12">
            <Button href="https://app.unfoldpm.com/register" size="lg">
              Start Free Trial
            </Button>
            <p className="text-stone-500 text-sm mt-4">
              Only a few founding spots remaining
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
