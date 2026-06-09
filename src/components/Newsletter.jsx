import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

const floatingImages = [
  "https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&q=80&w=150",
  "https://images.unsplash.com/photo-1588600878108-578307a3cc9d?auto=format&fit=crop&q=80&w=150",
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=150",
  "https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&q=80&w=150",
  "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&q=80&w=150",
  "https://images.unsplash.com/photo-1507036066871-b7e8032b3dea?auto=format&fit=crop&q=80&w=150"
];

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Please fill in your email");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email address is invalid");
    } else {
      setError("");
      setIsSuccess(true);
      setEmail("");
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden px-4 md:px-8">
      
      {/* Decorative vector background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg className="absolute -top-12 left-1/2 -translate-x-1/2 w-[600px] h-[600px] text-accent/15" fill="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.3" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.1" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-primary-light font-bold text-xs uppercase tracking-widest bg-primary/5 px-4.5 py-1.5 rounded-full">
            ✦ Subscribe Today ✦
          </span>
        </motion.div>

        {/* Arc Collage of Images */}
        <div className="w-full max-w-2xl mx-auto flex justify-center items-end h-28 sm:h-36 md:h-44 relative mb-12">
          {floatingImages.map((img, index) => {
            const isMiddle = index === 2 || index === 3;
            const isOuter = index === 0 || index === 5;
            
            let yOffset = "translate-y-8 sm:translate-y-12 rotate-[-5deg]";
            if (index === 5) yOffset = "translate-y-8 sm:translate-y-12 rotate-[5deg]";
            if (index === 1) yOffset = "translate-y-2 sm:translate-y-4 rotate-[-2deg]";
            if (index === 4) yOffset = "translate-y-2 sm:translate-y-4 rotate-[2deg]";
            if (index === 2) yOffset = "-translate-y-4 sm:-translate-y-6 rotate-[-1deg]";
            if (index === 3) yOffset = "-translate-y-4 sm:-translate-y-6 rotate-[1deg]";

            const zIndex = [10, 20, 30, 30, 20, 10][index];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ zIndex }}
                className={`relative w-14 h-20 sm:w-20 sm:h-28 md:w-24 md:h-32 rounded-xl sm:rounded-2xl overflow-hidden border-[3px] border-white shadow-xl -mx-1.5 sm:-mx-2.5 transition-transform duration-300 hover:z-50 hover:scale-110 ${yOffset}`}
              >
                <img 
                  src={img} 
                  alt="Lawn Asset" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-dark font-heading leading-tight mb-4"
        >
          Let's Make Your Lawn<br />The Best on The Block
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-xs sm:text-sm text-light-text max-w-lg leading-relaxed mb-8"
        >
          Seasonal lawn checklists, DIY aeration guidelines, organic fertilization schedules, and discount deals directly to your inbox.
        </motion.p>

        {/* Form */}
        <motion.form 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubscribe}
          className="w-full max-w-md bg-slate-50 border border-slate-200 p-2 rounded-2xl flex items-center shadow-md focus-within:ring-2 focus-within:ring-accent focus-within:border-accent transition-all relative"
        >
          <input 
            type="email" 
            placeholder="Enter your email address" 
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            className="flex-grow bg-transparent px-4 py-3 text-xs sm:text-sm text-primary-dark placeholder-slate-400 focus:outline-none"
          />
          <button 
            type="submit" 
            className="bg-accent hover:bg-accent-hover text-primary-dark font-bold font-heading text-xs px-6 py-3 rounded-xl shadow-md shadow-accent/10 hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
          >
            Join <FaPaperPlane className="text-[10px]" />
          </button>

          {/* Validation Error message */}
          {error && (
            <p className="absolute -bottom-6 left-3 text-red-500 font-bold text-[10px] tracking-wide">
              {error}
            </p>
          )}
        </motion.form>

        {/* Success message banner */}
        <AnimatePresence>
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="mt-6 bg-primary text-white text-xs font-semibold px-4.5 py-2.5 rounded-full flex items-center gap-2 shadow-md border border-primary-light"
            >
              <FaCheckCircle className="text-accent" /> Successfully subscribed! Check your inbox soon.
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Collage of Circle Images removed from here */}

      </div>
    </section>
  );
}
