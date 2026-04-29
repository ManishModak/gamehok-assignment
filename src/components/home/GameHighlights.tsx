import React from "react";
import Image from "next/image";
import { PlayCircle } from "lucide-react";

const highlights = [
  {
    id: 1,
    title: "Call of Duty",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "BGMI Tournaments",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Call of Duty",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "BGMI Tournaments",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
  },
];

export default function GameHighlights() {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm md:text-base font-bold text-foreground uppercase tracking-widest">
          Game Highlights
        </h3>
        <button className="text-xs font-bold text-primary hover:underline">View All</button>
      </div>

      <div className="flex flex-col gap-4">
        {highlights.map((item) => (
          <div key={item.id} className="flex flex-col gap-2 group cursor-pointer">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <PlayCircle className="w-10 h-10 text-white fill-white/20" />
              </div>
            </div>
            <p className="text-xs font-bold text-muted-foreground">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
