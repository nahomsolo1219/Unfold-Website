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
      "We'll migrate your data, set up your account, and train your team personally.",
  },
];

export default function FoundingProgram() {
  return (
    <section id="founding" className="py-20 sm:py-28 bg-stone-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <Badge variant="dark">LIMITED</Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-6">
            Be one of our first 20 customers.
          </h2>
          <p className="text-stone-300 text-lg mt-4 max-w-2xl mx-auto">
            We&apos;re launching Unfold and looking for founding customers who
            want to shape the future of property management software.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 gap-6 mt-14">
          {perks.map((perk, i) => (
            <AnimateOnScroll key={perk.headline} delay={i * 100}>
              <div className="bg-stone-800 rounded-2xl p-8 text-left">
                <perk.icon size={28} className="text-orange-500 mb-4" />
                <h3 className="text-white font-bold text-lg">
                  {perk.headline}
                </h3>
                <p className="text-stone-400 mt-2 leading-relaxed">
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
            <p className="text-stone-400 text-sm mt-4">
              Only a few founding spots remaining
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
