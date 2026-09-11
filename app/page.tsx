import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Values from "@/components/Values";
import HowItWorks from "@/components/HowItWorks";
import AgeGroups from "@/components/AgeGroups";
import Trust from "@/components/Trust";
import PartnershipCTA from "@/components/PartnershipCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Values />
        <HowItWorks />
        <AgeGroups />
        <Trust />
        <PartnershipCTA />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
