import React from "react";
import Image from "next/image";
import { Users, Calendar, Clock, Trophy } from "lucide-react";
import RoundsSchedule from "@/components/tournament/RoundsSchedule";
import HowToJoin from "@/components/tournament/HowToJoin";
import MoreTournaments from "@/components/tournament/MoreTournaments";

export default function TournamentOverview() {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column */}
        <div className="lg:col-span-8 flex flex-col gap-10 md:gap-12">
          {/* Details Grid */}
          <div className="flex flex-col gap-6 md:gap-8 mt-2">
            <h3 className="text-xl font-bold text-white">Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-8 gap-x-8">
              <div className="flex items-start gap-4 order-1">
                <Image src="/svgs/team-size.svg" alt="Team Size" width={32} height={32} className="w-8 h-8 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="text-[10px] text-white/50 font-bold tracking-widest uppercase">Team Size</p>
                  <p className="text-[15px] font-bold text-white leading-tight">Solo</p>
                </div>
              </div>
              <div className="flex items-start gap-4 order-2 md:order-3">
                <Image src="/svgs/format.svg" alt="Format" width={32} height={32} className="w-8 h-8 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="text-[10px] text-white/50 font-bold tracking-widest uppercase">Format</p>
                  <p className="text-[15px] font-bold text-white leading-tight">Single Elimination</p>
                </div>
              </div>
              <div className="flex items-start gap-4 order-3 md:order-2">
                <Image src="/svgs/tournament-start.svg" alt="Tournament Starts" width={32} height={32} className="w-8 h-8 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="text-[10px] text-white/50 font-bold tracking-widest uppercase">Tournament Starts</p>
                  <p className="text-[15px] font-bold text-white leading-tight">Tue 24th Jan 2024, 01:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4 order-4">
                <Image src="/svgs/check-in.svg" alt="Check-In" width={32} height={32} className="w-8 h-8 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="text-[10px] text-white/50 font-bold tracking-widest uppercase">Check-In</p>
                  <p className="text-[15px] font-bold text-white leading-tight">10 mins before the match starts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Prize Pool - Visible on mobile here */}
          <div className="lg:hidden">
            <PrizePool />
          </div>

          <RoundsSchedule />
          <HowToJoin />
          
          {/* Organiser - Visible on mobile here */}
          <div className="lg:hidden">
            <OrganiserDetails />
          </div>
        </div>

        {/* Right Column (Desktop Only) */}
        <div className="hidden lg:flex lg:col-span-4 flex-col gap-8">
          <PrizePool />
          <OrganiserDetails />
        </div>
      </div>

      <MoreTournaments />
    </div>
  );
}

function PrizePool() {
  return (
    <div className="flex flex-col gap-3 md:gap-4 mt-2">
      <h3 className="text-xl font-bold text-white hidden lg:block">Prize pool</h3>
      <div className="bg-[#0B150F] border border-white/5 rounded-[12px] overflow-hidden flex flex-col">
        {/* Total Prize Row */}
        <div className="bg-white/[0.15] px-5 py-4 flex items-center justify-between">
          <h3 className="text-[13px] md:text-sm font-bold text-white/90">Total Tournament Prize</h3>
          <span className="text-sm md:text-base font-bold text-white flex items-center gap-2">
            2000
            <div className="w-3.5 h-3.5 md:w-4 md:h-4 bg-[#FFC700] rounded-full shrink-0 shadow-[inset_-1px_-1px_0_rgba(0,0,0,0.2)] border border-[#E5A800]"></div>
          </span>
        </div>
        
        {/* 1st Prize Row */}
        <div className="bg-white/5 px-5 py-4 flex items-center justify-between border-b border-black/20">
          <div className="flex items-center gap-3">
            <Trophy className="w-[18px] h-[18px] text-white" />
            <span className="text-[13px] md:text-sm font-medium text-white/90">1st Prize</span>
          </div>
          <span className="text-[13px] md:text-sm font-bold text-white flex items-center gap-2">
            1000
            <div className="w-3.5 h-3.5 md:w-4 md:h-4 bg-[#FFC700] rounded-full shrink-0 shadow-[inset_-1px_-1px_0_rgba(0,0,0,0.2)] border border-[#E5A800]"></div>
          </span>
        </div>
        
        {/* 2nd Prize Row */}
        <div className="bg-white/5 px-5 py-4 flex items-center justify-between border-b border-black/20">
          <div className="flex items-center gap-3">
            <Trophy className="w-[18px] h-[18px] text-white" />
            <span className="text-[13px] md:text-sm font-medium text-white/90">2nd Prize</span>
          </div>
          <span className="text-[13px] md:text-sm font-bold text-white flex items-center gap-2">
            500
            <div className="w-3.5 h-3.5 md:w-4 md:h-4 bg-[#FFC700] rounded-full shrink-0 shadow-[inset_-1px_-1px_0_rgba(0,0,0,0.2)] border border-[#E5A800]"></div>
          </span>
        </div>
        
        {/* 3rd Prize Row */}
        <div className="bg-white/5 px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Trophy className="w-[18px] h-[18px] text-white" />
            <span className="text-[13px] md:text-sm font-medium text-white/90">3rd Prize</span>
          </div>
          <span className="text-[13px] md:text-sm font-bold text-white flex items-center gap-2">
            200
            <div className="w-3.5 h-3.5 md:w-4 md:h-4 bg-[#FFC700] rounded-full shrink-0 shadow-[inset_-1px_-1px_0_rgba(0,0,0,0.2)] border border-[#E5A800]"></div>
          </span>
        </div>
      </div>
    </div>
  );
}

function OrganiserDetails() {
  return (
    <div className="flex flex-col gap-3 md:gap-4 mt-2">
      <h3 className="text-xl font-bold text-white hidden lg:block">Organiser</h3>
      <div className="bg-[#0B150F] border border-white/5 rounded-[12px] overflow-hidden flex flex-col">
        <div className="bg-white/10 px-5 py-3 border-b border-white/5">
          <p className="text-[13px] md:text-sm font-medium text-white/90">Organiser&apos;s Details and contact</p>
        </div>
        <div className="p-5 flex items-center gap-4">
          <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image src="/images/gs.png" fill sizes="48px" alt="Organiser Logo" className="object-cover bg-[#6B4B98]" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm md:text-base font-bold text-white">GS ESPORTS</p>
            <div className="flex items-center gap-2 text-white/50">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <p className="text-[11px] md:text-xs">Support@gsesports.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
