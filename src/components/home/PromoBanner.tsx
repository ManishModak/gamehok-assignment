import React from "react";
import Image from "next/image";

export default function PromoBanner() {
  return (
    <div className="rounded-2xl md:rounded-3xl overflow-hidden relative border border-border">
      <div className="relative w-full h-32 md:h-64 bg-purple-900/40">
        <Image
          src="/images/bouncy-bird.png"
          alt="Bouncy Bird"
          fill
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent p-4 md:p-10 flex flex-col justify-center">
          <div className="text-xs md:text-sm font-bold text-purple-400 mb-1 md:mb-2 uppercase tracking-wider">
            Compete in
          </div>
          <h3 className="text-xl md:text-5xl font-black text-foreground mb-1 md:mb-4 italic tracking-tight">
            MEGA TOURNAMENT
          </h3>
          <p className="text-[10px] md:text-lg text-muted-foreground max-w-[60%] md:max-w-[40%]">
            Play with the best and win massive prizes every week
          </p>
          
          <button className="mt-3 md:mt-6 bg-primary text-primary-foreground text-xs md:text-base font-bold py-1.5 md:py-3 px-4 md:px-8 rounded-full w-max shadow-[0_0_15px_rgba(36,253,112,0.4)] hover:scale-105 transition-transform">
            Play
          </button>
        </div>
      </div>
    </div>
  );
}
