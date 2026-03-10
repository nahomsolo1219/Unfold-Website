import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemStats from "@/components/ProblemStats";
import SavingsCalculator from "@/components/SavingsCalculator";
import FeatureShowcase from "@/components/FeatureShowcase";
import PricingComparison from "@/components/PricingComparison";
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
        <PricingComparison />
        <FoundingProgram />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
