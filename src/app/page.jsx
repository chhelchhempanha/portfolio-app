import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
