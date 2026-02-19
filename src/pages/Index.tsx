import HeroSection from "@/components/HeroSection";
import ValueProps from "@/components/ValueProps";
import HowItWorks from "@/components/HowItWorks";
import TodaysDrops from "@/components/TodaysDrops";
import FeaturedItems from "@/components/FeaturedItems";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function Index() {
  return (
    <>
      <HeroSection />
      <ValueProps />
      <HowItWorks />
      <TodaysDrops />
      <FeaturedItems />
      <Testimonials />
      <FAQ />
    </>
  );
}
