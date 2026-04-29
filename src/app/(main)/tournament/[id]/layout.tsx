"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { ArrowLeft, Share2, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TournamentLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { id } = useParams();

  const tabs = [
    { name: "Overview", href: `/tournament/${id}` },
    { name: "Teams", href: `/tournament/${id}/teams` },
    { name: "Lobbies", href: `/tournament/${id}/lobbies` },
    { name: "Rules", href: `/tournament/${id}/rules` },
  ];

  return (
    <div className="flex flex-col min-h-full w-full px-4 md:px-8 lg:px-10 py-6 gap-6 md:gap-8 max-w-7xl mx-auto">
      
      {/* Top Bar: Back & Share */}
      <div className="flex items-center justify-between w-full">
        <Link href="/" className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
        <button className="w-8 h-8 rounded-full bg-[#0B150F] flex items-center justify-center text-[#00E576] hover:bg-[#16502D] transition-colors">
          <Share2 className="w-4 h-4" />
        </button>
      </div>

      {/* Banner Image */}
      <div className="rounded-xl md:rounded-2xl overflow-hidden relative border border-white/10 bg-card w-full h-[180px] md:h-[300px]">
        <Image
          src="/images/crown-conquest-tour.png"
          alt="Tournament Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Banner Tags */}
        <div className="absolute bottom-3 left-3 bg-[#1C2028]/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10">
          <span className="text-[10px] md:text-xs font-bold text-white/90">Registration open- 2nd mar-10th Apr</span>
        </div>
        <div className="absolute bottom-3 right-3 bg-[#1C2028]/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 flex items-center gap-1.5">
          <Users className="w-3 h-3 md:w-3.5 md:h-3.5 text-white/90" />
          <span className="text-[10px] md:text-xs font-bold text-white/90">670/800</span>
        </div>
      </div>

      {/* Title & Tags Section */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-2.5">
          <h1 className="text-2xl md:text-[32px] font-black text-white leading-tight uppercase">GS MONTHLY SHOWDOWN</h1>
          <p className="text-[11px] md:text-xs font-bold text-white/70 uppercase">BY GS ESPORTS</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="bg-[#092B16] border border-[#16502D] text-[#00E576] px-3 py-1 rounded-md font-bold text-[11px]">BGMI</span>
            <span className="bg-[#092B16] border border-[#16502D] text-[#00E576] px-3 py-1 rounded-md font-bold text-[11px]">Entry-Free</span>
          </div>
        </div>
        
        {/* GS Logo */}
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#6B4B98] border-2 border-white/20 p-1.5 shadow-lg flex items-center justify-center overflow-hidden flex-shrink-0">
          <div className="relative w-full h-full">
            <Image src="/images/gs.png" alt="GS Esports" fill className="object-contain" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-8 md:gap-14 border-b border-white/10 overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 mt-2">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={cn(
                "text-sm font-bold py-3 px-1 whitespace-nowrap transition-all duration-200",
                isActive 
                  ? "text-[#00E576] border-b-[3px] border-[#00E576]" 
                  : "text-white/50 hover:text-white"
              )}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="mt-2 md:mt-4 pb-20 lg:pb-0">
        {children}
      </div>

      {/* Persistent Join Button (Sticky on Mobile, Static on Desktop) */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#0B150F] border-t border-white/5 z-40 lg:static lg:bg-transparent lg:p-0 lg:pt-8 lg:border-t lg:border-white/10 lg:mt-6">
        <div className="w-full lg:flex lg:justify-end">
          <button className="w-full lg:w-[240px] bg-[#0CF285] text-white font-bold py-3.5 rounded-lg hover:bg-[#0CF285]/90 transition-colors">
            JOIN TOURNAMENT
          </button>
        </div>
      </div>
    </div>
  );
}
