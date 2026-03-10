import Badge from "./ui/Badge";
import Button from "./ui/Button";
import BrowserFrame from "./ui/BrowserFrame";
import AnimateOnScroll from "./ui/AnimateOnScroll";

export default function Hero() {
  return (
    <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 bg-gradient-to-b from-white to-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <AnimateOnScroll>
            <div>
              <Badge>Property Management Software</Badge>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-bold text-stone-900 mt-6 leading-[1.1] tracking-tight">
                Stop giving away 3% of every rent payment.
              </h1>
              <p className="text-lg sm:text-xl text-stone-500 mt-6 max-w-lg leading-relaxed">
                Unfold is the full-featured property management platform that
                charges 0.3% per transaction — not 3%. Keep more of your
                revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button href="https://app.unfoldpm.com/register" size="lg">
                  Start Free Trial
                </Button>
                <Button href="#book-demo" variant="secondary" size="lg">
                  Book a Demo
                </Button>
              </div>
              <p className="text-sm text-stone-400 mt-5">
                14-day free trial &bull; No credit card required &bull; Setup in
                5 minutes
              </p>
            </div>
          </AnimateOnScroll>

          {/* Screenshot */}
          <AnimateOnScroll delay={200} className="lg:pl-4">
            <BrowserFrame filename="hero-dashboard.png" />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
