import React from "react";
import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";
import { BsArrowRightCircle } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <section id="home" className="relative w-full min-h-[90vh] flex items-center bg-white pt-24 lg:pt-32 pb-16 overflow-hidden px-4 md:px-8">
      
      {/* Faint floral watermark background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* We simulate the mandala watermark using CSS SVGs with very low opacity */}
        <div className="absolute -left-10 top-10 opacity-[0.03]">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-primary-dark">
            <circle cx="50" cy="50" r="45" strokeWidth="1" strokeDasharray="2 4"/>
            <circle cx="50" cy="50" r="35" strokeWidth="2" strokeDasharray="5 5"/>
            <path d="M50 15 Q60 50 50 85 Q40 50 50 15 Z" strokeWidth="0.5"/>
            <path d="M15 50 Q50 60 85 50 Q50 40 15 50 Z" strokeWidth="0.5"/>
          </svg>
        </div>
        <div className="absolute -right-20 top-1/4 opacity-[0.03]">
          <svg width="500" height="500" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-primary-dark">
            <path d="M50 10 C 70 30, 90 30, 90 50 C 90 70, 70 70, 50 90 C 30 70, 10 70, 10 50 C 10 30, 30 30, 50 10 Z" strokeWidth="1" />
            <circle cx="50" cy="50" r="20" strokeWidth="1" strokeDasharray="2 2" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-1/3 opacity-[0.02]">
          <svg width="600" height="600" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-primary-dark">
            <circle cx="50" cy="50" r="40" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="30" strokeWidth="0.5" strokeDasharray="4 4" />
          </svg>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Column: Copywriting */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left z-20 pt-8"
        >
          {/* Accent Badge */}
          <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-2 mb-4 text-[#0d6032] font-bold text-sm tracking-wide">
            <span className="flex flex-col gap-[2px]">
              <span className="w-5 h-[2px] bg-[#0d6032] inline-block translate-x-1"></span>
              <span className="w-6 h-[2px] bg-[#0d6032] inline-block"></span>
            </span>
            Transforming lawns into lush, green...
            <span className="flex flex-col gap-[2px]">
              <span className="w-6 h-[2px] bg-[#0d6032] inline-block"></span>
              <span className="w-5 h-[2px] bg-[#0d6032] inline-block -translate-x-1"></span>
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            variants={itemVariants} 
            className="text-[44px] sm:text-[56px] md:text-[64px] lg:text-[72px] font-extrabold text-[#1a2f23] font-heading leading-[1.05] mb-5 tracking-tight"
          >
            Smart Lawn Care,<br />
            Stunning Results
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-[15px] sm:text-base text-gray-500 font-medium max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            At Lawnx, we know a great lawn doesn't just happen it's carefully
            cared for. That's why we combine expert knowledge, eco friendly
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-start gap-4 mb-14"
          >
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-4 bg-[#bce964] hover:bg-[#aadd4a] text-[#1a2f23] font-extrabold text-[15px] rounded-xl transition-colors flex items-center justify-center shadow-sm border border-[#aadd4a]/50"
            >
              Get Your Free Estimate
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-[52px] h-[52px] bg-[#bce964] hover:bg-[#aadd4a] text-[#1a2f23] font-bold rounded-xl flex items-center justify-center transition-colors shadow-sm border border-[#aadd4a]/50"
            >
              <FiArrowUpRight size={22} strokeWidth={2.5} />
            </motion.a>
          </motion.div>

          {/* Cards */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-row items-center justify-center lg:justify-start gap-5 sm:gap-6"
          >
            {/* Card 1: Offer */}
            <div className="bg-white p-5 pt-6 pb-6 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center w-[160px] sm:w-[180px] hover:shadow-md transition-all">
               <div className="text-[#0d6032] mb-3">
                 <FaLeaf size={24} />
               </div>
               <p className="text-[14px] font-extrabold text-[#1a2f23] leading-tight mb-2">Get 20% off for<br/>lawn care</p>
               <p className="text-[12px] text-gray-500 font-semibold mb-4">Register Now</p>
               <BsArrowRightCircle className="text-gray-400 text-[22px] hover:text-[#0d6032] cursor-pointer transition-colors" />
            </div>

            {/* Card 2: Image Thumbnail */}
            <div className="w-[150px] sm:w-[170px] h-[190px] sm:h-[210px] rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 shrink-0 relative group">
               <img src="https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&q=80&w=300" alt="Lawn Mowing Thumbnail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </motion.div>

        </motion.div>

        {/* Right Column: Gardener Graphic */}
        <div className="lg:col-span-6 relative w-full h-[400px] sm:h-[500px] lg:h-full flex items-end justify-center lg:justify-end mt-10 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative w-[110%] h-[110%] lg:w-[140%] lg:h-[140%] lg:absolute lg:-right-20 lg:-bottom-16 flex items-end z-10 mix-blend-multiply"
          >
            <img 
              src="/gardener-cutout.png" 
              alt="Lawn Care Service Worker" 
              className="w-full h-full object-contain object-bottom"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
