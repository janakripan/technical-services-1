import React from "react";
import { 
  FaDharmachakra, 
  FaSun, 
  FaBolt, 
  FaWater, 
  FaWind
} from "react-icons/fa";

const logos = [
  { name: "Logoipsum", icon: FaDharmachakra },
  { name: "Logoipsum", icon: FaSun },
  { name: "Logoipsum", icon: FaBolt },
  { name: "Logoipsum", icon: FaWater },
  { name: "Logoipsum", icon: FaWind },
];

export default function TrustedCompanies() {
  // Double the logos list for infinite scroll loop
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="w-full bg-white pt-10 pb-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-6">
        <h3 className="text-[17px] sm:text-lg font-extrabold text-[#1a2f23] tracking-tight">
          Trusted By 14K Companies Worldwide
        </h3>
      </div>

      {/* Gray band background for logos */}
      <div className="w-full bg-[#f8f9fa] py-8">
        {/* Outer container hiding scroll */}
        <div className="w-full relative flex overflow-x-hidden max-w-[1920px] mx-auto">
          {/* Gradient overlays to blur the edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Inner Container */}
          <div className="flex gap-16 items-center whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
            {marqueeLogos.map((logo, index) => {
              const IconComponent = logo.icon;
              return (
                <div 
                  key={`${logo.name}-${index}`} 
                  className="flex items-center gap-2.5 text-gray-400 group select-none"
                >
                  <IconComponent size={30} className="text-gray-500" />
                  <span className="font-heading font-bold text-2xl tracking-tight text-gray-500">
                    {logo.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
