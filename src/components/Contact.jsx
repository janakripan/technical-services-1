import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { contactInfo } from "../data/content";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d-\s]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Phone number is invalid";
    }
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for that field when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Contact Information */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-8 text-center lg:text-left"
        >
          <div>
            <span className="text-primary-light font-bold text-xs uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full inline-block">
              ✦ Get In Touch ✦
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-dark font-heading mt-4 leading-tight">
              Talk To Lawn Care Pros<br />Who Care About Your Yard!
            </h2>
            <p className="text-sm text-light-text max-w-lg mt-4 mx-auto lg:mx-0 leading-relaxed">
              Have questions about grass health, soil aeration, or weekly detailing rates? Connect with our landscaping specialists today.
            </p>
          </div>

          {/* Details list */}
          <div className="space-y-6 max-w-md mx-auto lg:mx-0">
            {/* Address */}
            <div className="flex gap-4 items-start text-left bg-slate-50 p-4.5 rounded-2xl border border-slate-100 hover:border-accent/40 transition-colors">
              <div className="p-3.5 bg-primary/10 rounded-xl text-primary-light">
                <FaMapMarkerAlt size={18} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-light-text">Our Address</h4>
                <p className="text-sm text-primary-dark font-semibold mt-1">{contactInfo.address}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-start text-left bg-slate-50 p-4.5 rounded-2xl border border-slate-100 hover:border-accent/40 transition-colors">
              <div className="p-3.5 bg-primary/10 rounded-xl text-primary-light">
                <FaPhoneAlt size={18} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-light-text">Call Us 24/7</h4>
                <p className="text-sm text-primary-dark font-semibold mt-1">{contactInfo.phone}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-start text-left bg-slate-50 p-4.5 rounded-2xl border border-slate-100 hover:border-accent/40 transition-colors">
              <div className="p-3.5 bg-primary/10 rounded-xl text-primary-light">
                <FaEnvelope size={18} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-light-text">Email Support</h4>
                <p className="text-sm text-primary-dark font-semibold mt-1">{contactInfo.email}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Consultation Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 bg-primary text-white p-8 md:p-10 rounded-[32px] shadow-2xl border border-primary-light/25 relative overflow-hidden"
        >
          {/* Subtle leaf overlay */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

          <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-accent mb-2">
            Book a Free Consultation
          </h3>
          <p className="text-xs text-white/70 mb-6 font-medium leading-relaxed">
            Fill in the details below and an expert will get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-wider text-white/85 mb-1.5">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`w-full bg-white/5 border px-4 py-3 rounded-xl text-sm text-white placeholder-white/45 focus:outline-none focus:ring-2 focus:ring-accent transition-all ${errors.name ? "border-red-400" : "border-white/15"}`}
              />
              {errors.name && <p className="text-red-400 text-[10px] font-bold mt-1">{errors.name}</p>}
            </div>

            {/* Email and Phone group */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-wider text-white/85 mb-1.5">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className={`w-full bg-white/5 border px-4 py-3 rounded-xl text-sm text-white placeholder-white/45 focus:outline-none focus:ring-2 focus:ring-accent transition-all ${errors.email ? "border-red-400" : "border-white/15"}`}
                />
                {errors.email && <p className="text-red-400 text-[10px] font-bold mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-wider text-white/85 mb-1.5">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className={`w-full bg-white/5 border px-4 py-3 rounded-xl text-sm text-white placeholder-white/45 focus:outline-none focus:ring-2 focus:ring-accent transition-all ${errors.phone ? "border-red-400" : "border-white/15"}`}
                />
                {errors.phone && <p className="text-red-400 text-[10px] font-bold mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Service Dropdown */}
            <div>
              <label htmlFor="service" className="block text-[10px] font-bold uppercase tracking-wider text-white/85 mb-1.5">Requested Service</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full bg-primary border px-4 py-3 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-accent transition-all ${errors.service ? "border-red-400" : "border-white/15"}`}
              >
                <option value="" disabled className="text-white/30">Select a service</option>
                <option value="trimming" className="text-primary-dark bg-white">Trimming & Pruning</option>
                <option value="soil" className="text-primary-dark bg-white">Soil Health & Treatment</option>
                <option value="aeration" className="text-primary-dark bg-white">Aeration & Overseeding</option>
                <option value="cleanup" className="text-primary-dark bg-white">Seasonal Cleanup</option>
                <option value="other" className="text-primary-dark bg-white">Other Landscaping</option>
              </select>
              {errors.service && <p className="text-red-400 text-[10px] font-bold mt-1">{errors.service}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-wider text-white/85 mb-1.5">Details/Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                placeholder="Describe your lawn layout and goals..."
                className={`w-full bg-white/5 border px-4 py-3 rounded-xl text-sm text-white placeholder-white/45 focus:outline-none focus:ring-2 focus:ring-accent transition-all ${errors.message ? "border-red-400" : "border-white/15"}`}
              />
              {errors.message && <p className="text-red-400 text-[10px] font-bold mt-1">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-accent hover:bg-accent-hover text-primary-dark font-extrabold font-heading text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors duration-300 mt-4 cursor-pointer"
            >
              Submit Consultation Request
            </motion.button>

          </form>

          {/* Success Banner */}
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="absolute inset-0 bg-primary/98 z-20 flex flex-col items-center justify-center p-8 text-center"
              >
                <FaCheckCircle className="text-accent text-5xl mb-4" />
                <h4 className="font-heading font-extrabold text-xl text-white mb-2">Request Submitted!</h4>
                <p className="text-xs text-white/70 max-w-xs leading-relaxed">
                  Thank you! Our lawn care experts will review your details and reach out shortly to coordinate your consultation.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

      </div>
    </section>
  );
}
