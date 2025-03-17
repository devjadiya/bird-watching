import AboutSection from "@/components/About";
import InterestForm from "@/components/Booktrip";
import FaqSection from "@/components/Faq";
import HeroSection, { IncubationSection } from "@/components/Home";
import ProductSection from "@/components/ProductSection";
// import RecentActivity from "@/components/RecentActivity";
import ShippingSection from "@/components/Shipping";

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* <RecentActivity /> */}
      {/* <IncubationSection /> */}
      <AboutSection />
      <ProductSection/>
      <InterestForm/>
      <FaqSection />
    </div>
  );
}
