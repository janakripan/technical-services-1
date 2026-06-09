import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const aboutImages = [
  {
    url: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=400",
    style: "-translate-y-4 sm:-translate-y-10 md:-translate-y-16"
  },
  {
    url: "https://images.unsplash.com/photo-1588600878108-578307a3cc9d?auto=format&fit=crop&q=80&w=400",
    style: "translate-y-2 sm:translate-y-10 md:translate-y-16"
  },
  {
    url: "https://images.unsplash.com/photo-1558904541-efa8c1a68f6a?auto=format&fit=crop&q=80&w=400",
    style: "translate-y-8 sm:translate-y-24 md:translate-y-40"
  },
  {
    url: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&q=80&w=400",
    style: "translate-y-8 sm:translate-y-24 md:translate-y-40"
  },
  {
    url: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=400",
    style: "translate-y-2 sm:translate-y-10 md:translate-y-16"
  },
  {
    url: "https://images.unsplash.com/photo-1507036066871-b7e8032b3dea?auto=format&fit=crop&q=80&w=400",
    style: "-translate-y-4 sm:-translate-y-10 md:-translate-y-16"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center justify-center gap-2 text-[#0d6032] font-bold text-sm tracking-wide"
        >
          <span className="flex flex-col gap-[2px]">
            <span className="w-5 h-[2px] bg-[#0d6032] inline-block translate-x-1"></span>
            <span className="w-6 h-[2px] bg-[#0d6032] inline-block"></span>
          </span>
          About Our Company
          <span className="flex flex-col gap-[2px]">
            <span className="w-6 h-[2px] bg-[#0d6032] inline-block"></span>
            <span className="w-5 h-[2px] bg-[#0d6032] inline-block -translate-x-1"></span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-[36px] lg:text-[42px] font-extrabold font-heading max-w-4xl leading-[1.3] mb-6 tracking-tight"
        >
          <span className="text-[#1a2f23]">At Lawnx, We Believe Every Lawn Deserves To Be </span>
          <span className="text-[#8e9591]">Vibrant, Healthy, & Welcoming. With A Passion For Creating Beautiful Outdoor We Provide Professional Lawn Care</span>
        </motion.h2>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-4 lg:mb-6"
        >
          <a 
            href="#contact"
            className="px-6 py-4 bg-[#bce964] hover:bg-[#aadd4a] text-[#1a2f23] font-extrabold text-[14px] rounded-xl transition-colors flex items-center justify-center shadow-sm"
          >
            More About Us
          </a>
          <a 
            href="#contact"
            className="w-14 h-14 bg-[#bce964] hover:bg-[#aadd4a] text-[#1a2f23] font-bold rounded-xl flex items-center justify-center transition-colors shadow-sm"
          >
            <FiArrowUpRight size={22} strokeWidth={2.5} />
          </a>
        </motion.div>

        {/* Arc Collage of Images */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full max-w-4xl flex justify-center items-center gap-2 sm:gap-4 md:gap-6 pb-20 sm:pb-32 px-1 sm:px-0"
        >
          {aboutImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: 0.4 + index * 0.1, 
                type: "spring", 
                stiffness: 120, 
                damping: 14 
              }}
              className="flex-1 min-w-0"
            >
              <div 
                className={`relative rounded-xl sm:rounded-[2rem] overflow-hidden shadow-md aspect-square w-full ${img.style}`}
              >
                <img 
                  src={img.url} 
                  alt={`Lawn Care Preview ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
