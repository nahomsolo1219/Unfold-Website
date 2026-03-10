import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import BrowserFrame from "./ui/BrowserFrame";
import Button from "./ui/Button";

interface Capability {
  title: string;
  description: string;
  screenshot?: string;
}

interface FeaturePageLayoutProps {
  headline: string;
  subhead: string;
  heroScreenshot: string;
  howItWorks: string[];
  capabilities: Capability[];
  whyBetter?: { text: string };
  ctaText: string;
}

export default function FeaturePageLayout({
  headline,
  subhead,
  heroScreenshot,
  howItWorks,
  capabilities,
  whyBetter,
  ctaText,
}: FeaturePageLayoutProps) {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero — dark */}
        <section className="relative bg-stone-950 noise-bg overflow-hidden">
          <div className="absolute inset-0 dot-grid" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(249,115,22,0.07) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 pt-32 sm:pt-40 pb-20 sm:pb-28">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <AnimateOnScroll>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight">
                  {headline}
                </h1>
                <p className="text-lg sm:text-xl text-stone-400 mt-6 max-w-2xl mx-auto leading-relaxed">
                  {subhead}
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200} className="mt-14 max-w-4xl mx-auto">
                <BrowserFrame filename={heroScreenshot} dark />
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* How it works — light */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 text-center">
                How it works
              </h2>
            </AnimateOnScroll>
            <div className="mt-12 flex flex-col sm:flex-row items-start justify-center gap-4 sm:gap-0">
              {howItWorks.map((step, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="flex items-center gap-4 sm:flex-col sm:text-center sm:gap-3 sm:px-6">
                    <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {step}
                    </p>
                  </div>
                  {i < howItWorks.length - 1 && (
                    <div className="hidden sm:block w-12 h-px bg-stone-200 mt-5 mx-auto" />
                  )}
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities — alternating */}
        <section className="py-20 sm:py-24 bg-stone-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
            {capabilities.map((cap, i) => {
              const reversed = i % 2 === 1;
              return (
                <AnimateOnScroll key={cap.title}>
                  <div
                    className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
                  >
                    <div className={reversed ? "lg:order-2" : ""}>
                      {cap.screenshot ? (
                        <BrowserFrame filename={cap.screenshot} />
                      ) : (
                        <div className="aspect-[16/10] bg-stone-100 rounded-xl border border-stone-200 flex items-center justify-center">
                          <span className="text-stone-400 text-sm">Screenshot placeholder</span>
                        </div>
                      )}
                    </div>
                    <div className={reversed ? "lg:order-1" : ""}>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
                        {cap.title}
                      </h3>
                      <p className="text-stone-600 text-lg mt-4 leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </section>

        {/* Why it's better */}
        {whyBetter && (
          <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <AnimateOnScroll>
                <p className="text-stone-600 text-lg leading-relaxed">
                  {whyBetter.text}
                </p>
              </AnimateOnScroll>
            </div>
          </section>
        )}

        {/* CTA — dark */}
        <section className="relative bg-stone-950 noise-bg py-20 sm:py-24 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(249,115,22,0.06) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimateOnScroll>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                {ctaText}
              </h2>
              <p className="text-stone-400 text-lg mt-4">
                14-day free trial. No credit card required.
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
      </main>
      <Footer />
    </>
  );
}
