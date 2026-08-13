import Features from "@/components/landing/Features";
import FinalCTA from "@/components/landing/FinalCTA";
import Hero from "@/components/landing/Hero";
import Industries from "@/components/landing/Industries";
import Pricing from "@/components/landing/Pricing";
import Process from "@/components/landing/Process";
import TechStack from "@/components/landing/TechStack";
import WhyChoose from "@/components/landing/WhyChoose";

export default function MobilePage() {
  return (<>
    <Hero type="app" />
    <Industries />
    <WhyChoose />
    <Features />
    <Process />
    <TechStack />
    <Pricing />
    <FinalCTA />
  </>
  );
}