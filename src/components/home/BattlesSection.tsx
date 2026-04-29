import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const battles = [
  {
    id: 1,
    title: "GS Daily Scrims",
    by: "GS Esports",
    desc: "Play GS daily scrims and sharpen your skills for the bigger events",
    logo: "/images/gs.png",
    bgColor: "bg-[#6B4B98]",
  },
  {
    id: 2,
    title: "TMR Daily Scrims",
    by: "TMR Esports",
    desc: "Play TMR daily scrims and sharpen your skills for the bigger events",
    logo: "/images/tmr.png",
    bgColor: "bg-black",
  },
];

export default function BattlesSection() {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] md:text-xl font-bold text-white">
          Compete in Battles
        </h3>
        <button className="text-[12px] md:text-sm text-[#00E576] font-semibold hover:underline">View All</button>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-5">
        {battles.map((battle) => (
          <div 
            key={battle.id}
            className="group p-4 md:p-6 rounded-[20px] bg-gradient-to-b from-[#34483C] to-[#22332A] border border-white/5 hover:border-[#00E576]/30 transition-all flex flex-col items-center text-center cursor-pointer shadow-sm"
          >
            <div className={`w-[52px] h-[52px] md:w-16 md:h-16 relative flex items-center justify-center rounded-full border border-white/80 ${battle.bgColor} mb-3 md:mb-4 overflow-hidden`}>
              <div className="relative w-full h-full p-2.5">
                <Image src={battle.logo} alt={battle.title} fill className="object-contain p-2" />
              </div>
            </div>
            
            <h4 className="text-[13px] md:text-lg font-bold text-white mb-0.5 leading-tight">{battle.title}</h4>
            <p className="text-[10px] md:text-sm text-gray-300 font-medium mb-3 md:mb-4">By {battle.by}</p>
            <p className="text-[10px] md:text-sm text-gray-400 leading-snug md:leading-relaxed max-w-[140px] md:max-w-[220px] mx-auto mb-4 md:mb-6 flex-1">
              {battle.desc}
            </p>

            <button className="flex items-center gap-1 text-[#00E576] text-[11px] md:text-sm font-medium mt-auto transition-all group-hover:gap-1.5">
              Explore scrims <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
