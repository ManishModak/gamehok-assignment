import React from "react";
import Image from "next/image";
import { games } from "@/lib/mockData";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GamesGrid() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h3 className="text-sm md:text-xl font-bold text-muted-foreground uppercase tracking-wider">
          Play Tournament by Games
        </h3>
        <button className="text-xs md:text-sm font-bold text-primary md:hidden">View All</button>
      </div>
      
      <div className="relative group">
        {/* Mobile Grid / Desktop Scroll */}
        <div className="grid grid-cols-3 gap-3 md:flex md:gap-8 md:overflow-x-auto md:pb-4 scrollbar-hide snap-x scroll-smooth">
          {games.map((game) => (
            <div 
              key={game.id} 
              className="flex flex-col items-center gap-2 md:gap-5 md:flex-shrink-0 md:w-64 snap-start"
            >
              <div className="relative w-full aspect-square md:aspect-[4/3] rounded-xl md:rounded-3xl overflow-hidden border border-border group/card cursor-pointer">
                <Image
                  src={game.image}
                  alt={game.name}
                  fill
                  sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 256px"
                  className="object-cover group-hover/card:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="text-[10px] md:text-sm font-black text-center text-foreground uppercase tracking-widest">
                {game.name}
              </p>
            </div>
          ))}
        </div>
        
        {/* Decorative Arrows matching Figma/Screenshot - Desktop Only */}
        <div className="hidden md:block">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#24FD70] flex items-center justify-center text-black shadow-[0_0_20px_rgba(36,253,112,0.4)] z-10 hover:scale-110 transition-transform">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-[#24FD70] flex items-center justify-center text-black shadow-[0_0_20px_rgba(36,253,112,0.4)] z-10 hover:scale-110 transition-transform">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
