import Image from "next/image";
import ResultsSection from "./components/ResultsSection";
import AboutExpertSection from "./components/AboutExpertSection";
import ProvenSuccessSection from "./components/ProvenSuccessSection";
import WhatIDoSection from "./components/WhatIDoSection";
import ValuePropSection from "./components/ValuePropSection";
import ClientSuccessSection from "./components/ClientSuccessSection";
import AboutMeSection from "./components/AboutMeSection";
import FAQSection from "./components/FAQSection";
import FinalCTASection from "./components/FinalCTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <section className="bg-white max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
          Ads That Work
        </h1>
        <Image
          src="/home-page-sales.png"
          alt="Sales growth chart"
          width={800}
          height={600}
          className="mx-auto"
        />
      </section>

      <ResultsSection />

      <AboutExpertSection />

      <ProvenSuccessSection />

      <WhatIDoSection />

      <ValuePropSection />

      <ClientSuccessSection />

      <AboutMeSection />

      <FAQSection />

      <FinalCTASection />

      <Footer />
    </main>
  );
}
