import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarAlt, FaChevronRight } from "react-icons/fa";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary-light font-bold text-xs uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full">
            ✦ Recent Projects ✦
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-dark font-heading mt-4">
            Showcasing Our Work
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {projects.map((project, index) => {
            const isFeatured = project.featured;
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col justify-between transition-all duration-300 ${isFeatured ? "ring-2 ring-accent shadow-xl md:-translate-y-2" : "bg-white"}`}
              >
                {/* Image Container */}
                <div className="h-64 overflow-hidden relative group">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Decorative green top tint */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/20 to-transparent"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className={`text-[10px] uppercase font-bold font-heading px-3 py-1.5 rounded-full tracking-wider shadow-sm ${isFeatured ? "bg-accent text-primary-dark" : "bg-primary text-white"}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Block */}
                <div className={`p-6 flex-grow flex flex-col justify-between ${isFeatured ? "bg-primary text-white" : "bg-white text-primary-dark"}`}>
                  <div>
                    <h3 className={`font-heading font-extrabold text-lg sm:text-xl mb-2 ${isFeatured ? "text-accent" : "text-primary-dark"}`}>
                      {project.title}
                    </h3>
                    <p className={`text-xs leading-relaxed mb-6 ${isFeatured ? "text-white/80" : "text-light-text"}`}>
                      {project.desc}
                    </p>
                  </div>

                  <a 
                    href="#contact" 
                    className={`inline-flex items-center gap-2 text-xs font-bold transition-all group ${isFeatured ? "text-accent hover:text-white" : "text-primary hover:text-primary-light"}`}
                  >
                    Learn More <FaArrowRight className="text-[10px] transform group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Green CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-primary text-white p-8 md:p-12 shadow-xl overflow-hidden"
        >
          {/* Subtle design pattern backgrounds */}
          <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
            <svg className="w-full h-full text-white" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M-20,120 C40,40 60,60 120,-20" stroke="currentColor" strokeWidth="2" />
              <path d="M-10,130 C50,50 70,70 130,-10" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="text-center lg:text-left">
              <span className="text-accent font-extrabold text-xs uppercase tracking-widest mb-2 block font-heading">
                Ready to transform your lawn?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight mb-2">
                See The Lawn Care, Feel The Vision
              </h3>
              <p className="text-sm text-white/85 max-w-xl leading-relaxed">
                Schedule a consultation today to draft plans for sodding, planting, trimming, or weekly custom detailing packages.
              </p>
            </div>
            
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent hover:bg-accent-hover text-primary-dark font-semibold font-heading text-sm rounded-full shadow-lg shadow-accent/20 hover:shadow-xl transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
            >
              Get Free Quote <FaChevronRight className="text-xs" />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
