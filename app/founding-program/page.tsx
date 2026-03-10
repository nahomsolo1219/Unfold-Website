import { Metadata } from "next";
import { Lock, MessageCircle, Zap, Users, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Founding Customer Program — Shape the Future of PM Software | Unfold",
  description:
    "Be one of our first 20 customers. Locked-in pricing, direct founder access, priority features, and white-glove onboarding.",
};

const perks = [
  {
    icon: Lock,
    headline: "Locked-in pricing",
    description:
      "Your launch price is your forever price. No increases, ever. As we grow and add features, your cost stays the same.",
  },
  {
    icon: MessageCircle,
    headline: "Direct founder access",
    description:
      "Private Slack channel and phone line directly to the founder. Your feedback doesn\u2019t go into a ticket queue \u2014 it goes to the person building the product.",
  },
  {
    icon: Zap,
    headline: "Priority feature requests",
    description:
      "Tell us what you need and watch it get built. Founding customers\u2019 requests go to the top of the roadmap. You\u2019re not just using the product \u2014 you\u2019re shaping it.",
  },
  {
    icon: Users,
    headline: "White-glove onboarding",
    description:
      "We\u2019ll migrate your data from your current platform, set up your account, configure your properties, and train your team personally. Zero friction.",
  },
];

const idealFor = [
  "Property managers with 20-200+ units looking for better software",
  "Landlords frustrated with high transaction fees eating into margins",
  "Teams ready to try something new and provide honest feedback",
  "Anyone who wants a direct line to the people building their tools",
];

export default function FoundingProgramPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero — dark */}
        <section className="relative bg-stone-950 noise-bg overflow-hidden">
          <div className="absolute inset-0 dot-grid" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(249,115,22,0.08) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 pt-32 sm:pt-40 pb-20 sm:pb-28">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <AnimateOnScroll>
                <Badge variant="dark-outline">
                  LIMITED — 20 FOUNDING SPOTS
                </Badge>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-bold text-white mt-6 leading-[1.1] tracking-tight">
                  Help us build the PM software you actually want.
                </h1>
                <p className="text-lg sm:text-xl text-stone-400 mt-6 max-w-2xl mx-auto leading-relaxed">
                  20 founding customers. Perks that never expire. A direct line
                  to the team building Unfold.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                  <Button href="https://app.unfoldpm.com/register" size="lg">
                    Claim Your Spot
                  </Button>
                  <Button href="#book-demo" variant="outline-light" size="lg">
                    Book a Demo
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Perks — light */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900">
                  What founding customers get.
                </h2>
                <p className="text-stone-500 text-lg mt-4">
                  These perks are permanent. They don&apos;t expire.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid sm:grid-cols-2 gap-8">
              {perks.map((perk, i) => (
                <AnimateOnScroll key={perk.headline} delay={i * 100}>
                  <div className="rounded-2xl border border-stone-200 p-8">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-5">
                      <perk.icon size={24} className="text-orange-600" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-stone-900">
                      {perk.headline}
                    </h3>
                    <p className="text-stone-600 mt-3 leading-relaxed">
                      {perk.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for — light accent */}
        <section className="py-20 sm:py-24 bg-orange-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 text-center mb-10">
                Who this is for.
              </h2>
              <ul className="space-y-4">
                {idealFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight
                      size={18}
                      className="text-orange-600 mt-1 shrink-0"
                    />
                    <span className="text-stone-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimateOnScroll>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-10">
                How it works.
              </h2>
            </AnimateOnScroll>
            <div className="space-y-8 text-left">
              {[
                {
                  step: "1",
                  title: "Start your free trial",
                  desc: "Sign up like any other customer. 14 days, no credit card.",
                },
                {
                  step: "2",
                  title: "We reach out personally",
                  desc: "Within 24 hours, you\u2019ll hear from the founder. We\u2019ll set up your private Slack channel and schedule onboarding.",
                },
                {
                  step: "3",
                  title: "We migrate your data",
                  desc: "Send us your export from Buildium, AppFolio, or wherever you are. We handle the migration.",
                },
                {
                  step: "4",
                  title: "You shape the product",
                  desc: "Use Unfold, give us feedback, request features. We build what founding customers need first.",
                },
              ].map((s, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm shrink-0">
                      {s.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 text-lg">
                        {s.title}
                      </h3>
                      <p className="text-stone-600 mt-1">{s.desc}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA — dark */}
        <section className="relative bg-stone-950 noise-bg py-20 sm:py-24 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(249,115,22,0.07) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimateOnScroll>
              <Badge variant="dark-outline">Only a few spots remaining</Badge>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-6">
                Don&apos;t miss your chance to be a founder.
              </h2>
              <p className="text-stone-400 text-lg mt-4">
                Once all 20 spots are filled, the founding program closes
                permanently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <Button href="https://app.unfoldpm.com/register" size="lg">
                  Claim Your Founding Spot
                </Button>
                <Button href="#book-demo" variant="outline-light" size="lg">
                  Book a Demo First
                </Button>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
