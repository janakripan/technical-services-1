import React from "react";
import { 
  FaLeaf, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from "react-icons/fa";
import { contactInfo, navigationLinks, instagramPosts } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-primary-light/10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
        
        {/* Column 1: Info & Brand */}
        <div className="lg:col-span-3 space-y-5">
          <a href="#home" className="flex items-center gap-2 text-white font-bold text-xl md:text-2xl font-heading">
            <div className="p-2 bg-accent/20 rounded-lg text-accent">
              <FaLeaf />
            </div>
            <span className="tracking-tight text-white">Lawn<span className="text-accent font-extrabold">care</span></span>
          </a>
          <p className="text-xs text-white/75 leading-relaxed max-w-sm">
            At Lawn, we believe every yard deserves to be healthy, vibrant, and welcoming. Our specialists leverage premium organic treatments to sustain stunning turf all year round.
          </p>
          <div className="flex items-center gap-3.5 pt-2">
            <a 
              href={contactInfo.socials.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-accent hover:text-primary-dark transition-all duration-300 flex items-center justify-center text-xs"
            >
              <FaFacebookF />
            </a>
            <a 
              href={contactInfo.socials.twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-accent hover:text-primary-dark transition-all duration-300 flex items-center justify-center text-xs"
            >
              <FaTwitter />
            </a>
            <a 
              href={contactInfo.socials.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-accent hover:text-primary-dark transition-all duration-300 flex items-center justify-center text-xs"
            >
              <FaInstagram />
            </a>
            <a 
              href={contactInfo.socials.youtube} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-accent hover:text-primary-dark transition-all duration-300 flex items-center justify-center text-xs"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-heading font-extrabold text-sm text-accent uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-xs text-white/75 font-medium">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-accent transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-heading font-extrabold text-sm text-accent uppercase tracking-wider">
            Our Services
          </h4>
          <ul className="space-y-2.5 text-xs text-white/75 font-medium">
            <li>
              <a href="#services" className="hover:text-accent transition-colors flex items-center gap-1.5 group">
                <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Trimming & Pruning
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-accent transition-colors flex items-center gap-1.5 group">
                <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Soil Health & Fertilizer
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-accent transition-colors flex items-center gap-1.5 group">
                <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Aeration & Seeding
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-accent transition-colors flex items-center gap-1.5 group">
                <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Seasonal Cleanups
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-heading font-extrabold text-sm text-accent uppercase tracking-wider">
            Contact Support
          </h4>
          <ul className="space-y-3.5 text-xs text-white/75 font-medium">
            <li className="flex gap-2.5 items-start">
              <FaMapMarkerAlt className="text-accent text-[13px] shrink-0 mt-0.5" />
              <span>{contactInfo.address}</span>
            </li>
            <li className="flex gap-2.5 items-center">
              <FaPhoneAlt className="text-accent text-[12px] shrink-0" />
              <span>{contactInfo.phone}</span>
            </li>
            <li className="flex gap-2.5 items-center">
              <FaEnvelope className="text-accent text-[12px] shrink-0" />
              <span>{contactInfo.email}</span>
            </li>
          </ul>
        </div>

        {/* Column 5: Instagram Grid */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-heading font-extrabold text-sm text-accent uppercase tracking-wider">
            Instagram Feed
          </h4>
          <div className="grid grid-cols-3 gap-2">
            {instagramPosts.map((img, i) => (
              <a 
                key={i} 
                href={contactInfo.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="aspect-square rounded-lg overflow-hidden border border-white/5 hover:border-accent transition-colors group"
              >
                <img 
                  src={img} 
                  alt={`Instagram Post Preview ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Footer Bottom copyright bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/55 font-bold uppercase tracking-wider">
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Lawncare Maintenance Co. All Rights Reserved.
        </p>
        <div className="flex gap-6">
          <a href="#contact" className="hover:text-accent transition-colors">Privacy Policy</a>
          <a href="#contact" className="hover:text-accent transition-colors">Terms of Service</a>
        </div>
      </div>

    </footer>
  );
}
