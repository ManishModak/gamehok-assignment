import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TournamentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-full max-w-7xl mx-auto w-full px-4 md:px-10 py-6 gap-6 md:gap-8">
      {/* Banner & Header Section */}
      <div className="rounded-2xl md:rounded-3xl overflow-hidden relative border border-border bg-card">
        <div className="relative w-full h-48 md:h-80">
          <Image
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
            alt="Tournament Banner"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex flex-col justify-end p-5 md:p-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded font-bold text-xs">BGMI</span>
              <span className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded font-bold text-xs">Entry-Free</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-foreground mb-2">GS MONTHLY SHOWDOWN</h1>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary overflow-hidden border border-border relative">
                {/* Organiser Avatar Placeholder */}
                <Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=Gamehok" alt="Organiser" fill sizes="32px" unoptimized className="object-cover" />
              </div>
              <p className="text-sm font-bold text-muted-foreground">BY GS ESPORTS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 md:gap-10 border-b border-border overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
        <Link href={`/tournament/${1}`} className="text-sm font-bold text-primary border-b-2 border-primary py-3 px-1 whitespace-nowrap">Overview</Link>
        <Link href={`/tournament/${1}/participants`} className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors py-3 px-1 whitespace-nowrap">Participants</Link>
        <Link href={`/tournament/${1}/lobbies`} className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors py-3 px-1 whitespace-nowrap text-foreground border-b-2 border-primary">Lobbies</Link>
        <Link href={`/tournament/${1}/leaderboard`} className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors py-3 px-1 whitespace-nowrap">Leaderboard</Link>
        <Link href={`/tournament/${1}/rules`} className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors py-3 px-1 whitespace-nowrap">Rules</Link>
      </div>

      {/* Tab Content */}
      <div className="mt-2">
        {children}
      </div>
    </div>
  );
}
