import React from "react";
import Image from "next/image";
import { Irish_Grover } from "next/font/google";

const irishGrover = Irish_Grover({ 
  weight: "400",
  subsets: ["latin"] 
});

export default function PromoBanner() {
  return (
    <div className="rounded-2xl md:rounded-3xl overflow-hidden relative w-full h-[140px] md:h-[220px] shadow-sm">
      {/* Background */}
      <Image
        src="/images/bouncy-bird.png"
        alt="Bouncy Bird Background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 p-4 md:p-8 flex items-center justify-between">
        
        {/* Left Side Content */}
        <div className="flex flex-col h-full justify-center space-y-0.5 md:space-y-1.5 z-10">
          <div className="flex flex-col">
            <h4 className="text-[#251842] text-sm md:text-xl font-bold leading-tight">
              Introducing
            </h4>
            <h2 
              className={`text-[#8F4216] text-[20px] md:text-[36px] uppercase leading-tight ${irishGrover.className}`}
              style={{
                textShadow: "-1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF",
                letterSpacing: "0.5px"
              }}
            >
              BOUNCY BIRD
            </h2>
            <p className="text-[#852CFF] text-xs md:text-lg font-bold leading-tight">
              A game for everyone
            </p>
          </div>
          
          <div className="flex items-center gap-1.5 mt-auto pt-2 md:pt-4">
            <p className="text-black text-xs md:text-lg font-bold">
              Play daily, win weekly
            </p>
            {/* Custom Coin Icon */}
            <div className="w-4 h-4 md:w-5 md:h-5 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
              <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-yellow-400 rounded-full flex items-center justify-center border border-orange-400/50">
                <span className="text-[7px] md:text-[10px] font-black text-white leading-none mb-[1px]">G</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Assets */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-end pointer-events-none">
          {/* Bird Image */}
          <div className="absolute right-2 md:right-10 top-0 md:top-2 w-[130px] h-[100px] md:w-[220px] md:h-[160px]">
            <Image
              src="/images/bird.png"
              alt="Bird"
              fill
              className="object-contain object-right-top md:object-right"
            />
          </div>
          
          {/* Play Button */}
          <div className="absolute right-4 md:right-12 bottom-3 md:bottom-6 w-[90px] h-[36px] md:w-[140px] md:h-[56px] pointer-events-auto cursor-pointer hover:scale-105 transition-transform active:scale-95 flex items-center justify-center">
            <Image
              src="/images/bouncy-play.png"
              alt="Play Button Background"
              fill
              className="object-contain"
            />
            <span 
              className="relative z-10 text-white font-black text-[16px] md:text-[24px] tracking-wide"
              style={{
                textShadow: "0px 2px 4px rgba(0,0,0,0.6), 0px 1px 2px rgba(0,0,0,0.8)"
              }}
            >
              Play
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
