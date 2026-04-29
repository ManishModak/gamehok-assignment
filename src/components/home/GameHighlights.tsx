import React from "react";
import Image from "next/image";

const highlights = [
  {
    id: 1,
    title: "Call of Duty",
    image: "/images/call-of-duty-highlights section.png",
  },
  {
    id: 2,
    title: "BGMI Tournaments",
    image: "/images/bgmi-tournament.png",
  },
  {
    id: 3,
    title: "Call of Duty",
    image: "/images/call-of-duty-highlights section.png",
  },
  {
    id: 4,
    title: "BGMI Tournaments",
    image: "/images/bgmi-tournament.png",
  },
];

export default function GameHighlights() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between mb-1 md:mb-2">
        <h3 className="text-[16px] md:text-xl font-bold text-white">
          Game Highlights
        </h3>
        <button className="text-[12px] md:text-sm text-[#00E576] font-semibold hover:underline">
          View All
        </button>
      </div>

      {/* Mobile: Horizontal Layout */}
      <div className="flex lg:hidden overflow-x-auto gap-3 snap-x scroll-smooth pb-2 -mx-4 px-4 scrollbar-hide">
        {highlights.map((item) => (
          <div key={`mobile-${item.id}`} className="flex flex-col gap-2.5 group cursor-pointer w-[75%] md:w-[45%] flex-shrink-0 snap-start">
            <div className="relative aspect-video rounded-[16px] overflow-hidden bg-muted border border-white/5 shadow-sm">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 85vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-[14px] font-bold text-white pl-1">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop: Vertical Layout */}
      <div className="hidden lg:flex flex-col gap-6">
        {highlights.map((item) => (
          <div key={`desktop-${item.id}`} className="flex flex-col gap-3 group cursor-pointer w-full">
            <div className="relative aspect-video rounded-[16px] overflow-hidden bg-muted border border-white/5 shadow-sm">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-[16px] font-bold text-white pl-1">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
