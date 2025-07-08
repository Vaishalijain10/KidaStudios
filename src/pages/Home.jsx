import MainSection from "../components/MainSection";
import CaseStudy from "../components/CaseStudy";
import AppGames from "../components/AppGames";
import Services from "../components/Services";
import ProfessionalUnite from "../components/ProfessionalUnite";
import ContactUs from "../components/ContactUs";

export default function Home() {
  return (
    <div className="scroll-smooth items-center justify-center">
      {/* main section + images */}
      <MainSection />
      {/* apps and games card  */}
      <AppGames />
      {/* case study  */}
      <CaseStudy />
      {/* our services */}
      <Services />
      {/* Paws & Professionals unite */}
      <ProfessionalUnite />
      {/* email us */}
      <ContactUs />
    </div>
  );
}
