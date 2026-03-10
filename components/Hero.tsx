import Badge from "./ui/Badge";
import Button from "./ui/Button";
import BrowserFrame from "./ui/BrowserFrame";
import AnimateOnScroll from "./ui/AnimateOnScroll";

export default function Hero() {
  return (
    <section className="relative bg-stone-950 noise-bg overflow-hidden">
      {/* Warm radial glow */}
      <div className="absolute inset-0 dot-grid" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(249,115,22,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 pt-32 sm:pt-40 pb-20 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
            <AnimateOnScroll>
              <Badge variant="dark-outline">Property Management Software</Badge>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[64px] font-bold text-white mt-6 leading-[1.08] tracking-tight">
                The property management platform that doesn&apos;t eat your
                profits.
              </h1>
              <p className="text-lg sm:text-xl text-stone-400 mt-6 max-w-2xl leading-relaxed">
                Full-featured property management at 0.3% transaction fees. Not
                3%. Not 2%.{" "}
                <span className="text-orange-500 font-medium">
                  Zero point three.
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
                <Button href="https://app.unfoldpm.com/register" size="lg">
                  Start Free Trial
                </Button>
                <Button href="#book-demo" variant="outline-light" size="lg">
                  Book a Demo
                </Button>
              </div>
              <p className="text-sm text-stone-500 mt-6">
                14-day free trial &bull; No credit card required &bull; Setup in
                5 minutes
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={200} className="mt-16 lg:mt-20">
            <div className="max-w-5xl mx-auto">
              <BrowserFrame filename="hero-dashboard.png" dark />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
