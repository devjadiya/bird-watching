import AboutSection from "@/components/About";
import FaqSection from "@/components/Faq";
import HeroSection, { IncubationSection } from "@/components/Home";
// import RecentActivity from "@/components/RecentActivity";
import ShippingSection from "@/components/Shipping";

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* <RecentActivity /> */}
      {/* <IncubationSection /> */}
      <AboutSection />
      <FaqSection />
    </div>
  );
}
