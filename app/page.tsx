//app\page.tsx
import AboutSection from "@/components/About";
import Compliance from "@/components/Compliance";
import FeatureOptions from "@/components/FeatureOptions";
import HeroCarousel from "@/components/HeroCarousel";
import MarqueeLogos from "@/components/MarqueeLogos";
import Partners from "@/components/Partner";
import TabScroller from "@/components/ScrollSwapTabs";
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

      {/* Footer */}
      <footer className="bg-primary text-foreground py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-semibold text-accent">
                Transvault
              </div>
              <div className="text-sm text-neutral">
                info@transvault.xyz
              </div>
            </div>
            <div className="text-sm text-neutral">
              © {new Date().getFullYear()} Transvault. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
