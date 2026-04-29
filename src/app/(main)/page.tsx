import SocialHero from "@/components/home/SocialHero";
import FeaturedCarousel from "@/components/home/FeaturedCarousel";
import PromoBanner from "@/components/home/PromoBanner";
import GamesGrid from "@/components/home/GamesGrid";
import GameHighlights from "@/components/home/GameHighlights";
import BattlesSection from "@/components/home/BattlesSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full w-full px-4 md:px-8 lg:px-10 py-6 gap-6 md:gap-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
        {/* Main Content Area (left side on desktop) */}
        <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-10 md:gap-14">
          <SocialHero />
          <FeaturedCarousel />
          
          {/* Mobile only Promo Banner (Bouncy Bird) */}
          <div className="lg:hidden">
            <PromoBanner />
          </div>
          
          <GamesGrid />
          <BattlesSection />
          
          {/* Mobile only Highlights */}
          <div className="lg:hidden">
            <GameHighlights />
          </div>
        </div>
        
        {/* Sidebar/Right Column area for Desktop */}
        <div className="hidden lg:flex lg:col-span-4 xl:col-span-3 flex-col gap-10">
          <GameHighlights />
        </div>
      </div>
    </div>
  );
}
