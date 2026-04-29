import React from "react";
import { ArrowRight } from "lucide-react";

const battles = [
  {
    id: 1,
    title: "GS Daily Scrims",
    by: "GS Esports",
    desc: "Play GS daily scrims and sharpen your skills for the bigger events",
    logo: "GS",
    color: "from-purple-500/20 to-transparent",
  },
  {
    id: 2,
    title: "TMR Daily Scrims",
    by: "TMR Esports",
    desc: "Play TMR daily scrims and sharpen your skills for the bigger events",
    logo: "TMR",
    color: "from-amber-500/20 to-transparent",
  },
];

export default function BattlesSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm md:text-xl font-bold text-muted-foreground uppercase tracking-widest">
          Compete in Battles
        </h3>
        <button className="text-xs md:text-sm font-bold text-primary hover:underline">View All</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {battles.map((battle) => (
          <div 
            key={battle.id}
            className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all flex flex-col items-center text-center gap-4 cursor-pointer"
          >
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${battle.color} border border-border flex items-center justify-center`}>
              <span className="text-lg font-black text-foreground">{battle.logo}</span>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-foreground mb-1">{battle.title}</h4>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-3">By {battle.by}</p>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-[240px]">
                {battle.desc}
              </p>
            </div>

            <button className="flex items-center gap-2 text-primary text-sm font-bold mt-2 group-hover:gap-3 transition-all">
              Explore scrims <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
