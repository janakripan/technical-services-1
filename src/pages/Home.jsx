import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustedCompanies from "../components/TrustedCompanies";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import StatsBanner from "../components/StatsBanner";
import Contact from "../components/Contact";
import Blog from "../components/Blog";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white select-none selection:bg-accent selection:text-primary-dark">
      {/* Navigation */}
      <Header />
      
      {/* Core sections */}
      <main className="w-full">
        <Hero />
        <TrustedCompanies />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <StatsBanner />
        <Contact />
        <Blog />
        <Newsletter />
      </main>

      {/* Footer info blocks */}
      <Footer />
    </div>
  );
}
