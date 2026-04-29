import React from "react";
import { Bell, Menu, CircleDollarSign, Ticket, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { userStats } from "@/lib/mockData";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-3 px-4 md:px-10 border-b border-border">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
        {/* Mobile Left: Menu & Avatar */}
        <div className="flex items-center gap-4 md:hidden">
          <Sheet>
            <SheetTrigger className="text-primary bg-primary/10 p-2 rounded-lg transition-colors">
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="left" className="bg-card border-r-border w-[280px]">
              <div className="flex flex-col gap-4 mt-8">
                <a href="#" className="text-lg font-medium hover:text-primary">Profile</a>
                <a href="#" className="text-lg font-medium hover:text-primary">Wallet</a>
                <a href="#" className="text-lg font-medium hover:text-primary">Settings</a>
                <a href="#" className="text-lg font-medium text-destructive">Logout</a>
              </div>
            </SheetContent>
          </Sheet>
          <Avatar className="h-10 w-10 border-2 border-primary">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" alt="@user" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>

        {/* Desktop Left: Search */}
        <div className="hidden md:flex items-center w-full max-w-sm">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search tournaments, games..." 
              className="pl-9 bg-card border-border h-10 w-full rounded-full focus-visible:ring-primary"
            />
          </div>
        </div>

        {/* Right Side: Balances & Profile (Desktop) / Balances & Bell (Mobile) */}
        <div className="flex items-center gap-3 md:gap-6 ml-auto">
          {/* Balances Container */}
          <div className="flex items-center bg-card rounded-full border border-border p-1">
            <div className="flex items-center px-3 py-1 bg-muted rounded-full">
              <Ticket className="w-4 h-4 text-[#FFB800] mr-1.5" />
              <span className="text-sm font-bold text-foreground">245</span>
            </div>
            <div className="w-[1px] h-4 bg-border mx-1 hidden md:block"></div>
            <div className="flex items-center px-3 py-1">
              <CircleDollarSign className="w-4 h-4 text-[#FFD700] mr-1.5" />
              <span className="text-sm font-bold text-foreground">{userStats.coins}</span>
            </div>
          </div>

          <button className="relative text-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-white/5">
            <Bell className="w-6 h-6" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background"></span>
          </button>

          {/* Desktop User Profile Info */}
          <div className="hidden md:flex items-center gap-3 pl-4 border-l border-border">
            <div className="text-right">
              <p className="text-sm font-bold text-foreground leading-none">Sweta Rani</p>
              <p className="text-xs text-muted-foreground mt-1">Level 12</p>
            </div>
            <Avatar className="h-10 w-10 border border-border">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" alt="@user" />
              <AvatarFallback>SR</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
