import HeroSection from "@/components/hero-section";
import ContentSection from "@/components/content";
import Gallery from "@/components/gallery";
import FeaturesSection from "@/components/features";
import FooterSection from "@/components/footer";
import ServicesSection from "@/components/services";
import WallOfLoveSection from "@/components/testimonials";
import FAQs from "@/components/faq";


export default function Home() {
  return (
  <div>
    <HeroSection />
    <ContentSection />
    <Gallery />
    <ServicesSection />
    <FeaturesSection />
    < WallOfLoveSection />
    <FAQs />
    <FooterSection />

    <div>


    </div>
  </div>
  );
}
