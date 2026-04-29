"use client";

import React from "react";
import { Home, Trophy, Users, MessageSquare } from "lucide-react";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  // Hide bottom navigation on tournament details screen
  if (pathname?.startsWith("/tournament/")) {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-border md:hidden">
      <div className="flex items-center justify-between px-6 py-3">
        <button className="flex flex-col items-center gap-1 text-primary">
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-medium">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
          <Trophy className="w-6 h-6" />
          <span className="text-[10px] font-medium">My Tournament</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
          <Users className="w-6 h-6" />
          <span className="text-[10px] font-medium">Social</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
          <MessageSquare className="w-6 h-6" />
          <span className="text-[10px] font-medium">Chats</span>
        </button>
      </div>
    </nav>
  );
}
