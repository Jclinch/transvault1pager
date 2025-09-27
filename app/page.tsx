//app\page.tsx
import AboutSection from "@/components/About";
import Compliance from "@/components/Compliance";
import Contact from "@/components/Contact";
import FeatureOptions from "@/components/FeatureOptions";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import MarqueeLogos from "@/components/MarqueeLogos";
import Partners from "@/components/Partner";
import TabScroller from "@/components/ScrollSwapTabs";
import Services from "@/components/Services";
// import ScrollSwapTabs from "@/components/ScrollSwapTabs";
import TopNav from "@/components/TopNav";

export const metadata = {
  title: "Transvault - Regulated wallet & payout infrastructure",
};

export default function HomePage() {
  return (
    <main>
      <TopNav />
      <HeroCarousel />
      <FeatureOptions />
      <MarqueeLogos />
      <AboutSection />
      <TabScroller />
      <Compliance />
      <Partners />
      <Contact />
      <Footer />

     
    </main>
  );
}
