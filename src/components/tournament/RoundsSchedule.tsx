import React from "react";

const rounds = [
  { name: "Qualifiers (Round 1)", format: "Single Elimination", rule: "Top 4 to next round", time: "3rd Aug, 10:00 pm" },
  { name: "Qualifiers (Round 1)", format: "Single Elimination", rule: "Top 4 to next round", time: "3rd Aug, 10:00 pm" },
  { name: "Qualifiers (Round 1)", format: "Single Elimination", rule: "Top 4 to next round", time: "3rd Aug, 10:00 pm" },
];

export default function RoundsSchedule() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-bold text-foreground">Rounds and Schedule</h3>
      <div className="flex flex-col gap-3">
        {rounds.map((round, i) => (
          <div key={i} className="bg-card border border-border p-4 rounded-xl flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground">{round.name}</span>
                <span className="text-xs text-muted-foreground">{round.rule}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20 uppercase">
                  {round.format}
                </span>
                <span className="text-xs font-bold text-muted-foreground mt-1">{round.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
