import React from "react";
import Image from "next/image";

export default function SocialHero() {
  return (
    <div className="relative w-full rounded-[20px] md:rounded-3xl overflow-hidden bg-gradient-to-br from-[#063b1b] via-[#041c0e] to-[#010a05] p-5 md:p-10 flex flex-row items-center justify-between gap-3 md:gap-8 border border-white/5">
      {/* Background Glow */}
      <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-32 md:w-64 h-32 md:h-64 bg-primary/30 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />
      
      {/* Star Illustration (Left Side) */}
      <div className="relative z-10 w-[110px] h-[110px] md:w-64 md:h-64 flex-shrink-0 -ml-2 md:-ml-0">
        <Image 
          src="/images/social-star.png" 
          alt="Social Star" 
          fill 
          className="object-contain drop-shadow-[0_0_20px_rgba(36,253,112,0.3)]" 
        />
      </div>

      {/* Content (Right Side) */}
      <div className="relative z-10 flex-1 flex flex-col pt-1">
        <h2 className="text-[16px] md:text-3xl font-bold text-white mb-1 leading-tight">
          Be the Gamehok&apos;s
          <br className="hidden md:block" />
          <span className="text-[#FFC107] block mt-0.5 md:mt-2 text-[18px] md:text-4xl">Social Star</span>
        </h2>
        <p className="text-[10px] md:text-base text-gray-300 mb-4 md:mb-8 font-medium leading-snug max-w-[200px] md:max-w-md">
          Earn rewards by levelling up your social game
        </p>
          
        <div className="flex items-center gap-3 md:gap-10">
          <div className="flex flex-col items-center gap-1.5 md:gap-3">
            <div className="w-8 h-8 md:w-16 md:h-16 relative">
              <Image src="/svgs/posts.svg" alt="Posts" fill className="object-contain" />
            </div>
            <span className="text-[9px] md:text-base font-medium text-white">Posts</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 md:gap-3">
            <div className="w-8 h-8 md:w-16 md:h-16 relative">
              <Image src="/svgs/followers.svg" alt="Followers" fill className="object-contain" />
            </div>
            <span className="text-[9px] md:text-base font-medium text-white">Followers</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 md:gap-3">
            <div className="w-8 h-8 md:w-16 md:h-16 relative">
              <Image src="/svgs/likes.svg" alt="Likes" fill className="object-contain" />
            </div>
            <span className="text-[9px] md:text-base font-medium text-white">Likes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
