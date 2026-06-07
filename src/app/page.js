import CareerCTASection from "@/components/CTASection";
import FeaturesSection from "@/components/FeaturesSection";
import JobSection from "@/components/JobSection";
import PricingSection from "@/components/PticingSection";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <StatsSection />
      <JobSection />
      <FeaturesSection />
      <PricingSection />
      <CareerCTASection />
    </div>
  );
}
