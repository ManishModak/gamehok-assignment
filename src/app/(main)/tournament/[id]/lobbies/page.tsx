import React from "react";
import Image from "next/image";

const lobbies = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Lobby ${i + 1}`,
  time: "Yet to be scheduled",
}));

const rounds = ["Round 3", "Round2", "Round 1"];

export default function LobbiesPage() {
  return (
    <div className="flex flex-col gap-6 md:gap-8 w-full mt-2">
      {/* Round Selectors */}
      <div className="flex items-center gap-2.5 md:gap-3">
        {rounds.map((round, i) => (
          <button
            key={round}
            className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-bold transition-all ${
              i === 0 
                ? "bg-transparent text-[#0CF285] border border-[#0CF285]" 
                : "bg-white/10 text-white/60 border border-transparent hover:bg-white/20 hover:text-white"
            }`}
          >
            {round}
          </button>
        ))}
      </div>

      {/* Lobbies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-5 pb-20 lg:pb-0">
        {lobbies.map((lobby) => (
          <div key={lobby.id} className="bg-[#0B150F] border border-white/5 rounded-xl p-4 md:p-5 flex flex-col gap-3 md:gap-4 hover:border-[#0CF285]/50 transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <h3 className="text-sm md:text-base font-bold text-white">{lobby.name}</h3>
              <button className="text-[10px] md:text-xs font-bold text-[#0CF285] uppercase tracking-wider">
                View Participants
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <Image src="/svgs/timer.svg" alt="Timer" width={16} height={16} className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />
              <span className="text-xs md:text-sm font-medium text-white/80">{lobby.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
