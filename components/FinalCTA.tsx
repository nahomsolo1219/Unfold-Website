import AnimateOnScroll from "./ui/AnimateOnScroll";
import Button from "./ui/Button";

export default function FinalCTA() {
  return (
    <section className="relative bg-stone-950 noise-bg py-20 sm:py-28 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(249,115,22,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Stop subsidizing your software company&apos;s profits.
          </h2>
          <p className="text-stone-400 text-lg mt-4">
            Start your 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button href="https://app.unfoldpm.com/register" size="lg">
              Start Free Trial
            </Button>
            <Button href="#book-demo" variant="outline-light" size="lg">
              Book a Demo
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
