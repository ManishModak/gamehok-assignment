import React from "react";
import Image from "next/image";
import { featuredTournaments } from "@/lib/mockData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Users, Trophy } from "lucide-react";
import Link from "next/link";

export default function FeaturedCarousel() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h3 className="text-[16px] md:text-xl font-bold text-white">
          Featured Tournaments
        </h3>
        <button className="text-[12px] md:text-sm text-[#00E576] font-semibold hover:underline">View All</button>
      </div>

      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent className="px-1">
          {featuredTournaments.map((tournament) => (
            <CarouselItem key={tournament.id} className="basis-[85%] md:basis-[45%] pl-4 first:pl-0">
              <Link href={`/tournament/${tournament.id}`} className="rounded-[20px] overflow-hidden bg-gradient-to-b from-[#0B150F] to-[#040A07] border border-white/5 relative block cursor-pointer hover:border-[#00E576]/30 transition-colors shadow-lg">
                {/* Banner Image Area */}
                <div className="relative h-[160px] md:h-[200px] w-full">
                  <Image
                    src={tournament.image}
                    alt={tournament.title}
                    fill
                    sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 400px"
                    className="object-cover"
                  />
                  {/* Top Left: Status */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#1C2028]/90 backdrop-blur-md text-white text-[10px] md:text-xs font-semibold px-2.5 py-1.5 rounded-full border border-white/10">
                      {tournament.status}
                    </span>
                  </div>
                  {/* Top Right: Players */}
                  <div className="absolute top-3 right-3 bg-[#1C2028]/90 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-white" />
                    <span className="text-[10px] md:text-xs font-semibold text-white">
                      {tournament.filled}/{tournament.totalSpots}
                    </span>
                  </div>
                </div>

                {/* Prize Pool Bar */}
                <div className="bg-[#161B22] w-full border-t border-b border-white/5 px-4 py-2 flex items-center">
                  <div className="flex items-center gap-1.5 text-white text-[12px] md:text-sm font-semibold">
                    <Trophy className="w-4 h-4 text-[#FFD700]" />
                    <span>Prize Pool- {tournament.prizePool}</span>
                    {/* Coin Icon */}
                    <div className="w-3.5 h-3.5 bg-yellow-400 rounded-full flex items-center justify-center border border-orange-400 ml-0.5">
                       <span className="text-[6px] font-black text-white leading-none">G</span>
                    </div>
                  </div>
                </div>
                
                {/* Overlapping Team Logo (GS) */}
                <div className="absolute right-4 top-[140px] md:top-[170px] z-10 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#6B4B98] border-2 border-white/80 p-2 shadow-lg flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image src="/images/gs.png" alt="GS" fill className="object-contain" />
                  </div>
                </div>

                {/* Content Below Image */}
                <div className="p-4 md:p-5 pt-4">
                  <h4 className="font-bold text-[16px] md:text-xl text-white mb-3">
                    {tournament.title}
                  </h4>

                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="bg-[#092B16] border border-[#16502D] text-[#00E576] text-[11px] font-semibold px-2.5 py-1 rounded-md">
                      {tournament.game}
                    </span>
                    <span className="bg-[#092B16] border border-[#16502D] text-[#00E576] text-[11px] font-semibold px-2.5 py-1 rounded-md">
                      {tournament.format}
                    </span>
                    <span className="bg-[#092B16] border border-[#16502D] text-[#00E576] flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-md">
                      {tournament.entryFee} 
                      <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full flex items-center justify-center border border-orange-400">
                         <span className="text-[4px] font-black text-white leading-none">G</span>
                      </div>
                    </span>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
