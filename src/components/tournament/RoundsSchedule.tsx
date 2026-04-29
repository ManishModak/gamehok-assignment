import React from "react";

const rounds = [
  { name: "Qualifiers (Round 1)", format: "Single Elimination", rule: "Top 4 to next round", time: "3rd Aug, 10:00 pm" },
  { name: "Qualifiers (Round 1)", format: "Single Elimination", rule: "Top 4 to next round", time: "3rd Aug, 10:00 pm" },
  { name: "Qualifiers (Round 1)", format: "Single Elimination", rule: "Top 4 to next round", time: "3rd Aug, 10:00 pm" },
];

export default function RoundsSchedule() {
  return (
    <div className="flex flex-col gap-4 mt-2">
      <h3 className="text-lg md:text-xl font-bold text-white">Rounds and Schedule</h3>
      <div className="flex flex-col gap-3">
        {rounds.map((round, i) => (
          <div key={i} className="bg-[#0B150F] border border-white/5 p-4 md:p-5 rounded-[16px] flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="text-sm md:text-base font-bold text-white">{round.name}</span>
                <span className="text-xs text-white/50">{round.rule}</span>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span className="text-[9px] md:text-[10px] font-bold text-[#00E576] bg-[#092B16] px-2 py-0.5 rounded border border-[#16502D] uppercase tracking-wider">
                  {round.format}
                </span>
                <span className="text-[11px] md:text-xs font-bold text-white/50">{round.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
