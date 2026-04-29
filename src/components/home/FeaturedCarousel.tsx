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
        <h3 className="text-sm md:text-xl font-bold text-muted-foreground uppercase tracking-wider">
          Featured Tournaments
        </h3>
        <button className="text-xs md:text-sm text-primary font-bold hover:underline">View All</button>
      </div>

      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent className="px-1">
          {featuredTournaments.map((tournament) => (
            <CarouselItem key={tournament.id} className="basis-[85%] md:basis-1/3 pl-4 first:pl-0">
              <Link href={`/tournament/${tournament.id}`} className="rounded-xl overflow-hidden bg-card border border-border relative block cursor-pointer hover:border-primary/50 transition-colors">
                {/* Banner Image */}
                <div className="relative h-32 w-full">
                  <Image
                    src={tournament.image}
                    alt={tournament.title}
                    fill
                    sizes="(max-width: 768px) 85vw, (max-width: 1200px) 33vw, 400px"
                    className="object-cover"
                  />
                  {/* Overlay tags */}
                  <div className="absolute top-2 left-2 flex items-center gap-1">
                    <span className="bg-background/80 backdrop-blur text-xs font-bold px-2 py-1 rounded border border-border">
                      {tournament.game}
                    </span>
                    <span className="bg-background/80 backdrop-blur text-xs font-bold px-2 py-1 rounded border border-border">
                      {tournament.format}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2 bg-background/80 backdrop-blur px-2 py-1 rounded border border-border flex items-center gap-1">
                    <Users className="w-3 h-3 text-primary" />
                    <span className="text-[10px] font-bold">
                      {tournament.filled}/{tournament.totalSpots}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-sm text-foreground truncate mr-2">
                      {tournament.title}
                    </h4>
                    <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full border border-primary/20 whitespace-nowrap">
                      {tournament.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs mt-3">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <span className="bg-background px-2 py-1 rounded border border-border">
                        {tournament.entryFee}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-primary font-bold bg-primary/10 px-2 py-1 rounded border border-primary/20">
                      <Trophy className="w-3 h-3" />
                      Prize Pool: {tournament.prizePool}
                    </div>
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
