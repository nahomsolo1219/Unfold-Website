import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemStats from "@/components/ProblemStats";
import SavingsCalculator from "@/components/SavingsCalculator";
import FeatureShowcase from "@/components/FeatureShowcase";
import PricingPreview from "@/components/PricingPreview";
import FoundingProgram from "@/components/FoundingProgram";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemStats />
        <SavingsCalculator />
        <FeatureShowcase />
        <PricingPreview />
        <FoundingProgram />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
