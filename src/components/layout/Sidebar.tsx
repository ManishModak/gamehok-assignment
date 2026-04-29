import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, Trophy, Users, MessageSquare, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", href: "/", active: true },
  { icon: Trophy, label: "My Tournament", href: "/tournament", active: false },
  { icon: Users, label: "Social", href: "/social", active: false },
  { icon: MessageSquare, label: "Chat", href: "/chat", active: false },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-[260px] h-screen fixed left-0 top-0 bg-background border-r border-border p-6 z-40 overflow-y-auto">
      {/* Logo Area */}
      <div className="flex items-center mb-12 mt-2 px-2">
        <Image src="/svgs/gamehok-logo.svg" alt="Gamehok Logo" width={139} height={36} className="w-auto h-8" priority />
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 font-medium",
                item.active 
                  ? "bg-gradient-to-r from-primary/20 to-transparent text-primary" 
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              )}
            >
              <Icon className={cn("w-5 h-5", item.active ? "text-primary" : "text-muted-foreground")} />
              <span className="text-[15px]">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="mt-auto pt-6 border-t border-border/50">
        <button className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all duration-200 font-medium">
          <LogOut className="w-5 h-5" />
          <span className="text-[15px]">Logout</span>
        </button>
      </div>
    </aside>
  );
}
