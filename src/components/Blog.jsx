import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";
import { blogPosts } from "../data/content";

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-soft-bg px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary-light font-bold text-xs uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full">
            ✦ Latest Articles ✦
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-dark font-heading mt-4">
            The Outdoor Living Blog
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Banner */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-[10px] uppercase font-bold font-heading px-3 py-1.5 rounded-full tracking-wider shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Text Block Content */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                <div>
                  {/* Meta items */}
                  <div className="flex items-center gap-4 text-[10px] font-bold text-light-text/85 uppercase tracking-wider mb-3.5">
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-accent text-[11px]" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaUser className="text-accent text-[11px]" /> By Lawncare Pro
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-primary-dark mb-2.5 leading-snug group-hover:text-primary-light transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-light-text font-normal leading-relaxed line-clamp-3 mb-6">
                    {post.desc}
                  </p>
                </div>

                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-primary-light transition-all group/link"
                >
                  Read Full Article <FaArrowRight className="text-[10px] transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
