import AnimateOnScroll from "./ui/AnimateOnScroll";
import Button from "./ui/Button";

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-orange-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            Your PM software shouldn&apos;t eat your profits.
          </h2>
          <p className="text-stone-500 text-lg mt-4">
            Start your 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button href="https://app.unfoldpm.com/register" size="lg">
              Start Free Trial
            </Button>
            <Button href="#book-demo" variant="secondary" size="lg">
              Book a Demo
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
