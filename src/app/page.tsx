import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import ProblemSection from "@/components/ProblemSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import DetailFeatures from "@/components/DetailFeatures";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <TrustBadges />
        <ProblemSection />
        <FeaturesGrid />
        <DetailFeatures />
        <Testimonials />
        <CTA />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
