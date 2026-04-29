import React from "react";
import Image from "next/image";
import { userStats } from "@/lib/mockData";
import { PlusCircle, MessageSquare, ThumbsUp, Star } from "lucide-react";

export default function SocialHero() {
  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a2a16] to-[#050b08] border border-[#1a3a26] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Background Star Glow */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="relative z-10 flex-1">
        <h2 className="text-2xl md:text-4xl font-black text-foreground mb-3 tracking-tight">
          Be the Gamehok&apos;s <span className="text-[#fbbf24]">Social Star</span>
        </h2>
        <p className="text-sm md:text-lg text-muted-foreground mb-8 md:mb-10 font-medium">
          Earn rewards by levelling up your social game
        </p>
          
        <div className="flex items-center gap-6 md:gap-10">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-[#1a3a26] bg-background/40 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(36,253,112,0.1)]">
              <PlusCircle className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <span className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest">Posts</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-[#1a3a26] bg-background/40 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(36,253,112,0.1)]">
              <MessageSquare className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <span className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest">Followers</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-[#1a3a26] bg-background/40 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(36,253,112,0.1)]">
              <ThumbsUp className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <span className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest">Likes</span>
          </div>
        </div>
      </div>

      {/* Star Illustration */}
      <div className="relative z-10 w-32 h-32 md:w-56 md:h-56">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
        <Star className="w-full h-full text-primary fill-primary/20 drop-shadow-[0_0_30px_rgba(36,253,112,0.5)]" />
      </div>
    </div>
  );
}
