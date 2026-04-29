import React from "react";
import Image from "next/image";
import { Users, Calendar, Clock, Trophy } from "lucide-react";
import RoundsSchedule from "@/components/tournament/RoundsSchedule";
import HowToJoin from "@/components/tournament/HowToJoin";
import MoreTournaments from "@/components/tournament/MoreTournaments";

export default function TournamentOverview() {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {/* Left Column */}
        <div className="md:col-span-8 flex flex-col gap-8 md:gap-12">
          {/* Details Grid */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-foreground">Details</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-card border border-border p-4 rounded-xl flex items-center gap-3 hover:border-primary/50 transition-colors">
                <Users className="text-muted-foreground w-8 h-8" />
                <div>
                  <p className="text-[10px] text-muted-foreground font-bold tracking-wider uppercase">Team Size</p>
                  <p className="text-sm font-bold text-foreground">Solo</p>
                </div>
              </div>
              <div className="bg-card border border-border p-4 rounded-xl flex items-center gap-3 hover:border-primary/50 transition-colors">
                <Trophy className="text-muted-foreground w-8 h-8" />
                <div>
                  <p className="text-[10px] text-muted-foreground font-bold tracking-wider uppercase">Format</p>
                  <p className="text-sm font-bold text-foreground">Single Elimination</p>
                </div>
              </div>
              <div className="bg-card border border-border p-4 rounded-xl flex items-center gap-3 hover:border-primary/50 transition-colors">
                <Calendar className="text-muted-foreground w-8 h-8" />
                <div>
                  <p className="text-[10px] text-muted-foreground font-bold tracking-wider uppercase">Starts</p>
                  <p className="text-xs font-bold text-foreground">24th April, 01:00 PM</p>
                </div>
              </div>
              <div className="bg-card border border-border p-4 rounded-xl flex items-center gap-3 hover:border-primary/50 transition-colors">
                <Clock className="text-muted-foreground w-8 h-8" />
                <div>
                  <p className="text-[10px] text-muted-foreground font-bold tracking-wider uppercase">Check-In</p>
                  <p className="text-xs font-bold text-foreground">10 mins before</p>
                </div>
              </div>
            </div>
          </div>

          {/* Prize Pool - Visible on mobile here */}
          <div className="md:hidden">
            <PrizePool />
          </div>

          <RoundsSchedule />
          <HowToJoin />
          
          {/* Organiser - Visible on mobile here */}
          <div className="md:hidden">
            <OrganiserDetails />
          </div>
        </div>

        {/* Right Column (Desktop Only) */}
        <div className="hidden md:flex md:col-span-4 flex-col gap-8">
          <PrizePool />
          <OrganiserDetails />
        </div>
      </div>

      <MoreTournaments />

      {/* Join Button (Sticky on Mobile) */}
      <div className="fixed bottom-[70px] md:bottom-8 left-0 right-0 p-4 md:p-0 bg-background md:bg-transparent border-t border-border md:border-none z-40 md:static md:mt-4">
        <div className="max-w-7xl mx-auto w-full md:flex md:justify-end">
          <button className="w-full md:w-auto md:px-12 bg-primary text-primary-foreground font-bold py-3.5 rounded-xl hover:scale-[1.02] transition-transform shadow-[0_0_15px_rgba(36,253,112,0.3)]">
            JOIN TOURNAMENT
          </button>
        </div>
      </div>
    </div>
  );
}

function PrizePool() {
  return (
    <div className="bg-card border border-border p-6 rounded-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <h3 className="text-lg font-bold mb-4 flex items-center justify-between relative z-10">
        Total Tournament Prize 
        <span className="text-primary flex items-center gap-1.5 bg-primary/10 px-2 py-1 rounded border border-primary/20">2000 <Trophy className="w-4 h-4"/></span>
      </h3>
      <div className="flex flex-col gap-3 relative z-10">
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-background border border-border">
          <div className="flex items-center gap-3">
            <Trophy className="w-5 h-5 text-[#FFD700]" />
            <span className="text-sm font-bold text-muted-foreground">1st Prize</span>
          </div>
          <span className="text-sm font-bold text-foreground flex items-center gap-1.5">1000 <Trophy className="w-4 h-4 text-[#FFD700]"/></span>
        </div>
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-background border border-border">
          <div className="flex items-center gap-3">
            <Trophy className="w-5 h-5 text-[#C0C0C0]" />
            <span className="text-sm font-bold text-muted-foreground">2nd Prize</span>
          </div>
          <span className="text-sm font-bold text-foreground flex items-center gap-1.5">500 <Trophy className="w-4 h-4 text-[#C0C0C0]"/></span>
        </div>
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-background border border-border">
          <div className="flex items-center gap-3">
            <Trophy className="w-5 h-5 text-[#CD7F32]" />
            <span className="text-sm font-bold text-muted-foreground">3rd Prize</span>
          </div>
          <span className="text-sm font-bold text-foreground flex items-center gap-1.5">200 <Trophy className="w-4 h-4 text-[#CD7F32]"/></span>
        </div>
      </div>
    </div>
  );
}

function OrganiserDetails() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Organiser&apos;s Details and contact</h3>
      <div className="bg-card border border-border p-6 rounded-2xl flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
            <Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=Gamehok" fill sizes="56px" unoptimized alt="Avatar" className="object-cover" />
          </div>
          <div>
            <p className="text-lg font-bold text-foreground">GS ESPORTS</p>
            <p className="text-sm text-muted-foreground">Support@gsesports.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
