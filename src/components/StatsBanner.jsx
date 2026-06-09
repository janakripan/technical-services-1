import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function CounterNumber({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    // Parse the numeric part
    const target = parseInt(value.replace(/,/g, ""), 10);
    if (isNaN(target)) {
      setCount(value);
      return;
    }

    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  // Format count to display commas if original value had them
  const formattedCount = count.toLocaleString();

  return (
    <span ref={ref} className="font-heading font-extrabold text-3xl sm:text-4xl md:text-[44px] text-white tracking-tight">
      {formattedCount}{suffix}
    </span>
  );
}

export default function StatsBanner() {
  const stats = [
    { label: "Lawns Mowed & Maintained", value: "10,000", suffix: "+" },
    { label: "Customer Satisfaction Rate", value: "95", suffix: "%" },
    { label: "Eco-Friendly Treatments Used", value: "100", suffix: "%" }
  ];

  return (
    <section className="relative h-[60vh] min-h-[450px] max-h-[700px] flex items-end pb-12 sm:pb-20 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?auto=format&fit=crop&q=80&w=2000" 
          alt="Man trimming a hedge" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay gradient at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#091a10]/95 via-[#091a10]/60 to-transparent"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:w-1/3 shrink-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-white font-heading leading-[1.1]">
            Our Impact<br/>in Numbers
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="md:w-2/3 flex flex-col sm:flex-row sm:items-end justify-between gap-8 sm:gap-4 w-full">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.label}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-start"
              >
                <p className="text-white/80 font-medium text-[11px] sm:text-[13px] mb-1">
                  {stat.label}
                </p>
                <CounterNumber value={stat.value} suffix={stat.suffix} />
              </motion.div>
              
              {/* Divider */}
              {index < stats.length - 1 && (
                <div className="h-14 w-px bg-white/20 hidden sm:block mb-2"></div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>

    </section>
  );
}
