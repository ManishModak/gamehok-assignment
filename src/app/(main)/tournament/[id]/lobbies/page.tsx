import React from "react";
import { Clock } from "lucide-react";

const lobbies = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Lobby ${i + 1}`,
  time: "Yet to be scheduled",
}));

const rounds = ["Round 1", "Round2", "Round 3"];

export default function LobbiesPage() {
  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Round Selectors */}
      <div className="flex items-center gap-3">
        {rounds.map((round, i) => (
          <button
            key={round}
            className={`px-6 py-2 rounded-full text-sm font-bold border transition-all ${
              i === 0 
                ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_rgba(36,253,112,0.3)]" 
                : "bg-card text-muted-foreground border-border hover:border-primary/50"
            }`}
          >
            {round}
          </button>
        ))}
      </div>

      {/* Lobbies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {lobbies.map((lobby) => (
          <div key={lobby.id} className="bg-card border border-border rounded-2xl p-5 hover:border-primary/50 transition-colors group cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-foreground">{lobby.name}</h3>
              <button className="text-xs font-bold text-primary uppercase tracking-widest hover:underline">
                View Participants
              </button>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">{lobby.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
