import React from "react";
import Image from "next/image";
import { Clock, Trophy, ChevronRight } from "lucide-react";

const otherTournaments = [
  {
    id: 1,
    title: "PUBG tournament",
    organiser: "GS ESPORTS",
    game: "BGMI",
    format: "Solo",
    entryFee: "Entry-Free",
    time: "3rd Aug at 10:00 pm",
    prize: "1000",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "PUBG tournament",
    organiser: "Red Bull",
    game: "BGMI",
    format: "Solo",
    entryFee: "Entry-Free",
    time: "3rd Aug at 10:00 pm",
    prize: "1000",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
  }
];

export default function MoreTournaments() {
  return (
    <div className="flex flex-col gap-6 mt-10">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-foreground">More tournaments for you</h3>
        <button className="text-sm font-bold text-primary">View All</button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
        {otherTournaments.map((t, i) => (
          <div key={i} className="flex-shrink-0 w-[280px] md:w-[320px] bg-card border border-border rounded-2xl overflow-hidden group cursor-pointer">
            <div className="relative h-40">
              <Image src={t.image} fill sizes="(max-width: 768px) 280px, 320px" alt={t.title} className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded border border-white/10 uppercase">
                  Registration Open
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded border border-white/10 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  670/800
                </span>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-3">
              <div>
                <h4 className="font-bold text-foreground">{t.title}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">By {t.organiser}</p>
              </div>
              <div className="flex gap-2">
                <span className="bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold px-2 py-0.5 rounded uppercase">{t.game}</span>
                <span className="bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold px-2 py-0.5 rounded uppercase">{t.format}</span>
                <span className="bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold px-2 py-0.5 rounded uppercase">{t.entryFee}</span>
              </div>
              <div className="flex flex-col gap-2 mt-1">
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  Starts {t.time}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-foreground font-bold">
                    <Trophy className="w-3.5 h-3.5 text-primary" />
                    Prize Pool- {t.prize}
                  </div>
                  <ChevronRight className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
