"use client";

import { About } from "./About";
import { Achievements } from "./Achievements";
import { AIInnovation } from "./AIInnovation";
import { Blog } from "./Blog";
import { Careers } from "./Careers";
import { CaseStudies } from "./CaseStudies";
import { ClientLogos } from "./ClientLogos";
import { Contact } from "./Contact";
import { FAQ } from "./FAQ";
import { FinalCTA } from "./FinalCTA";
import { Hero } from "./Hero";
import { IndustryExpertise } from "./IndustryExpertise";
import { Pricing } from "./Pricing";
import { Process } from "./Process";
import { Services } from "./Services";
import { SiteShell } from "./SiteShell";
import { TechStack } from "./TechStack";
import { Testimonials } from "./Testimonials";
import { WhyChooseUs } from "./WhyChooseUs";

export function HomePage() {
  return (
    <SiteShell>
      <main className="flex-grow">
        <Hero />
        {/* <ClientLogos /> */}
        <Services />
        <IndustryExpertise />
        <WhyChooseUs />
        <Process />
        <About />
        {/* <CaseStudies /> */}
        <TechStack />
        <AIInnovation />
        {/* <Testimonials /> */}
        {/* <Achievements /> */}
        <Pricing />
        <FAQ />
        <Blog />
        {/* <Careers /> */}
        <Contact />
        <FinalCTA />
      </main>
    </SiteShell>
  );
}
