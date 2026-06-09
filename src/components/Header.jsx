import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaLeaf, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaInstagram, 
  FaFacebookF, 
  FaLinkedinIn,
  FaYoutube, 
  FaChevronDown, 
  FaBars, 
  FaTimes 
} from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { navigationLinks, contactInfo } from "../data/content";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full z-50 transition-all duration-300 absolute top-0 left-0 right-0"
    >
      {/* Top green contact strip */}
      <div className={`bg-[#0d6032] text-white text-[13px] py-2.5 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-2 transition-all duration-300 ${isSticky ? "h-0 py-0 overflow-hidden opacity-0" : "h-auto"}`}>
        <div className="flex flex-wrap justify-center md:justify-start gap-6 font-medium tracking-wide max-w-7xl mx-auto w-full px-4 lg:px-0">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <FaLocationDot className="text-white text-[14px]" /> {contactInfo.address}
            </span>
            <span className="flex items-center gap-2">
              <FaEnvelope className="text-white text-[14px]" /> {contactInfo.email}
            </span>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <span className="font-medium mr-1">Follow Us:</span>
            <a href={contactInfo.socials.facebook} className="w-6 h-6 rounded-full bg-[#bce964] text-[#0d6032] flex items-center justify-center hover:bg-white transition-colors"><FaFacebookF size={12} /></a>
            <a href={contactInfo.socials.linkedin} className="w-6 h-6 rounded-full bg-[#308151] hover:bg-[#bce964] hover:text-[#0d6032] flex items-center justify-center transition-colors"><FaLinkedinIn size={12} /></a>
            <a href={contactInfo.socials.youtube} className="w-6 h-6 rounded-full bg-[#308151] hover:bg-[#bce964] hover:text-[#0d6032] flex items-center justify-center transition-colors"><FaYoutube size={12} /></a>
            <a href={contactInfo.socials.twitter} className="w-6 h-6 rounded-full bg-[#308151] hover:bg-[#bce964] hover:text-[#0d6032] flex items-center justify-center transition-colors"><FaXTwitter size={12} /></a>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className={`w-full px-4 py-3 md:px-8 flex justify-center transition-all duration-300 ${isSticky ? "fixed top-0 left-0 right-0 bg-white shadow-md" : "bg-transparent"}`}>
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-0">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 text-[#1a2f23] font-bold text-2xl font-heading">
            <div className="p-2.5 bg-[#0d6032] rounded-full text-white">
              <FaLeaf size={20} />
            </div>
            <span className="tracking-tight font-extrabold">Lawnx</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 font-bold text-[15px] text-[#1a2f23]">
            {navigationLinks.map((link) => {
              // overriding names based on image: Home, About, Services v, Project, Our Blog, Contact
              let name = link.name;
              if (name === "About Us") name = "About";
              if (name === "Projects") name = "Project";
              if (name === "Blog") name = "Our Blog";

              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="relative py-2 cursor-pointer group"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <span className="hover:text-[#0d6032] transition-colors flex items-center gap-1.5">
                      {name} <FaChevronDown className="text-[10px]" />
                    </span>
                    
                    <AnimatePresence>
                      {isServicesDropdownOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-56 bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden py-2"
                        >
                          <a href="#services" className="block px-4 py-2 hover:bg-slate-50 hover:text-[#0d6032] transition-colors">Trimming & Pruning</a>
                          <a href="#services" className="block px-4 py-2 hover:bg-slate-50 hover:text-[#0d6032] transition-colors">Soil Health</a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="hover:text-[#0d6032] transition-colors py-2 relative group"
                >
                  {name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0d6032] group-hover:w-full transition-all duration-300"></span>
                </a>
              );
            })}
          </nav>

          {/* Call CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-[#bce964] group-hover:bg-[#aadd4a] flex items-center justify-center text-[#0d6032] transition-colors">
                <FaPhoneAlt size={16} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[13px] font-semibold text-gray-500 leading-tight">Call Now</span>
                <span className="text-[17px] font-heading font-extrabold text-[#1a2f23] tracking-tight">{contactInfo.phone}</span>
              </div>
            </a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-[#1a2f23]">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-white border-t border-slate-100 shadow-lg absolute left-0 right-0 top-full z-40 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navigationLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  <a 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-2 font-medium text-gray-600 hover:text-[#0d6032] transition-colors"
                  >
                    {link.name}
                  </a>
                </div>
              ))}
              <a 
                href={`tel:${contactInfo.phone}`}
                className="w-full py-3 bg-[#bce964] text-[#1a2f23] text-center font-heading font-extrabold rounded-xl hover:bg-[#aadd4a] transition-colors mt-2"
              >
                Call Now: {contactInfo.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
