import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "../data/content";

export default function Testimonials() {
  // Triple testimonials for infinite marquee effect
  const doubleTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 bg-soft-bg overflow-hidden relative px-4 md:px-8">
      
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-primary-light font-bold text-xs uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full">
          ✦ Testimonials ✦
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-dark font-heading mt-4">
          Green Success Stories
        </h2>
      </div>

      {/* Marquee Row */}
      <div className="w-full relative flex overflow-x-hidden">
        {/* Blur overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-soft-bg to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-soft-bg to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling wrap */}
        <div className="flex gap-8 items-stretch whitespace-nowrap animate-marquee-fast hover:[animation-play-state:paused] py-4">
          {doubleTestimonials.map((t, index) => (
            <div 
              key={`${t.name}-${index}`} 
              className="w-[280px] sm:w-[320px] md:w-[360px] bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-md flex flex-col justify-between shrink-0 select-none cursor-grab active:cursor-grabbing hover:shadow-xl hover:border-accent/40 transition-all duration-300 relative group"
            >
              {/* Quote mark icon absolute */}
              <div className="absolute top-6 right-6 text-slate-100 group-hover:text-accent/15 transition-colors duration-300">
                <FaQuoteLeft size={36} />
              </div>

              {/* Review content */}
              <div className="relative z-10 whitespace-normal">
                {/* Stars */}
                <div className="flex items-center gap-1.5 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400 text-sm" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-light-text font-normal leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              {/* User meta */}
              <div className="flex items-center gap-4 border-t border-slate-50 pt-4 mt-auto">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-10 h-10 rounded-full object-cover border-2 border-slate-100"
                />
                <div>
                  <h4 className="font-heading font-extrabold text-xs sm:text-sm text-primary-dark">
                    {t.name}
                  </h4>
                  <p className="text-[10px] text-light-text uppercase tracking-wider font-bold">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
