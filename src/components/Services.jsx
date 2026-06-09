import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaAward, FaSeedling, FaPlay, FaPlus, FaCheckCircle } from "react-icons/fa";
import { services } from "../data/content";

export default function Services() {
  const [activeServiceId, setActiveServiceId] = useState("trimming");

  return (
    <section id="services" className="py-20 bg-soft-bg px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary-light font-bold text-xs uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full">
            ✦ Our Services ✦
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-dark font-heading mt-4">
            Complete Lawn Solutions
          </h2>
        </div>

        {/* Core Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Worker Image Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 relative rounded-3xl overflow-hidden shadow-xl min-h-[350px] lg:min-h-auto group"
          >
            <img 
              src="https://images.unsplash.com/photo-1588600878108-578307a3cc9d?auto=format&fit=crop&q=80&w=600" 
              alt="Lawn Trimming Work" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark green gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
            
            {/* Absolute Badging overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
              <span className="bg-accent text-primary-dark font-bold font-heading text-xs px-3.5 py-1.5 rounded-full w-max">
                Eco-Friendly
              </span>
              <p className="text-white font-heading font-extrabold text-lg leading-snug">
                Precision mowing & edging for structural root density
              </p>
            </div>

            {/* Rotating / Floating Badge: WATCH VIDEO */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-accent/90 backdrop-blur-sm rounded-full flex justify-center items-center shadow-xl border-4 border-white/20 z-10 hover:scale-105 transition-transform duration-300 cursor-pointer group/btn">
              {/* Circular Text */}
              <div className="absolute inset-0 rounded-full animate-spin" style={{ animationDuration: '10s' }}>
                <svg viewBox="0 0 100 100" className="w-full h-full text-primary-dark">
                  <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                  <text className="text-[12.5px] font-extrabold uppercase tracking-widest fill-current">
                    <textPath href="#circlePath" startOffset="0%">WATCH VIDEO • PLAY NOW • </textPath>
                  </text>
                </svg>
              </div>
              <FaPlay className="text-primary-dark text-xl z-20 ml-1" />
            </div>
          </motion.div>

          {/* Middle Column: Active List Accordions */}
          <div className="lg:col-span-4 flex flex-col gap-4 justify-between">
            {services.map((service) => {
              const isActive = service.id === activeServiceId;
              return (
                <div key={service.id} className="relative">
                  <AnimatePresence initial={false} mode="wait">
                    {isActive ? (
                      <motion.div
                        key={`${service.id}-active`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="bg-primary text-white p-6 rounded-2xl shadow-xl border border-primary-light/30 relative overflow-hidden"
                      >
                        {/* Decorative leaf icon */}
                        <div className="absolute -right-4 -bottom-4 text-white/5 pointer-events-none">
                          <FaSeedling size={120} />
                        </div>

                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-heading font-extrabold text-lg sm:text-xl text-accent">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-xs text-white/80 leading-relaxed mb-4">
                          {service.desc}
                        </p>
                        <a 
                          href="#contact" 
                          className="inline-flex items-center gap-2 text-xs font-bold text-accent hover:text-white transition-colors group/link"
                        >
                          Book Service <FaArrowRight className="text-[10px] transform group-hover/link:translate-x-1.5 transition-transform" />
                        </a>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={`${service.id}-inactive`}
                        onClick={() => setActiveServiceId(service.id)}
                        className="bg-white hover:bg-slate-50 border border-slate-100 p-5 rounded-2xl cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md flex justify-between items-center group"
                        whileHover={{ y: -2 }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                            <FaCheckCircle size={16} />
                          </div>
                          <div>
                            <h3 className="font-heading font-bold text-sm text-primary-dark group-hover:text-primary-light transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-xs text-light-text line-clamp-1 mt-0.5">
                              {service.shortDesc}
                            </p>
                          </div>
                        </div>
                        <div className="text-primary group-hover:text-primary-light transition-colors">
                          <FaPlus size={14} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Mini layouts */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            {/* Top card: plant inside a container */}
            <div className="bg-white p-5 rounded-3xl shadow-md border border-slate-100 flex items-center gap-5 group hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=200" 
                  alt="Pot Plant" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-primary-dark">Lush Plantings</h4>
                <p className="text-xs text-light-text mt-1 leading-normal">
                  Expert soil matching to flower and plant varieties.
                </p>
              </div>
            </div>

            {/* Bottom Card: Gardener caring for soil */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl grow min-h-[200px] group">
              <img 
                src="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&q=80&w=600" 
                alt="Gardener working" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-5 left-5 right-5">
                <h4 className="text-white font-heading font-extrabold text-sm">Professional Gardeners</h4>
                <p className="text-xs text-white/75 mt-0.5">Fully certified chemical specialists and horticulturists.</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
